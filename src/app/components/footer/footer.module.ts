import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterPageComponent } from './footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        ReactiveFormsModule,
    ],
    declarations: [
        FooterPageComponent
    ],
    exports: [
        FooterPageComponent,
    ],
    providers: []
})
export class FooterModule { }
