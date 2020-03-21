function foLogin() {
    var t_name = document.getElementById("t_name");
    var oError = document.getElementById("error_box");
    
    var isError = true;
    oError.innerHTML = "<br>";
    if (t_name.value.length ==0) {
        oError.innerHTML = "*未填写队伍名称*";
        isError = false;
        return;
    }

}