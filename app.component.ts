import { Component } from '@angular/core';
import {FormControl,FormGroup,FormArray,FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveForms';


  public profileForm:FormGroup;

  constructor(private fb:FormBuilder){

    this.profileForm=this.fb.group({
      firstNameInput:[""],
      lastNameInput:[""],
      addressGroups:this.fb.array([
        this.fb.group({
          streetInput:[""],
          cityInput:[""],
          stateInput:[""],
          codeInput:[""],
        }),
      ]),
    })
  }

  public addAddressGroup(){
    const fa=this.profileForm.controls["addressGroups"] as FormArray;

    fa.push(this.newAddressGroup());
  }

  public saveProfileForm(){
    console.log(this.profileForm.value);
  }
  
  private newAddressGroup(){
    return new FormGroup({
      streetInput:new FormControl(""),
      cityInput:new FormControl(""),
      stateInput:new FormControl(""),
      codeInput:new FormControl(""),
    });
  }
}
