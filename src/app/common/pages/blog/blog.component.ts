import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  photoGalleryData = [
    // Add your image data dynamically here
    {
     col1:{
      imgSrc: '../../../../assets/images/blog/blog-img-1.svg',
      title: 'Reach Your Marketing Goals \nFaster With Us',
       date: 'April 5, 2023'
     },
     col2:{
      imgSrc: '../../../../assets/images/blog/blog-img-2.svg',
      title: 'Excellence in business comes from 3 key things',
       date: 'February 25, 2023'
     },
     col3:{
      imgSrc: '../../../../assets/images/blog/blog-img-3.svg',
      title: '3 marketing tools you should be paying attention to in 2024',
       date: 'Jan 17, 2023'
     }
    },
    {
      col1:{
       imgSrc: '../../../../assets/images/blog/blog-img-4.svg',
       title: 'Get financial advice by the top consultant',
        date: 'March 15, 2023'
      },
      col2:{
       imgSrc: '../../../../assets/images/blog/blog-img-5.svg',
       title: 'Designed to help your small business with financial decisions',
        date: 'January 18, 2023'
      },
      col3:{
       imgSrc: '../../../../assets/images/blog/blog-img-6.svg',
       title: '3 interview tips that can help you find the right candidate',
        date: 'Jan 17, 2023'
      }
     },
     {
      col1:{
       imgSrc: '../../../../assets/images/blog/blog-img-7.svg',
       title: 'How to get into business without spending a dime.',
        date: 'March 4, 2023'
      },
      col2:{
       imgSrc: '../../../../assets/images/blog/blog-img-8.svg',
       title: 'Financial discussion that will improve your business',
        date: 'February 10, 2023'
      },
      col3:{
       imgSrc: '../../../../assets/images/blog/blog-img-9.svg',
       title: '6 signs it’s the right time to fire your problem employee',
        date: 'Jan 17, 2023'
      },

     },



    // Add more image objects as needed
  ];

  pageSize = 9;
  currentPage = 1;

  get paginatedPhotoGalleryData(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = this.currentPage * this.pageSize;
    return this.photoGalleryData.slice(startIndex, endIndex);
  }

  handlePageChange(event: number): void {
    this.currentPage = event;
  }

  onPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  onNextPage(): void {
    const totalPages = Math.ceil(this.photoGalleryData.length / this.pageSize);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }
}
