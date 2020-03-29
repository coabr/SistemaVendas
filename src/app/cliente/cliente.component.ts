import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from './servico/cliente';
import { ClienteService } from './servico/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  selecionado: Cliente;
  
  listaCliente: Cliente[] = [];

  constructor(
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.consultar();
  }
  
  consultar() {
    this.clienteService.consultar(this.cliente.nome).subscribe(
      (retorno: Cliente[]) => {
        this.listaCliente = retorno;
      }
    );
  }

  incluir() {
    this.router.navigate(['/cliente/incluir']);
  }

  selecionar(valor) {
    this.selecionado = valor;
  }
  
  remover() {
    this.clienteService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );
  }  

  alterar() {
    this.router.navigate(['/cliente/alterar/' + this.selecionado.nome]);
  }  

}
