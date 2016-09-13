//list is empty when the page is loaded
var list = [];

//when the page is loaded, view the list if exists
var viewList = function (){
  var text = "<p>Cool, let's start. Add items to the list.</p>";
  if(list.length == 0){
  } else {
    for(var i=0; i < list.length; i++){
      text += "<li onclick='deleteFromList("+i+")'>"+list[i]+"</li>";
    }
  }
  text += "<input type='text' id='item' maxlength='100' onkeydown=keyCheck(event)>";
  document.getElementById("toDoListView").innerHTML = text;
  document.getElementById("item").focus();
};

//Add new item to the list
var addToList = function (item){
  if(item != ''){
    list.push(item);
  }
  //view the list whenever one item is added
  viewList();
};

//delete one item from the list once the item is clicked
var deleteFromList = function(index){
  list.splice(index,1);
  viewList();
};

//check if the keypressed is "enter" key
var keyCheck = function (e){
  if(e.keyCode === 13){
    item = document.getElementById('item').value;
    //if it's not an email adress, add to the list
    if(validateEmailAddress(item)==false){
      addToList(item);
    } else {
      //if it's an email address, send email
      sendListToEmail(item);
    }
  }
}

//check if it's an email address
var validateEmailAddress = function(item) {
  var atpos = item.indexOf("@");
  var dotpos = item.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=item.length) {
    return false;
  }
}

//TODO: send the list to an email
var sendListToEmail = function(address){
  var yes = confirm("send to "+address+"?");
  if(yes == true){
    //TODO:send
    console.log("yes");
  } else {
    addToList(address);
  }
}

//TODO 1: the list should always be there in the page (cookie)
//TODO 2: on mousehover for 1 second, the item becomes editable
