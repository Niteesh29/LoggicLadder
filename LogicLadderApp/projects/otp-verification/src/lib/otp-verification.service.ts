import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpVerificationService {
  // private apiUrl = 'https://your-backend-api.com/otp'; 

  constructor(private http: HttpClient) { }

  sendOtp(email: string): Observable<any> {
    // return this.http.post(`${this.apiUrl}/send`, { email });
    return of('Hello')
  }

  verifyOtp(email: string, otp: string): Observable<any> {
  alert('hit')
    const validOtp = '123456';

    if (otp === validOtp) {
      return of({ success: true, message: 'OTP verified successfully' });
    } else {
      return of({ success: false, message: 'Invalid OTP. Please try again.' });
    }
  }
}

