import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+\.+[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]{3}$')]],
    payementInformations: this.fb.group({
      cardType: ['', [Validators.required]],
      cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      date: [''],
      code: [''],
    })
  })
  cardTypes = ['Visa', 'Mastercard', 'American Express'];

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

  choiceNotMade!: boolean;

  validateChoice(value: string | null | undefined) {
    console.log(value);

    if (value === 'default') {
      this.choiceNotMade = false;
    } else {
      this.choiceNotMade = true;
    }
  }

  ngOnInit(): void {
  }

  //method 1:
  // form = new FormGroup({
  //   name: new FormControl('aaaa', [Validators.required, Validators.minLength(3)]),
  //   email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+\.+[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]{3}$')]),
  //   payementInformations : new FormGroup ({
  //     cardType: new FormControl('', [Validators.required]),
  //     cardNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
  //     date: new FormControl(''),
  //     code: new FormControl(''),
  //   })
  // });

 // UserModel = new User('', '', '', '', '', '');

  // onSubmit() {
  //   console.log(this.UserModel);
  // }
}
