import { Injectable } from '@angular/core';
import { Cliente } from './models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes:Cliente[]=[];
  
  constructor( ) { }

  Agrear(nuevocliente:Cliente){
    this.clientes.push(nuevocliente);
    console.log(this.clientes);
    
  }


}


