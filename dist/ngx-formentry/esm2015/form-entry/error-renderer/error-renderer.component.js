/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import * as _ from 'lodash';
import { Form } from '../form-factory/form';
import { ValidationFactory } from '../form-factory/validation.factory';
import { FormErrorsService } from '../services/form-errors.service';
export class ErrorRendererComponent {
    /**
     * @param {?} validationFactory
     * @param {?} formErrorsService
     */
    constructor(validationFactory, formErrorsService) {
        this.validationFactory = validationFactory;
        this.formErrorsService = formErrorsService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    showErrors() {
        return !this.form.valid && this.form.showErrors;
    }
    /**
     * @return {?}
     */
    get errorNodes() {
        /** @type {?} */
        const invalidControls = this.form.markInvalidControls(this.form.rootNode, []);
        return invalidControls;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    getControlError(node) {
        /** @type {?} */
        const errors = node.control.errors;
        if (errors) {
            return this.validationFactory.errors(errors, node.question);
        }
        return [];
    }
    /**
     * @param {?} errorNode
     * @return {?}
     */
    announceErrorField(errorNode) {
        /** @type {?} */
        const nodes = this.form.searchNodeByQuestionId(errorNode.path.substring(0, errorNode.path.indexOf('.')));
        _.forEach(nodes, (node) => {
            if (node.question.renderingType === 'page') {
                /** @type {?} */
                const pageIndex = this.getPageIndex(node);
                this.formErrorsService.announceErrorField(pageIndex + ',' + errorNode.question.key);
            }
        });
    }
    /**
     * @param {?} node
     * @return {?}
     */
    getPageIndex(node) {
        /** @type {?} */
        const questionGroup = (/** @type {?} */ (this.form.rootNode.question));
        return questionGroup.questions.indexOf(node.question);
    }
}
ErrorRendererComponent.decorators = [
    { type: Component, args: [{
                selector: 'error-renderer',
                template: `<div *ngIf="showErrors()" class="container">
<ul class="list-group">
  <li class="list-group-item list-group-item-warning" *ngFor="let errorNode of errorNodes" (click)=announceErrorField(errorNode)>
    <div class="error" *ngIf="errorNode.control.valid == false">
      <h4>{{errorNode.question.label}}</h4>
      <span class="text-danger"> {{getControlError(errorNode)}}</span>
    </div>
  </li>
</ul>
</div>
`,
                styles: [`ul{list-style:none}.list-group-item{padding:2px 15px;cursor:pointer}ul li:hover{background-color:#fff}h4{margin-top:7px;margin-bottom:7px}`]
            },] },
];
ErrorRendererComponent.ctorParameters = () => [
    { type: ValidationFactory },
    { type: FormErrorsService }
];
ErrorRendererComponent.propDecorators = {
    form: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ErrorRendererComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    ErrorRendererComponent.prototype.validationFactory;
    /**
     * @type {?}
     * @private
     */
    ErrorRendererComponent.prototype.formErrorsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItcmVuZGVyZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5tcnMtZm9ybWVudHJ5LyIsInNvdXJjZXMiOlsiZm9ybS1lbnRyeS9lcnJvci1yZW5kZXJlci9lcnJvci1yZW5kZXJlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQVUsS0FBSyxFQUMzQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFpQnBFLE1BQU07Ozs7O0lBSUosWUFBb0IsaUJBQW9DLEVBQVUsaUJBQW9DO1FBQWxGLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQUcsQ0FBQzs7OztJQUUxRyxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsSUFBSSxVQUFVOztjQUVOLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztRQUM3RSxNQUFNLENBQUMsZUFBZSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLElBQWM7O2NBQ3BCLE1BQU0sR0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07UUFFdkMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUVULE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEUsQ0FBQztRQUVELE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLFNBQW1COztjQUU5QixLQUFLLEdBQW9CLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFekgsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFjLEVBQUUsRUFBRTtZQUVsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDOztzQkFDckMsU0FBUyxHQUFXLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUNqRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RGLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQWM7O2NBQ2xCLGFBQWEsR0FBa0IsbUJBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFpQjtRQUNqRixNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pELENBQUM7OztZQTdERixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7O0NBVWI7Z0JBQ0csTUFBTSxFQUFFLENBQUMsNElBQTRJLENBQUM7YUFDeko7OztZQW5CUSxpQkFBaUI7WUFHakIsaUJBQWlCOzs7bUJBbUJ2QixLQUFLOzs7O0lBQU4sc0NBQW9COzs7OztJQUVSLG1EQUE0Qzs7Ozs7SUFBRSxtREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgT25Jbml0LCBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgRm9ybSB9IGZyb20gJy4uL2Zvcm0tZmFjdG9yeS9mb3JtJztcbmltcG9ydCB7IFZhbGlkYXRpb25GYWN0b3J5IH0gZnJvbSAnLi4vZm9ybS1mYWN0b3J5L3ZhbGlkYXRpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBOb2RlQmFzZSwgTGVhZk5vZGUgfSBmcm9tICcuLi9mb3JtLWZhY3RvcnkvZm9ybS1ub2RlJztcbmltcG9ydCB7IFF1ZXN0aW9uR3JvdXAgfSBmcm9tICcuLi9xdWVzdGlvbi1tb2RlbHMvZ3JvdXAtcXVlc3Rpb24nO1xuaW1wb3J0IHsgRm9ybUVycm9yc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mb3JtLWVycm9ycy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdlcnJvci1yZW5kZXJlcicsXG4gICAgdGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwic2hvd0Vycm9ycygpXCIgY2xhc3M9XCJjb250YWluZXJcIj5cbjx1bCBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cbiAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS13YXJuaW5nXCIgKm5nRm9yPVwibGV0IGVycm9yTm9kZSBvZiBlcnJvck5vZGVzXCIgKGNsaWNrKT1hbm5vdW5jZUVycm9yRmllbGQoZXJyb3JOb2RlKT5cbiAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIiAqbmdJZj1cImVycm9yTm9kZS5jb250cm9sLnZhbGlkID09IGZhbHNlXCI+XG4gICAgICA8aDQ+e3tlcnJvck5vZGUucXVlc3Rpb24ubGFiZWx9fTwvaDQ+XG4gICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+IHt7Z2V0Q29udHJvbEVycm9yKGVycm9yTm9kZSl9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9saT5cbjwvdWw+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYHVse2xpc3Qtc3R5bGU6bm9uZX0ubGlzdC1ncm91cC1pdGVte3BhZGRpbmc6MnB4IDE1cHg7Y3Vyc29yOnBvaW50ZXJ9dWwgbGk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmfWg0e21hcmdpbi10b3A6N3B4O21hcmdpbi1ib3R0b206N3B4fWBdXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yUmVuZGVyZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGZvcm06IEZvcm07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWxpZGF0aW9uRmFjdG9yeTogVmFsaWRhdGlvbkZhY3RvcnksIHByaXZhdGUgZm9ybUVycm9yc1NlcnZpY2U6IEZvcm1FcnJvcnNTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgc2hvd0Vycm9ycygpIHtcbiAgICByZXR1cm4gIXRoaXMuZm9ybS52YWxpZCAmJiB0aGlzLmZvcm0uc2hvd0Vycm9ycztcbiAgfVxuXG4gIGdldCBlcnJvck5vZGVzKCkge1xuXG4gICAgY29uc3QgaW52YWxpZENvbnRyb2xzID0gdGhpcy5mb3JtLm1hcmtJbnZhbGlkQ29udHJvbHModGhpcy5mb3JtLnJvb3ROb2RlLCBbXSk7XG4gICAgcmV0dXJuIGludmFsaWRDb250cm9scztcbiAgfVxuXG4gIGdldENvbnRyb2xFcnJvcihub2RlOiBMZWFmTm9kZSkge1xuICAgICAgY29uc3QgZXJyb3JzOiBhbnkgPSBub2RlLmNvbnRyb2wuZXJyb3JzO1xuXG4gICAgICBpZiAoZXJyb3JzKSB7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uRmFjdG9yeS5lcnJvcnMoZXJyb3JzLCBub2RlLnF1ZXN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgYW5ub3VuY2VFcnJvckZpZWxkKGVycm9yTm9kZTogTGVhZk5vZGUpIHtcblxuICAgIGNvbnN0IG5vZGVzOiBBcnJheTxOb2RlQmFzZT4gPSB0aGlzLmZvcm0uc2VhcmNoTm9kZUJ5UXVlc3Rpb25JZChlcnJvck5vZGUucGF0aC5zdWJzdHJpbmcoMCwgZXJyb3JOb2RlLnBhdGguaW5kZXhPZignLicpKSk7XG5cbiAgICBfLmZvckVhY2gobm9kZXMsIChub2RlOiBOb2RlQmFzZSkgPT4ge1xuXG4gICAgICBpZiAobm9kZS5xdWVzdGlvbi5yZW5kZXJpbmdUeXBlID09PSAncGFnZScpIHtcbiAgICAgICAgY29uc3QgcGFnZUluZGV4OiBudW1iZXIgPSB0aGlzLmdldFBhZ2VJbmRleChub2RlKTtcbiAgICAgICAgdGhpcy5mb3JtRXJyb3JzU2VydmljZS5hbm5vdW5jZUVycm9yRmllbGQocGFnZUluZGV4ICsgJywnICsgZXJyb3JOb2RlLnF1ZXN0aW9uLmtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRQYWdlSW5kZXgobm9kZTogTm9kZUJhc2UpIHtcbiAgICAgY29uc3QgcXVlc3Rpb25Hcm91cDogUXVlc3Rpb25Hcm91cCA9IHRoaXMuZm9ybS5yb290Tm9kZS5xdWVzdGlvbiBhcyBRdWVzdGlvbkdyb3VwO1xuICAgICByZXR1cm4gcXVlc3Rpb25Hcm91cC5xdWVzdGlvbnMuaW5kZXhPZihub2RlLnF1ZXN0aW9uKTtcbiAgfVxufVxuIl19