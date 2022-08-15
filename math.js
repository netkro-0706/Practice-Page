let Q1_input = document.querySelector(".Q1_input");
let Q1_p = document.querySelector(".Q1_p");

function Q1_button() {
    Q1_p.innerHTML = Number(Q1_input.value).toString(16);
}



let Q2_input_1 = document.querySelector(".Q2_input_1");
let Q2_input_2 = document.querySelector(".Q2_input_2");
let Q2_p = document.querySelector(".Q2_p");

function Q2_button() {
    let total = "";
    let num1 = Number(Q2_input_1.value);
    let num2 = Number(Q2_input_2.value);

    if (num1 > num2) {
        let emp = num1;
        num1 = num2;
        num2 = emp;
    }

    for (num1; num1 <= num2; num1++) {
        for (let num = 1; num <= 9; num++) {
            total += `${num1} * ${num} = ${num1 * num} <br/>`;
        }
        total += "<br/>";
    }

    Q2_p.innerHTML = total;
}



let Q3_input_1 = document.querySelector(".Q3_input_1");
let Q3_input_2 = document.querySelector(".Q3_input_2");
let Q3_p = document.querySelector(".Q3_p");

function Q3_button() {
    let total = "";
    let num1 = Number(Q3_input_1.value);
    let num2 = Number(Q3_input_2.value);

    if (num1 < num2) {
        let emp = num1;
        num1 = num2;
        num2 = emp;
    }

    // 피보나치 수열 이용
    total = gdn(num1, num2);

    Q3_p.innerHTML = total;
}

function gdn(num1, num2) {
    console.log(num1, num2);
    if (num2 == 0) {
        return num1;
    }
    else {
        return gdn(num2, num1 % num2);
    }
}



let Q4_input = document.querySelector(".Q4_input");
let Q4_p = document.querySelector(".Q4_p");

function Q4_button() {
    let resultHTML = "";
    let money = Number(Q4_input.value);
    let menu = {
        cream: 500,
        shrimp: 700,
        coke: 400,
    }
    let default_price = menu.cream + menu.shrimp + menu.coke;
    let total_price = default_price;
    let cream_num = 1, shrimp_num = 1, coke_num = 1;
    let cream_price, shrimp_price, coke_price;

    if (money < default_price) {
        resultHTML = "금액 부족";
        Q4_p.innerHTML = resultHTML;
        return;
    }

    for (cream_num = 1; cream_num < 10; cream_num++) {
        cream_price = cream_num * menu.cream;

        for (shrimp_num = 1; shrimp_num < 10; shrimp_num++) {
            shrimp_price = shrimp_num * menu.shrimp;

            for (coke_num = 1; coke_num < 10; coke_num++) {
                coke_price = coke_num * menu.coke;
                total_price = cream_price + shrimp_price + coke_price;

                console.log(total_price, money);
                if (total_price >= money) {
                    resultHTML += `크림빵(${cream_num}개), 새우깡(${shrimp_num}봉지), 콜라(${coke_num}병)<br/>`;
                    continue;
                }

            }
        }
    }


    Q4_p.innerHTML = resultHTML;
}