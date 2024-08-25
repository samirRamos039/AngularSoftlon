import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LNadvarComponent } from './l-nadvar.component';

describe('LNadvarComponent', () => {
  let component: LNadvarComponent;
  let fixture: ComponentFixture<LNadvarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LNadvarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LNadvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
