import { NgModule } from '@angular/core';
import { LayoutComponent } from 'app/layout/layout.component';
import { EmptyLayoutModule } from 'app/layout/layouts/empty/empty.module';
import { MaterialLayoutModule } from 'app/layout/layouts/horizontal/material/material.module';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        SharedModule,
        EmptyLayoutModule,
        MaterialLayoutModule
    ],
    exports: [
        LayoutComponent,
        EmptyLayoutModule,
        MaterialLayoutModule
    ]
})
export class LayoutModule {
}
