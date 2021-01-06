# MontyHallProblem
<br>
このプロジェクトを用いて、モンティホール問題が、実際にどのような結果になるのかを、様々な条件のもと、確認することができます。
<br>
<br>
このプロジェクトは [Angular CLI](https://github.com/angular/angular-cli) version 8.3.29 によって作成されました。
<br>
<br>

## issues
<br>
・扉の数をクリックではなくエンターで変更した際に、見た目が変わらない不具合の対応
<br>
<br>
<br>

## 環境構築
<br>
Node.js/npmをインストールする(`http://nodejs.org/`)。
<br>
npm installを用いて、Angular Cliをインストールする(`/monty-hall-problem`ディレクトリにて`npm install @angular/cli`を実行する)。
<br>
npm installを用いて、Angular Materialをインストールする(`/monty-hall-problem`ディレクトリにて`npm install @angular/material@8.2.3`を実行する)。
<br>
`npm install`を`/monty-hall-problem`ディレクトリにて実行する。
<br>
プロジェクトの`\monty-hall-problem`ディレクトリ内で`ng serve`を実行することで、 `http://localhost:4200/`にアクセスできるようになります。
<br>

<br>

## How to use
<br>

### Top
<br>

#### PLAYボタン
Main画面に遷移する。
<br>
<br>
### Main(Head)
<br>
#### Monty Hall Problem/モンティホール問題
Top画面に遷移する。
<br>
#### About Monty Hall Problem button/モンティホール問題とは
Monty Hall ProblemのWikiに遷移する(英語モードなら英語のWikiに、日本語モードなら日本語のWikiにそれぞれ遷移する)。
<br>
<br>
### Main(Setting/設定)
<br>
#### Japanese/英語 ボタン
アプリの言語を日本語/英語に切り替える。
<br>
#### Auto Mode/オートモード ボタン
オートモードに切り替える(デフォルト)。
<br>
#### Manual Mode/マニュアルモード ボタン
マニュアルモードに切り替える。
<br>
#### The Number of Doors/扉の数
ドアの数を選択する(デフォルト: 3)。
3, 5, 10が選択可能となっている。
<br>
#### The Number of Excute/試行回数
オートモードの際に、何回ドアを開けるかを入力する(デフォルト: 100)。
<br>
#### change door/扉を変更する
オートモードの際に、毎回、ドアを選択後に変更するかの設定を行う(デフォルト: オン)。
<br>
#### reset results/結果をリセットする
オートモードの際に、実行するたびに実行結果を上書きするかの設定を行う(デフォルト: オフ)。
<br>
#### cheating toggle/ドアの中身を表示
ドアのアタリ/ハズレを視覚化する(デフォルト: オフ)。
<br>
<br>
### Main(Doors/扉)
<br>
#### Door ボタン
マニュアルモードの際に、クリックすることでドアを開ける。
<br>
#### Auto Excute/自動実行する ボタン
オートモードの際に、The Number of trialsの数、実行する。
<br>
<br>
### Main(Result/結果)
<br>
#### ExcuteCount/実行回数
ドアを開けた回数を表示する。
<br>
#### WinCount/アタリを引いた回数
アタリのドアを開いた回数を表示する。
<br>
#### LostCount/ハズレを引いた回数
ハズレのドアを開いた回数を表示する。
<br>
#### WinRate/勝率
アタリのドアを引いた割合(%)を表示する。
<br>
#### Reset/リセット ボタン
Result/結果を初期化する。