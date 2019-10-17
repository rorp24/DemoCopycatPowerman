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
    this.id = this.Route.snapshot.paramMap.get('pageId');
  }

  ngOnInit() {
  }

}
