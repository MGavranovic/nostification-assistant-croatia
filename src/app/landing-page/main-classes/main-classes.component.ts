import { Component } from '@angular/core';

interface ClassesArray {
  id: number;
  className: string;
  professor: string;
  img: string;
  description: string;
  notes: string[];
}

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

  selectedItem: ClassesArray | null = null;

  selectItem(classes: ClassesArray): void {
    this.selectedItem = classes;
    console.log(this.selectedItem);
  }

  closeAdditionalInfo(): void {
    this.selectedItem = null;
  }

  classes: ClassesArray[] = [
    {
      id: 0,
      className: 'Anesteziologija i reanimatologija',
      professor: 'prof. Slobodan Mihaljević',
      img: '../../assets/images/classes/anestezija.jpg',
      description:
        'Usmeni ispit, ispitivač: profesor Slobodan Mihaljević. 4-5 pitanja sa popisa navedenih pitanja. Skripta dovoljna.',
      notes: ['test1', 'test2'],
    },
    {
      id: 1,
      className: 'Neurokirurgija',
      professor: 'prof. Goran Mrak',
      img: '../../assets/images/classes/brain.jpg',
      description:
        'Usmeni ispit, ispitivač: profesor Goran Mrak. 4-5 pitanja, sve sa popisa navedenih pitanja. Skripte dovoljne.',
      notes: [],
    },
    {
      id: 2,
      className: 'Organizacija zdravstvene zaštite i ekonomika',
      professor: 'prof. Aleksandar Džakula',
      img: '../../assets/images/classes/zdravstvenaZastita.jpg',
      description:
        'Javiti se na mail po uputi sa Medicinskog fakulteta, profesorica će vas preusmjeriti na tajništvo, a tajništvo na kontakt profesora Džakule. Usmeni ispit, ispitivač: profesor Aleksandar Džakula. Ispit je razgovor o vašem iskustvu sa fakulteta, nekim mogućim možda razlikama koje ste uočili koje se tiču zdravstvene zaštite u državi u kojoj ste studirali i u Hrvatskoj. Ugodan i prolaz siguran. Skripta dovoljna (i previše).',
      notes: [],
    },
    {
      id: 3,
      className: 'Otorinolaringologija (ORL)',
      professor: 'prof. Tomislav Baudoin',
      img: '../../assets/images/classes/orl.jpg',
      description:
        'Usmeni ispit, ispitivač: profesor Tomislav Baudoin [Boduen]. 3-4 pitanja iz spiska sa navedenih pitanja. Ugodan. Skripta dovoljna. ',
      notes: [],
    },
    {
      id: 4,
      className: 'Urologija',
      professor: 'akademik Željko Kaštelan',
      img: '../../assets/images/classes/urology.jpg',
      description:
        'Usmeni ispit, ispitivač: akademik Željko Kaštelan. 3-4 pitanja od navedenih 12. Skripta dovoljna. Što nedostaje može se nadopuniti sa interneta ili bilo kojeg izvora (eurotransplant npr). Jako ugodan i prolaz siguran.',
      notes: [],
    },
  ];
}
