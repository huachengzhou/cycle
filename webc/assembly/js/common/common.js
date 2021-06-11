(function ($) {
    //表单自动赋值
    $.fn.extend({
        initForm: function (options) {
            //默认参数
            var defaults = {
                formdata: "",
                isDebug: false   //是否需要调试，这个用于开发阶段，发布阶段请将设置为false，默认为false,true将会把name value打印出来
            }
            //如果传入的json字符串，将转为json对象
            var tempData = "";
            if ($.type(options) === "string") {
                defaults.formdata = JSON.parse(options);
            } else {
                defaults.formdata = options;
            }
            //设置参数
            // var setting = $.extend({}, defaults, tempData);
            var setting = defaults;
            var form = this;
            formdata = setting.formdata;

            //如果传入的json对象为空，则不做任何操作
            if (!$.isEmptyObject(formdata)) {
                var debugInfo = "";
                $.each(formdata, function (key, value) {
                    //是否开启调试，开启将会把name value打印出来
                    if (setting.isDebug) {
                        debugInfo += "name:" + key + "; value:" + value + "\r\n ";
                    }
                    //表单处理
                    var formField = form.find("[name='" + key + "']");
                    if ($.type(formField[0]) === "undefined") {
                        if (setting.isDebug) {
                            console.warn("can not find name:[" + key + "] in form!!!"); //没找到指定name的表单
                        }
                    } else {
                        var fieldTagName = formField[0].tagName.toLowerCase();
                        if (fieldTagName == "input") {
                            if (formField.attr("type") == "radio") {
                                $("input:radio[name='" + key + "'][value='" + value + "']").attr("checked", "checked");
                            } else if (formField.attr("type") == "checkbox") {
                                $("input:checkbox[name='" + key + "'][value='" + value + "']").prop("checked", true);
                            } else {
                                formField.val(value);
                            }
                        } else if (fieldTagName == "label" || fieldTagName == "a") {
                            formField.html(value);
                        } else {
                            formField.val(value);
                        }
                    }
                    //图片链接处理form.find("img[fieldata=img_url]")
                    var formImage = form.find("img[fieldata=" + key + "]");
                    if ($.type(formImage[0]) != "undefined") {
                        formImage.attr("src", value);
                    }
                    //a链接处理
                    var formLink = form.find("a[fieldata=" + key + "]");
                    if ($.type(formLink[0]) != "undefined") {
                        formLink.attr("href", value);
                    }
                })
                if (setting.isDebug) {
                    console.log(debugInfo);
                }
            }
            return form;    //返回对象，提供链式操作
        }
    });

})(jQuery);


//表单查询参数
function formParams(formId) {
    return formSerializeArray($("#" + formId));
}

function formSerializeArray(obj) {
    var ret = {};
    var queryParams = obj.serializeArray();
    $.each(queryParams, function (i, field) {
        if (field.value != undefined) {
            if (ret[field.name] != undefined && ret[field.name] != '') {
                ret[field.name] = ret[field.name] + "," + field.value;
            } else {
                ret[field.name] = field.value;
            }
        }
    })
    return ret;
}


//向form表单中添加参数
function formAddParam(formId, params) {
    var form = $("#" + formId);
    if (form && params) {
        form.empty();
        $.each(params, function (name, value) {
            var item = "<input type=\"hidden\" name=\"" + name + "\" value=\"" + value + "\" />";
            form.append(item);
        })
    }
}


/**
 * 去除字符
 * @param str
 * @param item
 */
function trimChar(str, item) {
    if (!item) item = " ";
    var reStart = new RegExp("^" + item + "+");
    var reEnd = new RegExp(item + "+$");
    return str.replace(reStart, "").replace(reEnd, "");
}


/*
 * 功能：对JSON对象字符串数组进行多字段（多列）排序
 * 参数：
 *   objArr: 目标数组
 *   keyArr: 排序字段，以数组形式传递
 *   type：排序方式，undefined以及asc都是按照升序排序，desc按照降序排序
 * */
