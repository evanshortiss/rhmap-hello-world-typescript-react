(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        return (React.createElement("footer", { className: 'header-footer-bg' },
            React.createElement("div", null,
                React.createElement("small", { className: 'right' }, "0.1.0"))));
    };
    return Header;
}(React.Component));
exports.default = Header;

},{"react":undefined}],2:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        return (React.createElement("header", { className: 'header-footer-bg' },
            React.createElement("div", { className: 'center' },
                React.createElement("h3", null,
                    "FeedHenry ",
                    React.createElement("small", null, "QuickStart - HTML5")))));
    };
    return Header;
}(React.Component));
exports.default = Header;

},{"react":undefined}],3:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var fh_js_sdk_1 = require("fh-js-sdk");
var SayHello = (function (_super) {
    __extends(SayHello, _super);
    function SayHello() {
        var _this = _super.call(this) || this;
        _this.state = {
            input: '',
            cloudResponse: ''
        };
        return _this;
    }
    SayHello.prototype.onCloudSuccess = function (res) {
        this.setState({
            cloudResponse: res.msg
        });
    };
    SayHello.prototype.onCloudFailure = function (msg, err) {
        alert("Cloud call failed with error - " + msg + ". Error data - " + JSON.stringify(err));
    };
    SayHello.prototype.sayHello = function () {
        var params = {
            // use the passed in route to make a call to the cloud
            path: this.props.cloudRoute,
            // pass the string input by a user to the cloud call
            data: { hello: this.state.input },
            method: 'post'
        };
        fh_js_sdk_1.cloud(params, this.onCloudSuccess.bind(this), this.onCloudFailure);
    };
    SayHello.prototype.onInputChange = function (e) {
        this.setState({
            input: e.target.value
        });
    };
    SayHello.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { id: 'count' },
            React.createElement("div", { id: 'formWrapper' },
                React.createElement("p", { id: 'description' }, "This is a basic Javascript App that can take in your name, send it to a cloud app and display the response."),
                React.createElement("br", null),
                React.createElement("div", { className: 'input-div' },
                    React.createElement("input", { onChange: function (e) { return _this.onInputChange(e); }, type: 'text', className: 'input-text', placeholder: 'Enter your name here...' })),
                React.createElement("br", null),
                React.createElement("button", { onClick: function () { return _this.sayHello(); }, type: 'button', className: 'say-hello-button' }, "Say Hello From The Cloud"),
                React.createElement("div", { id: 'cloudResponse', className: 'cloudResponse' }, this.state.cloudResponse))));
    };
    return SayHello;
}(React.Component));
exports.default = SayHello;

},{"fh-js-sdk":undefined,"react":undefined}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_dom_1 = require("react-dom");
var hello_1 = require("./views/hello");
// This removes a 300ms click delay that certain devices have in their WebView
// Details are here - https://github.com/ftlabs/fastclick
var fastclick = require("fastclick");
fastclick(document.body);
var container = document.getElementById('hello-world-app');
// render our application's only view in the specified HTML element
react_dom_1.render(React.createElement(hello_1.default, null), container);

},{"./views/hello":5,"fastclick":undefined,"react":undefined,"react-dom":undefined}],5:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var header_1 = require("../components/header");
var footer_1 = require("../components/footer");
var say_hello_1 = require("../components/say-hello");
var HelloView = (function (_super) {
    __extends(HelloView, _super);
    function HelloView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloView.prototype.render = function () {
        // Notice that our view is composed of 3 separate components, when state
        // changes occur inside one of these components only that specifc component
        // will be rendered again.
        return (React.createElement("div", null,
            React.createElement(header_1.default, null),
            React.createElement(say_hello_1.default, { cloudRoute: '/hello' }),
            React.createElement(footer_1.default, null)));
    };
    return HelloView;
}(React.Component));
exports.default = HelloView;

},{"../components/footer":1,"../components/header":2,"../components/say-hello":3,"react":undefined}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tcG9uZW50cy9mb290ZXIuanMiLCJzcmMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJzcmMvY29tcG9uZW50cy9zYXktaGVsbG8uanMiLCJzcmMvaW5kZXguanMiLCJzcmMvdmlld3MvaGVsbG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIEhlYWRlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEhlYWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgSGVhZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImZvb3RlclwiLCB7IGNsYXNzTmFtZTogJ2hlYWRlci1mb290ZXItYmcnIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNtYWxsXCIsIHsgY2xhc3NOYW1lOiAncmlnaHQnIH0sIFwiMC4xLjBcIikpKSk7XG4gICAgfTtcbiAgICByZXR1cm4gSGVhZGVyO1xufShSZWFjdC5Db21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEhlYWRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvb3Rlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIEhlYWRlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEhlYWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgSGVhZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImhlYWRlclwiLCB7IGNsYXNzTmFtZTogJ2hlYWRlci1mb290ZXItYmcnIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnY2VudGVyJyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIkZlZWRIZW5yeSBcIixcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNtYWxsXCIsIG51bGwsIFwiUXVpY2tTdGFydCAtIEhUTUw1XCIpKSkpKTtcbiAgICB9O1xuICAgIHJldHVybiBIZWFkZXI7XG59KFJlYWN0LkNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gSGVhZGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVhZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgZmhfanNfc2RrXzEgPSByZXF1aXJlKFwiZmgtanMtc2RrXCIpO1xudmFyIFNheUhlbGxvID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2F5SGVsbG8sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2F5SGVsbG8oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaW5wdXQ6ICcnLFxuICAgICAgICAgICAgY2xvdWRSZXNwb25zZTogJydcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTYXlIZWxsby5wcm90b3R5cGUub25DbG91ZFN1Y2Nlc3MgPSBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2xvdWRSZXNwb25zZTogcmVzLm1zZ1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNheUhlbGxvLnByb3RvdHlwZS5vbkNsb3VkRmFpbHVyZSA9IGZ1bmN0aW9uIChtc2csIGVycikge1xuICAgICAgICBhbGVydChcIkNsb3VkIGNhbGwgZmFpbGVkIHdpdGggZXJyb3IgLSBcIiArIG1zZyArIFwiLiBFcnJvciBkYXRhIC0gXCIgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAgICB9O1xuICAgIFNheUhlbGxvLnByb3RvdHlwZS5zYXlIZWxsbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgICAgIC8vIHVzZSB0aGUgcGFzc2VkIGluIHJvdXRlIHRvIG1ha2UgYSBjYWxsIHRvIHRoZSBjbG91ZFxuICAgICAgICAgICAgcGF0aDogdGhpcy5wcm9wcy5jbG91ZFJvdXRlLFxuICAgICAgICAgICAgLy8gcGFzcyB0aGUgc3RyaW5nIGlucHV0IGJ5IGEgdXNlciB0byB0aGUgY2xvdWQgY2FsbFxuICAgICAgICAgICAgZGF0YTogeyBoZWxsbzogdGhpcy5zdGF0ZS5pbnB1dCB9LFxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCdcbiAgICAgICAgfTtcbiAgICAgICAgZmhfanNfc2RrXzEuY2xvdWQocGFyYW1zLCB0aGlzLm9uQ2xvdWRTdWNjZXNzLmJpbmQodGhpcyksIHRoaXMub25DbG91ZEZhaWx1cmUpO1xuICAgIH07XG4gICAgU2F5SGVsbG8ucHJvdG90eXBlLm9uSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlucHV0OiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNheUhlbGxvLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGlkOiAnY291bnQnIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6ICdmb3JtV3JhcHBlcicgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IGlkOiAnZGVzY3JpcHRpb24nIH0sIFwiVGhpcyBpcyBhIGJhc2ljIEphdmFzY3JpcHQgQXBwIHRoYXQgY2FuIHRha2UgaW4geW91ciBuYW1lLCBzZW5kIGl0IHRvIGEgY2xvdWQgYXBwIGFuZCBkaXNwbGF5IHRoZSByZXNwb25zZS5cIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdpbnB1dC1kaXYnIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gX3RoaXMub25JbnB1dENoYW5nZShlKTsgfSwgdHlwZTogJ3RleHQnLCBjbGFzc05hbWU6ICdpbnB1dC10ZXh0JywgcGxhY2Vob2xkZXI6ICdFbnRlciB5b3VyIG5hbWUgaGVyZS4uLicgfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuc2F5SGVsbG8oKTsgfSwgdHlwZTogJ2J1dHRvbicsIGNsYXNzTmFtZTogJ3NheS1oZWxsby1idXR0b24nIH0sIFwiU2F5IEhlbGxvIEZyb20gVGhlIENsb3VkXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogJ2Nsb3VkUmVzcG9uc2UnLCBjbGFzc05hbWU6ICdjbG91ZFJlc3BvbnNlJyB9LCB0aGlzLnN0YXRlLmNsb3VkUmVzcG9uc2UpKSkpO1xuICAgIH07XG4gICAgcmV0dXJuIFNheUhlbGxvO1xufShSZWFjdC5Db21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNheUhlbGxvO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2F5LWhlbGxvLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIHJlYWN0X2RvbV8xID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTtcbnZhciBoZWxsb18xID0gcmVxdWlyZShcIi4vdmlld3MvaGVsbG9cIik7XG4vLyBUaGlzIHJlbW92ZXMgYSAzMDBtcyBjbGljayBkZWxheSB0aGF0IGNlcnRhaW4gZGV2aWNlcyBoYXZlIGluIHRoZWlyIFdlYlZpZXdcbi8vIERldGFpbHMgYXJlIGhlcmUgLSBodHRwczovL2dpdGh1Yi5jb20vZnRsYWJzL2Zhc3RjbGlja1xudmFyIGZhc3RjbGljayA9IHJlcXVpcmUoXCJmYXN0Y2xpY2tcIik7XG5mYXN0Y2xpY2soZG9jdW1lbnQuYm9keSk7XG52YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlbGxvLXdvcmxkLWFwcCcpO1xuLy8gcmVuZGVyIG91ciBhcHBsaWNhdGlvbidzIG9ubHkgdmlldyBpbiB0aGUgc3BlY2lmaWVkIEhUTUwgZWxlbWVudFxucmVhY3RfZG9tXzEucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoaGVsbG9fMS5kZWZhdWx0LCBudWxsKSwgY29udGFpbmVyKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgaGVhZGVyXzEgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIik7XG52YXIgZm9vdGVyXzEgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50cy9mb290ZXJcIik7XG52YXIgc2F5X2hlbGxvXzEgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50cy9zYXktaGVsbG9cIik7XG52YXIgSGVsbG9WaWV3ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSGVsbG9WaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEhlbGxvVmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBIZWxsb1ZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gTm90aWNlIHRoYXQgb3VyIHZpZXcgaXMgY29tcG9zZWQgb2YgMyBzZXBhcmF0ZSBjb21wb25lbnRzLCB3aGVuIHN0YXRlXG4gICAgICAgIC8vIGNoYW5nZXMgb2NjdXIgaW5zaWRlIG9uZSBvZiB0aGVzZSBjb21wb25lbnRzIG9ubHkgdGhhdCBzcGVjaWZjIGNvbXBvbmVudFxuICAgICAgICAvLyB3aWxsIGJlIHJlbmRlcmVkIGFnYWluLlxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoaGVhZGVyXzEuZGVmYXVsdCwgbnVsbCksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KHNheV9oZWxsb18xLmRlZmF1bHQsIHsgY2xvdWRSb3V0ZTogJy9oZWxsbycgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KGZvb3Rlcl8xLmRlZmF1bHQsIG51bGwpKSk7XG4gICAgfTtcbiAgICByZXR1cm4gSGVsbG9WaWV3O1xufShSZWFjdC5Db21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEhlbGxvVmlldztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlbGxvLmpzLm1hcCJdfQ==
