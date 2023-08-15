var username=document.forms['form']['username'];
var email=document.forms['form']['email'];
var password=document.forms['form']['password'];
var cpassword=document.forms['form']['cpassword'];
var mobile=document.forms['form']['mobile'];
var submit=document.forms['form']['submit'];

var op="";
var op1="";

username.addEventListener('textInput',name_Verify);
password.addEventListener('textInput',pass_Verify);
cpassword.addEventListener('textInput',confirmpass_Verify);
mobile.addEventListener('textInput',mob_Verify);

var name_error=document.getElementById("name_error");
var pass_error=document.getElementById("pass_error");
var pass_error1=document.getElementById("pass_error1");
var mob_error=document.getElementById("mob_error");
var mob_error1=document.getElementById("mob_error1");
var cpass_error=document.getElementById("cpass_error");


//event.preventDefault();

function validated()
{
    
    if(username.value.length<5)
    {
        username.style.border="1px solid red";
         name_error.style.display="block";
         username.focus();
         return false;
    }

    if(password.value.length<7)
    {
        password.style.border="1px solid red";
        pass_error.style.display="block";
        password.focus();
        return false;
    }
    
    if(op.includes(op1) || password.value==="password")
    {
        
        password.style.border="1px solid red";
        pass_error1.style.display="block";
        password.focus();
        return false;
    }

    if(mobile.value.length<9)
    {
        mobile.style.border="1px solid red";
        mob_error.style.display="block";
        mobile.focus();
        return false;
    }

    if(mobile.value==="123456789")
    {
            mobile.style.border="1px solid red";
            mob_error1.style.display="block";
            mobile.focus();
            return false;
   }


   if(cpassword.value!=op )
   {
        cpassword.style.border="1px solid red";
        cpass_error.style.display="block";
        cpassword.focus();
        return false;
   }
    
}

function name_Verify()
{
    op1=username.value;
    if(username.value.length>=5)
    {
        username.style.border="1px solid green";
        name_error.style.display="none";
        return true;
    }

    else{
        validated();
    }

}

function pass_Verify()
{
    op=password.value;

    if(password.value.length>=7 )
    {
        password.style.border="1px solid green";
        pass_error.style.display="none";
        pass_error1.style.display="none";
        return true;
    }

    else{
        validated();
    }


}

function confirmpass_Verify()
{
    cpass_error.style.display="block";
    
    if(cpassword.value===op)
    {
        cpassword.style.border="1px solid green";
        cpass_error.style.display="none";
        return true; 
          
    }
    else{
        validated();
      }
}

function mob_Verify()
{
    mob_error1.style.display="none";
    mob_error.style.display="none";
    if(mobile.value.length===9)
    {
      
        if(mobile.value==="123456789")
        {
            validated();
        }

        else{
            return true;
        }
     
    }

    else{
        validated();
    }
}