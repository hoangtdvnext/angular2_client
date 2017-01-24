import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../service/User.service";
import {UserModel} from "../../../model/User.model";

declare var $: any;

@Component({
    templateUrl: 'user.page.html',
    providers: [UserService]
})

export class UserPage implements OnInit {
    /*list user*/
    users: UserModel [] = new Array<UserModel>();
    /*Data modal user*/
    user: UserModel = new UserModel();
    btnModal: string;
    btnSubmit: string;
    title: string;
    view: boolean = false;

    constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    }

    ngOnInit(): void {
        // get data snapshot
        this.users = this.route.snapshot.data['users'];
        this.btnModal = "Create User";
        this.btnSubmit = "Submit";
        this.title = "Modal User";
    }

    public submitUser() {
        this.userService.createUser(this.user).then(data=> {
            this.users.push(this.user);
            $('#myModal').modal('toggle');
        }).catch();
    }

    public viewUser(item) {
        this.user = item;
        this.view = true;
        $('#myModal').modal('show');
    }

    public updateUser(item) {
        this.view = false;
        this.user = item;
        $('#myModal').modal('show');
    }

    public deleteUser(index, item) {
        this.userService.deleteUser(item.username).then(data=> {
            // remove item in list item
            this.users.splice(index, 1);
        }).catch();
    }
}