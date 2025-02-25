import { Component } from '@angular/core';

@Component({
  selector: 'app-electronics',
  standalone: false,
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent {

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
    fetch(`https://fakestoreapi.com/products/category/electronics`)
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
