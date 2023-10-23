import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  value = '';

  loginForm: FormGroup;
  messages!: Message[];

  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private common:CommonService
    ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required],this.nameNotAllow],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submitForm() {
    const { username, password } = this.loginForm.value;
    console.log(this.loginForm.controls['name']);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: `Welcome  ${username}`,
    });
  }

  resetUserLogin() {
    this.loginForm.reset();
  }

  nameNotAllow(control:AbstractControl) {
    return new Promise((resolve)=>{
      setTimeout(()=>{
        if(control.value ==='test') {
          resolve({notAllow: true});
        } else {
          resolve(null)
        }
      },1000)
    })
  }

}


