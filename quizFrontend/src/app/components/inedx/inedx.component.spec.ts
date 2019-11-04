import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InedxComponent } from './inedx.component';

describe('InedxComponent', () => {
  let component: InedxComponent;
  let fixture: ComponentFixture<InedxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InedxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InedxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
