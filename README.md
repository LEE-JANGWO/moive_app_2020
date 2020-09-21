# Movie App 2020

React JS Fundamentals Course 2020

React 시작 후 첫번쨰 토이 프로젝트 ( 클론코딩 )

1. 이론공부부터 시작하면 시간 투입 대비 결과물에 아쉬움이 생기는 경험들을 해서 
  우선 간단한 것부터 만들어보면서 React의 기본에 대한 전체흐름을 파악. 이후 모르는 부분에 대해서 이론적인 접근.
  
2. 기존에 스프링프레임워크를 이용해 웹개발을 몇 번 해보았으며, 그 때 조금 써봤던 javascript가 이번 토이 프로젝트를 하는데 있어서 이해를 많이 도왔음. 

3. 토이프로젝트에는 간단한 HTML TAG 와 그에 따른 속성을 사용함. 기존 웹 개발을 하면서 익숙했던 HTML

4. 리액트의 동작원리
- App.js, index.js 등등 여러 컴포넌트화 시킨 파일들을 리액트가 받아와서 해석 후 만든 결과물을 index.html에 끼워넣는 것

5. 리액트 기초개념

- 컴포넌트
리액트는 컴포넌트와 함께 동작하고, 리액트 앱은 모두 컴포넌트로 구성. 리액트는 <App />과 같은 표시를 컴포넌트로 인식하고, 그 컴포넌트가 반환하는 값을 화면에 그려 준다.

- JSX
컴포넌트는 자바스크립트와 HTML을 조합한 JSX라는 문법을 사용해서 만든다.
EX) function App() {
  return <h3> hello world!</h3>
}

- props
props는 간단히 말하자면 컴포넌트에서 컴포넌트로 전달하는 데이터를 말한다.(리액트 컴포넌트로 넘어가는 매개변수이다).
props를 사용하면 컴포넌트를 효율적으로 재사용할 수 있다.


6. 구조분해할당
https://ko.javascript.info/destructuring-assignment  ( 구조분해할당 관련한 자세한 내용 )

7. prop-types
prop-types는 컴포넌트가 전달받은 props가 정말 내가 원하는 값인지 확인해 준다. ( 개발하다 보면 생기는 실수를 방지해줌 )
> npm install prop-types 로 설치

8. state
state는 동적데이터를 다룰 때 사용. 동적 데이터란 말 그대로 변경될 가능성이 있는 데이터. 객체를 예로 들면 객체의 구성 요소 중 일부가 있다가 없을 수도 있고,
구성 요소가 하나였다가 둘이 될 수도 있다. ( props는 이러한 데이터를 다루지 못한다 ).
그래서 state를 사용하고 state는 클래스형 컴포넌트에서 사용할 수 있는 개념이다.
ex) import React from 'react';

class App extends React.Component {   ==> 클래스형 컴포넌트가 되려면 App 클래스가 리액트가 제공하는 Component 클래스를 반드시 상속받아야 한다
  state = {
  
  };
  render() {
    return <h3> hello world!</h3>;
  }
}

export default App;

9. component 생명주기
프로젝트에서 사용된 component 생명주기 함수는 render(), constructor(), componentDidMount(), componentDidUpdate() 이다.
( Mount란 DOM 객체가 생성되고 브라우저에 나타나는 것을 의미 )

 - constructor: 컴포넌트 클래스의 생성자 함수로 컴포넌트를 만들 때 처음으로 호출되는 함수
 - render : 컴포넌트의 기능과 모양새를 정의하는 함수로 리액트 요소를 반환
 - componentDidMount : 컴포넌트를 생성하고 첫 렌더링이 끝났을 떄 호출되는 함수. 혹은 업데이트 시, 새로운 값을 사용하여 View를 리렌더링함
 - componentDidUpdate : 컴포넌트 업데이트 작업이 끝난 리렌더링 후에 호출되는 함수
 
 10. async , await
 ko.javascript.info/async-await 참조

<div>
  <span>ddd</span>
  <span> 1223</span>
</div>
