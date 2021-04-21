### 틱택토

**appendChild**

* 자바스크립트에서 3*3형태의 칸 만들때 사용
  * 실전에서는html을 이용해서 tr,td 이용하여 table 로 만들어야함

```
var 바디 = document.body;
var 테이블 = document.createElement('table');
var 줄들 = [];
var 칸들 = [];

var 비동기콜백 = function(이벤트){
console.log(이벤트.target);
};
for( var i =1; i<=3; i +=1){
    var 줄 = document.createElement('tr');
    줄들.push(줄);
    칸들.push([]);
    for (var j=1; j<=3; j+=1){
        var 칸 = document.createElement('td');
        칸.addEventListener('click', 비동기콜백);
        칸들[i-1].push(칸);
        줄.appendChild(칸);
    }
    테이블.appendChild(줄);
}
바디.appendChild(테이블);
console.log(줄들, 칸들);
```



**이벤트.target**

* 콘솔에서 도형을 클릭했을때 해당 도형을 콘솔에서 나타나게 하는기능
* e.target===클릭된애

​       e.target.parentNode===클릭된 애 부모 태그

​       e.target.children===클릭된 애 자식 태그

* 줄들.indexOf(이벤트.target): 클릭한 도형의 줄이 몇번째 줄인지 알수있다. 

* ``` 
  var 비동기콜백 = function(이벤트){
  console.log(이벤트.target);//칸
  console.log(이벤트.target.parentNode);//줄
  console.log(이벤트.target.parentNode.parentNode);//테이블
  
  var 몇줄 = 줄들.indexOf(이벤트.target.parentNode);
  console.log('몇줄',몇줄);
  var 몇칸 = 칸들[몇줄].indexOf(이벤트.target);
  console.log('몇칸', 몇칸);
  };
  ```

​	

**value   vs   textContent**

* value는 input의 값이다
* textContent 는 태그 안의 글자를 입력할때 사용.



**Math.abs()**

* ()안의 값을 절대값으로 만들어준다. 



**forEach**

* 배열의 반복문

* ```
    칸들.forEach(function (줄){
          줄.forEach(function (칸){
          칸.textContent='';
          });
      });
  ```

  

