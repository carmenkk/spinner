let array = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   '];
let delay = 100;

for ( let ele of array) {
  setTimeout(() => {
    process.stdout.write(ele);
  }, delay += 200);
}

