webpackHotUpdate("static\\development\\pages\\posts\\new.js",{

/***/ "./actions/index.ts":
/*!**************************!*\
  !*** ./actions/index.ts ***!
  \**************************/
/*! exports provided: addPost, fetchPosts, fetchPost, fetchComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPosts", function() { return fetchPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPost", function() { return fetchPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchComments", function() { return fetchComments; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/action-types */ "./constants/action-types.ts");
/* harmony import */ var _api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/client */ "./api/client.ts");



var addPost = function addPost(newPost) {
  return function _callee(dispatch) {
    var post;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_api_client__WEBPACK_IMPORTED_MODULE_2__["createPost"])(newPost));

          case 2:
            post = _context.sent;
            return _context.abrupt("return", dispatch({
              type: _constants_action_types__WEBPACK_IMPORTED_MODULE_1__["ADD_POST"],
              post: post
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };
};
var fetchPosts = function fetchPosts() {
  return function _callee2(dispatch) {
    var posts;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_api_client__WEBPACK_IMPORTED_MODULE_2__["getPosts"])());

          case 2:
            posts = _context2.sent;
            return _context2.abrupt("return", dispatch({
              type: _constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_POSTS"],
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
var fetchPost = function fetchPost(postId) {
  return function _callee3(dispatch) {
    var post;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_api_client__WEBPACK_IMPORTED_MODULE_2__["getPost"])(postId));

          case 2:
            post = _context3.sent;
            return _context3.abrupt("return", dispatch({
              type: FETCH_POST,
              post: post
            }));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, null, Promise);
  };
};
var fetchComments = function fetchComments() {
  return function _callee4(dispatch) {
    var posts;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_api_client__WEBPACK_IMPORTED_MODULE_2__["getComments"])());

          case 2:
            posts = _context4.sent;
            return _context4.abrupt("return", dispatch({
              type: _constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_COMMENTS"],
              posts: posts
            }));

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, null, Promise);
  };
};

/***/ })

})
//# sourceMappingURL=new.js.419b90c3a0c9c7a55c78.hot-update.js.map