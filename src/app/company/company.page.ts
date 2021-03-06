import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.scss'],
})
export class CompanyPage implements OnInit {

  data: any[] = [
    {
      id: 1,
      cap: '$305.1B',
      name: 'ICBC',
      sales: '$175.9B',
      country: 'China',
      phone: '(973) 309-7278'
    },
    {
      id: 2,
      cap: '$368.5B',
      name: 'JPMorgan Chase',
      sales: '$132.9B',
      country: 'United States',
      phone: '(894) 239-7660'
    },
    {
      id: 1,
      cap: '$225B',
      name: 'China Construction Bank',
      sales: '$150.3B',
      country: 'China',
      phone: '(808) 277-5112'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  openDetails(content) {
    console.log(content);
  }

  // async presentModal() {
  //   const modal = await this.modalController.create({
  //     component: ModalPage
  //   });
  //   return await modal.present();
  // }


}
