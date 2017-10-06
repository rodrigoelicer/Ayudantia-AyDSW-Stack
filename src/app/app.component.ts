import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service'
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  	title = 'app';
	results=[];

	constructor(private userService: UserService){}

	ngOnInit() {
	  this.results = [];
	  this.getUsers();
	}

	getUsers() {
	  this.userService.getUsers()
	  .map(res => res.json())
	  .subscribe(results => this.results = results);
	}
}
