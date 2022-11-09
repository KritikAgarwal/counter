import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcounterComponent } from './addcounter.component';

describe('AddcounterComponent', () => {
  let component: AddcounterComponent;
  let fixture: ComponentFixture<AddcounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
