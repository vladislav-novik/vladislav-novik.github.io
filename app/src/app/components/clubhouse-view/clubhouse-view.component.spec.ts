import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubhouseViewComponent } from './clubhouse-view.component';

describe('ClubhouseViewComponent', () => {
  let component: ClubhouseViewComponent;
  let fixture: ComponentFixture<ClubhouseViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubhouseViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubhouseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
