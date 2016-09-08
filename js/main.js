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

//when "add" button is clicked, add new item to the list
var addToList = function (item){
 list.push(item);
 viewList(); //view the  list whenver one item is added
};

//check if the keypressed is enter
var keyCheck = function (e){
  if(e.keyCode === 13){
    addToList(document.getElementById('item').value);
  }

}

//delete one item from the list once that item is clicked
var deleteFromList = function(index){
  list.splice(index,1);
  viewList();
};
