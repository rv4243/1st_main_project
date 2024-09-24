import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card2PageComponent } from './card2-page.component';

describe('Card2PageComponent', () => {
  let component: Card2PageComponent;
  let fixture: ComponentFixture<Card2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card2PageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
