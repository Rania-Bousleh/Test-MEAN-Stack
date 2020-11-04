import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddMemberComponent } from '../add-member/add-member.component';
import { Member } from '../entities/member';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {

  members: Member[]=[]
  veriflength:number =0;
  suit:number=0;
  constructor(public memberservice:MemberService,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {

   this.affiche();
  }

affiche(){
    this.memberservice.getAll().subscribe(data => {

      this.members= data;
      console.log(this.members.length)
      if(this.members.length<5){
        this.veriflength=1;
      }
      else       if(this.members.length > 4 && this.members.length<9){
        this.veriflength=2;
      }
    })
  }

  addMember(): void {
    const dialogRef = this.dialog.open(AddMemberComponent, {width:"550px"});

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
      console.log("The dialog was closed");
    });
  }
  displayNext(){
    if(this.suit==0){
      this.suit=1;
      console.log("suit: "+this.suit)

    }
    else{
      this.suit=0
      console.log("suit: "+this.suit)

    }
  }
}
