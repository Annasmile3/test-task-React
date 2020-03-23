webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/index */ "./store/index.ts");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/index */ "./actions/index.ts");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.tsx");

var _jsxFileName = "D:\\test_tasks\\test-task-React\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  list-style-type: none;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 50px;\n  padding: 0;\n\n  .post-photo {\n    width: 100%;\n  }\n\n  .title {\n    text-decoration: none;\n    font-weight: bold;\n    font-size: 20px;\n    color: #000;\n\n    &:active {\n      color: blue;\n    }\n  }\n\n  .content {\n    font-family: serif;\n    color: grey;\n    margin-top: 5px;\n  }\n\n  @media (max-width: 768px) {\n    grid-template-columns: 1fr 1fr;\n    gap: 30px;\n  }\n\n  @media (max-width: 500px) {\n    grid-template-columns: 1fr;\n    gap: 15px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 200px;\n  margin: 30px auto 50px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Heading = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1(_templateObject());
var PostList = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].ul(_templateObject2());

var Index = function Index(_ref) {
  var posts = _ref.posts;
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(Heading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Latest posts"), __jsx(PostList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, posts.map(function (post) {
    return __jsx("li", {
      key: post.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("img", {
      className: "post-photo",
      alt: "laptop",
      src: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/posts/[id]`",
      as: "/posts/".concat(post.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx("a", {
      title: "Details for ".concat(post.title),
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, post.title)), __jsx("p", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, post.body));
  })));
};

Index.getInitialProps = function (_ref2) {
  var store = _ref2.store;
  console.log(typeof stoe);
  var posts = store.dispatch(Object(_actions_index__WEBPACK_IMPORTED_MODULE_5__["fetchPosts"])());
  return posts;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_store_index__WEBPACK_IMPORTED_MODULE_4__["nextConnect"])(function (state) {
  return state;
})(Index));

/***/ })

})
//# sourceMappingURL=index.js.6064a17810b8ebefc21e.hot-update.js.map