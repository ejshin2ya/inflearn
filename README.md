## 숫자야구



1. **배열에서 숫자 뽑는 방법**

* Pop : 마지막 배열에서부터 뽑아진다
* Shift : 처음 배열에서부터 뽑아진다
* Splice(위치, 개수) 
  * 위치로부터 갯수만큼 배열에서 뽑는다. 
  * 배열로 뽑혀지기 때문에 숫자로 변환해주어야 한다.  (Ex) splice(4, 1)[0]



2. **배열에 숫자 넣는 방법**

* push  :  뽑힌 순서대로 입력
* Unshift  : 뽑힌 순서 거꾸로 입력



3. **addEventListener**(비동기 함수)

* 반복문을 대체해주는 역할( 순서도에서 반복문 사용안해도 초기값으로 올라가게 해줌)

* ```폼.addEventListener('submit', function 콜백함수(e){});```

* 'submit' 입력시 자동으로 새로고침 현상이 나타남

* 이를 제거하기 위해서는 아래와 같이 코드를 사용해야함 

```폼.addEventListener('submit', function 비동기(이벤트){
폼.addEventListener('submit', function 비동기(이벤트){
    이벤트.preventDefault();
});
```



4. **split vs join**

* 문자.split(구분자) -> 배열
* 배열.join(구분자) -> 문자



5. **배열.indexOf(값)**

* 배열에서 값과 일치하는 숫자의 위치를 알 수 있으며, 일치하는 값이 없을시에는 -1
* ![image-20210420125024589](./README.assets/image-20210420125024589.png)

6. **순서도 만들기**

![image-20210420124946640](./README.assets/image-20210420124946640.png)



7. **동기 vs 비동기**

* 동기 : 위에서부터 순서대로 실행되는것.
* 비동기 : 언제 실행될지 모르는것으로 addEventListener 함수가 비동기에 해당





​				



















