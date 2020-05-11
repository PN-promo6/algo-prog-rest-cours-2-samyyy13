import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service/data.service'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: any;
  posts: any;

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.dataService.fetchUsers()
    .subscribe(
      res => {
        console.log(res);
        this.users = res;
      },
      error => {
      console.log(error)
    },
    )

    this.dataService.fetchUsersById("id")
    .subscribe(
      res => {
        this.users = res;
      },
      error => {
        console.log(error);
      }
    )

  }

}
