import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfinitiScrollPage } from './infiniti-scroll.page';

describe('InfinitiScrollPage', () => {
  let component: InfinitiScrollPage;
  let fixture: ComponentFixture<InfinitiScrollPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfinitiScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
