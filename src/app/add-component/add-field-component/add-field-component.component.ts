import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'app-add-field-component',
  templateUrl: './add-field-component.component.html',
  styleUrls: ['./add-field-component.component.scss']
})
export class AddFieldComponentComponent implements OnInit {
  public formConfig = [
    {
        title: 'Empresa',
        cssClass: 'forms-company',
        value: ''
    },
    {
        title: 'CNPJ',
        cssClass: '',
        value: '00.000.000/0000-00'
    },
    {
        title: 'Plano',
        cssClass: '',
        value: ''
    },
    {
        title: 'Tarifa',
        cssClass: '',
        value: `R$0,00`
    },
    {
        title: 'Minutos',
        cssClass: '',
        value: `min`
    },
    {
        title: 'Valor do plano',
        cssClass: '',
        value: `R$0,00`
    },
    {
        title: 'Data adesão',
        cssClass: '',
        value: '00/00/0000'
    }
]

  constructor(
      private http: HttpClient,
    ) { }
@Output () arraySolicitation;
public classSelector: string;
public inputArray = [];
public solicitation = {
    ID: 0,
    company: '',
    CNPJ: '',
    plan: '',
    bill: '',
    minutes: '',
    planValue: '',
    joinDate: '',
    sendDate: moment().format("DD/MM/yyyy")
}

  ngOnInit(): void {
      
  }
  
  postSolicitation() {
      this.formConfig.forEach(
          (data) => {
            this.inputArray.push(data.value);
          }
      )
      this.solicitation.ID = this.solicitation.ID + 1;
      this.solicitation.company = this.formConfig[0].value
      this.solicitation.CNPJ = this.formConfig[1].value
      this.solicitation.plan = this.formConfig[2].value
      this.solicitation.bill = this.formConfig[3].value
      this.solicitation.minutes = this.formConfig[4].value
      this.solicitation.planValue = this.formConfig[5].value
      this.solicitation.joinDate = this.formConfig[6].value
      this.http.post('https://agdo-server.appspot.com/solicitacoes', this.solicitation).subscribe()
      location.reload()
  }

}
