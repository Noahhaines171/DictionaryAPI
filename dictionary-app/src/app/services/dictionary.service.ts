import { Injectable } from '@angular/core';
import { DictionaryResponse } from '../models/dictionary-response';
import { HttpClient } from '@angular/common/http';
import { environment as ENV } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private httpClient: HttpClient) { }

  search(searchTerm: string): DictionaryResponse {
    let searchRepsonse: DictionaryResponse;
    const baseUrl = ENV.DICTIONARY.BASE_URL + searchTerm;
    const apiKey = ENV.DICTIONARY.API_KEY;
    const url = baseUrl + '?key=' + apiKey;


    this.httpClient.get(url).subscribe(response => {
      searchRepsonse = this.mapDictionaryResponse(response);
    });
    
    return;
  }

  mapDictionaryResponse(resp: object): DictionaryResponse {
    let dictResp: DictionaryResponse;


    return dictResp;
  }
}
