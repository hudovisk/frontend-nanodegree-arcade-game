/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app/enemy.js":
/*!*************************!*\
  !*** ./js/app/enemy.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./js/app/entity.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./js/app/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var MAX_VELOCITY = 300;
var MIN_VELOCITY = 100;
var Y_OFFSET = -30;
var X_OFFSET = 0;
var ANIMATION_DURATION = 10;

var Enemy =
/*#__PURE__*/
function (_Entity) {
  _inherits(Enemy, _Entity);

  function Enemy(gameState) {
    var _this;

    _classCallCheck(this, Enemy);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Enemy).call(this, gameState));
    _this.sprite = "images/enemy-bug.png";
    _this.width = 101;
    _this.height = 171;

    _this.reset();

    return _this;
  }

  _createClass(Enemy, [{
    key: "reset",
    value: function reset() {
      var directionY = 0;
      var directionX = Math.random() > 0.5 ? 1 : -1;
      var row = Math.min(Math.floor(Math.random() * 3), 2);
      var velocity = Math.max(Math.random() * MAX_VELOCITY, MIN_VELOCITY);
      this.velocity = velocity;
      this.direction = [directionX, directionY];
      this.y = row * 83 + 83;
      this.x = directionX > 0 ? -101 : 606;
      this.animationDt = 0;
    }
  }, {
    key: "isOusideMap",
    value: function isOusideMap() {
      return this.x > ctx.canvas.width + this.width || this.x < -this.width || this.y > ctx.canvas.height + this.height || this.y < -this.height;
    }
  }, {
    key: "update",
    value: function update(dt) {
      var player = this.gameState.player;

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["intersects"])(this.collisionRect, player.collisionRect)) {
        this.gameState.lose();
        this.gameState.score -= 100;
        player.reset();
      }

      this.x += this.direction[0] * this.velocity * dt;
      this.y += this.direction[1] * this.velocity * dt;

      if (this.isOusideMap()) {
        this.reset();
      }

      this.animationDt += dt;
    }
  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(Enemy.prototype), "render", this).call(this);

      if (this.direction[0] < 0) {
        ctx.translate(this.x + X_OFFSET + this.width, this.y + Y_OFFSET);
        ctx.scale(-1, 1);
      } else {
        ctx.translate(this.x + X_OFFSET, this.y + Y_OFFSET);
        ctx.scale(1, 1);
      }

      var animationFrequency = 1 / ANIMATION_DURATION * this.velocity;
      var animationAngle = Math.sin(animationFrequency * this.animationDt) * 0.02;
      ctx.rotate(animationAngle);
      ctx.drawImage(Resources.get(this.sprite), 0, 0);
    }
  }, {
    key: "collisionRect",
    get: function get() {
      var x = this.x;
      var y = this.y + 50;
      var width = 101;
      var height = 83;
      return {
        x: x,
        y: y,
        width: width,
        height: height,
        x2: x + width,
        y2: y + height
      };
    }
  }]);

  return Enemy;
}(_entity__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Enemy);

/***/ }),

/***/ "./js/app/entity.js":
/*!**************************!*\
  !*** ./js/app/entity.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Base Entity class
var Entity =
/*#__PURE__*/
function () {
  function Entity(gameState) {
    _classCallCheck(this, Entity);

    this.gameState = gameState;
  }

  _createClass(Entity, [{
    key: "drawCollisionBox",
    value: function drawCollisionBox() {
      var _this$collisionRect = this.collisionRect,
          x = _this$collisionRect.x,
          y = _this$collisionRect.y,
          width = _this$collisionRect.width,
          height = _this$collisionRect.height;
      ctx.beginPath();
      ctx.lineWidth = "2";
      ctx.strokeStyle = "red";
      ctx.rect(x, y, width, height);
      ctx.stroke();
    } // Draw the entity on the screen, required method for game

  }, {
    key: "render",
    value: function render() {
      if (this.gameState.debugCollision) {
        this.drawCollisionBox();
      }
    }
  }]);

  return Entity;
}();

/* harmony default export */ __webpack_exports__["default"] = (Entity);

/***/ }),

