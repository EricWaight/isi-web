import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUri = 'http://localhost:3030'
  headers = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(private http: HttpClient) { }

  // Create index
  createIsi(data): Observable<any> {
    const url = `${this.baseUri}/indexes`
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Update index
  updateIsi(id, data): Observable<any> {
    const url = `${this.baseUri}/indexes/${id}`
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete index
  deleteIsi(id): Observable<any> {
    const url = `${this.baseUri}/indexes/${id}`
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  getIsis() {
    const url = `${this.baseUri}/indexes`
    return this.http.get(url)
  }

  // Get specific isi
  getIsi(id): Observable<any> {
    const url = `${this.baseUri}/indexes/${id}`
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

   // Error handling
   errorMgmt(error: HttpErrorResponse) {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
    }
    console.log(errorMessage)
    return throwError(errorMessage)
  }
}
