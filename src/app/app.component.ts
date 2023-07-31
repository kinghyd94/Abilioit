import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'abilio';
  showNavAndFooter: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // Subscribe to router events to check for route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is the PageNotFoundComponent route
        this.showNavAndFooter = !this.isPageNotFoundRoute(this.activatedRoute);
      }
    });


    //

    // const swiper = new Swiper('.mySwiper', {
    //   loop: true,
    //   autoplay: true,
    //   autoplayTimeout: 1000,
    //   autoplayHoverPause: true,
    //   effect: "coverflow",
    //   grabCursor: true,
    //   centeredSlides: true,
    //   slidesPerView: "auto",
    //   coverflowEffect: {
    //     rotate: 0,
    //     stretch: 0,
    //     depth: 300,
    //     modifier: 1,
    //     slideShadows: false,
    //   },
    //   pagination: {
    //     el: '.swiper-pagination'
    //   }
    // });
  }

  private isPageNotFoundRoute(route: ActivatedRoute): boolean {
    if (route.firstChild) {
      return this.isPageNotFoundRoute(route.firstChild);
    }

    return route.snapshot.routeConfig?.path === '**';
  }
}
