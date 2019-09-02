import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../../issues.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-get-im',
  templateUrl: './get-im.component.html',
  styleUrls: ['./get-im.component.css']
})
export class GetImComponent implements OnInit {

  imNumber: string = "";
  isImExist: boolean = false;
  message: any;
  data: any;
  showMessage: boolean = false;

  constructor(private iServ: IssuesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  editImIfExist() {
    this.showMessage = true;
    if (this.imNumber.trim() !== "") {
      this.iServ.getIssueByTitle(this.imNumber.toUpperCase().trim())
        .subscribe(
          data => {
            console.log("DATA\n", data);

            if (data !== null && data !== {} && data !== "") {
              this.isImExist = true;
              this.message = data;
            } else {
              this.isImExist = false;
              this.message = "Please Enter a valid IM Number";
            }
          }
        );
    } else {
      this.isImExist = false;
      this.message = "Please Enter a valid IM Number";
    }

  }

  editIm() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute } );
  }

}
