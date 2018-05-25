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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _Generator = __webpack_require__(3);

var _Generator2 = _interopRequireDefault(_Generator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function Main() {
    _classCallCheck(this, Main);

    new _Generator2.default();
};

(0, _jquery2.default)(window).on('load', function () {

    new Main();
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Helpers = __webpack_require__(4);

var _Helpers2 = _interopRequireDefault(_Helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Generator = function () {
    function Generator() {
        _classCallCheck(this, Generator);

        this.helpers = new _Helpers2.default();
        this.comp_00002_header_white();
    }

    _createClass(Generator, [{
        key: 'comp_00002_header_white',
        value: function comp_00002_header_white() {
            $('body').css({ 'opacity': '1' });
            this.headerListeners();
            this.helpers = new _Helpers2.default();
            this.onResize();
            TweenMax.fromTo($('.comp_00002_header_white #logoVivo'), 0.8, { x: "200px", scale: 0 }, { x: "0%", scale: 1, ease: Quad.easeInOut });
        }
    }, {
        key: 'headerListeners',
        value: function headerListeners() {
            var _this = this;

            $('.comp_00002_header_white #logoVivo').on({
                mouseenter: function mouseenter(e) {
                    _this.animateLogo(e);
                },
                mouseleave: function mouseleave(e) {
                    _this.resetLogo(e);
                }
            });
        }
    }, {
        key: 'animateLogo',
        value: function animateLogo(e) {
            TweenMax.fromTo($('.comp_00002_header_white #logoVivo'), 0.5, { scale: 1 }, { scale: 1.2, ease: Quad.easeInOut });
        }
    }, {
        key: 'resetLogo',
        value: function resetLogo(e) {
            TweenMax.fromTo($('.comp_00002_header_white #logoVivo'), 0.5, { scale: 1.2 }, { scale: 1, ease: Quad.easeInOut });
        }
    }, {
        key: 'onResize',
        value: function onResize() {
            var _this2 = this;

            this.detectDevice();
            $(window).resize(function () {
                _this2.detectDevice();
            });
        }
    }, {
        key: 'detectDevice',
        value: function detectDevice() {
            if (this.helpers.isMobile()) {
                var userAgent = navigator.userAgent || navigator.vendor || window.opera;

                if (/android/i.test(userAgent)) {
                    $('.apple').hide();
                } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                    $('.android').hide();
                }
            }
        }
    }]);

    return Generator;
}();

exports.default = Generator;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helpers = function () {
    function Helpers() {
        _classCallCheck(this, Helpers);

        this.windowWidth = $(window).width();
        this.menu = $('.sidebar');
    }

    _createClass(Helpers, [{
        key: 'isMobile',
        value: function isMobile() {
            if (this.windowWidth < 768) {
                return true;
            }
        }
    }, {
        key: 'isTablet',
        value: function isTablet() {
            if (this.windowWidth >= 768 && this.windowWidth < 1024) {
                return true;
            }
        }
    }, {
        key: 'isDesktop',
        value: function isDesktop() {
            if (this.windowWidth >= 1024) {
                return true;
            }
        }

        // getCurrentDDD() {
        //     return decodeURI(this.cookie.get('controle_ddd'));
        // }

        // getCurrentRegional() {
        //     return decodeURI(this.cookie.get('controle_cidade')); 
        // }

        // getCurrentUserReg() {
        //     return decodeURI(this.cookie.get('controle_estado'));
        // }

        // isArray(o) {
        //     return typeof o === 'object' && Object.prototype.toString.call(o).slice(8, -1) === 'Array';
        // }

    }, {
        key: 'mobilecheck',
        value: function mobilecheck() {
            var check = false;
            (function (a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        }
    }]);

    return Helpers;
}();

exports.default = Helpers;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzhlNmJhYzRhZWVjYjYwNWQ0MGEiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vLi9zb3VyY2Uvc2NyaXB0cy9jb21wb25lbnRzL0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2Uvc2NyaXB0cy9zZXJ2aWNlcy9IZWxwZXJzLmpzIl0sIm5hbWVzIjpbIk1haW4iLCJHZW5lcmF0b3IiLCJ3aW5kb3ciLCJvbiIsImhlbHBlcnMiLCJIZWxwZXJzIiwiY29tcF8wMDAwMl9oZWFkZXJfd2hpdGUiLCIkIiwiY3NzIiwiaGVhZGVyTGlzdGVuZXJzIiwib25SZXNpemUiLCJUd2Vlbk1heCIsImZyb21UbyIsIngiLCJzY2FsZSIsImVhc2UiLCJRdWFkIiwiZWFzZUluT3V0IiwibW91c2VlbnRlciIsImUiLCJhbmltYXRlTG9nbyIsIm1vdXNlbGVhdmUiLCJyZXNldExvZ28iLCJkZXRlY3REZXZpY2UiLCJyZXNpemUiLCJpc01vYmlsZSIsInVzZXJBZ2VudCIsIm5hdmlnYXRvciIsInZlbmRvciIsIm9wZXJhIiwidGVzdCIsImhpZGUiLCJNU1N0cmVhbSIsIndpbmRvd1dpZHRoIiwid2lkdGgiLCJtZW51IiwiY2hlY2siLCJhIiwic3Vic3RyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMs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LEdBQW1CLEdBQXRCLEVBQTJCO0FBQ3ZCLHVCQUFPLElBQVA7QUFDSDtBQUNKOzs7bUNBRVU7QUFDUCxnQkFBRyxLQUFLQSxXQUFMLElBQW9CLEdBQXBCLElBQTJCLEtBQUtBLFdBQUwsR0FBbUIsSUFBakQsRUFBdUQ7QUFDbkQsdUJBQU8sSUFBUDtBQUNIO0FBQ0o7OztvQ0FFVztBQUNSLGdCQUFHLEtBQUtBLFdBQUwsSUFBb0IsSUFBdkIsRUFBNkI7QUFDekIsdUJBQU8sSUFBUDtBQUNIO0FBQ0o7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O3NDQUVjO0FBQ1YsZ0JBQUlHLFFBQVEsS0FBWjtBQUNBLGFBQUMsVUFBVUMsQ0FBVixFQUFhO0FBQ1Ysb0JBQUksMlRBQTJUUCxJQUEzVCxDQUFnVU8sQ0FBaFUsS0FBc1UsMGtEQUEwa0RQLElBQTFrRCxDQUEra0RPLEVBQUVDLE1BQUYsQ0FBUyxDQUFULEVBQVksQ0FBWixDQUEva0QsQ0FBMVUsRUFBMDZERixRQUFRLElBQVI7QUFDNzZELGFBRkQsRUFFR1QsVUFBVUQsU0FBVixJQUF1QkMsVUFBVUMsTUFBakMsSUFBMkMxQixPQUFPMkIsS0FGckQ7QUFHQSxtQkFBT08sS0FBUDtBQUNIOzs7Ozs7a0JBR1UvQixPIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjOGU2YmFjNGFlZWNiNjA1ZDQwYSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5pbXBvcnQgR2VuZXJhdG9yIGZyb20gJy4vY29tcG9uZW50cy9HZW5lcmF0b3InO1xyXG5jbGFzcyBNYWluIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIG5ldyBHZW5lcmF0b3IoKTtcclxuICAgIH1cclxufVxyXG5cclxuJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcblx0XHJcbiAgICBuZXcgTWFpbigpO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL3NjcmlwdHMvbWFpbi5qcyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEhlbHBlcnMgZnJvbSBcIi4uL3NlcnZpY2VzL0hlbHBlcnNcIjtcclxuXHJcbmNsYXNzIEdlbmVyYXRvciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5oZWxwZXJzID0gbmV3IEhlbHBlcnMoKTtcclxuXHRcdHRoaXMuY29tcF8wMDAwMl9oZWFkZXJfd2hpdGUoKTtcclxuXHR9XHJcblxyXG4gICAgY29tcF8wMDAwMl9oZWFkZXJfd2hpdGUoKSB7XHJcbiAgICAgICAgJCgnYm9keScpLmNzcyh7J29wYWNpdHknOiAnMSd9KTtcclxuICAgICAgICB0aGlzLmhlYWRlckxpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuaGVscGVycyA9IG5ldyBIZWxwZXJzKCk7XHJcbiAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xyXG4gICAgICAgIFR3ZWVuTWF4LmZyb21UbygkKCcuY29tcF8wMDAwMl9oZWFkZXJfd2hpdGUgI2xvZ29WaXZvJyksIDAuOCwge3g6IFwiMjAwcHhcIiwgc2NhbGU6IDB9LCB7eDogXCIwJVwiLCBzY2FsZTogMSwgZWFzZTogUXVhZC5lYXNlSW5PdXR9KTtcclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXJMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgJCgnLmNvbXBfMDAwMDJfaGVhZGVyX3doaXRlICNsb2dvVml2bycpLm9uKHtcclxuICAgICAgICAgICAgbW91c2VlbnRlcjogKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUxvZ28oZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vdXNlbGVhdmU6IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0TG9nbyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGVMb2dvKGUpIHtcclxuICAgICAgICBUd2Vlbk1heC5mcm9tVG8oJCgnLmNvbXBfMDAwMDJfaGVhZGVyX3doaXRlICNsb2dvVml2bycpLCAwLjUsIHtzY2FsZTogMX0sIHtzY2FsZTogMS4yLCBlYXNlOiBRdWFkLmVhc2VJbk91dH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0TG9nbyhlKSB7XHJcbiAgICAgICAgVHdlZW5NYXguZnJvbVRvKCQoJy5jb21wXzAwMDAyX2hlYWRlcl93aGl0ZSAjbG9nb1Zpdm8nKSwgMC41LCB7c2NhbGU6IDEuMn0sIHtzY2FsZTogMSwgZWFzZTogUXVhZC5lYXNlSW5PdXR9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlc2l6ZSgpIHtcclxuICAgICAgICB0aGlzLmRldGVjdERldmljZSgpO1xyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRldGVjdERldmljZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZGV0ZWN0RGV2aWNlKCkge1xyXG4gICAgICAgIGlmKHRoaXMuaGVscGVycy5pc01vYmlsZSgpKSB7XHJcbiAgICAgICAgICAgIGxldCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKC9hbmRyb2lkL2kudGVzdCh1c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuYXBwbGUnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmICgvaVBhZHxpUGhvbmV8aVBvZC8udGVzdCh1c2VyQWdlbnQpICYmICF3aW5kb3cuTVNTdHJlYW0pIHtcclxuICAgICAgICAgICAgICAgICQoJy5hbmRyb2lkJykuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZW5lcmF0b3I7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL3NjcmlwdHMvY29tcG9uZW50cy9HZW5lcmF0b3IuanMiLCJjbGFzcyBIZWxwZXJzIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy53aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgIHRoaXMubWVudSA9ICQoJy5zaWRlYmFyJyk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaXNNb2JpbGUoKSB7XHJcbiAgICAgICAgaWYodGhpcy53aW5kb3dXaWR0aCA8IDc2OCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNUYWJsZXQoKSB7XHJcbiAgICAgICAgaWYodGhpcy53aW5kb3dXaWR0aCA+PSA3NjggJiYgdGhpcy53aW5kb3dXaWR0aCA8IDEwMjQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzRGVza3RvcCgpIHtcclxuICAgICAgICBpZih0aGlzLndpbmRvd1dpZHRoID49IDEwMjQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldEN1cnJlbnREREQoKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIGRlY29kZVVSSSh0aGlzLmNvb2tpZS5nZXQoJ2NvbnRyb2xlX2RkZCcpKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBnZXRDdXJyZW50UmVnaW9uYWwoKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIGRlY29kZVVSSSh0aGlzLmNvb2tpZS5nZXQoJ2NvbnRyb2xlX2NpZGFkZScpKTsgXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZ2V0Q3VycmVudFVzZXJSZWcoKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIGRlY29kZVVSSSh0aGlzLmNvb2tpZS5nZXQoJ2NvbnRyb2xlX2VzdGFkbycpKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpc0FycmF5KG8pIHtcclxuICAgIC8vICAgICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSkgPT09ICdBcnJheSc7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgbW9iaWxlY2hlY2soKSB7XHJcbiAgICAgICAgbGV0IGNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgIGlmICgvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKSkgY2hlY2sgPSB0cnVlO1xyXG4gICAgICAgIH0pKG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmEpO1xyXG4gICAgICAgIHJldHVybiBjaGVjaztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVscGVycztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2Uvc2NyaXB0cy9zZXJ2aWNlcy9IZWxwZXJzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==