import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBaseLayoutComponent } from './user-base-layout.component';

describe('UserBaseLayoutComponent', () => {
  let component: UserBaseLayoutComponent;
  let fixture: ComponentFixture<UserBaseLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBaseLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBaseLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
