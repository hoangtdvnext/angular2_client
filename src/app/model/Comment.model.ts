import {BaseModel} from "./Base.model";
import {UserModel} from "./User.model";
import {PhotoModel} from "./Photo.model";
/**
 * Created by ASUS on 1/24/2017.
 */
export class CommentModel extends BaseModel {
    userId: number;
    photoId: number;
    user: UserModel;
    photo: PhotoModel;

    public setComment(data: any) {
        this.id = data["id"];
        this.createdUser = data["createdUser"];
        this.updatedUser = data["updatedUser"];
        this.createdDate = data["createdDate"] != undefined ? new Date(data["createdDate"]) : undefined;
        this.updatedDate = data["updatedDate"] != undefined ? new Date(data["updatedDate"]) : undefined;
        this.userId = data["userId"];
        this.photoId = data["photoId"];
        if (data["user"] !== undefined) {
            this.user = new UserModel();
            this.user.setUser(data["user"]);
        }

        if (data["photo"] !== undefined) {
            this.photo = new PhotoModel();
            this.photo.setPhoto(data["photo"]);
        }
    }
}