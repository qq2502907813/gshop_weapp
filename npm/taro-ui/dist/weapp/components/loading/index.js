"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),_get=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},_index=require("../../../../../@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../../../../prop-types/index.js"),_index4=_interopRequireDefault(_index3),_component=require("../../common/component.js"),_component2=_interopRequireDefault(_component);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var AtLoading=(_temp2=_class=function(e){function a(){var e,t,n;_classCallCheck(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=_possibleConstructorReturn(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r)))).$usedState=["anonymousState__temp","anonymousState__temp2","anonymousState__temp3","anonymousState__temp4","color","size"],n.$$refs=[],_possibleConstructorReturn(n,t)}return _inherits(a,_component2.default),_createClass(a,[{key:"_constructor",value:function(e){_get(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"_constructor",this).call(this,e)}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};var e=this.__props,t=e.color,n=e.size,o={width:n+"px",height:n+"px"},r={border:"1px solid "+t,"border-color":t+" transparent transparent transparent"},i=Object.assign({},r,o),a=(0,_index.internal_inline_style)(o),s=(0,_index.internal_inline_style)(i),l=(0,_index.internal_inline_style)(i),u=(0,_index.internal_inline_style)(i);return Object.assign(this.__state,{anonymousState__temp:a,anonymousState__temp2:s,anonymousState__temp3:l,anonymousState__temp4:u}),this.__state}}]),a}(),_class.properties={color:{type:null,value:null},size:{type:null,value:null}},_class.$$events=[],_temp2);AtLoading.defaultProps={size:"18",color:"#fff"},AtLoading.propTypes={size:_index4.default.oneOfType([_index4.default.string,_index4.default.number]),color:_index4.default.oneOfType([_index4.default.string,_index4.default.number])},exports.default=AtLoading,Component(require("../../../../../@tarojs/taro-weapp/index.js").default.createComponent(AtLoading));