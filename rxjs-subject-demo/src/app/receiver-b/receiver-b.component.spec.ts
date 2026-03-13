import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverBComponent } from './receiver-b.component';

describe('ReceiverBComponent', () => {
  let component: ReceiverBComponent;
  let fixture: ComponentFixture<ReceiverBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiverBComponent]
    });
    fixture = TestBed.createComponent(ReceiverBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
