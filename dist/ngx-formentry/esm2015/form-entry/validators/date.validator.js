/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class DateValidator {
    constructor() { }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        if (control.hidden) {
            return null;
        }
        /** @type {?} */
        const value = control.value;
        if (value && value.length !== 0) {
            // YYYY-MM-DD or DD-MM-YYYY
            /** @type {?} */
            const test = !/Invalid|NaN/.test(new Date(value).toString());
            return test ? null : { 'date': true };
        }
        else {
            return null;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3Blbm1ycy1mb3JtZW50cnkvIiwic291cmNlcyI6WyJmb3JtLWVudHJ5L3ZhbGlkYXRvcnMvZGF0ZS52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE1BQU07SUFFSixnQkFBZ0IsQ0FBQzs7Ozs7SUFFakIsUUFBUSxDQUFDLE9BQXVCO1FBRTlCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDOztjQUVLLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSztRQUUzQixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7a0JBRzFCLElBQUksR0FBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFckUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN4QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmZUZvcm1Db250cm9sIH0gZnJvbSAnLi4vLi4vYWJzdHJhY3QtY29udHJvbHMtZXh0ZW5zaW9uL2FmZS1mb3JtLWNvbnRyb2wnO1xuXG5cbmV4cG9ydCBjbGFzcyBEYXRlVmFsaWRhdG9yIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFmZUZvcm1Db250cm9sKSB7XG5cbiAgICBpZiAoY29udHJvbC5oaWRkZW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gY29udHJvbC52YWx1ZTtcblxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggIT09IDApIHtcblxuICAgICAgLy8gWVlZWS1NTS1ERCBvciBERC1NTS1ZWVlZXG4gICAgICBjb25zdCB0ZXN0OiBib29sZWFuID0gIS9JbnZhbGlkfE5hTi8udGVzdChuZXcgRGF0ZSh2YWx1ZSkudG9TdHJpbmcoKSk7XG5cbiAgICAgIHJldHVybiB0ZXN0ID8gbnVsbCA6IHsgJ2RhdGUnOiB0cnVlIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19