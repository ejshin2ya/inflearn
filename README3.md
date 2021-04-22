# 로또 추첨기

1. while  vs  for

* 기준값이 바뀔때는 for 문이 아니라 while 문을 쓰는것이 좋다. 



2. array

* 빈배열 만들수 있다. 

* ```
  var 후보군 = Array(45);
  ```

* 위 결과를 콘솔로 확인하면 Empty 값 45개가 만들어짐 -> empty는 반복문 불가하여 forEach 사용하면 empty가 반복되어 나타나지 않음. undefined는 반복문 사용 가능. 



3. fill

* 반복문이 불가한 empty값을 undefined로 바꿔줌

* ```
  var 필 = 후보군.fill();
  ```

*  위결과 후보군에 45개의 undefined 값이 생성됨



4. forEach로 숫자 입력(좋은방법은 아님)

* ```
  필.forEach( function (요소, 인덱스){
      필[인덱스] = 인덱스 + 1;
  });
  ```



5. map으로 숫자 입력(좋은 방법)

* ```
  var 맵 = 필.map( function (요소, 인덱스){
      return 인덱스 + 1;
  });
  ```



6. 코드 합치기

* ```
  var 후보군 = Array(45);
  var 필 = 후보군.fill();
  
  var 맵 = 필.map( function (요소, 인덱스){
      return 인덱스 + 1;
  });
  console.log(맵);
  ```

* ```
  var 후보군 = Array(45).fill().map( function (요소, 인덱스){
      return 인덱스 + 1;
  });
  console.log(후보군);
  ```



7. slice

* 숫자들의 배열을 원하는 단위로 잘라줌

* ```
  var 당첨숫자들 = 셔플.slice(0,6);
  ```

* 셔플 안에 담긴 배열의 0번째 자리수부터 5번째 자리수까지만 선택해줌. 



8. 숫자 정렬하는 함수 

* 당첨숫자들.sort() : 앞자리 숫자 기준으로 정렬해줌 ( 예시 : 12, 15, 3, 5 )

* Sort()는 3과 5는 12보다 작지만 '1'보다 크기 때문에 옳지 않게 정렬됨

* ```
  당첨숫자들.sort(function(p,c){return p - c;})
  ```

* 위와 같이 사용하면 작은 숫자 순서대로 정렬됨 

* 큰숫자부터 정렬하려면 아래와 같이 사용 

* ```
  당첨숫자들.sort(function(p,c){return c - p;})
  ```

* p는 이전숫자, c는 현재숫자로 p-c 값 또는 c-p 값이 0보다 크면 순서를 바꿔주게 되는 원리.



9. html에 있는 태그를 js로 가져올때.

* html에서 id태그 사용한 경우  :  **getElementById** 사용

  ```
  var 결과창 = document.getElementById('결과창');
  ```

* html에서 class태그 사용한 경우 : **getElementsByClassName** 사용

  ```
  var 보너스칸 = document.getElementsByClassName('보너스')[0];
  ```

  * class태크는 id와 다르게 여러번 사용가능하기 때문에 뒤에 [0]와 같이 몇번째것을 사용할것인지 숫자 지정을 해주어야 함. 

* 태그 상관없이 사용가능한 것 : **querySelector **사용

  ```
  var 결과창 = document.querySelector('#결과창');
  var 칸 = document.querySelector('.보너스');
  ```





10. setTimeout ( function 비동기콜백함수(  ) {            , 원하는 시간(밀리초단위) } )

* 당첨숫자와 보너스공이 하나씩 1초마다 뜨게 하는 방법

```
for( var i =0; i< 당첨숫자들.length-1; i+=1){
    setTimeout(function 비동기콜백함수(){
        var 공 = document.createElement('div');
        공.textContent = 당첨숫자들[i];
        결과창.appendChild(공);
    }, 1000);//밀리초
   
```

* for문 안에 비동기 함수가 들어있는 경우에 클로저 문제가 발생하는데 클로저(closure)와 관련된 문제는 중급시간에 알려줌





11. 자바스크립트에서 css 조작방법

```
    공.style.display = 'inline-block';
    공.style.border = '1px solid black';
    공.style.borderRadius = '10px';
    공.style.width ='20px';
    공.style.height ='20px';
    공.style.textAlign ='center';
```

* Text-align 의 경우 textAlign으로 사용하여야함

  (뛰어쓰기 하지 않고 앞에 대문자로 바꿔서 붙여써줘야함)







12. 자바스크립트와 html차이점

* 자바스크립트에서는 class는 중요한 문자이기 때문에 단독 사용이 안되고 className으로 사용해줘야 함

  ```
   예시1)
   공.className = '공아이디' + 숫자;
   예시2)
   var 보너스칸 = document.getElementsByClassName('보너스')[0];
  ```

  

