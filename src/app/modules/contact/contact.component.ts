import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.scss']
})

export class ContactPageComponent {

    clientsRetained: number = 12;
    totalProjects: number = 108;
    clients: number = 96;
    clientsRetainedSet: number = 0;
    totalProjectsSet: number = 0;
    clientsSet: number = 0;
    countInterval?: any = null;

    @HostListener('window:scroll', ['$event']) onScroll(e: Event): void {
        if (window.pageYOffset > 1700 && !this.countInterval && this.clientsSet < this.clients && this.totalProjectsSet < this.totalProjects && this.clientsRetainedSet < this.clientsRetained) this.onCount();
        else if (window.pageYOffset < 1640) {
            if (!!this.countInterval) {
                clearInterval(this.countInterval);
                this.countInterval = null;
            }
            setTimeout(() => {
                this.clientsRetainedSet = 0;
                this.totalProjectsSet = 0;
                this.clientsSet = 0;
            }, 100);
        }
    }

    onCount(): void {
        this.countInterval = setInterval(() => {
            if (this.clientsRetainedSet < this.clientsRetained) this.clientsRetainedSet += 1;
            if (this.totalProjectsSet < this.totalProjects) this.totalProjectsSet += 1;
            if (this.clientsSet < this.clients) this.clientsSet += 1;

            if (this.clientsSet === this.clients && this.totalProjectsSet === this.totalProjects && this.clientsRetainedSet === this.clientsRetained) {
                clearInterval(this.countInterval);
                this.countInterval = null;
            }
        }, 40);
    }
}
