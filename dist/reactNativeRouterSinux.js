module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NavigationRoot = exports.navigationStore = undefined;

	var _navigationStore = __webpack_require__(1);

	var _navigationStore2 = _interopRequireDefault(_navigationStore);

	var _NavigationRoot = __webpack_require__(4);

	var _NavigationRoot2 = _interopRequireDefault(_NavigationRoot);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.navigationStore = _navigationStore2.default;
	exports.NavigationRoot = _NavigationRoot2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _sinux = __webpack_require__(2);

	var _reactNative = __webpack_require__(3);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var NavigationStateUtils = _reactNative.NavigationExperimental.StateUtils;


	var navigationStore = new (Function.prototype.bind.apply(_sinux.Store, [null].concat([{ index: 0, key: 'App', routes: [] }], _toConsumableArray(Object.keys(NavigationStateUtils)))))();

	for (var method in NavigationStateUtils) {
	  new _sinux.Command(navigationStore[method], NavigationStateUtils[method]);
	}

	exports.default = navigationStore;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("sinux");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-native");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactNative = __webpack_require__(3);

	var _navigationStore = __webpack_require__(1);

	var _navigationStore2 = _interopRequireDefault(_navigationStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NavigationCardStack = _reactNative.NavigationExperimental.CardStack;

	var NavigationRoot = function (_Component) {
	  _inherits(NavigationRoot, _Component);

	  function NavigationRoot(props) {
	    _classCallCheck(this, NavigationRoot);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NavigationRoot).call(this, props));

	    _this.scenes = {};
	    return _this;
	  }

	  _createClass(NavigationRoot, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.initNavigation(this.props);
	      _navigationStore2.default.changed.add(this.onNavigationUpdated.bind(this));
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.children !== this.props.children) {
	        this.initNavigation(nextProps);
	      }
	    }
	  }, {
	    key: 'onNavigationUpdated',
	    value: function onNavigationUpdated() {
	      this.setState(_extends({}, this.state, _navigationStore2.default.getState()));
	    }
	  }, {
	    key: 'initNavigation',
	    value: function initNavigation(props) {
	      var _this2 = this;

	      _react.Children.map(props.children, function (element) {
	        if (element.props.routeKey) {
	          _this2.scenes[element.props.routeKey] = element;
	        }
	      });
	      var initial = null;
	      if (!this.state || !this.state.routes && !this.state.routes.length) {
	        _navigationStore2.default.push({ key: props.initialRoute });
	        initial = { routes: [{ key: props.initialRoute }] };
	      }
	      this.setState(_extends({}, _navigationStore2.default.getState(), initial));
	    }
	  }, {
	    key: 'renderScene',
	    value: function renderScene(props) {
	      var element = this.scenes[props.scene.route.key];
	      if (!element) {
	        throw new Error('element for key ' + props.scene.route.key + ' not found', props);
	      }
	      return element;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      return _react2.default.createElement(NavigationCardStack, _extends({}, this.props, {
	        renderScene: function renderScene(props) {
	          return _this3.renderScene(props);
	        },
	        navigationState: this.state
	      }));
	    }
	  }]);

	  return NavigationRoot;
	}(_react.Component);

	exports.default = NavigationRoot;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ }
/******/ ]);