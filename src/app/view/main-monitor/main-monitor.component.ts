import { Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/service/setting.service';
import { ExcuteService } from 'src/app/service/excute.service';

@Component({
  selector: 'main-monitor',
  templateUrl: './main-monitor.component.html',
  styleUrls: ['./main-monitor.component.css']
})
export class MainMonitorComponent implements OnInit {
  //扉
  public doors: any[];
  //生成する扉の数
  public theNubmerOfDoor: number = this.settingService.defaultTheNumberOfDoors;

  constructor(
    private settingService: SettingService, 
    private excuteService: ExcuteService) { }

  /**
   *初期化
   * @param 
   */
  ngOnInit() {
    //初期化
    this.onInit();
  }

  /**
   *初期化
   * @param 
   */
  public onInit() {
    //ランダムに扉を作成
    this.createDoors(this.theNubmerOfDoor);
  }

  /**
   *扉を作成
   * @param numberOfDoors 扉の数
   */
  public createDoors(numberOfDoors) {
    //配列の初期化
    this.doors = new Array(numberOfDoors);
    //配列doorsのランダムなインデックスwinDoorを生成
    let winDoor = Math.floor(Math.random()*this.doors.length);
    //配列[winDoor]に'Win'を追加
    this.doors.splice(winDoor, 1, 'Win');
  }

  /**click
   *戻るボタン 戻るを押した際に初期化
   * @param 
   */　
  public backButton() {
    this.settingService.auto = true;
    this.settingService.manual = false;
    this.settingService.numberOfTrials = 100;
    this.settingService.changeDoorMode = true;
    this.settingService.autoResetMode = false;
    this.settingService.englishMode = true;
    this.settingService.cheatingMode = false;
    this.excuteService.excuteCount = 0;
    this.excuteService.winCount = 0;
    this.excuteService.lostCount = 0;
    this.excuteService.winRate = 0;
    this.excuteService.confirmChangeDoorFlag = false;
    this.excuteService.confirmChange = false;
    this.excuteService.countable = false;
  }

  /**click
   *扉を開ける
   * @param i 選択した扉
   */
  async openTheDoor(i) {
    if (!this.settingService.manual) return;
    
    await this.excuteService.openTheDoor(i, this.doors);

    //扉を変更する? ->Yesのときのみ、扉の位置を変えない
    if(!this.excuteService.confirmChangeDoorFlag && !this.settingService.auto) {
      this.createDoors(this.theNubmerOfDoor);
    }
  }

  /**click
   *自動で扉を開ける
   * @param 
   */
  public autoExcute() {
    if(!this.settingService.auto) return;

    //もしリセットモードになっているならカウント初期化
    if(this.settingService.autoResetMode) {
      this.initCount();
    }
    //試行回数を取得
    let i = this.settingService.numberOfTrials;
    //扉変更モードなら
    if(this.settingService.changeDoorMode) {
      let randomDoor = Math.floor(Math.random()*this.doors.length);
      for(i; i > 0; i--) {
        this.excuteService.excuteCount += 1;
        if(this.doors[randomDoor] === 'Win'){
          //Winでないランダムな扉をクリックする
          this.excuteService.lostCount += 1;
        } else {
          this.excuteService.winCount += 1;
        }
        this.onInit();
      }
      this.excuteService.afterAutoOpen();
    } else {
      //配列doorsのいずれかのインデックスをランダム生成
      for(i; i > 0; i--) {
        let randomDoor = Math.floor(Math.random()*this.doors.length);
        this.excuteService.excuteCount += 1;
        //ランダムに扉を開閉
        if(this.doors[randomDoor] === 'Win') {
          this.excuteService.winCount += 1;
        } else {
          this.excuteService.lostCount += 1;
        }
      }
      this.excuteService.afterAutoOpen();
    }
  }

  /**
  *カウント初期化
  * @param 
  */
  public initCount() {
    //サービスの値を初期化
    this.excuteService.excuteCount = 0;
    this.excuteService.winCount = 0;
    this.excuteService.lostCount = 0;
    this.excuteService.winRate = 0;
  }

  /**
   *子コンポーネントの扉の数の設定の反映
   * @param event
   */
  public getCurrentSelectedTheNumberOfDoors(theNubmerOfDoor) {
    this.theNubmerOfDoor = theNubmerOfDoor
    this.createDoors(this.theNubmerOfDoor);
  }

}
