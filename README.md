esa-charge-manage-slack
===

> esa.ioの利用料金管理をSlack上で行えるやつです。

> 毎月の料金を管理者に支払ったときに, さくっとコマンドを打ち込んで下さい。

## Usage(Command)

すべてのコマンドはSlack上の全てのチャンネルで, 利用できます。
最初に`esa: `を付けて, 続けてコマンドを入力してください。



#### `esa: [month] pay` 

- `esa: 3 pay` ：支払いを記録する
  
  ![https://gyazo.com/16a301ea90cc82e378a4d29af6b301cf](https://i.gyazo.com/16a301ea90cc82e378a4d29af6b301cf.png)
  
#### `esa: [month] unpay`

- `esa: 3 unpay`: 支払いを取り消す
  
  ![https://gyazo.com/58b9b01dc451c6523005054b49f047ac](https://i.gyazo.com/58b9b01dc451c6523005054b49f047ac.png)
  
#### `esa: [month] check`

- `esa: 3 check`: 支払状況を確認する
  
  ![https://gyazo.com/0495e4577e05b21890d30d70668fbf80](https://i.gyazo.com/0495e4577e05b21890d30d70668fbf80.png)
  
#### `esa: [month] all`

- `esa: 3 all`: メンバー全員の支払状況サマリーを確認する
  
  ![https://gyazo.com/f0a812436923d949ad11e090f327ac28](https://i.gyazo.com/f0a812436923d949ad11e090f327ac28.png)
  

### 毎月末のリマインド

- 毎月末に支払状況サマリーと, 結果に応じてリマインドを行います

  ![https://gyazo.com/0c846fc11c4922777e883307669473bc](https://i.gyazo.com/0c846fc11c4922777e883307669473bc.png)
  
### adminユーザへの通知

- メンバーが支払記録コマンド`pay`を実行すると, adminユーザへダイレクトメッセージで通知します。
  - 間違いが生じていないか, 管理ユーザに確認させるための通知。
  
   ![https://gyazo.com/4d1ed698bb83d417e98fcb3effb9fbb1](https://i.gyazo.com/4d1ed698bb83d417e98fcb3effb9fbb1.png)
  
## AUTHOR

konnobu \<dra.mixx.nico@gmail.com\>
  





