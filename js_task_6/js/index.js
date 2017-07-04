// function Node(data,left,right){
// this.data=data;
// this.left=left;
// this.right=right;
// this.show=show;
// }


// function show(){

// return this.data;

// }

// 载入事件，不然无法执行
window.onload=function(){
var arr=[];//用来存放需要遍历对象
var add=false;//判断是否遍历
//获取按钮元素
var roots=document.getElementById('root');
var preOrders=document.getElementById('preOrder');
var inOrders=document.getElementById('inOrder');
var postOrders=document.getElementById('postOrder');
//计时器
var timer=null;


//先序遍历
function preOrder(root){
  if (root) {
   arr.push(root);
   preOrder(root.firstElementChild);
   preOrder(root.lastElementChild);
  }
}
//中序遍历
function inOrder(root){
  if (root) {
    inOrder(root.firstElementChild);
    arr.push(root);
   inOrder(root.lastElementChild);
  }
}
//后序遍历
function postOrder(root){
  if (root) {
   postOrder(root.firstElementChild); 
   postOrder(root.lastElementChild);
   arr.push(root);
  }
}
//改变颜色，计时器的改变就在
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
//重置，每次点击按钮前执行
function reset(){
arr=[];
for(var s=0;s<arr.length;s++){
arr[s].style.backgroundColor="#ffffff";
}
}
//绑定事件
preOrders.onclick=function(){
if (add) {
alert("正在遍历，请等待！")
return;
}
reset();
preOrder(roots);
changeclor();
}
//绑定事件
inOrders.onclick=function(){
if (add) {
alert("正在遍历，请等待！")
return;
}
reset();
inOrder(roots);
changeclor();
}
//绑定事件
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