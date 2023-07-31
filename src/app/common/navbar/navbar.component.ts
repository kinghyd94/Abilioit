import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    // [x: string]: any;
    windowScrolled?: boolean;

    planelName?: string;
    cgstvalue?: number;
    totalAmmount?: number;
    planAmmount?: number;
    @ViewChild('signinElef', {static: true}) signinElef?: TemplateRef<any>;
    @ViewChild('filterElef', {static: true}) filterElef?: TemplateRef<any>;
    constructor(private viewportScroller: ViewportScroller) {}

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }
     @HostListener('window:scroll', [])
  onWindowScroll() {
    //   if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
    //       this.windowScrolled = true;
    //   }
      if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }

  closeNavbar() {
    this.classApplied = false;
    window.scroll(0,0);

  }

  statusClass = 'not-active';

  setActiveClass(){
    // this.statusClass = 'active';
    if(this.statusClass == 'not-active'){
      this.statusClass = 'active'
    }else{
      this.statusClass = 'not-active'
    }
  }
  scrollToTop() {
      (function smoothscroll() {
          const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
            //   window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - (currentScroll / 0));
          }
      })();
  }
    ngOnInit() {
    }
    // tslint:disable-next-line:member-ordering
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }






    // tslint:disable-next-line: member-ordering
    public course = ['angular', 'html', 'bootstrap', ];

  // tslint:disable-next-line: member-ordering
  public Countrys = ['India', 'Canada', 'Brazil', 'United States of America', 'Argentina', 'Kazakhstan'];
  // tslint:disable-next-line: member-ordering
  public State = [ 'Telangana', 'Kerala', 'Rajasthan', 'Goa', 'Punjab' , ' Himachal Pradesh'];
  // tslint:disable-next-line: member-ordering

}



