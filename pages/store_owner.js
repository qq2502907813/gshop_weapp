"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),_get=function t(e,r,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,r);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0},_index=require("../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_api=require("../lib-app/api.js");function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Index=(_temp2=_class=function(t){function a(){var t,e,r;_classCallCheck(this,a);for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=r=_possibleConstructorReturn(this,(t=a.__proto__||Object.getPrototypeOf(a)).call.apply(t,[this].concat(o)))).$usedState=["config","store"],r.config={navigationBarTitleText:"团长信息"},r.state={store:null},r.$$refs=[],_possibleConstructorReturn(r,e)}return _inherits(a,_index.Component),_createClass(a,[{key:"_constructor",value:function(t){_get(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"_constructor",this).call(this,t)}},{key:"componentWillMount",value:function(){var t=this;_api.Api.launch(this.$router.params,function(){t.doInit()})}},{key:"doInit",value:function(){var e=this;_api.Api.process("store/current",{},function(t){e.setState({store:t.data})})}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};var t=this.config;return Object.assign(this.__state,{config:t}),this.__state}}]),a}(),_class.properties={},_class.$$events=[],_temp2);exports.default=Index,Component(require("../npm/@tarojs/taro-weapp/index.js").default.createComponent(Index,!0));