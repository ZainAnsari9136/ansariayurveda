document.querySelector(".bar").addEventListener("click", function () {
  const popupMenu = document.querySelector(".popup-menu");
  // const phone = document.querySelector(".phone");
//   const blurBg = document.querySelector(".blur-bg");

  if (popupMenu.style.display === "block") {
    popupMenu.style.display = "none";
    // blurBg.style.display = "none";
  } else {
    popupMenu.style.display = "flex";
    // phone.style.display = "flex";
    
    // blurBg.style.display = "block";
  }
});

document.querySelector(".close-button").addEventListener("click", function () {
  const popupMenu = document.querySelector(".popup-menu");
//   const blurBg = document.querySelector(".blur-bg");

  popupMenu.style.display = "none";
//   blurBg.style.display = "none";
});
