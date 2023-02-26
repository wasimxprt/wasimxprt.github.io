import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptordemoComponent } from './interceptordemo.component';

describe('InterceptordemoComponent', () => {
  let component: InterceptordemoComponent;
  let fixture: ComponentFixture<InterceptordemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterceptordemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterceptordemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
