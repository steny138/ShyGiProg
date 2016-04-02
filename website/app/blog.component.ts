import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {BlogService, Blog, Comment} from './services/BlogServices';
import {FilterDisalbedPipe} from './services/Filters';

@Component({
    selector: 'blog-app',
	templateUrl: '../templates/blog.html',
	providers: [BlogService],
	pipes: [FilterDisalbedPipe]
})
export class BlogComponent {
	public blogs: Array<Blog>;

	private _blogService: BlogService;
	constructor(blogService: BlogService) {
		this._blogService = blogService;

		this.blogs = [];

		this._blogService.getBlogs().subscribe(res => {
			this.blogs = res.blogs;
		});
	}
}


