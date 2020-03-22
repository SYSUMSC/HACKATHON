function foLogin() {

    var oUname = document.getElementById("uname");

    var oError = document.getElementById("error_box");

    var oUpsd = document.getElementById("upsd");



    var isError = true;

    oError.innerHTML = "<br>";



    if (oUname.value.length < 6 || oUname.value.length > 12) {

        oError.innerHTML = "*无该用户名信息*";

        isError = false;

        return 0;

    }else if(oUname.value.charCodeAt(0)>=48 &&(oUname.value.charCodeAt(0)<=57)){

        oError.innerHTML="*无该用户名信息*";

        return 0;



    }else for (var i=0;i<oUname.value.length;i++){

       if((oUname.value.charCodeAt(i)<48)||(oUname.value.charCodeAt(i)>57)&&(oUname.value.charCodeAt(i)<58)&&(oUname.value.charCodeAt(i)>97)){

        oError.innerHTML="*无该用户名信息*";

        return 0;

    }

    }

    if (oUpsd.value.length < 6 ) {

        oError.innerHTML = "*密码大于6位*";

        isError = false;

        return 0;

    }
return 1;
}
