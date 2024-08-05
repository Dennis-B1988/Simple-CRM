import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { collection, collectionData, doc, Firestore } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.class';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, DatePipe],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {

  userId = '';
  user: User = new User();
  users$: Observable<User[]>;

  constructor(private route: ActivatedRoute, private firestore: Firestore) {
    const usersCollection = collection(this.firestore, 'users');
    this.users$ = collectionData(usersCollection, { idField: 'id' }) as Observable<User[]>;
    console.log('User', this.users$);
  }


  ngOnInit(): void {
    this.users$.subscribe((user: any) => {
      this.user = user.find((user: any) => user.id === this.route.snapshot.paramMap.get('id'));
      console.log(user);
    });
  }
}
