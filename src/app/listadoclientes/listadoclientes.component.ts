import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-listadoclientes',
  templateUrl: './listadoclientes.component.html',
  styleUrl: './listadoclientes.component.css'
})
export class ListadoclientesComponent {

  clientes:any[]=[];
  
  constructor(private clienteservice:ClienteService){}

  ngOnInit(): void {
    this.clientes=this.clienteservice.clientes;   
  }


  

}
