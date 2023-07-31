import { Component, OnInit, Input } from '@angular/core';
// import { Slider } from './slider';
import { Slick } from 'ngx-slickjs';
@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.scss']
})
export class AssistanceComponent {
  // sliderData: Slider[] | any;

  // currentSlide = 0;

  // constructor() { }

  // ngOnInit() {
  // }

  // onSlideClick(index: number) {
  //   if (this.currentSlide !== index) {
  //     this.currentSlide = index;
  //   }
  // }

  // onPreviousClick() {
  //   const previous = this.currentSlide - 1
  //   this.currentSlide = previous < 0 ? this.sliderData.length - 1 : previous;
  //   console.log('previous clicked, new current slide is: ', this.currentSlide);
  // }

  // onNextClick() {
  //   const next = this.currentSlide + 1
  //   this.currentSlide = next === this.sliderData.length ? 0 : next;
  //   console.log('next clicked, new current slide is: ', this.currentSlide);
  // }


  // sliderData: Slider[] = [
  //   {
  //     index: 0,
  //     headline: 'Miouw',
  //     src:'../../../../../assets/images/contact/address-img-1.svg'
  //   },
  //   {
  //     index: 1,
  //     headline: 'In The Wilderness',
  //     src:'../../../../../assets/images/contact/address-img-2.svg'
  //   },
  //   {
  //     index: 2,
  //     headline: 'For Your Current Mood',
  //     src:'../../../../../assets/images/contact/address-img-3.svg'
  //   },

  // ]


  // arrayLength = 10;

  config: Slick.Config = {
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    mouseWheelMove:false
  };

  br="</br>"

  arrayLength=3;
  officeAddress=[
    {
      boxImg:'../../../../../assets/images/contact/address-img-1.svg',
      title:'Head Office',
      address:'#303B Images Capital Park, Silicon Valley, Madhapur Hyderabad – 500081',
      emailIcon:'../../../../../assets/images/contact/email.svg',
      emailId:'info@abilioit.com',
      phoneIcon:'../../../../../assets/images/contact/phone.svg',
      phoneNo:'040-40050678'
    },
    {
      boxImg:'../../../../../assets/images/contact/address-img-2.svg',
      title:'Bangalore',
      address:`Abilio IT Solutions Pvt Ltd #C113, Ramagondanahalli,
      \n Whitefield, 560037`,
      emailIcon:'../../../../../assets/images/contact/email.svg',
      emailId:'info.bangalore@abilioit.com',
      phoneIcon:'../../../../../assets/images/contact/phone.svg',
      phoneNo:'040-40050678'
    },
    {
      boxImg:'../../../../../assets/images/contact/address-img-1.svg',
      title:'United Kingdom',
      address:'Abilio,91 London St. Londonderry BT48 6PT, UK.',
      emailIcon:'../../../../../assets/images/contact/email.svg',
      emailId:'info@abilioit.com',
      phoneIcon:'../../../../../assets/images/contact/phone.svg',
      phoneNo:'040-40050678'
    },
  ]

  sliderData=[
    {
      boxImg:'../../../../../assets/images/contact/address-img-1.svg',
      title:'Head Office',
      address:'#303B Jain Sadguru Images Capital Park, Image Garden, Silicon Valley, Madhapur Hyderabad – 500081',
      emailIcon:'../../../../../assets/images/contact/email.svg',
      emailId:'info@abilioit.com',
      phoneIcon:'../../../../../assets/images/contact/phone.svg',
      phoneNo:'040-40050678'
    },
    {
      boxImg:'../../../../../assets/images/contact/address-img-2.svg',
      title:'Bangalore',
      address:'Abilio IT Solutions Pvt Ltd #C113, Ramagondanahalli, Whitefield, 560037',
      emailIcon:'../../../../../assets/images/contact/email.svg',
      emailId:'info.bangalore@abilioit.com',
      phoneIcon:'../../../../../assets/images/contact/phone.svg',
      phoneNo:'040-40050678'
    },
    {
      boxImg:'../../../../../assets/images/contact/address-img-3.svg',
      title:'United Kingdom',
      address:'Abilio,91 London St. Londonderry BT48 6PT, UK.',
      emailIcon:'../../../../../assets/images/contact/email.svg',
      emailId:'info@abilioit.com',
      phoneIcon:'../../../../../assets/images/contact/phone.svg',
      phoneNo:'040-40050678'
    },
  ]
  getArray(count: number) {
    return new Array(count);
  }
}
