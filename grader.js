var more = true
while(more){
    acceptMarks();
}

function acceptMarks(){
    var mark = prompt('Enter your mark');
    alert(grade(mark))
    more = confirm('more marks to grade?');
        
}


function grade(mark){
    mark = Number(mark);
    var grade;
    if (mark >= 90){
        return grade = 'A';
    }else if (mark >= 80){
        return grade = 'B';
    }else if (mark >= 70){
        return grade = 'C';
    }else if (mark >= 60){
        return grade = 'D';
    }else if (mark >= 50){
        return grade = 'E';
    }else{
        return grade = 'F';
    }
}  













