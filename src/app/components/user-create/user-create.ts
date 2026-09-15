import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  imports: [ReactiveFormsModule],
  templateUrl: './user-create.html',
  styleUrl: './user-create.css',
})
export class UserCreate {

userForm = new FormGroup({
  name: new FormControl(''),
  email: new FormControl(''),
  password: new FormControl(''),
  confirmPassword: new FormControl(''),
  role: new FormControl(''),
});

onSubmit() {
  console.log(this.userForm.value);

  
}

}
