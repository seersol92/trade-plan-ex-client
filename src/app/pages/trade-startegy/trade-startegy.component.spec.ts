import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeStartegyComponent } from './trade-startegy.component';

describe('TradeStartegyComponent', () => {
  let component: TradeStartegyComponent;
  let fixture: ComponentFixture<TradeStartegyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeStartegyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeStartegyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
