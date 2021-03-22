import { Component, OnInit, Input } from '@angular/core';
import { MainNavComponent } from '../main-nav/main-nav.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public MainNavComponent: MainNavComponent) { }


  ngOnInit(): void {
  }

  open(){
    this.MainNavComponent.opened=true;
  }
}
