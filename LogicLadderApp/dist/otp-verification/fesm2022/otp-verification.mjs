import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';
import { of } from 'rxjs';
import * as i1 from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import * as i1$1 from '@angular/forms';
import { Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';

class OtpVerificationService {
    http;
    // private apiUrl = 'https://your-backend-api.com/otp'; 
    constructor(http) {
        this.http = http;
    }
    sendOtp(email) {
        // return this.http.post(`${this.apiUrl}/send`, { email });
        return of('Hello');
    }
    verifyOtp(email, otp) {
        alert('hit');
        const validOtp = '123456';
        if (otp === validOtp) {
            return of({ success: true, message: 'OTP verified successfully' });
        }
        else {
            return of({ success: false, message: 'Invalid OTP. Please try again.' });
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: OtpVerificationService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: OtpVerificationService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: OtpVerificationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.HttpClient }] });

class OtpVerificationComponent {
    fb;
    otpService;
    otpForm;
    resendAllowed = true;
    countdown = 60;
    constructor(fb, otpService) {
        this.fb = fb;
        this.otpService = otpService;
        this.otpForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            otp: ['', [Validators.required]]
        });
    }
    ngOnInit() {
    }
    sendOtp() {
        if (this.otpForm.valid) {
            const email = this.otpForm.get('email')?.value;
            this.resendAllowed = false;
            this.otpService.sendOtp(email).subscribe(response => {
                console.log('OTP sent');
                this.startResendCountdown();
            });
        }
    }
    verifyOtp() {
        if (this.otpForm.valid) {
            const email = this.otpForm.get('email')?.value;
            const otp = this.otpForm.get('otp')?.value;
            console.log(email, otp);
            this.otpService.verifyOtp(email, otp).subscribe(response => {
                if (response.success) {
                    console.log(response.message);
                }
                else {
                    console.log(response.message);
                }
            });
        }
    }
    startResendCountdown() {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: OtpVerificationComponent, deps: [{ token: i1$1.FormBuilder }, { token: OtpVerificationService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.3", type: OtpVerificationComponent, isStandalone: true, selector: "lib-otp-verification", providers: [OtpVerificationService], ngImport: i0, template: `
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

  `, isInline: true, styles: [".otp-form{max-width:400px;margin:0 auto;padding:20px;background-color:#f9f9f9;border-radius:8px;box-shadow:0 4px 12px #0000001a;font-family:Arial,sans-serif}.form-group{margin-bottom:16px}label{display:block;font-size:14px;color:#333;margin-bottom:8px}input[type=email],input[type=text]{width:100%;padding:10px;font-size:14px;border:1px solid #ccc;border-radius:4px;transition:border-color .2s ease}input[type=email]:focus,input[type=text]:focus{border-color:#007bff;outline:none}.btn{padding:10px 20px;font-size:14px;border-radius:4px;border:none;cursor:pointer;transition:background-color .3s ease}.btn-primary{background-color:#007bff;color:#fff;margin-right:10px}.btn-primary:hover{background-color:#0056b3}.btn-secondary{background-color:#6c757d;color:#fff}.btn-secondary:hover{background-color:#5a6268}.countdown{margin-top:15px;font-size:14px;color:#e63946}@media (max-width: 480px){.otp-form{padding:15px}.btn{width:100%;margin-bottom:10px}}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: HttpClientModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: OtpVerificationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-otp-verification', standalone: true, imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule], providers: [OtpVerificationService], template: `
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

  `, styles: [".otp-form{max-width:400px;margin:0 auto;padding:20px;background-color:#f9f9f9;border-radius:8px;box-shadow:0 4px 12px #0000001a;font-family:Arial,sans-serif}.form-group{margin-bottom:16px}label{display:block;font-size:14px;color:#333;margin-bottom:8px}input[type=email],input[type=text]{width:100%;padding:10px;font-size:14px;border:1px solid #ccc;border-radius:4px;transition:border-color .2s ease}input[type=email]:focus,input[type=text]:focus{border-color:#007bff;outline:none}.btn{padding:10px 20px;font-size:14px;border-radius:4px;border:none;cursor:pointer;transition:background-color .3s ease}.btn-primary{background-color:#007bff;color:#fff;margin-right:10px}.btn-primary:hover{background-color:#0056b3}.btn-secondary{background-color:#6c757d;color:#fff}.btn-secondary:hover{background-color:#5a6268}.countdown{margin-top:15px;font-size:14px;color:#e63946}@media (max-width: 480px){.otp-form{padding:15px}.btn{width:100%;margin-bottom:10px}}\n"] }]
        }], ctorParameters: () => [{ type: i1$1.FormBuilder }, { type: OtpVerificationService }] });

/*
 * Public API Surface of otp-verification
 */

/**
 * Generated bundle index. Do not edit.
 */

export { OtpVerificationComponent, OtpVerificationService };
//# sourceMappingURL=otp-verification.mjs.map
