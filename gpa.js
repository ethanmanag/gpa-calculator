var combinedGPA = 0;
var freshmanBox = document.getElementById("freshmanCheck");
var freshmanGrades = document.getElementById("freshmanGrades");
var sophomoreBox = document.getElementById("sophomoreCheck");
var sophomoreGrades = document.getElementById("sophomoreGrades");
var juniorBox = document.getElementById("juniorCheck");
var juniorGrades = document.getElementById("juniorGrades");
var seniorBox = document.getElementById("seniorCheck");
var seniorGrades = document.getElementById("seniorGrades");


function grades() {
    //Freshman
    var grade_freshman_sem1_1 = document.getElementById('freshman_A_sem1');
    var grade_freshman_sem1_2 = document.getElementById('freshman_B_sem1');
    var grade_freshman_sem1_3 = document.getElementById('freshman_C_sem1');
    var grade_freshman_sem1_4 = document.getElementById('freshman_D_sem1');
    var grade_freshman_sem1_5 = document.getElementById('freshman_E_sem1');
    var grade_freshman_sem1_6 = document.getElementById('freshman_F_sem1');

    var grade_freshman_sem2_1 = document.getElementById('freshman_A_sem2');
    var grade_freshman_sem2_2 = document.getElementById('freshman_B_sem2');
    var grade_freshman_sem2_3 = document.getElementById('freshman_C_sem2');
    var grade_freshman_sem2_4 = document.getElementById('freshman_D_sem2');
    var grade_freshman_sem2_5 = document.getElementById('freshman_E_sem2');
    var grade_freshman_sem2_6 = document.getElementById('freshman_F_sem2');

    var title1 = freshman_A_sem1.value;
    var title2 = freshman_B_sem1.value;
    var title3 = freshman_C_sem1.value;
    var title4 = freshman_D_sem1.value;
    var title5 = freshman_E_sem1.value;
    var title6 = freshman_F_sem1.value;

    var title7 = freshman_A_sem2.value;
    var title8 = freshman_B_sem2.value;
    var title9 = freshman_C_sem2.value;
    var title10 = freshman_D_sem2.value;
    var title11 = freshman_E_sem2.value;
    var title12 = freshman_F_sem2.value;

    //Sophomore
    var grade_sophomore_sem1_1 = document.getElementById('sophomore_A_sem1');
    var grade_sophomore_sem1_2 = document.getElementById('sophomore_B_sem1');
    var grade_sophomore_sem1_3 = document.getElementById('sophomore_C_sem1');
    var grade_sophomore_sem1_4 = document.getElementById('sophomore_D_sem1');
    var grade_sophomore_sem1_5 = document.getElementById('sophomore_E_sem1');
    var grade_sophomore_sem1_6 = document.getElementById('sophomore_F_sem1');

    var grade_sophomore_sem2_1 = document.getElementById('sophomore_A_sem2');
    var grade_sophomore_sem2_2 = document.getElementById('sophomore_B_sem2');
    var grade_sophomore_sem2_3 = document.getElementById('sophomore_C_sem2');
    var grade_sophomore_sem2_4 = document.getElementById('sophomore_D_sem2');
    var grade_sophomore_sem2_5 = document.getElementById('sophomore_E_sem2');
    var grade_sophomore_sem2_6 = document.getElementById('sophomore_F_sem2');

    var title13 = sophomore_A_sem1.value;
    var title14 = sophomore_B_sem1.value;
    var title15 = sophomore_C_sem1.value;
    var title16 = sophomore_D_sem1.value;
    var title17 = sophomore_E_sem1.value;
    var title18 = sophomore_F_sem1.value;

    var title19 = sophomore_A_sem2.value;
    var title20 = sophomore_B_sem2.value;
    var title21 = sophomore_C_sem2.value;
    var title22 = sophomore_D_sem2.value;
    var title23 = sophomore_E_sem2.value;
    var title24 = sophomore_F_sem2.value;

    //Junior
    var grade_junior_sem1_1 = document.getElementById('junior_A_sem1');
    var grade_junior_sem1_2 = document.getElementById('junior_B_sem1');
    var grade_junior_sem1_3 = document.getElementById('junior_C_sem1');
    var grade_junior_sem1_4 = document.getElementById('junior_D_sem1');
    var grade_junior_sem1_5 = document.getElementById('junior_E_sem1');
    var grade_junior_sem1_6 = document.getElementById('junior_F_sem1');

    var grade_junior_sem2_1 = document.getElementById('junior_A_sem2');
    var grade_junior_sem2_2 = document.getElementById('junior_B_sem2');
    var grade_junior_sem2_3 = document.getElementById('junior_C_sem2');
    var grade_junior_sem2_4 = document.getElementById('junior_D_sem2');
    var grade_junior_sem2_5 = document.getElementById('junior_E_sem2');
    var grade_junior_sem2_6 = document.getElementById('junior_F_sem2');

    var title25 = junior_A_sem1.value;
    var title26 = junior_B_sem1.value;
    var title27 = junior_C_sem1.value;
    var title28 = junior_D_sem1.value;
    var title29 = junior_E_sem1.value;
    var title30 = junior_F_sem1.value;

    var title31 = junior_A_sem2.value;
    var title32 = junior_B_sem2.value;
    var title33 = junior_C_sem2.value;
    var title34 = junior_D_sem2.value;
    var title35 = junior_E_sem2.value;
    var title36 = junior_F_sem2.value;

    //Senior
    var grade_senior_sem1_1 = document.getElementById('senior_A_sem1');
    var grade_senior_sem1_2 = document.getElementById('senior_B_sem1');
    var grade_senior_sem1_3 = document.getElementById('senior_C_sem1');
    var grade_senior_sem1_4 = document.getElementById('senior_D_sem1');
    var grade_senior_sem1_5 = document.getElementById('senior_E_sem1');
    var grade_senior_sem1_6 = document.getElementById('senior_F_sem1');

    var grade_senior_sem2_1 = document.getElementById('senior_A_sem2');
    var grade_senior_sem2_2 = document.getElementById('senior_B_sem2');
    var grade_senior_sem2_3 = document.getElementById('senior_C_sem2');
    var grade_senior_sem2_4 = document.getElementById('senior_D_sem2');
    var grade_senior_sem2_5 = document.getElementById('senior_E_sem2');
    var grade_senior_sem2_6 = document.getElementById('senior_F_sem2');

    var title37 = senior_A_sem1.value;
    var title38 = senior_B_sem1.value;
    var title39 = senior_C_sem1.value;
    var title40 = senior_D_sem1.value;
    var title41 = senior_E_sem1.value;
    var title42 = senior_F_sem1.value;

    var title43 = senior_A_sem2.value;
    var title44 = senior_B_sem2.value;
    var title45 = senior_C_sem2.value;
    var title46 = senior_D_sem2.value;
    var title47 = senior_E_sem2.value;
    var title48 = senior_F_sem2.value;

    //just one selected
    if (freshmanBox.checked == true && sophomoreBox.checked == false && juniorBox.checked == false && seniorBox.checked == false) {
        combinedGPA = (parseFloat(title1) + parseFloat(title2) + parseFloat(title3) + parseFloat(title4) + parseFloat(title5) + parseFloat(title6) + parseFloat(title7) + parseFloat(title8) + parseFloat(title9) + parseFloat(title10) + parseFloat(title11) + parseFloat(title12)) / 12;
    }
    if (freshmanBox.checked == false && sophomoreBox.checked == true && juniorBox.checked == false && seniorBox.checked == false){
        combinedGPA = (parseFloat(title13) + parseFloat(title14) + parseFloat(title15) + parseFloat(title16) + parseFloat(title17) + parseFloat(title18) + parseFloat(title19) + parseFloat(title20) + parseFloat(title21) + parseFloat(title22) + parseFloat(title23) + parseFloat(title24)) / 12;
    }
    if (freshmanBox.checked == false && sophomoreBox.checked == false && juniorBox.checked == true && seniorBox.checked == false) {
        combinedGPA = (parseFloat(title25) + parseFloat(title26) + parseFloat(title27) + parseFloat(title28) + parseFloat(title29) + parseFloat(title30) + parseFloat(title31) + parseFloat(title32) + parseFloat(title33) + parseFloat(title34) + parseFloat(title35) + parseFloat(title36)) / 12;
    }
    if (freshmanBox.checked == false && sophomoreBox.checked == false && juniorBox.checked == false && seniorBox.checked == true) {
        combinedGPA = (parseFloat(title37) + parseFloat(title38) + parseFloat(title39) + parseFloat(title40) + parseFloat(title41) + parseFloat(title42) + parseFloat(title43) + parseFloat(title44) + parseFloat(title45) + parseFloat(title46) + parseFloat(title47) + parseFloat(title48)) / 12;        
    }


    //two selected
    if (freshmanBox.checked == true && sophomoreBox.checked == true && juniorBox.checked == false && seniorBox.checked == false) {
        combinedGPA = (parseFloat(title1) + parseFloat(title2) + parseFloat(title3) + parseFloat(title4) + parseFloat(title5) + parseFloat(title6) + parseFloat(title7) + parseFloat(title8) + parseFloat(title9) + parseFloat(title10) + parseFloat(title11) + parseFloat(title12) + parseFloat(title13) + parseFloat(title14) + parseFloat(title15) + parseFloat(title16) + parseFloat(title17) + parseFloat(title18) + parseFloat(title19) + parseFloat(title20) + parseFloat(title21) + parseFloat(title22) + parseFloat(title23) + parseFloat(title24)) / 24;
    }
    if (freshmanBox.checked == true && sophomoreBox.checked == false && juniorBox.checked == true && seniorBox.checked == false) {
        combinedGPA = (parseFloat(title1) + parseFloat(title2) + parseFloat(title3) + parseFloat(title4) + parseFloat(title5) + parseFloat(title6) + parseFloat(title7) + parseFloat(title8) + parseFloat(title9) + parseFloat(title10) + parseFloat(title11) + parseFloat(title12) + parseFloat(title25) + parseFloat(title26) + parseFloat(title27) + parseFloat(title28) + parseFloat(title29) + parseFloat(title30) + parseFloat(title31) + parseFloat(title32) + parseFloat(title33) + parseFloat(title34) + parseFloat(title35) + parseFloat(title36)) / 24;
    }
    if (freshmanBox.checked == true && sophomoreBox.checked == false && juniorBox.checked == false && seniorBox.checked == true) {
        combinedGPA = (parseFloat(title1) + parseFloat(title2) + parseFloat(title3) + parseFloat(title4) + parseFloat(title5) + parseFloat(title6) + parseFloat(title7) + parseFloat(title8) + parseFloat(title9) + parseFloat(title10) + parseFloat(title11) + parseFloat(title12) + parseFloat(title37) + parseFloat(title38) + parseFloat(title39) + parseFloat(title40) + parseFloat(title41) + parseFloat(title42) + parseFloat(title43) + parseFloat(title44) + parseFloat(title45) + parseFloat(title46) + parseFloat(title47) + parseFloat(title48)) / 24;
    }
    if (freshmanBox.checked == false && sophomoreBox.checked == true && juniorBox.checked == true && seniorBox.checked == false) {
        combinedGPA = (parseFloat(title13) + parseFloat(title14) + parseFloat(title15) + parseFloat(title16) + parseFloat(title17) + parseFloat(title18) + parseFloat(title19) + parseFloat(title20) + parseFloat(title21) + parseFloat(title22) + parseFloat(title23) + parseFloat(title24) + parseFloat(title25) + parseFloat(title26) + parseFloat(title27) + parseFloat(title28) + parseFloat(title29) + parseFloat(title30) + parseFloat(title31) + parseFloat(title32) + parseFloat(title33) + parseFloat(title34) + parseFloat(title35) + parseFloat(title36)) / 24;
    }
    if (freshmanBox.checked == false && sophomoreBox.checked == true && juniorBox.checked == false && seniorBox.checked == true){ 
        combinedGPA = (parseFloat(title13) + parseFloat(title14) + parseFloat(title15) + parseFloat(title16) + parseFloat(title17) + parseFloat(title18) + parseFloat(title19) + parseFloat(title20) + parseFloat(title21) + parseFloat(title22) + parseFloat(title23) + parseFloat(title24) + parseFloat(title37) + parseFloat(title38) + parseFloat(title39) + parseFloat(title40) + parseFloat(title41) + parseFloat(title42) + parseFloat(title43) + parseFloat(title44) + parseFloat(title45) + parseFloat(title46) + parseFloat(title47) + parseFloat(title48)) / 24;
    }
    if (freshmanBox.checked == false && sophomoreBox.checked == false && juniorBox.checked == true && seniorBox.checked == true) {
        combinedGPA = (parseFloat(title25) + parseFloat(title26) + parseFloat(title27) + parseFloat(title28) + parseFloat(title29) + parseFloat(title30) + parseFloat(title31) + parseFloat(title32) + parseFloat(title33) + parseFloat(title34) + parseFloat(title35) + parseFloat(title36) + parseFloat(title37) + parseFloat(title38) + parseFloat(title39) + parseFloat(title40) + parseFloat(title41) + parseFloat(title42) + parseFloat(title43) + parseFloat(title44) + parseFloat(title45) + parseFloat(title46) + parseFloat(title47) + parseFloat(title48)) / 24;
    }

    //three selected
    if (freshmanBox.checked == true && sophomoreBox.checked == true && juniorBox.checked == true && seniorBox.checked == false) {
        combinedGPA = (parseFloat(title1) + parseFloat(title2) + parseFloat(title3) + parseFloat(title4) + parseFloat(title5) + parseFloat(title6) + parseFloat(title7) + parseFloat(title8) + parseFloat(title9) + parseFloat(title10) + parseFloat(title11) + parseFloat(title12) + parseFloat(title13) + parseFloat(title14) + parseFloat(title15) + parseFloat(title16) + parseFloat(title17) + parseFloat(title18) + parseFloat(title19) + parseFloat(title20) + parseFloat(title21) + parseFloat(title22) + parseFloat(title23) + parseFloat(title24) + parseFloat(title25) + parseFloat(title26) + parseFloat(title27) + parseFloat(title28) + parseFloat(title29) + parseFloat(title30) + parseFloat(title31) + parseFloat(title32) + parseFloat(title33) + parseFloat(title34) + parseFloat(title35) + parseFloat(title36)) / 36;
    }
    if (freshmanBox.checked == false && sophomoreBox.checked == true && juniorBox.checked == true && seniorBox.checked == true) {
        combinedGPA = (parseFloat(title13) + parseFloat(title14) + parseFloat(title15) + parseFloat(title16) + parseFloat(title17) + parseFloat(title18) + parseFloat(title19) + parseFloat(title20) + parseFloat(title21) + parseFloat(title22) + parseFloat(title23) + parseFloat(title24) + parseFloat(title25) + parseFloat(title26) + parseFloat(title27) + parseFloat(title28) + parseFloat(title29) + parseFloat(title30) + parseFloat(title31) + parseFloat(title32) + parseFloat(title33) + parseFloat(title34) + parseFloat(title35) + parseFloat(title36) + parseFloat(title37) + parseFloat(title38) + parseFloat(title39) + parseFloat(title40) + parseFloat(title41) + parseFloat(title42) + parseFloat(title43) + parseFloat(title44) + parseFloat(title45) + parseFloat(title46) + parseFloat(title47) + parseFloat(title48)) / 36;
    }
    if (freshmanBox.checked == true && sophomoreBox.checked == false && juniorBox.checked == true && seniorBox.checked == true) {
        combinedGPA = (parseFloat(title1) + parseFloat(title2) + parseFloat(title3) + parseFloat(title4) + parseFloat(title5) + parseFloat(title6) + parseFloat(title7) + parseFloat(title8) + parseFloat(title9) + parseFloat(title10) + parseFloat(title11) + parseFloat(title12) + parseFloat(title25) + parseFloat(title26) + parseFloat(title27) + parseFloat(title28) + parseFloat(title29) + parseFloat(title30) + parseFloat(title31) + parseFloat(title32) + parseFloat(title33) + parseFloat(title34) + parseFloat(title35) + parseFloat(title36) + parseFloat(title37) + parseFloat(title38) + parseFloat(title39) + parseFloat(title40) + parseFloat(title41) + parseFloat(title42) + parseFloat(title43) + parseFloat(title44) + parseFloat(title45) + parseFloat(title46) + parseFloat(title47) + parseFloat(title48)) / 36;
    }
    if (freshmanBox.checked == true && sophomoreBox.checked == true && juniorBox.checked == false && seniorBox.checked == true) {
        combinedGPA = (parseFloat(title1) + parseFloat(title2) + parseFloat(title3) + parseFloat(title4) + parseFloat(title5) + parseFloat(title6) + parseFloat(title7) + parseFloat(title8) + parseFloat(title9) + parseFloat(title10) + parseFloat(title11) + parseFloat(title12) + parseFloat(title13) + parseFloat(title14) + parseFloat(title15) + parseFloat(title16) + parseFloat(title17) + parseFloat(title18) + parseFloat(title19) + parseFloat(title20) + parseFloat(title21) + parseFloat(title22) + parseFloat(title23) + parseFloat(title24) + parseFloat(title37) + parseFloat(title38) + parseFloat(title39) + parseFloat(title40) + parseFloat(title41) + parseFloat(title42) + parseFloat(title43) + parseFloat(title44) + parseFloat(title45) + parseFloat(title46) + parseFloat(title47) + parseFloat(title48)) / 36;
    }

    //four selected
    if (freshmanBox.checked == true && sophomoreBox.checked == true && juniorBox.checked == true && seniorBox.checked == true) {
        combinedGPA = (parseFloat(title1) + parseFloat(title2) + parseFloat(title3) + parseFloat(title4) + parseFloat(title5) + parseFloat(title6) + parseFloat(title7) + parseFloat(title8) + parseFloat(title9) + parseFloat(title10) + parseFloat(title11) + parseFloat(title12) + parseFloat(title13) + parseFloat(title14) + parseFloat(title15) + parseFloat(title16) + parseFloat(title17) + parseFloat(title18) + parseFloat(title19) + parseFloat(title20) + parseFloat(title21) + parseFloat(title22) + parseFloat(title23) + parseFloat(title24) + parseFloat(title25) + parseFloat(title26) + parseFloat(title27) + parseFloat(title28) + parseFloat(title29) + parseFloat(title30) + parseFloat(title31) + parseFloat(title32) + parseFloat(title33) + parseFloat(title34) + parseFloat(title35) + parseFloat(title36) + parseFloat(title37) + parseFloat(title38) + parseFloat(title39) + parseFloat(title40) + parseFloat(title41) + parseFloat(title42) + parseFloat(title43) + parseFloat(title44) + parseFloat(title45) + parseFloat(title46) + parseFloat(title47) + parseFloat(title48)) / 48;
    }

    combinedGPA = combinedGPA.toPrecision(3);

    document.getElementById('result').innerHTML = '';
    const element = document.createElement('div');
    element.innerText = combinedGPA;
    const poggy = document.getElementById('result');
    poggy.appendChild(element);
    
}

