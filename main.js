for (let i = 0; i < 100; i++){
    let text = "";
    if (i % 3 === 0){
        text = text + "fizz";
    }
    else if (i % 5 === 0){
        text = text + "buzz";
    }
    else if (i % 3 !== 0 && 1 % 5 !== 0){
        text = i;
    }
    console.log(text);
}

