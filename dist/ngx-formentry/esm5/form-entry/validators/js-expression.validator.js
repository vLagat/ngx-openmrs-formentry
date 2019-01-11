/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ExpressionRunner } from '../expression-runner/expression-runner';
import { JsExpressionHelper } from '../helpers/js-expression-helper';
import { Validations } from './validations';
var JsExpressionValidator = /** @class */ (function () {
    function JsExpressionValidator() {
    }
    /**
     * @param {?} model
     * @param {?=} form
     * @return {?}
     */
    JsExpressionValidator.prototype.validate = /**
     * @param {?} model
     * @param {?=} form
     * @return {?}
     */
    function (model, form) {
        // convert helper functions to string
        return function (control) {
            if (!Validations.JSExpressionValidatorsEnabled) {
                return null;
            }
            /** @type {?} */
            var expression = model.failsWhenExpression;
            /** @type {?} */
            var helper = new JsExpressionHelper();
            /** @type {?} */
            var dataDependencies = {};
            /** @type {?} */
            var helperFunctions = helper.helperFunctions;
            /** @type {?} */
            var runnable = new ExpressionRunner().getRunnable(expression, control, helperFunctions, dataDependencies, form);
            if (runnable.run()) {
                return { 'js_expression': { 'expression': expression, message: model.message } };
            }
            return null;
        };
    };
    return JsExpressionValidator;
}());
export { JsExpressionValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMtZXhwcmVzc2lvbi52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3Blbm1ycy1mb3JtZW50cnkvIiwic291cmNlcyI6WyJmb3JtLWVudHJ5L3ZhbGlkYXRvcnMvanMtZXhwcmVzc2lvbi52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUM7SUFFRTtJQUFlLENBQUM7Ozs7OztJQUVoQix3Q0FBUTs7Ozs7SUFBUixVQUFTLEtBQWtDLEVBQUUsSUFBVTtRQUVyRCxxQ0FBcUM7UUFDckMsTUFBTSxDQUFDLFVBQUMsT0FBdUI7WUFFN0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2QsQ0FBQzs7Z0JBRUssVUFBVSxHQUFHLEtBQUssQ0FBQyxtQkFBbUI7O2dCQUN0QyxNQUFNLEdBQUcsSUFBSSxrQkFBa0IsRUFBRTs7Z0JBQ2pDLGdCQUFnQixHQUFHLEVBQUU7O2dCQUVyQixlQUFlLEdBQUcsTUFBTSxDQUFDLGVBQWU7O2dCQUN4QyxRQUFRLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUM7WUFFakgsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFFbkIsTUFBTSxDQUFDLEVBQUUsZUFBZSxFQUFFLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7WUFDcEYsQ0FBQztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZlRm9ybUNvbnRyb2wgfSBmcm9tICcuLi8uLi9hYnN0cmFjdC1jb250cm9scy1leHRlbnNpb24vYWZlLWZvcm0tY29udHJvbCc7XG5pbXBvcnQgeyBFeHByZXNzaW9uUnVubmVyIH0gZnJvbSAnLi4vZXhwcmVzc2lvbi1ydW5uZXIvZXhwcmVzc2lvbi1ydW5uZXInO1xuaW1wb3J0IHsgSnNFeHByZXNzaW9uSGVscGVyIH0gZnJvbSAnLi4vaGVscGVycy9qcy1leHByZXNzaW9uLWhlbHBlcic7XG5pbXBvcnQgeyBKc0V4cHJlc3Npb25WYWxpZGF0aW9uTW9kZWwgfSBmcm9tICcuLi9xdWVzdGlvbi1tb2RlbHMvanMtZXhwcmVzc2lvbi12YWxpZGF0aW9uLm1vZGVsJztcbmltcG9ydCB7IFZhbGlkYXRpb25zIH0gZnJvbSAnLi92YWxpZGF0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBKc0V4cHJlc3Npb25WYWxpZGF0b3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICB2YWxpZGF0ZShtb2RlbDogSnNFeHByZXNzaW9uVmFsaWRhdGlvbk1vZGVsLCBmb3JtPzogYW55KSB7XG5cbiAgICAvLyBjb252ZXJ0IGhlbHBlciBmdW5jdGlvbnMgdG8gc3RyaW5nXG4gICAgcmV0dXJuIChjb250cm9sOiBBZmVGb3JtQ29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPT4ge1xuXG4gICAgICBpZiAoIVZhbGlkYXRpb25zLkpTRXhwcmVzc2lvblZhbGlkYXRvcnNFbmFibGVkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBleHByZXNzaW9uID0gbW9kZWwuZmFpbHNXaGVuRXhwcmVzc2lvbjtcbiAgICAgIGNvbnN0IGhlbHBlciA9IG5ldyBKc0V4cHJlc3Npb25IZWxwZXIoKTtcbiAgICAgIGNvbnN0IGRhdGFEZXBlbmRlbmNpZXMgPSB7fTtcblxuICAgICAgY29uc3QgaGVscGVyRnVuY3Rpb25zID0gaGVscGVyLmhlbHBlckZ1bmN0aW9ucztcbiAgICAgIGNvbnN0IHJ1bm5hYmxlID0gbmV3IEV4cHJlc3Npb25SdW5uZXIoKS5nZXRSdW5uYWJsZShleHByZXNzaW9uLCBjb250cm9sLCBoZWxwZXJGdW5jdGlvbnMsIGRhdGFEZXBlbmRlbmNpZXMsIGZvcm0pO1xuXG4gICAgICBpZiAocnVubmFibGUucnVuKCkpIHtcblxuICAgICAgICByZXR1cm4geyAnanNfZXhwcmVzc2lvbic6IHsgJ2V4cHJlc3Npb24nOiBleHByZXNzaW9uLCBtZXNzYWdlOiAgbW9kZWwubWVzc2FnZSB9IH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gIH1cbn1cbiJdfQ==