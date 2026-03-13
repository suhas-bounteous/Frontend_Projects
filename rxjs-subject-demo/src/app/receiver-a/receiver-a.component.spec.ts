import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverAComponent } from './receiver-a.component';

describe('ReceiverAComponent', () => {
  let component: ReceiverAComponent;
  let fixture: ComponentFixture<ReceiverAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiverAComponent]
    });
    fixture = TestBed.createComponent(ReceiverAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
