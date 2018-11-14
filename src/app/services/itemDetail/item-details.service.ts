import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Item} from '../../models/Item';

@Injectable()
export class ItemDetailsService {

  constructor(private http: HttpClient) {
  }

  getData(): Observable<Item[]> {
    console.log(this.http.get<Item[]>('../../assets/Webdev_data2.json'));
    return this.http.get<Item[]>('../../assets/Webdev_data2.json');
  }
}
