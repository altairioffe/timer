const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");

stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, PEACE \n')
    process.exit();
  }
  if (key === 'b') {
    process.stdout.write("\007");
  };
  if (Number.isInteger(Number(key))) {
    process.stdout.write(`setting timer for ${key} seconds \n`);
    setTimeout(() => {
      process.stdout.write("\007")
    }, key * 1000);
  }
});