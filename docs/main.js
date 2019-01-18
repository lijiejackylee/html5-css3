(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./canvas/canvas.component */ "./src/app/canvas/canvas.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'signUp', component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"] },
    { path: 'canvas', component: _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_5__["CanvasComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n    border-top: solid 1px #8e8e8e;\n    border-bottom: solid 1px #8e8e8e;\n    margin: 1px auto;\n    padding-top: 8px;\n    overflow: hidden;\n    position: relative; }\n\nheader {\n        text-align: center; \n    }\n\nheader h1 {\n    font-family: \"Times New Roman\", Times, serif;\n    font-size: 60px;\n    position: relative;\n    margin: 10px 0 0 0;\n    font-weight: normal;\n    line-height: .9; \n    }\n\nheader h1 span {\n    position: absolute;\n    left: 40px;\n    top: 40%;\n    font-size: 30%; \n    }\n\nheader h1 a:hover,\nheader h1 a:active {\n    text-decoration: none; \n    }\n\nheader p {\n    line-height: 29px;\n    font-size: 12px;\n    font-size: 0.75rem;\n    margin: 0; \n}\n\nheader #volume {\n    float: left; \n}\n\nheader time {\n    float: right; \n}\n\n.issue {\n    right: 0;\n    text-align: right; \n}\n\n.tagline {\n    text-transform: lowercase;\n    background-image: none;\n    font-size: 16px;\n    letter-spacing: 2px;\n    text-align: center;\n    text-shadow: none;\n    font-weight: normal;\n    line-height: 2; \n}\n\nnav {\n    border-top: double 3px #8e8e8e;\n    text-align: center; \n}\n\nnav ul {\n    list-style: none;\n    padding: 0;\n    margin: 0 auto;\n    white-space: nowrap;\n    text-align: center;\n    width: 10.2em; \n}\n\nnav li {\n    display: inline-block;\n    padding: 0 1em; \n}\n\nnav a {\n    text-transform: uppercase;\n    font-size: 13px;\n    font-size: 0.875rem;\n    display: block;\n    line-height: 27px; \n}\n\nfooter {\n    clear: both; \n}\n\nfooter small {\n    font-family: LeagueGothic, Tahoma, Geneva, sans-serif;\n    text-transform: uppercase;\n    line-height: 32px;\n    padding: 0 0 0 7px;\n    letter-spacing: .08em;\n    text-shadow: rgba(0, 0, 0, 0.4) 1px 1px 4px;\n    float: left; \n}\n\nfooter p:last-of-type {\n    float: right;\n    padding: 5px 0 0 0; \n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <h1><span>The</span> HTML <img src=\"../assets/images/logo.png\" alt=\"\"> Herald</h1>\n    <h2 class=\"tagline\">Produced With That Good Ol’ Timey HTML5 & CSS3</h2> \n  <p id=\"volume\">Vol. MMXI</p>\n  <p id=\"issue\"><time datetime=\"2019-01-01\" pubdate>Jan 01, 2019</time></p>\n    \n  <nav>\n    <ul>\n      <li><a [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\" >HOME</a></li>\n      <li><a [routerLink]=\"['/signUp']\" routerLinkActive=\"router-link-active\" >SIGN UP</a></li>\n      <li><a [routerLink]=\"['/canvas']\" routerLinkActive=\"router-link-active\" >CANVAS DEMOS</a></li>\n    </ul>\n  </nav>\n</header>\n<router-outlet></router-outlet>\n<footer>\n    <small>&copy; SitePoint </small>\n    <p><a href=\"http://www.sitepoint.com\"><img src=\"../assets/images/logo-sp.png\" alt=\"SitePoint\" width=\"74\" height=\"20\"></a></p>\n  </footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'html5-css3';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./canvas/canvas.component */ "./src/app/canvas/canvas.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_6__["CanvasComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/canvas/canvas.component.css":
/*!*********************************************!*\
  !*** ./src/app/canvas/canvas.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n    padding: 20px 0px;\n}\n.myCanvas {\n    border: dotted 2px black;\n}\nsvg {\n    width: 400px;\n    height: 400px;\n    border: dotted 2px black;\n}\n\n\n"

/***/ }),

/***/ "./src/app/canvas/canvas.component.html":
/*!**********************************************!*\
  !*** ./src/app/canvas/canvas.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Hold your mouse and drow something.</h2>\n<canvas #canvas id=\"myCanvas\" class=\"myCanvas\" width=\"400px\" height=\"400px\">\n  Sorry! Your browser doesn't support Canvas.\n</canvas>\n<h2>SVG</h2>\n<svg xmlns=\"http://www.w3.org/2000/svg\">\n  <circle cx=\"50\" cy=\"50\" r=\"25\" fill=\"red\"/>\n</svg>"

/***/ }),

/***/ "./src/app/canvas/canvas.component.ts":
/*!********************************************!*\
  !*** ./src/app/canvas/canvas.component.ts ***!
  \********************************************/
