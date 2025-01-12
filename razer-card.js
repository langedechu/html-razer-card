// Premier cours de JS allez rappelez-vous en :p

const cardWrapper = document.querySelector(".card-wrapper");

const cardRotationModifiers = {
  x: 0,
  y: 0,
};

const finalCardRotation = {
  x: 0,
  y: 0,
};

// Quand la souris bouge...

document.onmousemove = (ev) => {
  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  // Info: window.innerWidth ou innerHeight nous permet d'avoir la taille du viewport HTML de votre navigateur. Pratique :)

  cardRotationModifiers.x = (ev.clientX - middleX) / middleX;
  cardRotationModifiers.y = (ev.clientY - middleY) / middleY;

  finalCardRotation.x = cardRotationModifiers.x * 45;
  finalCardRotation.y = cardRotationModifiers.y * 45;

  console.table(finalCardRotation);

  cardWrapper.style.transform = `\
  rotateY(${finalCardRotation.x}deg) \
  rotateX(${-1 * finalCardRotation.y}deg)`;
};

// Alors vraiment c'est que des maths et 1% de prise en charge de l'API JavaScript. Bon courage 🤷🏽‍♀️
