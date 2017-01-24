import {Routes} from "@angular/router";
import {UserPage} from "./view/page/user/user.page";
import {IndexPage} from "./view/index/index.page";
import {ContentComponent} from "./view/content/content.component";
import {UserResolve} from "./resolve/User.resolve";
import {UserService} from "./service/User.service";
import {TemplatePage} from "./view/page/template/template.page";
import {Angular2} from "./view/page/angular2/angular2.page";
import {LoginPage} from "./view/page/login/login.page";
import {RegisterPage} from "./view/page/register/register.page";
import {AuthGuard} from "./service/auth-guard.service";
import {AuthService} from "./service/auth.service";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'

    }, {
        path: 'home',
        component: IndexPage,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: ContentComponent,
            },
            {
                path: 'user',
                component: UserPage,
                resolve: {users: UserResolve},
            },
            {
                path: 'template',
                component: TemplatePage,
            },
            {
                path: 'angular2',
                component: Angular2,
            }

        ]
    },
    {
        path: 'login',
        component: LoginPage,
    },
    {
        path: 'register',
        component: RegisterPage,
    },
];

export const routingProviders: any[] = [UserResolve, UserService, AuthService];

