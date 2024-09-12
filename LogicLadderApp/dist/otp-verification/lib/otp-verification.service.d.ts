import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class OtpVerificationService {
    private http;
    constructor(http: HttpClient);
    sendOtp(email: string): Observable<any>;
    verifyOtp(email: string, otp: string): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<OtpVerificationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OtpVerificationService>;
}
