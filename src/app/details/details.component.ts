import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment,decrement } from '../state/counter/counter.actions';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  countervalue:number | null =0;
  id:any
  counter:number=0;
  data:any;

  private store=inject(Store)
  count$?:Observable<number>

  selectedCurrency: string = 'USD'; // Default currency
  exchangeRates: { [key: string]: number } = 
  {
    USD: 1, // Base currency (USD)
    EUR: 0.93, // Example exchange rate for EUR (1 USD = 0.93 EUR)
    GBP: 0.80, // Example exchange rate for GBP (1 USD = 0.80 GBP)
  };

  constructor(private route:ActivatedRoute){
    this.id=this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.count$=this.store.select('counter');
  }
  
  increment()
  {
    this.countervalue=Number(sessionStorage.getItem('counter'))

    this.store.dispatch(increment());
    this.count$?.subscribe(e=>{
      
      sessionStorage.setItem('counter',e.toString());
      
    });
    console.log(sessionStorage.getItem('counter'))
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
      }
  });
  Toast.fire({
      icon: "success",
      title: "Successfully Added to Cart"
  });
  }      
  
  decrement()
  {
    this.store.dispatch(decrement());
  }    
  updateCurrency(event: Event) 
  {
    const target = event.target as HTMLSelectElement;
    this.selectedCurrency = target.value;
  }
  convertPrice(price: number): number 
  {
    return price * this.exchangeRates[this.selectedCurrency];
  }

  ngOnInit()
  {
    fetch(`https://fakestoreapi.com/products/${this.id}`)
    .then(response=>response.json())
    .then(result => {
      this.data = result; 
     console.log(this.data.title)
    })
  }
}
