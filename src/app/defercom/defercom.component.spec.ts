import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefercomComponent } from './defercom.component';

describe('DefercomComponent', () => {
  let component: DefercomComponent;
  let fixture: ComponentFixture<DefercomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefercomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefercomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
