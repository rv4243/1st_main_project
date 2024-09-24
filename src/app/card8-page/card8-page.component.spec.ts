import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card8PageComponent } from './card8-page.component';

describe('Card8PageComponent', () => {
  let component: Card8PageComponent;
  let fixture: ComponentFixture<Card8PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card8PageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card8PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
