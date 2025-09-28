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
lastScrollX = window.scrollX;
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


//FLOWS

// Increase Btn
const increaseBtn = document.querySelectorAll('.increaseBtn');
const flowIncrease = document.querySelectorAll('.flowIncrease');

// Decrease Btn
const decreaseBtn = document.querySelectorAll('.decreaseBtn');
const flowDecrease = document.querySelectorAll('.flowDecrease');

// All Btn
const allFlowBtn = document.querySelectorAll('.allFlowBtn');
const allFlowClass = document.querySelectorAll('.allFlowClass');

// Shared container
const dotcontainer = document.querySelectorAll('.classContainer');

function updateContainerVisibility() {
  const anyActive =
    document.querySelectorAll(
      '.flowIncrease.activeItem, .flowDecrease.activeItem, .allFlowClass.activeAll, ' +
      '.pssLevels.activeItem, .timeStock.activeItem, .allStockClass.activeAll, ' +
      '.copingLoop.activeItem'
    ).length > 0;

  dotcontainer.forEach(list => {
    if (anyActive) {
      list.classList.add("transparentItem");
    } else {
      list.classList.remove("transparentItem");
    }
  });
}

// Handle Increase toggle
increaseBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    flowIncrease.forEach(flow => {
      flow.classList.toggle("activeItem");
    });

    increaseBtn.forEach(flow => {
      flow.classList.toggle("selectedIndicator");
    });

    updateContainerVisibility();
  });
});

// Handle Decrease toggle
decreaseBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    flowDecrease.forEach(flow => {
      flow.classList.toggle("activeItem");
    });

    decreaseBtn.forEach(flow => {
      flow.classList.toggle("selectedIndicator");
    });

    updateContainerVisibility();
  });
});

// Handle All toggle
allFlowBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    allFlowClass.forEach(flow => {
      flow.classList.toggle("activeAll");
    });

    allFlowBtn.forEach(flow => {
      flow.classList.toggle("selectedIndicator");
    });

    updateContainerVisibility();
  });
});

//STOCKS

// Stock Btn
const pssLevelBtn = document.querySelectorAll('.pssLevelBtn');
const pssLevels = document.querySelectorAll('.pssLevels');

// Time Btn
const timeBtn = document.querySelectorAll('.timeBtn');
const timeStock = document.querySelectorAll('.timeStock');

// All Btn
const allStockBtn = document.querySelectorAll('.allStockBtn');
const allStockClass = document.querySelectorAll('.allStockClass');

// Handle Increase toggle
pssLevelBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    pssLevels.forEach(flow => {
      flow.classList.toggle("activeItem");
    });

    pssLevelBtn.forEach(flow => {
      flow.classList.toggle("selectedIndicator");
    });

    updateContainerVisibility();
  });
});

// Handle Decrease toggle
timeBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    timeStock.forEach(flow => {
      flow.classList.toggle("activeItem");
    });

    timeBtn.forEach(flow => {
      flow.classList.toggle("selectedIndicator");
    });

    updateContainerVisibility();
  });
});

// Handle All toggle
allStockBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    allStockClass.forEach(flow => {
      flow.classList.toggle("activeAll");
    });

    allStockBtn.forEach(flow => {
      flow.classList.toggle("selectedIndicator");
    });

    updateContainerVisibility();
  });
});

//LOOPS

// Loop Btn
const copingBtn = document.querySelectorAll('.copingBtn');
const copingLoop = document.querySelectorAll('.copingLoop');

// Handle Increase toggle
copingBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    copingLoop.forEach(flow => {
      flow.classList.toggle("activeItem");
    });

    copingBtn.forEach(flow => {
      flow.classList.toggle("selectedIndicator");
    });

    updateContainerVisibility();
  });
});

const legend = document.querySelectorAll('.legend');
const legendImage = document.querySelectorAll('.legendImage');

legend.forEach(btn => {
  btn.addEventListener('click', () => {
    legendImage.forEach(flow => {
      flow.classList.toggle("visibility--hide");
    });
  });
});

// Also toggle when the overlay is clicked
legendImage.forEach(flow => {
  flow.addEventListener('click', () => {
    flow.classList.toggle("visibility--hide");
  });
});