import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private http: HttpClient
  ) { }


  consultar(nome) {
    return this.http.get("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/consultar/" + nome);
  }

  incluir(produto: Produto) {
    return this.http.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/incluir", produto)
  }
  
  /* chamaremos um webservice que sera o metodo pra excluir o produto, pode ser post ou delet, mas como ele criou como post, usa assim */
  
  alterar(produto: Produto) {
    return this.http.patch("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/alterarparcial", produto);
  }
  
  remover(produto: Produto) {
    return this.http.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/remover", produto)
  }
}
