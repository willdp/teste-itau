import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SolicitationRowComponentComponent } from "./solicitation-row-component.component";
import { SolicitationsService } from "./solicitation-row-service";


@NgModule({
  declarations: [
    SolicitationRowComponentComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule
  ],
  providers: [SolicitationsService],
})
export class AppModule { }