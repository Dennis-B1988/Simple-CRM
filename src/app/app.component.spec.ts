import { TestBed } from '@angular/core/testing';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, BrowserAnimationsModule, RouterModule.forRoot([])],
      providers: [provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({
        projectId: 'simple-crm-7af4d',
        appId: '1:548587006916:web:2ea5ca415a92f066629291',
        storageBucket: 'simple-crm-7af4d.appspot.com',
        apiKey: 'AIzaSyCOrCUgKFqRmqK39IV8CQE21OK9VmWKDQY',
        authDomain: 'simple-crm-7af4d.firebaseapp.com',
        messagingSenderId: '548587006916',
      }))
    ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'simple-crm' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('simple-crm');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const span = compiled.querySelector('#appTitle');
    expect(span?.textContent).toContain('Simple CRM');
  });
});
