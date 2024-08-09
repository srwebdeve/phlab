var menu = document.querySelector("#menu");
var temp = document.querySelector("#temp");
var aa = document.querySelector(".x");
var c = document.querySelector(".y");
var b = document.querySelector(".z");
var clo  = document.querySelector("#close");
var input = document.getElementById("input");
var pannal = document.getElementById("pannal");
var cros = document.getElementById("cros");

var s = document.getElementById("s");
var v = document.getElementById("v");
var U = document.getElementById("U");
var a = document.getElementById("a");
var t = document.getElementById("t");


var math = document.getElementById("math");
// ⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂
// ▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣
// on thi section i program all ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▲▲▲▲▲▲▲▲▲▲▲▲▲▶▶▶▶▶▶▶▶▶▶▶▼▼▼


menu.addEventListener("click", function(){
    c.style.transform="rotate(-45deg)";
    c.style.top="-5px";
    aa.style.top="5px"; 
    aa.style.transform="rotate(45deg)";
    b.style.top="-100px";
    clo.style.top="25px";
    menu.style.top="-25px";
    temp.style.top="60px";
    input.style.display="none";
    new Audio("wave.wav").play();

});

clo.addEventListener("click", function(){
    clo.style.top="-25px";
    menu.style.top="25px";
    temp.style.top="-200vh";
    
    c.style.transform="rotate(0deg)";
    c.style.top="0px";
    aa.style.top="0px"; 
    aa.style.transform="rotate(0deg)";
    input.style.display="flex";
    
    new Audio("wave.wav").play();


});

input.addEventListener("click", function(){
   input.style.boxShadow="0 0 0 black";
   pannal.style.top="0";
   menu.style.top="-100px";
   input.style.cursor="auto";
   new Audio("wave.wav").play();
});
// ⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂
// ▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣
//  main program point is here  ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▲▲▲▲▲▲▲▲▲▲▲▲▲▶▶▶▶▶▶▶▶▶▶▶▼▼▼


