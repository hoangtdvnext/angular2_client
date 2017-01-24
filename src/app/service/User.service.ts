import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {CommonService} from "./common.service";
import {UserModel} from "../model/User.model";

@Injectable()
export class UserService extends CommonService {

    // Config static final host server
    private SERVER: string = "http://localhost:8000";

    constructor(http: Http, router: Router) {
        super(http, router);
    }


    // create
    public createUser(user: UserModel): Promise<UserModel> {
        return this.postApi(this.SERVER + "/createUser/", user)
            .then((data) => {
                return data;
            });
    }

    // update
    public updateUser(user: UserModel): Promise<UserModel> {
        return this.postApi(this.SERVER + "/updateUser/", user)
            .then((data) => {
                return data;
            });
    }

    // delete
    public deleteUser(username): Promise<UserModel> {
        return this.getApi(this.SERVER + "/removeUser/" + username)
            .then((data)=> {
                return data;
            }, (err)=> {
                return undefined;
            });
    }

    // find all user
    public findAllUser(): Promise<Array<UserModel>> {
        return this.getApi(this.SERVER + "/findAllUser/")
            .then((data)=> {
                let users = new Array<UserModel>();
                for (var i = 0; i < data.length; i++) {
                    let user = new UserModel();
                    user.setUser(data[i]);
                    users.push(user);
                }
                return users;
            }, (err)=> {
                return undefined;
            });
    }

}