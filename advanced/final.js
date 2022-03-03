funtion getSumOfProducts(nestedArr){

const firstProduct = nestedArr[0][0]* nestedArr[0][1];
const secondProduct= nestedArr[1][0]* nestedArr[1][1];
const thirdProduct= nestedArr[2][0]* nestedArr[2][1];

return firstProduct + secondProduct +thirdProduct;

}






const myProduct= getSumOfProducts({
    [1,2]
    [1,1]
    [2,3]
})