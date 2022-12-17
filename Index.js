const draggableElement1 = document.getElementById('draggable-element1');
const draggableElement2 = document.getElementById('draggable-element2');
const lists = document.querySelectorAll('.list');


draggableElement1.addEventListener('dragover', function(e) {
  e.preventDefault()
  setTimeout(() => {
    document.getElementById('dropzone').classList.add('add1');
  }, 0);
  console.log('over');
});



draggableElement2.addEventListener('dragenter', function() {
  console.log('enter');
});
draggableElement2.addEventListener('dragover', function(e) {
  e.preventDefault()
  document.getElementById('dropzone').classList.add('add2');
  console.log('over');
});



  lists.forEach((element,index) => {
    if(index ===0){
      element.addEventListener("dragover", function (e) {
        e.preventDefault();
        document.getElementById("dropzone").classList.add("pizza1");
        console.log("over");
      });

    }
    else if(index === 1){
      element.addEventListener("dragover", function (e) {
        e.preventDefault();
        document.getElementById("dropzone").classList.add("pizza2");
        document.getElementById("dropzone").classList.remove("pizza1");
        console.log("over");
      });

    }
    else{

      element.addEventListener("dragover", function (e) {
        e.preventDefault();
        document.getElementById("dropzone").classList.add("pizza3");
        document.getElementById("dropzone").classList.remove("pizza2");
        console.log("over");
      });
    }
  });
  





const dropzone = document.getElementById('dropzone');
dropzone.addEventListener('dragover', function(event) {
  event.preventDefault()
  console.log('over');
});

dropzone.addEventListener('drop', function(event) {
  event.preventDefault()
  
  document.getElementById('ul').style.visibility = 'visible';
});