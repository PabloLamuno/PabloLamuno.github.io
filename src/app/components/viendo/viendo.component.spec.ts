import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViendoComponent } from './viendo.component';

describe('ViendoComponent', () => {
  let component: ViendoComponent;
  let fixture: ComponentFixture<ViendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViendoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
