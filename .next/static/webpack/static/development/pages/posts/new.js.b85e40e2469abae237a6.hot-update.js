webpackHotUpdate("static\\development\\pages\\posts\\new.js",{

/***/ "./pages/posts/new.tsx":
/*!*****************************!*\
  !*** ./pages/posts/new.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./actions/index.ts");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MyLayout */ "./components/MyLayout.tsx");

var _jsxFileName = "D:\\test_tasks\\test-task-React\\pages\\posts\\new.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 80px;\n  padding: 5px;\n  text-align: center;\n  margin: 20px auto 0;\n  background-color: #00cc66;\n  color: #fff;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  font-weight: bold;\n  cursor: pointer;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 250px;\n  margin: 30px auto 50px;\n  text-align: center;\n\n  input {\n    width: 100%;\n     padding: 5px;\n     border: 1px solid black;\n     border-radius: 2px;\n\n    &:focus {\n     background-color: #e6e6e6;\n    }\n  }\n\n  textarea {\n    width: 100%;\n    padding: 5px;\n    margin: 20px auto 0;\n    border: 1px solid black;\n    border-radius: 2px;\n  }\n  .error {\n    text-align: left;\n    color: red;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 250px;\n  margin: 30px auto 40px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Heading = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1(_templateObject());
var NewPostForm = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form(_templateObject2());
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject3());

var NewPost = function NewPost() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      title = _useState[0],
      setTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      body = _useState2[0],
      setBody = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      error = _useState3[0],
      setError = _useState3[1];

  var handleTitleChange = function handleTitleChange(e) {
    setError(false);
    setTitle(e.target.value);
  };

  var handleBodyChange = function handleBodyChange(e) {
    setError(false);
    setBody(e.target.value);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() !== '' && body.trim() !== '') {
      Object(_actions__WEBPACK_IMPORTED_MODULE_3__["addPost"])({
        title: title,
        body: body
      });
      setTitle('');
      setBody('');
    } else {
      setError(true);
    }
  };

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(Heading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Create new post"), __jsx(NewPostForm, {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    value: title,
    name: "title",
    placeholder: "Enter the title",
    onChange: handleTitleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), error && title.trim() === '' && __jsx("div", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "The title is empty"), __jsx("textarea", {
    rows: 5,
    value: body,
    name: "body",
    placeholder: "Enter the post",
    onChange: handleBodyChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), error && body.trim() === '' && __jsx("div", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "The post field is empty"), __jsx(SubmitButton, {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Create")));
};

/* harmony default export */ __webpack_exports__["default"] = (NewPost);

/***/ })

})
//# sourceMappingURL=new.js.b85e40e2469abae237a6.hot-update.js.map