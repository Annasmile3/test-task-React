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
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/index */ "./store/index.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/MyLayout */ "./components/MyLayout.tsx");


var _jsxFileName = "D:\\test_tasks\\test-task-React\\pages\\posts\\[id].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  list-style-image: url('https://img.icons8.com/officel/16/000000/user.png');\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  width: 90%;\n  padding: 5px 10px;\n  background-color: #e6e6e6;\n  border-radius: 15px;\n  border: none;\n  outline: none;\n\n  .post-photo {\n    width: 50%;\n    margin-right: 5%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display: flex;\n  margin: 30px 0 30px 15px;\n\n  .post-photo {\n    width: 50%;\n    margin-right: 5%;\n  }\n\n  p {\n    font-family: serif;\n    color: grey;\n  }\n  \n  form {\n    position: relative;\n\n    button {\n      position: absolute;\n      top: 4px;\n      right: 10%;\n      background-color: #e6e6e6;\n      border: none;\n      outline: none;\n      cursor: pointer;\n    }\n  }\n\n  @media (max-width: 768px) {\n    flex-wrap: wrap;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var PostDetails = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section(_templateObject());
var CommentInput = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].input(_templateObject2());
var CommentsList = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].ul(_templateObject3());

var Post = function Post() {
  // const [comment, setComment] = useState('');
  // const [commentList, setComments] = useState(props.comments);
  // const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
  //   setComment(target.value);
  // };
  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (comment.trim() !== '') {
  //     createComment({ body: comment, postId: props.post.id } as Comment);
  //     setComment('');
  //     setComments([...commentList, { body: comment, postId: props.post.id }]);
  //   }
  // };
  // const { post: { title, body } } = props;
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(PostDetails, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("img", {
    className: "post-photo",
    alt: "laptop",
    src: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })));
}; // Post.getInitialProps = async function (context: NextPageContext) {
//   const { id } = context.query;
//   const post = store.dispatch(fetchPost(id));
//   console.log(post);
//   return {
//     id
//   };
// };


Post.getInitialProps = function _callee(ctx) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // const { id } = ctx.context.query;
          // const post = ctx.store.dispatch(fetchPost(id));
          console.log(ctx.store, object);
          return _context.abrupt("return", {
            a: 1
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_store_index__WEBPACK_IMPORTED_MODULE_3__["nextConnect"])(function (state) {
  return state;
})(Post));

/***/ })

})
//# sourceMappingURL=[id].js.2b40805b75f792db067a.hot-update.js.map