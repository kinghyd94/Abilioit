import { Component, ElementRef, HostListener } from '@angular/core';
import { TweenMax } from 'gsap';
@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent {
  private cursor: any;
  private follower: any;
  private posX: number = 0;
  private posY: number = 0;
  private mouseX: number = 0;
  private mouseY: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.cursor = this.el.nativeElement.querySelector('.cursor');
    this.follower = this.el.nativeElement.querySelector('.cursor-follower');
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mouseX = e.pageX;
    this.mouseY = e.pageY;
  }

  ngAfterViewInit() {
    // Your TweenMax animation code here
    TweenMax.set(this.cursor, { opacity: 0.5, scale: 1 }); // Set initial cursor properties

    TweenMax.to(this.cursor, 0.3, { opacity: 0, scale: 0, ease: 'easeInOut' }); // Example animation
    // You can add more animations as needed

    // Follow the same pattern to animate the follower element if required
  }

  onLinkEnter() {
    this.cursor.classList.add('active');
    this.follower.classList.add('active');
  }

  onLinkLeave() {
    this.cursor.classList.remove('active');
    this.follower.classList.remove('active');
  }
}
