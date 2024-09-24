import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card1PageComponent } from './card1-page.component';

describe('Card1PageComponent', () => {
  let component: Card1PageComponent;
  let fixture: ComponentFixture<Card1PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card1PageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