/***/ "./js/app/gamestate.js":
/*!*****************************!*\
  !*** ./js/app/gamestate.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./js/app/player.js");
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy */ "./js/app/enemy.js");
/* harmony import */ var _gem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gem */ "./js/app/gem.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var GameState =
/*#__PURE__*/
function () {
  function GameState() {
    var _this = this;

    _classCallCheck(this, GameState);

    document.getElementById("debug-chk").addEventListener("change", function () {
      return _this.debugCollision = !_this.debugCollision;
    });
    this.scoreElement = document.getElementById("score");
    this.stateElement = document.getElementById("state");
    this.reset();
  }

  _createClass(GameState, [{
    key: "reset",
    value: function reset() {
      this.enemies = [new _enemy__WEBPACK_IMPORTED_MODULE_1__["default"](this), new _enemy__WEBPACK_IMPORTED_MODULE_1__["default"](this), new _enemy__WEBPACK_IMPORTED_MODULE_1__["default"](this)];
      this.player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"](this);
      this.gems = [new _gem__WEBPACK_IMPORTED_MODULE_2__["default"](this), new _gem__WEBPACK_IMPORTED_MODULE_2__["default"](this)];
      this.debugCollision = false;
      this.score = 0;
    }
  }, {
    key: "lose",
    value: function lose() {
      this.stateElement.innerHTML = "You Lost";
    }
  }, {
    key: "win",
    value: function win() {
      this.stateElement.innerHTML = "You WIN!";
    }
  }, {
    key: "render",
    value: function render() {
      this.entities.forEach(function (entity) {
        ctx.save();
        entity.render();
        ctx.restore();
      });
    }
  }, {
    key: "update",
    value: function update(dt) {
      this.entities.forEach(function (entity) {
        entity.update(dt);
      });
    }
  }, {
    key: "score",
    get: function get() {
      return this._score;
    },
    set: function set(val) {
      this.scoreElement.innerHTML = "Score: ".concat(val);
      this._score = val;
    }
  }, {
    key: "entities",
    get: function get() {
      return _toConsumableArray(this.gems).concat(_toConsumableArray(this.enemies), [this.player]);
    }
  }]);

  return GameState;
}();

/* harmony default export */ __webpack_exports__["default"] = (GameState);

/***/ }),

/***/ "./js/app/gem.js":
/*!***********************!*\
  !*** ./js/app/gem.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./js/app/entity.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./js/app/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var X_OFFSET = 30;
var Y_OFFSET = 40;
var ANIMATION_DURATION = 0.3;
var SPRITES = ["images/gem-blue.png", "images/gem-orange.png", "images/gem-green.png"];

var Gem =
/*#__PURE__*/
function (_Entity) {
  _inherits(Gem, _Entity);

  function Gem(gameState) {
    var _this;

    _classCallCheck(this, Gem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Gem).call(this, gameState));
    Resources.load(SPRITES);

    _this.reset();

    return _this;
  }

  _createClass(Gem, [{
    key: "reset",
    value: function reset() {
      var spriteIdx = Math.min(2, Math.floor(Math.random() * 3));
      this.sprite = SPRITES[spriteIdx];
      this.row = Math.max(Math.min(3, Math.floor(Math.random() * 4)), 1);
      this.col = Math.min(4, Math.floor(Math.random() * 5));
      this.animationDt = 0;
    }
  }, {
    key: "update",
    value: function update(dt) {
      var player = this.gameState.player;

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["intersects"])(this.collisionRect, player.collisionRect)) {
        this.gameState.score += 10;
        this.reset();
      }

      this.animationDt += dt;
    }
  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(Gem.prototype), "render", this).call(this);

      ctx.translate(this.x + X_OFFSET, this.y + Y_OFFSET);
      ctx.scale(0.4, 0.4);
      var animationFrequency = 1 / ANIMATION_DURATION;
      var translateY = Math.sin(animationFrequency * this.animationDt) * 10;
      ctx.translate(0, translateY);
      ctx.drawImage(Resources.get(this.sprite), 0, 0);
    }
  }, {
    key: "x",
    get: function get() {
      return this.col * 101;
    }
  }, {
    key: "y",
    get: function get() {
      return this.row * 83;
    }
  }, {
    key: "collisionRect",
    get: function get() {
      var x = this.x;
      var y = this.y + 50;
      var width = 101;
      var height = 83;
      return {
        x: x,
        y: y,
        width: width,
        height: height,
        x2: x + width,
        y2: y + height
      };
    }
  }]);

  return Gem;
}(_entity__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Gem);

