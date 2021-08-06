import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';

import { Training } from "../model/Training";
import { delay, mergeMap, retryWhen } from "rxjs/operators";

@Injectable()
export class TrainingService {
    
    trainingUrl = 'api/trainings';

    constructor(private http: HttpClient) { }

    getTrainings(): Observable<Training[]> {
        let userId = this.getUserIdLogged();
        let params = new HttpParams().set("userId", userId);
        return this.http.get<Training[]>(this.trainingUrl, { params }).pipe(
            retryWhen(error => {
                return this.manageRetry(error);
            })
        );
    }

    private manageRetry(error: Observable<any>): Observable<any> {
        return error.pipe(
            mergeMap((error: any) => {
                if (error.status === 503) {
                    return of(error.status).pipe(delay(2000))
                }
                return throwError({ error: 'No retry' });
            })
        )
    }

    createTraining(training: Training): Observable<Training> {
        return this.http.post<Training>(this.trainingUrl, training);
    }

    deleteTraining(trainingToDelete: Training): Observable<any> {
        let userId = this.getUserIdLogged()

        return this.http.delete<any>(this.trainingUrl + "/" + trainingToDelete._id);
    }

    private getUserIdLogged(): string {
        let userId = "";
        let loggedUser: any = sessionStorage.userLogged;
        if (loggedUser) userId = JSON.parse(loggedUser).id;
        return userId;
    }
}
