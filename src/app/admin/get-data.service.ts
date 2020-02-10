import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { Config } from "@ionic/angular/dist";

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  config: Config;
  configUrl: any; // The ConfigService fetches this file with a get() method on HttpClient.
  
  hades: any = [];
malek = "https://api.npoint.io/ae1334a31d62c7f9fa61";
Ahmed = "https://api.npoint.io/66f908e1fcd0bae217c1";
bo5ary ="https://api.npoint.io/40ee131ca1c64b0b335c";
muslim = "https://api.npoint.io/4203f11d80f7dd414ded" ;
termazi = "https://api.npoint.io/b5883fdbe0187940cd46";
Dramy ="https://api.npoint.io/df27514cf9a8cc1d59a8";
Dawwd = "https://api.npoint.io/9c744b55c6e59c405a1b";
maga = "https://api.npoint.io/c8b9d7ba4fed23180495";
abn_maga = "https://api.npoint.io/f333e4f964f783729dee";
  constructor(public storage: Storage,private http: HttpClient) { }

  getConfig(type) {
    return this.http.get(this.configUrl);
  }

   getConfigResponse(type) {
    if(type == this.malek){
      return this.storage.get('malek');
    }

    if(type == this.Ahmed){
      return this.storage.get('Ahmed');
    }

    if(type == this.bo5ary){
      return this.storage.get('bo5ary');
    }

    if(type == this.muslim){
      return this.storage.get('muslim');
    }

    if(type == this.Dawwd){
      return this.storage.get('Dawwd');
    }

    if(type == this.Dramy){
      return this.storage.get('Dramy');
    }

    if(type == this.termazi){
      return this.storage.get('termazi');
    }


    if(type == this.maga){
      return this.storage.get('maga');
    }


    if(type == this.abn_maga){
      return this.storage.get('abn maga');
    }
    else {
      return this.http.get<Config>(
      this.configUrl, { observe: 'response' }).toPromise();
  }}


  
async saveHades(hadeses, type) {
    

        //     "موطأ الإمام مالك" 


        if(type== this.malek&& await this.storage.get('malek')==null) {
          this.hades = hadeses;
        this.storage.set('malek', this.hades);
          console.log(this.hades);
        
      }      

// "مسند احمد ابن حنبل"


if(type==this.Ahmed && await this.storage.get('Ahmed')==null) {
  this.hades = hadeses;
         this.storage.set('Ahmed', this.hades);
           console.log(this.hades);
         
       }   
       
       //

       //     "صحيح البخاري"


       if(type== this.bo5ary && await this.storage.get('bo5ary')==null) {
        this.hades = hadeses;
               this.storage.set('bo5ary', this.hades);
                 console.log(this.hades);
               
             }      
       
       // صحيح مسلم"
       
       
       if(type==this.muslim&& await this.storage.get('muslim')==null) {
        this.hades = hadeses;
                this.storage.set('muslim', this.hades);
                  console.log(this.hades);
                
              }   
              
              //


              //     "سنن أبي داود"


        if(type==this.Dawwd && await this.storage.get('Dawwd')==null) {
          this.hades = hadeses;
                 this.storage.set('Dawwd', this.hades);
                   console.log(this.hades);
                 
               }      
         
         // "سنن الدارمي"
         
         
         if(type==this.Dramy && await this.storage.get('Dramy')==null) {
          this.hades = hadeses;
                  this.storage.set('Dramy', this.hades);
                    console.log(this.hades);
                  
                }   
                
                //




                //     "سنن الترمذي" 


        if(type==this.termazi && await this.storage.get('termazi')==null) {
          this.hades = hadeses;
                 this.storage.set('termazi', this.hades);
                   console.log(this.hades);
                 
               }      
         
         // "سنن ابن ماجه"
         
         
         if(type==this.maga && await this.storage.get('maga')==null) {
          this.hades = hadeses;
                  this.storage.set('maga', this.hades);
                    console.log(this.hades);
                  
                }   
                
                //



                //     "سُنن ابن ماجه"


        if(type==this.abn_maga && await this.storage.get('abn maga')==null) {
          this.hades = hadeses;
                 this.storage.set('abn maga', this.hades);
                   console.log(this.hades);
                 
               }      
         
    

      

        return this.hades;
      }

      async getAllHades(type, hades) {
    
        let count = 0;
        let temp = hades;
        let temp2: any = [];
        temp.forEach(element => {
          if (temp[count].ta === type) {
            temp2.push(temp[count]);
            // console.log('hades ' + temp[count].tit);
          }
          count++;
        });
        return temp2;
    
      }
      gethades(title: string) {
        let count = 0;
        let hade: any = [];
        let temp;
        return this.storage.get('Hades').then((hades) => {
          this.hades.forEach(element => {
    
            hade.push(element);
            //  console.log(title);
    
            if (title === hade[count].tit) {
              temp = hade[count];
    
            }
            count += 1;
    
          });
          // console.log(temp);
          return temp;
        });
        
          }

}
export class Singelton {
  private static instance: Singelton;
  hades: any = [];
  public static getInstance(): Singelton {
    if (!Singelton.instance) {
      Singelton.instance = new Singelton();
    }
    return Singelton.instance;
  }

  saveHades(data){
  
      this.hades.push(data);
      return this.hades;
  }
}