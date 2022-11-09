import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovecounterComponent } from './removecounter.component';

describe('RemovecounterComponent', () => {
  let component: RemovecounterComponent;
  let fixture: ComponentFixture<RemovecounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovecounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovecounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
