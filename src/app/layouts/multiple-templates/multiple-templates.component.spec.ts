import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleTemplatesComponent } from './multiple-templates.component';

describe('MultipleTemplatesComponent', () => {
  let component: MultipleTemplatesComponent;
  let fixture: ComponentFixture<MultipleTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
