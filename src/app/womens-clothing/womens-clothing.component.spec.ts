import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensClothingComponent } from './womens-clothing.component';

describe('WomensClothingComponent', () => {
  let component: WomensClothingComponent;
  let fixture: ComponentFixture<WomensClothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WomensClothingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomensClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
