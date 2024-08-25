import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UNadvarComponent } from './u-nadvar.component';

describe('UNadvarComponent', () => {
  let component: UNadvarComponent;
  let fixture: ComponentFixture<UNadvarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UNadvarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UNadvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
