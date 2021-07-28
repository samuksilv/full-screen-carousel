import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, Navigation, Pagination, } from 'swiper/core';
import { AutoplayOptions, PaginationOptions, } from 'swiper/types';


SwiperCore.use([Autoplay, Navigation, Pagination,]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit {

  constructor() { }

  paginationOptions: PaginationOptions = {
    clickable: true,
    bulletActiveClass: 'active-bullet'
  };

  autoplayOptions: AutoplayOptions = {
    delay: 3000,
    pauseOnMouseEnter: false,
    disableOnInteraction: false,
  };

  ngOnInit(): void {

  }

}
