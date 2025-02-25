import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false, // Keep this line
})
export class HomeComponent {
  selectedCurrency: string = 'USD';
  exchangeRates: { [key: string]: number } = {
    USD: 1,
    EUR: 0.93,
    GBP: 0.80,
  };

  //data: string[] = ['Electronics', 'Jewelery', "Men's Clothing", "Women's Clothing"];
  updateCurrency(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedCurrency = target.value;
  }

  convertPrice(price: number): number {
    return price * this.exchangeRates[this.selectedCurrency];
  }
  
  data:any
  ngOnInit()
  {
    fetch(`https://fakestoreapi.com/products/categories`)
    .then(response=>response.json())
    .then(result => {
      this.data = result; 
    })
  }
}
