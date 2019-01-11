/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { EncounterAdapter } from '../../form-entry/value-adapters/encounter.adapter';
var EncounterContainerComponent = /** @class */ (function () {
    function EncounterContainerComponent(encAdapter) {
        this.encAdapter = encAdapter;
    }
    Object.defineProperty(EncounterContainerComponent.prototype, "form", {
        set: /**
         * @param {?} form
         * @return {?}
         */
        function (form) {
            this.$form = form;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncounterContainerComponent.prototype, "encounter", {
        set: /**
         * @param {?} enc
         * @return {?}
         */
        function (enc) {
            this.$enc = enc;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    EncounterContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    EncounterContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'encounter-renderer',
                    template: "<encounter-viewer class=\"card\" [form]=\"$form\" [encounter]=\"$enc\"></encounter-viewer>\n\n\n",
                    styles: [".card{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}"]
                },] },
    ];
    EncounterContainerComponent.ctorParameters = function () { return [
        { type: EncounterAdapter }
    ]; };
    EncounterContainerComponent.propDecorators = {
        form: [{ type: Input }],
        encounter: [{ type: Input }]
    };
    return EncounterContainerComponent;
}());
export { EncounterContainerComponent };
if (false) {
    /** @type {?} */
    EncounterContainerComponent.prototype.$form;
    /** @type {?} */
    EncounterContainerComponent.prototype.$enc;
    /**
     * @type {?}
     * @private
     */
    EncounterContainerComponent.prototype.encAdapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jb3VudGVyLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3Blbm1ycy1mb3JtZW50cnkvIiwic291cmNlcyI6WyJlbmNvdW50ZXItdmlld2VyL2VuY291bnRlci1jb250YWluZXIvZW5jb3VudGVyLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3JGO0lBbUJJLHFDQUFvQixVQUE0QjtRQUE1QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtJQUFJLENBQUM7SUFQckQsc0JBQW9CLDZDQUFJOzs7OztRQUF4QixVQUF5QixJQUFJO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQW9CLGtEQUFTOzs7OztRQUE3QixVQUE4QixHQUFHO1lBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBOzs7O0lBSUQsOENBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBdEJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsa0dBR2I7b0JBQ0csTUFBTSxFQUFFLENBQUMsNEVBQTRFLENBQUM7aUJBQ3pGOzs7Z0JBUlEsZ0JBQWdCOzs7dUJBYXBCLEtBQUs7NEJBR0wsS0FBSzs7SUFRVixrQ0FBQztDQUFBLEFBdkJELElBdUJDO1NBZlksMkJBQTJCOzs7SUFDcEMsNENBQW1COztJQUNuQiwyQ0FBaUI7Ozs7O0lBU0wsaURBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnLi4vLi4vZm9ybS1lbnRyeS9mb3JtLWZhY3RvcnkvZm9ybSc7XG5pbXBvcnQgeyBOb2RlQmFzZSB9IGZyb20gJy4uLy4uL2Zvcm0tZW50cnkvZm9ybS1mYWN0b3J5L2Zvcm0tbm9kZSc7XG5pbXBvcnQgeyBFbmNvdW50ZXJBZGFwdGVyIH0gZnJvbSAnLi4vLi4vZm9ybS1lbnRyeS92YWx1ZS1hZGFwdGVycy9lbmNvdW50ZXIuYWRhcHRlcic7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2VuY291bnRlci1yZW5kZXJlcicsXG4gICAgdGVtcGxhdGU6IGA8ZW5jb3VudGVyLXZpZXdlciBjbGFzcz1cImNhcmRcIiBbZm9ybV09XCIkZm9ybVwiIFtlbmNvdW50ZXJdPVwiJGVuY1wiPjwvZW5jb3VudGVyLXZpZXdlcj5cblxuXG5gLFxuICAgIHN0eWxlczogW2AuY2FyZHtib3gtc2hhZG93OjAgMnB4IDVweCAwIHJnYmEoMCwwLDAsLjE2KSwwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpfWBdXG59KVxuZXhwb3J0IGNsYXNzIEVuY291bnRlckNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljICRmb3JtOiBGb3JtO1xuICAgIHB1YmxpYyAkZW5jOiBhbnk7XG5cbiAgICBASW5wdXQoKSBwdWJsaWMgc2V0IGZvcm0oZm9ybSkge1xuICAgICAgICB0aGlzLiRmb3JtID0gZm9ybTtcbiAgICB9XG4gICAgQElucHV0KCkgcHVibGljIHNldCBlbmNvdW50ZXIoZW5jKSB7XG4gICAgICAgIHRoaXMuJGVuYyA9IGVuYztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVuY0FkYXB0ZXI6IEVuY291bnRlckFkYXB0ZXIpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxufVxuIl19