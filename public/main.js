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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n\n<img src=\"/assets/logo-uva.png\" class=\"logo\">"

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
        this.title = 'prot';
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _tnc_tnc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tnc/tnc.component */ "./src/app/tnc/tnc.component.ts");
/* harmony import */ var _experiment_experiment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./experiment/experiment.component */ "./src/app/experiment/experiment.component.ts");
/* harmony import */ var _survey_survey_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./survey/survey.component */ "./src/app/survey/survey.component.ts");
/* harmony import */ var _thanks_thanks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./thanks/thanks.component */ "./src/app/thanks/thanks.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _initialsurvey_initialsurvey_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./initialsurvey/initialsurvey.component */ "./src/app/initialsurvey/initialsurvey.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'terms', component: _tnc_tnc_component__WEBPACK_IMPORTED_MODULE_6__["TncComponent"] },
    { path: 'initialsurvey', component: _initialsurvey_initialsurvey_component__WEBPACK_IMPORTED_MODULE_12__["InitialsurveyComponent"] },
    { path: 'experiment', component: _experiment_experiment_component__WEBPACK_IMPORTED_MODULE_7__["ExperimentComponent"] },
    { path: 'survey', component: _survey_survey_component__WEBPACK_IMPORTED_MODULE_8__["SurveyComponent"] },
    { path: 'thanks', component: _thanks_thanks_component__WEBPACK_IMPORTED_MODULE_9__["ThanksComponent"] },
    { path: 'intro', component: _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'intro' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"],
                _tnc_tnc_component__WEBPACK_IMPORTED_MODULE_6__["TncComponent"],
                _experiment_experiment_component__WEBPACK_IMPORTED_MODULE_7__["ExperimentComponent"],
                _survey_survey_component__WEBPACK_IMPORTED_MODULE_8__["SurveyComponent"],
                _thanks_thanks_component__WEBPACK_IMPORTED_MODULE_9__["ThanksComponent"],
                _initialsurvey_initialsurvey_component__WEBPACK_IMPORTED_MODULE_12__["InitialsurveyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [
                _data_service__WEBPACK_IMPORTED_MODULE_11__["DataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.concise = Math.random() >= 0.5;
    }
    DataService.prototype.newEntry = function () {
        var _this = this;
        this.http.post('api/newUserEntry', { concise: this.concise })
            .toPromise()
            .then(function (result) { return _this.userId = result.id; });
    };
    DataService.prototype.updateEntry = function () {
        this.http.post('api/updateReadUserEntry', { id: this.userId })
            .toPromise();
    };
    DataService.prototype.answerEntry = function (answer) {
        this.http.post('api/updateAnswerUserEntry', { id: this.userId, answer: answer })
            .toPromise();
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/experiment/experiment.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experiment/experiment.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/experiment/experiment.component.html":
/*!******************************************************!*\
  !*** ./src/app/experiment/experiment.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">Round {{round}}</div>\n    <div class=\"card-body\">\n        <div>\n            <img [src]=\"'assets/color'+round+'.png'\">\n            <div class=\"mt-3 justify-content-around d-flex\">\n                <button class=\"btn btn-default\" (click)=\"nextRound()\">Harmonious</button>\n                <button class=\"btn btn-default\" (click)=\"nextRound()\">Disharmonious</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/experiment/experiment.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experiment/experiment.component.ts ***!
  \****************************************************/
/*! exports provided: ExperimentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentComponent", function() { return ExperimentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExperimentComponent = /** @class */ (function () {
    function ExperimentComponent(router) {
        this.router = router;
        this.round = 1;
    }
    ExperimentComponent.prototype.ngOnInit = function () {
    };
    ExperimentComponent.prototype.nextRound = function () {
        if (this.round === 4) {
            this.router.navigate(['survey']);
        }
        else {
            this.round += 1;
        }
    };
    ExperimentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experiment',
            template: __webpack_require__(/*! ./experiment.component.html */ "./src/app/experiment/experiment.component.html"),
            styles: [__webpack_require__(/*! ./experiment.component.css */ "./src/app/experiment/experiment.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ExperimentComponent);
    return ExperimentComponent;
}());



/***/ }),

/***/ "./src/app/initialsurvey/initialsurvey.component.css":
/*!***********************************************************!*\
  !*** ./src/app/initialsurvey/initialsurvey.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    margin-bottom: 0.25rem;\n}\n\n#gender {\n    margin-top: 0.75rem;\n    margin-bottom: 0 !important;\n}"

/***/ }),

/***/ "./src/app/initialsurvey/initialsurvey.component.html":
/*!************************************************************!*\
  !*** ./src/app/initialsurvey/initialsurvey.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n        Visual Perception Experiment\n    </div>\n    <div class=\"card-body\">\n        <p>To enrich the statistics of this experiment, some personal information is needed.\n            <br> This data will be saved for research purposes, but will not be linked to you as an individual.</p>\n        <hr>\n        <form [formGroup]=\"survey\" (ngSubmit)=\"onSubmit()\" id=\"surveyForm\">\n            <p>\n                <i>Age</i>\n            </p>\n            <input type=\"number\" class=\"form-control\" placeholder=\"Age\" formControlName=\"age\">\n            <p id=\"gender\">\n                <i>Gender</i>\n            </p>\n            <div class=\"form-check-inline\" style=\"margin-bottom: 0.75rem;\">\n                <label class=\"form-check-label\">\n                    <input type=\"radio\" class=\"form-check-input\" name=\"gender\" formControlName=\"gender\" value=\"male\">Male\n                </label>\n            </div>\n            <div class=\"form-check-inline\">\n                <label class=\"form-check-label\">\n                    <input type=\"radio\" class=\"form-check-input\" name=\"gender\" formControlName=\"gender\" value=\"female\">Female\n                </label>\n            </div>\n            <div class=\"form-check-inline\">\n                <label class=\"form-check-label\">\n                    <input type=\"radio\" class=\"form-check-input\" name=\"gender\" formControlName=\"gender\" value=\"other\">Other\n                </label>\n            </div>\n            <p>\n                <i>Do you suffer from any form of colourblindness?</i>\n            </p>\n            <div class=\"form-check-inline\">\n                <label class=\"form-check-label\">\n                    <input type=\"radio\" class=\"form-check-input\" name=\"colour\" formControlName=\"colour\" value=\"yes\">Yes\n                </label>\n            </div>\n            <div class=\"form-check-inline\">\n                <label class=\"form-check-label\">\n                    <input type=\"radio\" class=\"form-check-input\" name=\"colour\" formControlName=\"colour\" value=\"no\">No\n                </label>\n            </div>\n        </form>\n    </div>\n\n    <div class=\"card-footer\">\n        <button class=\"float-right btn btn-primary\" [disabled]=\"!survey.valid\" type=\"submit\" form=\"surveyForm\">Submit</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/initialsurvey/initialsurvey.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/initialsurvey/initialsurvey.component.ts ***!
  \**********************************************************/
/*! exports provided: InitialsurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialsurveyComponent", function() { return InitialsurveyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InitialsurveyComponent = /** @class */ (function () {
    function InitialsurveyComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
    }
    InitialsurveyComponent.prototype.ngOnInit = function () {
        this.survey = this.formBuilder.group({
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            colour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    InitialsurveyComponent.prototype.onSubmit = function () {
        this.router.navigate(['/terms']);
    };
    InitialsurveyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-initialsurvey',
            template: __webpack_require__(/*! ./initialsurvey.component.html */ "./src/app/initialsurvey/initialsurvey.component.html"),
            styles: [__webpack_require__(/*! ./initialsurvey.component.css */ "./src/app/initialsurvey/initialsurvey.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InitialsurveyComponent);
    return InitialsurveyComponent;
}());



/***/ }),

/***/ "./src/app/intro/intro.component.css":
/*!*******************************************!*\
  !*** ./src/app/intro/intro.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/intro/intro.component.html":
/*!********************************************!*\
  !*** ./src/app/intro/intro.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n        Visual Perception Experiment\n    </div>\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">Explanation</h5>\n        This is a short visual perception experiment, conducted by students of the University of Amsterdam. The experiment consists\n        of four rounds. Every round you will be shown a color palette, and we ask you to indicate whether this palette is\n        harmonious or disharmonious.\n\n        <h6 class=\"card-title\" style=\"margin-bottom:0;margin-top:0.75rem\">Definitions</h6>\n        Within this experiment, harmonious has the following definition:\n        <i>forming a pleasant whole</i>. Disharmonious is the opposite of harmonious.\n        <br> \n        <br>\n        When you are ready to start, press the Start button below.\n    </div>\n    <div class=\"card-footer\">\n        <button class=\"btn btn-primary float-right\" routerLink=\"/initialsurvey\">Start</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
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

var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.css */ "./src/app/intro/intro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/survey/survey.component.css":
/*!*********************************************!*\
  !*** ./src/app/survey/survey.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/survey/survey.component.html":
/*!**********************************************!*\
  !*** ./src/app/survey/survey.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">Survey</div>\n    <div class=\"card-body\">\n        <p>The main goal of this experiment is to determine if the length of the Terms and Conditions has significant influence on\n            the willingness of people to read them. To test this, participants of this experiment are divided randomly into two groups:\n        </p>\n        <ul>\n            <li>Group 1: The participant is presented the concise version of the Terms and Conditions</li>\n            <li>Group 2: The participant is presented the extensive version of the Terms and Conditions</li>\n        </ul>\n\n        <p>You were selected for <i> \n            <span *ngIf=\"dataService.concise\">Group 1</span>\n            <span *ngIf=\"!dataService.concise\">Group 2</span>\n            </i>. Please fill in this last form to finish the experiment.\n            \n        </p>\n\n        <hr>\n        <form [formGroup]=\"survey\" (ngSubmit)=\"onSubmit()\" id=\"surveyForm\">\n            \n            <p>\n                <i>Please list everything you can remember from the Terms and Conditions:</i>\n            </p>\n            <textarea type = \"textarea\" rows=\"10\" cols=\"50\" class=\"form-control\" formControlName=\"answer\"></textarea>\n        </form>\n    </div>\n    <div class=\"card-footer\">\n        <button class=\"float-right btn btn-primary\" [disabled]=\"!survey.valid\" type=\"submit\" form=\"surveyForm\">Finish</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/survey/survey.component.ts":
/*!********************************************!*\
  !*** ./src/app/survey/survey.component.ts ***!
  \********************************************/
/*! exports provided: SurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyComponent", function() { return SurveyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SurveyComponent = /** @class */ (function () {
    function SurveyComponent(formBuilder, router, dataService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.dataService = dataService;
        this.survey = formBuilder.group({
            answer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    SurveyComponent.prototype.onSubmit = function () {
        // submit results
        console.log(this.survey.controls['answer'].value);
        this.dataService.answerEntry(this.survey.controls['answer'].value);
        this.router.navigate(['thanks']);
    };
    SurveyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-survey',
            template: __webpack_require__(/*! ./survey.component.html */ "./src/app/survey/survey.component.html"),
            styles: [__webpack_require__(/*! ./survey.component.css */ "./src/app/survey/survey.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], SurveyComponent);
    return SurveyComponent;
}());



/***/ }),

/***/ "./src/app/thanks/thanks.component.css":
/*!*********************************************!*\
  !*** ./src/app/thanks/thanks.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/thanks/thanks.component.html":
/*!**********************************************!*\
  !*** ./src/app/thanks/thanks.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">Thank you for participating!</div>\n    <div class=\"card-body\">\n        Your results have been succesfully submitted.\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/thanks/thanks.component.ts":
/*!********************************************!*\
  !*** ./src/app/thanks/thanks.component.ts ***!
  \********************************************/
/*! exports provided: ThanksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksComponent", function() { return ThanksComponent; });
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

var ThanksComponent = /** @class */ (function () {
    function ThanksComponent() {
    }
    ThanksComponent.prototype.ngOnInit = function () {
    };
    ThanksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thanks',
            template: __webpack_require__(/*! ./thanks.component.html */ "./src/app/thanks/thanks.component.html"),
            styles: [__webpack_require__(/*! ./thanks.component.css */ "./src/app/thanks/thanks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ThanksComponent);
    return ThanksComponent;
}());



/***/ }),

/***/ "./src/app/tnc/tnc.component.css":
/*!***************************************!*\
  !*** ./src/app/tnc/tnc.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-concise {\r\n    height: 70vh;\r\n    overflow: auto;\r\n}\r\n\r\nlabel {\r\n    margin-bottom: 0;\r\n    margin-right: 10px;\r\n    margin-left: 10px;\r\n\r\n}"

/***/ }),

/***/ "./src/app/tnc/tnc.component.html":
/*!****************************************!*\
  !*** ./src/app/tnc/tnc.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n        Terms and Conditions\n    </div>\n    <div *ngIf=\"!dataService.concise\" class=\"card-body not-concise\">\n            <p>These terms and conditions outline the rules and regulations for the use of this website and this experiment.</p>\n            <p>By participating in this experiment we assume you accept these terms and conditions in full. Do not continue\n                to use this website if you do not accept all of the terms and conditions stated on this page. The following\n                terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all\n                Agreements: “Client”, “You” and “Your” refers to you, the person participating in this experiment and accepting\n                these terms and conditions. “The Researchers\", “Ourselves”, “We”, “Our” and “Us”, refers to those persons\n                conducting this experiment. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves, or either\n                the Client or ourselves. All terms refer to the offer, acceptance and consideration of the process of participating\n                in this experiment and the use of this website.\n            </p>\n\n            <h6>License</h6>\n            <p>\n                We reserve the right to save and process all information entered while participating in this experiment and/or using this\n                website. This data will be stored indefinitely and will never at any point be shared with third-parties without\n                explicit consent from the Client, unless required for advancement of the research this experiment is a part\n                of. Any information stored and/or processed will be anonymized and not be linked to any particular person(s).\n            </p>\n\n            Unless otherwise stated, we and/or it’s licensors own the intellectual property rights for all material on this website.\n            All intellectual property rights are reserved. You may view and/or print pages from this website for your own\n            personal use, subject to restrictions set in these terms and conditions. You must not:\n            <ol>\n                <li>Republish material from this website</li>\n                <li>Sell, rent or sub-license material from this website</li>\n                <li>Reproduce, duplicate or copy material from this website</li>\n                <li>Redistribute content from (unless content is specifically made for redistribution)</li>\n            </ol>\n\n            <h6>\n                Hyperlinking to our Content\n            </h6>\n            The following organizations may link to this website without prior written approval:\n            <ol>\n                <li>Government agencies</li>\n                <li>Search engines</li>\n                <li>News organizations</li>\n                <li>Online directory distributors when they list us in the directory may link to this website in the same manner\n                    as they hyperlink to the websites of other listed businesses</li>\n                <li>Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and\n                    charity fundraising groups which may not hyperlink to our website</li>\n            </ol>\n\n            These organizations may link to our home page, to publications or to other website information so long as the link: (a) is\n            not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party\n            and its products or services; and (c) fits within the context of the linking party's site. We may consider and\n            approve in our sole discretion other link requests from the following types of organizations:\n\n            <ol>\n                <li>commonly-known consumer and/or business information sources such as Chambers of Commerce, American Automobile\n                    Association, AARP and Consumers Union</li>\n                <li>dot.com community sites</li>\n                <li>associations or other groups representing charities, including charity giving sites</li>\n                <li>online directory distributors</li>\n                <li>internet portals</li>\n                <li>accounting, law and consulting firms whose primary clients are businesses</li>\n                <li>educational institutions and trade associations</li>\n            </ol>\n\n            <p>\n                We will approve link requests from these organizations if we determine that: (a) the link would not reflect unfavorably on\n                us or our accredited businesses (for example, trade associations or other organizations representing inherently\n                suspect types of business, such as work-at-home opportunities, shall not be allowed to link); (b)the organization\n                does not have an unsatisfactory record with us; (c) the benefit to us from the visibility associated with\n                the hyperlink outweighs the absence of our name recognition; and (d) where the link is in the context of\n                general resource information or is otherwise consistent with editorial content in a newsletter or similar\n                product furthering the mission of the organization. These organizations may link to our home page, to publications\n                or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely\n                imply sponsorship, endorsement or approval of the linking party and it products or services; and (c) fits\n                within the context of the linking party's site.\n            </p>\n\n            <h6>\n                Reservation of Rights\n            </h6>\n            <p>\n                We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to\n                this website. You agree to immediately remove all links to this website upon such request. We also reserve\n                the right to amend these terms and conditions and its linking policy at any time. By continuing to link to\n                this website, you agree to be bound to and abide by these linking terms and conditions.\n            </p>\n\n            <h6>\n                Disclaimer\n            </h6>\n            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to\n            our website and the use of this website (including, without limitation, any warranties implied by law in respect\n            of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer\n            will:\n\n            <ol>\n                <li>limit or exclude our or your liability for death or personal injury resulting from negligence</li>\n                <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>\n                <li>limit any of our or your liabilities in any way that is not permitted under applicable law</li>\n                <li>exclude any of our or your liabilities that may not be excluded under applicable law</li>\n            </ol>\n            The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a) are subject to\n            the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or in relation to the subject\n            matter of this disclaimer, including liabilities arising in contract, in tort (including negligence) and for\n            breach of statutory duty. To the extent that the website and the information and services on the website are\n            provided free of charge, we will not be liable for any loss or damage of any nature.\n    </div>\n        <div class=\"card-body\" *ngIf=\"dataService.concise\">\n            <p>\n                By participating in this experiment we assume you accept these terms and conditions in full. Do not continue to use this\n                website if you do not accept all of the terms and conditions stated on this page.\n            </p>\n\n            Data retrieved in this experiment:\n            <ul>\n                <li>Will be stored indefinitely</li>\n                <li>Will never at any point be shared with third-parties without explicit consent from the client</li>\n                <li>Is anonymized</li>\n                <li>Is used for research purposes only</li>\n            </ul>\n\n            You must not:\n            <ul>\n                <li>\n                    Republish material from this website\n                </li>\n                <li>\n                    Sell, rent or sub-license material from this website\n                </li>\n                <li>\n                    Reproduce, duplicate or copy material from this website\n                </li>\n                <li>\n                    Redistribute content from (unless content is specifically made for redistribution)\n                </li>\n            </ul>\n\n            Disclaimer, to maximum extent permitted by applicable law:  <br>\n            We are not responsible for any form of injury during this experiment.\n\n        </div>\n    <div class=\"card-footer justify-content-between d-flex\">\n        <span class=\"align-items-center d-flex\">\n            <input type=\"checkbox\" id=\"check\" class=\"float-right\" (change)=\"agreed = !agreed\" />\n            <label for=\"check\" class=\"float-right\"> I agree with the above Terms & Conditions</label>\n        </span>\n        <button class=\"btn btn-primary float-right\" (click)=\"processAndSubmit()\" [disabled]=\"!agreed\">Continue</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/tnc/tnc.component.ts":
/*!**************************************!*\
  !*** ./src/app/tnc/tnc.component.ts ***!
  \**************************************/
/*! exports provided: TncComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TncComponent", function() { return TncComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TncComponent = /** @class */ (function () {
    function TncComponent(router, http, dataService) {
        this.router = router;
        this.http = http;
        this.dataService = dataService;
        this.agreed = false;
    }
    TncComponent.prototype.ngOnInit = function () {
        this.dataService.newEntry();
    };
    TncComponent.prototype.processAndSubmit = function () {
        this.dataService.updateEntry();
        this.router.navigate(['/experiment']);
    };
    TncComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tnc',
            template: __webpack_require__(/*! ./tnc.component.html */ "./src/app/tnc/tnc.component.html"),
            styles: [__webpack_require__(/*! ./tnc.component.css */ "./src/app/tnc/tnc.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], TncComponent);
    return TncComponent;
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

module.exports = __webpack_require__(/*! /home/bart/software-engineering/requirements-engineering/re-prototype/re-prototype2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map