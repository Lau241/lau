// Line 1 click
document.querySelector('.swapBtn').addEventListener('click', () => {
  document.querySelector('.line1').style.display = 'none';  
  document.querySelector('.line2').style.display = 'block';  
});

// Line 2 click
document.querySelector('.line2').addEventListener('click', () => {
  document.querySelector('.line2').style.display = 'none';  
  document.querySelector('.line1').style.display = 'block'; 
});

document.querySelector('.menu').addEventListener('click', (e) => {
  if (!e.target.closest('.menu-item')) {
    console.log('Clicked empty menu space, ignore or pass through');
  }
});