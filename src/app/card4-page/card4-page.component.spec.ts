import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card4PageComponent } from './card4-page.component';

describe('Card4PageComponent', () => {
  let component: Card4PageComponent;
  let fixture: ComponentFixture<Card4PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card4PageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card4PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
