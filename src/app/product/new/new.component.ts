import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Router} from "@angular/router";
import { IProduct, Product } from '../../model/product.model';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private router: Router, private productService: ProductService,
    private activatedRoute: ActivatedRoute) { }

  product: IProduct;
  isSaving: boolean;

  ngOnInit() {
    this.isSaving = false;
    const routeParams = this.activatedRoute.snapshot.params;
    if (routeParams.id == undefined){
      this.product = new Product();
    }
    else
      this.loadProductDetail(routeParams.id);
  }

  save() {
    this.isSaving = true;
    
    if (this.product.id !== undefined) { 
      console.log(this.product)
      //this.subscribeToSaveResponse(this.productService.update(this.product));
      this.productService.update(this.product)
      .subscribe(
        data => {
          this.previousState();
        },
        error => {
          alert(error);
        });
      }
    else {
      this.subscribeToSaveResponse(this.productService.create(this.product));
    }
  }

  loadProductDetail(id: number) {
    this.productService.find(id).subscribe(
        (res: HttpResponse<IProduct>) => {
            this.product = res.body;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
  )}

  private onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError() {
      this.isSaving = false;
  }

  previousState() {
    window.history.back();
  }

  private onError(errorMessage: string) {
    alert (errorMessage);
  }

  private subscribeToSaveResponse(result: Observable<HttpResponse<IProduct>>) {
    result.subscribe((res: HttpResponse<IProduct>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
}

}
