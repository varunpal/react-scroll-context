'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollContext = function (_Component) {
    _inherits(ScrollContext, _Component);

    function ScrollContext(props) {
        _classCallCheck(this, ScrollContext);

        var _this = _possibleConstructorReturn(this, (ScrollContext.__proto__ || Object.getPrototypeOf(ScrollContext)).call(this, props));

        _this.disableBodyScroll = function () {
            var body = window.document.body;
            var margin = window.innerWidth - body.clientWidth;
            body.style.marginRight = margin + 'px';
            body.style.overflow = 'hidden';
        };

        _this.enableBodyScroll = function () {
            var body = window.document.body;
            body.style.marginRight = '0px';
            body.style.overflow = 'auto';
        };

        _this.checkScroll(_this.props.enable);
        return _this;
    }

    _createClass(ScrollContext, [{
        key: 'checkScroll',
        value: function checkScroll(isEnabled) {
            if (typeof window !== 'undefined') {
                if (isEnabled === true) {
                    this.disableBodyScroll();
                } else if (isEnabled === false) {
                    this.enableBodyScroll();
                }
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.checkScroll(nextProps.enable);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.enableBodyScroll();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                styles = _props.styles,
                children = _props.children,
                enable = _props.enable;

            return _react2.default.createElement(
                'div',
                {
                    onMouseOver: function onMouseOver() {
                        if (typeof enable === 'boolean') {
                            return;
                        }
                        _this2.disableBodyScroll();
                    },
                    onMouseOut: function onMouseOut(e) {
                        if (typeof enable === 'boolean' || e.currentTarget.contains(e.relatedTarget)) {
                            return;
                        }
                        _this2.enableBodyScroll();
                    },
                    className: styles
                },
                children
            );
        }
    }]);

    return ScrollContext;
}(_react.Component);

exports.default = ScrollContext;