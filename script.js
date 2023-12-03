
function checkMarks(marks, marksArr){
    for(let i = 0; i < marks.length;i++){
        if(marks[i]<=4){
            marksArr[i].style.color = "red";
        }else if(marks[i]>4 && marks[i] <= 8){
            marksArr[i].style.color = "orange";
        }else{
            marksArr[i].style.color = "green";
        }
        marksArr[i].innerHTML = marks[i]+", ";
    }
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
        code: document.getElementsByName("stCode"),
        grades: document.getElementById("grades").getElementsByClassName("grade"),
        labels: document.getElementById("form").getElementsByClassName("label"),
    }
   
    
    let button = document.getElementById("calculate-button");
    button.onclick = ()=>{    
        if(!checkCode(Object.values(info)[2][0].value)){
            for(let i = 0; i<3;i++){
                console.log(info.labels[i].textContent);
                console.log((Object.values(info)[i][0].value));
            }
            
            console.log("Marks:");
            let gradesStr = "";
            for(let i = 0; i<info.grades.length;i++)
            gradesStr += info.grades[i].value+", ";
            
            console.log(gradesStr);
            
            let name = document.getElementById("name");
            name.innerHTML = info.labels[0].textContent + " " + (Object.values(info)[0][0].value);

            let surname = document.getElementById("surName");
            surname.innerHTML = info.labels[1].textContent + " " + (Object.values(info)[1][0].value);

            let code = document.getElementById("stCode");
            code.innerHTML = info.labels[2].textContent + " " + (Object.values(info)[2][0].value);

            let marks = [];
            for(let i = 0; i<info.grades.length;i++){
                marks[i] = info.grades[i].value;
            }
            let maxGr = Math.max(...marks);
            let minGr = Math.min(...marks);


            
            let marksNode = document.getElementById("marks");
            marksNode.innerHTML = "Marks:" + "<br />";
            let marksArr = document.getElementsByClassName("mark");
            
            checkMarks(marks, marksArr);

            let bestMark = document.getElementById("bestMark");
            bestMark.innerHTML = "<br />Best mark of " + Object.values(info)[0][0].value +" "+ Object.values(info)[1][0].value
            +"("+ Object.values(info)[2][0].value +"): " + maxGr + "<br /> <br />";
            
            let worstMark = document.getElementById("worstMark");
            worstMark.innerHTML = "worst: " + minGr + "<br />";
            
            let colors = [];
            for(let i = 0; i<info.grades.length;i++){
                marks[i] = info.grades[i].value;
            }
        
        };
        
        
    
    }
};
