# Date - 2020 06 07 Daily Coding

## Terms

- library
<pre>
   어떠한 기능의 집합체
   예를 들어, JavaScript의 라이브러리로는 JavaScript를 편리하게 사용하게 도와주는 JQuery가 있다
   두번째 예로는, Node.js의 서버를 자동으로 재실행 해주는 nodemon이 있다
   지금부터 우리는 JavaScript가 가지고 있는 거대한 라이브러리인 React를 공부할 예정이다
</pre>

- CDN
<pre>
   Content Delivery Network
   컨텐츠를 효율적으로 전달 하기 위해 네트워크에 저장 된 데이터를 읽어들이는 방식
   예를 들어, 누군가 엄청나게 예쁜 CSS를 네트워크에 업로드 했다고 가정하면, 우리는 그 CSS 업로드에 대한
   인터넷 URL만으로 기능을 전부 다 시행 할 수 있다
</pre>

- src, assets
<pre>
   src는 source의 약자로, 보통 개발 소스(코드)가 집합 돼 있는 폴더 이름으로 사용한다
   assets는 보유 자산, 자산, 재산 등과 유사한 의미를 가지고 있으며 
   프로젝트가 사용 할 폰트파일, 이미지파일 등 다양한 파일을 저장하는 공간이다
</pre>

## Today Education

- [ ] How to Work React Library
- [ ] What is " webpack.config.js " ?

### Start React Project

- yarn add react
- yarn add react-dom

### React Structure

- public
  1. index.html : 실제로 사용자가 보게 될 화면
- src ( component (화면을 구성 하는 요소) 는 파일명이 대문자로 시작한다 )
  1. App.js : 기본 화면을 구성할 component
  2. main.js : App component를 public 폴더 안의 index.html에 연결해 주는 역할

### React Project Needs Babel Packpage

- yarn add babel-core -D
- yarn add babel-loader -D
- yarn add babel-preset-react-app -D

1. Create File [.babelrc]
<pre>
    {
        "presets" : ["react-app"]
    }
</pre>

## webpack.config.js

- create /webpack.config.js
- yarn add copy-webpack-plugin -D
- yarn add webpack -D
- yarn add webpack-cli -D
- yarn add webpack-dev-server -D
