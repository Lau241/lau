// Dropdown Button Click Detection
document.querySelectorAll('.dropbtn').forEach(btn => {
  btn.addEventListener('click', function() {
    this.parentElement.classList.toggle('open');
  });
});

//load animation  
  setTimeout(() => {
    const loader = document.querySelector('.loading-video');
    if (!loader) return;

    loader.classList.add('fade-out');

    loader.addEventListener(
      'transitionend',
      () => loader.remove(),
      { once: true }
    );
  }, 1250);

  // Dropdown Selection
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    const button = dropdown.querySelector('.dropbtn');
    const options = dropdown.querySelectorAll('.dropdown-content a');

    function applySelection(value) {
      // Hide/show projects based on selection
      const project1 = document.querySelector('.project1');
      const project2 = document.querySelector('.project2');  
      const project3 = document.querySelector('.project3');  
      const project4 = document.querySelector('.project4');                    
      const project5 = document.querySelector('.project5');        
      const project6 = document.querySelector('.project6');     
      const project7 = document.querySelector('.project7');
      const project8 = document.querySelector('.project8');
            
      
const projects = [project1, project2, project3, project4, project5, project6, project7, project8];      
projects.forEach(p => {
  p.style.display = ""; // make visible
});

      if (value === "designer") {
        project5.style.display = "none";
        project6.style.display = "none";
        project7.style.display = "none";     
        project3.style.display = "none";    
      }

      if (value === "print designer") {
        project1.style.display = "none";
        project4.style.display = "none";
        project7.style.display = "none";
        project8.style.display = "none"; 
      }    
      
      if (value === "system builder") {     
        project3.style.display = "none";        
        project4.style.display = "none";
        project5.style.display = "none";
        project6.style.display = "none";
        project7.style.display = "none";        
      }
      
      if (value === "storyteller") {     
        project2.style.display = "none";    
        project5.style.display = "none";
        project6.style.display = "none";
        project8.style.display = "none";                
      }     

      if (value === "ui/ux designer") {     
        project2.style.display = "none";
        project3.style.display = "none";        
        project5.style.display = "none";
        project6.style.display = "none"; 
        project7.style.display = "none";       
      }         

      if (value === "brand builder") {     
        project3.style.display = "none";       
        project4.style.display = "none";         
        project5.style.display = "none";
        project6.style.display = "none"; 
        project7.style.display = "none";       
      }        
    }



    // Run once on page load with default text
    applySelection(button.childNodes[0].nodeValue.trim());

    options.forEach(option => {
      option.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent link navigation
        button.childNodes[0].nodeValue = this.textContent + ' '; // Update button text, keep chevron
        dropdown.classList.remove('open'); // Optionally close dropdown

        applySelection(this.textContent.trim());
      });
    });
  });


  // ITS MY FIRST TIME LEARNING HTML CSS AND JS OKAY
const phrases = [
  "immersive experiences",
  "everything esports",
  "world building",
  "magic the gathering",
  "branding with soul",
];

const el = document.getElementById("typewriter");

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

const TYPE_SPEED = 45;
const PAUSE_AFTER_TYPE = 1200;

function typeLoop() {
  const current = phrases[phraseIndex];

  if (!isDeleting) {
    el.textContent = current.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      setTimeout(() => (isDeleting = true), PAUSE_AFTER_TYPE);
    }
  } else {
    el.textContent = current.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  const speed = isDeleting ? TYPE_SPEED * 0.6 : TYPE_SPEED;
  setTimeout(typeLoop, speed);
}

typeLoop();




interact('.draggable')
  .draggable({
    listeners: {
      // when a user drags the object ('on dragmove') run this function
      move: dragMoveListener,
      // call this function on every dragend event
      end (event) {
        console.log("item dropped!")
      }
    }
  })

function dragMoveListener (event) {
  // all this stuff gets the position of the item while it's being dragged
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the position attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos

window.dragMoveListener = dragMoveListener
