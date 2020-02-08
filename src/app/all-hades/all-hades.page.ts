import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService, Singelton } from 'src/app/admin/get-data.service';
import { pages } from '../pages';
import { Platform } from "@ionic/angular";
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-all-hades',
  templateUrl: './all-hades.page.html',
  styleUrls: ['./all-hades.page.scss'],
})
export class AllHadesPage implements OnInit {
  infiniteScroll: any;

  Temp: any = [];
  hadeses: any = [];
  hades;

  constructor(private router: Router,
    private route: ActivatedRoute,
    public storage: GetDataService,
    private cdr: ChangeDetectorRef,
    protected getDataService: GetDataService,
    private admobFree: AdMobFree,
    public platform: Platform
  ) { }

  ngOnInit() {
    this.route
      .paramMap
      .subscribe(async  data => {
        this.hades = data.get('hades');
        this.cdr.detectChanges()
        this.getDataService.configUrl = pages[this.hades][0]
        let res = await this.getDataService.getConfigResponse().toPromise();
        this.hadeses = res.body;
      });


  }

  ionViewWillEnter() {
    if(this.platform.is('cordova')){
    const bannerConfig: AdMobFreeBannerConfig = {
      id :'ca-app-pub-7155090574313106/5706569080' ,
      // for the sake of this example we will just use the test config
      isTesting: false,
      autoShow: true,
     };
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.banner.prepare() .then(() => {
    // banner Ad is ready
    // if we set autoShow to false, then we will need to call the show method here
  })
  .catch(e => console.log(e));
  
    }
  }

// infite scroll code 
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll

       //error becouse data not defined 
       
      // if (data.length == 1000) {
      //   event.target.disabled = true;
      // }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }







  
  gethades(text: string) {

      this.router.navigate(['view-hades', { text : text}]);


  }

}
