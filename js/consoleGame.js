let hp = 10;

$(window).on('load', () => {
  console.clear();
  console.log(`Welcome to the boss minigame. To win this game you have to click the 1dmg button 10 times.`)
});

$('#dmg').on('click', () => {
  if (hp <= 0) {
    console.clear();
    const style = 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)';

    console.log('%c YOU WON!', style);
  } else {
    console.clear();
    hp--;
    console.warn(`boss took 1 dmg`);
    console.warn(`boss health currently at ${hp}`);
  }
});

$('#reset').on('click', () => {
  console.clear();
  hp = 10;
  console.warn(`You've reset the game. hp is set back to ${hp}`)
});
