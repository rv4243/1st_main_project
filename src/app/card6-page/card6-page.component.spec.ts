import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card6PageComponent } from './card6-page.component';

describe('Card6PageComponent', () => {
  let component: Card6PageComponent;
  let fixture: ComponentFixture<Card6PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card6PageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card6PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
