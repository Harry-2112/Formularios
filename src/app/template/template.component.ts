import { Component } from '@angular/core';
interface ContactForm
{
  "name": string,
  "EsAdulto": boolean,
  "departamento": string,
  "comentario": string
}

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  model= {
    name: '',
    EsAdulto: false,
    departamento: '',
    comentario: ''
  }

  onSubmit(values:any){
    console.log("values:",values);

  }
}
