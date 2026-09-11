import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

private router = inject(Router)

email = signal('');
password = signal('');
errorMessage = signal('');

onLogin(){
  if(this.email() && this.password()){
    this.router.navigate(['/dashboard'])
  }else{
    this.errorMessage.set('Please fill in both email and password!')
  }
}
}
