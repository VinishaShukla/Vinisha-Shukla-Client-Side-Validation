function Vinisha(){
var password=document.forms["signup"]["password"].value;
var firstname =document.forms["signup"]["firstname"].value;
var lastname =document.forms["signup"]["lastname"].value;

if (firstname==null || firstname.length<3){
    alert("The FirstName should be MORE than 3");
    return(false);
}
if (lastname==null || lastname.length<3){

    alert("The LastName should be MORE than 3");
    return(false);
}
 if(password.length < 8)
 {
alert("The Password should be MORE than 8");

 }

}