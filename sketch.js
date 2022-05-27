// 変数's-------------------------------------------------------------------------------
let status = 0;//0_menu 1_alive 2_end 3_pi 4_dev
let tpi,pp,c;
let inp = "3.";
pp = 1;
// 元からある関数's----------------------------------------------------------------------
function preload(){
  tpi = loadStrings("https://yuki-cha0103.github.io/pi/files/1000pi.txt")
  mn = loadImage("https://yuki-cha0103.github.io/pi/files/menu.png")
  gm = loadImage("https://yuki-cha0103.github.io/pi/files/game.png")
  cr = loadImage("https://yuki-cha0103.github.io/pi/files/clear.png")
  bgm = createAudio("https://yuki-cha0103.github.io/pi/files/gomib.mp3")
  ses = loadSound("https://yuki-cha0103.github.io/pi/files/o.mp3")
  sef = loadSound("https://yuki-cha0103.github.io/pi/files/x.mp3")
  Rc = loadStrings("https://yuki-cha0103.github.io/pi/col.txt")
  tyn = createAudio("https://yuki-cha0103.github.io/pi/files/tyan.mp3")
  pip = loadStrings("https://yuki-cha0103.github.io/pi/ppp.txt")
}



function setup() {
  createCanvas(800,800);
}

function draw() {
  background(220);
  
//   画面変更条件分岐
  if(status == 0){menu()}else
  if(status == 1){game()}else
  if(status == 2){end()}else
  if(status == 3){pimenu()}else
  if(status == 4){dev()}
}
// 分岐終わり
function keyTyped(){
  if((key + 1) > 0 && key == tpi[pp - 1] && status == 1){
    success()
  }else if((key + 1) > 0 && key != tpi[pp - 1] && status == 1){
  fail()
  }
  
  if(status == 4){
    success()
  }
  
  if(status == 0 && key == "e"){
    status = 3
  }
}

function mousePressed(){
  if(status == 0 && bgm){
    status = 1
    tpi = tpi + "";
    pp = 1
  }
  if(key == "Enter"){
    status = 4
//     devmode
  }
  
  if(status == 2){
    inp = "3."
    pp = 1
    status = 0
  }
  
  if(status == 3){
    status = 0;
  }
}
// 必須の関数--------------------------------------------------------------------
function menu(){
  image(mn,0,0)
  bgm.stop()
  textAlign(CENTER)
  textAll("クリックでスタート\neで円周率をみる",20,80,700,300)
}

function game(){
  if(pp == 1000){
    status = 2
    bgm.stop()
    tyn.play()
  }
  image(gm,0,0)
  bgm.loop()
  textAlign(RIGHT)
  textAll(inp,100,0,780,200)
  textAlign(LEFT)
  textAll("pp = "+pp,60,0,0,300)
//   RankColor
  if(pp >= 0 && pp <= 119){c = Rc[0]}else
  if(pp >= 120 && pp <= 279){c = Rc[1]}else
  if(pp >= 280 && pp <= 479){c = Rc[2]}else
  if(pp >= 480 && pp <= 719){c = Rc[3]}else
  if(pp >= 720 && pp <= 999){c = Rc[4]}else
  if(pp == 1000){c = Rc[5]}
// endColor
  rec(700,760,10,-(350 * pp / 1000),c)
  
}



function end(){
  bgm.stop()
  image(cr,0,0)
}

function pimenu(){
  textAlign(LEFT)
  textAll("pi = 3." +pip[0] + "\n" + pip[1] + "\n" + pip[2] + "\n" + pip[3] + "\n" + pip[4] + "\n" + pip[5] + "\n" + pip[6] + "\n" + pip[7] + "\n" + pip[8] + "\n" + pip[9] + "\n" + pip[10] + "\n" + pip[11] + "\n" + pip[12] + "\n" + pip[13] + "\n" + pip[14] + "\n" + pip[15] + "\n" + pip[16] + "\n" + pip[17] + "\nクリックで戻る",20,0,30,30)
}
// ここは実装簡潔にするの諦めた

function dev(){
  game()
}

// 何かしらの関数
function success(){
  inp = inp + tpi[pp-1]
  ses.play()
  pp++
}

function fail(){
  inp = "3."
  pp = 1
  status = 0
  sef.play()
}
//  便利関数作成------------------------------------------------------------------
function textAll(str,size,col,x,y){
  textSize(size)
  fill(col)
  text(str,x,y)
}

function rec(x,y,w,h,col){
  fill(col)
  rect(x,y,w,h)
}
