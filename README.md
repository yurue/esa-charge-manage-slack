esa-management-slack
===

> esa.ioの利用料金管理をSlack上で行えるやつです。

> 毎月の料金を管理者に支払ったときに, さくっとコマンドを打ち込んで下さい。

## Usage(Command)

すべてのコマンドはSlack上の全てのチャンネルで, 利用できます。
最初に`esa: `を付けて, 続けてコマンドを入力してください。



#### `esa: [month] pay` 

- `esa: 3 pay` ：支払いを記録する
  
  ![https://gyazo.com/f5af685a40cc884ba47dea47bb733ca5](https://i.gyazo.com/f5af685a40cc884ba47dea47bb733ca5.png)
  
#### `esa: [month] unpay`

- `esa: 3 unpay`: 支払いを取り消す
  
  ![https://gyazo.com/989003d533cf23d29d82b420f8ec2012](https://i.gyazo.com/989003d533cf23d29d82b420f8ec2012.png)
  
### `esa: [month] check`

- `esa: 3 check`: 支払状況を確認する
  
  ![https://gyazo.com/157c3ff8b75d94e0406f5a3e8be163a6](https://i.gyazo.com/157c3ff8b75d94e0406f5a3e8be163a6.png)
  
### `esa: [month] all`

- `esa: 3 all`: メンバー全員の支払状況サマリーを確認する
  
  ![https://gyazo.com/5a2085a7ada6b71a6bc79863a67f8b65](https://i.gyazo.com/5a2085a7ada6b71a6bc79863a67f8b65.png)
  

### 毎月末のリマインド

- 毎月末に支払状況サマリーと, 結果に応じてリマインドを行います

  ![https://gyazo.com/0c846fc11c4922777e883307669473bc](https://i.gyazo.com/0c846fc11c4922777e883307669473bc.png)
  
### adminユーザへの通知

- メンバーが支払記録コマンド`pay`を実行すると, adminユーザへダイレクトメッセージで通知します。
  - 間違いが生じていないか, 管理ユーザに確認させるための通知。
  
   ![https://gyazo.com/4d1ed698bb83d417e98fcb3effb9fbb1](https://i.gyazo.com/4d1ed698bb83d417e98fcb3effb9fbb1.png)
  
## AUTHOR

konnobu \<dra.mixx.nico@gmail.com\>
  





