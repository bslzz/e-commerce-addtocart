const decreaseNumber = (incdec, price) => {
  let textbox = document.getElementById(incdec);
  let amount = document.getElementById(price);
  if (textbox.value <= 0) textbox.value = 0;
  else {
    textbox.value = parseInt(textbox.value) - 1;
    textbox.style.background = '';
    amount.innerHTML = parseInt(amount.innerHTML) - 15;
  }
};

const increaseNumber = (incdec, price) => {
  let textbox = document.getElementById(incdec);
  let amount = document.getElementById(price);
  if (textbox.value >= 5) {
    textbox.style.background = 'red';
    alert('Maximum No. of items is 5');
  } else {
    textbox.value = parseInt(textbox.value) + 1;
    amount.innerHTML = parseInt(amount.innerHTML) + 15;
  }
};
