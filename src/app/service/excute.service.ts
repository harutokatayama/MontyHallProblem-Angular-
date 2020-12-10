import { Injectable } from '@angular/core';
import { SettingService } from './setting.service';

@Injectable({
  providedIn: 'root'
})
export class ExcuteService{
  //実行回数　初期値0
  public excuteCount: number = 0;
  //アタリを引いた回数　初期値0
  public winCount: number = 0;
  //ハズレを引いた回数　初期値0
  public lostCount: number = 0;
  //勝率　初期値0
  public winRate: number = 0;
  //扉を変更するか否かのconfirm　Yes or Not
  public confirmChangeDoorFlag: boolean = false;
  //扉を変更すると選択
  public confirmChange: boolean = false;
  //カウントできるかどうか判断
  public countable: boolean = false;

  constructor(
    private settingService: SettingService
  ) { }

  /**
   * 扉を変更するかの確認
   * @param i クリックした扉のインデックス
   * @param doors 現在の扉の配列
   */
  async openTheDoor(i, doors) {
    //扉にdisabled属性を付与
    this.disabledDoors(i, doors);
    //confirmを表示させるか、カウントさせるか、disabled属性を消すか判断
    this.showConfirmOrNot();
    //confrim呼び出し
    await this.confirmChangeDoorOrNot();
    //カウントの反映
    this.countResult(i, doors)
    //disabled属性の削除
    this.removeDisabled();
    //処理の最後に初期化
    this.InitInTheEnd();
  }

  /**
   * 扉にdisabled属性を付与
   * @param 
   */
  public disabledDoors(selectedDoor, doors) {
    let nBox = [];
    //自動モードならdisabled処理を行わない
    if(this.settingService.auto) return;

    for(let n=0; n < doors.length; n++) {
      if(doors[selectedDoor] == 'Win') {
        //ランダムで1つ選択
        let doorNumber = Math.floor(Math.random()*doors.length);
        for(; doorNumber == selectedDoor;) {
          doorNumber = Math.floor(Math.random()*doors.length);
          if(doorNumber != selectedDoor) break;
        }
        let el = document.getElementById(`${doorNumber}`);
        let el2 = document.getElementById(`${selectedDoor}`);
        el.setAttribute('disabled', 'true');
        el2.setAttribute('disabled', 'true');
        break;
        //それがWinでなければ、それとWin以外をdisabled
      }else if(n != selectedDoor && doors[n] != 'Win') {
        let el = document.getElementById(`${n}`);
        let el2 = document.getElementById(`${selectedDoor}`);
        el.setAttribute('disabled', 'true');
        el2.setAttribute('disabled', 'true');
        nBox.push(n);
      }
    }
  }

  /**
   * confirmを表示させるか、カウントさせるか、desabled属性を消すか判断
   * @param 
   */
  public showConfirmOrNot() {
    if(this.settingService.auto) return;
    //扉を変更する? ->Yes　かつ　countableがfalseなら
    if(this.confirmChange && !this.countable) {
    　//confirmを出現させないようにして、カウントできるようにする
      this.countable = !this.countable;
      this.confirmChange = !this.confirmChange;
    }
  }

  /**
   * 扉を変更するかの確認
   * @param 
   */
  public confirmChangeDoorOrNot() {
    //もし扉変更前　かつ　手動モードならconfirmを表示
    if(!this.countable && this.settingService.manual) {
      this.confirmChangeDoorFlag = confirm('残った扉の中で、すべてのハズレの扉を開けて、扉を変更することができます。\nただし、あなたが正解の扉を選んでいる場合、ランダムな扉が開かれます。\n扉を変更しますか？');
      //扉を変更する?->Yesなら扉変更フラグをtrue
      if(this.confirmChangeDoorFlag) {
        this.confirmChange = true;
        this.settingService.confirmFlag = this.confirmChangeDoorFlag;
      //扉を変更する?->Noなら扉変更フラグをfalse
      } else if (!this.confirmChangeDoorFlag) {
        this.confirmChange = false;
      }
    }
  }

  /**
   * カウントを反映
   * @param selectedDoor 選択した扉のインデックス
   * @param doors 現在の扉を配列でもつ
   */
  public countResult(selectedDoor, doors) {
    //扉を変更する? ->No　もしくは　扉を変更する? ->Yesの後に扉を選択なら　
    //自動モードなら問答無用で通す
    if(!this.confirmChange || this.settingService.auto) {

      //実行カウント
      this.excuteCount += 1;

      //アタリかハズレか判断しカウント
      if(selectedDoor === doors.indexOf('Win')) {
        this.winCount += 1;
      } else {
        this.lostCount += 1;
      }
  
      //勝率計算
      if (this.winCount != 0) {
        this.winRate = (this.winCount / this.excuteCount) * 100;
      } else {
        this.winRate = 0;
      }

    }
  }

  /**
   *winRate値を更新
   * @param 
   */
  public afterAutoOpen() {
    this.winRate = (this.winCount / this.excuteCount) * 100;
  }

  /**
   * disabled属性の削除
   * @param 
   */
  public removeDisabled() {
    if(this.settingService.auto) return;

    //扉を変更する? ->No　もしくは　扉を変更する? ->Yesの後に扉を選択なら
    if(!this.confirmChange){
      let el = document.querySelectorAll('.door');
      el.forEach(e => {
        e.removeAttribute('disabled')
      })
    }
  }

  /**
   * 処理の最後に初期化
   * @param 
   */
  public InitInTheEnd() {
    if(this.settingService.auto) return;

    //カウントし終わったなら初期化
    if(!this.confirmChange && this.countable) {
      this.confirmChangeDoorFlag = false;
      this.settingService.confirmFlag = this.confirmChangeDoorFlag;
      this.confirmChange = false;
      this.countable = false;
    }
  }

}
