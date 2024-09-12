import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { OtpVerificationService } from './otp-verification.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OtpVerificationService } from './otp-verification.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "./otp-verification.service";
import * as i3 from "@angular/common";
export class OtpVerificationComponent {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: OtpVerificationComponent, deps: [{ token: i1.FormBuilder }, { token: i2.OtpVerificationService }], target: i0.ɵɵFactoryTarget.Component });
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

  `, isInline: true, styles: [".otp-form{max-width:400px;margin:0 auto;padding:20px;background-color:#f9f9f9;border-radius:8px;box-shadow:0 4px 12px #0000001a;font-family:Arial,sans-serif}.form-group{margin-bottom:16px}label{display:block;font-size:14px;color:#333;margin-bottom:8px}input[type=email],input[type=text]{width:100%;padding:10px;font-size:14px;border:1px solid #ccc;border-radius:4px;transition:border-color .2s ease}input[type=email]:focus,input[type=text]:focus{border-color:#007bff;outline:none}.btn{padding:10px 20px;font-size:14px;border-radius:4px;border:none;cursor:pointer;transition:background-color .3s ease}.btn-primary{background-color:#007bff;color:#fff;margin-right:10px}.btn-primary:hover{background-color:#0056b3}.btn-secondary{background-color:#6c757d;color:#fff}.btn-secondary:hover{background-color:#5a6268}.countdown{margin-top:15px;font-size:14px;color:#e63946}@media (max-width: 480px){.otp-form{padding:15px}.btn{width:100%;margin-bottom:10px}}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: HttpClientModule }] });
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
        }], ctorParameters: () => [{ type: i1.FormBuilder }, { type: i2.OtpVerificationService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RwLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9vdHAtdmVyaWZpY2F0aW9uL3NyYy9saWIvb3RwLXZlcmlmaWNhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQTBCLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0Ryx1RUFBdUU7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7OztBQXNIcEUsTUFBTSxPQUFPLHdCQUF3QjtJQU1mO0lBQXlCO0lBSjdDLE9BQU8sQ0FBWTtJQUNuQixhQUFhLEdBQVksSUFBSSxDQUFDO0lBQzlCLFNBQVMsR0FBVyxFQUFFLENBQUM7SUFFdkIsWUFBb0IsRUFBZSxFQUFVLFVBQWtDO1FBQTNELE9BQUUsR0FBRixFQUFFLENBQWE7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUF3QjtRQUM3RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzNCLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BELEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNqQyxDQUFDLENBQUM7SUFFSixDQUFDO0lBRUYsUUFBUTtJQUVSLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBRTlCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUMvQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUE7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDekQsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO3FCQUFNLENBQUM7b0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDeEIsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUM1QixDQUFDO1FBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQzt1R0F2RFUsd0JBQXdCOzJGQUF4Qix3QkFBd0IsbUVBaEh4QixDQUFDLHNCQUFzQixDQUFDLDBCQUN6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQlQsZ2dDQW5CUyxXQUFXLDJwQkFBRSxtQkFBbUIsK1VBQUUsWUFBWSxrSUFBQyxnQkFBZ0I7OzJGQWlIOUQsd0JBQXdCO2tCQXBIcEMsU0FBUzsrQkFDRSxzQkFBc0IsY0FDcEIsSUFBSSxXQUNQLENBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBQyxnQkFBZ0IsQ0FBQyxhQUMvRCxDQUFDLHNCQUFzQixDQUFDLFlBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCVCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG4vLyBpbXBvcnQgeyBPdHBWZXJpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9vdHAtdmVyaWZpY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPdHBWZXJpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9vdHAtdmVyaWZpY2F0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItb3RwLXZlcmlmaWNhdGlvbicsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIENvbW1vbk1vZHVsZSxIdHRwQ2xpZW50TW9kdWxlXSxcclxuICBwcm92aWRlcnM6IFtPdHBWZXJpZmljYXRpb25TZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICA8Zm9ybSBbZm9ybUdyb3VwXT1cIm90cEZvcm1cIiBjbGFzcz1cIm90cC1mb3JtXCI+XHJcbiAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XHJcbiAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIGZvcm1Db250cm9sTmFtZT1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCI+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJvdHBcIj5PVFA6PC9sYWJlbD5cclxuICAgIDxpbnB1dCBpZD1cIm90cFwiIGZvcm1Db250cm9sTmFtZT1cIm90cFwiIHR5cGU9XCJ0ZXh0XCI+XHJcbiAgPC9kaXY+XHJcbiAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiICBbZGlzYWJsZWRdPVwiIXJlc2VuZEFsbG93ZWRcIiAoY2xpY2spPVwic2VuZE90cCgpXCI+U2VuZCBPVFA8L2J1dHRvbj5cclxuICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiAoY2xpY2spPVwidmVyaWZ5T3RwKClcIj5WZXJpZnkgT1RQPC9idXR0b24+XHJcbiAgPGRpdiAqbmdJZj1cIiFyZXNlbmRBbGxvd2VkXCIgY2xhc3M9XCJjb3VudGRvd25cIj5cclxuICAgIFJlc2VuZCBhbGxvd2VkIGluOiB7eyBjb3VudGRvd24gfX0gc2Vjb25kc1xyXG4gIDwvZGl2PlxyXG48L2Zvcm0+XHJcblxyXG4gIGAsXHJcbiAgc3R5bGVzOiBgXHJcbiAgXHJcbiAgICAvKiBDb250YWluZXIgZm9yIHRoZSBmb3JtICovXHJcbi5vdHAtZm9ybSB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vKiBHZW5lcmFsIHN0eWxpbmcgZm9yIGZvcm0gZ3JvdXBzICovXHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLyogSW5wdXQgZmllbGRzICovXHJcbmlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJlbWFpbFwiXTpmb2N1cyxcclxuaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vKiBCdXR0b25zICovXHJcbi5idG4ge1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcclxufVxyXG5cclxuLmJ0bi1zZWNvbmRhcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE2MjY4O1xyXG59XHJcblxyXG4vKiBDb3VudGRvd24gdGltZXIgKi9cclxuLmNvdW50ZG93biB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICNlNjM5NDY7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgZGVzaWduICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5vdHAtZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4gIFxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE90cFZlcmlmaWNhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIG90cEZvcm06IEZvcm1Hcm91cDtcclxuICByZXNlbmRBbGxvd2VkOiBib29sZWFuID0gdHJ1ZTtcclxuICBjb3VudGRvd246IG51bWJlciA9IDYwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBvdHBTZXJ2aWNlOiBPdHBWZXJpZmljYXRpb25TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLm90cEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdXSxcclxuICAgICAgb3RwOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cclxuICAgIH0pO1xyXG5cclxuICAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgXHJcbiAgfVxyXG5cclxuICBzZW5kT3RwKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3RwRm9ybS52YWxpZCkge1xyXG4gICAgICBjb25zdCBlbWFpbCA9IHRoaXMub3RwRm9ybS5nZXQoJ2VtYWlsJyk/LnZhbHVlO1xyXG4gICAgICB0aGlzLnJlc2VuZEFsbG93ZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5vdHBTZXJ2aWNlLnNlbmRPdHAoZW1haWwpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ09UUCBzZW50Jyk7XHJcbiAgICAgICAgdGhpcy5zdGFydFJlc2VuZENvdW50ZG93bigpO1xyXG5cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2ZXJpZnlPdHAoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vdHBGb3JtLnZhbGlkKSB7XHJcbiAgICAgIGNvbnN0IGVtYWlsID0gdGhpcy5vdHBGb3JtLmdldCgnZW1haWwnKT8udmFsdWU7XHJcbiAgICAgIGNvbnN0IG90cCA9IHRoaXMub3RwRm9ybS5nZXQoJ290cCcpPy52YWx1ZTtcclxuICAgICAgY29uc29sZS5sb2coZW1haWwsb3RwKVxyXG4gICAgICB0aGlzLm90cFNlcnZpY2UudmVyaWZ5T3RwKGVtYWlsLCBvdHApLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhcnRSZXNlbmRDb3VudGRvd24oKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlc2VuZEFsbG93ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuY291bnRkb3duID0gNjA7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgdGhpcy5jb3VudGRvd24tLTtcclxuICAgICAgaWYgKHRoaXMuY291bnRkb3duIDw9IDApIHtcclxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICB0aGlzLnJlc2VuZEFsbG93ZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==