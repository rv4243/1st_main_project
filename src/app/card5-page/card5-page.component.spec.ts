import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card5PageComponent } from './card5-page.component';

describe('Card5PageComponent', () => {
  let component: Card5PageComponent;
  let fixture: ComponentFixture<Card5PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card5PageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card5PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
