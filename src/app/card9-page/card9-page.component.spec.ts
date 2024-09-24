import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card9PageComponent } from './card9-page.component';

describe('Card9PageComponent', () => {
  let component: Card9PageComponent;
  let fixture: ComponentFixture<Card9PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card9PageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card9PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
