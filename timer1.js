let beepTimes = process.argv.slice(2)

const timer = words => {
  for (let val of beepTimes) {
    time = val * 1000;
    setTimeout(() => {
      process.stderr.write("\007")
    }, time);
  }
};

timer(beepTimes);