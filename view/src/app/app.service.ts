import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { User, urlApi } from "../tools";

@Injectable()
export class AppService {
    constructor(private http: HttpClient) {}

    public getAllUsers(): Observable<any> {
        return this.http.get(urlApi);
    }

    public getOneUser(id: number): Observable<any> {
        return this.http.get(urlApi + id.toString());
    }

    public addAllUsers(users: User[]): Observable<any> {
        return this.http.post(urlApi, users);
    }

    public addOneUser(user: User): Observable<any> {
        return this.http.post(urlApi, user);
    }

    public deleteAllUsers(): Observable<any> {
        return this.http.delete(urlApi);
    }

    public deleteOneUser(id: number): Observable<any> {
        return this.http.delete(urlApi + id.toString());
    }
}