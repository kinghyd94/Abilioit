import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  showSection = false;

  @HostListener('window:load')
  @HostListener('window:scroll')
  isInViewport(element: HTMLElement | null): boolean {
    if (!element) {
      return false;
    }
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  showHeroSection() {
    const heroSection = document.getElementById('hero-section');
    if (this.isInViewport(heroSection) && !this.showSection) {
      this.showSection = true;
    }
  }

  showImage = false;
  ngOnInit(): void {
    this.showHeroSection();
    window.addEventListener('load', () => {
      this.showImage = true;
    });



    // sliding
    // Get the image items
    const imageItems = document.querySelectorAll('.image-item');

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target.querySelector('img');
          // image.classList.add('slide-animation');
          image?.classList.add('slide-animation')
        }
      });
    });

    // Observe each image item
    imageItems.forEach(item => {
      observer.observe(item);
    });
  }
}
