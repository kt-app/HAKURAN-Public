console.log("hellow world!!");

//ここからおまじない
//////////////////////////////
const express = require("express"); //expressを使用する
const app = express();//慣例的にappという名前でインスタンス化
const server = require('http').createServer(app);//サーバの設定をするために宣言
const socketIo = require('socket.io');
const io = socketIo(server);
const path = require('path');

app.use(express.json());//jsonを扱えるようにする
const JWT = require("jsonwebtoken");//JWT(トークン)を扱えるようにする
const cookieParser = require('cookie-parser')//cokkieを扱いやすくする
app.use(cookieParser());//ミドルウェアで使えるようにする
const axios = require('axios');//外部APIにリクエストを送信できるようにする
const CryptoJS = require('crypto-js');//暗号を扱う
require('dotenv').config();//環境変数を設定

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


// const { OAuth2Client } = require('google-auth-library');
// const client = new OAuth2Client(process.env.Google);
//学校アカウントでの認証ができなかったため削除


const PORT = 8080;//ポートを設定
const loginURL = "/build/login.html"
const contentURL = "/build/index.html"
const confirmURL = "/build/confirm.html"

server.listen(process.env.PORT || PORT, () => console.log("サーバー起動"));//サーバーを起動するおまじない
//////////////////////////////
//ここまでおまじない




//ここからミドルウェアの定義
//////////////////////////////



const cheackJWT = (req, res, next) => {
  //トークンの有効性を検証する
  const httpOnlyCookie = req.cookies["x-auth-token"];
  //クッキーをパースしてトークンを取り出す
  const token = httpOnlyCookie
  console.log(token);
  if (!token) {
    console.log("トークンなし");
    res.sendFile(__dirname + loginURL)
  } else {
    try {
      let user = JWT.verify(token, process.env.JWTkey)
      console.log(user);
      next()
    } catch {
      console.log("無効なトークン");
      res.sendFile(__dirname + loginURL)
    }
  }
}



const callAPI = async (req, res, next) => {
  const url = process.env.APIurl
  try {
    const response = await axios.get(url);
    res.locals.apiData = response.data;
    console.error(response.data);
    next();
  } catch (error) {
    console.error(error);
    res.locals.apiData = "エラー";
    next();
  }
};




//////////////////////////////
//ここまでミドルウェアの定義




//ここからエンドポイント設定
//////////////////////////////










// app.get("/", cheackJWT, (req, res) => {
//   //認証が成功した人に渡すページ
//   res.sendFile(__dirname + contentURL)
// });


app.get('/static/*', cheackJWT, (req, res) => {
  const requestedURL = req.url; // リクエストされたURLを取得
  const filePath = __dirname + `/build${requestedURL}`;
  console.log(filePath)
  res.sendFile(filePath)
});






app.post("/news", cheackJWT, callAPI, (req, res) => {
  //newsフィードを外部のapiから取得
  console.log("ニュース取得");
  res.json(res.locals.apiData);
})

app.get("/authentication", (req, res) => {
  //認証用

  console.log(req.query)
  const Cuser = req.query.user;
  const Cid = req.query.id;

  function decrypt(encryptedText, secretKey) {
    const decryptedText = CryptoJS.AES.decrypt(encryptedText, secretKey).toString(CryptoJS.enc.Utf8);
    return decryptedText;
  }

  function encrypt(text, secretKey) {
    const encryptedText = CryptoJS.AES.encrypt(text, secretKey).toString();
    return encryptedText;
  }
  const user = decrypt(Cuser, process.env.aeskey);
  const id = decrypt(Cid, process.env.aeskey);
  console.log(user);
  console.log(id);


  const queryString = "?" + req.originalUrl.split('?')[1];
  console.log(queryString);
  io.to(id).emit('auth', queryString);
  res.json({
    message: "complete",
  });
});



app.get("/auth", (req, res) => {

  const Cuser = req.query.user;
  const Cid = req.query.id;

  function decrypt(encryptedText, secretKey) {
    const decryptedText = CryptoJS.AES.decrypt(encryptedText, secretKey).toString(CryptoJS.enc.Utf8);
    return decryptedText;
  }

  function encrypt(text, secretKey) {
    const encryptedText = CryptoJS.AES.encrypt(text, secretKey).toString();
    return encryptedText;
  }

  const user = decrypt(Cuser, process.env.aeskey);
  const id = decrypt(Cid, process.env.aeskey);
  console.log(user);
  console.log(id);
  try {
    const Ftoken = JWT.sign(
      //認証用トークンを発行
      {
        user,
      },

      process.env.JWTkey,
      {
        expiresIn: "2h",
      }
    );

    req.userid = user;
    req.Ftoken = Ftoken;

  } catch (error) {
    console.error;
    console.log(error);
    var err = new Error('サーバで問題が発生しました(認証またはトークン生成の失敗)');
    res.status(500).json({ error: err.message });
  }


  console.log(req.userid + "にトークンを発行");
  res.cookie('x-auth-token', req.Ftoken, {
    //認証用トークンをcookieにhttpOnlyで保存
    httpOnly: true
  })
  res.sendFile(__dirname + confirmURL)
});


app.post("/", (req, res) => {
  const pass = req.body;
  console.log(pass)
  console.log(process.env.LOGINpass)


  if (pass.password == process.env.LOGINpass) {


    const user = "guest"
    const id = "guset"
    console.log(user);
    console.log(id);
    try {
      const Ftoken = JWT.sign(
        //認証用トークンを発行
        {
          user,
        },

        process.env.JWTkey,
        {
          expiresIn: "2h",
        }
      );

      req.userid = user;
      req.Ftoken = Ftoken;

    } catch (error) {
      console.error;
      console.log(error);
      var err = new Error('サーバで問題が発生しました(認証またはトークン生成の失敗)');
      res.status(500).json({ error: err.message });
    }


    console.log(req.userid + "にトークンを発行");
    res.cookie('x-auth-token', req.Ftoken, {
      //認証用トークンをcookieにhttpOnlyで保存
      httpOnly: true
    })
    res.sendFile(__dirname + confirmURL)


  } else {

    var err = new Error('パスワードが違います');
    res.sendFile(__dirname + loginURL)
  }

});








app.get("/logout", (req, res) => {
  res.clearCookie('x-auth-token');
  res.send('Cookie cleared');
});


app.get("/test", (req, res) => {
  console.log("テスト接続")
  const queryString = "?" + req.originalUrl.split('?')[1];
  console.log(queryString);
  console.log(req.query)
  console.log(req.query.test)
  res.json({
    message: "テスト用"
  });
  io.emit('test', 'test');
  io.to(req.query.test).emit('auth', '?test=test');
});




//reactのファイルを扱うために無理やり実装

app.use(cheackJWT);


app.use(express.static(path.join(__dirname, "/build")));

app.get('*', (req, res) => {
  res.sendFile(__dirname + contentURL);
});




//////////////////////////////
//ここまでエンドポイント設定



//ここからWS通信処理
//////////////////////////////

io.on('connection', (socket) => {
  console.log('connected');
  io.emit('test', 'success');

});





