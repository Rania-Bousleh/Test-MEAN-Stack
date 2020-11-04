import { Injectable } from '@angular/core';
 import { Member } from '../entities/member';
 import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
 const optionRequete = {
   headers: new HttpHeaders({ 
     'Access-Control-Allow-Origin':'*',
     'mon-entete-personnalise':'maValeur'
   })
 };
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  images;
  private url= "http://localhost:5000";
  constructor(private httpclient: HttpClient) { }
  
  getAll(){
    return this.httpclient.get<Member[]>(this.url+"/api/member")
  }
  addMember(member){
    return this.httpclient.post(this.url+"/api/member",member)
  }
 
}
