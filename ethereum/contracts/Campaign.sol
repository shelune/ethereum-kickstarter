pragma solidity ^0.4.17;

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        mapping(address => bool) approvals;
        uint approvalCount;
    }
    
    address public manager;
    uint public minContribution;
    Request[] public requests;
    mapping(address => bool) public approvers;
    uint public approversCount;
    
    modifier restrictedToManager() {
        require(msg.sender == manager);
        _;
    }
    
    function Campaign(uint _minContribution, address _manager) public {
        manager = _manager;
        minContribution = _minContribution;
    }

    function getSummary() public view returns (
        uint, uint, uint, uint, address
    ) {
        return (
            minContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
    
    function contribute() public payable {
        require(msg.value >= minContribution);
        if (!approvers[msg.sender]) {
            approvers[msg.sender] = true;
            approversCount++;
        }
    }
    
    function createRequest(string _description, uint _value, address _recipient) public restrictedToManager {
        Request memory newRequest = Request({
            description: _description,
            value: _value,
            recipient: _recipient,
            complete: false,
            approvalCount: 0
        });
        
        requests.push(newRequest);
    }
    
    function approveRequest(uint _index) public {
        Request storage req = requests[_index];
        
        require(approvers[msg.sender]);
        require(!req.approvals[msg.sender]);
        
        req.approvals[msg.sender] = true;
        req.approvalCount++;
    }
    
    function finalizeRequest(uint _index) public restrictedToManager {
        Request storage req = requests[_index];
        require(!req.complete);
        require(req.approvalCount > (approversCount / 2));
        
        req.recipient.transfer(req.value);
        req.complete = true;
    }
}

contract CampaignFactory {
    address[] public deployedCampaigns;
    
    function createCampaign(uint _minContribution) public {
        address newCampaign = new Campaign(_minContribution, msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}