import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSizeEditoComponent } from './font-size-edito.component';

describe('FontSizeEditoComponent', () => {
  let component: FontSizeEditoComponent;
  let fixture: ComponentFixture<FontSizeEditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontSizeEditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontSizeEditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
