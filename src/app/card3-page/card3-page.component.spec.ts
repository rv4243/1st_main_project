import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card3PageComponent } from './card3-page.component';

describe('Card3PageComponent', () => {
  let component: Card3PageComponent;
  let fixture: ComponentFixture<Card3PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card3PageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card3PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
