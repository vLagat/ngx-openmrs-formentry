/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Option } from '../form-entry/question-models/select-option';
export class AfeNgSelectComponent {
    constructor() {
        this.question_options = [];
        this.errors = [];
        this.propagateChange = (_) => { };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    getChangingText(event) {
        // console.log(event);
        this.getData(event).subscribe((options) => {
            this.question_options = options;
        });
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.extras) {
            if (this.extras.originalValue) {
                this.resolveSelectedOption(this.extras.originalValue).subscribe((option) => {
                    this.selected_question_option = option;
                });
            }
        }
    }
    /**
     * @param {?} searchText
     * @return {?}
     */
    getData(searchText) {
        this.subject = new BehaviorSubject([]);
        /** @type {?} */
        const OptionsObservable = this.dataSource.searchOptions(searchText);
        OptionsObservable.subscribe((options) => {
            // console.log('options', options);
            /** @type {?} */
            const mappedOptions = new Array();
            for (let i = 0; i < options.length; i++) {
                mappedOptions.push(new Option(options[i]));
            }
            this.subject.next(mappedOptions);
        }, (error) => {
            this.subject.error(error);
        });
        return this.subject.asObservable();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onValueChange(event) { }
    /**
     * @param {?} value
     * @return {?}
     */
    resolveSelectedOption(value) {
        this.subjectOption = new BehaviorSubject(null);
        /** @type {?} */
        const OptionObservable = this.dataSource.resolveSelectedValue(value);
        OptionObservable.subscribe((option) => {
            // console.log('option', option);
            this.subjectOption.next(option);
        }, (error) => {
            this.subjectOption.error(error);
        });
        return this.subjectOption.asObservable();
    }
    /**
     * @return {?}
     */
    resetOptions() {
        this.subject.next(new Array());
    }
}
AfeNgSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'afe-ng-select',
                template: `<ng-select
                   (searchInputText)="getChangingText($event)"
                    (ngModelChange)="onValueChange($event)"
                    [options]="question_options"
                    [multiple]="multiple" >
            </ng-select>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => AfeNgSelectComponent),
                        multi: true
                    }
                ]
            },] },
];
AfeNgSelectComponent.propDecorators = {
    dataSource: [{ type: Input }],
    multiple: [{ type: Input }],
    extras: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AfeNgSelectComponent.prototype.subject;
    /** @type {?} */
    AfeNgSelectComponent.prototype.subjectOption;
    /** @type {?} */
    AfeNgSelectComponent.prototype.dataSource;
    /** @type {?} */
    AfeNgSelectComponent.prototype.multiple;
    /** @type {?} */
    AfeNgSelectComponent.prototype.extras;
    /** @type {?} */
    AfeNgSelectComponent.prototype.question_options;
    /** @type {?} */
    AfeNgSelectComponent.prototype.selected_question_option;
    /** @type {?} */
    AfeNgSelectComponent.prototype.errors;
    /** @type {?} */
    AfeNgSelectComponent.prototype.propagateChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWZlLW5nLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3Blbm1ycy1mb3JtZW50cnkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2FmZS1uZy1zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQzdCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQXFCckUsTUFBTTtJQWhCTjtRQXNCRSxxQkFBZ0IsR0FBUSxFQUFFLENBQUM7UUFFM0IsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUNqQixvQkFBZSxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFpRnBDLENBQUM7Ozs7O0lBL0VDLGVBQWUsQ0FBQyxLQUFLO1FBQ25CLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxHQUFRO0lBRW5CLENBQUM7Ozs7O0lBQ0QsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUU1QixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQU8sSUFBVSxDQUFDOzs7OztJQUVwQyxXQUFXLENBQUMsT0FBWSxJQUFJLENBQUM7Ozs7SUFFN0IsUUFBUTtRQUNOLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxN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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0LCBmb3J3YXJkUmVmLCBPbkluaXQsIE9uQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vZm9ybS1lbnRyeS9xdWVzdGlvbi1tb2RlbHMvc2VsZWN0LW9wdGlvbic7XG5cbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi9mb3JtLWVudHJ5L3F1ZXN0aW9uLW1vZGVscy9pbnRlcmZhY2VzL2RhdGEtc291cmNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZmUtbmctc2VsZWN0JyxcbiAgdGVtcGxhdGU6IGA8bmctc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgKHNlYXJjaElucHV0VGV4dCk9XCJnZXRDaGFuZ2luZ1RleHQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cInF1ZXN0aW9uX29wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICBbbXVsdGlwbGVdPVwibXVsdGlwbGVcIiA+XG4gICAgICAgICAgICA8L25nLXNlbGVjdD5cbiAgYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBBZmVOZ1NlbGVjdENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1dXG59KVxuZXhwb3J0IGNsYXNzIEFmZU5nU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgc3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PE9wdGlvbltdPjtcbiAgc3ViamVjdE9wdGlvbjogQmVoYXZpb3JTdWJqZWN0PE9wdGlvbj47XG4gIEBJbnB1dCgpIGRhdGFTb3VyY2U6IERhdGFTb3VyY2U7XG4gIEBJbnB1dCgpIG11bHRpcGxlOiBib29sZWFuO1xuICBASW5wdXQoKSBleHRyYXM6IGFueTtcbiAgcXVlc3Rpb25fb3B0aW9uczogYW55ID0gW107XG4gIHNlbGVjdGVkX3F1ZXN0aW9uX29wdGlvbjogYW55O1xuICBlcnJvcnM6IGFueSA9IFtdO1xuICBwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG5cbiAgZ2V0Q2hhbmdpbmdUZXh0KGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xuICAgIHRoaXMuZ2V0RGF0YShldmVudCkuc3Vic2NyaWJlKChvcHRpb25zKSA9PiB7XG4gICAgICB0aGlzLnF1ZXN0aW9uX29wdGlvbnMgPSBvcHRpb25zO1xuICAgIH0pO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xuXG4gIH1cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcblxuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQgeyB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5leHRyYXMpIHtcbiAgICAgIGlmICh0aGlzLmV4dHJhcy5vcmlnaW5hbFZhbHVlKSB7XG4gICAgICAgIHRoaXMucmVzb2x2ZVNlbGVjdGVkT3B0aW9uKHRoaXMuZXh0cmFzLm9yaWdpbmFsVmFsdWUpLnN1YnNjcmliZSgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZF9xdWVzdGlvbl9vcHRpb24gPSBvcHRpb247XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxuICBnZXREYXRhKHNlYXJjaFRleHQ6IHN0cmluZyk6IE9ic2VydmFibGU8T3B0aW9uW10+IHtcblxuICAgIHRoaXMuc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8T3B0aW9uW10+KFtdKTtcblxuICAgIGNvbnN0IE9wdGlvbnNPYnNlcnZhYmxlID0gdGhpcy5kYXRhU291cmNlLnNlYXJjaE9wdGlvbnMoc2VhcmNoVGV4dCk7XG5cbiAgICBPcHRpb25zT2JzZXJ2YWJsZS5zdWJzY3JpYmUoXG4gICAgICAob3B0aW9ucykgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnb3B0aW9ucycsIG9wdGlvbnMpO1xuICAgICAgICBjb25zdCBtYXBwZWRPcHRpb25zOiBPcHRpb25bXSA9IG5ldyBBcnJheTxPcHRpb24+KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbWFwcGVkT3B0aW9ucy5wdXNoKG5ldyBPcHRpb24ob3B0aW9uc1tpXSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3ViamVjdC5uZXh0KG1hcHBlZE9wdGlvbnMpO1xuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnN1YmplY3QuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgb25WYWx1ZUNoYW5nZShldmVudCkgeyB9XG4gIHJlc29sdmVTZWxlY3RlZE9wdGlvbih2YWx1ZTogYW55KTogT2JzZXJ2YWJsZTxPcHRpb24+IHtcblxuICAgIHRoaXMuc3ViamVjdE9wdGlvbiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8T3B0aW9uPihudWxsKTtcbiAgICBjb25zdCBPcHRpb25PYnNlcnZhYmxlID0gdGhpcy5kYXRhU291cmNlLnJlc29sdmVTZWxlY3RlZFZhbHVlKHZhbHVlKTtcblxuICAgIE9wdGlvbk9ic2VydmFibGUuc3Vic2NyaWJlKFxuICAgICAgKG9wdGlvbikgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnb3B0aW9uJywgb3B0aW9uKTtcbiAgICAgICAgdGhpcy5zdWJqZWN0T3B0aW9uLm5leHQob3B0aW9uKTtcbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5zdWJqZWN0T3B0aW9uLmVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdE9wdGlvbi5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHJlc2V0T3B0aW9ucygpIHtcbiAgICB0aGlzLnN1YmplY3QubmV4dChuZXcgQXJyYXk8T3B0aW9uPigpKTtcblxuICB9XG5cbn1cbiJdfQ==