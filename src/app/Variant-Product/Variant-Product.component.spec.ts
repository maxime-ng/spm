import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantProductComponent } from './Variant-Product.component';

describe('Test2Component', () => {
  let component: VariantProductComponent;
  let fixture: ComponentFixture<VariantProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariantProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariantProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
