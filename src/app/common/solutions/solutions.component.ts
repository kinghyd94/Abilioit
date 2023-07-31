import { Component, HostListener } from '@angular/core';
import { Slick } from 'ngx-slickjs';
@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent {
  activeSlideIndex = 0;
  colors = ['#E6EDFF', '#FFF5E5', '#E6FFF4'];

  // Update the config to adjust the slidesToShow based on screen size
  config: Slick.Config = {
    infinite: true,
    slidesToShow: 3.5, // Show 3 slides by default
    slidesToScroll: 1,
    dots: true,
    autoplay: false,
    autoplaySpeed: 2000,
    mouseWheelMove: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides on medium-sized screens
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
          slidesToScroll: 1,
        }
      },
    ]
  };

  // ... Rest of the component code ...

  // Helper function to determine the number of slides to show based on screen width
  private getSlidesToShow(screenWidth: number): number {
    if (screenWidth >= 1024) {
      return 3;
    } else if (screenWidth >= 768) {
      return 2;
    } else {
      return 1;
    }
  }

  onSlideChange(event: any) {
    this.activeSlideIndex = event.currentSlide % this.slidesStore.length;
  }


  getActiveSlideBackground(index: number) {
    const colorIndex = index % this.colors.length;
    return this.colors[colorIndex];
  }

    slidesStore: any[] = [
      {
        id: 1,
        cardTitle:'Mobile App Development',
        cardImg:"../../../assets/images/web-icons/mobile-development.svg",
        cardText :"Mobile apps have become a crucial component of marketing and sales strategies enabling businesses to reach a wider audience and engage with customers in a more personalized way. Our skilled team of developers is well-versed in creating robust and innovative mobile applications across various platforms. From conceptualization to deployment, we ensure seamless user experiences and feature-rich solutions that cater to your specific business needs.",
        arrow:"../../../assets/images/web-icons/right-arrow.svg"
      },
      {
        id:2,
        cardTitle:'Web App Development',
        cardImg:"../../../assets/images/web-icons/web-develpoment.svg",
        cardText :"Web apps are an essential tool for businesses to mark their presence online and build trust among audiences. Our talented web developers are experts in designing and building high-quality websites that leave a lasting impression. Whether you require a simple brochure website or a complex e-commerce platform, we employ the industry's best practices to deliver dynamic and engaging web solutions.",
        arrow:"../../../assets/images/web-icons/right-arrow.svg"

      },
      {
        id:3,
        cardTitle:'Product Development',
        cardImg:"../.././../assets/images/web-icons/product-development.svg",
        cardText :"Web apps are an essential tool for businesses to mark their presence online and build trust among audiences. Our talented web developers are experts in designing and building high-quality websites that leave a lasting impression. Whether you require a simple brochure website or a complex e-commerce platform, we employ the industry's best practices to deliver dynamic and engaging web solutions.",
        arrow:"../../../assets/images/web-icons/right-arrow.svg"

      },
      {
        id: 4,
        cardTitle:'Mobile App Development',
        cardImg:"../../../assets/images/web-icons/mobile-development.svg",
        cardText :"Mobile apps have become a crucial component of marketing and sales strategies enabling businesses to reach a wider audience and engage with customers in a more personalized way. Our skilled team of developers is well-versed in creating robust and innovative mobile applications across various platforms. From conceptualization to deployment, we ensure seamless user experiences and feature-rich solutions that cater to your specific business needs.",
        arrow:"../../../assets/images/web-icons/right-arrow.svg"

      },
      {
        id:5,
        cardTitle:'Web App Development',
        cardImg:"../../../assets/images/web-icons/web-develpoment.svg",
        cardText :"Web apps are an essential tool for businesses to mark their presence online and build trust among audiences. Our talented web developers are experts in designing and building high-quality websites that leave a lasting impression. Whether you require a simple brochure website or a complex e-commerce platform, we employ the industry's best practices to deliver dynamic and engaging web solutions.",
        arrow:"../../../assets/images/web-icons/right-arrow.svg"

      },
      {
        id:6,
        cardTitle:'Product Development',
        cardImg:"../.././../assets/images/web-icons/product-development.svg",
        cardText :"Web apps are an essential tool for businesses to mark their presence online and build trust among audiences. Our talented web developers are experts in designing and building high-quality websites that leave a lasting impression. Whether you require a simple brochure website or a complex e-commerce platform, we employ the industry's best practices to deliver dynamic and engaging web solutions.",
        arrow:"../../../assets/images/web-icons/right-arrow.svg"

      },
      {
        id:7,
        cardTitle:'Product Development',
        cardImg:"../.././../assets/images/web-icons/product-development.svg",
        cardText :"Web apps are an essential tool for businesses to mark their presence online and build trust among audiences. Our talented web developers are experts in designing and building high-quality websites that leave a lasting impression. Whether you require a simple brochure website or a complex e-commerce platform, we employ the industry's best practices to deliver dynamic and engaging web solutions.",
        arrow:"../../../assets/images/web-icons/right-arrow.svg"

      },
      {
        id:8,
        cardTitle:'Product Development',
        cardImg:"../.././../assets/images/web-icons/product-development.svg",
        cardText :"Web apps are an essential tool for businesses to mark their presence online and build trust among audiences. Our talented web developers are experts in designing and building high-quality websites that leave a lasting impression. Whether you require a simple brochure website or a complex e-commerce platform, we employ the industry's best practices to deliver dynamic and engaging web solutions.",
        arrow:"../../../assets/images/web-icons/right-arrow.svg"

      },

      // Add more slide objects as needed
    ];

    scrollToTop() {
      (function smoothscroll() {
          const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
            //   window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - (currentScroll / 0));
          }
      })();
    }

}
