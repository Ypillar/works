var num = 0, //运算的第一个字符
    result = 0, //运算结果
    numshow = "0"; //显示数字符
var operate = 0; //判断输入状态的标志 
var calcul = 0; //判断计算状态的标志 
var quit = 0; //防止重复按键的标志 
var cq = ""; //存取的数


// 123456789数字
function command(num) {
    var str = String(document.getElementById("display").value);
    str = (str != "0") ? ((operate == 0) ? str : "") : "";
    str = str + String(num); //给当前值追加字符 
    document.getElementById("display").value = str; //刷新显示 
    operate = 0; //重置输入状态 
    quit = 0; //重置防止重复按键的标志 
}

// 两个零
function dzero() {
    var str = String(document.getElementById("display").value);
    str = (str != "0") ? ((operate == 0) ? str + "00" : "0") : "0";
    document.getElementById("display").value = str;
    operate = 0;
}

// 小数点
function dot() {
    var str = String(document.getElementById("display").value);
    str = (str != "0") ? ((operate == 0) ? str : "0") : "0";
    for (var i = 0; i <= str.length; i++) {
        if (str.substr(i, 1) == ".") {
            return false;
        }

    }
    str = str + ".";
    document.getElementById("display").value = str;
    operate = 0;
}

// 删除末尾字符
function del() {
    var str = String(document.getElementById("display").value);
    str = (str != "0") ? str : "";
    str = str.substr(0, str.length - 1);
    str = (str != "") ? str : "0";
    document.getElementById("display").value = str;
}

// 清空
function clearscreen() {
    str = "0"
    document.getElementById("display").value = str;
    num = 0;
    numshow = "0";
    result = 0;
}
// sin
function _storage() {
    numshow = Number(document.getElementById("display").value);
    result = (Math.sin(numshow)).toFixed(8);
    result = parseFloat(result);
    document.getElementById("display").value = result;

}
//cos
function _deposit() {
    numshow = Number(document.getElementById("display").value);
    result = (Math.cos(numshow)).toFixed(8);
    result = parseFloat(result);
    document.getElementById("display").value = result;

}
//tan
function _storecleaning() {
    numshow = Number(document.getElementById("display").value);
    result = (Math.tan(numshow)).toFixed(8);
    result = parseFloat(result);
    document.getElementById("display").value = result;
}

//判断显示的数字是否为负数，是单击变正，否变为负数
function _positiveandnegative() {
    numshow = String(document.getElementById("display").value);
    if (numshow.indexOf("-") >= 0) {
        numshow = numshow.substr(1)
        document.getElementById("display").value = numshow;
    } else {
        numshow = "-" + numshow;
        document.getElementById("display").value = numshow;
    }

    str = "---6";
    console.log(str.substr(2));
}

function plus() { //加法 
    calculate(); //调用计算函数 
    operate = 1; //更改输入状态 
    calcul = 1; //更改计算状态为加 
}

function minus() { //减法 
    calculate();
    operate = 1;
    calcul = 2;
}

function times() { //乘法 
    calculate();
    operate = 1;
    calcul = 3;
}

function divide() { //除法 
    calculate();
    operate = 1;
    calcul = 4;
}

function persent() { //求余 
    calculate();
    operate = 1;
    calcul = 5;

}

function _reagan() { //求平方根

    numshow = Number(document.getElementById("display").value);
    result = (Math.sqrt(numshow)).toFixed(8);
    result = parseFloat(result);
    document.getElementById("display").value = result;
}

function equal() {
    calculate(); //等于 
    operate = 1;
    num = 0;
    result = 0;
    numshow = "0";
}

// 运算函数
function calculate() {
    numshow = Number(document.getElementById("display").value);
    if (num != 0) { //判断前一个运算数是否为零以及防重复按键的状态 
        switch (calcul) { //判断要输入状态 
            case 1:
                result = (Number(num) + numshow).toFixed(8);
                break; //计算"+" 
            case 2:
                result = (num - numshow).toFixed(8);
                break; //计算"-" 
            case 3:
                result = (num * numshow).toFixed(8);
                break;
            case 4:
                if (numshow != 0) { result = (num / numshow).toFixed(8); } else {

                    setTimeout(clearnote, 500);
                    result = "被除数不能为0";
                }
                break;
            case 5:
                result = num % numshow;
                break;


        }
        quit = 1; //避免重复按键 
    } else {
        result = numshow;
    }
    result = parseFloat(result);
    numshow = String(result);
    document.getElementById("display").value = numshow;
    num = result; //存储当前值 
}

function clearnote() { //清空提示 
    document.getElementById("display").value = "";
}
