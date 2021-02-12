import {TestBed, waitForAsync} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';

describe('AppComponent: async-await', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should show initialized component', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const element = compiled.querySelector('#init');
    expect(element).toBeTruthy();
    expect(element.textContent).toContain('initialized');
  });

    it('clicking button will call service', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const button = compiled.querySelector('#button');
    expect(button).toBeTruthy();
    button.click();
    await fixture.whenStable();
    fixture.detectChanges();
    const element = compiled.querySelector('#executed');
    expect(element.textContent).toContain('executed');
  });
});
