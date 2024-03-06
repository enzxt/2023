import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  @Input() name: string = "";
  quantity = 0;
  products: string[] = [];
  selectedProduct = "Star Wars";

  constructor() { }

  ngOnInit()
  {
    this.quantity = 0;
    this.products = ["Star Wars", "Bruh", "lol"];
    this.selectedProduct = "Bruh";
  }

  onSubmit()
  {
    console.log("onsubmit")
  }

  newInfo()
  {
    this.quantity = 0;
    this.products = ["Star Wars", "Bruh", "lol"];
    this.selectedProduct = "Bruh";
    console.log("new info")
  }
}
