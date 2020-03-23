webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./actions/index.ts":
/*!**************************!*\
  !*** ./actions/index.ts ***!
  \**************************/
/*! exports provided: fetchPosts, fetchPost, addPost, fetchComments, addComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPosts", function() { return fetchPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPost", function() { return fetchPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchComments", function() { return fetchComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/action-types */ "./constants/action-types.ts");
/* harmony import */ var _api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/client */ "./api/client.ts");



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
var fetchPost = function fetchPost(postId) {
  return function _callee2(dispatch) {
    var post;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_api_client__WEBPACK_IMPORTED_MODULE_2__["getPost"])(postId));

          case 2:
            post = _context2.sent;
            return _context2.abrupt("return", dispatch({
              type: _constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_POST"],
              post: post
            }));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };
};
var addPost = function addPost(newPost) {
  return function _callee3(dispatch) {
    var post;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_api_client__WEBPACK_IMPORTED_MODULE_2__["createPost"])(newPost));

          case 2:
            post = _context3.sent;
            return _context3.abrupt("return", dispatch({
              type: _constants_action_types__WEBPACK_IMPORTED_MODULE_1__["ADD_POST"],
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
    var comments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_api_client__WEBPACK_IMPORTED_MODULE_2__["getComments"])());

          case 2:
            comments = _context4.sent;
            return _context4.abrupt("return", dispatch({
              type: _constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_COMMENTS"],
              comments: comments
            }));

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, null, Promise);
  };
};
var addComment = function addComment(newComment) {
  return function _callee5(dispatch) {
    var comment;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_api_client__WEBPACK_IMPORTED_MODULE_2__["createComment"])(newComment));

          case 2:
            comment = _context5.sent;
            return _context5.abrupt("return", dispatch({
              type: _constants_action_types__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT"],
              comment: comment
            }));

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, null, Promise);
  };
};

/***/ })

})
//# sourceMappingURL=index.js.9583dd7496e5aea289b4.hot-update.js.map