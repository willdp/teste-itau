import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItauHeaderComponent } from './itau-header/itau-header.component';
import { AddComponentComponent } from './add-component/add-component.component';
import { AddFieldComponentComponent } from './add-component/add-field-component/add-field-component.component';
import { SolicitationsComponentComponent } from './solicitations-component/solicitations-component.component';
import { SolicitationRowComponentComponent } from './solicitations-component/solicitation-row-component/solicitation-row-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SolicitationsService } from './solicitations-component/solicitation-row-component/solicitation-row-service';

@NgModule({
  declarations: [
    AppComponent,
    ItauHeaderComponent,
    AddComponentComponent,
    AddFieldComponentComponent,
    SolicitationsComponentComponent,
    SolicitationRowComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SolicitationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
