import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { IProduct } from '../../model/product.model';
import { ProductService } from '../../services/product.service'
import { EventManagerService } from '../../services/event-manager.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListProductComponent implements OnInit {

  products: IProduct[];
  eventSubscriber: Subscription;


  constructor(
      private productService: ProductService,
      private eventManager: EventManagerService,
      private router: Router
  ) {}

  loadAll() {
      this.productService.query().subscribe(
          (res: HttpResponse<IProduct[]>) => {
              this.products = res.body;
          },
          (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  ngOnInit() {
      this.loadAll();
  }

  trackId(index: number, item: IProduct) {
      return item.id;
  }

  private onError(errorMessage: string) {
    alert (errorMessage);
  }

  deleteProduct(id: number) {
    this.productService.delete(id).subscribe(response => {
        console.log(response.status);
    });
    this.router.navigateByUrl('/product/list');
   }

}