import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCard } from './lista-card';

describe('ListaCard', () => {
  let component: ListaCard;
  let fixture: ComponentFixture<ListaCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
