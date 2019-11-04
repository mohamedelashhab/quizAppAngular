import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraciceComponent } from './pracice.component';

describe('PraciceComponent', () => {
  let component: PraciceComponent;
  let fixture: ComponentFixture<PraciceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraciceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
