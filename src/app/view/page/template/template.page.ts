import {OnInit, Component} from "@angular/core";
import {UserService} from "../../../service/User.service";

@Component({
    templateUrl: './template.page.html',
})

export class TemplatePage implements OnInit {

    collections = [];

    ngOnInit(): void {
    }
    //this array contains the image we will show for each page
    private slides:Array<any> = [];
    //print to the user the selected page
    currentSelectedPage:string="";
    //print to the user the total iterms per page
    currentItemsPerPage:string="";
    //the maximum buttons to show
    private maxSize:number = 3;
    //the number of pages you want to print
    private totalResults:number = 60;
    //the current page
    private currentPage:number = 2;

    constructor () {
        for (let i = 1; i <= 100; i++) {
            this.collections.push(`item ${i}`);
        }
        this.slides.push(
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg',text:'BMW 1'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg',text:'BMW 2'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg',text:'BMW 3'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg',text:'BMW 4'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg',text:'BMW 5'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg',text:'BMW 6'}
        );
    }

    private setCurrentPage(pageNo:number):void {
        this.currentPage = pageNo;
    };

    private currentPageChanged(event:any):void {
        this.currentSelectedPage = ' is : ' + event.page;
        this.currentItemsPerPage = ' is : ' +  event.itemsPerPage;
    };

    /**
     * custom track for ngFor
     * @param index
     * @param obj
     * @returns {number}
     */
    trackByIndex(index: number, obj: any): any {
        return index;
    }
}