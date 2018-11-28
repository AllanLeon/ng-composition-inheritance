import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBaseItemComponent } from './user-base-item.component';

describe('UserBaseItemComponent', () => {
  let component: UserBaseItemComponent;
  let fixture: ComponentFixture<UserBaseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBaseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBaseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
