document.addEventListener('DOMContentLoaded', function() {
  const page = document.querySelector('body');
  
  // lägger till en övergångsefekt
  function addTransitionEffect() {
    page.classList.add('transition-effect');
    setTimeout(function() {
      page.classList.remove('transition-effect');
    }, 1000); //tar bort klassen efter en sekund.
    
  }
  
  
  //Övergångseffekten när man startar sidan.
  addTransitionEffect();
  
  const hemLink = document.querySelector('a[href="#hem"]');
  const sida1Link = document.querySelector('a[href="#sida1"]');
  const sida2Link = document.querySelector('a[href="#sida2"]');
  const hemSection = document.getElementById('hem');
  const sida1Section = document.getElementById('sida1');
  const sida2Section = document.getElementById('sida2');
  
  hemLink.addEventListener('click', function(event) {
    event.preventDefault();
    setTimeout(function() {
      hemSection.style.display = 'block';
      sida1Section.style.display = 'none';
      sida2Section.style.display = 'none';
      addTransitionEffect(); //Övergångseffekten, vid sidebyte.
      
    }, 100); // 100 millisekunder.
});

    sida1Link.addEventListener('click', function(event) {
      event.preventDefault();
      setTimeout(function() {
        hemSection.style.display = 'none';
        sida1Section.style.display = 'block';
        sida2Section.style.display = 'none';
        addTransitionEffect();
      }, 100);
  });
  
  sida2Link.addEventListener('click', function(event) {
    event.preventDefault();
    setTimeout(function() {
      hemSection.style.display = 'none';
      sida1Section.style.display = 'none';
      sida2Section.style.display = 'block';
      addTransitionEffect();
    }, 100);
  });
});