/*! exports provided: CanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return CanvasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanvasComponent = /** @class */ (function () {
    function CanvasComponent() {
    }
    CanvasComponent.prototype.ngAfterViewInit = function () {
        var canvasEl = this.canvas.nativeElement;
        this.cx = canvasEl.getContext('2d');
        this.cx.lineWidth = 3;
        this.cx.lineCap = 'round';
        this.cx.strokeStyle = "#000";
        this.captureEvents(canvasEl);
    };
    CanvasComponent.prototype.captureEvents = function (canvasEl) {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(canvasEl, 'mousedown')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (e) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(canvasEl, 'mousemove')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(canvasEl, 'mouseup')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(canvasEl, 'mouseleave')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])());
        }))
            .subscribe(function (res) {
            var rect = canvasEl.getBoundingClientRect();
            var prevPos = {
                x: res[0].clientX - rect.left,
                y: res[0].clientY - rect.top
            };
            var currentPos = {
                x: res[1].clientX - rect.left,
                y: res[1].clientY - rect.top
            };
            _this.drawOnCanvas(prevPos, currentPos);
        });
    };
    CanvasComponent.prototype.drawOnCanvas = function (prevPos, currentPos) {
        if (!this.cx) {
            return;
        }
        this.cx.beginPath();
        if (prevPos) {
            this.cx.moveTo(prevPos.x, prevPos.y);
            this.cx.lineTo(currentPos.x, currentPos.y);
            this.cx.stroke();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CanvasComponent.prototype, "canvas", void 0);
    CanvasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-canvas',
            template: __webpack_require__(/*! ./canvas.component.html */ "./src/app/canvas/canvas.component.html"),
            styles: [__webpack_require__(/*! ./canvas.component.css */ "./src/app/canvas/canvas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CanvasComponent);
    return CanvasComponent;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n    margin: 1px 0 0 0;\n    border: solid 2px #888;\n    border-width: 2px 0;\n    padding: 15px 20px;\n    text-align: center;\n    min-height: 300px;\n    clear: both; \n    background: rgba(0,0,0,0.2) url('bg-form.png') no-repeat bottom center;\n    box-shadow: \n        inset 1px 1px 84px rgba(0,0,0,0.24),\n        inset -1px -1px 84px rgba(0, 0, 0, 0.24);\n}\nform ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0; \n}\nform li {\n    margin-bottom: 40px; \n}\nform p {\n    text-align: center; \n}\nform h1 {\n    margin: 0 auto;\n    font-size: 50px;\n    font-family: AcknowledgementMedium;\n    text-align: center;\n    white-space: nowrap;\n    background: url(data:image/png;base64,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) left 13px no-repeat, url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAYCAYAAACmwZ5SAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAWgSURBVHjazFh5SGxVGD/jjMvoU3M0NVfM3VzrqUjmvoBooBVRiD4UNLW//EMMMjIiDJ5SZEMqWJgLzxDRDHymPsklREUxk0zEZFTcl8xt3Pp9lzuPmzk+e8w0fvDNmXvuOeee37efI7q4uGDqKCEhgZo7bm5uLwUGBjopFAr74OBg0crKyuL8/Lyzubn584eHh5b7+/t2Z2dnljs7OxbLy8vmBgYGotjY2PPk5OTvMPdTrDPOdEBdXV3/6hPFx8fnBQQEvG5kZGR5dHRkhI1L8Z9JJBLl4uKimYmJiVQsFpsuLS2xqKgodnJywk20tbVlZmZmDOCYs7Mz09PTY66urtw7CIFNTk6y9vZ2ZmpqypKSkjr9/f0/AfB+nQPOzc0dCwoKelEmk7G1tTWWl5fHbf4ynZ+fX9l/BU2AA1UP0DhrbW1lGxsbZDEDYWFhH6N9qGauGEK8i/cemgSek5PzG5oRDnBnZ+dAT0/Py2S+pCnS0tzcHLO3t39gbGy8hzH+YCXYABwClvP/if4Ab4EPwNMkF6wzxkvXHE0UOJ+8Y29vjwM+OzvLIiIixmBZpRj7Pd7J7OzsXktLS3u2ubk5GkKP05KmvwLnieDDKTC/duqEX3IbUhFp/eDgAEMuRI6OjtQewFxF8FkDmLcS5j5gY2MzPDIysgv/DYFLBMjl8hkSCsA8wppitIdoX+CB55O507dGR0cZLGuyqanJQl9f3zE9PZ3BnRiEz6anp7Vl2hIRH7TeADeresn8CDxpmnh9fZ3zxampKQawaheGAFh9fT0rKytThIeH/56YmBiLbmMCzX/4OR74++QifX19nNYhKFZTU8OtgYDIMjIytA6YKBp8jzfhQHWTZ2ZmWFtbG+vu7lYL+vj4mAtYJJyKiopKBED7kpKSYV7ze7y507c+Oz09ZQUFBayqqoqmk69VpqSkVNIa2gAsEfQ/4pkLHmA7AXhiJ/JXJyenV6BpE3WLqyyAgh/9z8rKehepjLpS+SGUpnbRfo6NyCGMdKS3WlVsxLsv4SZfrK6uirQRuSVq+s/ACnxcgfYH4QsrK6sGmPzb1y1K0Rx5m8AyqVQqfPXNpTxPOe5rHx+f+9C0DODXqN/Q0PAUjf7/CVgdBW5ubr6lerC2tub8nfyRyN3dnQMKk+TytIA+AFcD4OpViyJGGJIJA3AUtC6FoM61lZv/E2BUTRkIMKLs7Gzm7e3NRXEyWwpwvr6+V02R837763VpEoCFLmKEYuZWAHZDEZGdmZnJmSmBpRQGU1yDpq1J07u7u1R5TSOFdQ4NDX1bXl7+KszzIfK7BYYokX62Mf5YqVRKkG9lEN6dra0tAzUupVvA8N1SbNqMoiqlkuLi4seWfWmoD8+F9EAFBwljYWHBGI/PXJfSVARB6OkcMCowv5CQEObl5cU8PT3Z8PCwxjYhBAv6E0FPrHPAVHM3Njb6NTQ0MJihRjchAPwX/P0MaUmkc8AODg73i4qKqFgg82QdHR1cAXIdUXVGJv0konE87dAPylnda5giLVJGOJWGCEJxqI6sKVJXV1dfqXHKxaWlpQwBjE1MTLDx8fHHdTpplA4pxLW1tULAW3zxonvAPOhBNIN8ueYXExOTHxoa+g6VhTh1cWPQxwHB+ZfzdaLIyEiOr6L+/n7hsZMAy1R5/TYUHkLwv1AFCeArhYWFH1L5qFAoWGpq6uXqinLxRyQLnu8KzHfCxcUlrre315cuDHBa0kPV9Z6mT0v/uAC4wRXPTYrzYP4UdE/QTXnrJ6zx83VzEQcK6+rqyre3t9ng4CDT5KHhSaelpwYsWPhNNB58dbV5wzlS/gKBOzG1tLRoFbBEkwsD5IOnmEMXBCSkfA8PjwD4czTdvEg0uzXNmrQGNRFPjZaWp7u2IAm7RQQB/0hnZD4eTPN3aZoiWpf9LcAAlA6I1itbImcAAAAASUVORK5CYII=) right 13px no-repeat; }\nform h1 + p {\n      font-size: 20px;\n      margin-bottom: 50px;\n      font-weight: 600;\n      font-family: LeagueGothic, Tahoma, Geneva, sans-serif; }\nlabel {\n    font-family: LeagueGothic, Tahoma, Geneva, sans-serif;\n    font-size: 26px;\n    display: block;\n    margin: auto;\n    text-align: center; \n}\ninput[type=\"text\"],\ninput[type=\"email\"],\ninput[type=\"password\"],\ninput[type=\"url\"],\ntextarea {\n  background: transparent no-repeat top right;\n  border: 0 dotted #484848;\n  border-bottom-width: 1px;\n  display: block;\n  margin: 10px auto 10px;\n  font-style: italic;\n  font-family: Times, \"Times New Roman\", serif;\n  padding: 5px 30px;\n  width: 50%; \n}\ninput {\n    background-position: 0% 50%;\n    background-repeat: no-repeat;\n    /* padding-left: 15px; */\n}\ninput[type=\"text\"]:required,\ninput[type=\"email\"]:required,\ninput[type=\"password\"]:required,\ninput[type=\"url\"]:required,\ntextarea:required {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTlCNzU1Q0I0NkUzMTFFMDhCRTZERUQ3RjA1MzJDNkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTlCNzU1Q0M0NkUzMTFFMDhCRTZERUQ3RjA1MzJDNkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBOUI3NTVDOTQ2RTMxMUUwOEJFNkRFRDdGMDUzMkM2RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBOUI3NTVDQTQ2RTMxMUUwOEJFNkRFRDdGMDUzMkM2RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsriMYAAAAMXSURBVHjaxJdriIxRGMffGWOZZjYktW5bZCVjshvWtsqlXEPyQZSacm0jhLD54MMqtw+ilNvafKDcJbXWpbTCskRjCRNlPxCldpOdsQ07/s/0f7fT2fO+O43Z9dSvt3Pe95z/Oc95znPO60mlUtb/MJ9aaGpqsuLxuOX1ejNpOwEUgq/gRXcfd3R0WMFg0AqFQumyR51xJBKxYrGYlZeX110/88B14AdJaQouuDVob29Pi9bU1HSdsd/vtwKBQCbCGykq1hdsA1c5CLNrfb50/7Z5s1yiwVp5oDKQjCxb4c9auQXEe0P4uVZ+DX5nHdW0hWAJ1+smqDN880ACVRn4fYf+JerXgQLwFFQ7CYfBFdCf5Q1gD9hrmOFHUAR+gUaD6FJwFIxkeS1IgPMmV09RRG2rAju0up+Ku9+BZu39anBZEbVtutMaJxxcdgis0uoe8flKtqkmegr0MfTT4iQs63nLQfwEWKmU3/L5Rqnb5SIadVvjFq7NfLAAlDNABgDJKudAgJ03K64OgiNgjdJXK7ddIydzG/xwi2px2w3iYQCVgEVMlSfBYnYk384E+0CIg6kFdxmAH0Aq0+2kmjSKkYtgGLfabg5E3m/lOi8HdzjTnCeQLzyJvrHs4fM7Z9ua68xVyBNIXPiEbr3HJCMun8b6BrAZjM8mc9lJfyoo5d6bCIbwnXS+nm1fggNgJyO2jMg+fw8ects9A5/cZiydVTL065g8ZiuicpjOYuCMYF0B13gG31uM8klgC7jEZHOcu8MovALsp2t1O8ztYieLIj5HK8lH3h9zOEYriFF4nIPrRXS7VlfCZ6lWv8lBXGyMk/Bjw8dVBtF+oFgZwCCDeKWWSu30agyuWubkZQyQakaybuLesUrElxlS7UEenxXc/5LBTrtF9VniZuWctW1zHXJ8A8nZDWSOVi5WkkmPXX1EYJRWN5RbqEeFJT//0e/r/3TnSiQSVltbm5VMJrtrdwZM5p1a7JrLJaLzQi/9d7pN/ZOIRqPpXxiPJ6Plksw0nNFfb/BCl1+Y/Px8KxwOdxXuTfsrwAARwspYbyWtowAAAABJRU5ErkJggg==');\n}\ninput[type=\"text\"]:focus:invalid,\ninput[type=\"email\"]:focus:invalid,\ninput[type=\"password\"]:focus:invalid,\ninput[type=\"url\"]:focus:invalid,\ntextarea:focus:invalid {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkEyRTcwNzQ0MjEwMTFFMDhBMkZGQjgzMDMwRjMzOUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkEyRTcwNzU0MjEwMTFFMDhBMkZGQjgzMDMwRjMzOUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQTJFNzA3MjQyMTAxMUUwOEEyRkZCODMwMzBGMzM5RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQTJFNzA3MzQyMTAxMUUwOEEyRkZCODMwMzBGMzM5RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PraSuWgAAAZoSURBVHjalFdLbxNX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\"); \n}\ninput[type=\"text\"]:focus:valid,\n  input[type=\"email\"]:focus:valid,\n  input[type=\"password\"]:focus:valid,\n  input[type=\"url\"]:focus:valid,\n  textarea:focus:valid {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkEyRTcwNzg0MjEwMTFFMDhBMkZGQjgzMDMwRjMzOUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkEyRTcwNzk0MjEwMTFFMDhBMkZGQjgzMDMwRjMzOUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQTJFNzA3NjQyMTAxMUUwOEEyRkZCODMwMzBGMzM5RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQTJFNzA3NzQyMTAxMUUwOEEyRkZCODMwMzBGMzM5RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pvn+QSoAAAZySURBVHjanFdZa5xl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\"); \n}\ninput[type=number] {\n    width: 3em; \n}\n::-webkit-input-placeholder {\n    color: #333; \n}\n:invalid {\n    box-shadow: none; \n}\ninput {\n    font-size: 20px;\n    text-align: center; \n}\ninput[type=submit],\ninput[type=button] {\n  border: none;\n  border-radius: 5px;\n  background-color: #333;\n  /* SVG for IE9 and Opera */\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 standalone%3D%22no%22%3F%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.0%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FTR%2F2001%2FREC-SVG-20050904%2FDTD%2Fsvg10.dtd%22%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22%3E%3Ctitle%3EButton Gradient%3C%2Ftitle%3E %3Cdefs%3E   %3CradialGradient id%3D%22grad%22  cx%3D%2230%25%22 cy%3D%22120%25%22 fx%3D%2230%25%22 fy%3D%22120%25%22 r%3D%2250%25%22 gradientUnits%3D%22userSpaceOnUse%22%3E    %3Cstop offset%3D%220%22 stop-color%3D%22%23909090%22 %2F%3E    %3Cstop offset%3D%221%22 stop-color%3D%22%23484848%22 %2F%3E  %3C%2FradialGradient%3E%3C%2Fdefs%3E%3Crect x%3D%220%22 y%3D%220%22 width%3D%22100%25%22 height%3D%22100%25%22 style%3D%22fill%3Aurl(%23grad)%22  %2F%3E%3C%2Fsvg%3E\");\n  /* Older WebKit */\n  /* W3C unprefixed */\n  background-image: radial-gradient(circle at 30% 120%, #909090 0%, #484848 50%);\n  color: #fff;\n  font-family: LeagueGothic, Tahoma, Geneva, sans-serif;\n  text-transform: uppercase;\n  font-size: 1.75rem;\n  padding: 10px 30px;\n  margin: 10px auto;\n  opacity: 0.8;\n  transition: opacity .25s linear; \n}\ninput[type=submit]:hover {\n    opacity: 1;\n    transition: opacity .25s linear; \n}\n"

/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"register\" method=\"post\">\n  <header>\n    <h1>Sign Me Up!</h1>\n    <p>I would like to receive your fine publication.</p>\n  </header>\n\n  <ul>\n    <li>\n      <label for=\"register-name\">My name is:</label>\n      <input type=\"text\" id=\"register-name\" name=\"name\" required aria-required=\"true\">\n    </li>\n    <li>\n      <label for=\"email\">My email address is:</label>\n      <input type=\"email\" id=\"email\" name=\"email\" required aria-required=\"true\">\n    </li>\n    <li>\n      <label for=\"url\">My website is located at:</label>\n      <input type=\"url\" id=\"url\" name=\"url\" placeholder=\"e.g. http://example.com\">\n    </li>\n    <li>\n      <label for=\"password\">I would like my password to be:</label>\n      <p>(at least 6 character, no spaces)</p>\n      <input type=\"password\" id=\"password\" name=\"password\" required aria-required=\"true\" title=\"(at least 6 characters, no space)\" pattern=\"\\S{6,}\">\n    </li>\n    <li>\n      <label for=\"rating\">On a scale of 1 to 10, my knowledge of HTML5 is:</label>\n      <input type=\"range\" name=\"rating\" min=\"1\" max=\"10\" step=\"1\" id=\"rating\">\n    </li>\n    <li>\n      <label for=\"startdata\">Please start my subscription on:</label>\n      <input type=\"date\" min=\"2019-01-01\" max=\"2019-02-01\" id=\"startdate\" name=\"startdate\" required aria-required=\"true\" placeholder=\"2019-01-01\">\n    </li>\n    <li>\n      <label for=\"quantity\">I would like to receive <input type=\"number\" min=\"1\" name=\"quantity\" id=\"quantity\"> copies of <cite>The HTML5 Herald</cite>.</label>\n    </li>\n    <li>\n      <label for=\"upsell\">Also sign me up for <cite>The CSS3 Chronicle</cite></label>\n      <input type=\"checkbox\" id=\"upsell\" name=\"upsell\" value=\"CSS Chronicle\">\n    </li>\n    <li>\n      <input type=\"submit\" id=\"register-submit\" value=\"Send Post Haste\">\n    </li>\n  </ul>\n</form>"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "article, aside, figure, footer, header, main, nav, section {\n    display: block;\n  }\n\nmain {\n    margin: 1px 0 0 0;\n    border-top: solid 1px #8e8e8e;\n    padding: 15px 0;\n    clear: both; \n}\n\nmain > div {\n    float: left; \n}\n\nmain > div:first-of-type,\nmain > div #primary {\n  width: 50%;\n  padding-right: 4px;\n  box-sizing: border-box; \n}\n\nmain > div:nth-of-type(2),\nmain > div #secondary {\n  width: 17%; \n}\n\nmain > div:last-of-type,\nmain > div .tertiary {\n  width: 33%;\n  margin-right: 0;\n  padding-left: 4px;\n  box-sizing: border-box; \n}\n\nmain > div:first-of-type h1 {\n    font-size: 33px;\n    padding: 0 0 4px 0;\n    letter-spacing: -1px;\n    text-align: left; \n}\n\nmain h1 {\n    font-size: 22px;\n    margin: 10px 0 8px 0; \n}\n\narticle h2 {\n    background: url(data:image/gif;base64,R0lGODlhdwAFALMAAAAAAP///83Nzba2tq6urqmpqaGhoZSUlIqKinx8fFxcXP///wAAAAAAAAAAAAAAACH5BAEAAAsALAAAAAB3AAUAAAR0cMlJq704YyHIMZwmjmRpnugiDIZxIIRBFLCQ3jdNDHRRHIRgLHjwvRDIREJxOCgUiARPoTQMDomXMtpEvFpFA6zQmn0KQhfCxyQkkOgjEklFPN9ZPOIapb6jSW84gxkrTS4GPjsDNoSOj5AlHGSMjZGXFBEAOw==) no-repeat top center;\n    font-size: 14px;\n    text-transform: none;\n    font-family: \"Times New Roman\", Times, serif;\n    font-weight: bold;\n    text-shadow: none;\n    text-align: center; \n}\n\n.content {\n    -webkit-columns: 3 9em;\n    columns: 3 9em;\n    -webkit-column-gap: 10px;\n    -moz-column-count: 3;\n    -moz-column-width: 9em;\n    -moz-column-gap: 10px;\n    -webkit-column-count: 3;\n            column-count: 3;\n    -webkit-column-width: 9em;\n            column-width: 9em;\n    column-gap: 10px; \n}\n\n#tertiary .content {\n    -webkit-column-count: 2;\n    -webkit-column-width: 112px;\n    -webkit-column-gap: 10px;\n    -moz-column-count: 2;\n    -moz-column-width: 112px;\n    -moz-column-gap: 10px;\n    column-count: 2;\n    -webkit-column-width: 117px;\n            column-width: 117px;\n    column-gap: 10px; \n}\n\n#tertiary article:last-of-type {\n    border: none; \n}\n\n#secondary article {\n    padding: 0 2px 0 4px;\n    float: left;\n    border-right: solid 1px #979797;\n    border-left: solid 1px #979797; \n}\n\n#secondary h1 {\n    margin-top: 0; \n}\n\nimg[alt~=Cat] {\n    margin: 0 auto 15px;\n    display: block; \n}\n\naside {\n    float: left;\n    width: 246px;\n    margin-right: 0;\n    padding-left: 4px; \n}\n\naside h1,\naside h2 {\n  font-weight: normal;\n  margin: 0;\n  text-align: center; \n}\n\naside article {\n    width: 236px;\n    border: 1px solid #ccc;\n    margin-bottom: 5px; \n\n}\n\naside p + a {\n    display: block;\n    text-decoration: none;\n    border: 5px double;\n    color: #ffffff;\n    background-color: #484848;\n    text-align: center;\n    font-size: 28px;\n    margin: 5px 5px 9px 5px;\n    padding: 15px 0;\n    position: relative;\n    border-radius: 25px;\n    box-shadow: 2px 5px 0 0 #484848;\n    text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.5);\n    font-family: AcknowledgementMedium, sans-serif; \n}\n\naside p + a:hover{\n    box-shadow: 4px 10px #484848;\n    top: -5px;\n    left: -2px;\n    position: relative; \n}\n\n.ad-ad1 h1 {\n    font-family: AcknowledgementMedium;\n    letter-spacing: 0.1em;\n    font-size: 36px;\n    margin: 0 0 0 0;\n    text-align: center; \n}\n\n.ad-ad1 h1:first-letter {\n    letter-spacing: -0.1em; \n}\n\n.ad-ad1 p {\n    margin: 0;\n    font-family: AcknowledgementMedium;\n    text-transform: uppercase;\n    font-size: 14px;\n    text-align: center; \n}\n\naside > article:nth-of-type(2),\n.ad-ad2 {\n  background-image: url(data:image/png;base64,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);\n  background-position: bottom left;\n  background-repeat: no-repeat;\n  min-height: 140px; \n}\n\naside > article:nth-of-type(2) h1,\n  .ad-ad2 h1 {\n    font-size: 20px;\n    font-family: AcknowledgementMedium;\n    padding: 0 30px 0 75px;\n    line-height: 1;\n    color: #999;\n    margin: 0 0 0 15px;\n    text-align: left; \n}\n\naside > article:nth-of-type(2) h1 span,\n.ad-ad2 h1 span {\n  font-size: 30px;\n  color: #999999;\n  display: inline-block;\n  transition: color 0.2s ease-out, -webkit-transform 0.2s ease-out;\n  transition: color 0.2s ease-out, transform 0.2s ease-out;\n  transition: color 0.2s ease-out, transform 0.2s ease-out, -webkit-transform 0.2s ease-out; \n}\n\naside > article:nth-of-type(2) h1:hover span,\n.ad-ad2 h1:hover span {\n  color: #484848;\n  -webkit-transform: rotate(10deg) translateX(40px) scale(1.5);\n  transform: rotate(10deg) translateX(40px) scale(1.5); \n}\n\naside > article:nth-of-type(2) p,\n.ad-ad2 p {\n  padding: 5px 3px 0 75px;\n  font-size: 0.85em; \n}\n\n.ad-ad3 {\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 standalone%3D%22no%22%3F%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.0%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FTR%2F2001%2FREC-SVG-20050904%2FDTD%2Fsvg10.dtd%22%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22%3E%3Ctitle%3EModule Gradient%3C%2Ftitle%3E %3Cdefs%3E   %3ClinearGradient id%3D%22grad%22  x1%3D%220%22 y1%3D%220%22 x2%3D%220%22 y2%3D%22100%25%22%3E    %3Cstop offset%3D%220%22 stop-opacity%3D%220.3%22 color-stop%3D%22%23000000%22 %2F%3E    %3Cstop offset%3D%220.37%22 stop-opacity%3D%220%22 stop-color%3D%22%23000000%22 %2F%3E    %3Cstop offset%3D%220.83%22 stop-opacity%3D%220%22 stop-color%3D%22%23000000%22 %2F%3E    %3Cstop offset%3D%220.92%22 stop-opacity%3D%220.06%22 stop-color%3D%22%23000000%22 %2F%3E    %3Cstop offset%3D%220.98%22 stop-opacity%3D%220%22 stop-color%3D%22%23000000%22 %2F%3E  %3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect x%3D%220%22 y%3D%220%22 width%3D%22100%25%22 height%3D%22100%25%22 style%3D%22fill%3Aurl(%23grad)%22  %2F%3E%3C%2Fsvg%3E\");\n    /* Gradient syntax for WebKit */\n    /* Unprefixed W3C syntax */\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0, transparent 37%, transparent 83%, rgba(0, 0, 0, 0.06) 92%, transparent 98%);\n    background-position: 0 0;\n    background-repeat: no-repeat;\n    padding-bottom: 10px;\n}\n\n:not(article) > header h2{\n    text-transform: lowercase;\n    text-shadow: 1px 1px #FFFFFF;\n}\n\n.ad-ad3 h1 {\n    color: #484848;\n    text-align: center;\n    text-transform: uppercase;\n    text-shadow: 1px 1px #fff;\n    font-family: LeagueGothic, Arial Narrow, Helvetica, sans-serif;\n    font-size: 40px;\n    font-weight: bold;\n    letter-spacing: -2px;\n    margin: 20px 5px 0;\n}\n\n.ad-ad3 h1:after {\n    content: '';\n    width: 90px;\n    height: 92px;\n    background-image: url(data:image/png;base64,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);\n    display: block;\n    margin: auto;\n    -webkit-animation: bike steps(4, start) infinite 0.4s, move linear infinite 8s;\n    animation: bike steps(4, start) infinite 0.4s, move linear infinite 8s;\n    -webkit-animation-play-state: paused; \n    animation-play-state: paused;\n}\n\n.ad-ad3 h1:hover:after {\n    -webkit-animation-play-state: running; \n    animation-play-state: running; \n}\n\n.ad-ad3 a {\n  text-decoration: none; \n}\n\n@-webkit-keyframes bike {\n    0% {\n        background-position: 0 0;\n    }\n    100% {\n        background-position: -360px 0;\n    }\n}\n\n@keyframes bike {\n    0% {\n        background-position: 0 0;\n    }\n    100% {\n        background-position: -360px 0;\n    }\n}\n\n@-webkit-keyframes move {\n    0% { \n        -webkit-transform: translate(-100px); \n                transform: translate(-100px);\n    }\n    100%{\n        -webkit-transform: translate(100px);\n                transform: translate(100px);\n    }\n}\n\n@keyframes move {\n    0% { \n        -webkit-transform: translate(-100px); \n                transform: translate(-100px);\n    }\n    100%{\n        -webkit-transform: translate(100px);\n                transform: translate(100px);\n    }\n}\n\n/* #primary article .content {\n    -webkit-column-count: 3;\n    -moz-column-count: 3;\n    column-count: 3;\n}\n#tertiary article .content {\n    -webkit-column-count: 2;\n    -moz-column-count: 2;\n    column-count: 2;\n}\n\n#primary article .content,\n#tertiary article .content {\n    -webkit-column-gap: 10px;\n    -moz-column-gap: 10px;\n    column-gap: 10px;\n\n    -webkit-column-width: 9em;\n    -moz-column-gap: 9em;\n    column-width: 9em;\n\n    column-rule: 1px solid red;\n} */\n\nfooter {\n    clear: both;\n}\n\n#authors {\n    padding-top: 10px;\n    padding-right: 20px;\n    background-color: #d1d1d1;\n    border: solid 1px #888;\n    border-width: 1px 0;\n    overflow: hidden;\n    display: flex; \n}\n\n#authors h1 {\n    margin: 0; \n}\n\n#authors section {\n    padding: 0 0 0 20px;\n    box-sizing: border-box; \n}\n\n#authors section:nth-of-type(2) {\n        order: 2; \n    }"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div id=\"primary\">\n    <article id=\"ac1\">\n      <div class=\"vc\">\n        <video width=\"373\" height=\"280\" preload=\"\" id=\"video\" poster=\"../../assets/images/ford-plane-still.png\" controls>\n          <!-- MP4 must be first for iPad! -->\n          <source src=\"../../assets/media/ford-plane-takes-off.mp4\" type=\"video/mp4\"><!-- Safari / iOS video -->\n          <source src=\"../../assets/media/ford-plane-takes-off.ogv\" type=\"video/ogg\"><!-- Firefox / Opera / Chrome10 -->\n          <!-- fallback to Flash: -->\n          <object width=\"373\" height=\"280\" type=\"application/x-shockwave-flash\" data=\"jwplayer/player.swf\">\n            <!-- Firefox uses the 'data' attribute above, IE/Safari uses the param below -->\n            <param name=\"movie\" value=\"jwplayer/player.swf\">\n            <param name=\"allowFullScreen\" value=\"true\">\n            <param name=\"wmode\" value=\"transparent\">\n            <param name=\"flashvars\" value=\"controlbar=over&amp;image=../../assets/images/ford-plane-still.png&amp;file=../../assets/media/ford-plane-takes-off.mp4\">\n            <!-- fallback image. note the title field below, put the title of the video there -->\n            <img src=\"../../assets/images/ford-plane-still.png\" id=\"video-still\" width=\"373\" height=\"280\" alt=\"Airplane\" title=\"No video playback capabilities, please download the video below\">\n          </object>\n        </video>\n\n      </div><!-- /#video-container -->\n\n      <h1>Video is the final frontier, and now we have conquered it!</h1>\n      <div class=\"content\">\n        <p>Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus. Quisque lacus quam,\n          egestas ac tincidunt a, lacinia vel velit. Morbi ac commodo nulla.</p>\n        <p>In condimentum orci id nisl volutpat bibendum. Quisque commodo hendrerit lorem quis egestas. Vivamus rutrum\n          nunc non neque consectetur quis placerat neque lobortis. Nam vestibulum, arcu sodales feugiat consectetur,\n          nisl orci bibendum elit, eu euismod magna sapien ut nibh. Aliquam erat volutpat. Mauris vel neque sit amet\n          nunc gravida congue sed sit amet purus.</p>\n        <p>Quisque lacus quam, egestas ac tincidunt a, lacinia vel velit. Morbi ac commodo nulla. In condimentum orci\n          id nisl volutpat bibendum. Quisque commodo hendrerit lorem quis egestas. Vivamus rutrum nunc non neque\n          consectetur quis placerat neque lobortis. Nam vestibulum, arcu sodales feugiat consectetur, nisl orci\n          bibendum elit, eu euismod magna sapien ut nibh.</p>\n        <p>Neque sit amet nunc gravida congue sed sit amet purus. Quisque lacus quam, egestas ac tincidunt a, lacinia\n          vel velit. Morbi ac commodo nulla. In condimentum orci id nisl volutpat bibendum. Quisque commodo hendrerit\n          lorem quis egestas. Vivamus rutrum nunc non neque consectetur quis placerat neque lobortis. Nam vestibulum,\n          arcu sodales feugiat consectetur, nisl orci bibendum elit, eu euismod magna sapien ut nibh.</p>\n      </div>\n    </article>\n    <article>\n      <h1>Great Things Are Possible with CSS Columns! Pip Pip Pip!</h1>\n      <div class=\"content\">\n        <p>Maecenas quis tortor arcu. Vivamus rutrum nunc non neque consectetur quis placerat neque lobortis. Nam\n          vestibulum, arcu sodales feugiat consectetur, nisl orci bibendum elit, eu euismod magna sapien ut nibh.</p>\n        <p>Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque\n          faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in\n          blandit. </p>\n        <p>Quisque lacus quam, egestas ac tincidunt a, lacinia vel velit. Morbi ac commodo nulla. In condimentum orci\n          id nisl volutpat bibendum. Quisque commodo hendrerit lorem quis egestas. Vivamus rutrum nunc non neque\n          consectetur quis placerat neque lobortis. Nam vestibulum, arcu sodales feugiat consectetur, nisl orci\n          bibendum elit, eu euismod magna sapien ut nibh.</p>\n        <p>Neque sit amet nunc gravida congue sed sit amet purus. Quisque lacus quam, egestas ac tincidunt a, lacinia\n          vel velit. Morbi ac commodo nulla. In condimentum orci id nisl volutpat bibendum. Quisque commodo hendrerit\n          lorem quis egestas. Vivamus rutrum nunc non neque consectetur quis placerat neque lobortis. Nam vestibulum,\n          arcu sodales feugiat consectetur, nisl orci bibendum elit, eu euismod magna sapien ut nibh.</p>\n        <p>Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque\n          faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in\n          blandit. </p>\n      </div>\n    </article>\n  </div>\n  <div id=\"secondary\">\n    <article id=\"ac2\">\n      <header>\n        <h1>Text Shadow is the New Black</h1>\n        <h2>How do we do it?</h2>\n      </header>\n      <div class=\"content\">\n        <p>Maecenas quis tortor arcu. Vivamus rutrum nunc non neque consectetur quis placerat neque lobortis. Nam\n          vestibulum, arcu sodales feugiat consectetur, nisl orci bibendum elit, eu euismod magna sapien ut nibh.</p>\n        <p>Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque\n          faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in\n          blandit. </p>\n      </div>\n    </article>\n\n    <article id=\"ac3\">\n      <h1>Wai-Aria? HAHA!</h1>\n      <h2 id=\"catHeading\">Form Accessibility</h2>\n\n      <img src=\"../../assets/images/cat.png\" id=\"cat\" alt=\"WAI-ARIA Cat\">\n      <div class=\"content\">\n        <p id=\"mouseContainer\" class=\"mc\">\n          <img src=\"../../assets/images/computer-mouse-pic.png\" alt=\"computer mouse\" id=\"mouse1\" draggable=\"true\">\n          <img src=\"../../assets/images/computer-mouse-pic.png\" alt=\"computer mouse\" id=\"mouse2\" draggable=\"true\">\n          <img src=\"../../assets/images/computer-mouse-pic.png\" alt=\"computer mouse\" id=\"mouse3\" draggable=\"true\">\n        </p>\n        <p>Maecenas quis tortor arcu. Vivamus rutrum nunc non neque consectetur quis placerat neque lobortis. Nam\n          vestibulum, arcu sodales feugiat consectetur, nisl orci bibendum.</p>\n        <p>Nam vestibulum, arcu sodales feugiat.</p>\n      </div>\n    </article>\n\n    <article id=\"ac4\">\n      <h1>Modernizr Times</h1>\n      <p>A New Era</p>\n\n      <div class=\"content\">\n        <p>Maecenas quis tortor arcu. Vivamus rutrum nunc non neque consectetur quis placerat neque lobortis. Nam\n          vestibulum, arcu sodales feugiat consectetur, nisl orci bibendum.</p>\n        <p>Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque\n          faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in\n          blandit. </p>\n      </div>\n    </article>\n  </div>\n\n  <div id=\"tertiary\">\n    <aside>\n\n      <article class=\"ad-ad1\">\n        <h1>Wanted</h1>\n        <p>Dead or Alive</p>\n        <a href=\"http://sitepoint.com/books/htmlcss1/\" class=\"wanted\">&lt;HTML5&gt; & {{'{'}}CSS3{{'}'}}</a>\n        <p>Reward: Happiness and satisfaction</p>\n      </article>\n\n      <article class=\"ad-ad2\">\n        <h1>Put your <span>dukes</span> up, sire</h1>\n        <p>It&rsquo;s time for a good old thrashing.<br>\n          I will rotate your moustache OFF!</p>\n      </article>\n      <article class=\"ad-ad3\">\n        <h1><a href=\"http://sitepoint.com/books/htmcss1/\">HTML5 and CSS3 <br />Now in Book Form!</a></h1>\n      </article>\n    </aside>\n\n\n    <article id=\"ac5\">\n      <header>\n        <h1>CSS Transitions - The State of Play</h1>\n        <h2>The future?</h2>\n      </header>\n\n      <div class=\"content\">\n        <p>Maecenas quis tortor arcu. Vivamus rutrum nunc non neque consectetur quis placerat neque lobortis. Nam\n          vestibulum, arcu sodales feugiat consectetur, nisl orci bibendum elit, eu euismod magna sapien ut nibh.</p>\n        <p>Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque\n          faucibus vestibulum.</p>\n        <p>Vivamus rutrum nunc non neque consectetur quis placerat neque lobortis. Nam vestibulum, arcu sodales feugiat\n          consectetur, nisl orci bibendum elit, eu euismod magna sapien ut nibh.</p>\n\n        <p>Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque\n          faucibus vestibulum. Nulla at. vestibulum. Nulla at.</p>\n        <p>Vivamus rutrum nunc non neque consectetur quis placerat neque lobortis. Nam vestibulum, arcu sodales feugiat\n          consectetur, nisl orci bibendum elit, eu euismod magna sapien ut nibh.</p>\n\n        <p>Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque\n          faucibus vestibulum. Nulla at. vestibulum. Nulla at.</p>\n      </div>\n    </article>\n\n  </div>\n</main>\n<footer>\n  <section id=\"authors\">\n    <section>\n      <h1>Alexis Goldstein</h1>\n      <p>Maecenas quis tortor arcu. Vivamus rutrum nunc non neque consectetur quis placerat neque lobortis. Nam vestibulum, arcu sodales feugiat consectetur, nisl orci bibendum elit, eu euismod magna sapien ut nibh.</p>\n    </section>\n    <section>\n      <h1>Louis Lazaris</h1>\n      <p>Maecenas quis tortor arcu. Vivamus rutrum nunc non neque consectetur quis placerat neque lobortis. Nam vestibulum, arcu sodales feugiat consectetur, nisl orci bibendum elit, eu euismod magna sapien ut nibh.</p>\n    </section>\n    <section>\n      <h1>Estelle Weyl</h1>\n      <p>Maecenas quis tortor arcu. Vivamus rutrum nunc non neque consectetur quis placerat neque lobortis. Nam vestibulum, arcu sodales feugiat consectetur, nisl orci bibendum elit, eu euismod magna sapien ut nibh.</p>\n    </section>\n  </section>\n</footer>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        // let videoEl = document.getElementsByTagName('video')[0],
        // playPauseBtn = document.getElementById('playPause'),
        // vidControls = document.getElementById('controls'),
        // muteBtn = document.getElementById('muteUnmute'),
        // timeHolder = document.getElementById('timer');
        // videoEl.removeAttribute('controls');
        // videoEl.addEventListener('canplaythrough',function(){
        //   vidControls.classList.remove('hidden');
        // },false);
        // playPauseBtn.addEventListener('click',function(){
        //   if (videoEl.pause) {
        //     videoEl.play();
        //   } else {
        //     videoEl.pause();
        //   }
        // }, false);
        // videoEl.addEventListener('play',function(){
        //   playPauseBtn.classList.add('playing');
        // },false);
        // videoEl.addEventListener('pause', function(){
        //   playPauseBtn.classList.remove('playing');
        // },false);
        // muteBtn.addEventListener('click',function(){
        //   if(videoEl.muted) {
        //     videoEl.muted = false;
        //   } else {
        //     videoEl.muted = true;
        //   }
        // }, false);
        // videoEl.addEventListener('volumechange', function() {
        //   if(videoEl.muted) {
        //     muteBtn.classList.add('muted');
        //   } else {
        //     muteBtn.classList.remove('muted');
        //   }
        // }, false);
        // videoEl.addEventListener('ended', function() {
        //   videoEl.currentTime = 0;
        // }, false);
        // videoEl.addEventListener('timeupdate', function() {
        //   timeHolder.innerHTML = secondsToTime(videoEl.currentTime);
        // }, false);
        function secondsToTime(s) {
            var h = Math.floor(s / (60 * 60)), dm = s % (60 * 60), m = Math.floor(dm / 60), ds = dm % 60, secs = Math.ceil(ds), fulltime;
            if (secs === 60) {
                secs = 0;
                m = m + 1;
            }
            if (secs < 10) {
                secs = '0' + secs;
            }
            if (m === 60) {
                m = 0;
                h = h + 1;
            }
            if (m < 10) {
                m = '0' + m;
            }
            if (h === 0) {
                fulltime = m + ':' + secs;
            }
            else {
                fulltime = h + ':' + m + secs;
            }
            return fulltime;
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lijie/Fendlearning/html5-css3/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map