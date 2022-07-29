import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregrarComponent } from './agregrar.component';

describe('AgregrarComponent', () => {
  let component: AgregrarComponent;
  let fixture: ComponentFixture<AgregrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
