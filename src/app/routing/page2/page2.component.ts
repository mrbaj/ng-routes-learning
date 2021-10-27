import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  
  id : string|null = '';
  id2 : string|null = '';
  constructor(private routes:ActivatedRoute) { 
    
    this.routes.paramMap.subscribe(params => { 
      this.id2 = params.get('id2'); 
    });
    
  }

  ngOnInit(): void {
    this.id = this.routes.snapshot.paramMap.get('id');

  }

}
