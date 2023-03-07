import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomePageComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

const routes: Routes = [
    { path: '', component: HomePageComponent },
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
        HomePageComponent
    ],
    exports: [],
    providers: []
})
export class HomeModule { }
