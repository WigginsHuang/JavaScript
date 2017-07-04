window.onload=function(){
//参考task6注视  
var arr=[];
var add=false;
var roots=document.getElementById('root');
var preOrders=document.getElementById('preOrder');
var inOrders=document.getElementById('inOrder');
var postOrders=document.getElementById('postOrder');

var txt=document.getElementById('text1');
var preOrderSearch=document.getElementById('preOrdeSearch');
var postOrderSearch=document.getElementById('postOrderSearch');
var timer=null;


//参考task6 先序 
function preOrder(root){
  if (root) {
  if(root.nodeName.toLowerCase()=="div"){arr.push(root);}
  var rots=root.childNodes.length;
  for(var i=0;i<rots;i++){
  preOrder(root.childNodes[i]);
  }
  }
}
// function inOrder(root){
//   if (root) {
//   var rots=root.childNodes.length;
//   for(var i=0;i<rots;i++){
//    if(root.nodeName.toLowerCase()=="div"){
//     if(root.firstChild.innerHTML=="asd")//中序要把root节点放中间
//      {
//         arr.push(root);//这步会在数组中添加三个root节点，索引分别为0，2，还有中间
//      }
//    preOrder(root.childNodes[i]);
//     }
//    }
//   }
  // arr.shift();arr.shift();arr.shift();//去掉多余的root节点0，2
  // arr.unshift(root.childNodes[2]);//把上一步去掉的two1加进来
//}

//参考task6注视   后序
function postOrder(root){
  if (root) {
  var rots=root.childNodes.length;
  for(var i=0;i<rots;i++){
  postOrder(root.childNodes[i]);
  }
   if(root.nodeName.toLowerCase()=="div"){arr.push(root);}
  }

}

//改变颜色 仅限遍历
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

//重置，点击按钮前执行
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

//查找遍历
function as(txt){
if (txt.value=="") {
alert('不能为空！');
return;
}
var ad=0//计算查到的个数
add=true;//防止多次遍历
var arlen=arr.length-1;//这里-1是为了能让查找到的元素能够有自己的属性
var i=-1;
arr[i+1].style.backgroundColor="#F34949";
//计时器开始
time=setInterval(function(){
i++;
if (i<arlen) {
arr[i].style.backgroundColor="#ffffff";
arr[i+1].style.backgroundColor="#F34949";
if(arr[i].children[0].innerHTML==txt.value) {//判断是否与文本框的内容一致
 arr[i].style.backgroundColor="#FF0000";
 ad++//+1为了计数
  }
}
else{
  //遍历结束后的统计
  if (ad>0) {
   alert("找到了"+ad+"个对象!");
  }else{
    alert("没找到对象!");
  }
 clearInterval(time);
 arr[i].style.backgroundColor="#ffffff";
 add=false;

}
},500)

}

// inOrders.onclick=function(){
// if (add) {
// alert("正在遍历，请等待！")
// return;
// }
// reset();
// inOrder(roots);
// changeclor();
// }

postOrders.onclick=function(){
if (add) {
alert("正在遍历，请等待！")
return;
}
reset();
postOrder(roots);
// arr.shift();
// arr.shift();
// arr.shift();
changeclor();
}

preOrderSearch.onclick=function(){
if (add) {
alert("正在遍历，请等待！")
return;
}
reset();
preOrder(roots);
as(txt);
}
//绑定事件
postOrderSearch.onclick=function(){
if (add) {
alert("正在遍历，请等待！")
return;
}
reset();
postOrder(roots);//传入这个元素参数
as(txt);
}

}