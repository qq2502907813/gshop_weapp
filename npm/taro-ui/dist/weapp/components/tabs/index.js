"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function l(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}}(),_get=function e(t,n,l){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,n);if(void 0===a){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,l)}if("value"in a)return a.value;var o=a.get;return void 0!==o?o.call(l):void 0},_index=require("../../../../../@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../../../../prop-types/index.js"),_index4=_interopRequireDefault(_index3),_index5=require("../../../../../classnames/index.js"),_index6=_interopRequireDefault(_index5),_utils=require("../../common/utils.js"),_component=require("../../common/component.js"),_component2=_interopRequireDefault(_component);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var ENV=_index2.default.getEnv(),AtTabs=(_temp2=_class=function(e){function o(){var e,t,l;_classCallCheck(this,o);for(var n=arguments.length,a=Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=l=_possibleConstructorReturn(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(a)))).$usedState=["anonymousState__temp","anonymousState__temp2","anonymousState__temp3","anonymousState__temp4","loopArray0","tabList","rootCls","scroll","tabId","headerCls","scrollX","scrollY","scrollLeft","scrollTop","scrollIntoView","isTest","__fn_onClick","swipeable","tabDirection","current","customStyle","className","height","animated","children"],l.updateState=function(e){if(l.props.scroll)switch(ENV){case _index2.default.ENV_TYPE.WEAPP:case _index2.default.ENV_TYPE.ALIPAY:l.setState({scrollIntoView:"tab"+(e-1)});break;case _index2.default.ENV_TYPE.WEB:var t=Math.max(e-1,0),n=l.tabHeaderRef.childNodes[t];l.setState({scrollTop:n.offsetTop,scrollLeft:n.offsetLeft});break;default:console.warn("AtTab 组件在该环境还未适配")}},l.$$refs=[],_possibleConstructorReturn(l,t)}return _inherits(o,_component2.default),_createClass(o,[{key:"_constructor",value:function(){_get(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"_constructor",this).apply(this,arguments),this.state={scrollLeft:0,scrollTop:0,scrollIntoView:""},this.tabId=this.props.isTest?"tabs-AOTU2018":(0,_utils.uuid)(),this.touchDot=0,this.interval=null,this.time=0,this.isMoving=!1}},{key:"handleClick",value:function(){this.__triggerPropsFn("onClick",[null].concat([].concat(Array.prototype.slice.call(arguments))))}},{key:"handleTouchStart",value:function(e){var t=this,n=this.props,l=n.swipeable,a=n.tabDirection;l&&"vertical"!==a&&(this.touchDot=e.touches[0].pageX,this.interval=setInterval(function(){t.time++},100))}},{key:"handleTouchMove",value:function(e){var t=this.props,n=t.swipeable,l=t.tabDirection;if(n&&"vertical"!==l){var a=this.state.current,i=e.touches[0].pageX-this.touchDot,o=this.props.tabList.length;!this.isMoving&&this.time<10&&(a+1<o&&i<=-40?(this.isMoving=!0,this.handleClick(a+1)):0<=a-1&&40<=i&&(this.isMoving=!0,this.handleClick(a-1)))}}},{key:"handleTouchEnd",value:function(){var e=this.props,t=e.swipeable,n=e.tabDirection;t&&"vertical"!==n&&(clearInterval(this.interval),this.time=0,this.isMoving=!1)}},{key:"componentWillReceiveProps",value:function(e){e.scroll!==this.props.scroll&&this.getTabHeaderRef(),e.current!==this.props.current&&this.updateState(e.current)}},{key:"getTabHeaderRef",value:function(){ENV===_index2.default.ENV_TYPE.WEB&&(this.tabHeaderRef=document.getElementById(this.tabId))}},{key:"componentDidMount",value:function(){this.getTabHeaderRef()}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};var e=this.tabId,t=this.__props,n=t.customStyle,l=t.className,a=t.height,i=t.tabDirection,o=t.animated,r=t.tabList,s=t.scroll,u=t.current,c=this.__state,_=(c.scrollLeft,c.scrollTop,c.scrollIntoView,{height:a}),p={height:"vertical"===i?100*r.length+"%":"1PX",width:"horizontal"===i?100*r.length+"%":"1PX"},d={},h="translate3d(0px, -"+100*u+"%, 0px)";"horizontal"===i&&(h="translate3d(-"+100*u+"%, 0px, 0px)"),Object.assign(d,{transform:h,"-webkit-transform":h}),o||(d.transition="unset");var f=(0,_index6.default)({"at-tabs":!0,"at-tabs--vertical":"vertical"===i},l),b=(0,_index6.default)({"at-tabs__header":!0,"at-tabs__header--scroll":s}),y="horizontal"===i,v="vertical"===i,m=(0,_index.internal_inline_style)(this.mergeStyle(_,n)),x=s?(0,_index.internal_inline_style)(_):null,g=(0,_index.internal_inline_style)(this.mergeStyle(d,_)),T=(0,_index.internal_inline_style)(p),w=r.map(function(e,t){return e={$original:(0,_index.internal_get_original)(e)},{itemCls:(0,_index6.default)({"at-tabs__item":!0,"at-tabs__item--active":u===t}),$original:e.$original}});return Object.assign(this.__state,{anonymousState__temp:m,anonymousState__temp2:x,anonymousState__temp3:g,anonymousState__temp4:T,loopArray0:w,tabList:r,rootCls:f,scroll:s,tabId:e,headerCls:b,scrollX:y,scrollY:v}),this.__state}}]),o}(),_class.properties={isTest:{type:null,value:null},scroll:{type:null,value:null},__fn_onClick:{type:null,value:null},swipeable:{type:null,value:null},tabDirection:{type:null,value:null},tabList:{type:null,value:null},current:{type:null,value:null},customStyle:{type:null,value:null},className:{type:null,value:null},height:{type:null,value:null},animated:{type:null,value:null}},_class.$$events=["handleClick","handleTouchStart","handleTouchEnd","handleTouchMove"],_temp2);AtTabs.defaultProps={isTest:!1,customStyle:"",className:"",tabDirection:"horizontal",height:"",current:0,swipeable:!0,scroll:!1,animated:!0,tabList:[],onClick:function(){}},AtTabs.propTypes={customStyle:_index4.default.oneOfType([_index4.default.object,_index4.default.string]),className:_index4.default.oneOfType([_index4.default.array,_index4.default.string]),isTest:_index4.default.bool,height:_index4.default.string,tabDirection:_index4.default.oneOf(["horizontal","vertical"]),current:_index4.default.number,swipeable:_index4.default.bool,scroll:_index4.default.bool,animated:_index4.default.bool,tabList:_index4.default.array,onClick:_index4.default.func},exports.default=AtTabs,Component(require("../../../../../@tarojs/taro-weapp/index.js").default.createComponent(AtTabs));