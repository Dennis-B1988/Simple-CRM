import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../models/user.class';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, 
            MatButtonModule, 
            MatTooltipModule, 
            MatDialogModule, 
            MatCardModule, 
            DatePipe, 
            RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  above: TooltipPosition = 'above';

  users$: Observable<User[]>;
  allUsers: User[] = [];


  constructor(public dialog: MatDialog, private firestore: Firestore) {
    const usersCollection = collection(this.firestore, 'users');
    this.users$ = collectionData(usersCollection, { idField: 'id' }) as Observable<User[]>;
  }


  ngOnInit(): void{
    this.users$.subscribe((changes: any) => {
      console.log(changes);
      this.allUsers = changes;
    });
  }


  openDialog(): void {
    this.dialog.open(DialogAddUserComponent, {
      autoFocus: false,
    });
  }

}
