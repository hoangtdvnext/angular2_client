import {BaseModel} from "./Base.model";
import {UserModel} from "./User.model";
import {CommentModel} from "./Comment.model";
/**
 * Created by ASUS on 1/24/2017.
 */
export class PhotoModel extends BaseModel {
    public photoName: string;
    public title: string;
    public description: string;
    public imageName: string;
    public likes: number;
    public user: UserModel;
    public likedByUsers: UserModel[];
    public comments: CommentModel[];

    public setPhoto(data: any) {
        this.id = data["id"];
        this.createdUser = data["createdUser"];
        this.updatedUser = data["updatedUser"];
        this.createdDate = data["createdDate"] != undefined ? new Date(data["createdDate"]) : undefined;
        this.updatedDate = data["updatedDate"] != undefined ? new Date(data["updatedDate"]) : undefined;
        this.photoName = data["photoName"];
        this.title = data["title"];
        this.imageName = data["imageName"];
        this.likes = data["likes"];
        if (data["user"] !== undefined) {
            this.user = new UserModel();
            this.user.setUser(data["user"]);
        }

        if (data["likedByUsers"] !== undefined) {
            this.likedByUsers = [];
            for (var i = 0; i < data["likedByUsers"].length; i++) {
                let tmp = new UserModel();
                tmp.setUser(data["likedByUsers"][i]);
                this.likedByUsers.push(tmp);
            }
        }

        if (data["comments"] !== undefined) {
            this.comments = [];
            for (var i = 0; i < data["comments"].length; i++) {
                let tmp = new CommentModel();
                tmp.setComment(data["comments"][i]);
                this.comments.push(tmp);
            }
        }
    }
}