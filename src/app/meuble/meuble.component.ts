import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-meuble',
  templateUrl: './meuble.component.html',
  styleUrls: ['./meuble.component.css']
})
export class MeubleComponent implements OnInit {
 @Input() tab : Meuble;val:number;
 calcul(event:any){
   event.target.value=this.tab.prixTTC+(this.tab.prixTTC*15/100);
 }

  constructor() { }

  ngOnInit() {
  }

}

export class Meuble
{
constructor(private _libelle:string, private _img:string , private _prixTTC:number, private _neuf:boolean) {
}
public get libelle(): string {
return this._libelle;
}
public set nlibelle(value: string) {
this._libelle = value;
}
public get img(): string {
return this._img;
}
public set img(value: string) {
this._img = value;
}
public get prixTTC():number {
  return this._prixTTC;
  }
  public set prixTTC(value: number) {
    this._prixTTC = value;
    }

    public get neuf():boolean {
      return this._neuf;
      }
      public set neuf(value: boolean) {
        this._neuf = value;
        }


}
