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
