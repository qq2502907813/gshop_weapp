"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),_get=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,o)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(o):void 0},_index=require("../../../../../@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../../../../prop-types/index.js"),_index4=_interopRequireDefault(_index3),_index5=require("../../../../../classnames/index.js"),_index6=_interopRequireDefault(_index5),_component=require("../../common/component.js"),_component2=_interopRequireDefault(_component);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var AtRadio=(_temp2=_class=function(e){function i(){var e,t,n;_classCallCheck(this,i);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=n=_possibleConstructorReturn(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(r)))).$usedState=["anonymousState__temp","anonymousState__temp2","loopArray0","options","__fn_onClick","customStyle","className","value"],n.$$refs=[],_possibleConstructorReturn(n,t)}return _inherits(i,_component2.default),_createClass(i,[{key:"_constructor",value:function(e){_get(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"_constructor",this).call(this,e)}},{key:"handleClick",value:function(e){e.disabled||this.__triggerPropsFn("onClick",[null].concat([e.value].concat(Array.prototype.slice.call(arguments))))}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};var e=this.__props,t=e.customStyle,n=e.className,o=e.options,r=e.value,a=(0,_index6.default)("at-radio",n),i=(0,_index.internal_inline_style)(t),l=o.map(function(e){return e={$original:(0,_index.internal_get_original)(e)},{$loopState__temp4:(0,_index6.default)({"at-radio__option":!0,"at-radio__option--disabled":e.$original.disabled}),$loopState__temp6:(0,_index6.default)({"at-radio__icon":!0,"at-radio__icon--checked":r===e.$original.value}),$original:e.$original}});return Object.assign(this.__state,{anonymousState__temp:a,anonymousState__temp2:i,loopArray0:l,options:o}),this.__state}}]),i}(),_class.properties={__fn_onClick:{type:null,value:null},customStyle:{type:null,value:null},className:{type:null,value:null},options:{type:null,value:null},value:{type:null,value:null}},_class.$$events=["handleClick"],_temp2);AtRadio.defaultProps={customStyle:"",className:"",value:"",options:[],onClick:function(){}},AtRadio.propTypes={customStyle:_index4.default.oneOfType([_index4.default.object,_index4.default.string]),className:_index4.default.oneOfType([_index4.default.array,_index4.default.string]),value:_index4.default.string,options:_index4.default.array,onClick:_index4.default.func},exports.default=AtRadio,Component(require("../../../../../@tarojs/taro-weapp/index.js").default.createComponent(AtRadio));