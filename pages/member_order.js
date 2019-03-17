"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},_createClass=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),_get=function t(e,n,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},_index=require("../npm/@tarojs/taro-weapp/index.js"),_api=require("../lib-app/api.js"),_list=require("../lib/list.js"),_constant=require("../config-app/constant.js");function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var list=new _list.List("member_order/list"),tabs=[{title:"全部",value:0},{title:_constant.OrderStatus.WAIT_SIGN.name,value:_constant.OrderStatus.WAIT_SIGN.value},{title:_constant.OrderStatus.WAIT_PAY.name,value:_constant.OrderStatus.WAIT_PAY.value}],Index=(_temp2=_class=function(t){function a(){var t,e,n;_classCallCheck(this,a);for(var o=arguments.length,r=Array(o),s=0;s<o;s++)r[s]=arguments[s];return(e=n=_possibleConstructorReturn(this,(t=a.__proto__||Object.getPrototypeOf(a)).call.apply(t,[this].concat(r)))).$usedState=["config","tabs","tabIndex","status","records","empty","loading","noMore"],n.config={navigationBarTitleText:"我的订单"},n.state=_extends({},list.getDataMap(),{tabIndex:0,status:0}),n.qrcode=null,n.$$refs=[],_possibleConstructorReturn(n,e)}return _inherits(a,_index.Component),_createClass(a,[{key:"_constructor",value:function(t){_get(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"_constructor",this).call(this,t)}},{key:"componentWillMount",value:function(){var t=this;if(list.setContext(this),this.$router.params.status){var e=parseInt(this.$router.params.status);this.state.status=e,this.setState({status:e})}_api.Api.launch(this.$router.params,function(){t.doList()})}},{key:"doList",value:function(t){t=t||1,list.setParam("status",this.state.status).fetch(t)}},{key:"doShowQrcode",value:function(t){this.qrcode.show(t)}},{key:"onRefresh",value:function(){this.doList()}},{key:"onReachBottom",value:function(){this.doList(list.getPage()+1)}},{key:"_createData",value:function(){var e=this;this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};var t=this.config;return this.anonymousFunc0=function(t){e.setState({tabIndex:t,status:tabs[t].value},function(){list.reset(function(){return e.doList(1)})})},this.anonymousFunc1=function(t){return e.qrcode=t},Object.assign(this.__state,{config:t,tabs:tabs}),this.__state}},{key:"anonymousFunc0",value:function(t){}},{key:"anonymousFunc1",value:function(t){}}]),a}(),_class.properties={},_class.$$events=["anonymousFunc0","doShowQrcode","onRefresh","anonymousFunc1"],_temp2);exports.default=Index,Component(require("../npm/@tarojs/taro-weapp/index.js").default.createComponent(Index,!0));