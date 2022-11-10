import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  passwordForm: FormGroup;
  title = 'LoginForm';
  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
    password: ['', Validators.required],
})}

ngOnInit() {

  }
}
