import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ExcuteService } from 'src/app/service/excute.service';
import { SettingService } from '../../service/setting.service';

@Component({
  selector: 'setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  @Output() currentSelectedTheNumberOfDoors = new EventEmitter<number>();

  // 扉の数の選択肢
  public theNumberOfDoors: any[] = [];
  // 設定中の扉の数
  public selectedTheNumberOfDoors: any = this.settingService.defaultTheNumberOfDoors;
  // 試行回数
  public numberOfTrials: number;
  // 扉変更モード
  public changeDoorMode: boolean;
  // オートリセットモード
  public autoResetMode: boolean;
  // ドアの中身を知るモード
  public cheatingMode: boolean;
  // 英語モード
  public englishMode: boolean;

  // コンストラクタ
  constructor(
    private settingService: SettingService,
    private excuteService: ExcuteService) { }

  /**
   * 初期化
   * @param /
   */
  ngOnInit() {
    this.theNumberOfDoors = this.settingService.theNumberOfDoors;
    this.changeDoorMode = this.settingService.changeDoorMode;
    this.autoResetMode = this.settingService.autoResetMode;
    this.cheatingMode = this.settingService.cheatingMode;
    this.numberOfTrials = this.settingService.numberOfTrials;
    this.englishMode = this.settingService.englishMode;
  }

  /**click
   * 自動モード切替
   * @param /
   */
  public autoMode() {
    this.settingService.changeAutoMode();
  }

  /**click
   * 手動モード切替
   *
   */
  public manualMode() {
    this.settingService.changeManualMode();
  }

  /**click
   * 選択されている扉の数を取得
   * @param theNumberOfDoor 扉の数
   */
  public select(event, theNumberOfDoor) {
    if (event.source.selected) {
      this.selectedTheNumberOfDoors = theNumberOfDoor;
      this.settingService.selectedTheNumberOfDoors = this.selectedTheNumberOfDoors;

      if (this.settingService.manual) {
        // disabledになっている扉があれば解除する
        const el = document.querySelectorAll('.button');
        el.forEach((node) => {
          node.removeAttribute('disabled');
        });
        // confirmを表示させるようリセット
        this.excuteService.confirmChange = false;
      }

      this.currentSelectedTheNumberOfDoors.emit(this.selectedTheNumberOfDoors);
    }
  }

  /**input
   * 試行回数の入力
   * @param /event
   */
  public enterNumberOfTrials(event) {
    this.settingService.saveNumberOfTrials(event.target.value);
  }

  /**change
   * 扉変更スイッチを入れ替える
   * @param /
   */
  public toggleChangeDoorMode() {
    this.changeDoorMode = !this.changeDoorMode;
    this.settingService.saveChangeDoors(this.changeDoorMode);
  }

  /**change
   * リセットスイッチを入れ替える
   * @param /
   */
  public toggleAutoResetMode() {
    this.autoResetMode = !this.autoResetMode;
    this.settingService.saveAutoReset(this.autoResetMode);
  }

  /**change
   * リセットスイッチを入れ替える
   * @param /
   */
  public toggleCheatingMode() {
    this.cheatingMode = !this.cheatingMode;
    this.settingService.saveCheatingMode(this.cheatingMode);
  }

  /**click
   * 言語スイッチを入れ替える
   * @param /
   */
  public changeLanguageMode() {
    this.englishMode = !this.englishMode;
    this.settingService.englishMode = this.englishMode;
  }

}
