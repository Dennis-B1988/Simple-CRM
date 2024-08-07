import { Component, inject } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../models/user.class';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatDialogModule, 
            MatInputModule, 
            MatFormFieldModule, 
            MatDatepickerModule, 
            MatNativeDateModule, 
            MatButtonModule,
            MatProgressBarModule,
            FormsModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

  user = new User();
  birthDate!: Date;
  loading = false;

  firestore: Firestore = inject(Firestore);


  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) { }


  saveUser(): void {
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
    this.loading = true;

    const usersCollection = collection(this.firestore, 'users');
    addDoc(usersCollection, this.user.toJSON()).then((result: any) => {
      this.loading = false;
      console.log(result);
      this.dialogRef.close();
    })
  }
}
