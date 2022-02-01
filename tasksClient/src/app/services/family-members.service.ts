import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MembersDetails } from '../models/membersDetails';

@Injectable({
  providedIn: 'root'
})

export class FamilyMembersService {

  constructor(private http: HttpClient) { }

  public getFamilyMembers(): Observable<MembersDetails> {
    return this.http.get<MembersDetails>("http://localhost:3001/members")
  }
}
