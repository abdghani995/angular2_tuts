import {Component} from '@angular/core'
import {HeroFormComponent} from './hero-form.component'

@Component({
    selector : 'hello-world',
    template : `<div>
                    <h2>hello {{name}}</h2>
                    <button (click) = "onclickFunction()">Click For AlErt</button>
                    <input type = "text" placeholder = "enter somethinng" (keyup)="onKeyUpFunction()" #inputbox>
                    {{inputbox.value}}
                    <br>

                    <form #searchForm="ngForm">
                        Enter Something <input type="text" required [(ngModel)]="model.search" ngControl="search" #inputSearch = "ngForm">
                        Enter Email <input type="email" required [(ngModel)]="model.email" ngControl="email" #inputEmail = "ngForm" >
                         <p class="error" [hidden]="inputSearch.valid">required field</p>
                        <button type="submit" [disabled]="!searchForm.valid">Send</button>
                    </form>
                </div>
                
                <hero-form></hero-form>

                <input (keyup)="onKey($event)">
                <p>{{values}}</p>
                
                `,
    styles:[`
        .error{
            color:red;
            font-size:14px;
        }
    `],
    directives :[HeroFormComponent]
})

export class AppComponent{
    name:string;
    lastname:String;
    values = '';
  constructor(){
      this.name = "silver";
      this.lastname = "user";
  }
 
  onclickFunction = function(){
      alert(this.name)
  }
  onKeyUpFunction = function () {
    
  }

  // without strong typing
  onKey(event:any) {
      console.log(event);
    this.values += event.target.value + ' | ';
  }
  
  public model = {
      search : "",
      email:""
  }

}