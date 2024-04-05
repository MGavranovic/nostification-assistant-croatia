import { Component } from '@angular/core';

interface ClassesArray {
  id: number;
  className: string;
  professor: string;
  img: string;
  description: string;
  notes: string[];
  materialDownloadURLs: { label: string; url: string }[];
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
      notes: [
        '40% krvi se izbacuje masažom srca',
        'Jetra i bubrezi mogu preživjeti pola sata ',
        'Alergije - aminoesteri',
        'Tiopental - nekroza',
        'Balon - 80% i 60% (valjda, provjerite to), kad čovjek upuhuje - 16%',
        'Bls i als razlika',
        ' Laringealna maska',
        ' Ketamin',
        ' UZV - tamponada, plućna embolija (desni ventrikul povećan, izravnan septum)',
        ' Lidokain - gdje se koristi',
        ' Sevofluran - komponenta a',
        ' 4T i 4H',
        ' Srednjedjelujujući lokalni anestetici',
        ' Hiperkalijemija, hiperkalcijemija životno ugrožavajući poremećaji elektrolita',
        ' Endotrahealni tubus - adrenalin, salbutamol, morfij',
        ' VF fino u grubo - adrenalin',
        ' Ketamin - zašto djeluje simpatomimetski - neki centar u mozgu',
        ' Epiduralna kod vaginalnog poroda, spinalna kod carskog reza',
        ' Spinalna anestezija - pad tlaka - noradrenalin, efedrin, fenilefrin',
        ' Ako nema monitora - svejedno defibrilirati Sevofluran mehanizam djelovanja',
        ' Propofol mehanizam djelovanja i emulzija, najjači depresor srca',
        'Acidoza kod KPR-a - kako se liječi',
        'Mane etomidata - bolnost kod injiciranja, mioklonizmi, adrenokortikalna depresija',
        'Kako se dokazuje moždana smrt',
      ],
      materialDownloadURLs: [
        {
          label: 'Anesteziologija i Intenzivna medicina za studente',
          url: 'https://drive.google.com/file/d/16Mc0GzKs-OGm1VgB9fbQnJORC3-ocm4c/view?usp=sharing',
        },
        {
          label: 'Mihaljević-Pitanja',
          url: 'https://docs.google.com/document/d/1EpT0JTqVHtsV4s-Dw0C8Wvli7hN68lQk/edit?usp=drive_link&ouid=111170949512331309976&rtpof=true&sd=true',
        },
      ],
    },
    {
      id: 1,
      className: 'Neurokirurgija',
      professor: 'prof. Goran Mrak',
      img: '../../assets/images/classes/brain.jpg',
      description:
        'Usmeni ispit, ispitivač: profesor Goran Mrak. 4-5 pitanja, sve sa popisa navedenih pitanja. Skripte dovoljne.',
      notes: [
        '1. GCS',
        '2. Aneurizme',
        '3. Hidrocefalus',
        '  4. Klinička slika AV malformacija',
        '  5. Kirurško liječenje epilepsije',
        '  6. Traume mozga(GCS, potres mozga; ako curi likvor opasnost od upale-meningitis(klasični simptomi+temperatura); otolikvoreja većinom prolazi sama, rinolikvoreja se liječi kirurški',
        '  7. Akutni epiduralni hematom',
        '  8. Simptomi frakture baze lubanje',
        '  9. Meningeom',
        '  10. SAH',
        '  11. DBS',
        '  12. otvaranje ociju GCS',
        '  13. sekretorni tumor hipofize (visak ACTH)',
        '  14. Klasifikacija tumora kraljeznice',
        '  15. Pilociticki astrocitom',
        '  16. Normotenzivni hidrocefalus',
        '  17. Adenomi hipofize',
        '  18. Sindrom caude equine',
        '  19. AVM',
        '  20. Adenom hipofize (GH)',
        '  21. Kraniosinostoze',
        '  22. Hemianopsije',
        ' 23. GCS motoricki odgovor',
        ' 24. Gama knife',
        ' 25. Kronicni subduralni hematom',
        ' 26. Hessova klasifikacija',
        ' 27. Glioblastom',
        ' 28. Hernijacije-kako mozemo prepoznati transtentorijalnu (Hutchingsonova zjenica)',
        ' 29. Akutni subduarlni hematom',
        ' 30. Spinalne disrafije',
        ' 31. GCS odgovor ociju',
        ' 32. Švanomi/neurofibromatoza tip 1 i 2',
        ' 33. Cerviko-brahijalni sindrom',
      ],
      materialDownloadURLs: [
        {
          label: 'Neurokirurgija - Skripta',
          url: 'https://docs.google.com/document/d/1NEi9eFfaGF5y1Nlly4tdPGWUCQOw36km/edit?usp=drive_link&ouid=111436759522542595421&rtpof=true&sd=true',
        },
        {
          label: 'PITANJA-NEUROKIRURGIJA-STUDENTI',
          url: 'https://docs.google.com/document/d/1-mQtYFOT8MnYfLVuza325pBUqzqTUxqH/edit?usp=drive_link&ouid=111436759522542595421&rtpof=true&sd=true',
        },
      ],
    },
    {
      id: 2,
      className: 'Organizacija zdravstvene zaštite i ekonomika',
      professor: 'prof. Aleksandar Džakula',
      img: '../../assets/images/classes/zdravstvenaZastita.jpg',
      description:
        'Javiti se na mail po uputi sa Medicinskog fakulteta, profesorica će vas preusmjeriti na tajništvo, a tajništvo na kontakt profesora Džakule. Usmeni ispit, ispitivač: profesor Aleksandar Džakula. Ispit je razgovor o vašem iskustvu sa fakulteta, nekim mogućim možda razlikama koje ste uočili koje se tiču zdravstvene zaštite u državi u kojoj ste studirali i u Hrvatskoj. Ugodan i prolaz siguran. Skripta dovoljna (i previše).',
      notes: [],
      materialDownloadURLs: [
        {
          label: 'Organizacija ZZ',
          url: 'https://drive.google.com/file/d/132kbSRCqHDoZkFu8R16zGWeURRMcaDbP/view?usp=drive_links',
        },
      ],
    },
    {
      id: 3,
      className: 'Otorinolaringologija (ORL)',
      professor: 'prof. Tomislav Baudoin',
      img: '../../assets/images/classes/orl.jpg',
      description:
        'Usmeni ispit, ispitivač: profesor Tomislav Baudoin [Boduen]. 3-4 pitanja iz spiska sa navedenih pitanja. Ugodan. Skripta dovoljna. ',
      notes: [],
      materialDownloadURLs: [
        {
          label: 'ORL  Tomislav Baudoin pitanja',
          url: 'https://docs.google.com/document/d/15WE2_favtQPMtB377P1bXXbNKzmyu6uv/edit?usp=drive_link&ouid=111436759522542595421&rtpof=true&sd=true',
        },
        {
          label: 'Otorinolaringologija 2015.',
          url: 'https://drive.google.com/file/d/1El2x8AKd2AuSqOXYmeEEoY1r6H8DjMuw/view?usp=drive_link',
        },
      ],
    },
    {
      id: 4,
      className: 'Urologija',
      professor: 'akademik Željko Kaštelan',
      img: '../../assets/images/classes/urology.jpg',
      description:
        'Usmeni ispit, ispitivač: akademik Željko Kaštelan. 3-4 pitanja od navedenih 12. Skripta dovoljna. Što nedostaje može se nadopuniti sa interneta ili bilo kojeg izvora (eurotransplant npr). Jako ugodan i prolaz siguran.',
      notes: [
        ' 1.torzija testisa ',
        '2.bhp ',
        '3.smetnje mokrenja - opstruktivne i iritativne',
        '4.nefrolitijaza ',
        '5.bubrežne kolike ',
        '6.transplantacija bubrega i eurotransplant - komplikacije transplantacije, kojih 8 zemalja je u eurotransplantu',
        '7.hematurija - redoslijed pretraga dijagnostički',
        '8.infekcije urogenitalnog sustava ',
        '9.karcinom bubrega',
        '10.karcinom mokraćnog mjehura ',
        '11.rak testisa ',
        '12.karcinom prostate',
      ],
      materialDownloadURLs: [
        {
          label: 'Urologija - skripta po Shoshi',
          url: 'https://drive.google.com/file/d/1jBiWby3EHJNU5JBOiDmFi0lj_eL7S05r/view?usp=drive_link',
        },
      ],
    },
  ];
}
