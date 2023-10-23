import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCompComponent } from './card-comp.component';

describe('CardCompComponent', () => {
  let component: CardCompComponent;
  let fixture: ComponentFixture<CardCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCompComponent]
    });
    fixture = TestBed.createComponent(CardCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
