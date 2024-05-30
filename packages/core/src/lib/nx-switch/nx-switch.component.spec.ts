import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NxSwitchComponent } from './nx-switch.component';
import { FormsModule } from '@angular/forms';

describe('NxSwitchComponent', () => {
  let component: NxSwitchComponent;
  let fixture: ComponentFixture<NxSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [NxSwitchComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NxSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should write value', () => {
    const testValue = true;
    component.writeValue(testValue);
    expect(component.value).toBe(testValue);
  });

  it('should register onChange', () => {
    const testFn = (value: any) => {};
    component.registerOnChange(testFn);
    expect(component.onChange).toBe(testFn);
  });

  it('should register onTouched', () => {
    const testFn = () => {};
    component.registerOnTouched(testFn);
    expect(component.onTouched).toBe(testFn);
  });
});
