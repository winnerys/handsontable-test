import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandsontableTestComponent } from './handsontable-test.component';

describe('HandsontableTestComponent', () => {
  let component: HandsontableTestComponent;
  let fixture: ComponentFixture<HandsontableTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandsontableTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandsontableTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
