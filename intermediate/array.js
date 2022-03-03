function reversibleInclusiveList(num1,num2) {
    const inclusiveList=[];
if (num2>num1){
    for(let i = num1;i<=num2; i++){
        inclusiveList.push(i);
    }
}

    for (let i=num1;i<=num2; i++) {
inclusiveList.push(i);
}

}






const listOne = reversibleInclusiveList(1, 5);