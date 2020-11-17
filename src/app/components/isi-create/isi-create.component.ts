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

  isiForm: FormGroup
  submitted = false
  q1: number
  q2: number
  q3: number
  q4: number
  q5: number
  q6: number
  q7: number


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm()
    // Subscribe to form data changes
    this.isiForm.valueChanges.subscribe(data => console.log('Form Data:', data))
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void { }

  mainForm() {
    this.isiForm = this.fb.group({
      q1: [0, [Validators.required, Validators.minLength(0), Validators.maxLength(4)]],
      q2: [0, [Validators.required]],
      q3: [0, [Validators.required]],
      q4: [0, [Validators.required]],
      q5: [0, [Validators.required]],
      q6: [0, [Validators.required]],
      q7: [0, [Validators.required]],
    })
  }

  // Getter to access form control
  get createForm() {
    return this.isiForm.controls
  }

  get total() : number {
    return this.isiForm.value.q1 + this.isiForm.value.q2 + this.isiForm.value.q3 + this.isiForm.value.q4 + this.isiForm.value.q5 + this.isiForm.value.q6 + this.isiForm.value.q7
  }

  onSubmit() : void {
    console.warn(this.isiForm.value)
    this.submitted = true
    if (!this.isiForm.valid) {
      console.log('There is a problem')
      return
    } else {
      this.apiService.createIsi({...this.isiForm.value, total: this.total}).subscribe(
        (res) => {
          console.log('Index successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/index-list'))
        }, (error) => {
          console.log(error)
        })
    }
  }
}
