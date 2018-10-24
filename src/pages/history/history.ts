import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistoryProvider } from '../../providers/history/history';
import { HistoryRecord } from '../../models/history-record';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  public historyArray: Array<HistoryRecord>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private historyProvider: HistoryProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
    this.historyArray = this.historyProvider.getFromStorage();
    console.log(this.historyArray);
  }

}
