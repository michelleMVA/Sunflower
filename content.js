const sunflower = document.createElement('img');
sunflower.src = chrome.runtime.getURL('sunflower.gif');
sunflower.style.position = 'fixed';
sunflower.style.bottom = '10px';
sunflower.style.right = '10px';
sunflower.style.width = '81px';
sunflower.style.height = '81px';
sunflower.style.zIndex = '10000';
sunflower.style.cursor = 'grab';
sunflower.style.userSelect = 'none';
sunflower.style.transition = 'none';
sunflower.draggable = false;

document.body.appendChild(sunflower);

// Dragging logic
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

sunflower.addEventListener('mousedown', (e) => {
  isDragging = true;
  sunflower.style.cursor = 'grabbing';
  offsetX = e.clientX - sunflower.getBoundingClientRect().left;
  offsetY = e.clientY - sunflower.getBoundingClientRect().top;
  document.body.style.userSelect = 'none';
  e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  sunflower.style.left = `${e.clientX - offsetX}px`;
  sunflower.style.top = `${e.clientY - offsetY}px`;
  sunflower.style.right = '';
  sunflower.style.bottom = '';
  sunflower.style.position = 'fixed';
});

document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    sunflower.style.cursor = 'grab';
    document.body.style.userSelect = '';
  }
});
