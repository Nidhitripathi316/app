import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  name="Nidhi Tripathi";
  getLastName(){
    alert("nikky tripathi");
  }
  obj={
    firstName: "Nikky",
    lastName: "tripathi",
    age: 20 ,
  }
  arr=['bruce', 'peter', 'harry'] 
  myEvent()
  {
    alert("hello");
  }
  currentVal=""
  getVal(){
    console.log("hi");
    this.currentVal;
  }
  show ="yes"
  show1="blue"
  color="green"
  data=['anil','nikky','rupam','nidhi']
  data_object=[
    {
      name:"nidhi",
      age:22,
      email:" Abc@gmail.com"
  },
  {
    name:"nikky",
    age:20,
    email: "Abc@gmail.com"
  },
  {
    name:"rupam",
    age:18,
    email: "Abc@gmail.com"
  },
  {
    name:"ayush",
    age:17,
    email: "Abc@gmail.com"
  }
  ]
  getUserDetail(value: any){
    console.log(value)
  }
  model = {
    left: true,
    middle: false,
    right: false
  };
  user=[{
    name:'nidhi',
    age:23,
    add:'doon'
  },
  {
    name:'nikky',
    age:22,
    add:'delhi'
  },
  {
    name:'rupam',
    age:20,
    add:'lknow'
  },
]
}
