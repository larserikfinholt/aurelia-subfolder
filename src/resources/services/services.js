import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';


@inject(HttpClient)
export class Services {
    constructor(http) {
        this.http = http;

    }

    callJallaService() {
        // hent en tilfeldig json fil, og list ut propties
        return this.http.fetch('../package.json')
            .then(response => response.json())
            .then(data => {
                var arr = [];
                for (var property in data) {
                    if (data.hasOwnProperty(property)) {
                        arr.push(property);
                    }
                }
                return arr;
            });

    }
}