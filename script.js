// Start the background audio once the page loads
  document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('bg-music');
    if (audio) {
      audio.play().catch(function(err) {
        console.warn("Autoplay je blokiran u pregledaču – potrebna je interakcija korisnika.");
      });
    }
  });
