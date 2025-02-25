import { Component } from '@angular/core';

@Component({
  selector: 'app-mens-clothing',
  standalone: false,
  templateUrl: './mens-clothing.component.html',
  styleUrl: './mens-clothing.component.css'
})
export class MensClothingComponent {

  str:string="ABCD";
  
  data: any; 
  selectedCurrency: string = 'USD'; 
  exchangeRates: { [key: string]: number } = {
    USD: 1, 
    EUR: 0.93, 
    GBP: 0.80, 
  };
  
  ngOnInit()
  {
    fetch(`https://fakestoreapi.com/products/category/men's clothing`)
    .then(response=>response.json())
    .then(result => {
      this.data = result; 
     
    })
  }

  updateCurrency(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedCurrency = target.value;
  }

  convertPrice(price: number): number {
    return price * this.exchangeRates[this.selectedCurrency];
  }
}