function freshman() {
    if (freshmanBox.checked == true){
        freshmanGrades.style.display = "block";
        gpa_info.style.display = "block";
        gpa_result.style.display = "block";
    } else {
        freshmanGrades.style.display = "none";
    }

    if (seniorBox.checked == false && juniorBox.checked == false && sophomoreBox.checked == false && freshmanBox.checked == false) {
        gpa_info.style.display = "none";
        gpa_result.style.display = "none";
    }
}

function sophomore() {
    if (sophomoreBox.checked == true){
        sophomoreGrades.style.display = "block";
        gpa_info.style.display = "block";
        gpa_result.style.display = "block";
    } else {
        sophomoreGrades.style.display = "none";
    }

    if (seniorBox.checked == false && juniorBox.checked == false && sophomoreBox.checked == false && freshmanBox.checked == false) {
        gpa_info.style.display = "none";
        gpa_result.style.display = "none";
    }
}

function junior() {
    if (juniorBox.checked == true){
        juniorGrades.style.display = "block";
        gpa_info.style.display = "block";
        gpa_result.style.display = "block";
    } else {
        juniorGrades.style.display = "none";
    }

    if (seniorBox.checked == false && juniorBox.checked == false && sophomoreBox.checked == false && freshmanBox.checked == false) {
        gpa_info.style.display = "none";
        gpa_result.style.display = "none";
    }
}

