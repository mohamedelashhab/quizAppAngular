import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestationComponent } from './questation.component';

describe('QuestationComponent', () => {
  let component: QuestationComponent;
  let fixture: ComponentFixture<QuestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
