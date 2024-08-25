import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuPlantillaComponent } from './formu-plantilla.component';

describe('FormuPlantillaComponent', () => {
  let component: FormuPlantillaComponent;
  let fixture: ComponentFixture<FormuPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormuPlantillaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormuPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
