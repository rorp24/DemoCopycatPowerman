import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})

export class PageComponent implements OnInit {
  id
  constructor(
    private Route:ActivatedRoute
  ) { 
    
  }

  ngOnInit(){ //uniquement la première fois que le composent est chargé
    
  }

  ngDoCheck(){ //load a chaque changement du composant
    this.id = this.Route.snapshot.params['pageId'];
  }
}
