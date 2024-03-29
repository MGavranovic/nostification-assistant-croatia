import { Component } from '@angular/core';

@Component({
  selector: 'app-main-classes',
  templateUrl: './main-classes.component.html',
  styleUrl: './main-classes.component.css',
})
export class MainClassesComponent {
  /*
  this will hold the array of classes with objects for each class 
  and method requried for that to work
  main-classes.component.html
  */
  showClassItem: boolean = false;

  onClick(item: any): void {
    this.showClassItem = true;
    if (this.showClassItem) {
      console.log(item);
    }
  }

  classesArray: {
    id: number;
    className: string;
    professor: string;
    img: string;
  }[] = [
    {
      id: 0,
      className: 'Anesteziologija i reanimatologija',
      professor: 'prof. Slobodan Mihaljević',
      img: '../../assets/images/classes/anestezija.jpg',
    },
    {
      id: 1,
      className: 'Neurokirurgija',
      professor: 'prof. Goran Mrak',
      img: '../../assets/images/classes/brain.jpg',
    },
    {
      id: 2,
      className: 'Organaizacija zdravstvene zastite i ekonomika',
      professor: 'prof. Aleksandar Džakula',
      img: '../../assets/images/classes/zdravstvenaZastita.jpg',
    },
    {
      id: 3,
      className: 'Otorinolaringologija (ORL)',
      professor: 'prof. Tomislav Baudoin',
      img: '../../assets/images/classes/orl.jpg',
    },
    {
      id: 4,
      className: 'Urologija',
      professor: 'akademik Željko Kaštelan',
      img: '../../assets/images/classes/urology.jpg',
    },
  ];
}
