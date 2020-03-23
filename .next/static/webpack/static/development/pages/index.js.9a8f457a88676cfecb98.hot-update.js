webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./actions/index.ts":
/*!**************************!*\
  !*** ./actions/index.ts ***!
  \**************************/
/*! exports provided: addPost, fetchPosts, fetchComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPosts", function() { return fetchPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchComments", function() { return fetchComments; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/action-types */ "./constants/action-types.ts");
/* harmony import */ var _api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/client */ "./api/client.ts");



var addPost = function addPost(newPost) {
  return function (dispatch) {
    var post = Object(_api_client__WEBPACK_IMPORTED_MODULE_2__["createPost"])(newPost);
    debugger;
    return dispatch({
      type: _constants_action_types__WEBPACK_IMPORTED_MODULE_1__["ADD_POST"],
      post: post
    });
  };
};
var fetchPosts = function fetchPosts() {
  return function _callee(dispatch) {
    var posts;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_api_client__WEBPACK_IMPORTED_MODULE_2__["getPosts"])());

          case 2:
            posts = _context.sent;
            return _context.abrupt("return", dispatch({
              type: _constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_POSTS"],
              posts: posts
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };
};
var fetchComments = function fetchComments() {
  return function _callee2(dispatch) {
    var posts;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_api_client__WEBPACK_IMPORTED_MODULE_2__["getComments"])());

          case 2:
            posts = _context2.sent;
            return _context2.abrupt("return", dispatch({
              type: _constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_COMMENTS"],
              posts: posts
            }));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };
};

/***/ })

})
//# sourceMappingURL=index.js.9a8f457a88676cfecb98.hot-update.js.map