import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {UserModel} from "../model/User.model";
import {Injectable} from "@angular/core";
import {UserService} from "../service/User.service";

@Injectable()
export class UserResolve implements Resolve<UserModel>{
    constructor(private userService: UserService, private router: Router){
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Array<UserModel>>{
        return this.userService.findAllUser()
            .then(data => {
                if (!data) {
                    this.router.navigate(["/error"]);
                    return;
                }
                return data;
            });
    }

}