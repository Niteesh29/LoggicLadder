import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OtpVerificationService } from './otp-verification.service';
import * as i0 from "@angular/core";
export declare class OtpVerificationComponent implements OnInit {
    private fb;
    private otpService;
    otpForm: FormGroup;
    resendAllowed: boolean;
    countdown: number;
    constructor(fb: FormBuilder, otpService: OtpVerificationService);
    ngOnInit(): void;
    sendOtp(): void;
    verifyOtp(): void;
    startResendCountdown(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OtpVerificationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OtpVerificationComponent, "lib-otp-verification", never, {}, {}, never, never, true, never>;
}
