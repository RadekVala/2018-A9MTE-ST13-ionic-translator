
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HistoryRecord } from '../../models/history-record';

/*
  Generated class for the HistoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoryProvider {

  private historyArray:Array<HistoryRecord> = [];

  constructor(private storage:Storage) {
    console.log('Hello HistoryProvider Provider');
  }

  public saveToStorage(from:string, to:string):void{
    // create new item of HistoryRecord
    let record = new HistoryRecord(from, to);
    // pust one record to history array
    this.historyArray.push(record);
    // save temporary historyArray to Storage
    this.storage.set('history',JSON.stringify(this.historyArray));
  }
}
