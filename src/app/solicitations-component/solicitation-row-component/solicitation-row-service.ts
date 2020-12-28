import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class SolicitationsService {

    constructor(private http: HttpClient) {}

    getSolicitations(): Observable<any> {
        return this.http.get('https://agdo-server.appspot.com/solicitacoes');
    }
}