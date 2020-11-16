import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-isi-list',
  templateUrl: './isi-list.component.html',
  styleUrls: ['./isi-list.component.scss']
})
export class IsiListComponent implements OnInit {

  Isi:any = [];

  constructor(private apiService: ApiService) {
    this.readIsi()
  }

  ngOnInit(): void {}

  readIsi(){
    this.apiService.getIsis().subscribe((data) => {
     this.Isi = data
    })
  }

  removeIsi(isi, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteIsi(isi._id).subscribe((data) => {
          this.Isi.splice(index, 1)
        }
      )
    }
  }
}
