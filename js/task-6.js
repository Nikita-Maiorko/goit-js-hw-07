function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const controls = document.querySelector('#controls');
  const input = controls.querySelector('input');
  const createBtn = controls.querySelector('[data-create]');
  const destroyBtn = controls.querySelector('[data-destroy]');
  const boxes = document.querySelector('#boxes');

  function createBoxes(amount) {
    const boxElements = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxElements.push(box);
      size += 10;
    }

    boxes.innerHTML = '';
    boxes.append(...boxElements);
  }

  function destroyBoxes() {
    boxes.innerHTML = '';
  }

  createBtn.addEventListener('click', () => {
    const amount = Number(input.value);

    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
    }
  });

  destroyBtn.addEventListener('click', destroyBoxes);
});
