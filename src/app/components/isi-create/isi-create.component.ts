import { Component, OnInit, NgZone } from '@angular/core'
import { Router } from '@angular/router'
import { ApiService } from './../../services/api.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-isi-create',
  templateUrl: './isi-create.component.html',
  styleUrls: ['./../../app.component.scss']
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

  Q1Q3Scale: any =[{label: 'None', value: 0}, {label: 'Mild', value: 1}, {label: 'Moderate', value: 2}, {label: 'Severe', value: 3}, {label: 'Very Severe', value: 4}]
  Q4Scale: any =[{label: 'Very Satisfied', value: 0}, {label: 'Satisfied', value: 1}, {label: 'Moderately Satisfied', value: 2}, {label: 'Dissatisfied', value: 3}, {label: 'Very Dissatisfied', value: 4}]
  Q5Scale: any =[{label: 'Not at all Noticable', value: 0}, {label: 'A Little', value: 1}, {label: 'Somewhat', value: 2}, {label: 'Much', value: 3}, {label: 'Very Much Noticeable', value: 4}]
  Q6Scale: any =[{label: 'Not at all Worried', value: 0}, {label: 'A Little', value: 1}, {label: 'Somewhat', value: 2}, {label: 'Much', value: 3}, {label: 'Very Much Worried', value: 4}]
  Q7Scale: any =[{label: 'Not at all Interfering', value: 0}, {label: 'A Little', value: 1}, {label: 'Somewhat', value: 2}, {label: 'Much', value: 3}, {label: 'Very Much Interfering', value: 4}]

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
      q1: [0, [Validators.required]],
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
