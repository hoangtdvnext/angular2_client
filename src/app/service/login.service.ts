import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {CommonService} from "./common.service";
/**
 * Created by ASUS on 1/24/2017.
 */

@Injectable()
export class LoginService extends CommonService {
    token: string;

    constructor(private http: Http, private router: Router) {
        super(http, router);
    }

    checkLogin(){
        if(localStorage.getItem('currentUsername') != "" && localStorage.getItem('token')!=""){
            return true;
        }else{
            return true;
        }
    }

    logout(){
        localStorage.setItem('currentUsername','');
        localStorage.setItem('token','');
    }
}