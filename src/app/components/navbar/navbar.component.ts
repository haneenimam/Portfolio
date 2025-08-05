import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements AfterViewInit {
  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const navLinks = this.el.nativeElement.querySelectorAll('.nav-link');
      navLinks.forEach((link: HTMLElement) => {
        link.addEventListener('click', () => {
          const collapse = this.el.nativeElement.querySelector('.navbar-collapse');
          if (collapse) collapse.classList.remove('show');
        });
      });
    }
  }
}
