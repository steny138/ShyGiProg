import {Inject, Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {ViewEnabled} from './Filters';

@Injectable()
export class BlogService {
	public http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    getBlogs() {
        return this.http.get('./app/test_data/blog.json')
			.map((res: Response) => res.json());
    }
}

export interface Blog extends ViewEnabled {
	seq: number;
	subject: string;
	content: string;
	comments: Comment[];
}

export interface Comment {
	name: string;
	comment: string;
	rank: number;
}