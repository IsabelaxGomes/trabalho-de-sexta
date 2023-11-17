import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretorsComponent } from './diretors.component';

describe('DiretorsComponent', () => {
  let component: DiretorsComponent;
  let fixture: ComponentFixture<DiretorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiretorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
