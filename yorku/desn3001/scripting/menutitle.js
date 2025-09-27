  const title = document.querySelector('.title');
  const menu = document.querySelector('.menuList');
  const menu2 = document.querySelector('.menuList2');
   let lastScrollX = window.scrollX;

    window.addEventListener('scroll', () => {
    if (lastScrollX < window.scrollX) {
        title.classList.remove("title--revealed");
        title.classList.add("title--hidden");
    } else {
        title.classList.remove("title--hidden");
        title.classList.add("title--revealed");
    }

    if (lastScrollX < window.scrollX) {
        menu.classList.remove("menu--revealed");
        menu.classList.add("menu--hidden");
    } else {
        menu.classList.remove("menu--hidden");
        menu.classList.add("menu--revealed");
    }    

    if (lastScrollX < window.scrollX) {
        menu2.classList.remove("menu--revealed");
        menu2.classList.add("menu--hidden");
    } else {
        menu2.classList.remove("menu--hidden");
        menu2.classList.add("menu--revealed");
    }        
lastScrollX = window.scrollX-25;
  });


  //stock
const stockBtn = document.querySelectorAll('.stockBtn');
const stockList = document.querySelectorAll('.stockList');
stockBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    stockList.forEach(list => {
      list.classList.toggle("visibility--hide");
    });
  });
});

//flow
const flowBtn = document.querySelectorAll('.flowBtn');
const flowList = document.querySelectorAll('.flowList');
flowBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    flowList.forEach(list => {
      list.classList.toggle("visibility--hide");
    });
  });
});

//loops
const loopBtn = document.querySelectorAll('.loopBtn');
const loopList = document.querySelectorAll('.loopList');
loopBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    loopList.forEach(list => {
      list.classList.toggle("visibility--hide");
    });
  });
});
