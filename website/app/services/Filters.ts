import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'filterDisalbed' })
export class FilterDisalbedPipe implements PipeTransform {
	transform(views: ViewEnabled[]) {
		return views.filter(view => !view.disabled);
	}
}

export interface ViewEnabled {
	disabled: boolean;
}