/**
 * Created with JetBrains WebStorm.
 * User: Soul
 * Date: 13-11-6
 * Time: 下午6:37
 * To change this template use File | Settings | File Templates.
 */
var classNameControl = (function () {
    if (document.body.classList) {
        return {
            adds : function (ele,str) {
                var classArr = str.split (" ");
                    classArr.forEach(function (e) {
                        ele.classList.add(e);
                    });
            },
            removes : function (ele,str) {
                var classArr = str.split (" ");
                classArr.forEach(function (e) {
                    ele.classList.remove(e);
                });
            }
        }
    }else{
        return {
            adds : function (ele,str) {
                var classArr = str.split (" "),
                    length = classArr.length,
                    className = "",
                    i = 0;

                for (;i < length;i += 1) {
                    className = className + classArr[i];
                    className += " ";
                }
                    ele.className = className;
                    console.log(ele.className);
            },
            removes : function (ele,str) {
                var classArr = str.split (" "),
                    length = classArr.length,
                    className = ele.className,
                    i = 0;

                for (;i < length;i += 1) {
                    className = className.replace(classArr[i],"");
                }
                ele.className = className;
                console.log(ele.className);

            }
        }
    }
})();
var viewTable = function (controlObject) {
        this.parentEle = controlObject.ele;
        this.childEle = controlObject.eleChild;
        this.length = this.childEle.length;
        this.controlEle = controlObject.eleControl;
        var i = 0,
            controlEle = this.controlEle,
            className = controlObject.classStr,
            _this = this;
        for (;i < this.length;i +=1 ) {
            this.childEle[i].index = i;
            controlEle[i].index = i;
        }


        //此处事件绑定直接改为jquery即可
        this.parentEle.addEventListener("click",function (e) {
            var clickEle = e.target;
            if (clickEle.tagName.toUpperCase() === "LI") {
                _this.display(controlEle[clickEle.index],className);
            }
        },false)
    }

viewTable.prototype.display = function (ele,className) {
    var i = 0;
    for (;i < this.length;i +=1) {
        classNameControl.removes(this.controlEle[i],className);
    }
    classNameControl.adds(ele,className)
};
/*
new viewTable({
    ele : document.getElementById("tableChange"),
    eleChild: document.getElementById("tableChange").getElementsByTagName("li"),
    eleControl : document.getElementsByClassName("table-box"),
    classStr : "table-show"
})*/
