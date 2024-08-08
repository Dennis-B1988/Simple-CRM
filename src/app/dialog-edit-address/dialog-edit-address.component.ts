import { Component } from '@angular/core';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [MatDialogModule, 
            MatInputModule, 
            MatFormFieldModule, 
            MatButtonModule,
            MatProgressBarModule,
            FormsModule],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {

  user: User = new User();
  userId!: string;
  loading = false;


  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, private firestore: Firestore) { }


  saveUser(): void {
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
