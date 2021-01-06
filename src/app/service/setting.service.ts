import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  // 自動モード
  public auto = true;
  // 手動モード
  public manual = false;
  // 扉の数の選択肢
  public theNumberOfDoors: any[] = [3, 5, 10];
  // 設定中の扉の数
  public selectedTheNumberOfDoors: number;
  // 試行回数
  public numberOfTrials = 100;
  // デフォルトの扉の数
  public defaultTheNumberOfDoors: number = this.theNumberOfDoors[0];
  // 現在設定中の試行回数
  public selectedNumberOfTrials: number;
  // ハズレの扉が開閉された後に開ける扉を変更するかどうか
  public changeDoorMode = true;
  // オート実行するたびに、値をリセットするか
  public autoResetMode = false;
  // 扉の中身を表示するか否か
  public cheatingMode = false;
  // 英語モード
  public englishMode = true;
  // excute.serviceの確認フラグを反映
  public confirmFlag = false;

  constructor() {}

  /**
   * オートモードの反映
   * @param /
   */
  public changeAutoMode() {
    this.auto = true;
    this.manual = false;
  }

  /**
   * 手動モードの反映
   * @param /
   */
  public changeManualMode() {
    this.auto = false;
    this.manual = true;
  }

  /**
   * 試行回数の反映
   * @param /num
   */
  public saveNumberOfTrials(num) {
    this.numberOfTrials = num;
  }

  /**
   * 扉変更モードの反映
   * @param /changeDoor
   */
  public saveChangeDoors(changeDoor) {
    this.changeDoorMode = changeDoor;
  }

  /**
   * リセットモードの反映
   * @param /autoReset
   */
  public saveAutoReset(autoReset) {
    this.autoResetMode = autoReset;
  }

  /**
   * //扉の中身を表示するか隠すかモード
   * @param /cheatingMode
   */
  public saveCheatingMode(cheatingMode) {
    this.cheatingMode = cheatingMode;
  }

}
