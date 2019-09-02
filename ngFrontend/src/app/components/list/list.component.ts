import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../../issues.service';

import { Issue } from '../../issue.interface'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  allIssues: Issue[] = [];
  SortByIMtitle: any;
  cols: any = [];
  loading: any;

  constructor(private iServ: IssuesService) { }

  // SortByIMtitle = (x, y) => {
  //   return ((x.title === y.title) ? 0 : ((x.title > y.title) ? 1 : -1 ));
  // }
  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.iServ.getIssues().toPromise()
        .then(data => {
          this.allIssues = <Issue[]>data;
          console.log(this.allIssues);
          return this.allIssues
        });
        this.loading = false;
    }, 1000);

    this.cols = [
      { field: 'title', header: 'IM Title', width: '10%' },
      { field: 'status', header: 'Status', width: '10%' },
      { field: 'severity', header: 'Severity', width: '10%' },
      { field: 'responsible', header: 'Responsible',width: '25%' },
      { field: 'description', header: 'Description',width: '45%' }
    ];
  }


}
