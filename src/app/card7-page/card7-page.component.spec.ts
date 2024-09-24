import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card7PageComponent } from './card7-page.component';

describe('Card7PageComponent', () => {
  let component: Card7PageComponent;
  let fixture: ComponentFixture<Card7PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card7PageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card7PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
