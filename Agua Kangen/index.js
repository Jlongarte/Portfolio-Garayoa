function ask() {
  response = confirm("Hi Welcome to our site, we hope your are enjoy our content! To see more please subscribe :)");
  return subscribe(response);
};

function request(){
  popup =  prompt('Would you like to see more content?');
  return popup;
};
  // popup initial feedback if cancelled (null)
  // unless the user has actually typed in the prompt input, result will return 0 (null, 0).

  //this example waits for the user to respond to the prompt asked by popup. 
  //If user selects cancel then null will return, which has a number value of 0. 

console.log(Number(null) === 0); // true    === (type and value) == (equal to)

let countdown = setTimeout(ask, 2000);

function ask1(){
  registered = ask();
  for(i=0; i<=21; i++){
    if (i > 20 && registered == false){
      setTimeout(request, 20000); 
    } else {
      clearTimeout(request);
   };
  };
};

  
ask1();
request();
