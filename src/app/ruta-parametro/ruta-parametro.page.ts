import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-parametro',
  templateUrl: './ruta-parametro.page.html',
  styleUrls: ['./ruta-parametro.page.scss'],
})
export class RutaParametroPage implements OnInit {

  public id: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

}
