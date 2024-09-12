import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OtpVerificationService } from './otp-verification.service';

@Component({
  selector: 'lib-otp-verification',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule,HttpClientModule],
  providers: [OtpVerificationService],
  template: `
   <form [formGroup]="otpForm" class="otp-form">
  <div class="form-group">
    <label for="email">Email:</label>
    <input id="email" formControlName="email" type="email">
  </div>
  <div class="form-group">
    <label for="otp">OTP:</label>
    <input id="otp" formControlName="otp" type="text">
  </div>
  <button class="btn btn-primary"  [disabled]="!resendAllowed" (click)="sendOtp()">Send OTP</button>
  <button class="btn btn-secondary" (click)="verifyOtp()">Verify OTP</button>
  <div *ngIf="!resendAllowed" class="countdown">
    Resend allowed in: {{ countdown }} seconds
  </div>
</form>

  `,
  styles: `
  
    /* Container for the form */
.otp-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

/* General styling for form groups */
.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
}

/* Input fields */
input[type="email"],
input[type="text"] {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.2s ease;
}

input[type="email"]:focus,
input[type="text"]:focus {
  border-color: #007bff;
  outline: none;
}

/* Buttons */
.btn {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  margin-right: 10px;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  color: #fff;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

/* Countdown timer */
.countdown {
  margin-top: 15px;
  font-size: 14px;
  color: #e63946;
}

/* Responsive design */
@media (max-width: 480px) {
  .otp-form {
    padding: 15px;
  }

  .btn {
    width: 100%;
    margin-bottom: 10px;
  }
}

  
  `
})
export class OtpVerificationComponent implements OnInit {

  otpForm: FormGroup;
  resendAllowed: boolean = true;
  countdown: number = 60;

  constructor(private fb: FormBuilder, private otpService: OtpVerificationService) {
    this.otpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      otp: ['', [Validators.required]]
    });

   }

  ngOnInit(): void {
   
  }

  sendOtp(): void {
    if (this.otpForm.valid) {
      const email = this.otpForm.get('email')?.value;
      this.resendAllowed = false;
      this.otpService.sendOtp(email).subscribe(response => {
        console.log('OTP sent');
        this.startResendCountdown();

      });
    }
  }

  verifyOtp(): void {
    if (this.otpForm.valid) {
      const email = this.otpForm.get('email')?.value;
      const otp = this.otpForm.get('otp')?.value;
      console.log(email,otp)
      this.otpService.verifyOtp(email, otp).subscribe(response => {
        if (response.success) {
          console.log(response.message);
        } else {
          console.log(response.message);
        }
      });
    }
  }

  startResendCountdown(): void {
    this.resendAllowed = false;
    this.countdown = 60;
    const interval = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(interval);
        this.resendAllowed = true;
      }
    }, 1000);
  }

}
