let debounceDelay = 3000;
let debouncedClicked = 0;

let displayDebounceDelay = document.getElementById('debounce-delay');
displayDebounceDelay.innerHTML = `${debounceDelay} MS`

let debouncedClickedDisplay = document.getElementById('debounced-clicked');
debouncedClickedDisplay.innerHTML = debouncedClicked;


const debounce = (func, delay = 1000) => {
  let timer = null;
  return (event) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log('timer:', timer);
      func(event);
    }, delay);
  };
};

const handleClick = () => {
  debouncedClicked += 1;
  debouncedClickedDisplay.innerHTML = debouncedClicked;
}

const button = document.getElementById('debounce-button');
button.addEventListener('click', debounce(handleClick, debounceDelay));
