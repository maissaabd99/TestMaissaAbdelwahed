import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';
formatDate(new Date(), 'yyyy/MM/dd', 'en');
@Component({
  selector: 'app-meubles-list',
  templateUrl: './meubles-list.component.html',
  styleUrls: ['./meubles-list.component.css']
})

export class MeublesListComponent implements OnInit {
   meubles=[
     {libelle:'table', img:'../assets/table.jpg', prixTTC:47 , neuf:true},
     {libelle:'armoire', img:'../assets/armoire.jpg', prixTTC:258.5 , neuf:false},
     {libelle:'fauteuil', img:'../assets/fauteuil.jpg', prixTTC:113.8 , neuf:true}
    ];
    etat=['neuf','occasionnel'];
    val="neuf";
  constructor() { }

  ngOnInit() {
  }

}
