"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports.default=configStore;var _redux=require("../npm/redux/lib/redux.js"),_index=require("../npm/redux-thunk/lib/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../reducers/index.js"),_index4=_interopRequireDefault(_index3);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var composeEnhancers="object"===("undefined"==typeof window?"undefined":_typeof(window))&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):_redux.compose,middlewares=[_index2.default],enhancer=composeEnhancers(_redux.applyMiddleware.apply(void 0,middlewares)),store=(0,_redux.createStore)(_index4.default,enhancer);function configStore(){return store}