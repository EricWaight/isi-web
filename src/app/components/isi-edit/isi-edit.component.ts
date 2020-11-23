import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ApiService } from './../../services/api.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-isi-edit',
  templateUrl: './isi-edit.component.html',
  styleUrls: ['./../../app.component.scss']
})
export class IsiEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  Q1Q3Scale: any =[{label: 'None', value: 0}, {label: 'Mild', value: 1}, {label: 'Moderate', value: 2}, {label: 'Severe', value: 3}, {label: 'Very Severe', value: 4}]
  Q4Scale: any =[{label: 'Very Satisfied', value: 0}, {label: 'Satisfied', value: 1}, {label: 'Moderately Satisfied', value: 2}, {label: 'Dissatisfied', value: 3}, {label: 'Very Dissatisfied', value: 4}]
  Q5Scale: any =[{label: 'Not at all Noticable', value: 0}, {label: 'A Little', value: 1}, {label: 'Somewhat', value: 2}, {label: 'Much', value: 3}, {label: 'Very Much Noticeable', value: 4}]
  Q6Scale: any =[{label: 'Not at all Worried', value: 0}, {label: 'A Little', value: 1}, {label: 'Somewhat', value: 2}, {label: 'Much', value: 3}, {label: 'Very Much Worried', value: 4}]
  Q7Scale: any =[{label: 'Not at all Interfering', value: 0}, {label: 'A Little', value: 1}, {label: 'Somewhat', value: 2}, {label: 'Much', value: 3}, {label: 'Very Much Interfering', value: 4}]

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateIsi()
    const id = this.actRoute.snapshot.paramMap.get('id')
    this.getIsi(id)
    this.editForm = this.fb.group({
      q1: ['', [Validators.required]],
      q2: ['', [Validators.required]],
      q3: ['', [Validators.required]],
      q4: ['', [Validators.required]],
      q5: ['', [Validators.required]],
      q6: ['', [Validators.required]],
      q7: ['', [Validators.required]],
    })
  }

    // Getter to access form control
    get modifyForm() {
      return this.editForm.controls
    }

    getIsi(id) {
      this.apiService.getIsi(id).subscribe(data => {
        this.editForm.setValue({
          q1: data['q1'],
          q2: data['q2'],
          q3: data['q3'],
          q4: data['q4'],
          q5: data['q5'],
          q6: data['q6'],
          q7: data['q7'],
        })
      })
    }

    updateIsi() {
      this.editForm = this.fb.group({
        q1: ['', [Validators.required]],
        q2: ['', [Validators.required]],
        q3: ['', [Validators.required]],
        q4: ['', [Validators.required]],
        q5: ['', [Validators.required]],
        q6: ['', [Validators.required]],
        q7: ['', [Validators.required]],
      })
    }

    get total() : number {
      return this.editForm.value.q1 + this.editForm.value.q2 + this.editForm.value.q3 + this.editForm.value.q4 + this.editForm.value.q5 + this.editForm.value.q6 + this.editForm.value.q7
    }

    onSubmit() : void {
      this.submitted = true
      if (!this.editForm.valid) {
        console.log('There is a problem')
        return
      } else {
        if (window.confirm('Are you sure?')) {
          const id = this.actRoute.snapshot.paramMap.get('id')
          this.apiService.updateIsi(id, {...this.editForm.value, total: this.total})
            .subscribe(res => {
              this.router.navigateByUrl('/index-list')
              console.log('Index updated successfully!')
            }, (error) => {
              console.log(error)
            })
        }
      }
    }
}
