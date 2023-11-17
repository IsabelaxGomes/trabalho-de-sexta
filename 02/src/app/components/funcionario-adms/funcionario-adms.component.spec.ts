import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioAdmsComponent } from './funcionario-adms.component';

describe('FuncionarioAdmsComponent', () => {
  let component: FuncionarioAdmsComponent;
  let fixture: ComponentFixture<FuncionarioAdmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionarioAdmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuncionarioAdmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
