import { Component, OnInit, NgZone } from '@angular/core'
import { Router } from '@angular/router'
import { ApiService } from './../../services/api.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-isi-create',
  templateUrl: './isi-create.component.html',
  styleUrls: ['./isi-create.component.scss']
})
export class IsiCreateComponent implements OnInit {

  isiForm: FormGroup;
  submitted = false;
  // scale = [0, 1, 3, 4, 5]

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm()
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void { }

  mainForm() {
    this.isiForm = this.fb.group({
      q1: ['', [Validators.required]],
      q2: ['', [Validators.required]],
      q3: ['', [Validators.required]],
      q4: ['', [Validators.required]],
      q5: ['', [Validators.required]],
      q6: ['', [Validators.required]],
      q7: ['', [Validators.required]],
      total: ['', [Validators.required]]
    })
  }

  // Getter to access form control
  get myForm() {
    return this.isiForm.controls
  }

  onSubmit() {
    console.warn(this.isiForm.value)
    this.submitted = true
    if (!this.isiForm.valid) {
      console.log('There is a problem')
      return false
    } else {
      this.apiService.createIsi(this.isiForm.value).subscribe(
        (res) => {
          console.log('Index successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/index-list'))
        }, (error) => {
          console.log(error)
        })
    }
  }
}
