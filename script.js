function romanize (num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}
function check(nums) {
    for(let i = 0; i< nums.length;i++){
        // console.log(/^-?\d+$/.test(nums[i]));
        if(!(/^\d+$/.test(nums[i]))){
            // console.log("ab0");
             return false;
        }
        
    }
    return true;
}

function color(num, sum){

    // for(let i = 0; i < nums.length;i++){
    //     if(nums[i]<=7){
    //         sum.style.color = "red";}
    //     // }else if(marks[i]>4 && marks[i] <= 8){
    //     //     marksArr[i].style.color = "orange";
    //     // }else{
    //     //     marksArr[i].style.color = "green";
    //     // }
    //     marksArr[i].innerHTML = marks[i]+", ";
    // }
    if(num <= 7) sum.style.color = "red";
    else if(num <=14 && num>7) sum.style.color = "orange";
    else sum.style.color = "green";

}
function checkCode(code){
    let isnum = code.match(/^[0-9]+$/);
        if(!isnum){
            alert("Student code must only contain numbers!");
            return true;
        }else if(code.length != 8){
            alert("Student code must be 8 digts length");
            return true;
        }else{
            return false;
        }
}
window.onload = () => {
    let form = document.getElementById("form");
    form.reset();

    const info = {
        name: document.getElementsByName("name"),
        surname: document.getElementsByName("surName"),
        grades: document.getElementById("grades").getElementsByClassName("grade"),
        labels: document.getElementById("form").getElementsByClassName("label"),
    }
   
    
    let button = document.getElementById("calculate-button");
    button.onclick = ()=>{    
        let numbers = [];
            for(let i = 0; i<info.grades.length;i++)
                numbers[i] = info.grades[i].value;
            // console.log(info[0])
            if(!check(numbers)) alert("It is not a number");
            else{
            for(let i = 0; i<2;i++){
                // console.log(info.labels[i].textContent);
                console.log((Object.values(info)[i][0].value));
            }
            
            console.log("Numbers:");
            let gradesStr = "";
            for(let i = 0; i<info.grades.length;i++)
                gradesStr += info.grades[i].value+", ";
            
            console.log(gradesStr);

            
            
            let name = document.getElementById("name");
            name.innerHTML = info.labels[0].textContent + " " + (Object.values(info)[0][0].value);

            let surname = document.getElementById("surName");
            surname.innerHTML = info.labels[1].textContent + " " + (Object.values(info)[1][0].value);


            let marks = [];
            for(let i = 0; i<info.grades.length;i++){
                marks[i] = info.grades[i].value;
            }
            let maxGr = Math.max(...marks);
            let minGr = Math.min(...marks);


            
            let marksNode = document.getElementById("marks");
            let sum = document.getElementById("sum");

            let summ = 0;
            for(let i = 0; i<info.grades.length;i++)
                summ += parseInt(info.grades[i].value);
            console.log(summ);
            sum.innerHTML = romanize(summ);
            marksNode.innerHTML = "Numbers:" + "<br />" + gradesStr;

           color(summ,sum);
            
            
            
            // checkMarks(marks, marksArr);

            // let bestMark = document.getElementById("bestMark");
            // bestMark.innerHTML = "<br />Best mark of " + Object.values(info)[0][0].value +" "+ Object.values(info)[1][0].value
            // +"("+ Object.values(info)[2][0].value +"): " + maxGr + "<br /> <br />";
            
            // let worstMark = document.getElementById("worstMark");
            // worstMark.innerHTML = "worst: " + minGr + "<br />";
            
            // let colors = [];
            // for(let i = 0; i<info.grades.length;i++){
            //     marks[i] = info.grades[i].value;
            // }
        
        
        
        
        }
    }
};
