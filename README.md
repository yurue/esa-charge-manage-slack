esa-charge-manage-slack
===

> esa.ioの利用料金管理をSlack上で行えるやつです。

> 毎月の料金を管理者に支払ったときに, さくっとコマンドを打ち込んで下さい。

## Usage(Command)

すべてのコマンドはSlack上の全てのチャンネルで, 利用できます。
最初に`esa: `を付けて, 続けてコマンドを入力してください。



#### `esa pay [month] ` 

- `esa pay 5` ：支払いを記録する
  
  [![https://gyazo.com/849b32d8a422ead95e50865d247c5730](https://i.gyazo.com/849b32d8a422ead95e50865d247c5730.png)](https://gyazo.com/849b32d8a422ead95e50865d247c5730)
  
#### `esa unpay [month]`

- `esa unpay 5`: 支払いを取り消す
  
  [![https://gyazo.com/a54edf55fb362411c40b79015b23b4f1](https://i.gyazo.com/a54edf55fb362411c40b79015b23b4f1.png)](https://gyazo.com/a54edf55fb362411c40b79015b23b4f1)
  
#### `esa check [month]`

- `esa check 5`: 支払状況を確認する
  
  [![https://gyazo.com/e429b49b2bcfde779ccfd1d862c852f1](https://i.gyazo.com/e429b49b2bcfde779ccfd1d862c852f1.png)](https://gyazo.com/e429b49b2bcfde779ccfd1d862c852f1)
  
#### `esa all [month]`

- `esa all 5`: メンバー全員の支払状況サマリーを確認する
  
  [![https://gyazo.com/b997e0f27e5be07c962baf7c0d7fd914](https://i.gyazo.com/b997e0f27e5be07c962baf7c0d7fd914.png)](https://gyazo.com/b997e0f27e5be07c962baf7c0d7fd914)
  
#### `esa help`

- `esa help`: ヘルプを参照する

  [![https://gyazo.com/8134a2eebe0e4c6c066932c85039cbfe](https://i.gyazo.com/8134a2eebe0e4c6c066932c85039cbfe.png)](https://gyazo.com/8134a2eebe0e4c6c066932c85039cbfe)

### 毎月末のリマインド

- 毎月末に支払状況サマリーと, 結果に応じてリマインドを行います

  ![https://gyazo.com/0c846fc11c4922777e883307669473bc](https://i.gyazo.com/0c846fc11c4922777e883307669473bc.png)
  
### adminユーザへの通知

- メンバーが支払記録コマンド`pay`を実行すると, adminユーザへダイレクトメッセージで通知します。
  - 間違いが生じていないか, 管理ユーザに確認させるための通知。
  
   ![https://gyazo.com/4d1ed698bb83d417e98fcb3effb9fbb1](https://i.gyazo.com/4d1ed698bb83d417e98fcb3effb9fbb1.png)
  
## AUTHOR

konnobu \<dra.mixx.nico@gmail.com\>
  





