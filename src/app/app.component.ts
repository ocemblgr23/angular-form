import { Component, OnInit } from '@angular/core';

export enum Roles {
  Admin = "Admin",
  Super_User = "Super_User",
  Guest="Guest"
}

export enum Actions {
  Create=`${Roles.Admin},${Roles.Super_User}`
}

export interface IUserRole {
  CreateOrUpdate:boolean;
  ViewOrSearch:boolean;
  Upload:boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web-android';

  customerRole:Roles = Roles.Guest;
  action:IUserRole = {
    CreateOrUpdate:false,
    ViewOrSearch:false,
    Upload:false
  }

  createOrUpdateAction = false;

  constructor(){}

  ngOnInit(): void {
    // console.log(this.checkRole(this.customerRole));
    // this.createOrUpdateAction = this.checkRole(this.customerRole);
  this.checkRole(this.customerRole);

  }

  checkRole(role:Roles) {
    if(role === Roles.Admin || role === Roles.Super_User) {
      this.action.CreateOrUpdate = true;
      this.action.Upload = true;
      this.action.ViewOrSearch = true;
    }
    if(role === Roles.Guest) {
      this.action.ViewOrSearch = true;
    }
  }

  checkRole_2(role:Roles):boolean {
    let actionStatus = false;
    const checkAvilableRole = Object.values(Roles).includes(role);

    if(checkAvilableRole) {
       actionStatus = (role===Roles.Admin || role === Roles.Super_User) ? true : false;
    }
    return actionStatus;
  }
}
