import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, NgModule, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { HomeServiceService } from '../home-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {
  user: string = "";
  timeArray: any = [];
  modalRef: any;
  selectedInd:any;
  username: any;
  mob:any;
  form: FormGroup = new FormGroup({
    Name: new FormControl(''),
    Mobile: new FormControl(''),
  });


  constructor(private homeservice: HomeServiceService,
    private modalService: BsModalService
  ) {

    this.timeArray = [
      { "id": "1", "value": "11 AM To 12 PM", "isBooked": false, "name": "", "Mob": "" },
      { "id": "2", "value": "12 PM To 1 PM", "isBooked  ": false, "name": "", "Mob": "" },
      { "id": "3", "value": "1 PM To 2 PM", "isBooked": false, "name": "", "Mob": "" },
      { "id": "4", "value": "2 PM To 3 PM", "isBooked": false, "name": "", "Mob": "" }
    ]
  }

  ngOnInit(): void {
    this.user = sessionStorage.getItem("userName")!!;
  }

  onNext(index: any) {
    console.log(index);
    this.selectedInd = index;
    this.username = this.timeArray[this.selectedInd].name;
    this.mob = this.timeArray[this.selectedInd].Mob;
  }

  openPopup(com: any, ind: any) {
    this.modalRef = this.modalService.show(com,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  AddData() {
    console.log(this.username,this.mob);
    this.timeArray[this.selectedInd].name = this.username;
    this.timeArray[this.selectedInd].Mob = this.mob;
    this.timeArray[this.selectedInd].isBooked = true;
    this.modalRef = this.modalService.hide();
  }
}
