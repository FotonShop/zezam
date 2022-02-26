"use strict";
exports.id = 949;
exports.ids = [949];
exports.modules = {

/***/ 8949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/index.js + 11 modules
var lib = __webpack_require__(4526);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(887);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(799);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Layout/Header.tsx
const _excluded = ["children", "href"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









function MyComponent() {
  return /*#__PURE__*/_jsx(FontAwesomeIcon, {
    icon: faCoffee
  });
}

const MenuLink = _ref => {
  let {
    children,
    href
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx(react_.Link, _objectSpread(_objectSpread({
    fontSize: "md",
    textDecoration: "none",
    textTransform: "uppercase",
    href: href,
    _active: {
      textDecoration: "none"
    },
    _hover: {
      textDecoration: "none"
    }
  }, props), {}, {
    children: children
  }));
};

const Header = () => {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
    alignItems: "center",
    justifyContent: "space-between",
    gridGap: 64,
    wrap: "wrap",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
      gridGap: 2,
      alignItems: "center",
      cursor: "pointer",
      onClick: () => router.push("/"),
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Image, {
        alt: "logo",
        src: "/logo.jpg",
        rounded: "full",
        h: "3rem",
        mr: "1rem",
        borderRadius: "10rem"
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Heading, {
        as: "p",
        fontSize: "1.5rem",
        fontWeight: "700",
        fontFamily: "'Be Vietnam Pro', cursive",
        color: "#2c2c2c",
        children: "Zezam Open"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
      gridGap: 64,
      children: [/*#__PURE__*/jsx_runtime_.jsx(MenuLink, {
        borderBottom: router.pathname === "/" ? "2px solid #2c2c2c" : "none",
        fontWeight: router.pathname === "/" ? "regular" : "normal",
        href: "/",
        color: "#2c2c2c",
        children: "Home"
      }), /*#__PURE__*/jsx_runtime_.jsx(MenuLink, {
        borderBottom: router.pathname === "/how-to" ? "2px solid #2c2c2c" : "none",
        fontWeight: router.pathname === "/how-to" ? "regular" : "normal",
        href: "/how-to",
        color: "#2c2c2c",
        children: "How to"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
      alignItems: "center",
      justifyContent: "space-between",
      direction: "row",
      columnGap: "1.6rem",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://discord.com/invite/krRgtbu8AH",
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
          icon: ["fab", "discord"],
          size: "2x"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://twitter.com/ZezamOpen",
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
          icon: ["fab", "twitter"],
          size: "2x"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(lib/* WalletMultiButton */.aD, {
        style: {
          boxShadow: "none",
          fontWeight: 500,
          fontFamily: '"Be Vietnam Pro"',
          fontSize: "0.75rem"
        }
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./components/Layout/layout.tsx
const layout_excluded = ["children"];

function layout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function layout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { layout_ownKeys(Object(source), true).forEach(function (key) { layout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { layout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function layout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function layout_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = layout_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function layout_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Layout = _ref => {
  let {
    children
  } = _ref,
      props = layout_objectWithoutProperties(_ref, layout_excluded);

  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, layout_objectSpread(layout_objectSpread({
      pt: "1rem",
      px: ["2rem", "2rem", "3rem", "5rem"]
    }, props), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), children]
    }))
  });
};

/***/ })

};
;