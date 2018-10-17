import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslationProvider } from '../../providers/translation/translation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private translationProvider: TranslationProvider
  ) {

  }

  public btnTranslateClicked(userInput:string):void {
    console.log(userInput);

    this.translationProvider.getTranslation(userInput).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

}
