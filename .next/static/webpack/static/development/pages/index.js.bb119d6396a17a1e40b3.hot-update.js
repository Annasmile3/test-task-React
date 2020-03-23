webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./reducers/index.ts":
/*!***************************!*\
  !*** ./reducers/index.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/action-types */ "./constants/action-types.ts");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var postStore = function postStore() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    posts: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants_action_types__WEBPACK_IMPORTED_MODULE_2__["ADD_POST"]:
      return Object.assign({}, state, {
        posts: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.posts), [action.post])
      });

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_POSTS"]:
      return _objectSpread({}, state, {
        posts: action.posts
      });

    default:
      return state;
  }
};

var commentStore = function commentStore() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    comments: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants_action_types__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT"]:
      return Object.assign({}, state, {
        comments: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.comments), [action.comment])
      });

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_COMMENTS"]:
      return _objectSpread({}, state, {
        comments: action.comments
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
  postStore: postStore,
  commentStore: commentStore
}));

/***/ })

})
//# sourceMappingURL=index.js.bb119d6396a17a1e40b3.hot-update.js.map