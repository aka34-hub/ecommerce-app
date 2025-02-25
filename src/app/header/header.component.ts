import { Component,Input,inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
 private store=inject(Store);
 count$?:Observable<number>
 countervalue:number | null =0;
 constructor()
 {
  this.count$=this.store.select('counter');
  this.countervalue=Number(sessionStorage.getItem('counter'))||0;

 }

 

@Input() setcounter:string="";
 count:number=0;
 email="sama@example.com";
 phone="2132132456465";
 name="Online Appliance Store"

 ngOnChange()
  {
    this.countervalue=Number(sessionStorage.getItem('counter'))||0;
  }

 ngOnInit()
 {
  this.countervalue=Number(sessionStorage.getItem('counter'))||0;
  console.log("ypppp")
 }
}
