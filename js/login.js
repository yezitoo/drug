$("#tel").on("change", function() {
    // debugger
    var phone = $("#tel").val();
    if (!(/^1[34578]\d{9}$/.test(phone))) {
        if ($(".notice")) {
            $(".notice").remove();
        }
        $("#tel").parent().append('<p style="color:red;font-size:12px;width:90%;margin:0 auto" class="notice">手机号输入有误，请重填</p>');
        $(this).val("");

    } else {
        if ($(".notice")) {
            $(".notice").remove();
        }
    }
})
$("#card").on("change",function(){
    var iscard=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;

    if(!iscard.test($("#card").val())){
        if ($(".notice")) {
            $(".notice").remove();
        }
        $("#tel").parent().append('<p style="color:red;font-size:12px;width:90%;margin:0 auto" class="notice">身份证号码有误，请重填</p>');
        $(this).val("");
    }else{
        if ($(".notice")) {
            $(".notice").remove();
        }
    }
})
$("#save").click(function() {
    if (!($("#name").val() && $("#tel").val() && $("#card").val())) {
        if ($(".notice")) {
            $(".notice").remove();
            $("#tel").parent().append('<p style="color:red;font-size:12px;width:90%;margin:0 auto" class="notice">输入框不能为空</p>')
        }
    }
    return false;
})
