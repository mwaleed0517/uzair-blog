import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})

export class HeaderPageComponent {
    @Input() currentRoute?: string;

    constructor(private router: Router) { }

    onRoute(dest: string) {
        if (dest === this.currentRoute) window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        else this.router.navigate(['/'+dest]);
    }
}
