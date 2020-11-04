import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Member } from '../entities/member';
import { MemberService } from '../services/member.service';
const optionRequete = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'mon-entete-personnalise':'maValeur'
  })
};
@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

 
  progress: { percentage: number } = { percentage: 0 };


  name:string
  subtitle:string
  role:string
  logo= new Map()
    constructor(private http:HttpClient, public memberservice:MemberService, public dialogRef: MatDialogRef<AddMemberComponent>) { }

  ngOnInit(): void {
  }

  addNew(){
    const newMem= new Member(this.name,this.subtitle,this.role,this.logo.get("logo"))
    this.memberservice.addMember(newMem).subscribe(data =>{
      console.log("added succeffully: "+ data)
    })
    console.log(this.name+"--"+this.subtitle+"--"+this.role)
    this.dialogRef.close()


  }

   @ViewChild('fileInput',{static:false}) fileInput:ElementRef;

 
   

  onFileUpload(){
    const imageBlob= this.fileInput.nativeElement.files[0];
    const file = new FormData();
    file.set('file', imageBlob);
    console.log( "--"+this.fileInput.nativeElement.files[0].name) 

    this.logo.set("logo", this.fileInput.nativeElement.files[0].name)

    this.http.post('http://localhost:5000/api/member/file',file).subscribe(res => {
      console.log( "--"+this.fileInput.nativeElement.files[0]) 
      
      //this.logo= ;


    })
  }
}
