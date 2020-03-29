import { Component, OnInit } from '@angular/core';
import { Vendas } from '../servico/vendas';
import { VendasProduto } from '../servico/vendasProduto';
import { Cliente } from 'src/app/cliente/servico/cliente';
import { Produto } from 'src/app/produto/servico/produto';
import { Router, ActivatedRoute } from '@angular/router';
import { VendasService } from '../servico/vendas.service';
import { ClienteService } from 'src/app/cliente/servico/cliente.service';
import { ProdutoService } from 'src/app/produto/servico/produto.service';

@Component({
  selector: 'app-vendasmanter',
  templateUrl: './vendasmanter.component.html',
  styleUrls: ['./vendasmanter.component.css']
})
export class VendasmanterComponent implements OnInit {

  operacao: string = 'Incluir';
  vendas: Vendas = new Vendas();
  cliente: Cliente;
  vendasProduto: VendasProduto = new VendasProduto();
  vendasComId: string;

  listaCliente: Cliente[] = [];
  listaProduto: Produto[] = [];

  constructor(
    private router: Router,
    private vendasService: VendasService,
    private produtoService: ProdutoService,
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.vendasComId = this.activatedRoute.snapshot.params.id;

    if (this.vendasComId != null) {
      this.vendasService.consultar(this.vendasComId).subscribe(
        retorno => {
          this.vendas.cliente = retorno[0].cliente.codigo;
        }
      )
    }

    this.clienteService.consultar('').subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;
      }
    );

    this.produtoService.consultar('').subscribe(
      data => {
        this.listaProduto = <Produto[]>data;
      }
    );
  }

  voltar() {
    this.router.navigate(['/vendas']);
  }

  incluir() {
    console.log(this.vendas);
    this.vendasService.incluir(this.vendas).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/vendas']);
      }
    );
  }

  adicionar() {
    this.vendas.listaVendasProduto.push(this.vendasProduto);
    this.vendasProduto = new VendasProduto();
  }

  removerproduto(vendasProduto) {
    this.vendas.listaVendasProduto = this.vendas.listaVendasProduto.filter(obj => obj !== vendasProduto);
  }
}

