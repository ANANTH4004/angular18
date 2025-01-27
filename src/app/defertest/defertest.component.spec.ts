import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefertestComponent } from './defertest.component';

describe('DefertestComponent', () => {
  let component: DefertestComponent;
  let fixture: ComponentFixture<DefertestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefertestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefertestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
