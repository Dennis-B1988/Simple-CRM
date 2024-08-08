import { Component } from '@angular/core';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';
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
  selector: 'app-dialog-edit-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatDialogModule, 
            MatInputModule, 
            MatFormFieldModule, 
            MatButtonModule,
            MatProgressBarModule,
            FormsModule,
            MatDatepickerModule,
            MatNativeDateModule,],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {

  user: User = new User();
  userId!: string;
  birthDate!: Date;
  loading = false;


  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private firestore: Firestore) { }


  saveUser(): void {
    this.user.birthDate = this.birthDate.getTime();
    this.loading = true;

    const userDocRef = doc(this.firestore, `users/${this.userId}`);
    const updatedUserData = this.user.toJSON();
    updateDoc(userDocRef, updatedUserData).then((result: any) => {
      this.loading = false;
      console.log(result);
      this.dialogRef.close();
    }).catch(error => {
      this.loading = false;
      console.error(error);
    });
  }
}
