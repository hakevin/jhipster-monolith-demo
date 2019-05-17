import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MonolithSharedLibsModule, MonolithSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [MonolithSharedLibsModule, MonolithSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [MonolithSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MonolithSharedModule {
  static forRoot() {
    return {
      ngModule: MonolithSharedModule
    };
  }
}
