import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PasswordValidator } from './password.validator';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  sexualOrientationList = [
    {
      value: 'homo', name: 'Homosexual'
    },
    {
      value: 'hetero', name: 'Heterosexual'
    },
    {
      value: 'otro', name: 'Otro'
    }
  ];

  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private passwordValidator: PasswordValidator) { }

  ngOnInit() {
    this.createForm();
    this.registerForm.valueChanges.subscribe(x => {
      console.log(this.registerForm.controls.conditions);
    });
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      gender: [''],
      orientation: [''],
      relationship: [''],
      conditions: ['', Validators.required]
    }, { validators: PasswordValidator.matchPassword });
  }

}
