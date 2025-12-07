const checkboxes = document.querySelectorAll('.input2');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    const totalChecked = document.querySelectorAll('.input2:checked').length;
    const totalBoxes = checkboxes.length;
    
    if (totalChecked === totalBoxes) {
      confetti({
        particleCount: 1000,
        spread: 100,
        origin: { y: 0.5 }
      });
    }
  });
});