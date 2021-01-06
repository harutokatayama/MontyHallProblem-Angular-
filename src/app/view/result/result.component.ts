import { Component } from '@angular/core';
import { ExcuteService } from 'src/app/service/excute.service';
import { SettingService } from 'src/app/service/setting.service';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  constructor(
    // HTMLの表示で使用
    private settingService: SettingService,
    private excuteService: ExcuteService,
  ) { }

 /**click
  * カウントをリセット
  * @param /
  */
  public countReset() {
    this.initCount();
  }

 /**
  * カウント初期化
  * @param /
  */
  public initCount() {
    // サービスの値を初期化
    this.excuteService.excuteCount = 0;
    this.excuteService.winCount = 0;
    this.excuteService.lostCount = 0;
    this.excuteService.winRate = 0;
  }

}
