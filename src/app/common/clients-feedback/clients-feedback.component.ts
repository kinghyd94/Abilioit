import { Component, AfterViewInit, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $: any;
// declare const $: any;

@Component({
  selector: 'app-clients-feedback',
  templateUrl: './clients-feedback.component.html',
  styleUrls: ['./clients-feedback.component.scss']
})
export class ClientsFeedbackComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    // Owl Carousel initialization
    $(document).ready(function () {
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        center: true,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        dots: true,
        autoplayTimeout: 3000,
        responsive: {
          0: {
            items: 1, // Show 1 item on small screens (e.g., mobile devices)
            nav: true,
            loop: false, // Disable loop for mobile screens
            center: false,
            startPosition: 0,
          },
          600: {
            items: 3, // Show 3 items on medium-sized screens (e.g., tablets)
            nav: false,
            loop: false, // Enable loop for medium-sized screens and larger
          },
          1000: {
            items: 5, // Show 5 items on larger screens (e.g., desktops)
            nav: true,
            loop: true, // Enable loop for large screens
          },
        },
      });
    });
  }

  sliderItems=[
    {
      id:1,
      commet:"I would like to express my heartfelt gratitude to Abilio IT Solutions for providing an outstanding training program. The educators with their extensive expertise employed a hands-on approach that aided my understanding of complex ideas. The program considerably improved my technical skills, allowing me to gain a position in Accenture's R&D department.",
      clientImg:'../../../assets/images/clients/client-img.svg',
      clientName:'Sakshi Kothari',
      clientCompeny:'Accenture R&D Department'
    },
    {
      id:2,
      commet:"I would like to express my heartfelt gratitude to Abilio IT Solutions for providing an outstanding training program. The educators with their extensive expertise employed a hands-on approach that aided my understanding of complex ideas. The program considerably improved my technical skills, allowing me to gain a position in Accenture's R&D department.",
      clientImg:'../../../assets/images/clients/client-img.svg',
      clientName:'Sakshi Kothari',
      clientCompeny:'Accenture R&D Department'
    },
    {
      id:3,
      commet:"I would like to express my heartfelt gratitude to Abilio IT Solutions for providing an outstanding training program. The educators with their extensive expertise employed a hands-on approach that aided my understanding of complex ideas. The program considerably improved my technical skills, allowing me to gain a position in Accenture's R&D department.",
      clientImg:'../../../assets/images/clients/client-img.svg',
      clientName:'Sakshi Kothari',
      clientCompeny:'Accenture R&D Department'
    },
    {
      id:4,
      commet:"I would like to express my heartfelt gratitude to Abilio IT Solutions for providing an outstanding training program. The educators with their extensive expertise employed a hands-on approach that aided my understanding of complex ideas. The program considerably improved my technical skills, allowing me to gain a position in Accenture's R&D department.",
      clientImg:'../../../assets/images/clients/client-img.svg',
      clientName:'Sakshi Kothari',
      clientCompeny:'Accenture R&D Department'
    },
    {
      id:5,
      commet:"I would like to express my heartfelt gratitude to Abilio IT Solutions for providing an outstanding training program. The educators with their extensive expertise employed a hands-on approach that aided my understanding of complex ideas. The program considerably improved my technical skills, allowing me to gain a position in Accenture's R&D department.",
      clientImg:'../../../assets/images/clients/client-img.svg',
      clientName:'Sakshi Kothari',
      clientCompeny:'Accenture R&D Department'
    },
    {
      id:6,
      commet:"I would like to express my heartfelt gratitude to Abilio IT Solutions for providing an outstanding training program. The educators with their extensive expertise employed a hands-on approach that aided my understanding of complex ideas. The program considerably improved my technical skills, allowing me to gain a position in Accenture's R&D department.",
      clientImg:'../../../assets/images/clients/client-img.svg',
      clientName:'Sakshi Kothari',
      clientCompeny:'Accenture R&D Department'
    },
    {
      id:7,
      commet:"I would like to express my heartfelt gratitude to Abilio IT Solutions for providing an outstanding training program. The educators with their extensive expertise employed a hands-on approach that aided my understanding of complex ideas. The program considerably improved my technical skills, allowing me to gain a position in Accenture's R&D department.",
      clientImg:'../../../assets/images/clients/client-img.svg',
      clientName:'Sakshi Kothari',
      clientCompeny:'Accenture R&D Department'
    },
    {
      id:8,
      commet:"I would like to express my heartfelt gratitude to Abilio IT Solutions for providing an outstanding training program. The educators with their extensive expertise employed a hands-on approach that aided my understanding of complex ideas. The program considerably improved my technical skills, allowing me to gain a position in Accenture's R&D department.",
      clientImg:'../../../assets/images/clients/client-img.svg',
      clientName:'Sakshi Kothari',
      clientCompeny:'Accenture R&D Department'
    },
    {
      id:9,
      commet:"I would like to express my heartfelt gratitude to Abilio IT Solutions for providing an outstanding training program. The educators with their extensive expertise employed a hands-on approach that aided my understanding of complex ideas. The program considerably improved my technical skills, allowing me to gain a position in Accenture's R&D department.",
      clientImg:'../../../assets/images/clients/client-img.svg',
      clientName:'Sakshi Kothari',
      clientCompeny:'Accenture R&D Department'
    },
    {
      id:10,
      commet:"I would like to express my heartfelt gratitude to Abilio IT Solutions for providing an outstanding training program. The educators with their extensive expertise employed a hands-on approach that aided my understanding of complex ideas. The program considerably improved my technical skills, allowing me to gain a position in Accenture's R&D department.",
      clientImg:'../../../assets/images/clients/client-img.svg',
      clientName:'Sakshi Kothari',
      clientCompeny:'Accenture R&D Department'
    }
  ]
}
