import { Component, OnInit } from '@angular/core';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mapa: MapComponent;
  constructor() { }

  ngOnInit(): void {

  }

}
