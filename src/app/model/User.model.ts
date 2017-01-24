import {BaseModel} from "./Base.model";
export class UserModel extends BaseModel {
    /* username */
    public username: string;
    /* password */
    public password: string;
    /* enable */
    public enable: number;
    /* email */
    public email: string;

    public setUser(data: any) {
        this.id = data["id"];
        this.createdUser = data["createdUser"];
        this.updatedUser = data["updatedUser"];
        this.createdDate = data["createdDate"] != undefined ? new Date(data["createdDate"]) : undefined;
        this.updatedDate = data["updatedDate"] != undefined ? new Date(data["updatedDate"]) : undefined;
        this.username = data["username"];
        this.password = data["password"];
        this.enable = data["enable"];
        this.email = data["email"];

    }
}
