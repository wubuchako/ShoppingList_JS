//きれいにしたコード　３
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
  return input.value.length;
}

function createListElement(){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick(){
    if(inputLength() > 0){
      createListElement();
    }
}

function addListAfterKeypress(){
  if(inputLength() > 0 && event.keyCode === 13){
    createListElement();
  }
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", function(event){
  if(inputLength() > 0 && event.keyCode === 13){
    createListElement();
  }
})



//最初のコード　１
// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseleave", function(){
//   console.log("click!!!");
// })



// 完成。でも繰り返しの多いコード　２
// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// button.addEventListener("click", function(){
//   if(input.value.length > 0){
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";

//   }
// })


// input.addEventListener("keypress", function(event){

//   if(input.value.length > 0 && event.keyCode === 13){
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
//   }
// })

