import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editarcliente',
  templateUrl: './editarcliente.component.html',
  styleUrl: './editarcliente.component.css'
})
export class EditarclienteComponent {

  constructor(private rutaactiva:ActivatedRoute){
    console.log(rutaactiva.snapshot.paramMap.get('id'));
  }

  obtenerId(){}

}
