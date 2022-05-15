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
  ) {}

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
            "1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
          description:
            "1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
    } else {
      this.photos = [
        {
          previewImageSrc: 'assets/img/portfolio/fullsize/1.jpg',
          thumbnailImageSrc: 'assets/img/portfolio/fullsize/1.jpg',
          alt: 'Description for Image 1',
          title: 'Title 1',
          description:
            "1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          previewImageSrc: 'assets/img/portfolio/fullsize/2.jpg',
          thumbnailImageSrc: 'assets/img/portfolio/fullsize/2.jpg',
          alt: 'Description for Image 1',
          title: 'Title 1',
          description:
            "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },

        {
          previewImageSrc: 'assets/img/portfolio/fullsize/3.jpg',
          thumbnailImageSrc: 'assets/img/portfolio/fullsize/3.jpg',
          alt: 'Description for Image 1',
          title: 'Title 1',
          description:
            "3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },

        {
          previewImageSrc: 'assets/img/portfolio/fullsize/4.jpg',
          thumbnailImageSrc: 'assets/img/portfolio/fullsize/4.jpg',
          alt: 'Description for Image 1',
          title: 'Title 1',
          description:
            "4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },

        {
          previewImageSrc: 'assets/img/portfolio/fullsize/5.jpg',
          thumbnailImageSrc: 'assets/img/portfolio/fullsize/5.jpg',
          alt: 'Description for Image 1',
          title: 'Title 1',
          description:
            "5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },

        {
          previewImageSrc: 'assets/img/portfolio/fullsize/6.jpg',
          thumbnailImageSrc: 'assets/img/portfolio/fullsize/6.jpg',
          alt: 'Description for Image 1',
          title: 'Title 1',
          description:
            "6 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ];
    }
  }
}
