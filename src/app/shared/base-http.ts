import { HttpClient } from '@angular/common/http';

export class BaseHttp {

    constructor(public http: HttpClient) { }

    get(url: string, response?: (result: any) => void): any {
        if (!response) {
            return this.http.get(url);
        } else {
            this.http.get(url).subscribe(
                (resp) => {
                    response(resp);
                },
                (err) => {
                    response(err);
                }
            );
        }
    }

    /**
     * Esse metodo foi criado para passar um JSON em QueryString como um parametro
     *
     * @param url
     * @param queryString
     * @param response
     * @returns
     */
    getWithQueryString<T>(url: string, queryString: T, response?: (result: any) => void): any {
        if (!response) {
            return this.http.get(url);
        } else {
            this.http.get(url, queryString).subscribe(
                (resp) => {
                    response(resp);
                },
                (err) => {
                    response(err);
                }
            );
        }
    }

    async getAsync(url: string, response?: (result) => void): Promise<any> {
        if (!response) {
            return await this.http.get(url);
        } else {
            await this.http.get(url).subscribe(
                (resp) => {
                    response(resp);
                },
                (err) => {
                    response(err);
                }
            );
        }
    }

    post<T>(url: string, item: T, response: (result) => void): any {
        this.http.post(url, item).subscribe(
            (resp) => {
                response(resp);
            },
            (err) => {
                response(err);
            }
        );
    }

    patch<T>(url: string, item: T, response: (result) => void): any {
        this.http.patch(url, item).subscribe(
            (resp) => {
                response(resp);
            },
            (err) => {
                response(err);
            }
        );
    }

    put<T>(url: string, item: T, response: (result) => void): any {
        this.http.put(url, item).subscribe(
            (resp) => {
                response(resp);
            },
            (err) => {
                response(err);
            }
        );
    }

    delete(url: string, response: (result) => void): any {
        this.http.delete(url).subscribe(
            (resp) => {
                response(resp);
            },
            (err) => {
                response(err);
            }
        );
    }

    deleteWithQueryString<T>(url: string, queryString: T, response: (result) => void): any {
        this.http.delete(url, queryString).subscribe(
            (resp) => {
                response(resp);
            },
            (err) => {
                response(err);
            }
        );
    }
}
