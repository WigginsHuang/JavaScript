// function Node(data,left,right){
// this.data=data;
// this.left=left;
// this.right=right;
// this.show=show;
// }


// function show(){

// return this.data;

// }
window.onload=function(){
var arr=[];
var add=false;
var roots=document.getElementById('root');
var preOrders=document.getElementById('preOrder');
var inOrders=document.getElementById('inOrder');
var postOrders=document.getElementById('postOrder');
var timer=null;



function preOrder(root){
  if (root) {
   arr.push(root);
   preOrder(root.firstElementChild);
   preOrder(root.lastElementChild);
  }
}
function inOrder(root){
  if (root) {
    inOrder(root.firstElementChild);
    arr.push(root);
   inOrder(root.lastElementChild);
  }
}
function postOrder(root){
  if (root) {
   postOrder(root.firstElementChild); 
   postOrder(root.lastElementChild);
   arr.push(root);
  }
}

function changeclor(){
add=true;
var arlen=arr.length;
var i=0;
arr[i].style.backgroundColor="#F34949";
time=setInterval(function(){
i++;
if (i<arlen) {
arr[i-1].style.backgroundColor="#ffffff";
arr[i].style.backgroundColor="#F34949";
}
else{
 clearInterval(time);
 arr[i-1].style.backgroundColor="#ffffff";
 add=false;
}
},500)
}

function reset(){
arr=[];
for(var s=0;s<arr.length;s++){
arr[s].style.backgroundColor="#ffffff";
}
}

preOrders.onclick=function(){
if (add) {
alert("正在遍历，请等待！")
return;
}
reset();
preOrder(roots);
changeclor();
}

inOrders.onclick=function(){
if (add) {
alert("正在遍历，请等待！")
return;
}
reset();
inOrder(roots);
changeclor();
}

postOrders.onclick=function(){
if (add) {
alert("正在遍历，请等待！")
return;
}
reset();
postOrder(roots);
changeclor();
}
}