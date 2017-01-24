import {Router} from "@angular/router";
import {Http, Headers} from "@angular/http";

export class CommonService {

    constructor(protected http: Http, protected router: Router) {
    }

    protected getApi(webApi: string): Promise<any> {
        let self = this;
        return new Promise(
            function (resolve, reject) {
                self.http.get(webApi)
                    .toPromise()
                    .then((response)=> {
                        let body = response.json();
                        resolve(body);
                    })
                    .catch(err => {
                        // TODO handler error
                        console.log(err);
                        reject(err);
                    })
            })
            .then((body)=> {
                if (body["error"] == undefined) {
                    return body;
                } else {
                    throw body["error"];
                }
            }, (err) => {
                // TODO handler error
                console.log(err);
                throw undefined;
            });
    }

    protected postApi(webApi: string, data: any): Promise<any> {
        let self = this;
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return new Promise(
            function (resolve, reject) {
                self.http.post(webApi, JSON.stringify(data, self.preventPrivate), {headers: headers})
                    .toPromise()
                    .then((response)=> {
                        let body = response.json();
                        resolve(body);
                    })
                    .catch(err => {
                        // TODO handler error
                        console.log(err);
                        reject(err);
                    })
            })
            .then((body)=> {
                if (body["error"] == undefined) {
                    return body["data"];
                } else {
                    throw body["error"];
                }
            }, (err) => {
                // TODO handler error
                console.log(err);
                throw undefined;
            });
    }

    private preventPrivate(key, value): any {
        if (key.startsWith("-")) {
            return undefined;
        } else {
            return value;
        }
    }
}
