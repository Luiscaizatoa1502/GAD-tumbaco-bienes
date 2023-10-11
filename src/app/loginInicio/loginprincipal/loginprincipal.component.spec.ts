import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginprincipalComponent } from './loginprincipal.component';

describe('LoginprincipalComponent', () => {
  let component: LoginprincipalComponent;
  let fixture: ComponentFixture<LoginprincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginprincipalComponent]
    });
    fixture = TestBed.createComponent(LoginprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
