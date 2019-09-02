import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  uri = 'http://localhost:4000';
  latestIMsearchedData: any = "";

  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }

  getIssueByTitle(im_id) {
    this.latestIMsearchedData = im_id;
    return this.http.get(`${this.uri}/issues/${im_id}`);
  }

  getLastSearchedIm() {
    console.log("getLastsearchedIM\n", this.latestIMsearchedData);
    if (this.latestIMsearchedData !== undefined && this.latestIMsearchedData !== "") {
      let getSearchedIssueData = this.getIssueByTitle(this.latestIMsearchedData);
      console.log("GetSearchedIssueData \n",getSearchedIssueData);
      return getSearchedIssueData;
    } else {
      return this.getIssueByTitle("");
    }
  }

  getLatestIM() {
    return this.http.get(`${this.uri}/fetchIMval`);
  }

  addIssue(title, responsible, description, severity) {

    console.log("OnService\ntitle:"+title+"\nResp:"+responsible+"\nDesc:"+description+"\nSevere:"+severity);

    const newIssue = {
      "title": title,
      "responsible": responsible,
      "description": description,
      "severity": severity
    };

    console.log("OnServiceStep2\ntitle:"+newIssue.title+"\nResp:"+newIssue.responsible+"\nDesc:"+newIssue.description+"\nSevere:"+newIssue.severity);

    return this.http.post(`${this.uri}/issues/add`, newIssue);
  }

  updateIssue(title, responsible, description, severity, status) {
    const updatedIssue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status
    };

    return this.http.post(`${this.uri}/issues/update/${title}`, updatedIssue);
  }

  deleteIssue(id) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }
}



