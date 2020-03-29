import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ProdutoComponent } from './produto/produto.component';
import { ClienteComponent } from './cliente/cliente.component';
import { VendasComponent } from './vendas/vendas.component';
import { VendasmanterComponent } from './vendas/vendasmanter/vendasmanter.component';
import { ClientemanterComponent } from './cliente/clientemanter/clientemanter.component';
import { ProdutomanterComponent } from './produto/produtomanter/produtomanter.component';
import { ClienteService } from './cliente/servico/cliente.service';
import { ProdutoService } from './produto/servico/produto.service';
import { VendasService } from './vendas/servico/vendas.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProdutoComponent,
    ClienteComponent,
    VendasComponent,
    VendasmanterComponent,
    ClientemanterComponent,
    ProdutomanterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ClienteService,
    ProdutoService,
    VendasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
