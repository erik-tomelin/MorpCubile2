import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BaseHttp } from '../shared/base-http';
import { environment } from 'environments/environment';

@NgModule()
export class HoursOfSleepService extends BaseHttp {

    constructor(
        private _httpClient: HttpClient,
    ) {
        super(_httpClient);
    }

    getHoursOfSleep = (response: (result: any) => void): any => {
        this.get(environment.baseUrl + '/hoursOfSleep', response);
    };

    postHoursOfSleep = (data :any, response: (result: any) => void): any => {
        this.post(environment.baseUrl + '/hoursOfSleep', data, response);
    };
}
