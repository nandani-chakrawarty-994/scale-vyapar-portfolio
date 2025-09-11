const slides = document.getElementById("slides");
    const totalSlides = slides.children.length;
    let index = 0;

    function autoSlide() {
      index++;
      if (index >= totalSlides) {
        index = 0;
      }
      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(autoSlide, 3000); // har 3 sec me slide change

    document.querySelectorAll('.case-card .title').forEach(t=>{
    t.style.cursor='pointer';
    t.title='Click to copy';
    t.addEventListener('click', ()=>{
      navigator.clipboard.writeText(t.textContent.trim());
      t.animate([{opacity:1},{opacity:.3},{opacity:1}],{duration:400});
    });
  });



// Small interactivity: clicking a case card scrolls to the detailed case
    document.querySelectorAll('.case-card').forEach((el, idx)=>{
      el.style.cursor = 'pointer';
      el.addEventListener('click', ()=> {
        const detailSection = document.querySelector('.case-detail');
        if(detailSection) detailSection.scrollIntoView({behavior:'smooth', block:'start'});
      })
    });

    // Optional: simple responsive adjustments (you can expand)
    window.addEventListener('resize', ()=> {
      // nothing critical for now
    });



