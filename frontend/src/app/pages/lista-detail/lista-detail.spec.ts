import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDetail } from './lista-detail';

describe('ListaDetail', () => {
  let component: ListaDetail;
  let fixture: ComponentFixture<ListaDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
