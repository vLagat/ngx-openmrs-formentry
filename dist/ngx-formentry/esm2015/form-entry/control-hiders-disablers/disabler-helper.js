/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class DisablerHelper {
    /**
     * @param {?} control
     * @param {?} disabler
     * @return {?}
     */
    setDisablerForControl(control, disabler) {
        control.disablers.push(disabler);
    }
    /**
     * @param {?} control
     * @return {?}
     */
    clearDisablersForControl(control) {
        control.disablers.splice(0);
        control.disable();
    }
    /**
     * @param {?} control
     * @return {?}
     */
    evaluateControlDisablers(control) {
        /** @type {?} */
        let toDisable = false;
        control.disablers.forEach(hider => {
            hider.reEvaluateDisablingExpression();
            if (hider.toDisable === true) {
                toDisable = true;
            }
        });
        // console.log('Control', control);
        if (toDisable) {
            control.disable();
        }
        else {
            control.enable();
        }
    }
    /**
     * @param {?} control
     * @return {?}
     */
    setUpReEvaluationWhenValueChanges(control) {
        if (control.updateDisabledState) {
            control.valueChanges.subscribe((val) => {
                control.updateDisabledState();
            });
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzYWJsZXItaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5tcnMtZm9ybWVudHJ5LyIsInNvdXJjZXMiOlsiZm9ybS1lbnRyeS9jb250cm9sLWhpZGVycy1kaXNhYmxlcnMvZGlzYWJsZXItaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxNQUFNOzs7Ozs7SUFFSyxxQkFBcUIsQ0FBQyxPQUFtQixFQUFFLFFBQWtCO1FBQ2hFLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRU0sd0JBQXdCLENBQUMsT0FBbUI7UUFDL0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRU0sd0JBQXdCLENBQUMsT0FBbUI7O1lBQzNDLFNBQVMsR0FBRyxLQUFLO1FBQ3JCLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzlCLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDM0IsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNyQixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxtQ0FBbUM7UUFFbkMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNaLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDckIsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU0saUNBQWlDLENBQUMsT0FBbUI7UUFDeEQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztZQUM5QixPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNuQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW5EaXNhYmxlLCBEaXNhYmxlciB9IGZyb20gJy4vY2FuLWRpc2FibGUnO1xuZXhwb3J0IGNsYXNzIERpc2FibGVySGVscGVyIHtcblxuICAgIHB1YmxpYyBzZXREaXNhYmxlckZvckNvbnRyb2woY29udHJvbDogQ2FuRGlzYWJsZSwgZGlzYWJsZXI6IERpc2FibGVyKSB7XG4gICAgICAgIGNvbnRyb2wuZGlzYWJsZXJzLnB1c2goZGlzYWJsZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckRpc2FibGVyc0ZvckNvbnRyb2woY29udHJvbDogQ2FuRGlzYWJsZSkge1xuICAgICAgICBjb250cm9sLmRpc2FibGVycy5zcGxpY2UoMCk7XG4gICAgICAgIGNvbnRyb2wuZGlzYWJsZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBldmFsdWF0ZUNvbnRyb2xEaXNhYmxlcnMoY29udHJvbDogQ2FuRGlzYWJsZSkge1xuICAgICAgICBsZXQgdG9EaXNhYmxlID0gZmFsc2U7XG4gICAgICAgIGNvbnRyb2wuZGlzYWJsZXJzLmZvckVhY2goaGlkZXIgPT4ge1xuICAgICAgICAgICAgaGlkZXIucmVFdmFsdWF0ZURpc2FibGluZ0V4cHJlc3Npb24oKTtcbiAgICAgICAgICAgIGlmIChoaWRlci50b0Rpc2FibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0b0Rpc2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnQ29udHJvbCcsIGNvbnRyb2wpO1xuXG4gICAgICAgIGlmICh0b0Rpc2FibGUpIHtcbiAgICAgICAgICAgIGNvbnRyb2wuZGlzYWJsZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udHJvbC5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRVcFJlRXZhbHVhdGlvbldoZW5WYWx1ZUNoYW5nZXMoY29udHJvbDogQ2FuRGlzYWJsZSkge1xuICAgICAgICBpZiAoY29udHJvbC51cGRhdGVEaXNhYmxlZFN0YXRlKSB7XG4gICAgICAgICAgICBjb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnRyb2wudXBkYXRlRGlzYWJsZWRTdGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==