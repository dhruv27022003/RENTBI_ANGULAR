import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikepageComponent } from './bikepage.component';

describe('BikepageComponent', () => {
  let component: BikepageComponent;
  let fixture: ComponentFixture<BikepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
