import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AddFieldComponentComponent } from "./add-field-component.component";


@NgModule({
  declarations: [
    AddFieldComponentComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule
  ],
  providers: [],
})
export class AppModule { }