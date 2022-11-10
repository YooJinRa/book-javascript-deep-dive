// 자바스크립트의 this는 함수가 호출되는 방식에 따라 this에 바인딩될 값. 즉 바인딩이 동적으로 결정됨
function Circle(radius) {
  this.radius = radius;
  console.log("===>1===>", this);
}

Circle.prototype.getDiameter = function() {
  console.log("===>2===>", this);
  return 2 * this.radius;
  
};

const circle = new Circle(10);
console.log(circle.getDiameter());

// this 바인딩은 함수 호출 방식, 즉 함수가 어떻게 호출되었는지에 따라 동적으로 결정됨
// 함수의 상위스코프를 결정하는 방식인 렉시컬 스코프는 함수 정의가 평가되어 함수 객체가 생성되는 시점에 상위 스코프를 결정하지만, this 바인딩은 함수 호출 시점에 결정됨

// 일반 함수로 호출하면 함수 내부의 this에는 전역 객체가 바인딩 됨

// 메서드 내부의 중첩 함수나 콜백 함수의 this 바인딩을 메서드의 this 바인딩과 일치시키기 위한 방법
let value = 1;
const obj = {
  value : 100,
  foo() {
    const that = this;
    setTimeout(function() {
      console.log(that.value); // 100
    }, 100);
  }
};
obj.foo();

// 이 방법 이외에도 this를 명시적으로 바인딩 할 수 있는 Function.prototype.apply, Function.prototype.call, Function.prototype.bind 메서드 제공