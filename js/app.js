const input = document.querySelector('input');
const getArrOfNumb = str => str.split(',').filter(el => +el == 0 ? (el === '0' ? true : false) : !isNaN(el)).map(el => +el);
const getArrSum = str => getArrOfNumb(str).reduce((acc, el) => acc + el, 0);
const getArrAvg = str => getArrSum(str) / getArrOfNumb(str).length;

//  ========= 1 ===========
input.onchange = () => {
    const value = input.value;
    document.querySelector('.out').innerHTML = (
        `SUM = ${getArrSum(value)}<br>
        AVG = ${getArrAvg(value)} <br>
        MIN = ${Math.min(...getArrOfNumb(value))} <br>
        MAX = ${Math.max(...getArrOfNumb(value))}`);
}

// ======== 2 ===========
// const sortArr = str => getArrOfNumb(str).sort((a, b) => a - b);
// input.onchange = () => {
//     const value = input.value;
//     document.querySelector('.out').innerHTML = (
//         `SUM = ${getArrSum(value)}<br>
//         AVG = ${getArrAvg(value)} <br>
//         MIN = ${sortArr(value)[0]} <br>
//         MAX = ${sortArr(value)[sortArr(value).length - 1]}`);
// }

//  ========= 3 ===========
// const getMinElem = str => getArrOfNumb(str).reduce((min, el) => {
//     el < min ? min = el : null;
//     return min;
// }, Infinity)
// const getMaxElem = str => getArrOfNumb(str).reduce((max, el) => {
//     el > max ? max = el : null;
//     return max;
// }, -Infinity)
// input.onchange = () => {
//     const value = input.value;
//     document.querySelector('.out').innerHTML = (
//         `SUM = ${getArrSum(value)}<br>
//         AVG = ${getArrAvg(value)} <br>
//         MIN = ${getMinElem(value)} <br>
//         MAX = ${getMaxElem(value)}`);
// }
