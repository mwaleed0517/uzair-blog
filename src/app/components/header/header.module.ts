import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderPageComponent } from './header.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        ReactiveFormsModule,
    ],
    declarations: [
        HeaderPageComponent
    ],
    exports: [
        HeaderPageComponent,
    ],
    providers: []
})
export class HeaderModule { }
