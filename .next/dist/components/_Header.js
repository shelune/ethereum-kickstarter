'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/hieun/Desktop/solidity-dev/kickstart/components/_Header.js';


var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);

    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: '10px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement('a', { className: 'item', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, 'Kick Start')), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, 'Campaigns'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('a', { className: 'item', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, 'Add'))));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvX0hlYWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJMaW5rIiwiUm91dGVyIiwiSGVhZGVyIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQVMsQUFBTSxBQUFjOzs7Ozs7O0lBRXZCLEE7Ozs7Ozs7Ozs7OzZCQUNLLEFBQ1A7NkJBQ0UsQUFBQyx1Q0FBSyxPQUFPLEVBQUMsV0FBZCxBQUFhLEFBQVk7b0JBQXpCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO29CQUFiO3NCQUFBO0FBQUE7U0FGSixBQUNFLEFBQ0UsQUFHRixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxVQUFYLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBSUEsOEJBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWE7b0JBQWI7c0JBQUE7QUFBQTtTQVpSLEFBQ0UsQUFLRSxBQUtFLEFBQ0UsQUFLVDs7Ozs7QUFuQmtCLEEsQUFzQnJCOztrQkFBQSxBQUFlIiwiZmlsZSI6Il9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hpZXVuL0Rlc2t0b3Avc29saWRpdHktZGV2L2tpY2tzdGFydCJ9