function senior() {
    if (seniorBox.checked == true){
        seniorGrades.style.display = "block";
        gpa_info.style.display = "block";
        gpa_result.style.display = "block";
    } else {
        seniorGrades.style.display = "none";
    }

    if (seniorBox.checked == false && juniorBox.checked == false && sophomoreBox.checked == false && freshmanBox.checked == false) {
        gpa_info.style.display = "none";
        gpa_result.style.display = "none";
    }
}

function boxHeight() {
    const box = document.querySelector('.background');
    const gpa = document.querySelector('.gpa-result');
    if (freshmanBox.checked == false && sophomoreBox.checked == false && juniorBox.checked == false && seniorBox.checked == false) {
        box.style.height = '0px';
    }

    if (freshmanBox.checked == true && sophomoreBox.checked == false && juniorBox.checked == false && seniorBox.checked == false || freshmanBox.checked == false && sophomoreBox.checked == true && juniorBox.checked == false && seniorBox.checked == false || freshmanBox.checked == false && sophomoreBox.checked == false && juniorBox.checked == true && seniorBox.checked == false || freshmanBox.checked == false && sophomoreBox.checked == false && juniorBox.checked == false && seniorBox.checked == true) {
        box.style.height = '417px';
    }

    if (freshmanBox.checked == true && sophomoreBox.checked == true && juniorBox.checked == false && seniorBox.checked == false || freshmanBox.checked == true && sophomoreBox.checked == false && juniorBox.checked == true && seniorBox.checked == false || freshmanBox.checked == true && sophomoreBox.checked == false && juniorBox.checked == false && seniorBox.checked == true || freshmanBox.checked == false && sophomoreBox.checked == true && juniorBox.checked == true && seniorBox.checked == false || freshmanBox.checked == false && sophomoreBox.checked == true && juniorBox.checked == false && seniorBox.checked == true || freshmanBox.checked == false && sophomoreBox.checked == false && juniorBox.checked == true && seniorBox.checked == true) {
        box.style.height = '834px';
    }

    if (freshmanBox.checked == true && sophomoreBox.checked == true && juniorBox.checked == true && seniorBox.checked == false || freshmanBox.checked == false && sophomoreBox.checked == true && juniorBox.checked == true && seniorBox.checked == true || freshmanBox.checked == true && sophomoreBox.checked == false && juniorBox.checked == true && seniorBox.checked == true || freshmanBox.checked == true && sophomoreBox.checked == true && juniorBox.checked == false && seniorBox.checked == true) {
        box.style.height = '1251px';
    }

    if (freshmanBox.checked == true && sophomoreBox.checked == true && juniorBox.checked == true && seniorBox.checked == true) {
        box.style.height = '1668px';
    }
}