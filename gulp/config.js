var path = require('path');

var dest = './dest'; // 出力先ディレクトリ
var src = './src';  // ソースディレクトリ
var relativeSrcPath = path.relative('.', src); // 後々、つかいます

module.exports = {
  src: src,
  dest: dest,

  // 各タスクごとの設定をこの下に追加していく

  //pug
  pug: {
    src: [
      src + '/**/!(_)*.pug'
    ],
    dest: dest,
    options: {pretty: true}
  },
}