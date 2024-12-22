document.write("if -else examples-><br>");
var x=4;
var b=89;
var c=8;
if(x>b){

    document.write("  </br> x is biggest <br>>");
}
else if(b>c){
    document.write("b is biggest value");
}
else{
    document.write("c is biggest value ");
}
if(x%2 && b%2==0){
    document.write("both x and b values are positive!");
}
else{
    document.write("there is one odd number!");
}
document.write("<h1>switch case example</h1>")
var month=1;
switch(month){
    case 1:
        document.write("<br>im january");
        break;
    case 2:
        document.write("im february");
        break;
    case 3:
        document.write("im from march");
    default:
        document.write("invalid number");

}
document.write("loops");
for(var i=0;i<6;i++){
  document.write("<br>hello vamsi",i);
}
var r=1;
while(r<=50){
    document.write("im"+r+"|\t");
    r+=2;
}
var o=1;
do{
    document.write("im from do");
    o++;
}
while(o<=5);