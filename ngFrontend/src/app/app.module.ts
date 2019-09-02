import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/get-im/edit/edit.component';
import { GetImComponent } from './components/get-im/get-im.component';

import { FormsModule } from '@angular/forms';

// adding Routes Array with imports here
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'list', component: ListComponent },
  {
    path: 'updateSpecificIm',
    children: [
      { path: '', component: GetImComponent },
      { path: 'edit', component: EditComponent }
    ]
    },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '**', component: ListComponent }
];

// adding HTTP Client Module
import { HttpClientModule } from '@angular/common/http';
import {IssuesService} from './issues.service';

// adding PrimeNG Modules
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import {MessageService} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    GetImComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CardModule,
    TableModule,
    InputTextModule,
    FormsModule,
    ToastModule
  ],
  providers: [
    IssuesService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

