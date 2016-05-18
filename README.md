esa-charge-manage-slack
===

> esa.ioの利用料金管理をSlack上で行えるやつです。

> 毎月の料金を管理者に支払ったときに, さくっとコマンドを打ち込んで下さい。

## Usage(Command)

すべてのコマンドはSlack上の全てのチャンネルで, 利用できます。
最初に`esa: `を付けて, 続けてコマンドを入力してください。



#### `esa: pay [month] ` 

- `esa: pay 5` ：支払いを記録する
  
  [![https://gyazo.com/c96caadbb61573ebf99acf02b6f5ac33](https://i.gyazo.com/c96caadbb61573ebf99acf02b6f5ac33.png)](https://gyazo.com/c96caadbb61573ebf99acf02b6f5ac33)
  
#### `esa: unpay [month]`

- `esa: unpay 5`: 支払いを取り消す
  
  [![https://gyazo.com/911578a80607dda26c9c357bc7f91b64](https://i.gyazo.com/911578a80607dda26c9c357bc7f91b64.png)](https://gyazo.com/911578a80607dda26c9c357bc7f91b64)
  
#### `esa: check [month]`

- `esa: check 5`: 支払状況を確認する
  
  [![https://gyazo.com/247091baad00f8ced1b985f0ccd84753](https://i.gyazo.com/247091baad00f8ced1b985f0ccd84753.png)](https://gyazo.com/247091baad00f8ced1b985f0ccd84753)
  
#### `esa: all [month]`

- `esa: all 5`: メンバー全員の支払状況サマリーを確認する
  
  [![https://gyazo.com/2e67b3511c4e52b413848714036cc15c](https://i.gyazo.com/2e67b3511c4e52b413848714036cc15c.png)](https://gyazo.com/2e67b3511c4e52b413848714036cc15c)
  
#### `esa: help`

- `esa: help`: ヘルプを参照する

  [![https://gyazo.com/df5b572dcb3c83a1b2c5e7c4c9483a60](https://i.gyazo.com/df5b572dcb3c83a1b2c5e7c4c9483a60.png)](https://gyazo.com/df5b572dcb3c83a1b2c5e7c4c9483a60)

### 毎月末のリマインド

- 毎月末に支払状況サマリーと, 結果に応じてリマインドを行います

  ![https://gyazo.com/0c846fc11c4922777e883307669473bc](https://i.gyazo.com/0c846fc11c4922777e883307669473bc.png)
  
### adminユーザへの通知

- メンバーが支払記録コマンド`pay`を実行すると, adminユーザへダイレクトメッセージで通知します。
  - 間違いが生じていないか, 管理ユーザに確認させるための通知。
  
   ![https://gyazo.com/4d1ed698bb83d417e98fcb3effb9fbb1](https://i.gyazo.com/4d1ed698bb83d417e98fcb3effb9fbb1.png)
  
## AUTHOR

konnobu \<dra.mixx.nico@gmail.com\>
  





