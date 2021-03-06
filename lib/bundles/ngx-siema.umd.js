(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('siema'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'siema', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
	(factory((global['ngx-siema'] = global['ngx-siema'] || {}),global.ng.core,global.siema,global.rxjs,global.rxjs_operators,global.ng.common));
}(this, (function (exports,_angular_core,Siema,rxjs,rxjs_operators,_angular_common) { 'use strict';

Siema = Siema && 'default' in Siema ? Siema['default'] : Siema;

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var next$ = new rxjs.ReplaySubject(1);
var prev$ = new rxjs.ReplaySubject(1);
var goTo$ = new rxjs.ReplaySubject(1);
var remove$ = new rxjs.ReplaySubject(1);
var insert$ = new rxjs.ReplaySubject(1);
var prepend$ = new rxjs.ReplaySubject(1);
var append$ = new rxjs.ReplaySubject(1);
var destroy$ = new rxjs.ReplaySubject(1);
var currentSlide$ = new rxjs.ReplaySubject(1);
var NgxSiemaService = (function () {
    function NgxSiemaService() {
    }
    NgxSiemaService.prototype.next = function (numbers, selector) {
        if (numbers === void 0) { numbers = 1; }
        var listener = new rxjs.BehaviorSubject(null);
        next$.next({ selector: selector, numbers: numbers, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.prev = function (numbers, selector) {
        if (numbers === void 0) { numbers = 1; }
        var listener = new rxjs.BehaviorSubject(null);
        prev$.next({ selector: selector, numbers: numbers, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.goTo = function (index, selector) {
        var listener = new rxjs.BehaviorSubject(null);
        goTo$.next({ selector: selector, index: index, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.remove = function (index, selector) {
        var listener = new rxjs.BehaviorSubject(null);
        remove$.next({ selector: selector, index: index, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.insert = function (item, index, selector) {
        var listener = new rxjs.BehaviorSubject(null);
        insert$.next({ selector: selector, item: item, index: index, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.prepend = function (item, selector) {
        var listener = new rxjs.BehaviorSubject(null);
        prepend$.next({ selector: selector, item: item, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.append = function (item, selector) {
        var listener = new rxjs.BehaviorSubject(null);
        append$.next({ selector: selector, item: item, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.destroy = function (restoreMarkup, selector) {
        if (restoreMarkup === void 0) { restoreMarkup = false; }
        var listener = new rxjs.BehaviorSubject(null);
        destroy$.next({ selector: selector, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.currentSlide = function (selector) {
        var listener = new rxjs.BehaviorSubject(null);
        currentSlide$.next({ selector: selector, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.onNext = function () {
        return next$.pipe(rxjs_operators.publish(), rxjs_operators.refCount());
    };
    NgxSiemaService.prototype.onPrev = function () {
        return prev$.pipe(rxjs_operators.publish(), rxjs_operators.refCount());
    };
    NgxSiemaService.prototype.onGoTo = function () {
        return goTo$.pipe(rxjs_operators.publish(), rxjs_operators.refCount());
    };
    NgxSiemaService.prototype.onRemove = function () {
        return remove$.pipe(rxjs_operators.publish(), rxjs_operators.refCount());
    };
    NgxSiemaService.prototype.onInsert = function () {
        return insert$.pipe(rxjs_operators.publish(), rxjs_operators.refCount());
    };
    NgxSiemaService.prototype.onPrepend = function () {
        return prepend$.pipe(rxjs_operators.publish(), rxjs_operators.refCount());
    };
    NgxSiemaService.prototype.onAppend = function () {
        return append$.pipe(rxjs_operators.publish(), rxjs_operators.refCount());
    };
    NgxSiemaService.prototype.onDestroy = function () {
        return destroy$.pipe(rxjs_operators.publish(), rxjs_operators.refCount());
    };
    NgxSiemaService.prototype.onCurrentSlide = function () {
        return currentSlide$.pipe(rxjs_operators.publish(), rxjs_operators.refCount());
    };
    NgxSiemaService = __decorate$1([
        _angular_core.Injectable()
    ], NgxSiemaService);
    return NgxSiemaService;
}());

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NgxSiemaSlideComponent = (function () {
    function NgxSiemaSlideComponent() {
    }
    NgxSiemaSlideComponent = __decorate([
        _angular_core.Component({
            selector: 'ngx-siema-slide',
            styles: [
                "\n      :host {\n        display: flex;\n      }\n    ",
            ],
            template: "\n    <ng-content></ng-content>\n  ",
        })
    ], NgxSiemaSlideComponent);
    return NgxSiemaSlideComponent;
}());
var NgxSiemaComponent = (function () {
    function NgxSiemaComponent(ngxSiemaService) {
        this.ngxSiemaService = ngxSiemaService;
        this.next = new _angular_core.EventEmitter();
        this.prev = new _angular_core.EventEmitter();
        this.goTo = new _angular_core.EventEmitter();
        this.remove = new _angular_core.EventEmitter();
        this.insert = new _angular_core.EventEmitter();
        this.prepend = new _angular_core.EventEmitter();
        this.append = new _angular_core.EventEmitter();
        this.destroy = new _angular_core.EventEmitter();
        this.currentSlide = new _angular_core.EventEmitter();
    }
    NgxSiemaComponent.prototype.ngAfterViewInit = function () {
        this.instance = new Siema(this.options);
    };
    NgxSiemaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngxClass = this.options.selector.replace('.', '');
        this.nextSubscription = this.ngxSiemaService.onNext()
            .subscribe(function (data) {
            if (_this.compareSelectors(data.selector) && _this.instance) {
                _this.instance.next(data.numbers, function () {
                    _this.next.emit({
                        selector: _this.options.selector,
                        currentSlide: _this.instance.currentSlide,
                    });
                    data.listener.next({ selector: _this.options.selector, currentSlide: _this.instance.currentSlide });
                });
            }
        });
        this.prevSubscription = this.ngxSiemaService.onPrev()
            .subscribe(function (data) {
            if (_this.compareSelectors(data.selector) && _this.instance) {
                _this.instance.prev(data.numbers, function () {
                    _this.prev.emit({
                        selector: _this.options.selector,
                        currentSlide: _this.instance.currentSlide,
                    });
                    data.listener.next({ selector: _this.options.selector, currentSlide: _this.instance.currentSlide });
                });
            }
        });
        this.goToSubscription = this.ngxSiemaService.onGoTo()
            .subscribe(function (data) {
            if (_this.compareSelectors(data.selector) && _this.instance) {
                _this.instance.goTo(data.index, function () {
                    _this.goTo.emit({
                        selector: _this.options.selector,
                        currentSlide: _this.instance.currentSlide,
                    });
                    data.listener.next({ selector: _this.options.selector, currentSlide: _this.instance.currentSlide });
                });
            }
        });
        this.removeSubscription = this.ngxSiemaService.onRemove()
            .subscribe(function (data) {
            if (_this.compareSelectors(data.selector) && _this.instance) {
                _this.instance.remove(data.index, function () {
                    _this.remove.emit({
                        selector: _this.options.selector,
                        currentSlide: _this.instance.currentSlide,
                    });
                    data.listener.next({ selector: _this.options.selector, currentSlide: _this.instance.currentSlide });
                });
            }
        });
        this.insertSubscription = this.ngxSiemaService.onInsert()
            .subscribe(function (data) {
            if (_this.compareSelectors(data.selector) && _this.instance) {
                _this.instance.insert(data.item, data.index, function () {
                    _this.insert.emit({
                        selector: _this.options.selector,
                        currentSlide: _this.instance.currentSlide,
                    });
                    data.listener.next({ selector: _this.options.selector, currentSlide: _this.instance.currentSlide });
                });
            }
        });
        this.prependSubscription = this.ngxSiemaService.onPrepend()
            .subscribe(function (data) {
            if (_this.compareSelectors(data.selector) && _this.instance) {
                _this.instance.prepend(data.item, function () {
                    _this.prepend.emit({
                        selector: _this.options.selector,
                        currentSlide: _this.instance.currentSlide,
                    });
                    data.listener.next({ selector: _this.options.selector, currentSlide: _this.instance.currentSlide });
                });
            }
        });
        this.appendSubscription = this.ngxSiemaService.onAppend()
            .subscribe(function (data) {
            if (_this.compareSelectors(data.selector) && _this.instance) {
                _this.instance.append(data.item, function () {
                    _this.append.emit({
                        selector: _this.options.selector,
                        currentSlide: _this.instance.currentSlide,
                    });
                    data.listener.next({ selector: _this.options.selector, currentSlide: _this.instance.currentSlide });
                });
            }
        });
        this.destroySubscription = this.ngxSiemaService.onDestroy()
            .subscribe(function (data) {
            if (_this.compareSelectors(data.selector) && _this.instance) {
                _this.instance.destroy(data.restoreMarkup, function () {
                    _this.destroy.emit({
                        selector: _this.options.selector,
                    });
                    data.listener.next({ selector: _this.options.selector });
                });
            }
        });
        this.currentSlideSubscription = this.ngxSiemaService.onCurrentSlide()
            .subscribe(function (data) {
            if (_this.compareSelectors(data.selector) && _this.instance) {
                _this.currentSlide.emit({
                    selector: _this.options.selector,
                    currentSlide: _this.instance.currentSlide,
                });
                data.listener.next({ selector: _this.options.selector, currentSlide: _this.instance.currentSlide });
            }
        });
    };
    NgxSiemaComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.instance) {
            setTimeout(function () {
                _this.instance.destroy();
                _this.instance = null;
            });
        }
        this.nextSubscription.unsubscribe();
        this.prevSubscription.unsubscribe();
        this.goToSubscription.unsubscribe();
        this.removeSubscription.unsubscribe();
        this.insertSubscription.unsubscribe();
        this.prependSubscription.unsubscribe();
        this.appendSubscription.unsubscribe();
        this.destroySubscription.unsubscribe();
        this.currentSlideSubscription.unsubscribe();
    };
    NgxSiemaComponent.prototype.onNext = function (numbers) {
        if (numbers === void 0) { numbers = 1; }
        this.instance.next(numbers, this.next.emit({
            currentSlide: this.instance.currentSlide,
        }));
    };
    NgxSiemaComponent.prototype.onPrev = function (numbers) {
        if (numbers === void 0) { numbers = 1; }
        this.instance.prev(numbers, this.next.emit({
            currentSlide: this.instance.currentSlide,
        }));
    };
    NgxSiemaComponent.prototype.onGoTo = function (index) {
        this.instance.goTo(index, this.goTo.emit({
            currentSlide: this.instance.currentSlide,
        }));
    };
    NgxSiemaComponent.prototype.onRemove = function (index) {
        this.instance.remove(index, this.remove.emit({
            currentSlide: this.instance.currentSlide,
        }));
    };
    NgxSiemaComponent.prototype.onInsert = function (item, index) {
        this.instance.insert(item, index, this.insert.emit({
            currentSlide: this.instance.currentSlide,
        }));
    };
    NgxSiemaComponent.prototype.onPrepend = function (item) {
        this.instance.prepend(item, this.prepend.emit({
            currentSlide: this.instance.currentSlide,
        }));
    };
    NgxSiemaComponent.prototype.onAppend = function (item) {
        this.instance.append(item, this.append.emit({
            currentSlide: this.instance.currentSlide,
        }));
    };
    NgxSiemaComponent.prototype.onDestroy = function (restoreMarkup) {
        if (restoreMarkup === void 0) { restoreMarkup = false; }
        this.instance.destroy(restoreMarkup, this.destroy.emit({
            currentSlide: this.instance.currentSlide,
        }));
    };
    NgxSiemaComponent.prototype.onCurrentSlide = function () {
        this.currentSlide.emit({
            currentSlide: this.instance.currentSlide,
        });
    };
    NgxSiemaComponent.prototype.compareSelectors = function (selector) {
        return !selector || selector === this.options.selector;
    };
    __decorate([
        _angular_core.Input(),
        __metadata("design:type", Object)
    ], NgxSiemaComponent.prototype, "options", void 0);
    __decorate([
        _angular_core.Output(),
        __metadata("design:type", Object)
    ], NgxSiemaComponent.prototype, "next", void 0);
    __decorate([
        _angular_core.Output(),
        __metadata("design:type", Object)
    ], NgxSiemaComponent.prototype, "prev", void 0);
    __decorate([
        _angular_core.Output(),
        __metadata("design:type", Object)
    ], NgxSiemaComponent.prototype, "goTo", void 0);
    __decorate([
        _angular_core.Output(),
        __metadata("design:type", Object)
    ], NgxSiemaComponent.prototype, "remove", void 0);
    __decorate([
        _angular_core.Output(),
        __metadata("design:type", Object)
    ], NgxSiemaComponent.prototype, "insert", void 0);
    __decorate([
        _angular_core.Output(),
        __metadata("design:type", Object)
    ], NgxSiemaComponent.prototype, "prepend", void 0);
    __decorate([
        _angular_core.Output(),
        __metadata("design:type", Object)
    ], NgxSiemaComponent.prototype, "append", void 0);
    __decorate([
        _angular_core.Output(),
        __metadata("design:type", Object)
    ], NgxSiemaComponent.prototype, "destroy", void 0);
    __decorate([
        _angular_core.Output(),
        __metadata("design:type", Object)
    ], NgxSiemaComponent.prototype, "currentSlide", void 0);
    NgxSiemaComponent = __decorate([
        _angular_core.Component({
            selector: 'ngx-siema',
            template: "\n    <div class=\"{{ ngxClass }}\">\n      <ng-content select=\"ngx-siema-slide\"></ng-content>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [NgxSiemaService])
    ], NgxSiemaComponent);
    return NgxSiemaComponent;
}());

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NgxSiemaModule = (function () {
    function NgxSiemaModule() {
    }
    NgxSiemaModule_1 = NgxSiemaModule;
    NgxSiemaModule.forRoot = function () {
        return {
            ngModule: NgxSiemaModule_1,
            providers: [
                NgxSiemaService,
            ],
        };
    };
    var NgxSiemaModule_1;
    NgxSiemaModule = NgxSiemaModule_1 = __decorate$2([
        _angular_core.NgModule({
            imports: [
                _angular_common.CommonModule,
            ],
            declarations: [
                NgxSiemaComponent,
                NgxSiemaSlideComponent,
            ],
            exports: [
                NgxSiemaComponent,
                NgxSiemaSlideComponent,
            ],
        })
    ], NgxSiemaModule);
    return NgxSiemaModule;
}());

exports.NgxSiemaSlideComponent = NgxSiemaSlideComponent;
exports.NgxSiemaComponent = NgxSiemaComponent;
exports.NgxSiemaService = NgxSiemaService;
exports.NgxSiemaModule = NgxSiemaModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
