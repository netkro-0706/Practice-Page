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
        total_price = cream_price + shrimp_price + coke_price;

        if (total_price >= money) {
            console.log(coke_num, total_price);
            resultHTML += `크림빵(${cream_num}개), 새우깡(${shrimp_num}봉지), 콜라(${coke_num}병)<br/>`;
            cream_num = 1;
            cream_price = menu.cream;
            break;
        }
        for (shrimp_num = 1; shrimp_num < 10; shrimp_num++) {
            shrimp_price = shrimp_num * menu.shrimp;
            total_price = cream_price + shrimp_price + coke_price;

            if (total_price >= money) {
                console.log(coke_num, total_price);
                resultHTML += `크림빵(${cream_num}개), 새우깡(${shrimp_num}봉지), 콜라(${coke_num}병)<br/>`;
                shrimp_num = 1;
                shrimp_price = menu.shrimp;
                break;
            }
            for (coke_num = 1; coke_num < 10; coke_num++) {
                coke_price = coke_num * menu.coke;
                total_price = cream_price + shrimp_price + coke_price;

                if (total_price >= money) {
                    resultHTML += `크림빵(${cream_num}개), 새우깡(${shrimp_num}봉지), 콜라(${coke_num}병)<br/>`;
                    coke_num = 1;
                    coke_price = menu.coke;
                    break;
                }

            }
        }
    }


    Q4_p.innerHTML = resultHTML;
}

let Q5_input = document.querySelector(".Q5_input");
let Q5_p = document.querySelector(".Q5_p");

function Q5_button(){
    Q5_p.innerHTML = "";
    let result = "";
    const how_many = Number(Q5_input.value);
    let init = 2;
    let count = 0;

    if(how_many<1 || how_many==null){
        Q5_p.innerHTML = "1이상의 숫자를 입력하시오";
        return;
    }

    //나눠서 0이 되면  숫자가 2개만이다
    //소수의 카운터가 올라간다.
    //소수의 카운터가 how_many와 같아지면 함수 종료
    while(1){
        let decimal = 0;
        for(let div=1;div<=init;div++){
            if(init%div==0){
                decimal++;
            }
        }
        
        if(decimal==2){
            count++;
            result += `${init}, `;
        }

        if(count==how_many){
            console.log("stop");
            Q5_p.innerText = result.slice(0, result.length - 2);;
            return;
        }
        init++
        console.log("going?");
        console.log("ll", result);
    }




}