let navUl = document.getElementById('nav-ul');
let x = document.getElementsByClassName('x');
let logo = document.getElementById('logo');
// 顶部导航栏点击效果
navUl.onclick = (e) => {
  for (let i = 0; i < x.length; i++) {
    x[i].classList.remove('TopNavActive');
  }
  e.target.getElementsByClassName('x')[0].classList.add('TopNavActive');
};

// logo点击效果
logo.onclick = (e) => {
  for (let i = 0; i < x.length; i++) {
    x[i].classList.remove('TopNavActive');
  }
};

// 时钟
// 0-10显示为两位
function nums(num) {
  return num < 10 ? '0' + num : num;
}

// 获取当前时间
let date = new Date();
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
hour.innerText = nums(date.getHours());
minute.innerText = nums(date.getMinutes());
second.innerText = nums(date.getSeconds());
let timer = setInterval(() => {
  let date = new Date();
  hour.innerText = nums(date.getHours());
  minute.innerText = nums(date.getMinutes());
  second.innerText = nums(date.getSeconds());
}, 1000);

let objnavul = document.getElementById('objnavul');
let objnavli = document.getElementsByClassName('objtags');
let objnav = document.getElementsByClassName('objtags');
let objcontentbox = document.getElementById('objcontentbox');
function objscroll() {
  let objTop = objcontentbox.scrollTop;
  if (objTop > 0 && objTop < 270) {
    objnav[0].style['background-color'] = '#3498db';
    objnav[0].style['color'] = 'white';
    objnav[1].style = '';
    objnav[2].style = '';
    objnav[3].style = '';
  } else if (objTop > 270 && objTop < 767) {
    objnav[1].style['background-color'] = '#3498db';
    objnav[1].style['color'] = 'white';
    objnav[0].style = '';
    objnav[2].style = '';
    objnav[3].style = '';
  }
}
objcontentbox.onscroll = objscroll;

objnavul.onclick = function (e) {
  objscroll = null;
  for (let i = 0; i < objnavli.length; i++) {
    objnavli[i].style = '';
  }
  e.target.style['background-color'] = '#3498db';
  e.target.style['color'] = 'white';
};
let main = document.getElementsByTagName('main')[0];
let header = document.getElementsByTagName('header')[0];
main.onscroll = function (e) {
  let index = document.getElementById('Index');
  let vh = index.clientHeight;
  let mainScrollTop = e.target.scrollTop;
  if (mainScrollTop > 0) {
    header.style['boxShadow'] = '0 0 15px rgb(174, 167, 167)';
  } else {
    header.style = '';
  }
  if (mainScrollTop < vh - 100) {
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove('TopNavActive');
    }
  } else if (mainScrollTop > vh - 100 && mainScrollTop < vh * 2 - 100) {
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove('TopNavActive');
    }
    x[0].classList.add('TopNavActive');
  } else {
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove('TopNavActive');
    }
    x[1].classList.add('TopNavActive');
    let objTop = objcontentbox.scrollTop;
    if (objTop >= 0 && objTop < 270) {
      objnavli[0].style['background-color'] = '#3498db';
      objnavli[0].style['color'] = 'white';
    }
  }
};

// 音乐播放功能
let m1 = document.getElementById('m1');
let m2 = document.getElementById('m2');
let m3 = document.getElementById('m3');
let m4 = document.getElementById('m4');
let play = document.getElementById('play');
let zt = document.getElementById('zt');
let pre = document.getElementById('pre');
let musicnext = document.getElementById('musicnext');
let musiclist = [m1, m2, m3, m4];
play.onclick = function () {
  zt.style['display'] = 'block';
  play.style['display'] = 'none';
  musiclist[0].play();
};
zt.onclick = function () {
  play.style['display'] = 'block';
  zt.style['display'] = 'none';
  musiclist[0].pause();
};
musicnext.onclick = function () {
  musiclist[0].pause();
  musiclist[0].currentTime = 0;
  let temp = musiclist[0];
  for (let i = 0; i < musiclist.length; i++) {
    musiclist[i] = musiclist[i + 1];
  }
  musiclist[3] = temp;
  zt.style['display'] = 'block';
  play.style['display'] = 'none';
  musiclist[0].play();
};

pre.onclick = function () {
  musiclist[0].pause();
  musiclist[0].currentTime = 0;
  let temp = musiclist[3];
  for (let i = musiclist.length - 1; i >= 0; i--) {
    musiclist[i] = musiclist[i - 1];
  }
  musiclist[0] = temp;
  zt.style['display'] = 'block';
  play.style['display'] = 'none';
  musiclist[0].play();
};

let musictitle = document.getElementsByClassName('musictitle');
m1.onplay = function () {
  musictitle[0].getElementsByTagName('img')[0].style['display'] =
    'inline-block';
  musictitle[0].getElementsByTagName('img')[1].style['display'] =
    'inline-block';
};
m1.oncanplay = function () {
  musictitle[0].getElementsByTagName('img')[0].style = '';
  musictitle[0].getElementsByTagName('img')[1].style = '';
};
m2.onplay = function () {
  musictitle[1].getElementsByTagName('img')[0].style['display'] =
    'inline-block';
  musictitle[1].getElementsByTagName('img')[1].style['display'] =
    'inline-block';
};
m2.oncanplay = function () {
  musictitle[1].getElementsByTagName('img')[0].style = '';
  musictitle[1].getElementsByTagName('img')[1].style = '';
};
m3.onplay = function () {
  musictitle[2].getElementsByTagName('img')[0].style['display'] =
    'inline-block';
  musictitle[2].getElementsByTagName('img')[1].style['display'] =
    'inline-block';
};
m3.oncanplay = function () {
  musictitle[2].getElementsByTagName('img')[0].style = '';
  musictitle[2].getElementsByTagName('img')[1].style = '';
};
m4.onplay = function () {
  musictitle[3].getElementsByTagName('img')[0].style['display'] =
    'inline-block';
  musictitle[3].getElementsByTagName('img')[1].style['display'] =
    'inline-block';
};
m4.oncanplay = function () {
  musictitle[3].getElementsByTagName('img')[0].style = '';
  musictitle[3].getElementsByTagName('img')[1].style = '';
};
musictitle[0].ondblclick = function () {
  m2.pause();
  m2.currentTime = 0;
  m3.pause();
  m3.currentTime = 0;
  m4.pause();
  m4.currentTime = 0;
  m1.play();
  zt.style['display'] = 'block';
  play.style['display'] = 'none';
  musiclist = [m1, m2, m3, m4];
};
musictitle[1].ondblclick = function () {
  m1.pause();
  m1.currentTime = 0;
  m3.pause();
  m3.currentTime = 0;
  m4.pause();
  m4.currentTime = 0;
  m2.play();
  zt.style['display'] = 'block';
  play.style['display'] = 'none';
  musiclist = [m2, m3, m4, m1];
};
musictitle[2].ondblclick = function () {
  m1.pause();
  m1.currentTime = 0;
  m2.pause();
  m2.currentTime = 0;
  m4.pause();
  m4.currentTime = 0;
  m3.play();
  zt.style['display'] = 'block';
  play.style['display'] = 'none';
  musiclist = [m3, m4, m1, m2];
};
musictitle[3].ondblclick = function () {
  m1.pause();
  m1.currentTime = 0;
  m2.pause();
  m2.currentTime = 0;
  m3.pause();
  m3.currentTime = 0;
  m4.play();
  zt.style['display'] = 'block';
  play.style['display'] = 'none';
  musiclist = [m4, m1, m2, m3];
};
