import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainClassesComponent } from './main-classes.component';

describe('MainClassesComponent', () => {
  let component: MainClassesComponent;
  let fixture: ComponentFixture<MainClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainClassesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
