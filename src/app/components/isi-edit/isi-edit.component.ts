import { Component, OnInit, NgZone } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ApiService } from './../../services/api.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Isi } from '../../models/isi'

@Component({
  selector: 'app-isi-edit',
  templateUrl: './isi-edit.component.html',
  styleUrls: ['./isi-edit.component.scss']
})
export class IsiEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  isiData: Isi[];

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
