webpackHotUpdate("static\\development\\pages\\posts\\[id].js",{

/***/ "./pages/posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/index */ "./store/index.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions */ "./actions/index.ts");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/MyLayout */ "./components/MyLayout.tsx");



var _jsxFileName = "D:\\test_tasks\\test-task-React\\pages\\posts\\[id].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  list-style-image: url('https://img.icons8.com/officel/16/000000/user.png');\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  width: 90%;\n  padding: 5px 10px;\n  background-color: #e6e6e6;\n  border-radius: 15px;\n  border: none;\n  outline: none;\n\n  .post-photo {\n    width: 50%;\n    margin-right: 5%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  margin: 30px 0 30px 15px;\n\n  .post-photo {\n    width: 50%;\n    margin-right: 5%;\n  }\n\n  p {\n    font-family: serif;\n    color: grey;\n  }\n  \n  form {\n    position: relative;\n\n    button {\n      position: absolute;\n      top: 4px;\n      right: 10%;\n      background-color: #e6e6e6;\n      border: none;\n      outline: none;\n      cursor: pointer;\n    }\n  }\n\n  @media (max-width: 768px) {\n    flex-wrap: wrap;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var PostDetails = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].section(_templateObject());
var CommentInput = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].input(_templateObject2());
var CommentsList = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].ul(_templateObject3());
;

var Post = function Post(props) {
  var comments = props.comments;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      comment = _useState[0],
      setComment = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(comments),
      commentList = _useState2[0],
      setComments = _useState2[1];

  var handleInputChange = function handleInputChange(_ref) {
    var target = _ref.target;
    setComment(target.value);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    if (comment.trim() !== '') {
      Object(_actions__WEBPACK_IMPORTED_MODULE_6__["addComment"])({
        body: comment,
        postId: props.post.id
      });
      setComment('');
      setComments([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(commentList), [{
        body: comment,
        postId: props.post.id
      }]));
    }
  };

  var _props$post = props.post,
      title = _props$post.title,
      body = _props$post.body;
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(PostDetails, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("img", {
    className: "post-photo",
    alt: "laptop",
    src: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, body), __jsx("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(CommentInput, {
    type: "text",
    value: comment,
    placeholder: "Comment...",
    onChange: handleInputChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Add")), __jsx(CommentsList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, commentList.map(function (item) {
    return __jsx("li", {
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, item.body);
  })))));
};

Post.getInitialProps = function _callee(ctx) {
  var id, post, comments, filteredcomments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = ctx.query.id;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(ctx.store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_6__["fetchPost"])(id)));

        case 3:
          post = _context.sent;
          _context.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(ctx.store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_6__["fetchComments"])()));

        case 6:
          comments = _context.sent;
          filteredcomments = comments.comments.filter(function (comment) {
            return comment.postId === +id;
          });
          return _context.abrupt("return", {
            post: post.post,
            comments: filteredcomments
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_store_index__WEBPACK_IMPORTED_MODULE_4__["nextConnect"])(function (state) {
  return state;
})(Post));

/***/ })

})
//# sourceMappingURL=[id].js.652a77b925c71ebd6121.hot-update.js.map