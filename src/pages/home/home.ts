import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslationProvider } from '../../providers/translation/translation';
import { HistoryProvider } from '../../providers/history/history';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public translationResult:string;
  public userInput:string;

  constructor(
    public navCtrl: NavController,
    private translationProvider: TranslationProvider,
    private historyProvider: HistoryProvider
  ) {

  }

  public btnTranslateClicked(userInput:string):void {
    console.log(userInput);

    this.translationProvider.getTranslation(userInput).subscribe(
      (response) => {
        this.translationResult = response.responseData.translatedText;
        this.userInput = userInput;
        console.log(response);

        // save to Storage
        this.historyProvider.saveToStorage(userInput,this.translationResult);
      }
    );
  }

}
