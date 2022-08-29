import { ComponentFixture, TestBed } from '@angular/core/testing';

import { variantproductComponent } from './variant-product.component';

describe('Test2Component', () => {
  let component: variantproductComponent;
  let fixture: ComponentFixture<variantproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ variantproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(variantproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
