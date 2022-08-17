import { Component, OnInit } from '@angular/core';
import { ApiService } from '../universities/api.service';


@Component({
  selector: 'app-universitilist',
  templateUrl: './universitilist.component.html',
  styleUrls: ['./universitilist.component.css']
})
export class UniversitilistComponent implements OnInit {


  universitiListItems: any []

  constructor(private service:ApiService ) { }

  

  ngOnInit(): void {
    this.service.getsearchuniversiti().subscribe(Result=>{
      this.universitiListItems=Result
      console.log(Result)
    })
  }

}
