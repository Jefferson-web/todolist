import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TaskListComponent } from './task-list/task-list.component';
import { NotifierModule } from 'angular-notifier';
import {MatButtonModule} from '@angular/material/button';
import { TaskFormComponent } from './task-form/task-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    NotifierModule.withConfig({
      position: {

        horizontal: {
      
          /**
           * Defines the horizontal position on the screen
           * @type {'left' | 'middle' | 'right'}
           */
          position: 'right',
      
          /**
           * Defines the horizontal distance to the screen edge (in px)
           * @type {number}
           */
          distance: 15
      
        },
      
        vertical: {
      
          /**
           * Defines the vertical position on the screen
           * @type {'top' | 'bottom'}
           */
          position: 'top',
      
          /**
           * Defines the vertical distance to the screen edge (in px)
           * @type {number}
           */
          distance: 15
        }
      },
      behaviour: {
        autoHide: 2500
      }
    }),
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
