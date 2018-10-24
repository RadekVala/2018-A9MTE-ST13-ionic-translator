import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslationProvider } from '../../providers/translation/translation';
import { HistoryProvider } from '../../providers/history/history';
import { TextToSpeech } from '@ionic-native/text-to-speech';

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
    private historyProvider: HistoryProvider,
    private tts:TextToSpeech
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

        // speak the result
        this.tts.speak(this.translationResult)
        .then(() => console.log('Success'))
        .catch((reason: any) => console.log(reason));
      }
    );
  }

}
