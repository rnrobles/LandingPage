import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  photos: any[] = [];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 2,
    },

    {
      breakpoint: '420px',
      numVisible: 1,
    },
  ];

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    this.ref;
    this.config;

    let id = this.config.data.id;

    if (id == 'agenda') {
      this.photos = [
        {
          previewImageSrc: '/assets/capturas/agenda/main.png',
          thumbnailImageSrc: '/assets/capturas/agenda/main.png',
          alt: 'Description for Image 1',
          title: 'Title 1',
          description:
            "",
        },

        {
          previewImageSrc: '/assets/capturas/agenda/1.png',
          thumbnailImageSrc: '/assets/capturas/agenda/1.png',
          alt: 'Description for Image 1',
          title: 'Title 1',
          description: '',
        },

        {
          previewImageSrc: '/assets/capturas/agenda/2.png',
          thumbnailImageSrc: '/assets/capturas/agenda/2.png',
          alt: 'Description for Image 1',
          title: 'Title 1',
          description: '',
        },
        {
          previewImageSrc: '/assets/capturas/agenda/3.png',
          thumbnailImageSrc: '/assets/capturas/agenda/3.png',
          alt: 'Description for Image 1',
          title: 'Title 1',
          description: '',
        },

        {
          previewImageSrc: '/assets/capturas/agenda/4.png',
          thumbnailImageSrc: '/assets/capturas/agenda/4.png',
          alt: 'Description for Image 1',
          title: 'Title 1',
          description: '',
        },
        {
          previewImageSrc: '/assets/capturas/agenda/5.png',
          thumbnailImageSrc: '/assets/capturas/agenda/5.png',
          alt: 'Description for Image 1',
          title: 'Title 1',
          description: '',
        },
      ];
    } else if (id == 'herramientas') {
      this.photos = [
        {
          previewImageSrc: '/assets/capturas/herramientas/main.png',
          thumbnailImageSrc: '/assets/capturas/agenda/main.png',
          alt: 'Description for Image 1',
          title: 'Title 1',
          description: ""
        },

        {
          previewImageSrc: '/assets/capturas/herramientas/1.png',
          thumbnailImageSrc: '/assets/capturas/agenda/1.png',
          alt: 'Description for Image 1',
          title: 'Title 1',
          description: '',
        },

        {
          previewImageSrc: '/assets/capturas/herramientas/2.png',
          thumbnailImageSrc: '/assets/capturas/agenda/1.png',
          alt: 'Description for Image 1',
          title: 'Title 1',
          description: '',
        },

        {
          previewImageSrc: '/assets/capturas/herramientas/3.png',
          thumbnailImageSrc: '/assets/capturas/agenda/1.png',
          alt: 'Description for Image 1',
          title: 'Title 1',
          description: '',
        },
      ];
    } else if (id == 'erp') {
      this.photos = [
        {
          previewImageSrc: 'assets/capturas/erp/erp-main.png',
          thumbnailImageSrc: 'assets/capturas/erp/erp-main.png',
          alt: 'demo',
          title: 'demo',
          description: ""
        },

      ];

    } else if (id == 'entrevista') {
      this.photos = [
        {
          previewImageSrc: 'assets/capturas/entrevista/entrevista-main.png',
          thumbnailImageSrc: 'assets/capturas/entrevista/entrevista-main.png',
          alt: 'demo',
          title: 'demo',
          description: ""
        },

      ];

    } else if (id == 'rick') {
      this.photos = [
        {
          previewImageSrc: 'assets/capturas/rick/1.png',
          thumbnailImageSrc: 'assets/capturas/rick/1.png',
          alt: 'demo',
          title: 'demo',
          description: ""
        },
        {
          previewImageSrc: 'assets/capturas/rick/2.png',
          thumbnailImageSrc: 'assets/capturas/rick/2.png',
          alt: 'demo',
          title: 'demo',
          description: ""
        },
        {
          previewImageSrc: 'assets/capturas/rick/3.png',
          thumbnailImageSrc: 'assets/capturas/rick/3.png',
          alt: 'demo',
          title: 'demo',
          description: ""
        },
        {
          previewImageSrc: 'assets/capturas/rick/4.png',
          thumbnailImageSrc: 'assets/capturas/rick/4.png',
          alt: 'demo',
          title: 'demo',
          description: ""
        },
      ];
    }
  }
}
