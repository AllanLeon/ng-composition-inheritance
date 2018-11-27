import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutInheritanceComponent } from './layout-inheritance.component';

describe('LayoutInheritanceComponent', () => {
  let component: LayoutInheritanceComponent;
  let fixture: ComponentFixture<LayoutInheritanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutInheritanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutInheritanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
