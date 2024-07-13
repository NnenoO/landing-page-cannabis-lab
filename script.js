let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 5000);
}

function openNav() {
  document.getElementById("menuMobile").style.width = "100%";
}

function closeNav() {
  document.getElementById("menuMobile").style.width = "0%";
}

// function opanEvent() {
//   document.getElementById("eventList").style.display = "flex";
// }

// function closeEvent() {
//   document.getElementById("eventList").style.display = "none";
// }

function toggleEvent(eventListId, showBtnId, hideBtnId) {
  var eventList = document.getElementById(eventListId);
  var showBtn = document.getElementById(showBtnId);
  var hideBtn = document.getElementById(hideBtnId);

  if (eventList.style.display === 'none') {
    if (window.innerWidth <= 480) {
      eventList.style.display = 'grid';
    } else {
      eventList.style.display = 'flex';
    }
    showBtn.style.display = 'none';
    hideBtn.style.display = 'inline-block';
  } else {
    eventList.style.display = 'none';
    showBtn.style.display = 'inline-block';
    hideBtn.style.display = 'none';
  }
}
