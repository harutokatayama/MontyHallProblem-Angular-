# MontyHallProblem
<br>
このプロジェクトを用いて、モンティホール問題が、実際にどのような結果になるのかを、様々な条件のもと、確認することができます。


このプロジェクトは [Angular CLI](https://github.com/angular/angular-cli) version 8.3.29 によって作成されました。



## issues

・扉の数をクリックではなくエンターで変更した際に、見た目が変わらない不具合の対応




## 環境構築

Node.js/npmをインストールする(`http://nodejs.org/`)。



npm installを用いて、Angular Cliをインストールする(`/monty-hall-problem`ディレクトリにて`npm install @angular/cli`を実行する)。



npm installを用いて、Angular Materialをインストールする(`/monty-hall-problem`ディレクトリにて`npm install @angular/material@8.2.3`を実行する)。



`npm install`を`/monty-hall-problem`ディレクトリにて実行する。



プロジェクトの`\monty-hall-problem`ディレクトリ内で`ng serve`を実行することで、 `http://localhost:4200/`にアクセスできるようになります。





## How to use



### Top

#### PLAYボタン
Main画面に遷移する。





### Main(Head)



#### Monty Hall Problem/モンティホール問題
Top画面に遷移する。



#### About Monty Hall Problem button/モンティホール問題とは
Monty Hall ProblemのWikiに遷移する(英語モードなら英語のWikiに、日本語モードなら日本語のWikiにそれぞれ遷移する)。





### Main(Setting/設定)



#### Japanese/英語 ボタン
アプリの言語を日本語/英語に切り替える。



#### Auto Mode/オートモード ボタン
オートモードに切り替える(デフォルト)。



#### Manual Mode/マニュアルモード ボタン
マニュアルモードに切り替える。



#### The Number of Doors/扉の数
ドアの数を選択する(デフォルト: 3)。
3, 5, 10が選択可能となっている。



#### The Number of Excute/試行回数
オートモードの際に、何回ドアを開けるかを入力する(デフォルト: 100)。



#### change door/扉を変更する
オートモードの際に、毎回、ドアを選択後に変更するかの設定を行う(デフォルト: オン)。



#### reset results/結果をリセットする
オートモードの際に、実行するたびに実行結果を上書きするかの設定を行う(デフォルト: オフ)。



#### cheating toggle/ドアの中身を表示
ドアのアタリ/ハズレを視覚化する(デフォルト: オフ)。






### Main(Doors/扉)

#### Door ボタン
マニュアルモードの際に、クリックすることでドアを開ける。



#### Auto Excute/自動実行する ボタン
オートモードの際に、The Number of trialsの数、実行する。





### Main(Result/結果)



#### ExcuteCount/実行回数
ドアを開けた回数を表示する。



#### WinCount/アタリを引いた回数
アタリのドアを開いた回数を表示する。



#### LostCount/ハズレを引いた回数
ハズレのドアを開いた回数を表示する。



#### WinRate/勝率
アタリのドアを引いた割合(%)を表示する。



#### Reset/リセット ボタン
Result/結果を初期化する。

