const sentence = "hello there from lighthouse labs \n";
let when  = 50;


for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);

  }, when);
  process.stdout.write('\n');
  when += 50;
}
	