/***/ }),

/***/ "./js/app/index.js":
/*!*************************!*\
  !*** ./js/app/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gamestate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamestate */ "./js/app/gamestate.js");
 // Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var gameState = new _gamestate__WEBPACK_IMPORTED_MODULE_0__["default"](); // This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

document.addEventListener("keyup", function (e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };
  window.player.handleInput(allowedKeys[e.keyCode]);
}); // Export global objects

window.gameState = gameState;
window.allEnemies = gameState.enemies;
window.player = gameState.player;

/***/ }),

/***/ "./js/app/player.js":
/*!**************************!*\
  !*** ./js/app/player.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./js/app/entity.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./js/app/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Y_OFFSET = -30;
var X_OFFSET = 0;

var Player =
/*#__PURE__*/
function (_Entity) {
  _inherits(Player, _Entity);

  function Player(gameState) {
    var _this;

    _classCallCheck(this, Player);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this, gameState));
    _this.sprite = "images/char-boy.png";
    _this.width = 101;
    _this.height = 171;

    _this.reset();

    return _this;
  }

  _createClass(Player, [{
    key: "reset",
    value: function reset() {
      this.row = 4;
      this.col = 2;
    }
  }, {
    key: "update",
    value: function update(dt) {
      if (this.row === 0) {
        this.gameState.win();
        this.reset();
      }
    }
  }, {
    key: "handleInput",
    value: function handleInput(input) {
      switch (input) {
        case "left":
          this.col = Math.max(0, this.col - 1);
          break;

        case "right":
          this.col = Math.min(4, this.col + 1);
          break;

        case "up":
          this.row = Math.max(0, this.row - 1);
          break;

        case "down":
          this.row = Math.min(5, this.row + 1);
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(Player.prototype), "render", this).call(this);

      ctx.drawImage(Resources.get(this.sprite), this.x + X_OFFSET, this.y + Y_OFFSET);
    }
  }, {
    key: "x",
    get: function get() {
      return this.col * 101;
    }
  }, {
    key: "y",
    get: function get() {
      return this.row * 83;
    }
  }, {
    key: "collisionRect",
    get: function get() {
      var x = this.x + 10;
      var y = this.y + 70;
      var width = 80;
      var height = 50;
      return {
        x: x,
        y: y,
        width: width,
        height: height,
        x2: x + width,
        y2: y + height
      };
    }
  }]);

  return Player;
}(_entity__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./js/app/utils.js":
/*!*************************!*\
  !*** ./js/app/utils.js ***!
  \*************************/
/*! exports provided: intersects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersects", function() { return intersects; });
function intersects(rectA, rectB) {
  return rectA.x < rectB.x2 && rectA.x2 > rectB.x && rectA.y < rectB.y2 && rectA.y2 > rectB.y;
}

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./js/app/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hudoassenco/Documents/Projetos/frontend-nanodegree-arcade-game/js/app/index.js */"./js/app/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwL2VuZW15LmpzIiwid2VicGFjazovLy8uL2pzL2FwcC9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwL2dhbWVzdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9hcHAvZ2VtLmpzIiwid2VicGFjazovLy8uL2pzL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9hcHAvcGxheWVyLmpzIiwid2VicGFjazovLy8uL2pzL2FwcC91dGlscy5qcyJdLCJuYW1lcyI6WyJNQVhfVkVMT0NJVFkiLCJNSU5fVkVMT0NJVFkiLCJZX09GRlNFVCIsIlhfT0ZGU0VUIiwiQU5JTUFUSU9OX0RVUkFUSU9OIiwiRW5lbXkiLCJnYW1lU3RhdGUiLCJzcHJpdGUiLCJ3aWR0aCIsImhlaWdodCIsInJlc2V0IiwiZGlyZWN0aW9uWSIsImRpcmVjdGlvblgiLCJNYXRoIiwicmFuZG9tIiwicm93IiwibWluIiwiZmxvb3IiLCJ2ZWxvY2l0eSIsIm1heCIsImRpcmVjdGlvbiIsInkiLCJ4IiwiYW5pbWF0aW9uRHQiLCJjdHgiLCJjYW52YXMiLCJkdCIsInBsYXllciIsImludGVyc2VjdHMiLCJjb2xsaXNpb25SZWN0IiwibG9zZSIsInNjb3JlIiwiaXNPdXNpZGVNYXAiLCJ0cmFuc2xhdGUiLCJzY2FsZSIsImFuaW1hdGlvbkZyZXF1ZW5jeSIsImFuaW1hdGlvbkFuZ2xlIiwic2luIiwicm90YXRlIiwiZHJhd0ltYWdlIiwiUmVzb3VyY2VzIiwiZ2V0IiwieDIiLCJ5MiIsIkVudGl0eSIsImJlZ2luUGF0aCIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwicmVjdCIsInN0cm9rZSIsImRlYnVnQ29sbGlzaW9uIiwiZHJhd0NvbGxpc2lvbkJveCIsIkdhbWVTdGF0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwic2NvcmVFbGVtZW50Iiwic3RhdGVFbGVtZW50IiwiZW5lbWllcyIsIlBsYXllciIsImdlbXMiLCJHZW0iLCJpbm5lckhUTUwiLCJlbnRpdGllcyIsImZvckVhY2giLCJlbnRpdHkiLCJzYXZlIiwicmVuZGVyIiwicmVzdG9yZSIsInVwZGF0ZSIsIl9zY29yZSIsInZhbCIsIlNQUklURVMiLCJsb2FkIiwic3ByaXRlSWR4IiwiY29sIiwidHJhbnNsYXRlWSIsImUiLCJhbGxvd2VkS2V5cyIsIndpbmRvdyIsImhhbmRsZUlucHV0Iiwia2V5Q29kZSIsImFsbEVuZW1pZXMiLCJ3aW4iLCJpbnB1dCIsInJlY3RBIiwicmVjdEIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUcsR0FBckI7QUFDQSxJQUFNQyxZQUFZLEdBQUcsR0FBckI7QUFFQSxJQUFNQyxRQUFRLEdBQUcsQ0FBQyxF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QywrQzs7QUEyRU5lLHFFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQU8sU0FBUy9CLFVBQVQsQ0FBb0J5RCxLQUFwQixFQUEyQkMsS0FBM0IsRUFBa0M7QUFDdkMsU0FDRUQsS0FBSyxDQUFDL0QsQ0FBTixHQUFVZ0UsS0FBSyxDQUFDNUMsRUFBaEIsSUFDQTJDLEtBQUssQ0FBQzNDLEVBQU4sR0FBVzRDLEtBQUssQ0FBQ2hFLENBRGpCLElBRUErRCxLQUFLLENBQUNoRSxDQUFOLEdBQVVpRSxLQUFLLENBQUMzQyxFQUZoQixJQUdBMEMsS0FBSyxDQUFDMUMsRUFBTixHQUFXMkMsS0FBSyxDQUFDakUsQ0FKbkI7QUFNRCxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4vZW50aXR5XCI7XG5pbXBvcnQgeyBpbnRlcnNlY3RzIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3QgTUFYX1ZFTE9DSVRZID0gMzAwO1xuY29uc3QgTUlOX1ZFTE9DSVRZID0gMTAwO1xuXG5jb25zdCBZX09GRlNFVCA9IC0zMDtcbmNvbnN0IFhfT0ZGU0VUID0gMDtcblxuY29uc3QgQU5JTUFUSU9OX0RVUkFUSU9OID0gMTA7XG5cbmNsYXNzIEVuZW15IGV4dGVuZHMgRW50aXR5IHtcbiAgY29uc3RydWN0b3IoZ2FtZVN0YXRlKSB7XG4gICAgc3VwZXIoZ2FtZVN0YXRlKTtcblxuICAgIHRoaXMuc3ByaXRlID0gXCJpbWFnZXMvZW5lbXktYnVnLnBuZ1wiO1xuICAgIHRoaXMud2lkdGggPSAxMDE7XG4gICAgdGhpcy5oZWlnaHQgPSAxNzE7XG5cbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBjb25zdCBkaXJlY3Rpb25ZID0gMDtcbiAgICBjb25zdCBkaXJlY3Rpb25YID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMTtcbiAgICBjb25zdCByb3cgPSBNYXRoLm1pbihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSwgMik7XG4gICAgY29uc3QgdmVsb2NpdHkgPSBNYXRoLm1heChNYXRoLnJhbmRvbSgpICogTUFYX1ZFTE9DSVRZLCBNSU5fVkVMT0NJVFkpO1xuXG4gICAgdGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgIHRoaXMuZGlyZWN0aW9uID0gW2RpcmVjdGlvblgsIGRpcmVjdGlvblldO1xuICAgIHRoaXMueSA9IHJvdyAqIDgzICsgODM7XG4gICAgdGhpcy54ID0gZGlyZWN0aW9uWCA+IDAgPyAtMTAxIDogNjA2O1xuICAgIHRoaXMuYW5pbWF0aW9uRHQgPSAwO1xuICB9XG5cbiAgZ2V0IGNvbGxpc2lvblJlY3QoKSB7XG4gICAgY29uc3QgeCA9IHRoaXMueDtcbiAgICBjb25zdCB5ID0gdGhpcy55ICsgNTA7XG4gICAgY29uc3Qgd2lkdGggPSAxMDE7XG4gICAgY29uc3QgaGVpZ2h0ID0gODM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHgyOiB4ICsgd2lkdGgsXG4gICAgICB5MjogeSArIGhlaWdodFxuICAgIH07XG4gIH1cblxuICBpc091c2lkZU1hcCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy54ID4gY3R4LmNhbnZhcy53aWR0aCArIHRoaXMud2lkdGggfHxcbiAgICAgIHRoaXMueCA8IC10aGlzLndpZHRoIHx8XG4gICAgICB0aGlzLnkgPiBjdHguY2FudmFzLmhlaWdodCArIHRoaXMuaGVpZ2h0IHx8XG4gICAgICB0aGlzLnkgPCAtdGhpcy5oZWlnaHRcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlKGR0KSB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy5nYW1lU3RhdGUucGxheWVyO1xuICAgIGlmIChpbnRlcnNlY3RzKHRoaXMuY29sbGlzaW9uUmVjdCwgcGxheWVyLmNvbGxpc2lvblJlY3QpKSB7XG4gICAgICB0aGlzLmdhbWVTdGF0ZS5sb3NlKCk7XG4gICAgICB0aGlzLmdhbWVTdGF0ZS5zY29yZSAtPSAxMDA7XG4gICAgICBwbGF5ZXIucmVzZXQoKTtcbiAgICB9XG5cbiAgICB0aGlzLnggKz0gdGhpcy5kaXJlY3Rpb25bMF0gKiB0aGlzLnZlbG9jaXR5ICogZHQ7XG4gICAgdGhpcy55ICs9IHRoaXMuZGlyZWN0aW9uWzFdICogdGhpcy52ZWxvY2l0eSAqIGR0O1xuXG4gICAgaWYgKHRoaXMuaXNPdXNpZGVNYXAoKSkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIHRoaXMuYW5pbWF0aW9uRHQgKz0gZHQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgc3VwZXIucmVuZGVyKCk7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uWzBdIDwgMCkge1xuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnggKyBYX09GRlNFVCArIHRoaXMud2lkdGgsIHRoaXMueSArIFlfT0ZGU0VUKTtcbiAgICAgIGN0eC5zY2FsZSgtMSwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy54ICsgWF9PRkZTRVQsIHRoaXMueSArIFlfT0ZGU0VUKTtcbiAgICAgIGN0eC5zY2FsZSgxLCAxKTtcbiAgICB9XG4gICAgY29uc3QgYW5pbWF0aW9uRnJlcXVlbmN5ID0gKDEgLyBBTklNQVRJT05fRFVSQVRJT04pICogdGhpcy52ZWxvY2l0eTtcbiAgICBjb25zdCBhbmltYXRpb25BbmdsZSA9XG4gICAgICBNYXRoLnNpbihhbmltYXRpb25GcmVxdWVuY3kgKiB0aGlzLmFuaW1hdGlvbkR0KSAqIDAuMDI7XG5cbiAgICBjdHgucm90YXRlKGFuaW1hdGlvbkFuZ2xlKTtcblxuICAgIGN0eC5kcmF3SW1hZ2UoUmVzb3VyY2VzLmdldCh0aGlzLnNwcml0ZSksIDAsIDApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVuZW15O1xuIiwiLy8gQmFzZSBFbnRpdHkgY2xhc3NcbmNsYXNzIEVudGl0eSB7XG4gIGNvbnN0cnVjdG9yKGdhbWVTdGF0ZSkge1xuICAgIHRoaXMuZ2FtZVN0YXRlID0gZ2FtZVN0YXRlO1xuICB9XG5cbiAgZHJhd0NvbGxpc2lvbkJveCgpIHtcbiAgICBjb25zdCB7IHgsIHksIHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuY29sbGlzaW9uUmVjdDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IFwiMlwiO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmVkXCI7XG4gICAgY3R4LnJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgLy8gRHJhdyB0aGUgZW50aXR5IG9uIHRoZSBzY3JlZW4sIHJlcXVpcmVkIG1ldGhvZCBmb3IgZ2FtZVxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuZ2FtZVN0YXRlLmRlYnVnQ29sbGlzaW9uKSB7XG4gICAgICB0aGlzLmRyYXdDb2xsaXNpb25Cb3goKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW50aXR5O1xuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBFbmVteSBmcm9tIFwiLi9lbmVteVwiO1xuaW1wb3J0IEdlbSBmcm9tIFwiLi9nZW1cIjtcblxuY2xhc3MgR2FtZVN0YXRlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5nZXRFbGVtZW50QnlJZChcImRlYnVnLWNoa1wiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2hhbmdlXCIsXG4gICAgICAgICgpID0+ICh0aGlzLmRlYnVnQ29sbGlzaW9uID0gIXRoaXMuZGVidWdDb2xsaXNpb24pXG4gICAgICApO1xuICAgIHRoaXMuc2NvcmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZVwiKTtcbiAgICB0aGlzLnN0YXRlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdGVcIik7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5lbmVtaWVzID0gW25ldyBFbmVteSh0aGlzKSwgbmV3IEVuZW15KHRoaXMpLCBuZXcgRW5lbXkodGhpcyldO1xuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzKTtcbiAgICB0aGlzLmdlbXMgPSBbbmV3IEdlbSh0aGlzKSwgbmV3IEdlbSh0aGlzKV07XG5cbiAgICB0aGlzLmRlYnVnQ29sbGlzaW9uID0gZmFsc2U7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gIH1cblxuICBsb3NlKCkge1xuICAgIHRoaXMuc3RhdGVFbGVtZW50LmlubmVySFRNTCA9IFwiWW91IExvc3RcIjtcbiAgfVxuXG4gIHdpbigpIHtcbiAgICB0aGlzLnN0YXRlRWxlbWVudC5pbm5lckhUTUwgPSBcIllvdSBXSU4hXCI7XG4gIH1cblxuICBnZXQgc2NvcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njb3JlO1xuICB9XG5cbiAgc2V0IHNjb3JlKHZhbCkge1xuICAgIHRoaXMuc2NvcmVFbGVtZW50LmlubmVySFRNTCA9IGBTY29yZTogJHt2YWx9YDtcbiAgICB0aGlzLl9zY29yZSA9IHZhbDtcbiAgfVxuXG4gIGdldCBlbnRpdGllcygpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuZ2VtcywgLi4udGhpcy5lbmVtaWVzLCB0aGlzLnBsYXllcl07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKGVudGl0eSA9PiB7XG4gICAgICBjdHguc2F2ZSgpO1xuXG4gICAgICBlbnRpdHkucmVuZGVyKCk7XG5cbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGUoZHQpIHtcbiAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goZW50aXR5ID0+IHtcbiAgICAgIGVudGl0eS51cGRhdGUoZHQpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVTdGF0ZTtcbiIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4vZW50aXR5XCI7XG5pbXBvcnQgeyBpbnRlcnNlY3RzIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3QgWF9PRkZTRVQgPSAzMDtcbmNvbnN0IFlfT0ZGU0VUID0gNDA7XG5cbmNvbnN0IEFOSU1BVElPTl9EVVJBVElPTiA9IDAuMztcblxuY29uc3QgU1BSSVRFUyA9IFtcbiAgXCJpbWFnZXMvZ2VtLWJsdWUucG5nXCIsXG4gIFwiaW1hZ2VzL2dlbS1vcmFuZ2UucG5nXCIsXG4gIFwiaW1hZ2VzL2dlbS1ncmVlbi5wbmdcIlxuXTtcblxuY2xhc3MgR2VtIGV4dGVuZHMgRW50aXR5IHtcbiAgY29uc3RydWN0b3IoZ2FtZVN0YXRlKSB7XG4gICAgc3VwZXIoZ2FtZVN0YXRlKTtcblxuICAgIFJlc291cmNlcy5sb2FkKFNQUklURVMpO1xuXG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgY29uc3Qgc3ByaXRlSWR4ID0gTWF0aC5taW4oMiwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMykpO1xuICAgIHRoaXMuc3ByaXRlID0gU1BSSVRFU1tzcHJpdGVJZHhdO1xuXG4gICAgdGhpcy5yb3cgPSBNYXRoLm1heChNYXRoLm1pbigzLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSksIDEpO1xuICAgIHRoaXMuY29sID0gTWF0aC5taW4oNCwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSkpO1xuICAgIHRoaXMuYW5pbWF0aW9uRHQgPSAwO1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sICogMTAxO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucm93ICogODM7XG4gIH1cblxuICBnZXQgY29sbGlzaW9uUmVjdCgpIHtcbiAgICBjb25zdCB4ID0gdGhpcy54O1xuICAgIGNvbnN0IHkgPSB0aGlzLnkgKyA1MDtcbiAgICBjb25zdCB3aWR0aCA9IDEwMTtcbiAgICBjb25zdCBoZWlnaHQgPSA4MztcblxuICAgIHJldHVybiB7XG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgeDI6IHggKyB3aWR0aCxcbiAgICAgIHkyOiB5ICsgaGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIGNvbnN0IHBsYXllciA9IHRoaXMuZ2FtZVN0YXRlLnBsYXllcjtcbiAgICBpZiAoaW50ZXJzZWN0cyh0aGlzLmNvbGxpc2lvblJlY3QsIHBsYXllci5jb2xsaXNpb25SZWN0KSkge1xuICAgICAgdGhpcy5nYW1lU3RhdGUuc2NvcmUgKz0gMTA7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5hbmltYXRpb25EdCArPSBkdDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBzdXBlci5yZW5kZXIoKTtcblxuICAgIGN0eC50cmFuc2xhdGUodGhpcy54ICsgWF9PRkZTRVQsIHRoaXMueSArIFlfT0ZGU0VUKTtcbiAgICBjdHguc2NhbGUoMC40LCAwLjQpO1xuXG4gICAgY29uc3QgYW5pbWF0aW9uRnJlcXVlbmN5ID0gMSAvIEFOSU1BVElPTl9EVVJBVElPTjtcbiAgICBjb25zdCB0cmFuc2xhdGVZID0gTWF0aC5zaW4oYW5pbWF0aW9uRnJlcXVlbmN5ICogdGhpcy5hbmltYXRpb25EdCkgKiAxMDtcbiAgICBjdHgudHJhbnNsYXRlKDAsIHRyYW5zbGF0ZVkpO1xuXG4gICAgY3R4LmRyYXdJbWFnZShSZXNvdXJjZXMuZ2V0KHRoaXMuc3ByaXRlKSwgMCwgMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2VtO1xuIiwiaW1wb3J0IEdhbWVTdGF0ZSBmcm9tIFwiLi9nYW1lc3RhdGVcIjtcblxuLy8gTm93IGluc3RhbnRpYXRlIHlvdXIgb2JqZWN0cy5cbi8vIFBsYWNlIGFsbCBlbmVteSBvYmplY3RzIGluIGFuIGFycmF5IGNhbGxlZCBhbGxFbmVtaWVzXG4vLyBQbGFjZSB0aGUgcGxheWVyIG9iamVjdCBpbiBhIHZhcmlhYmxlIGNhbGxlZCBwbGF5ZXJcbmNvbnN0IGdhbWVTdGF0ZSA9IG5ldyBHYW1lU3RhdGUoKTtcblxuLy8gVGhpcyBsaXN0ZW5zIGZvciBrZXkgcHJlc3NlcyBhbmQgc2VuZHMgdGhlIGtleXMgdG8geW91clxuLy8gUGxheWVyLmhhbmRsZUlucHV0KCkgbWV0aG9kLiBZb3UgZG9uJ3QgbmVlZCB0byBtb2RpZnkgdGhpcy5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG4gIHZhciBhbGxvd2VkS2V5cyA9IHtcbiAgICAzNzogXCJsZWZ0XCIsXG4gICAgMzg6IFwidXBcIixcbiAgICAzOTogXCJyaWdodFwiLFxuICAgIDQwOiBcImRvd25cIlxuICB9O1xuXG4gIHdpbmRvdy5wbGF5ZXIuaGFuZGxlSW5wdXQoYWxsb3dlZEtleXNbZS5rZXlDb2RlXSk7XG59KTtcblxuLy8gRXhwb3J0IGdsb2JhbCBvYmplY3RzXG53aW5kb3cuZ2FtZVN0YXRlID0gZ2FtZVN0YXRlO1xud2luZG93LmFsbEVuZW1pZXMgPSBnYW1lU3RhdGUuZW5lbWllcztcbndpbmRvdy5wbGF5ZXIgPSBnYW1lU3RhdGUucGxheWVyO1xuIiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9lbnRpdHlcIjtcblxuaW1wb3J0IHsgaW50ZXJzZWN0cyB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnN0IFlfT0ZGU0VUID0gLTMwO1xuY29uc3QgWF9PRkZTRVQgPSAwO1xuXG5jbGFzcyBQbGF5ZXIgZXh0ZW5kcyBFbnRpdHkge1xuICBjb25zdHJ1Y3RvcihnYW1lU3RhdGUpIHtcbiAgICBzdXBlcihnYW1lU3RhdGUpO1xuICAgIHRoaXMuc3ByaXRlID0gXCJpbWFnZXMvY2hhci1ib3kucG5nXCI7XG5cbiAgICB0aGlzLndpZHRoID0gMTAxO1xuICAgIHRoaXMuaGVpZ2h0ID0gMTcxO1xuXG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5yb3cgPSA0O1xuICAgIHRoaXMuY29sID0gMjtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzLmNvbCAqIDEwMTtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzLnJvdyAqIDgzO1xuICB9XG5cbiAgZ2V0IGNvbGxpc2lvblJlY3QoKSB7XG4gICAgY29uc3QgeCA9IHRoaXMueCArIDEwO1xuICAgIGNvbnN0IHkgPSB0aGlzLnkgKyA3MDtcbiAgICBjb25zdCB3aWR0aCA9IDgwO1xuICAgIGNvbnN0IGhlaWdodCA9IDUwO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICB4MjogeCArIHdpZHRoLFxuICAgICAgeTI6IHkgKyBoZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKGR0KSB7XG4gICAgaWYgKHRoaXMucm93ID09PSAwKSB7XG4gICAgICB0aGlzLmdhbWVTdGF0ZS53aW4oKTtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVJbnB1dChpbnB1dCkge1xuICAgIHN3aXRjaCAoaW5wdXQpIHtcbiAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgIHRoaXMuY29sID0gTWF0aC5tYXgoMCwgdGhpcy5jb2wgLSAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgdGhpcy5jb2wgPSBNYXRoLm1pbig0LCB0aGlzLmNvbCArIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJ1cFwiOlxuICAgICAgICB0aGlzLnJvdyA9IE1hdGgubWF4KDAsIHRoaXMucm93IC0gMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgdGhpcy5yb3cgPSBNYXRoLm1pbig1LCB0aGlzLnJvdyArIDEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgc3VwZXIucmVuZGVyKCk7XG5cbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgUmVzb3VyY2VzLmdldCh0aGlzLnNwcml0ZSksXG4gICAgICB0aGlzLnggKyBYX09GRlNFVCxcbiAgICAgIHRoaXMueSArIFlfT0ZGU0VUXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJleHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0cyhyZWN0QSwgcmVjdEIpIHtcbiAgcmV0dXJuIChcbiAgICByZWN0QS54IDwgcmVjdEIueDIgJiZcbiAgICByZWN0QS54MiA+IHJlY3RCLnggJiZcbiAgICByZWN0QS55IDwgcmVjdEIueTIgJiZcbiAgICByZWN0QS55MiA+IHJlY3RCLnlcbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=