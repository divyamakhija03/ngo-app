import { FactoryTarget } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { faHouseUser,faBowlFood,faScissors, faCat} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  icons={
    houseIcon:faHouseUser,
    foodIcon:faBowlFood,
    grommingIcon:faScissors,
    catIcon:FactoryTarget,
    


  }

  constructor() { }

  ngOnInit(): void {
  }

}
