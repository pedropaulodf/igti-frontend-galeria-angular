import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galeria-component',
  templateUrl: './galeria-component.component.html',
  styleUrls: ['./galeria-component.component.css']
})
export class GaleriaComponentComponent {


  @Input() titulo: string;
  @Input() fotos: string[];

  fotoAtual: number = 0;

  primeiraFoto(){
    this.fotoAtual = 0;
  }
  ultimaFoto(){
    this.fotoAtual = this.fotos.length -1;
  }
  fotoAnterior(){
    if (this.fotoAtual > 0) {
      --this.fotoAtual;
    }
  }
  fotoSeguinte(){
    if (this.fotoAtual < this.fotos.length -1) {
      ++this.fotoAtual; 
    }
  }


}
