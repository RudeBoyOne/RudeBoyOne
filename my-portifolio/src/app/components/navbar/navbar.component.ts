import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    collapseNavbar(): void {
        const navbarCollapse = document.querySelector('.navbar-collapse');

        if (navbarCollapse?.classList.contains('show')) {
            const onTransitionEnd = () => {
                navbarCollapse?.classList.remove('show');
                navbarCollapse?.removeEventListener('transitionend', onTransitionEnd);
            };

            navbarCollapse.addEventListener('transitionend', onTransitionEnd);
            navbarCollapse.classList.remove('collapsing');
        }
    }

}
