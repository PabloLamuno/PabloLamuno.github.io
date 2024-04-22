import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMasTardeComponent } from './ver-mas-tarde.component';

describe('VerMasTardeComponent', () => {
  let component: VerMasTardeComponent;
  let fixture: ComponentFixture<VerMasTardeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerMasTardeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerMasTardeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
