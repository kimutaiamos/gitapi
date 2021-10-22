import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  username:any;
  repos:any;
  constructor( private http:HttpClient) { }
  getUser(user:any){
    return this.http.get("https://api.github.com/users/" + user+ "?access_token=" + environment.api_key)
    .pipe(((response:any)=>response));
  }
}