function sortObjectArray(objArr, keyArr, type) {
    if (type != undefined && type != 'asc' && type != 'desc') {
        return 'error';
    }
    var order = 1;
    if (type != undefined && type == 'desc') {
        order = -1;
    }
    var key = keyArr[0];
    objArr.sort(function (objA, objB) {
        if (objA[key] > objB[key]) {
            return order;
        } else if (objA[key] < objB[key]) {
            return 0 - order;
        } else {
            return 0;
        }
    })
    for (var i = 1; i < keyArr.length; i++) {
        var key = keyArr[i];
        objArr.sort(function (objA, objB) {
            for (var j = 0; j < i; j++) {
                if (objA[keyArr[j]] != objB[keyArr[j]]) {
                    return 0;
                }
            }
            if (objA[key] > objB[key]) {
                return order;
            } else if (objA[key] < objB[key]) {
                return 0 - order;
            } else {
                return 0;
            }
        })
    }
    return objArr;
}

/**
 * 格式化下划线
 * @param key
 * @param value
 */
function formatToUnderline(var1, var2, separator) {
    if (!var1) return "";
    if (!separator) {
        separator = ',';
    }
    var keyArray = var1.split(separator);
    if (var2) {
        var valueArray = var2.split(separator);
    }
    var resultStr = '';
    $.each(keyArray, function (i, item) {
        resultStr += item + '_' + valueArray[i] + ',';
    })
    return resultStr.replace(/,$/, '');
};

// 获取指定范围内的随机数
function randomAccess(min,max){
    return Math.floor(Math.random() * (min - max) + max)
};

// 解码
function decodeUnicode(str) {
    //Unicode显示方式是\u4e00
    str = "\\u"+str
    str = str.replace(/\\/g, "%");
    //转换中文
    str = unescape(str);
    //将其他受影响的转换回原来
    str = str.replace(/%/g, "\\");
    return str;
};

/*
*@param Number NameLength 要获取的名字长度
*/
function getRandomName(NameLength){
    let name = "";
    for(let i = 0;i<NameLength;i++){
        let unicodeNum  = "";
        unicodeNum = randomAccess(0x4e00,0x9fa5).toString(16);
        name += decodeUnicode(unicodeNum)
    }
    return name
}


function getRandomChineseWord(NameLength) {
    if (! NameLength){
        NameLength = 4;
    }
    return getRandomName(NameLength);
}

function getRandomNumber() {
    let num = Math.random() * 10000+ Math.random() * 1000 + Math.round(Math.random()) * 100 + Math.round(Math.random()) * 10 + Math.round(Math.random());
    return num.toFixed(2);
}

function getRandomIntegerNumber() {
    let count = 1000;
    let num = 0;
    for (let i = 0; i < count; i += 2) {
        num += Math.round(Math.random()) * i;
    }
    for (let i = 0; i < count; i += 3) {
        num += Math.floor(Math.random()) * i;
    }
    for (let i = 0; i < count; i += 5) {
        num += Math.floor(Math.random()) * i + Math.round(Math.random()) * i;
    }
    return num;
}


 function arrUnique(arr,name){
    let ojb = {};
    arr = arr.reduce(function(prevArr, currentItem) {
        //利用对象的键名无法重复的特点，mch_id是唯一区别的属性值
        ojb[currentItem[name]] ? '' : ojb[currentItem[name]] = true && prevArr.push(currentItem);
        return prevArr
    }, []) ;
    return arr;
}


function formatMoney(s, n) {
    if (!isNumber(s)) return s;
    s = Number(s);
    n = n > 0 && n <= 20 ? n : 2;
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";//更改这里n数也可确定要保留的小数位
    var l = s.split(".")[0].split("").reverse(),
        r = s.split(".")[1];
    t = "";
    for (i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    return t.split("").reverse().join("") + "." + r.substring(0, 2);//保留2位小数  如果要改动 把substring 最后一位数改动就可
}

//判断数据是否为数字
function isNumber(val) {
    if (val === '' || val == undefined || val == null) return false;
    if (isNaN(Number(val))) return false;
    val = Number(val);
    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if (regPos.test(val) || regNeg.test(val)) {
        return true;
    } else {
        return false;
    }
}

// 生成唯一编码
function createRandomId() {
    return (Math.random() * 10000000).toString(16).substr(0, 4) + '_' + (new Date()).getTime() + '_' + Math.random().toString().substr(2, 5);
}
