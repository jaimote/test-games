import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, nombre: string, genre: string, platform: string): any {
    const resultPost = [];

    for (const post of value) {
      if ((post.title.toLowerCase().indexOf(nombre) > -1 || post.short_description.toLowerCase().indexOf(nombre) > -1) && platform.length == 0 && genre.length == 0) {
        resultPost.push(post);
      } else if ((post.title.toLowerCase().indexOf(nombre) > -1 || post.short_description.toLowerCase().indexOf(nombre) > -1) && post.platform.trim() == platform && post.genre.trim() == genre) {
        resultPost.push(post);
      } else if ((post.title.toLowerCase().indexOf(nombre) > -1 || post.short_description.toLowerCase().indexOf(nombre) > -1) && post.platform.trim() == platform && genre.length == 0) {
        resultPost.push(post);
      } else if ((post.title.toLowerCase().indexOf(nombre) > -1 || post.short_description.toLowerCase().indexOf(nombre) > -1) && platform.length == 0 && post.genre.trim() == genre) {
        resultPost.push(post);
      }
    }

    return resultPost;
  }
}
