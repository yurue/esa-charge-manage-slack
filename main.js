var column = {
  'konnobu': 1,
  'yamotech': 2,
  'msk6252': 3,
  'tsuyoposon': 4,
  'k.shimomura': 5,
  'sum': 6
}

var column_inverse = {
  1 : 'konnobu',
  2 : 'yamotech',
  3 : 'msk6252',
  4 : 'tsuyoposon',
  5 : 'k.shimomura',
  6 : 'sum'
}

var sheet;
var userName;
var text;
var channelId;
var textArray;
var month;

var rowNum;
var columnNum;

function getPaymentSheet() {
  var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1N497DzBlRkrSmLYPTRIb2-tp5gvIxK9fksZlqfccDg4/edit#gid=0');
  return ss.getSheets()[0];
}

function getTable() {
  // 18行目2列目から13行・7列分取得
  // メンバー増減の際に調整
  return sheet.getSheetValues(18,2,13,7);
}

function postSlackMessage(content, channelId) {
  var botIcon = PropertiesService.getScriptProperties().getProperty('BOT_ICON_URL');
  var token = PropertiesService.getScriptProperties().getProperty('SLACK_ACCESS_TOKEN');
  var slackApp = SlackApp.create(token);

  var options = {
    channelId: channelId,
    userName: "yuruko-esa",
    message: content,
    iconUrl: botIcon,
    link_names: true
  };

  slackApp.postMessage(options.channelId, options.message, {username: options.userName, icon_url: options.iconUrl, link_names: options.link_names});
}

function setPay() {
  if (isPay()) {
    message = userName + 'の' + month + '月分のesaは既にもらってるっぴよ！';
    return message;
  } else {
    sheet.getRange(18 + rowNum, 2 + columnNum).setValue('ok');
    message =  userName + 'の' + month + '月分のesaはいただいたっぴ！ありっぴ！';
    return message;
  }
}

function notificationSetPay() {
  message = userName + 'が' + month + '月分のesaを支払いました！';
  postSlackMessage(message, '@konnobu');
}

function setUnpay() {
  sheet.getRange(18 + rowNum, 2 + columnNum).setValue('');
  message =  userName + 'の' + month + '月分はもらってない状態にリセットしたっぴ！';
  return message;
}

function checkPayment() {
  var paymentArray = getTable();
  var result = paymentArray[rowNum][columnNum];

  var message;
  if (result) {
    // 既に支払い済みであれば
    message = userName + 'からの' + month + '月分のesaは, 既にいただいてるっぴ！ありっぴな！';
  } else {
    // 支払いがまだであれば
    message = userName + 'からの' + month + '月分のesaは, まだもらってないっぴな！';
  }
  return message;
}

function postHelp() {
  var message =
    '【esaコマンドのつかいかた】\n' +
    '`esa pay [month]` \t\t 支払いを記録する  \n' +
    '`esa unpay [month]` \t\t 支払いを取り消す  \n' +
    '`esa check [month]` \t\t 支払状況を確認する  \n' +
    '`esa all [month]` \t\t メンバー全員の支払状況サマリーを確認する  \n';
    return message;
}

function isPay() {
  var paymentArray = getTable();
  var result = paymentArray[rowNum][columnNum];
  if (result) {
    // 既に支払い済みであれば
    return true;
  } else {
    // 支払いがまだであれば
    return false;
  }
}

function checkAll() {
  var paymentArray = getTable();
  var result = [];
  var columnLenght = paymentArray[rowNum].length - 2;
  var okCount = 0;

  for (var i=1; i <= columnLenght; i++) {
    if (paymentArray[rowNum][i] == 'ok') {
      result.push(':ok_woman:');
      okCount++;
    } else {
      result.push(':person_with_pouting_face:');
    }
  }

  // メンバー集金合計
  var sum = okCount * 500;
  // 集金率
  var collectionRate = (sum / ((result.length) * 500)) * 100;

  var message =
  '【' + month + '月のesa集め状況】\n' +
  '--------------------------------------------\n' +
  'konobu:     ' + result[0] + ' \n' +
  'yamotech:   ' + result[1] + ' \n' +
  'msk6252:    ' + result[2] + ' \n' +
  'tsuyoposon:       ' + result[3] + ' \n' +
  'k.shimomura: ' + result[4] + ' \n' +
  '---------------------------------------------\n' +
  ':moneybag: :' + sum + '円\n' +
  ':chart_with_upwards_trend: :' + collectionRate + '% だっぴよ〜〜！';
  return message;
}

function checkUnpaid() {
  var paymentArray = getTable();
  var unpaidMenbers = [];
  var columnLenght = paymentArray[rowNum].length - 2;

  for (var i=1; i <= columnLenght; i++) {
    if (paymentArray[rowNum][i] != 'ok') {
      unpaidMenbers.push('@' + column_inverse[i]);
    }
  }

  return unpaidMenbers;
}

function getMonth() {
  date = new Date();
  return date.getMonth() + 1;
}

/* doPost(e)
 * Slackのoutgoingからメッセージを受け取り, オプションに応じて処理する
 */
 function doPost(e) {
  var authOutGoingToken = PropertiesService.getScriptProperties().getProperty('OUTGOING_WEBHOCKS_TOKEN')

  // パラメ―タを取得
  userName = e.parameter.user_name;
  text = e.parameter.text;
  channelId = e.parameter.channel_id;
  var outGoingToken = e.parameter.token;

  //投稿の認証
  if (authOutGoingToken != outGoingToken) {
    throw new Error("invalid token.");
  }

  //TriggerWords(esa)を削除 -> 空白でsplit
  textArray = text.substr(4).split(' '); // [0] -> option(pay, unpay, check, all), [1]-> month
  var option = textArray[0];
  month = Number(textArray[1]);

  // 表の対象部分を特定
  rowNum = month;
  columnNum = column[userName];

  // スプレッドシートから表を取得
  sheet = getPaymentSheet();

  var message = '';

  if (option == 'pay') {
    message = setPay();
    notificationSetPay();

  } else if(option == 'check') {
    message = checkPayment();

  } else if(option == 'unpay') {
    message = setUnpay();

  } else if(option == 'all') {
    message = checkAll();

  } else if(option == 'help') {
    message = postHelp();

  } else {
    message = '入力ミスかな？読み取れないっぴ。:thinking_face:';
  }

  postSlackMessage(message, channelId);
}


/* 月末処理 monthEndProcess()
 * 毎月末に, メンバー全員の支払い確認を行い,
 * 支払いが遅れている場合はリマインドする
 */
 function monthEndProcess() {
  // スプレッドシートから表を取得
  sheet = getPaymentSheet();

  month = getMonth();
  rowNum = month;

  var startMessage = '月末だっぴ！' + month + '月分のesa集め状況を報告するっぴよ！';
  var middleMessage = checkAll();

  if (checkUnpaid()) {
    var endMessage = new String();
    endMessage += '\nまだ, esaをもらってないメンバーは,  \n';
    endMessage += checkUnpaid().join(', ');
    endMessage += ' だっぴ！ \n （@konnobu まで連絡おねがいっぴ！）\n\n';
    endMessage += 'それでは, よいエンジニアリングを！';
    var message = startMessage + '\n' + middleMessage + '\n' + endMessage;
  } else {
    var endMessage =
    '\n今月は完璧だっぴ〜！みんな, ありがとっぴな！\n' +
    '来月もよろしく頼むっぴ！それでは, よいエンジニアリングを！';
  }

  var message = startMessage + '\n' + middleMessage + '\n' + endMessage;

  postSlackMessage(message, '#general');
}
