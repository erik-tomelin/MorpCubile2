import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BaseHttp } from '../shared/base-http';
import { environment } from 'environments/environment';

@NgModule()
export class DiffMovimentsPerSleepService extends BaseHttp {

    constructor(
        private _httpClient: HttpClient,
    ) {
        super(_httpClient);
    }

    getDiffMovimentsPerSleep = (response: (result: any) => void): any => {
        this.get(environment.baseUrl + '/diffMovimentsPerSleep', response);
    };

    postDiffMovimentsPerSleep = (data: any, response: (result: any) => void): any => {
        this.post(environment.baseUrl + '/diffMovimentsPerSleep', data, response);
    };
}
