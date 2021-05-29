import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  service:any

  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.ds.getService().subscribe(
     (data)=> this.service = data,
     
    );
    console.dir(this.service)
  }

}




