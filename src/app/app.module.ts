import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {GalleriaModule} from 'primeng/galleria';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogService} from 'primeng/dynamicdialog';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GalleriaModule,
    DynamicDialogModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
