// get modal
var modal = document.getElementById('ido1');
// when the user clicks anywhereoutside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }