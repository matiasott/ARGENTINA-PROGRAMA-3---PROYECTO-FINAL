import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-app',
  templateUrl: './logo-app.component.html',
  styleUrls: ['./logo-app.component.css']
})
export class LogoAppComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login'])
  }

}
