import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServicesPageComponent } from './services.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

const routes: Routes = [
    { path: '', component: ServicesPageComponent },
];

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        HeaderModule,
        FooterModule,

        RouterModule.forChild(routes),
    ],
    declarations: [
        ServicesPageComponent
    ],
    exports: [],
    providers: []
})
export class ServicesModule { }
