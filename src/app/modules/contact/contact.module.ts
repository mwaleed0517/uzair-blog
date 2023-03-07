import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
    { path: '', component: ContactPageComponent },
];

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        HeaderModule,
        FooterModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,

        RouterModule.forChild(routes),
    ],
    declarations: [
        ContactPageComponent
    ],
    exports: [],
    providers: []
})
export class ContactModule { }