cros.addEventListener("click", function(){
    input.style.boxShadow="5px 5px 5px black,-5px -5px 5px white ";
    pannal.style.top="-650px";
   menu.style.top="25px";
    input.style.cursor="pointer";
    new Audio("wave.wav").play();

    var ss = document.getElementById("ss");
var vvv = document.getElementById("vv");
var uu = document.getElementById("uu");
var aa = document.getElementById("aa");
var tt = document.getElementById("tt");
   
    var vs = s.value;
    var vv = v.value;
    var vU = U.value;
    var va = a.value;
    var vt = t.value;

    
// math.innerHTML= `s = ${vs} <br> v = ${vv}
//  <br>  U = ${vU} <br> a = ${va} <br> t = ${vt}`;

 // ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞    ⊞⊞⊞⊞⊞⊞  ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞
 // ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞  ⊞⊞⊞⊞⊞  ⊞⊞⊞  ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞
 // ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞  ⊞⊞⊞  ⊞⊞⊞⊞⊞  ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞
 // ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞  ⊞⊞⊞⊞⊞⊞    ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞

 if(ss.checked   && vv==false)
 {
    //  var ut2 = Number(ut);
     var ut=vU*vt;
     var vtt= vt*vt;
     var att = va*vtt;
     var att2 = att/2;
     var utat = ut+ att2;
    math.innerHTML=`a object starts at a speed of ${vU} m/s <br>
    it is move with ${va} m/s&#xb2  Acceleration <br>
    It lasts for ${vt} second <br>
     you want to know S = ? <br><br>
     ruls number 3  is <br>
     S = Ut +  1/2 at &#xb2 <br>
    => S = ${vU} ✕ ${vt} + ½ ✕ ${va}✕${vt}&#xb2 <br>
    => S = ${ut} + ½ ✕ ${att} <br> => S  = ${ut} + ${att2} <br> => S  = ${utat} miter 
    <br> 
    
    This object travels ${utat} meter .`;
   
 }
 
 else if(ss.checked  && va==false)
 {
     var vmu = vv-vU;
     var vmw = vmu*vmu;
     var vmo = Math.sqrt(vmw);
     var vmo2 = vmo/2;
     var ans = vmo2*vt;

     math.innerHTML=` a object starts at a speed of ${vU} m/s <br>
     
     It lasts for ${vt} second <br> 
    and atlast it take ${vv} m/s speed <br> 
    you want to know S =?<br> <br>  ruls number 2 is <br>

      S = |v-U|/2 ✕ t <br>
    => S =| ${vv} - ${vU} | / 2 ✕ ${vt} <br>
    => S =${vmo} / 2 ✕ ${vt} <br>
    => S = ${vmo2} ✕ ${vt} <br>
    => S = ${ans} miter
     <br> 
      This object travels ${ans} meters .`;

   
 }
 
 else if( ss.checked  && vt==false )
 {
     var vv2= vv*vv;
     var vU2 = vU*vU;
     var vvu2 = vv2 - vU2;
     var va2 = va*2;
     var ans = vvu2/va2;
     math.innerHTML=`a object starts at a speed of ${vU} m/s <br>
       it is move with ${va} m/s&#xb2  Acceleration <br>
       and at last it is on ${vv} m/s  speed <br>
       you want to know S =?<br> <br>  ruls number 4 is <br>
      v &#xb2 = U &#xb2 + 2aS <br>
     => v &#xb2 - U &#xb2 = 2aS <br>
     => S = ( v &#xb2 - U &#xb2 ) / 2a <br>than.... <br>
     => S = ( ${vv}&#xb2 - ${vU}&#xb2 ) / 2 ✕ ${va} <br>
     => S = ( ${vv2} - ${vU2} ) / ${va2} <br>
     => S = ${vvu2} / ${va2} <br>
     => S = ${ans} miter <br>
     <br> This object travels ${ans} meters .
      `;
 }

 else if( ss.checked  && vU==false )
 {
  var vat = va * vt;
  var ans = vv - vat;
  var vmu = vv-ans;
  var vmw = vmu*vmu;
  var vmo = Math.sqrt(vmw);
  var vmo2 = vmo/2;
  var ans2 = vmo2*vt;
  
  math.innerHTML=`a object starts at a speed of ${vU} m/s <br>
   it is move with  ${va} m/s &#xb2 Acceleration <br>
   It lasts for ${vt} second <br>
   you have need  to know U =?<br> <br>  ruls number 1 is <br>
   v = U + at <br>
   => U = v - at <br> 
   => U = ${vv} - ( ${va} ✕ ${vt} ) <br> 
  => U = ${vv} - ${vat}  <br>
  => U =  ${ans} m/s <br>
   <br>
   This object starts at a speed of ${ans} m/s. <br>
   now <br>
you want to know S =? <br> <br>  ruls number 2 is <br>

   S = |v-U|/2 ✕ t <br>
 => S =| ${vv} - ${ans} | / 2 ✕ ${vt} <br>
 => S =${vmo} / 2 ✕ ${vt} <br>
 => S = ${vmo2} ✕ ${vt} <br>
 => S = ${ans2} miter
  <br> 
   This object travels ${ans2} meters

   `;
 }
 // ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞  ⊞⊞⊞⊞⊞  ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞
 // ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞ ⊞⊞⊞  ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞
 // ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞  ⊞  ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞
 // ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞  ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞
 else if(vvv.checked && vs==false )
 {
    var vU2 = Number(vU);
     var vat = va * vt;
     var ans = vat + vU2;
     math.innerHTML=`a object starts at a speed of ${vU} m/s <br>
       it is move with ${va} m/s&#xb2  Acceleration <br>
       It lasts for ${vt} second <br>
      you want to know V =?<br> <br>  ruls number 1 is <br>
      v = U + at <br>
     => v = ${vU} + ( ${va} ✕ ${vt} )<br>
     => v = ${vU} + ${vat} <br>
     => v = ${ans} m/s <br>
      <br>
      This object reaches the latest speed of ${ans} m/s .
      `;
 }
 else if(vvv.checked && va==false)
 {
     var vU2 = Number(vU);
     var vs2 = vs*2;
     var ex = vs2 / vt;
     var vuas = ex + vU2;
     
     math.innerHTML=`a object starts at a speed of ${vU} m/s <br>
     it is  travels ${vs} meters <br>
     It lasts for ${vt} second <br>
      you want to know V =?<br> <br>  ruls number 2 is <br>
      S = |v-U| / 2 * t <br>
      => v - U = 2S / t<br>
      => v = (2S / t) + U<br>
     => v =( 2✕${vs} /  ${vt}) + ${vU} <br>
     => v =( ${vs2} / ${vt}) + ${vU} <br>
     => v = ${ex} + ${vU} <br>
     => v = ${vuas} m/s <br>
      <br>
      This object reaches the latest speed of ${vuas} m/s .
      `;
 }
 else if( vvv.checked && vt==false )
 {
     var vU2 = vU*vU;
     var v2as = 2 * va * vs;
     var vuas = vU2 + v2as;
     var ans = Math.sqrt(vuas);

     math.innerHTML=`a object starts at a speed of ${vU} m/s <br>
       it is move with  ${va} m/s &#xb2 <br>
       and it is  travels ${vs} miter <br>
      you want to know V =?<br> <br>  ruls number 4 is <br>
      v &#xb2 = U &#xb2 + 2aS <br>
     => v&#xb2 = ${vU}&#xb2 + ( 2 ✕ ${va} ✕ ${vs} ) <br>
     => v&#xb2 = ${vU2} + ${v2as} <br>
     => v&#xb2 = ${vuas} <br>
     => v = √${vuas} <br>
     => v =  ${ans} m/s <br>
      <br>
      This object reaches the latest speed of ${ans} m/s .
      `; 
 }
 

 else if(vvv.checked && vU==false )
 {
     var vtt = vt*vt;
     var vatt2 = (va*vtt)/2;
     var vastt2 = vs-vatt2;
     var ans = vastt2/vt;  
     var vat = va * vt;
     var ans2 = vat + ans;

     math.innerHTML= `a object  is travels ${vs} miter <br>
       it  move with  ${va} m/s&#xb2 Acceleration <br>
       It lasts for ${vt} second <br>
      you want to know U =?<br> <br>  ruls number 3 is <br>
      S = Ut + ½ at&#xb2  <br>
      =>Ut =S - ½at&#xb2 <br> 
      => U = (S - ½at&#xb2)/ t <br> 
      => U = (${vs} - ½ ✕ ${va} ✕ ${vt}&#xb2 ) / ${vt}<br> 
      => U = ( ${vs} - ½ ✕ ${va} ✕ ${vtt} ) / ${vt} <br>
      => U = ( ${vs} - ${vatt2} ) / ${vt} <br>
      => U = ${vastt2} / ${vt} <br>
     => U =  ${ans} m/s <br>
      <br>
      This object starts at a speed of ${ans} m/s. <br>
      you want to know V =?<br> <br>  ruls number 1 is <br>
      v = U + at <br>
     => v = ${ans} + ( ${va} ✕ ${vt} )<br>
     => v = ${ans} + ${vat} <br>
     => v = ${ans2} m/s <br>
      <br>
      This object reaches the latest speed of ${ans2} m/s .
      `; 
      
 } 
 // ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞  ⊞⊞⊞⊞⊞⊞  ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞
 // ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞  ⊞⊞⊞⊞⊞⊞  ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞
 // ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞    ⊞⊞   ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞
 // ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞       ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞
 else if( uu.checked && vs==false )
 {
     var vat = va * vt;
     var ans = vv - vat;

     math.innerHTML= ` a object starts at a speed of ${vU} m/s <br>
      it is move with  ${va} m/s &#xb2 Acceleration <br>
      It lasts for ${vt} second <br>
      you want to know U =?<br> <br>  ruls number 1 is <br>
      v = U + at <br>
      => U = v - at <br> 
      => U = ${vv} - ( ${va} ✕ ${vt} ) <br> 
     => U = ${vv} - ${vat}  <br>
     => U =  ${ans} m/s <br>
      <br>
      This object starts at a speed of ${ans} m/s.
      `;
 }

 else if( uu.checked && va==false )
 {
     var vs2 = 2* vs;
     var vs2t = vs2 / vt;
     var ans = vv - vs2t;

     math.innerHTML=`a object  is  travels ${vs} miter <br>
      it starts at a speed of ${vU} m/s <br>
     It lasts for ${vt} second <br> 
      you want to know U =?<br> <br>  ruls number 2 is <br>
      S = (v-U)/2 ✕ t <br>
      => S/t = (v-U)/2 <br> 
      => 2S/t = v-U <br> 
      => (2S/t)-v = -U <br> 
      => U = v-(2S/t) <br> 
      => U = ${vv} - ( 2 ✕${vs} / ${vt} ) <br> 
     => U = ${vv} - ( ${vs2} / ${vt} )  <br>
     => U = ${vv} - ${vs2t} <br>
     => U =  ${ans} m/s <br>
      <br>
      This object starts at a speed of ${ans} m/s.
      `; 
      
 }   
    
    
 
 else if(uu.checked && vv==false )
 {
     var vtt = vt*vt;
     var vatt2 = (va*vtt)/2;
     var vastt2 = vs-vatt2;
     var ans = vastt2/vt; 

     math.innerHTML=`a object  is travels ${vs} miter <br>
       it  move with  ${va} m/s&#xb2 Acceleration <br>
       It lasts for ${vt} second <br>
      you want to know U =?<br> <br>  ruls number 3 is <br>
      S = Ut + ½ at&#xb2  <br>
      =>Ut =S - ½at&#xb2 <br> 
      => U = (S - ½at&#xb2)/ t <br> 
      => U = (${vs} - ½ ✕ ${va} ✕ ${vt}&#xb2 ) / ${vt}<br> 
      => U = ( ${vs} - ½ ✕ ${va} ✕ ${vtt} ) / ${vt} <br>
      => U = ( ${vs} - ${vatt2} ) / ${vt} <br>
      => U = ${vastt2} / ${vt} <br>
     => U =  ${ans} m/s <br>
      <br>
      This object starts at a speed of ${ans} m/s.
      `;
      
 }
 else if( uu.checked && vt==false )
 {
     var  vv2 = vv * vv;
     var vas2 = 2 * va * vs;
     var ans = vv2 - vas2;
     var ans2 = Math.sqrt(ans);

     math.innerHTML=`a object is travels for  ${vs} miter <br>
      it  move with  ${va} m/s&#xb2 Acceleration <br>
      and  atlast it  take  ${vv} m/s&#xb2 speed <br>
      you want to know U =?<br> <br>  ruls number 4 is <br>
      v&#xb2 = U&#xb2 + 2as<br>
      => v&#xb2 - 2aS = U&#xb2  <br> 
      => U&#xb2 = v&#xb2 - 2aS <br> 
      => U&#xb2 = ${vv}&#xb2 - ( 2 ✕ ${va} ✕ ${vs} ) <br> 
     => U&#xb2 = ${vv} - ${vas2}  <br>
     => U&#xb2 = ${vv2} - ${vas2} <br>
     => U =  √${ans} <br>
     => U =  ${ans2} m/s <br>
      <br>
      This object starts at a speed of ${ans2} m/s.
      `;
      
 } 
   // ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞ ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞
 // ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞ ⊞ ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞
 // ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞       ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞
 // ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞  ⊞⊞⊞   ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞
 

 else if(aa.checked && vs==false )
 {
     var  vvu = vv - vU;
     var  ans = vvu/vt;
     math.innerHTML=`a object starts at a speed of ${vU} m/s <br>
     It lasts for ${vt} second<br>
      and atlast it  take  ${vv} m/s speed <br>
      you want to know U =?<br> <br>  ruls number 1 is <br>
      v = U + at <br>
      => a = (v - U) / t <br> 
      => a = ( ${vv}- ${vU}) / ${vt} <br> 
      => a = ${vvu} / ${vt} <br> 
     => a = ${ans} m/s&#xb2 <br> 
      <br>
      This object moves at an acceleration of  ${ans} m/s&#xb2 .
      `;  
 }
 else if(aa.checked && vv==false )
 {
     var  vut = vU * vt;
     var vsut = vs - vut ;
     var vsut2 = 2 * vsut;
     var vt2 = vt * vt;
     var  ans = vsut2 / vt2;

     math.innerHTML=` a object is travels for ${vs} miter <br>
     This object starts at a speed of ${ans} m/s <br>
     It lasts for ${ans} second<br>
      you want to know U =?<br> <br>  ruls number 3 is <br>
      S = Ut + ½ a t&#xb2 <br>
      =>½ a t&#xb2 = S - Ut   <br> 
      => a = 2 * ( S - Ut) ÷ t&#xb2 <br> 
      => a = 2 * { ${vs} - ( ${vU} ✕ ${vt}) } ÷ ${vt}&#xb2 <br> 
     => a = 2 *  { ${vs} - ${vut} } ÷ ${vt2}  <br> 
     => a = 2 *  ${vsut} ÷ ${vt2}  <br> 
     => a = ${vsut2} ÷ ${vt2}  <br> 
     => a = ${ans} m/s&#xb2 <br> 
      <br>
      This object moves at an acceleration of  ${ans} m/s&#xb2 .
      `;  
 }

 else if(aa.checked && vt==false )
 {
     var  vv2 = vv * vv;
     var vU2 = vU * vU;
     var vvu2 = vv2 - vU2;
     var  v2s  = vs * 2 ;
     var ans = vvu2 / v2s;


     math.innerHTML=` a object is travels for ${vs} miter <br>
     it starts at a speed of ${vU} m/s <br>  
      at last it take  ${vv} m/s speed <br>
      you want to know a =?<br> <br>  ruls number 4 is <br>
      v&#xb2 = U&#xb2 + 2aS <br>
      =>½ a t&#xb2 = S - Ut   <br> 
      => 2aS = v&#xb2 - U&#xb2 <br> 
      => a = ( v&#xb2 - U&#xb2 ) / 2S <br> 
      => a = ( ${vv}&#xb2 - ${vU}&#xb2 ) / 2 ✕ ${vs} <br> 
      => a = ( ${vv2} - ${vU2} ) / ${v2s} <br> 
      => a = ${vvu2} / ${v2s} <br> 
     => a = ${ans} m/s&#xb2 <br> 
      <br>
      This object moves at an acceleration of  ${ans} m/s&#xb2 .
      `;  
 }
 else if(aa.checked && vU==false )
 {
      var vs2 = 2* vs;
      var vs2t = vs2 / vt;
      var ans = vv - vs2t;
      var  vvu = vv - ans;
      var  ans2 = vvu/vt;

 math.innerHTML=`a object  is  travels ${vs} miter <br>
 it move with ${va} m/s&#xb2 Acceleration <br>
 It lasts for ${vt} second <br> 
  at first you need to know U =? <br> <br>  ruls number 2 is <br>
  S = (v-U)/2 ✕ t <br>
  => S/t = (v-U)/2 <br> 
  => 2S/t = v-U <br> 
  => (2S/t)-v = -U <br> 
  => U = v-(2S/t) <br> 
  => U = ${vv} - ( 2 ✕${vs} / ${vt} ) <br> 
 => U = ${vv} - ( ${vs2} / ${vt} )  <br>
 => U = ${vv} - ${vs2t} <br>
 => U =  ${ans} m/s <br>
  <br>
  This object starts at a speed of ${ans} m/s. <br>
  you want to know U =?<br> <br>  ruls number 1 is <br>
  v = U + at <br>
  => a = (v - U) / t <br> 
  => a = ( ${vv}- ${ans}) / ${vt} <br> 
  => a = ${vvu} / ${vt} <br> 
 => a = ${ans2} m/s&#xb2 <br> 
  <br>
  This object moves at an acceleration of  ${ans2} m/s&#xb2 .
  `;  
 }
    
   // ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞               ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞
 // ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞               ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞
 // ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞    ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞
 // ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞    ⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞⊞
 
 else if(tt.checked && vs==false )
 {
     var  vvu = vv- vU;
     var ans = vvu/va; 

     math.innerHTML=`a object starts at a speed of ${vU} m/s <br> 
     it move with ${va} m/s&#xb2 Acceleration <br>
      at last it take  ${vv} m/s speed <br>
      you want to know t =?<br> <br>  ruls number 1 is <br>
      v = U + at <br>
      =>at = v - U  <br> 
      =>t = ( v - U ) / a <br> 
      => t = ( ${vv} - ${vU} ) / ${va} <br> 
      => t = ${vvu} / ${va} <br> 
     => t = ${ans} second  <br> 
      <br>
      It lasts for ${ans} second .
      `;  
 }
 else if(tt.checked && va==false )
 {
     var  v2s = 2 * vs;
     var vvu = vv - vU;
     var vvu2 = vvu * vvu;
     var vvu3 = Math.sqrt(vvu2);
     var ans = v2s / vvu3;

     math.innerHTML=`a object starts at a speed of ${vU} m/s <br> 
      it is travels for ${vs} miter  <br>
      at last it take  ${vv} m/s speed <br>
      you want to know t =?<br> <br>  ruls number 1 is <br>
      t =2S / (|v-U|) <br>
     => t =2 ✕ ${vs} / (| ${vv} -${vU} |) <br>
     => t =${v2s} / (|${vvu3} |) <br>
     => t =${v2s} / ${vvu3} <br>
     => t = ${ans} second  <br> 
      <br>
      It lasts for ${ans} second .
      `;  
 }
 else if(tt.checked  && vv==false )
 {
     var vU2 = vU*vU;
     var v2as = 2 * va * vs;
     var vuas = vU2 + v2as;
     var ans = Math.sqrt(vuas);
      var  vvu = ans- vU;
     var ans2 = vvu/va;

     math.innerHTML=`a object starts at a speed of ${vU} m/s <br>
       it is move with  ${va} m/s &#xb2 <br>
       and it is  travels ${vs} miter <br>
      at first I need to know V =?<br> <br>  ruls number 4 is <br>
      v &#xb2 = U &#xb2 + 2aS <br>
     => v&#xb2 = ${vU}&#xb2 + ( 2 ✕ ${va} ✕ ${vs} ) <br>
     => v&#xb2 = ${vU2} + ${v2as} <br>
     => v&#xb2 = ${vuas} <br>
     => v = √${vuas} <br>
     => v =  ${ans} m/s <br>
      <br>
      This object reaches the latest speed of ${ans} m/s .
      <br>
      <br>


      now .. <br> <br>
      a object starts at a speed of ${vU} m/s <br> 
     it move with ${va} m/s&#xb2 Acceleration <br>
      at last it take  ${ans} m/s speed <br>
      you want to know t =?<br> <br>  ruls number 1 is <br>
      v = U + at <br>
      =>at = v - U  <br> 
      =>t = ( v - U ) / a <br> 
      => t = ( ${ans} - ${vU} ) / ${va} <br> 
      => t = ${vvu} / ${va} <br> 
     => t = ${ans2} second  <br> 
      <br>
      It lasts for ${ans2} second .
      `;  
 } 
 
 else if(tt.checked && vU==false )
 {
  var  vv2 = vv * vv;
  var vas2 = 2 * va * vs;
  var ans = vv2 - vas2;
  var ans2 = Math.sqrt(ans);
  var  vvu = vv- ans2;
  var ans3 = vvu/va; 

  math.innerHTML=`a object is travels for  ${vs} miter <br>
   it  move with  ${va} m/s&#xb2 Acceleration <br>
   and  atlast it  take  ${vv} m/s&#xb2 speed <br>
   at first you need  to know U =? <br> <br>  ruls number 4 is <br>
   v&#xb2 = U&#xb2 + 2as<br>
   => v&#xb2 - 2aS = U&#xb2  <br> 
   => U&#xb2 = v&#xb2 - 2aS <br> 
   => U&#xb2 = ${vv}&#xb2 - ( 2 ✕ ${va} ✕ ${vs} ) <br> 
  => U&#xb2 = ${vv} - ${vas2}  <br>
  => U&#xb2 = ${vv2} - ${vas2} <br>
  => U =  √${ans} <br>
  => U =  ${ans2} m/s <br>
   <br>
   This object starts at a speed of ${ans2} m/s.<br>
   you want to know t =?<br> <br>  ruls number 1 is <br>
   v = U + at <br>
   =>at = v - U  <br> 
   =>t = ( v - U ) / a <br> 
   => t = ( ${vv} - ${ans2} ) / ${va} <br> 
   => t = ${vvu} / ${va} <br> 
  => t = ${ans3} second  <br> 
   <br>
   It lasts for ${ans3} second .

   `; 
 }

}) ; 

// ⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂
// ▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣
//  main program point is here  ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▲▲▲▲▲▲▲▲▲▲▲▲▲▶▶▶▶▶▶▶▶▶▶▶▼▼▼




var color = document.getElementById("color");
var ok = document.getElementById("colorbtn");
var pra = document.getElementById("colorpra");
var sett = document.querySelector(".satting");
var body = document.querySelector("body");
var colorb = document.getElementById("colorb"); 
ok.addEventListener("click" ,function(){
   var colorr = color.value;
   var colorrb = colorb.value; 
   body.style.backgroundColor=colorr;
   math.style.color=colorrb;
});

var deflt = document.getElementById("deflt");
deflt.addEventListener("click", function(){
   body.style.backgroundColor="rgb(53, 53, 53)";
   math.style.color="white";
});

var fontsz = document.getElementById("fontsize");
var sizebtn = document.getElementById("sizebtn");
sizebtn.addEventListener("click", function(){
  var fontz = fontsz.value;
  math.style.fontSize= fontz+"px";
  if(fontz>40)
  {
    alert("its so long ");
    math.style.fontSize="";
  }
});

var defltsize = document.getElementById("defltsize");
defltsize.addEventListener("click" , function(){
  math.style.fontSize="";
});

var settne = document.getElementById('sattingp')
var setting = document.getElementById("settingb"); 
setting.addEventListener("click" ,function(){ 
   new Audio("wave.wav").play();
   settne.style.left="5vw";  
   temp.style.top="-200vh";
   clo.style.top="-25px";
  });
  
  var crsttn =document.getElementById("crsttn");
  crsttn.addEventListener("click",function(){
    
    settne.style.left=""; 
    new Audio("wave.wav").play();
    temp.style.top="60px";
    clo.style.top="25px";
});


// ⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂
// ▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣
//  main program point is here  ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▲▲▲▲▲▲▲▲▲▲▲▲▲▶▶▶▶▶▶▶▶▶▶▶▼▼▼


var crsinfo = document.getElementById("crsinfo");
var con = document.querySelector(".con");
var contactt = document.getElementById("contactt"); 

var namee = document.querySelector(".namee");
var phone = document.querySelector(".phone");
var email = document.querySelector(".email");
var language = document.querySelector(".language"); 
var scrn = document.querySelector(".scrn");
var scrn2 = document.querySelector(".scrn2");
var shadoww = "5px 5px 5px black, -5px -5px 5px white";
// ⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂
// ▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣
//  main program point is here  ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▲▲▲▲▲▲▲▲▲▲▲▲▲▶▶▶▶▶▶▶▶▶▶▶▼▼▼
namee.addEventListener("click", function(){
   namee.style.boxShadow="0 0 0 black";
   phone.style.boxShadow=shadoww;
   email.style.boxShadow=shadoww;
   language.style.boxShadow=shadoww;
   scrn.innerHTML="Sohel Rana";
   scrn2.innerHTML="";

});
phone.addEventListener("click", function(){
  namee.style.boxShadow=shadoww;
  phone.style.boxShadow="0 0 0 black";
  email.style.boxShadow=shadoww;
  language.style.boxShadow=shadoww;
  scrn.innerHTML="01314456549 ";
  scrn2.innerHTML="";

});
email.addEventListener("click", function(){
  namee.style.boxShadow=shadoww;
  phone.style.boxShadow=shadoww;
  email.style.boxShadow="0 0 0 black";
  language.style.boxShadow=shadoww;
  scrn2.innerHTML="sohelranassr221@gmail.com <br> 50h3l1st@gmail.com";
  scrn.innerHTML="";

});
language.addEventListener("click", function(){
  namee.style.boxShadow=shadoww;
  phone.style.boxShadow=shadoww;
  email.style.boxShadow=shadoww;
  language.style.boxShadow="0 0 0 black";
  scrn.innerHTML="Bangla , English , Hindi and I can understand Urdu";
  scrn2.innerHTML="";
});
  

crsinfo.addEventListener("click", function(){
   con.style.left="-150vw";
   new Audio("wave.wav").play(); 
   temp.style.top="60px"; 
   clo.style.top="25px";
});

contactt.addEventListener("click", function(){
  con.style.left="0";
  new Audio("wave.wav").play(); 
  temp.style.top="-200vh"; 
  clo.style.top="-25px";

});

//alsdkjfoijck asjdfi ujadsjfoiadjsfa lskjaoisdufpoaidf






