import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { GalleryComponent } from './gallery/gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'landingPage';

  idioma: any;
  ingles: boolean = false;

  constructor(public dialogService: DialogService) {
    this.idioma = this.lang;
  }

  lang = {
    language: {
      language: 'Español',
      icon: 'Acerca de',
    },

    menu: {
      menu1: 'Acerca de',
      menu2: 'Servicios',
      menu3: 'Portafolio',
      menu4: 'Contacto',
    },
    presentation: {
      init: 'Diseño y codifico cosas simples y me encanta lo que hago.',
      button: 'Saber más',
    },
    about: {
      hello: 'Hola, soy Ramón',
      main: 'Desde que comencé mi viaje como desarrollador hace casi 5 años, he realizado trabajo remoto para agencias y he colaborado con personas talentosas para crear productos digitales para uso comercial y de consumo. Estoy tranquilamente confiado, naturalmente curioso y trabajando constantemente para mejorar mis habilidades, un problema de desarrollador a la vez.',
      button: '¡Empezar!',
    },
    Services: {
      title: 'A Su Servicio',
      used: 'Utilizados:',
      language: 'Lenguajes que uso:',
      certificate: 'Certificado:',
      contact: '¡Mantengámonos en contacto!:',
      courses: '75 cursos aprobados',
    },
  };


  lang2 = {
    language: {
      language: 'English',
      icon: 'Acerca de',
    },

    menu: {
      menu1: 'About',
      menu2: 'Services',
      menu3: 'Portfolio',
      menu4: 'Contact',
    },
    presentation: {
      init: 'I design and code simple things, and I love what I do.',
      button: 'FIND OUT MORE',
    },
    about: {
      hello: 'Hi,I’m Ramón',
      main: "Since beginning my journey as a freelance developer nearly 5 years ago, I've done remote work for agencies,  and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one developer problem at a time.",
      button: 'Get Started!',
    },

    Services: {
      title: 'At Your Service',
      used: 'Used:',
      language: 'Languages I speak:',
      certificate: 'Certificade:',
      contact: "Let's Get In Touch!:",
      courses: '75 approved courses',
    },
  };

  show(id: string) {
     const ref = this.dialogService.open(GalleryComponent, {
      data: {
        id: id,
      },
      width: '80%',
      showHeader: false,
      contentStyle: { background: 'black' },
      dismissableMask: true,
    });
  }

  changeLang(tipo: boolean) {
    if (tipo) {
      this.idioma = this.lang2;
    } else {
      this.idioma = this.lang;
    }
    this.ingles = tipo;
  }
}
