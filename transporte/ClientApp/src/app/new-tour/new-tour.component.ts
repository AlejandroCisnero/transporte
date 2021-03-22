import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-tour',
  templateUrl: './new-tour.component.html',
  styleUrls: ['./new-tour.component.scss']
})
export class NewTourComponent implements OnInit {
  firstFormGroup: FormGroup;
  isLinear = true;
  isEditable = false;
  nombre = "Alejandro";

  get formArray(): AbstractControl | null { 
    return this.firstFormGroup.get('formArray');
  }
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          firstCtrl: ['', Validators.required]
        }),
        this._formBuilder.group({
          secondCtrl: ['',Validators.required]
        })
      ])
    });
  }

}
