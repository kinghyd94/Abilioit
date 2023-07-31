import { Component } from '@angular/core';

@Component({
  selector: 'app-specialization',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.scss'],
})
export class SpecializationComponent {

  data = [
    {
      col1: {
        id: 1,
        coursesImg: '../../../../../assets/images/services/Mobile-development.svg',
        coursesTitle: 'Mobile App Development',
        coursesContent:
          'Mobile apps have become a crucial component of marketing and sales strategies enabling businesses to reach a wider audience and engage with customers in a more personalized way. Our skilled team of developers is well-versed in creating robust and innovative mobile applications across various platforms. From conceptualization to deployment, we ensure seamless user experiences and feature-rich solutions that cater to your specific business needs.',
      },
      col2: {
        id: 2,
        coursesImg: '../../../../../assets/images/services/web-development.svg',
        coursesTitle: 'Web App Development',
        coursesContent:
          "Web apps are an essential tool for businesses to mark their presence online and build trust among audiences. Our talented web developers are experts in designing and building high-quality websites that leave a lasting impression. Whether you require a simple brochure website or a complex e-commerce platform, we employ the industry's best practices to deliver dynamic and engaging web solutions.",
      },
    },
    {
      col1: {
        id: 3,
      coursesImg: '../../../../../assets/images/services/product-development.svg',
      coursesTitle: 'Product Development',
      coursesContent:
        'The process of product development is intricate and demanding, requiring a wealth of specialized knowledge. We implement product development strategies, through which businesses gain access to a team of seasoned professionals. Our developers possess the skills to design groundbreaking and profitable products for your organization’s intended consumer base.',
      },
      col2: {
        id: 4,
      coursesImg: '../../../../../assets/images/services/migration-services.svg',
      coursesTitle: 'Migration Services',
      coursesContent:
        'In this competitive market, businesses need to adapt and upgrade their systems to stay ahead. Our migration services provide a smooth and hassle-free transition from old systems to the latest, scalable, and secure platforms. Through meticulous planning, our team will ensure minimal disruption to your business operations and maximize the benefits of the new environment.',
      },
    },
    {
      col1: {
        id: 5,
        coursesImg: '../../../../../assets/images/services/staffing-services.svg',
        coursesTitle: 'Staffing Services',
        coursesContent:
          "We recognize that sourcing the ideal IT talent can present a formidable obstacle. At Abilio, through our extensive network, we identify the optimal candidates for your organization's roles. Our meticulous screening process will connect you with a pool of qualified and trained individuals who possess the expertise and passion to drive your business forward.",
      },
      col2: {
        id: 6,
        coursesImg: '../../../../../assets/images/services/outsourcing-services.svg',
        coursesTitle: 'Outsourcing Services',
        coursesContent:
          'Streamline your operations by hiring an authentic third-party service such as Abilio. We offer a wide range of outsourcing solutions tailored to your specific requirements. Our team is enriched with experience, expertise, and resources to optimize your productivity while adapting cost-effective methodologies.',
      },
    },
  ];

  WorkProcess=[
   {
    col1:{
      img:'../../../../../assets/images/web-icons/book.svg',
      title:'Analysis',
      content:'Individual best it cause organic launch breakout indicators.'
    },
    col2:{
      img:'../../../../../assets/images/web-icons/eye.svg',
      title:'Research',
      content:"Involved fruit comms stands i'm that's shelf-ware reality."
    }
   },
   {
    col1:{
      img:'../../../../../assets/images/web-icons/bloub.svg',
      title:'Resource',
      content:'Shark thought fit good whistles comms stands scope were close.'
    },
    col2:{
      img:'../../../../../assets/images/web-icons/chess.svg',
      title:'Management',
      content:'Will users respectively nor vendor  hurting put waste.'
    }
   }
  ]

}
