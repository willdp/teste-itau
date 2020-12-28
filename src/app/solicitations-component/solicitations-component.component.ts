import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitations-component',
  templateUrl: './solicitations-component.component.html',
  styleUrls: ['./solicitations-component.component.scss']
})
export class SolicitationsComponentComponent implements OnInit {

  public headerTitles: Array<any> = [
    {
      title: 'ID',
      cssClass: ''
    },
    {
      title: 'Empresa',
      cssClass: 'company-title'
    },
    {
      title: 'Plano',
      cssClass: ''
    },
    {
      title: 'Tarifa',
      cssClass: ''
    },
    {
      title: 'Minutos',
      cssClass: ''
    },
    {
      title: 'Valor Plano',
      cssClass: ''
    },
    {
      title: 'Data de Adesão',
      cssClass: ''
    },
    {
      title: 'Data de Envio',
      cssClass: ''
    },
    {
      title: 'Ação',
      cssClass: ''
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
