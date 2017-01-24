import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {IndexPage} from "./view/index/index.page";
import {HeaderComponent} from "./view/header/header.component.ts";
import {FooterComponent} from "./view/footer/footer.component.ts";
import {ContentComponent} from "./view/content/content.component";
import {RouterModule} from "@angular/router";
import {routes, routingProviders} from "./app.router";
import {UserPage} from "./view/page/user/user.page";
import {TemplatePage} from "./view/page/template/template.page";
import {LearningComponent} from "./view/learning/learning.component";
import {MoneyMaskModule} from 'ng2-money-mask';
import {Angular2} from "./view/page/angular2/angular2.page";
import {LoginPage} from "./view/page/login/login.page";
import {RegisterPage} from "./view/page/register/register.page";
import {AuthGuard} from "./service/auth-guard.service";
import {AuthService} from "./service/auth.service";


@NgModule({

    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        MoneyMaskModule,
        //config router url
        RouterModule.forRoot(routes, {useHash: false})
    ],
    declarations: [
        IndexPage,
        AppComponent,
        /*Component Page*/
        HeaderComponent,
        FooterComponent,
        ContentComponent,
        /*Component View*/
        UserPage,
        TemplatePage,
        LearningComponent,
        Angular2,
        /*page angular 2*/
        LoginPage,
        RegisterPage
    ],
    providers: [routingProviders,AuthGuard, AuthService],
    bootstrap: [AppComponent],
})
export class AppModule {
}