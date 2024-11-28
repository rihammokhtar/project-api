var inputname =document.getElementById("demo1");
var inputemail = document.getElementById("demo2");
var inputpass =document.getElementById("demo3");
var inputage =document.getElementById("demo4");
var inputphone =document.getElementById("demo5");
var massgname =document.getElementById("name");
var massg =document.getElementById("email");
var massg2 =document.getElementById("pass");




 var details=JSON.parse(localStorage.getItem("details")) ||[];

function addpersonaldata(){
    if(validationname() ==true && validationemail()==true  && validationpass()==true){
        var data ={
            name:inputname.value,
            age:inputage.value,
            phone:inputphone.value,
            pass:inputpass.value,
            email:inputemail.value

        }
        details.push(data);
        
    
        localStorage.setItem("data",JSON.stringify(details));
    }
    clearForm()

};


function clearForm(){
    inputname.value=null;
    inputage.value=null;
    inputemail.value=null;
    inputphone.value=null;
    inputpass.value=null;

}






function validationname(){
    var text = inputname.value;
var regex =/^[A-Z][a-z]{3,8}$/;



if(regex.test (  text ) == true){
inputname.classList.add("is-valid");
inputname.classList.remove("is-invalid");
massgname.classList.add("d-none");
return true;

}else{
    inputname.classList.add("is-invalid");
    inputname.classList.remove('is-valid');
    massgname.classList.remove("d-none");

return false;

}

}
function validationemail(){
    var text2 = linkurl.value;
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(regex.test(text2) == true){
        inputemail.classList.add("is-valid");
        inputemail.classList.remove("is-invalid");
massg.classList.add("d-none");
return true;

    } else {
        inputemail.classList.add("is-invalid");
        inputemail.classList.remove("is-valid");
    massg.classList.remove("d-none");
return false;
    }
}



function validationpass(){
    var text2 = linkurl.value;
    var regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[A-Z]).{8,}$/;

    if(regex.test(text2) == true){
        inputpass.classList.add("is-valid");
        inputpass.classList.remove("is-invalid");
massg.classList.add("d-none");
return true;

    } else {
        inputpass.classList.add("is-invalid");
        inputepass.classList.remove("is-valid");
    massg2.classList.remove("d-none");
return false;
    }
}