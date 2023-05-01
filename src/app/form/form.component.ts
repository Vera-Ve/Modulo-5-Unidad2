import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from'@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
    country: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    adress: new FormControl('', [Validators.required])

  });
 onSubmit() {
  console.log(this.profileForm.value);
 }
}
