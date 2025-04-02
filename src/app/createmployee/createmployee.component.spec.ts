import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemployeeComponent } from './createmployee.component';

describe('CreatemployeeComponent', () => {
  let component: CreatemployeeComponent;
  let fixture: ComponentFixture<CreatemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
