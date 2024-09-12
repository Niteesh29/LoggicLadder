import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class OtpVerificationService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RwLXZlcmlmaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvb3RwLXZlcmlmaWNhdGlvbi9zcmMvbGliL290cC12ZXJpZmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUt0QyxNQUFNLE9BQU8sc0JBQXNCO0lBR2I7SUFGcEIsd0RBQXdEO0lBRXhELFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBRXpDLE9BQU8sQ0FBQyxLQUFhO1FBQ25CLDJEQUEyRDtRQUMzRCxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNwQixDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQWEsRUFBRSxHQUFXO1FBQ3BDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNWLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUUxQixJQUFJLEdBQUcsS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUNyQixPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLENBQUMsQ0FBQztRQUNyRSxDQUFDO2FBQU0sQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLENBQUM7SUFDSCxDQUFDO3VHQW5CVSxzQkFBc0I7MkdBQXRCLHNCQUFzQixjQUZyQixNQUFNOzsyRkFFUCxzQkFBc0I7a0JBSGxDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgT3RwVmVyaWZpY2F0aW9uU2VydmljZSB7XHJcbiAgLy8gcHJpdmF0ZSBhcGlVcmwgPSAnaHR0cHM6Ly95b3VyLWJhY2tlbmQtYXBpLmNvbS9vdHAnOyBcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgc2VuZE90cChlbWFpbDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIC8vIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmFwaVVybH0vc2VuZGAsIHsgZW1haWwgfSk7XHJcbiAgICByZXR1cm4gb2YoJ0hlbGxvJylcclxuICB9XHJcblxyXG4gIHZlcmlmeU90cChlbWFpbDogc3RyaW5nLCBvdHA6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgYWxlcnQoJ2hpdCcpXHJcbiAgICBjb25zdCB2YWxpZE90cCA9ICcxMjM0NTYnO1xyXG5cclxuICAgIGlmIChvdHAgPT09IHZhbGlkT3RwKSB7XHJcbiAgICAgIHJldHVybiBvZih7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdPVFAgdmVyaWZpZWQgc3VjY2Vzc2Z1bGx5JyB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBvZih7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnSW52YWxpZCBPVFAuIFBsZWFzZSB0cnkgYWdhaW4uJyB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ==