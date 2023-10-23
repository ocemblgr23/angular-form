import { Injectable } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }



  userNameValidator(userControl:FormControl) {
    console.log("called");
   console.log( this.validateUsername(userControl.value));

    return new Promise((resolve)=>{
      if (this.validateUsername(userControl.value)) {
        resolve(userControl.setErrors({username_not_valid:true}));

      } else {
        resolve(userControl.setErrors(null));
      }
    })


    // return new Promise(reslove=>{
    //   if(!this.validateUsername(userControl.value)) {
    //     reslove(null);
    //   }
    //   reslove({usernameError:true});
    // })
  }

  validateUsername(username:string) {
    const UserList = ['Ankit','Admin','User','Super_User'];
    return (UserList.indexOf(username)> -1);
  }
}
