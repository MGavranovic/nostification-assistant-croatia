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
  classesArray: { id: number; className: string; professor: string }[] = [
    {
      id: 0,
      className: 'Anesteziologija i reanimatologija',
      professor: 'prof. Slobodan Mihaljević',
    },
    {
      id: 1,
      className: 'Neurokirurgija',
      professor: 'prof. Goran Mrak',
    },
    {
      id: 2,
      className: 'Organaizacija zdravstvene zastite i ekonomika',
      professor: 'prof. Aleksandar Džakula',
    },
    {
      id: 3,
      className: 'Otorinolaringologija (ORL)',
      professor: 'prof. Tomislav Baudoin',
    },
    {
      id: 4,
      className: 'Urologija',
      professor: 'akademik Željko Kaštelan',
    },
  ];
}
