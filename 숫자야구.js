var 바디 = document.body;

var 숫자후보 = [1,2,3,4,5,6,7,8,9];
var 숫자배열 = [];

for (var i = 0; i<4; i +=1 ) {
    var 뽑은것 = 숫자후보.splice(Math.floor(Math.random()*(9-i)),1)[0];
    숫자배열.push(뽑은것);
}
console.log(숫자배열);
var 결과 = document.createElement('h1');
바디.append(결과);
var 폼 = document.createElement('form');
document.body.append(폼);
var 입력창 = document.createElement('input');
폼.append(입력창);
입력창.type = 'text';
입력창.maxLength= 4;
var 버튼 = document.createElement('button');
폼.append(버튼);
버튼.textContent='입력!';

폼.addEventListener('submit', function 비동기(이벤트){
    이벤트.preventDefault();
    var 답 = 입력창.value;
    console.log(답);
    if(답 === 숫자배열.join('')){

    } else{
        
    }
});
