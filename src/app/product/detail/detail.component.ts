import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../model/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailProductComponent implements OnInit {

  product: IProduct;

  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService) {}

  ngOnInit() {
      const routeParams = this.activatedRoute.snapshot.params;
      this.loadProductDetail(routeParams.id);
  }

  loadProductDetail(id: number) {
    this.productService.find(id).subscribe(
        (res: HttpResponse<IProduct>) => {
            this.product = res.body;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
    );
}

  previousState() {
      window.history.back();
  }

  private onError(errorMessage: string) {
    alert (errorMessage);
  }

}
