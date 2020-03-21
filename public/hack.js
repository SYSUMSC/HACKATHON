function foLogin() {

    var t_name = document.getElementById("t_name");
    var myselect = document.getElementById("t_num");
    var index=myselect.selectedIndex;
    var oError = document.getElementById("error_box");
    var form=document.getElementById("test_form");
    var t1n = document.getElementById("t1_name");
    var t2n = document.getElementById("t2_name");
    var t3n = document.getElementById("t3_name");
    var t4n = document.getElementById("t4_name");
    var t1s = document.getElementById("t1_sch");
    var t2s = document.getElementById("t2_sch");
    var t3s = document.getElementById("t3_sch");
    var t4s = document.getElementById("t4_sch");
    var t1p = document.getElementById("t1_phone");
    var t2p = document.getElementById("t2_phone");
    var t3p = document.getElementById("t3_phone");
    var t4p = document.getElementById("t4_phone");
    var t1e = document.getElementById("t1_edu");
    var t2e = document.getElementById("t2_edu");
    var t3e = document.getElementById("t3_edu");
    var t4e = document.getElementById("t4_edu");
    var t1g = document.getElementById("t1_grade");
    var t2g = document.getElementById("t2_grade");
    var t3g = document.getElementById("t3_grade");
    var t4g = document.getElementById("t4_grade");
    
    var t1em=document.getElementById("t1_email");
    var t2em=document.getElementById("t2_email");
    var t3em=document.getElementById("t3_email");
    var t4em=document.getElementById("t4_email");
    var t1m=document.getElementById("t1_major");
    var t2m=document.getElementById("t2_major");
    var t3m=document.getElementById("t3_major");
    var t4m=document.getElementById("t4_major");



    var isError = true;

    oError.innerHTML = "<br>";

    if (t_name.value.length ==0) {

        oError.innerHTML = "*未填写队伍名称*";

        isError = false;

        

    }
    if(t1p.value.length==0||t1s.value.length==0||t1g.value.length==0||t1e.value.length==0||t1em.value.length==0||t1m.value.length==0){
        oError.innerHTML = "*第一个成员信息不完整*";

        isError = false;

       
    }
    if(index>=2&&(t2p.value.length==0||t2s.value.length==0||t2g.value.length==0||t2e.value.length==0||t2em.value.length==0||t2m.value.length==0)){
        oError.innerHTML = "*第二个成员信息不完整*";

        isError = false;

     
    }
    if(index>=3&&(t3p.value.length==0||t3s.value.length==0||t3g.value.length==0||t3e.value.length==0||t3em.value.length==0||t3m.value.length==0)){
        oError.innerHTML = "*第三个成员信息不完整*";

        isError = false;

       
    }
    if(index>=4&&(t4p.value.length==0||t4s.value.length==0||t4g.value.length==0||t4e.value.length==0||t4em.value.length==0||t4m.value.length==0)){
        oError.innerHTML = "*第四个成员信息不完整*";

        isError = false;

    }
    if(isError==1){
        return true;
    }else{
        return false;
    }
}