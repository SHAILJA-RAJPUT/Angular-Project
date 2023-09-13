import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTodolistComponent } from './about-todolist.component';

describe('AboutTodolistComponent', () => {
  let component: AboutTodolistComponent;
  let fixture: ComponentFixture<AboutTodolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutTodolistComponent]
    });
    fixture = TestBed.createComponent(AboutTodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
