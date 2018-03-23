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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/hieun/Desktop/solidity-dev/kickstart/pages/campaigns/single.js?entry';


var CampaignSingle = function (_Component) {
  (0, _inherits3.default)(CampaignSingle, _Component);

  function CampaignSingle() {
    (0, _classCallCheck3.default)(this, CampaignSingle);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignSingle.__proto__ || (0, _getPrototypeOf2.default)(CampaignSingle)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignSingle, [{
    key: '_renderCards',
    value: function _renderCards() {
      var _props = this.props,
          balance = _props.balance,
          minContribution = _props.minContribution,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount,
          manager = _props.manager;

      var items = [{
        header: 'Campaign Balance',
        description: _web2.default.utils.fromWei(balance, 'ether'),
        meta: 'How much money this project currently has'
      }, {
        header: 'Manager',
        description: manager,
        meta: 'Address of the owner of this campaign',
        style: { overflowWrap: 'break-word' }
      }, {
        header: 'Requests Submitted',
        description: requestsCount,
        meta: 'Number of requests proposed'
      }, {
        header: 'Minimum Contribution',
        description: minContribution,
        meta: 'Minimum amount of Wei required for a contribution'
      }, {
        header: 'Contributors Count',
        description: approversCount,
        meta: 'Number of contributors in this project'
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'Campaign'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, this._renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'View Requests')))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;

                console.log('campaign data: ', summary);
                return _context.abrupt('return', {
                  minContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4],
                  address: props.query.address
                });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignSingle;
}(_react.Component);

exports.default = CampaignSingle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaW5nbGUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIkxheW91dCIsImdldENhbXBhaWduIiwiQ29udHJpYnV0ZUZvcm0iLCJMaW5rIiwid2ViMyIsIkNhbXBhaWduU2luZ2xlIiwicHJvcHMiLCJiYWxhbmNlIiwibWluQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwibWFuYWdlciIsIml0ZW1zIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsImZyb21XZWkiLCJtZXRhIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJfcmVuZGVyQ2FyZHMiLCJhZGRyZXNzIiwiY2FtcGFpZ24iLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFNOztBQUNyQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQVMsQUFBWTs7QUFFckIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVYOzs7Ozs7Ozs7OzttQ0FlVzttQkFDOEQsS0FEOUQsQUFDbUU7VUFEbkUsQUFDTixpQkFETSxBQUNOO1VBRE0sQUFDRyx5QkFESCxBQUNHO1VBREgsQUFDb0IsdUJBRHBCLEFBQ29CO1VBRHBCLEFBQ21DLHdCQURuQyxBQUNtQztVQURuQyxBQUNtRCxpQkFEbkQsQUFDbUQsQUFDaEU7O1VBQU07Z0JBQ0osQUFDVSxBQUNSO3FCQUFhLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUZsQyxBQUVlLEFBQTRCLEFBQ3pDO2NBSlUsQUFDWixBQUdRO0FBSFIsQUFDRSxPQUZVO2dCQU1aLEFBQ1UsQUFDUjtxQkFGRixBQUVlLEFBQ2I7Y0FIRixBQUdRLEFBQ047ZUFBTyxFQUFDLGNBVkUsQUFNWixBQUlTLEFBQWU7QUFKeEIsQUFDRTtnQkFLRixBQUNVLEFBQ1I7cUJBRkYsQUFFZSxBQUNiO2NBZlUsQUFZWixBQUdRO0FBSFIsQUFDRTtnQkFJRixBQUNVLEFBQ1I7cUJBRkYsQUFFZSxBQUNiO2NBcEJVLEFBaUJaLEFBR1E7QUFIUixBQUNFO2dCQUlGLEFBQ1UsQUFDUjtxQkFGRixBQUVlLEFBQ2I7Y0F6QkosQUFBYyxBQXNCWixBQUdRLEFBSVY7QUFQRSxBQUNFOzsyQ0FPRixBQUFDLHNCQUFELEFBQU0sU0FBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFERixBQUNFLEFBRUg7QUFGRztPQUFBOzs7OzZCQUlLLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsNkJBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNHO0FBREg7Y0FERixBQUNFLEFBQ0csQUFBSyxBQUVSLGlDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLDBDQUFlLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DO29CQUFwQztzQkFOTixBQUNFLEFBSUUsQUFDRSxBQUlKO0FBSkk7NEJBSUgsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFBRztBQUFIO0FBQUEseUJBQUcsQUFBQyx5Q0FBTyxTQUFSO29CQUFBO3NCQUFBO0FBQUE7U0FoQmYsQUFDRSxBQUVFLEFBVUUsQUFDRSxBQUNFLEFBQ0UsQUFBRyxBQVFoQjs7Ozs7MkdBM0U0QixBOzs7OzttQkFDckI7QSwyQkFBVyx3QkFBWSxNQUFBLEFBQU0sTSxBQUFsQixBQUF3Qjs7dUJBQ25CLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCLEE7O21CQUE5QztBLG1DQUNOOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxtQkFBWixBQUErQjs7bUNBRVosUUFEWixBQUNZLEFBQVEsQUFDekI7MkJBQVMsUUFGSixBQUVJLEFBQVEsQUFDakI7aUNBQWUsUUFIVixBQUdVLEFBQVEsQUFDdkI7a0NBQWdCLFFBSlgsQUFJVyxBQUFRLEFBQ3hCOzJCQUFTLFFBTEosQUFLSSxBQUFRLEFBQ2pCOzJCQUFTLE1BQUEsQUFBTSxNQUFNLEEsQUFOaEI7QUFBQSxBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTnVCLEEsQUErRTdCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNpbmdsZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGlldW4vRGVza3RvcC9zb2xpZGl0eS1kZXYva2lja3N0YXJ0In0=