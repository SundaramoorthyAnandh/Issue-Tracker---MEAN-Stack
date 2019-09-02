import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../../issues.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  latestIM: String;

  im:any = this.latestIM;
  status:any = "Open";
  severity:any = "Low";
  responsible:any = "";
  description:any = "";

  showSBsuccess: any = false;
  showSBfailure: any = false;
  showForm: any = true;

  constructor(
    private iServ: IssuesService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.iServ.getLatestIM().subscribe(latestIM => {
      this.latestIM = latestIM["im"];
    },
    err => {
      console.log("ERROR WHILE GETTING LATEST IM VAL FROM DB\n",err)
    });
  }

  // responsibleFunc(event:any) {
  //   this.responsible = event.target.value;
  // }

  // descriptionFunc(event:any) {
  //   this.description = event.target.value;
  // }

  // severityFunc(event: any) {
  //   this.severity = event.target.value;
  // }

  submitIssue() {

    if (this.responsible !== '' && this.responsible !== 'nothing' && this.description !== '' && this.description !== 'empty') {
        let formSubmit = this.iServ.addIssue(this.latestIM, this.responsible, this.description, this.severity).subscribe(
          resp => {
            console.log("Updated: ", resp);
            this.showSBsuccess = true;;
            this.showForm = false
                setTimeout(() => {
                  this.showSBsuccess = false;
                  this.showSBfailure = false;
                  this.showForm = true;;
                  this.router.navigate(['list']);
                }, 5000);
          },
          err => {
            console.log("Err Updating", err);
            this.showSBfailure = true;;
            this.showForm = false
                setTimeout(() => {
                  this.showSBsuccess = false;
                  this.showSBfailure = false;
                  this.showForm = true;;
                  this.router.navigate(['create']);
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
            this.router.navigate(['create']);
          }, 5000);
    }
  }

  // showConfirm() {
  //   this.messageService.clear();
  //   this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to submit the issue'});
  // }

  // onReject() {
  //   this.messageService.clear('c');
  // }

}
