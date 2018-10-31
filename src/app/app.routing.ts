import { RouterModule, Routes } from '@angular/router';
import {NewProductComponent} from "./product/new/new.component";
import {ListProductComponent} from "./product/list/list.component";
import {EditProductComponent} from "./product/edit/edit.component";
import {DetailProductComponent} from "./product/detail/detail.component";

const routes: Routes = [
  { path: 'product/new', component: NewProductComponent },
  { path: 'product/list', component: ListProductComponent },
  { path: 'product/edit', component: EditProductComponent },
  { path: 'product/:id/view',component: DetailProductComponent},
  { path: 'product/:id/edit',component: NewProductComponent},
  {path : '', component : ListProductComponent}
];

export const routing = RouterModule.forRoot(routes);