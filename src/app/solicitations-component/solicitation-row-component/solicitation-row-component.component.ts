import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SolicitationsService } from './solicitation-row-service';

@Component({
  selector: 'app-solicitation-row-component',
  templateUrl: './solicitation-row-component.component.html',
  styleUrls: ['./solicitation-row-component.component.scss']
})
export class SolicitationRowComponentComponent implements OnInit {

public solicitationsArray: any;

  constructor(private solicitationService: SolicitationsService) { }

  ngOnInit(): void {
    this.getSolicitations()
  }

  getSolicitations() {
    this.solicitationService.getSolicitations().subscribe(
      (solicitations: any) => {
        this.solicitationsArray = solicitations
      }
    )
  }
}
