import { Component } from '@angular/core';

@Component({
  selector: 'app-mission-and-vision',
  templateUrl: './mission-and-vision.component.html',
  styleUrls: ['./mission-and-vision.component.scss']
})
export class MissionAndVisionComponent {
  WorkProcess=[
    {
     col1:{
       img:'../../../../../assets/images/about-us/web-logos/university-lecture.svg',
       title:'Expert LED Taining',
       content:'Our in-depth training programs are designed by adroit professionals that encapsulate the latest technologies and real-world case studies to ensure you develop the skills demanded by the industry.'
     },
     col2:{
       img:'../../../../../assets/images/about-us/web-logos/learn.svg',
       title:'Flexible Learning Options',
       content:"We offer flexible learning options to suit individual schedules. You can choose your preferred time slots and learn at your own pace without compromising on the quality of education and training."
     },
     col3:{
      img:'../../../../../assets/images/about-us/web-logos/collect.svg',
      title:'Diverse Course Catalog',
      content:'Our courses cover a wide spectrum of IT domains, including software development, data science, web development, AI, and more. We constantly update our curriculum to stay aligned with industry trends.'
    }
    },
    {
     col1:{
       img:'../../../../../assets/images/about-us/web-logos/development.svg',
       title:'Hands-On Development',
       content:'Realizing the importance of practical learning, our development programs incorporate numerous research projects and simulations to provide you with hands-on experience.'
     },
     col2:{
       img:'../../../../../assets/images/about-us/web-logos/handshake.svg',
       title:'Supportive Environment',
       content:'We foster a supportive and collaborative learning environment where you can interact with your mentors, trainers, and peers, exchange knowledge, and thereby prosper together.'
     },
     col3:{
      img:'../../../../../assets/images/about-us/web-logos/career-rising-trend-becoming.svg',
      title:'Career-Focused Placement',
      content:'We offer extensive placement assistance and connect you with top employers. Through our vast network of industry partners, we ensure you secure a rewarding job in your dream company.'
    }
    },
    {
      col1:{
        img:'../../../../../assets/images/about-us/web-logos/development.svg',
        title:'Hands-On Development',
        content:'Realizing the importance of practical learning, our development programs incorporate numerous research projects and simulations to provide you with hands-on experience.'
      },
      col2:{
        img:'../../../../../assets/images/about-us/web-logos/handshake.svg',
        title:'Supportive Environment',
        content:'We foster a supportive and collaborative learning environment where you can interact with your mentors, trainers, and peers, exchange knowledge, and thereby prosper together.'
      },
      col3:{
       img:'../../../../../assets/images/about-us/web-logos/career-rising-trend-becoming.svg',
       title:'Career-Focused Placement',
       content:'We offer extensive placement assistance and connect you with top employers. Through our vast network of industry partners, we ensure you secure a rewarding job in your dream company.'
     }
     },

   ]
}
