"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CodeQrcode=exports.CodeBarcode=void 0;var _index=require("../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var barcode=require("./code/barcode.js"),qrcode=require("./code/qrcode.js");function convert_length(e){return Math.round(_index2.default.getSystemInfoSync().windowWidth*e/750)}var CodeBarcode=function(e,o,r,t,d){barcode.code128(_index2.default.createCanvasContext(e,d),o,convert_length(r),convert_length(t))},CodeQrcode=function(e,o,r,t,d){qrcode.api.draw(o,{ctx:_index2.default.createCanvasContext(e,d),width:convert_length(r),height:convert_length(t)})};exports.CodeBarcode=CodeBarcode,exports.CodeQrcode=CodeQrcode;