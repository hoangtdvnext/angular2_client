import {Pipe} from "@angular/core/src/metadata/directives";
const LARGE_NUMBER = Number.MAX_SAFE_INTEGER;

interface PipeState {
    collection: any[];
    size: number;
    start: number;
    end: number;
    slice: any[];
}

@Pipe({
    name: 'paginate',
    pure: false
})

export class PaginatePipe {

}