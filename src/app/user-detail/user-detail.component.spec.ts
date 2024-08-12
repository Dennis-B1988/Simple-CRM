import { ComponentFixture, TestBed } from '@angular/core/testing';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailComponent, RouterModule.forRoot([])],
      providers: [provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({
        projectId: 'simple-crm-7af4d',
        appId: '1:548587006916:web:2ea5ca415a92f066629291',
        storageBucket: 'simple-crm-7af4d.appspot.com',
        apiKey: 'AIzaSyCOrCUgKFqRmqK39IV8CQE21OK9VmWKDQY',
        authDomain: 'simple-crm-7af4d.firebaseapp.com',
        messagingSenderId: '548587006916',
      }))]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
