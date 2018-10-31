import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewProductComponent } from './product/new/new.component';
import { ListProductComponent } from './product/list/list.component';
import { EditProductComponent } from './product/edit/edit.component';
import { routing} from './app.routing';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailProductComponent } from './product/detail/detail.component';




@NgModule({
  declarations: [
    AppComponent,
    NewProductComponent,
    ListProductComponent,
    EditProductComponent,
    DetailProductComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
