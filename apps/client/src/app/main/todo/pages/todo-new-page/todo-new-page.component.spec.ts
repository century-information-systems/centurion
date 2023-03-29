import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoNewPageComponent } from './todo-new-page.component';

describe('TodoNewPageComponent', () => {
  let component: TodoNewPageComponent;
  let fixture: ComponentFixture<TodoNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoNewPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
