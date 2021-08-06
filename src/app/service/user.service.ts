import { Injectable } from "@angular/core";

@Injectable()
export class UserService{

    constructor(){}

    getUserIdLogged(): string {
        let userId = "";
        let loggedUser: any = sessionStorage.userLogged;
        if (loggedUser) userId = JSON.parse(loggedUser).id;
        return userId;
    }
}