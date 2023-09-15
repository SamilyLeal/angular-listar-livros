import { Component, OnInit } from '@angular/core';
import { Livro } from '../models/livro';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {
  livros: Livro[] = [];

  constructor(private livroService: LivroService){}

  ngOnInit(): void {
    this.livroService.getLivros().subscribe(
      {
        next: livros => this.livros = livros
      }
    )
  }
}
