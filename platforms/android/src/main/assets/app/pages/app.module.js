"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_component_1 = require("./app/app.component");
var main_menu_component_1 = require("./main_menu/main_menu.component");
var teoria_component_1 = require("./teoria/teoria.component");
var ejemplos_component_1 = require("./ejemplos/ejemplos.component");
var ejercicios_component_1 = require("./ejercicios/ejercicios.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent, main_menu_component_1.MainMenuComponent, teoria_component_1.TheoryComponent, ejemplos_component_1.ExamplesComponent,
            ejercicios_component_1.ExercisesComponent],
        bootstrap: [app_component_1.AppComponent],
        imports: [nativescript_module_1.NativeScriptModule],
        schemas: [core_1.NO_ERRORS_SCHEMA],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFFOUUscURBQW1EO0FBQ25ELHVFQUFvRTtBQUNwRSw4REFBNEQ7QUFDNUQsb0VBQWtFO0FBQ2xFLDBFQUF1RTtBQVN2RSxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUFQckIsZUFBUSxDQUFDO1FBQ1QsWUFBWSxFQUFFLENBQUMsNEJBQVksRUFBRSx1Q0FBaUIsRUFBRSxrQ0FBZSxFQUFFLHNDQUFpQjtZQUNqRix5Q0FBa0IsQ0FBQztRQUNwQixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQ3pCLE9BQU8sRUFBRSxDQUFDLHdDQUFrQixDQUFDO1FBQzdCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO0tBQzNCLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNYWluTWVudUNvbXBvbmVudCB9IGZyb20gXCIuL21haW5fbWVudS9tYWluX21lbnUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUaGVvcnlDb21wb25lbnQgfSBmcm9tIFwiLi90ZW9yaWEvdGVvcmlhLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXhhbXBsZXNDb21wb25lbnQgfSBmcm9tIFwiLi9lamVtcGxvcy9lamVtcGxvcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEV4ZXJjaXNlc0NvbXBvbmVudCB9IGZyb20gXCIuL2VqZXJjaWNpb3MvZWplcmNpY2lvcy5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcblx0ZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50LCBNYWluTWVudUNvbXBvbmVudCwgVGhlb3J5Q29tcG9uZW50LCBFeGFtcGxlc0NvbXBvbmVudCxcblx0XHRFeGVyY2lzZXNDb21wb25lbnRdLFxuXHRib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuXHRpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlXSxcblx0c2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=