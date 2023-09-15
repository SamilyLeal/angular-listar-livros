import { Injectable } from '@angular/core';
import { Livro } from './models/livro';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LivroService {

  livros: Livro[] = [];

  constructor(private http: HttpClient) { }

  getLivros(): Observable<Livro[]>{
    return this.http.get<Livro[]>("http://localhost:3000/livros");
  }
}
