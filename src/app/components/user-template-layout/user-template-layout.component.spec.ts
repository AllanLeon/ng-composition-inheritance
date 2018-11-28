import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTemplateLayoutComponent } from './user-template-layout.component';

describe('UserTemplateLayoutComponent', () => {
  let component: UserTemplateLayoutComponent;
  let fixture: ComponentFixture<UserTemplateLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTemplateLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTemplateLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
