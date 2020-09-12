import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdectItemComponent } from './prodect-item.component';

describe('ProdectItemComponent', () => {
  let component: ProdectItemComponent;
  let fixture: ComponentFixture<ProdectItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdectItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
