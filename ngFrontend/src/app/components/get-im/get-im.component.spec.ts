import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetImComponent } from './get-im.component';

describe('GetImComponent', () => {
  let component: GetImComponent;
  let fixture: ComponentFixture<GetImComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetImComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetImComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
