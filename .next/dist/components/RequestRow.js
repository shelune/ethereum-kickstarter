'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/hieun/Desktop/solidity-dev/kickstart/components/RequestRow.js';


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      approving: false,
      finalizing: false
    }, _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _this$props, id, address, campaign, accounts;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, id = _this$props.id, address = _this$props.address;
              campaign = (0, _campaign2.default)(address);
              _context.next = 4;
              return _web2.default.eth.getAccounts();

            case 4:
              accounts = _context.sent;

              _this.setState({ approving: true });

              _context.next = 8;
              return campaign.methods.approveRequest(id).send({
                from: accounts[0]
              });

            case 8:

              _this.setState({ approving: false });

              _routes.Router.replaceRoute('/campaigns/' + _this.props.address + '/requests');

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var _this$props2, id, address, campaign, accounts;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$props2 = _this.props, id = _this$props2.id, address = _this$props2.address;
              campaign = (0, _campaign2.default)(address);
              _context2.next = 4;
              return _web2.default.eth.getAccounts();

            case 4:
              accounts = _context2.sent;

              _this.setState({ finalizing: true });

              _context2.next = 8;
              return campaign.methods.finalizeRequest(id).send({
                from: accounts[0]
              });

            case 8:

              _this.setState({ finalizing: false });
              _routes.Router.replaceRoute('/campaigns/' + _this.props.address + '/requests');

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          address = _props.address,
          approversCount = _props.approversCount;

      return _react2.default.createElement(Row, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, id + 1), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _web2.default.utils.fromWei(request.value, 'ether'), ' ETH'), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, request.recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, request.approvalCount, ' / ', approversCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, !request.complete && _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, loading: this.state.approving, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Approve')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, !request.complete && _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, loading: this.state.finalizing, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Finalize')));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiUm91dGVyIiwid2ViMyIsImdldENhbXBhaWduIiwiUmVxdWVzdFJvdyIsInN0YXRlIiwiYXBwcm92aW5nIiwiZmluYWxpemluZyIsIm9uQXBwcm92ZSIsInByb3BzIiwiaWQiLCJhZGRyZXNzIiwiY2FtcGFpZ24iLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwic2V0U3RhdGUiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJzZW5kIiwiZnJvbSIsInJlcGxhY2VSb3V0ZSIsIm9uRmluYWxpemUiLCJmaW5hbGl6ZVJlcXVlc3QiLCJSb3ciLCJDZWxsIiwicmVxdWVzdCIsImFwcHJvdmVyc0NvdW50IiwiY29tcGxldGUiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50IiwiYXBwcm92YWxDb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU87O0FBRWhCLEFBQVMsQUFBYzs7QUFDdkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBaUI7Ozs7Ozs7OztJLEFBRWxCOzs7Ozs7Ozs7Ozs7Ozs7b05BQ0osQTtpQkFBUSxBQUNLLEFBQ1g7a0JBRk0sQUFFTSxBO0FBRk4sQUFDTixhLEFBSUYscUZBQVksbUJBQUE7OENBQUE7O29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzRCQUNjLE1BRGQsQUFDbUIsT0FEbkIsQUFDRixpQkFERSxBQUNGLElBREUsQUFDRSxzQkFERixBQUNFLEFBQ047QUFGSSx5QkFFTyx3QkFGUCxBQUVPLEFBQVk7OEJBRm5CO3FCQUdhLGNBQUEsQUFBSyxJQUhsQixBQUdhLEFBQVM7O2lCQUExQjtBQUhJLGtDQUtWOztvQkFBQSxBQUFLLFNBQVMsRUFB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