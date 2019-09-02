import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../../../issues.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  latestIMsearched;
  im:any = this.latestIMsearched;
  status: any;
  statusCopy: any;
  severity: any;
  severityCopy:any ;
  responsible:any;
  description: any;
  descriptionCopy: any;


  showSBsuccess: any = false;
  showSBfailure: any = false;
  showForm: any = true;

  constructor(
    private iServ: IssuesService,
    private router: Router ) { }

  ngOnInit() {
    this.iServ.getLastSearchedIm().subscribe(
      im => {
        this.latestIMsearched = im["title"];
        this.status = im["status"];
        this.statusCopy = this.status;
        this.severity = im["severity"];
        this.responsible = im["responsible"];
        this.description = im["description"];
      },
      err => console.log(err)
    );
  }

  updateIssue() {
    if (this.responsible !== '' && this.responsible !== 'nothing' && this.description !== '' && this.description !== 'empty' && (this.status !== this.statusCopy || this.description !== this.descriptionCopy || this.severity !== this.severityCopy)) {
      console.log("Inside updateIssue() If block");
      this.iServ.updateIssue(this.latestIMsearched, this.responsible, this.description, this.severity, this.status).subscribe(
        resp => {
          console.log("Updated: ", resp);
          this.showSBsuccess = true;;
          this.showForm = false
              setTimeout(() => {
                this.showSBsuccess = false;
                this.showSBfailure = false;
                this.showForm = true;;
                this.router.navigate(['updateSpecificIm']);
              }, 5000);
        },
        err => {
          console.log("Err Updating", err);
          this.showSBfailure = true;;
          this.showForm = false;
              setTimeout(() => {
                this.showSBsuccess = false;
                this.showSBfailure = false;
                this.showForm = true;;
                this.router.navigate(['updateSpecificIm']);
              }, 5000);
        }
        );
  } else {
    this.showSBfailure = true;;
    this.showForm = false
        setTimeout(() => {
          this.showSBsuccess = false;
          this.showSBfailure = false;
          this.showForm = true;;
          this.router.navigate(['updateSpecificIm']);
        }, 5000);
  }
  }

}
