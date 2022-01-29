import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products'

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product: Product | undefined; //The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent.
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
