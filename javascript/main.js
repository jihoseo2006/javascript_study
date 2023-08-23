// //배열
// const frutis = ['Apple', 'Banana', 'Cherry', 'Grape', 'Kiwi']
// console.log(frutis[frutis.length - 1])

//Object (객체)
// const user = new Object()
// user.name = 'jiho'
// user.age = 20

// console.log(user)

// function User() {
//   this.name = 'jiho'
//   this.age = 20
// }
// const user = new User()

// const user = {
//   name: 'jiho',
//   age: 20
// }

// console.log(user.name)
// console.log(user['name'])

// const userA = {
//   name: 'jiho',
//   age: 20
// }
// const userB = {
//   name: 'Neo',
//   age: 22,
//   parent: userA
// }

// function hello() {
//   console.log('hello world')
// }
// console.log(hello)

// const a = function() {
//   console.log('a')
// }
// const b = function(c) {
//   console.log(c)
//   c()
// }
// b(a)

//형 변환

// const a = true
// const b = 1

// console.log(a === b)

// === 일치 연산자
// == 동등 연산자

// //참과 거짓(Truthy&Falsy)
// //1) false
// //2) 0
// //3) null
// //4)undefined
// //5)NaN
// //6)''
// //7)0n

// if(1) {
//   console.log('참!')
// }

// const frutis = ['apple']

// if(frutis.length) {
//   console.log('아이템이 들어있음!')
// }

// console.log(typeof 'hello' === 'string')
// console.log(typeof 123 === 'number')
// console.log(typeof false === 'boolean')
// console.log(typeof undefined === 'undefined')

//전개 연산자

// const a = [1,2,3]
// const b = [4,5,6]

// const c = a.concat(b)
// console.log(c)

// const d =[...a,...b]
// console.log(d)

// const a = {x:1, y: 2}
// const b = {y:3 , z: 4}

// const c = Object.assign({},a,b)
// console.log(c)

// const d = {...a,...b}
// console.log(d) //a,b변수 객체 출력(전개 연산자 사용시는 괄호 사라짐)

// function fn(x,y,z) {
//   console.log(x,y,z)
// }
// fn(1,2,3)

// const a = [1,2,3]

// fn(...a)

// 구조 분해 할당

// let b = 0
// let c = 0
// const arr = [1, 2, 3]
// // const a = arr[0]
// // const b = arr[1]
// // const c = arr[2]
// ;[,, c] = arr
// const arr = [1, 2, 3]
// const [a,rest] = arr

// console.log(a, rest)

// console.log(b, c)

//구조 분해 할당 - 디졸브 효과

// const obj = {
//   a:1,
//   b:2,
//   c:3,
//   x:7,
//   y:100
// }

// const { c, ...rest } = obj

// console.log(c, rest)

// 선택적 체이닝:남용하지 말고 꼭 필요할떄만!

// const user = null
// console.log(user?.name)

// const userA = {
//   name: 'jiho',
//   age: 18,
//   address: {
//     contury: 'Korea',
//     city: 'Daejeon'
//   }
// }
// const userB = {
//   name: 'cheho',
//   age: 15,
// }

// function getCity(user) {
//   return user.address?.city || '주소 없음.'
// }

// console.log(getCity(userA))
// console.log(getCity(userB))

//조건문 (if문)

// function isPositive(number) {
//   if(number > 0){
//     return '양수'
//   } else if(number < 0){
//     return '음수'
//   } else {
//     return '0'
//   }

// }

// console.log(isPositive(1))
// console.log(isPositive(10))
// console.log(isPositive(-2))
// console.log(isPositive(0))

//switch 조건문

// function price(fruit) {
//   switch(fruit) {
//     case 'Apple':
//       return 1000
//     case 'Banana':
//       return 1500
//     case 'Cherry':
//       return 2000
//     default:
//       return 0
//   }
//   if(fruit === 'Apple') {
//     return 1000
//   } else if(fruit === 'Banana') {
//     return 1500
//   } else if(fruit === 'Cherry') {
//     return 2000
//   } else {
//     return 0
//   }
// }

// console.log(price('Apple'))
// console.log(price('Banana'))
// console.log(price('Cherry'))
// console.log(price('Hello'))

//for 반복문

// for (let i = 9; i > -1; i -= 1) {
//   if(i % 2 === 0) {
//     continue
//   }
//   console.log(i)
// }

//for of 반복문

// const fruits = ['Apple', 'Banana', 'Cherry']

// // for (let i =0; i < fruits.length; i += 1) {
// //   console.log(fruits[i])
// // }

// for(const fruit of fruits) {
//   console.log(fruit)
// }

//예제 2

// const users = [
//   {
//     name: 'jiho',
//     age: 18
//   },
//   {
//     name: 'cheho',
//     age: 15
//   },
//   {
//     name: 'hj',
//     age: 50
//   }
// ]

// for (let i = 0; i < users.length; i+=1) {
//   console.log(users[i].name)
// }

// for(const user of users) {
//   console.log(user.name)
// }

//for in 반복문(객체 데이터 조회)

// const user = {
//   name: 'jiho',
//   age: '18',
//   isValid: true,
//   email: 'jihoseo2006@gmail.com',
// }

// for(const key in user) {
//   console.log(key)
//   console.log(user[key])
// }

//while 반복문

// let n = 0
// while (n < 4) {
//   console.log(n)
//   n += 1
// }

//do while 문

// let n = 0
// // while(n){
// //   console.log(n)
// // }

// do {
//   console.log(n)
//   n += 1
// } while (n < 4)

//함수

//함수 선언문
// function hello() {}
//함수 표현식
// const hello = function () {}

// hello()

//호이스팅
// 함수 선언시에는 선언 전에 미리 위에 생성 처해놔라...
//선언하고 생성하면 그건 바보

//반환 및 종료
// function plus(num) {
//   if(num === undefined) {
//     console.log('숫자를 입력해주세요!')
//     return 0
//   }
//   return num + 1
// }

// console.log(plus(2))
// console.log(plus(7))
// console.log(plus())

// 매개변수 패턴 - 기본값

// function sum(a, b = 1) {
//   return a + b;
// }
// console.log(sum(1, 2))
// console.log(sum(7))

// 매개변수 패턴 - 객체구조 분해 할당

// const user = {
//   name: 'jiho',
//   age: 18,
//   email: 'jihoseo2006@gmail.com',
// }

// function getName({name}) {
//   return name
// }

// function getEmail({ email = '이메일이 없습니다.'}) {
//   return email
// }

// console.log(getName(user))
// console.log(getEmail(user))

// 매개변수 패턴 - 배열 구조분해 할당

// const fruits = ['Apple', 'Banana', 'Cherry']
// const numbers = [1,2,3,4,5,6,7]

// function getSecondItem([, b]) {
//   return b
// }

// console.log(getSecondItem(fruits))
// console.log(getSecondItem(numbers))

// 매개변수 패턴 - 나머지 매개변수

// function sum(...rest) {
//   console.log(rest)
//   console.log(arguments)
//   return rest.reduce(function(acc, cur) {
//     return acc + cur
//   }, 0)
// }

// console.log(sum(1, 2))
// console.log(sum(1, 2, 3, 4))
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

//화살표 함수

// function sum(){}
// const sum = function() {}
// const sum = () => {}

// function sum(a,b) {
//   return a + b
// }

// const sum = (a,b) => a + b

// console.log(sum(1,2)) //3
// console.log(sum(10, 20)) // 30

//화살표 함수

// const a = () => {} //기본 타입
// const b = x => {} // 매개변수가 하나일때
// const c = (x,y) => {} // 매개변수가 두개 이상일때
// const d = x => {return x * x}
// const e = x =>  x * x
// const f = x => {
//   console.log(x * x)
//   return x * x
// }
// const g = () => {return { a : 1 }}
// const h = () => ({ a:1 })
// const i = () => { return [1,2,3] }
// const j = () => [1,2,3]

//즉시실행함수(IIFE)

// const a = 7

// const double  = () => {
//   console.log(a * 2)
// }

// double()

// ;(() => {
//   console.log(a * 2)
// })()

// //즉시실행함수 패턴

// ;(() => {console.log(a * 2)})() // (F)()
// ;(function () {console.log(a * 2)})() // (F)()
// ;(function () {console.log(a * 2)}()) // (F())
// ;!function () {console.log(a * 2)} () // !F()
// ;+function () {console.log(a * 2)}() // +F()

// ;((a,b) => {
//   console.log(a.innerWidth)
//   console.log(b)
// })(window, document.body)//즉시실행 함수의 두번째 함수는 첫번째 함수의 매게변수가 될수 있음!

// 콜백(Callback)

// const a = callback => {
//   console.log('A')
//   callback()
// }
// const b = () => {
//   console.log('B')
// }

// a(b)
//예제 2
// const sum = (a, b, c) => {
//   setTimeout(() => {
//     c(a + b)
//   }, 1000);
// }
// sum(1,2, (value) => {
//   console.log(value)
// })
// sum(3,7, value => {
//   console.log(value)
// })

// const loadImage = (url, cb) => {
//   const imgEl = document.createElement('img');
//   imgEl.src = url
//   imgEl.addEventListener('load', () => {
//     setTimeout(() => {
//       cb(imgEl)
//     }, 1000)
//   })
// }

// const containerEl = document.querySelector('.container')
// loadImage('https://www.gstatic.com/webp/gallery/4.jpg', imgEl => {
//   containerEl.innerHTML = ''
//   containerEl.append(imgEl)
// })

// 재귀
// let i = 0

// const a = () => {
//   console.log('A')
//   i += 1
//   if(i < 4) {
//   a()
//   }
// }

// a()

// const userA = {name: 'A', parent: null}
// const userB = {name: 'B', parent: userA}
// const userC = {name: 'C', parent: userB}
// const userD = {name: 'D', parent: userC}

// const getRootUser = (user) => {
//   if (user.parent) {
//     return getRootUser(user.parent)
//   }
//   return user
// }

// console.log(getRootUser(userD))

//호출 스케줄링
// const hello  = () => {
//   console.log('hello~')
// }
// const timeout = setInterval(hello ,2000)
// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () =>{
//   console.log('Clear!')
//   clearInterval(timeout)
// } )

//this
//// 일반 함수의 this는 호출 위치에서 정의
// const user = {
//   firstname: 'jiho',// 일반 함수가 참조하는 대상!
//   lastname: 'seo',
//   age: '18',
//   getFullName: function () {
//     return `${this.firstname} ${this.lastname}`
//   }
// }

// console.log(user.getFullName())

//// 화살표 함수의 this는 자신이 선언된 함수(렉시컬== 함수가 동작할수 있는 유효한 범위) 범위에서 정의
// function user() {
//   this.firstname = 'Neo' // 화살표 함수의 this는 이곳을 참조함!
//   this.lastname = 'Anderson'

//   return {
//     firstname: 'jiho',
//     lastname: 'seo',
//     age: '18',
//     getFullName: () => { //화살표 함수!
//       return `${this.firstname} ${this.lastname}`
//     }
//   }
// }

// const u = user()
// console.log(u.getFullName())

//일반함수 예제 2
// function user() {
//   this.firstname = 'Neo'
//   this.lastname = 'Anderson'

//   return {
//     firstname: 'jiho',
//     lastname: 'seo',
//     age: '18',
//     getFullName() {
//       return `${this.firstname} ${this.lastname}`
//     }
//   }
// }

// const lewis = {
//   firstname: 'Lewis',
//   lastname: 'Yang'
// }

// const u = user()
// console.log(u.getFullName())
// console.log(u.getFullName.call(lewis))

// const timer = {
//   title: 'TIMER!',
//   timeout: function() {
//     console.log(this.title)
//     setTimeout(() => {
//       console.log(this.title)
//     }, 1000)
//   }
// }
// timer.timeout()

//Ch 5. 클래스 prototype

//const fruits = ['Apple', 'Banana', 'Cherry']

// const fruits = new Array('Apple', 'Banana', 'Cherry')//생성자 함수

// console.log(fruits)
// console.log(fruits.length)
// console.log(fruits.includes('Banana'))
// console.log(fruits.includes('Orange'))

// Array.prototype.jiho = function() {
//   console.log(this)
// }

// fruits.jiho()

// const arr = []
// arr.jiho()

//예제 2

// const jiho = {
//   firstname: 'Jiho',
//   lastname: 'Seo',
//   getFullName: function () {
//     return `${this.firstname} ${this.lastname}`
//   }
// }
// const neo = {
//   firstname: 'Neo',
//   lastname: 'Anderson',
// }

// console.log(jiho.getFullName())
// console.log(jiho.getFullName.call(neo))

// function User(first, last) {
//   this.firstname = first
//   this.lastname = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstname} ${this.lastname}`
// }

// const jiho = new User('Jiho','Seo') // 생성자 함수
// const neo = new User('Neo','Anderson')

// console.log(jiho)
// console.log(neo)
// console.log(jiho.getFullName())
// console.log(neo.getFullName())

//ES6 Classes 방식

// function User(first, last)  {
//   this.firstname = first
//   this.lastname = last
// }

// User.prototype.getFullName = function () {
//   return `${this.firstname} ${this.lastname}`
// }

//ES6 Classes 방식 예제
// class User {
//   constructor(first, last) {
//     this.firstname = first
//     this.lastname = last
//   }
//   getFullName() {
//     return `${this.firstname} ${this.lastname}`
//   }
// }

// const jiho = new User('Jiho','Seo')
// const neo = new User('Neo','Anderson')

// console.log(jiho)
// console.log(neo)

// Getter, Setter

// class User {
//   constructor(first, last) {
//     this.firstname = first
//     this.lastname = last
//   }
//   getfullname() {
//     return `${this.firstname} ${this.lastname}`
//   }
// }

// const jiho = new User('Jiho','seo')

// console.log(jiho.getfullname())

// jiho.firstname = 'Neo'

// console.log(jiho.getfullname())

// 위의 코드 수정본

// class User {
//   constructor(first, last) {
//     this.firstName = first
//     this.lastName = last
//   }
//   get fullName() { //하나의 Gatter, 값을 값을 조회(받아내는)하는 메소드
//     console.log('Gatting full name!')
//     return `${this.firstName} ${this.lastName}`
//   }
//   set fullName(value) { //setter, 값을 할당할떄 동작하는 매소드
//     console.log(value)
//     ;[this.firstName, this.lastName] = value.split(' ')
//   }
// }

// const jiho = new User('Jiho','Seo')

// console.log(jiho.fullName)

// jiho.firstName = 'Neo'

// console.log(jiho.fullName)

// jiho.fullName = 'Neo Anderson' //set의 개념. 이 값은 value에 매개변수로 들어감.
// console.log(jiho)

//정적 메소드

// class User {
//   constructor(first, last) {
//     this.firstName = first
//     this.lastName = last
//   }
//   getFullName() { //일반(혹은 프로토타입) 메소드는 기본적으로 인스턴스에서 사용함.
//     return `${this.firstName} ${this.lastName}`
//   }
//   static isUser(user) {// 정적 메소드, 클래스에서만 사용 가능하고 인스턴스는 사용 불가
//     if (user.firstName && user.lastName) {
//       return true
//     }
//     return false
//   }
// }

// const jiho = new User('Jiho', 'Seo')
// const neo = new User('Neo', 'Anderson')
// const lewis = {
//   name: 'Lewis Yang',
//   age: 85
// }

// console.log(jiho.getFullName())
// console.log(neo.getFullName())
// console.log(User.isUser(jiho))
// console.log(User.isUser(neo))
// console.log(User.isUser(lewis))

//상속과 instanceof

//운송수단
// class Vehicle {
//   constructor(acceleration = 1) {
//     this.speed = 0
//     this.acceleration = acceleration
//   }
//   accelerate() {
//     this.speed += this.acceleration
//   }
//   decelerate() {
//     if(this.speed <= 0) {
//       console.log('정지!')
//       return
//     }
//     this.speed -= this.acceleration
//   }
// }

// //자전거
// class Bicycle extends Vehicle {  //extends:상속(또는 확장) Vehicle 클래스를 상속받음
//   constructor(price = 100, acceleration) {
//     super(acceleration) // super: Vehicle 클래스의 constructor 가 여기서 super로 사용됨
//     this.price = price
//     this.wheel = 2
//   }
// }

// const bicycle = new Bicycle(300) //Bicycle 클래스의 constructor에 매개변수값이 감 (인스턴스)
// bicycle.accelerate()
// bicycle.accelerate()
// console.log(bicycle)
// console.log(bicycle instanceof Bicycle) //bicycle 인스턴스가 어떤 클래스로부터 파생된건지 확인하고자 하는 클래스명을 적어주면됨.적은 클래스가 일치하면 true 아님 그 반대.
// console.log(bicycle instanceof Vehicle) // 위의 bicycle 인스턴스는 Bicycle 클래스에서 만들어 졌지만, Bicycle 클래스가 Vehicle클래스에 상속되서 만들어졌기에 Vehicle 클래스의 인스턴스도 됨.

// //자동차
// class Car extends Bicycle {
//   constructor(license, price, acceleration) {
//     super(price, acceleration)
//     this.license = license
//     this.wheel = 4
//   }
//   // 오버라이딩
//   accelerate() { // accelerate 함수를 재정의함!
//     if (!this.license) { // 라이센스가 없으면 실행
//       console.error('무면허!')
//       return
//     }
//     this.speed += this.acceleration
//     console.log('가속!', this.speed)
//   }
// }

// const carA = new Car(true, 7000, 10)
// const carB = new Car(false, 4000, 6)
// carA.accelerate()
// carA.accelerate()
// carB.accelerate()
// console.log(carA instanceof Car) // 인스턴스는, 만들어진 클래스의 인스턴스이지만, 만들어진 클래스에서 상속한 클래스의 인스턴스이기도 하다!
// console.log(carB instanceof Car) //(... instanceof Bicycle 또는 Vehicle) 도 true값이 나옴.

// class Boat extends Vehicle {
//   constructor(price, acceleration) {
//     super(acceleration)
//     this.price = price
//     this.motor  = 1
//   }
// }

// const boat = new Boat(10000, 5)
// console.log(boat instanceof Boat) //true,Vehicle 클래스의 인스턴스
// console.log(boat instanceof Bicycle) //false, Boat는 바로 위대의 Vehicle 클래스를 상속받아서 Bicycle,car 클래스의 인스턴스가 아님!

//instanceof 와 constructor(생성자) 4.8 학습 시작

// class A {
//   constructor() { //생성자 함수 = 거푸집

//   }
// }

// class B extends A { //extends => 상속 키워드 B클래스는 A클래스의 내용을 상속받음.
//   constructor() {
//     super()
//   }
// } //기본적인 상속 코드

// class C extends B { //C클래스는 B클래스의 내용을 상속받음.
//   constructor() {
//     super()
//   }
// }

// const a = new A() //인스턴스 = 거푸집으로 찍어낸 칼
// const b = new B()
// const c = new C()

// console.log(c instanceof A)
// console.log(c instanceof B)
// console.log(c instanceof C)

// console.log(c.constructor === A)
// console.log(c.constructor === B)
// console.log(c.constructor === C) // 인스턴스가 어느부분에서 만들어진건지 확인할거면 .constructor 와 클래스를 일치연산자로 비교!

// // const fruits =['Apple','Banana'] // fruits배열은 Array클래스의 하나의 인스턴스임!
// const fruits = new Array('Apple','Banana')

// console.log(fruits.constructor === Array)
// console.log(fruits instanceof Array)

//Ch 06. 표준 내장 객체

//문자

//.length
//문자의 길이 (숫자)를 반환함
// const str = 'Hello world!'

// console.log(str.length)

//.includes()
// 대상 문자에 주어진 문자가 포함되어있는지(불린) 확인함/
// const str = 'Hello world!'

// console.log(str.includes('Hello', 0))

//.indexOf()
//대상 문자에서 주어진 문자와 일치하는 첫 번째 인덱스(숫자)를 반환함.
//일치하는 문자가 없으면 '-1'을 반환함.

// const str = 'Hello world!'

// console.log(str.indexOf('!'))
// console.log(str.indexOf('jiho'))

// if(!str.includes('jiho')) {
//   console.log('jiho 가 없습니다.')
// }

// .padEnd()
// 대상 문자의 길이(length)가 지정된 길이보다 작으면,
// 주어진 문자를 지정된 길이까지 끝에 붙여 새로운 문자를 반환함.

// const str = '12345'

// console.log(str.padEnd(10, '!'))
// console.log(str)

// .padStart()
// 대상 문자의 길이(length)가 지정된 길이보다 작으면,
// 주어진 문자를 지정된 길이까지 앞에 붙여 새로운 문자를 반환함.

// const str = '1234567890123'

// console.log(str.padStart(10, '0'))
// console.log(str)

// .replace()
// 대상 문자에서 패턴(문자, 정규식)과 일치하는 부분을 교체한 새로운 문자를 반환.

// const str = 'Hello, Hello?!'

// console.log(str.replace('Hello','Hi'))
// console.log(str.replace(/Hello/g, 'Hi'))
// console.log(str)

// .slice()
// 대상 문자의 일부를 추출해 새로운 문자를 반환함.
// 두 번째 인수 직전까지 추출하고, 두 번쨰 인수를 생략하면 대상 문자의 끝까지 추출합니다.

// const str = 'Hello world!'

// console.log(str.slice(0,5))
// console.log(str.slice(6, -1))
// console.log(str.slice(6))
// console.log(str)

// .split()
// 대상 문자를 주어진 구분자로 나눠 배열로 반환함

// const str = 'Apple / Banana / Cherry'

// console.log(str.split(' / '))

// .toLowerCase()
// 대상 문자를 영어 소문자로 변환해 새로운 문자로 반환함

// const str = 'Apple, Banana, Cherry'
// console.log(str.toLocaleLowerCase())
// console.log(str)

// .toUpperCase()
// 대상 문자를 영어 대문자로 변환해 새로운 문자로 반환함

// const str = 'Apple, Banana, Cherry'

// console.log(str.toUpperCase())
// console.log(str)

// .trim()
// 대상 문자의 앞뒤 공백 문자(space, tab)등을 제거한 새로운 문자를 반환함

// const str = '   HEROPY!   '

// console.log(str.trim())
// console.log(str)

//숫자

// .toFixed()
// 숫자를 지정된 고정 소수점 표기(자릿수)까지 표현하는 문자로 반환함.

// const num = 3.1415926535

// console.log(num.toFixed(2))
// console.log(parseFloat(num.toFixed(2))) //parseFloat로 문자 데이터를 숫자로 바꿈

// .toLocaleString()
// 숫자를 현지 언어 방식의 문자로 반환함.

// const num = 1000000

// console.log(num.toLocaleString())
// console.log(`${num.toLocaleString()}원`)

// Number.isInteger()
// 숫자가 정수인지 확인한다.

// const num = 123
// const ip = 3.14

// console.log(Number.isInteger(num))
// console.log(Number.isInteger(ip))

// Number.isNaN()
// 주어진 값이 `NaN` 인지 확인함.

// const num1 = NaN
// const num2 = 123
// const str = 'Hello world'
// const nul = null

// console.log(Number.isNaN(num1))
// console.log(Number.isNaN(num2))
// console.log(Number.isNaN(str))
// console.log(Number.isNaN(nul))

// Number.parseInt() 또는 parseInt()
// 주어진 값(숫자, 문자)을 파싱해 특정 진수(radix)의 정수로 반환함.

// const str = '3.1415926535'
// const num = 3.1415926535

// console.log(Number.parseInt(str, 10))
// console.log(parseInt(num, 10)) //함수로도 제공됨!

// Number.parseFloat() 또는 parseFloat()
// 주어진 값(숫자, 문자)을 파싱해 특정 진수(radix)의 부동소수점 실수로 반환함.

// const str = '3.1415926535'
// const num = 3.1415926535

// console.log(Number.parseFloat(str, 10))
// console.log(parseFloat(num, 10)) //함수로도 제공됨!

//수학

// Math.abs()
// 주어진 숫자의 절댓값을 반환함.

// console.log(Math.abs(2))
// console.log(Math.abs(-2))

//Math.ceil()
// 주어진 숫자를 올림해 정수를 반환

// console.log(Math.ceil(3.1415926535))

//Math.floor()
// 주어진 숫자를 내림해 정수를 반환함.

// console.log(Math.floor(3.1415926535))

// Math.max()
// 주어진 숫자 중 가장 큰 숫자를 반환함.

// console.log(Math.max(1, 22, 38, 1000, 192))

// Math.min()
// 주어진 숫자 중 가장 작은 숫자를 반환함.

// console.log(Math.min(1, 22 ,38, 192, -10))

// Math.pow()
// 주어진 숫자의 거듭제곱한 값을 반환함.

// console.log(Math.pow(4,2))
// console.log(Math.pow(7,2))
// console.log(Math.pow(10,3))

// Math.random()
// 숫자 0 이상, 1미만의 난수를 반환함.

// console.log(Math.random())

// // 특정 범위의 랜덤 함수를 얻는 함수
// function random(min = 0, max = 10) {
//   return Math.floor(Math.random() * (max - min)) + min
// }

// console.log(random())
// console.log(random(11,20))
// console.log(random(101,999))

// Math.round()
// 주어진 숫자를 반올림해 정수를 반환함.

// const num1 = 3.141
// const num2 = 3.768

// console.log(Math.round(num1))
// console.log(Math.round(num2))

// 날짜

// const date = new Date()
// console.log(date)
// // 타임스탬프

// const d1 = new Date(2023, 3, 8, 9, 7, 40) //js는 월은 0부터 계산함!
// console.log(d1)

// const d2 = new Date('Sat Apr 08 2023 09:07:40 GMT+0900 (한국 표준시)')
// console.log(d2)
// console.log(d2.getFullYear()) //연도만 반환

// .gerFullyear()와 .setFullYear()
// 날짜 인스턴스와 '연도'를 반환하거나 지정한다.

// const date = new Date()

// console.log(date.getFullYear())

// date.setFullYear(2023)
// console.log(date.getFullYear())
// console.log(date)

// .getMonth()와 .setMonth()
// 날짜 인스턴스의 '월'을 반환하거나 지정한다.
// 0부터 시작함(제로 베이스드 넘버링)

// const date = new Date()

// console.log(date.getMonth())
// console.log(date)

// date.setMonth(0)
// console.log(date.getMonth())
// console.log(date)

// .getDate()와 .setDate()
// 날짜 인스턴스의 '일'을 반환하거나 지정한다.

// const date = new Date()

// console.log(date.getDate())
// console.log(date)

// date.setDate(11)
// console.log(date.getDate())
// console.log(date)

// // .getHours()와 .setHours()
// // 날짜 인스턴스의 '시간'을 반환하거나 지정한다.

// const date = new Date()

// console.log(date.getHours())
// console.log(date)

// date.setHours(7)
// console.log(date.getHours())
// console.log(date)

// .getSeconds()와 .setSeconds()
// 날짜 인스턴스의 '초'을 반환하거나 지정한다.

// const date = new Date()

// console.log(date.getSeconds())
// console.log(date)

// date.setSeconds(57)
// console.log(date.getSeconds())
// console.log(date)

// .getDay
// 날짜 인스턴스의 '요일'을 반환함.

// const date = new Date()
// const day = date.getDay()

// console.log(day)
// console.log(getDayKo(day))

// function getDayKo(day) {
//   switch (day) {
//     case 0: return '일요일'
//     case 1: return '월요일'
//     case 2: return '화요일'
//     case 3: return '수요일'
//     case 4: return '목요일'
//     case 5: return '금요일'
//     case 6: return '토요일'
//   }
// }

//.getTime()와 .setTime()
//1970-01-01 00:00:00` (유닉스타임)부터 경과한,
//날짜 인스턴스의 '밀리초(ms)'로 반환하거나 지정한다.

// const date = new Date()

// console.log(date.getTime())
// console.log(date)

// date.setTime(1700000000000)
// console.log(date.getTime())
// console.log(date)

//예제

// Date.prototype.isAfter = function (date) {
//   const a = this.getTime()
//   const b = date.getTime()
//   console.log(a)
//   console.log(b)
//   return a > b
// }

// const d1 = new Date('Sun Apr 30 2023 00:00:00 GMT+0900(한국 표준시)')
// const d2 = new Date('Mon Apr 30 2024 00:00:00 GMT+0900(한국 표준시)')

// console.log(d1.isAfter(d2)) //false
// console.log(d2.isAfter(d1)) //true

// Date.now()
// `1970-018-01 00:00:00`(유닉스타임)부터 경과한,
// 메소드가 호출될 때의 '밀리초(ms)'로 반환합니다.

// const time = new Date().getTime()
// console.log(Date.now())
// console.log(time)

// setTimeout(() => {
//   console.log(Date.now())
//   console.log(time)
// }, 1000)

//배열

//.length
//배열의 길이(숫자)를 반환합니다.

//  const arr =['A','B','C']

//  console.log(arr.length)

//.at()
// 대상 배열을 인덱싱함.
// 음수 값을 사용하면 뒤에서부터 인덱싱한다.

// const arr =['A','B','C','D']

// console.log(arr[0])
// console.log(arr.at(0))

// console.log(arr[arr.length - 2])
// console.log(arr.at(-2))

//.concat() 메소드
// 대상 배열과 주어진 배열을 병합해 새로운 배열을 반환한다.

// const arr1 = ['A','B','C']
// const arr2 = ['D','E','F']
// // const arr3 = arr1.concat(arr2) // 배열 병합을 해도 원본 배열에 변화는 없음!
// // const arr3 = [...arr1, ...arr2] //.concat() 대신 전개 연산자 사용 방법으로도 구현 가능하다.

// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

// .every()
// 대상 배열의 모든 요소가 콜백 테스트에서 참(Truthy)을 반환하는지 확인한다.

// const arr = [1,2,3,4]
// const isValid = arr.every(item => item < 5)

// console.log(isValid)//모든 테스트가 참일시 true, 하나라도 실패한다면 false.

// .filter()
// 주어진 콜백 테스트를 통과(참(Truthy)을 반환)하는 모든 요소를 새로운 배열로 반환함.
// 모든 요소가 테스트를 통과하지 못하면 빈 배열을 반환함.

// const numbers = [1, 20, 7, 9 ,104, 0 ,58]
// const filterNumbers = numbers.filter(number => number < 0)

// console.log(filterNumbers)

//예제
// const users = [
//   { name: 'Neo', age: 85},
//   { name: 'Amy', age: 22},
//   { name: 'Lewis', age: 11}
// ]
// const adults = users.filter(user => user.age >= 19 )
// console.log(adults)

//.find()
// 대상 배열에서 콜백 테스트를 통과하는 첫 번쨰 요소를 반환함.

// const arr = [ 5,8,130,12,44 ]
// const foundItem = arr.find(item => item > 10)

// console.log(foundItem)

//예제
// const users = [
//     { name: 'Neo', age: 85},
//     { name: 'Amy', age: 22},
//     { name: 'Lewis', age: 11}
//   ]
// const foundUser = users.find(user => user.name === 'Amy')
// console.log(foundUser)

//예제 2
// const arr = [5,8,130,12,44]

// const index = arr.findIndex(item => item > 10)
// console.log(index)

// .flat()
// 대상 배열의 모든 하위 배열을 지정한 깊이(Depth)까지 이어붙인 새로운 배열을 생성함.
// 깊이의 기본값은 `1`이다.

// const arr = [1, 2,[3, 4, [5,6,[7,8]]]]

// console.log(arr.flat()) //[1, 2, 3, 4, [5, 6, [7, 8]]]
// console.log(arr.flat(2)) //[1, 2, 3, 4, 5, 6, [7, 8]]
// console.log(arr.flat(Infinity)) //[1, 2, 3, 4, 5, 6, 7, 8]

// .forEach()
// 대상 배열의 길이만큼 주어진 콜백을 실행함.

// const arr = ['A','B','C']

// arr.forEach(item => console.log(item))

// for (let i = 0; i < arr.length; i += 1) {
//   if(i > 1) {
//     break
//   }
//   console.log(arr[i])
// }

// .includes()
// 대상 배열이 특정 요소를 포함하고 있는지 확인함.

// const arr = [1,2,3]
// console.log(arr.includes(2))

//예제

// const fruits = ['Apple', 'Banana', 'Cherry']

// console.log(fruits.includes('Apple'))
// console.log(fruits.includes('cherry'))

//예제 2

// const users = [
//     { name: 'Neo', age: 85},
//     { name: 'Amy', age: 22},
//     { name: 'Lewis', age: 11}
//   ]
// console.log(users.includes({name: 'Neo', age: 85 }))

// const neo = users[0]
// console.log(users.includes(neo))

//.join()
// 대상 배열의 모든 요소를 구분자로 연결한 문자를 반환함.

// const arr = ['Apples', 'Banana', 'Cherry']

// console.log(arr.join(','))
// console.log(arr.join(', '))
// console.log(arr.join('/'))

// .map()
// 대상 배열의 길이만큼 주어진 콜백을 실행하고, 콜백의 반환 값을 모아 새로운 배열을 반환한다.

// const numbers = [1,2,3,4]
// const newNumbers = numbers.map(item => item * 2)

// console.log(newNumbers)
// console.log(numbers)

//예제

// const users =  [
//   { name: 'Neo', age: 85},
//   { name: 'Amy', age: 22},
//   { name: 'Lewis', age: 11},
// ]
// const newUsers = users.map(user => {
//   return {
//     ...user,
//     isValid: true,
//     email: null
//   }
// })

// console.log(newUsers)

// .pop()
// 대상 배열에서 마지막 요소를 제거하고 그 요소를 반환함.
// 대산 배열 원본이 번경됨.

// const fruits = ['Apple', 'Banana', 'Cherry']

// console.log(fruits.pop())
// console.log(fruits)

// .push()
// 대상 배열의 마지막에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환함.
// 대상 배열 원본이 번경됨.

// const fruits = ['Apple', 'Banana', 'Cherry']

// const newLength = fruits.push('Orange')
// console.log(newLength)
// console.log(fruits)

// fruits.push('Mango', 'Strawberry')
// console.log(fruits)

// .reduce()
// 대상 배열의 길이만큼 주어진 콜백을 실행하고, 마지막에 호출되는 콜백의 반환 값을 반환한다.
// 각 콜백의 반환 값은 다음 콜백으로 전달된다.

// const numbers = [1,2,3,4,5,6]
// const sum = numbers.reduce((acc, cur) => acc + cur, 0)

// console.log(sum)

//예제

// const users = [
//   { name: "Neo", age: 85},
//   { name: "Amy", age: 22},
//   { name: "Lewis", age: 11},
// ]

// //총 나이 계산
// const totalAge = users.reduce((acc, cur) => acc + cur.age, 0)
// console.log(totalAge)
// console.log(`평균 나이: ${(totalAge / users.length).toFixed(1)}세`) // 평균 나이

// //모든 이름 추출
// const names = users.reduce((acc, cur) => {
//   acc.push(cur.name)
//     return acc
//   }, []).join(', ') //메소드 체이닝으로 join 메소드 사용
// console.log(names)

// .reverse()
// 대상 배열의 순서를 반전함.
// 대상 배열 원본이 번경됨

//  const arr = ['A', 'B', 'C']
//  const reversed = arr.reverse()

//  console.log(reversed)
//  console.log(arr)

// .shift()
// 대상 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환한다.
// 대상 배열 원본이 번경됨.

// const arr = ['A', 'B', 'C']

// console.log(arr.shift())
// console.log(arr)

// .slice()
// 대상 배열의 일부를 추출해 새로운 배열을 변환함.
// 두 번쨰 인수 직전까지 추출하고, 두 번째 인수를 생략하면 배열의 끝까지 추출한다.

// const arr = ['A','B','C','D','E','F','G']

// console.log(arr.slice(0,3))
// console.log(arr.slice(4,-1))
// console.log(arr.slice(4))
// console.log(arr)

// .some()
// 대상 배열의 어떤 요소라도 콜백 테스트를 통과하는지 확인함.

// const arr = [1,2,3,4]
// const isValid = arr.some(item => item > 4)

// console.log(isValid)

// .sort()
// 대상 배열을 콜백의 반환 값(음수, 양수, 0)에 따라 정렬합니다.
// 콜백을 제공하지 않으면, 요소를 문자열로 변환하고 유니코드 코드 포인트 순서로 정렬함
// 대상 배열 원본이 변경됨.

// const numbers = [4,17,2,103,3,1,0]

// numbers.sort()
// console.log(numbers)

// numbers.sort((a,b) => a - b)
// console.log(numbers)

// numbers.sort((a,b) => b - a)
// console.log(numbers)

//예제

// const users = [
//   {name: 'Neo', age: 85},
//   {name: 'Amy', age: 22},
//   {name: 'Lewis', age: 11}
// ]

// // 나이가 적은 순부터
// users.sort((a, b) => a.age - b.age)
// console.log(users)
// // 나이가 많은 순부터
// users.sort((a, b) => b.age - a.age)
// console.log(users)

// .splice()
// 대상 배열의 요소를 추가하거나 삭제하거나 교체한다.
// 대상 배열 원본이 번경됨.

// const arr = ['A', 'B', 'C']
// arr.splice(2, 0, 'X') //arr.splice(시작할 위치, 제거할 개수, 추가할 인수)

// console.log(arr)

//예제
// const arr = ['A', 'B', 'C']
// arr.splice(1, 1, 'X')

// console.log(arr)

// .unshift()
// 새로운 요소를 대상 배열의 맨 앞에 추가하고 새로운 배열의 길이를 반환함.
// 대상 배열 원본이 번경됨.

// const arr = ['A', 'B', 'C']

// console.log(arr.unshift('X'))
// console.log(arr)

// Array.from()
// 유사 배열(Array-like) 을 실제 배열로 반환함.

// const arrayLike = {
//   0: 'A',
//   1: 'B',
//   2: 'C',
//   length: 3
// }

// console.log(arrayLike.constructor === Array)
// console.log(arrayLike.constructor === Object)

// Array.from(arrayLike).forEach(item => console.log(item))

// Array.isArray()
// 배열 데이터인지 확인함.

// const array = ['A', 'B', 'C']
// const arraylike = {
//   0: 'A',
//   1: 'B',
//   2: 'C',
//   length: 3
// }

// console.log(Array.isArray(array))
// console.log(Array.isArray(arraylike))

//객체

// Object.assign()
// 하나 이상의 출처(Source) 객체로부터 대상(Target) 객체로 속성을 복사하고 대상 객체롤 반환함.

// const target = { a: 1, b: 2 };
// const source1 = { b: 3, c: 4 };
// const source2 = { c: 5, d: 6 };
// // const result = Object.assign({}, target, source1, source2);
// const result = {
//   // a: 1,
//   // b: 3,
//   // c: 5,
//   // d: 6,
//   ...target, //전개 연산자 문법을 사용해서 구현하기도 함
//   ...source1,
//   ...source2
// };

// console.log(target);
// console.log(result);
 

//Object.entries()
//주어진 객체의 각 속성과 값으로 하나의 배열 만들어 요소로 추가한 2차원 배열을 반환함.

// const user = {
//   name : 'Heropy',
//   age: 85,
//   isValid: true,
//   email: 'thesecon@gmail.com'
// }

// console.log(Object.entries(user))

// for(const [key, value] of Object.entries(user)){
//   console.log(key, value)
// }


//Object.keys() 
// 주어진 객체의 속성 이름을 나열한 배열을 반환함.

// const user = {
//   name: 'Heropy',
//   age: 85,
//   isValid: true,
//   email: 'thesecon@gmail.com'
// }

// console.log(Object.keys(user))

//Object.values()
// 주어진 객체의 속성 값을 나열한 배열을 반환합니다.

// const user = {
//   name: 'Heropy',
//   age: 85,
//   isValid: true,
//   email: 'thesecon@gmail.com'
// }

// console.log(Object.values(user))

// JSON(Javascript Object Notation)

//데이터 전달을 위한 표준 포멧!
// 문자, 숫자, 불린, Null, 객체, 배열만 사용
// 문자는 큰 따옴표만 사용
// 후행 쉼표 사용 불가
// .json 확장자 사용


//JSON.stringify() - 데이터를 JSON 문자로 반환합니다.
//JSON.parse() - JSON 문자를 분석해 데이터로 변환합니다.

// console.log(JSON.stringify('Hello world!'))
// console.log(JSON.stringify(123))
// console.log(JSON.stringify(false))
// console.log(JSON.stringify(null))
// console.log(JSON.stringify({name: 'Heropy',age: 85}))
// console.log(JSON.stringify([1,2,3]))

// console.log('// ------------------------------ //')

// console.log(JSON.parse('"Hello world!"'))
// console.log(JSON.parse('123'))
// console.log(JSON.parse('false'))
// console.log(JSON.parse('null'))
// console.log(JSON.parse('{"name": "Heropy","age": 85}'))
// console.log(JSON.parse('[1,2,3]'))


//임포트 방식으로 긁어오면 json 파일을 js 데이터 형식으로 받는다!
// import abc from './test.json'

// console.log(abc)

// 모듈(Module)이란, 특정 데이터들의 집합(파일)이다.
// 모듈 가져오기(Import), 내보내기(Export)

// import { hello } from './module.js'

// console.log(hello)

//index.html 에 연결하여 사용하기 위해서는, module 타입을 지정해줘야 한다.
//앞으로 진도는 모듈화 사용하여 프로젝트 진행할거임

//import 문에 사용할 변수들은 사용해야할것만 선택해서 가져올수 있다!
// import {str as xyz, arr , hello as h} from './module.js'
// as 문으로 이름 변경 가능

// * <- 와일드카드 문자
// import *  as abc from './module.js'


// console.log(abc)

// setTimeout(async () => {
//   // import('./module.js').then(abc => {
//   //   console.log(abc)
//   // })

//   const abc = await import('./module.js')
//   console.log(abc)
// },1000)

//이런 식으로 파일마다 각자의 모듈을 가져와 사용할수 있음

// import { a } from './a.js'
// import { b } from './b.js'

// console.log(a())
// console.log(b())

//그러나 moudle.js 처럼 한번에 각 모듈들을 모아놓고 사용할수도 있다!

// import { a,b } from './utils.js'

// console.log(a())
// console.log(b())

//동기(Synchronous)와 비동기(Asynchronous)
// -동기: 순차적으로 코드실행
// -비동기: 순차적으로 코드실행 X

// console.log(1)
// setTimeout(() => { console.log(2) },1000)
// console.log(3)

// const btnEl = document.querySelector('h1')
// btnEl.addEventListener('click', () => {
//   console.log('Clicked!')
// })

// console.log('Hello World!')


// fetch('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')//요청(request)
//   .then(res => res.json())
//   .then(res => {
//     console.log(res)
//     console.log(1)
//     console.log(2)
//     console.log(3)
//   }) //응답(response)
//요청과 응답을 받는 시간은 정해져 있지 않다. 동기적 코드를 강제하면 당연히 개판날거 뻔하죠?
//그래서 비동기 라는 개념이 존재하는 거다...



//콜백(Callback) 패턴

// const a = (callback) => {
//   setTimeout(() => {
//     console.log(1)
//     callback()
//   }, 1000)
// }
// const b = (callback) => {
//   setTimeout(() => {
//     console.log(2)
//     callback()
//   }, 1000)
// }

// const c = (callback) => {
//   setTimeout(() => {
//     console.log(3)
//     callback()
//   }, 1000)
// }

// const d = () => console.log(4)


//이런 식으로 실행순서 보장을 위해서 들여쓰기 패턴이 계속되는걸 '콜백 지옥'이라 부름.
// a(() => {
//   b(() => {
//     c(() => {
//       d()
//     })
//   })
// })

// const getMovies = (movieName, callback) => {
//   fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
//     .then(res => res.json())
//     .then(res => {
//       console.log(res)
//       callback()
//     })
// }



// //요청 후 반환받아 동작하는 순서는 보장할수 없다!
// getMovies('frozen', () => {
//   console.log('겨울왕국!')
//   getMovies('avengers', () => {
//     console.log('어벤져스!')
//     getMovies('avatar', () => {
//       console.log('아바타!')
//     })
//   })
// })
//순서 보장 받을라면 콜백지옥으로 선언해야한다...

//Promise


//기존의 콜백 코드
// const a = callback => {
//   setTimeout(() => {
//     console.log(1)
//     callback()
//   },1000)
// }

// const b = () => console.log(2)

// a(() => {
//   b()
// })
//콜백 지옥 문제가 생길수 있음

//Promise를 사용해 보자!

// const a = () => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log(1)
//       resolve()
//     },1000)
//   })
  
// }

// const b = () => console.log(2)

// a().then(() => {
//   b()
// })

// const b = () => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log(2)
//       resolve()
//     },1000)
//   })
  
// }

// const c = () => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log(3)
//       resolve()
//     },1000)
//   })
  
// }

// const d = () => console.log(4)

//콜백 패턴과 다를게 없다

//메소드 체이닝 형태를 응용하여 콜백지옥 패턴을 벗어날수 있음.
//예시코드
// a().then(() => {
//    return b()
// }).then(() => {
//   return c()
// }).then(() => {
//   return d()
// })

//구조를 단순화한 성능좋은 코드
// a()
//   .then(() => b())
//   .then(() => c())
//   .then(() => {
//     d()
//   })
//인줄 알았으나...

// a()
// .then(b)
// .then(c)
// .then(d)
// .then(() => console.log('done'))

//콜백 영화예제 코드를 promise 문법으로 다시 만들어 보자

// const getMovies = movieName => {
//   return new Promise((resolve) => {
//     fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
//     .then(res => res.json())
//     .then(res => {
//       console.log(res)
//       resolve()
//     })
//   })
// }



// getMovies('frozen')
//   .then(() => {
//     console.log('겨울왕국!')
//     return getMovies('avengers')
//   })
//   .then(() => {
//     console.log('어벤져스!')
//     return getMovies('avatar')
//   })
//   .then(() => {
//     console.log('아바타!')
//   })


//Async / Await

// const a = () => {
//   return new Promise((resolve) => {
//     setTimeout(() =>{
//       console.log(1)
//       resolve()
//     }, 1000)
//   })
// }

// const b = () => console.log(2)

// // a().then(() => b())

// const wrap = async () => {
//   await a()
//   b()
// }

// wrap()

//이전 영화 코드를 async/await 구조로 변환해 보자!

// const getMovies = movieName => {
//   return new Promise(resolve => {
//     fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
//       .then(res => res.json())
//       .then(res => {
//         console.log(res)
//         resolve()
//       })
//   })
// }



// // getMovies('frozen')
// //   .then(() => {
// //     console.log('겨울왕국!')
// //     return getMovies('avengers')
// //   })
// //   .then(() => {
// //     console.log('어벤져스!')
// //     return getMovies('avatar')
// //   })
// //   .then(() => {
// //     console.log('아바타!')
// //   })

// const wrap = async () => {
//   await getMovies('frozen')
//   console.log('겨울왕국!')
//   await getMovies('avengers')
//   console.log('어벤져스!')
//   await getMovies('avatar')
//   console.log('아바타!')
// }

// wrap()

//Resolve , Reject  그리고 에러 핸들링

//예제 1

// const delayAdd = index => {
//   return new Promise((resolve, reject) =>{
//     setTimeout(() => {
//       if (index > 10){
//         reject(`${index}는 10보다 클 수 없습니다.`)
//         return
//       }
//       console.log(index)
//       resolve(index + 1)
//     }, 1000)
//   })
// }

// delayAdd(2)
//   .then(res => console.log(res))
//   .catch(err => console.error(err))
//   .finally(() => console.log('Done!'))

// const wrap = async () => {
//   try{
//     const res = await delayAdd(2)
//     console.log(res)
//   } catch(err){
//     console.error(err)
//   } finally {
//     console.log('Done!')
//   }
// }

//  wrap()

// 예제 2

// const getMovies = movieName => {
//   return new Promise((resolve, reject) => {
//     fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
//       .then(res => res.json())
//       .then(json => {
//         console.log(json)
//         if (json.Response === 'False') {
//           reject(json.Error)
//         }
//         resolve(json)
//       })
//       .catch(error => {
//         reject(error)
//       })

//   })
// }


// let loading = true

// //.then()
// getMovies('avengers')
//   .then(movies => console.log('영화 목록:', movies))
//   .catch(error => console.log('에러 발생:', error))
//   .finally(() => loading = false)

// //async/await

// const wrap = async () => {
//   try{
//     const movies = await getMovies('avengers')
//     console.log('영화 목록:', movies)
//   } catch(error) {
//     console.log('에러 발생:', error)
//   } finally {
//     loading = false
//   }
// }

// wrap()

//반복문에서 비동기 처리

// const getMovies = movieName => {
//   return new Promise(resolve => {
//     fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
//       .then(res => res.json())
//       .then(res => resolve(res))
//   })
// }


// const titles = ['frozen', 'avengers', 'avatar']

// // titles.forEach(async title => {
// //   const movies = await getMovies(title)
// //   console.log(title, movies)
// // })

// const wrap = async () =>{
//   for (const title of titles) {
//     const movies = await getMovies(title)
//     console.log(title, movies)
//   }
// }

// wrap()

//fetch(주소, 옵션)
//네트워크를 통해 리소스의 요청(Request) 및 응답(Response)을 처리할 수 있다.
//Promise 인스턴스를 반환한다.

// fetch('https://www.omdbapi.com/?apikey=7035c60c&s=avengers', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json' //json이라는 데이터의 포멧으로 통신을 할수 있다
//   },
//   body: JSON.stringify({
//     name: 'HEROPY',
//     age: 85,
//     email: 'jihoseo2006@gmail.com'
//   }) //body에 서버로 전송하고 싶은 데이터 작성, body에 명시할 데이터는 항상 문자화 시켜야함!
// })
//   .then(res =>  res.json())
//   .then(json => console.log(json))

// const wrap = async () => {
//   const res = await fetch('https://www.omdbapi.com/?apikey=7035c60c&s=avengers')
//   const json = await res.json()
//   console.log(json)
// }
// wrap()

//DOM(Document Object Model)
//DOM이란 HTML 문서를 객체로 표현한 것으로,
//JS에서 HTML을 제어할 수 있게 해준다.

// const element = document.querySelector('h1')
// console.log(element.textContent)



//DOM API

//NODE VS Element

//노드(Node): HTML 요소, 텍스트, 주석 등 모든 것을 의미
//요소(Element): HTML 요소를 의미

// const parent = document.querySelector('.parent')

// //부모 요소의 모든 자식 노드 확인!
// console.log(parent.childNodes)

// //부모 요소의 모든 자식 요소 확인!
// console.log(parent.children)

// console.dir(parent)


// class N {}
// class E extends N {}

// console.dir(E)
// console.dir(N)
// console.dir(E.__proto__) // (상속받은)상위 클래스 접속(일반 코드 작성시 사용은 권장안함)

// console.dir(Element)
// console.dir(Node)
// console.dir(Element.__proto__)


//이벤트(Events)


// .addEventListener()
// 대상에 이벤트 청취(Listen)를 등록한다.
// 대상에 저장한 이벤트가 발생했을 때 저장한 함수(Handler)가 호출된다.

// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')

// parentEl.addEventListener('click', () => {
//   console.log('Parent!')
// })

// childEl.addEventListener('click', () => {
//   console.log('Child!')
// })

// .removeEventListener() 

//대상에 등록했던 이벤트 청취(Listen)를 제거함.
// 메모리 관리를 위해 등록한 이벤트를 제거하는 과정이 필요할수 있다.

// const handler = () => {
//   console.log('Parent!')
// }

// parentEl.addEventListener('click', handler)
// childEl.addEventListener('click', () => {
//   parentEl.removeEventListener('click', handler)
// })

//이벤트 객체

//이벤트 객체는 대상에서 발생한 이벤트 정보를 담고 있다.

// const parentEl = document.querySelector('.parent')

// parentEl.addEventListener('click', event => {
//   console.log(event.target, event.currentTarget)
// })
// parentEl.addEventListener('wheel', event => {
//   console.log(event)
// })

// const inputEl = document.querySelector('input')

// inputEl.addEventListener('keydown', event => {
//   console.log(event.key)
// })

//기본 동작 방지

//마우스 휠의 스크롤 동작 방지!
// const parentEl = document.querySelector('.parent')
// parentEl.addEventListener('wheel', event => {
//   //기본 동작을 방지해서 사용하지 않겠다.
//   event.preventDefault()
//   console.log('wheel!')
// })

// // <a> 태그에서 페이지 이동 방지!
// const anchorEl = document.querySelector('a')
// anchorEl.addEventListener('click', event => {
//   event.preventDefault()
//   console.log('Click!')
// })

//이벤트 전파(버블) 정지

// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')
// const anchorEl = document.querySelector('a')

// window.addEventListener('click', event => {
//   console.log('Window!')
// }, { capture : true })
// document.body.addEventListener('click', event => {
//   console.log('Body!')
//   event.stopPropagation()//버블링 정지!
// }, { capture : true })
// parentEl.addEventListener('click', event => {
//   console.log('Parent!')
// }, { capture : true })
// childEl.addEventListener('click', event => {
//   console.log('Child!')
// })
// anchorEl.addEventListener('click', event => {
//   console.log('Anchor!')
// })

//예제 2
// const parentEl = document.querySelector('.parent')

// const handler = () => {
//   console.log('Parent!')
// }

// parentEl.addEventListener('click', handler, {
//    capture : true 
//   })
// parentEl.removeEventListener('click',handler,{
//   capture : true
// })

// 핸들러 한 번만 실행

// const parentEl = document.querySelector('.parent')

// parentEl.addEventListener('click', event => {
//   console.log('Parent!')
// },{
//   once : true
// })

// 기본 동작과 핸들러 실행 분리

// const parentEl = document.querySelector('.parent')

// parentEl.addEventListener('wheel', () => {
//   for (let i = 0; i < 10000; i += 1) {
//     console.log(i)
//   }
// }, {
//   passive: true
// })

// 이벤트 위임

// 비슷한 패턴의 여러 요소에서 이벤트를 핸들링해야 하는 경우,
// 단일 조상 요소에서 제어하는 이벤트 위임 패턴을 사용할수 있다.

// const parentEl = document.querySelector('.parent')
// const childEls = document.querySelectorAll('.child')

//모든 대상 요소에 이벤트 등록!
// childEls.forEach(el => {
//   el.addEventListener('click', event => {
//     console.log(event.target.textContent)
//   })
// })

// 조상 요소에 이벤트 위임!
// parentEl.addEventListener('click', event => {
//   const childEl = event.target.closest('.child')
//   if (childEl) {
//     console.log(childEl.textContent)
//   }
// })


// Mouse & Pointer Events

// click | 클릭했을 때
// dbclick | 더블 클릭 했을 때
// mousedown | 버튼을 누를 때
// mouseup | 버튼을 땔 때
// mouseenter | 포인터가 요소 위로 들어갈 때
// mouseleave | 마우스를 요소 밖으로 나올 때
// mousemove | 포인터가 움직일 때
// contextmenu | 우클릭했을때
// wheel | 휠 버튼이 회전할 때


// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')

//요소를 클릭했을 때 active 클래스를 추가하여 색이 바뀌도록 한다.
// childEl.addEventListener('click', () => {
//   childEl.classList.toggle('active')
// })

// //마우스를 누르고 떌때 active 가 부여되고 제거된다.
// childEl.addEventListener('mousedown', () => {
//   childEl.classList.toggle('active')
// })

// childEl.removeEventListener('mouseup', () => {
//   childEl.classList.toggle('active')
// })

// 키보드 이벤트

// keydown | 키를 누를 때
// keyup | 키를 땔 때

// const inputEl = document.querySelector('input')

// CJK 문자는  저거 하면 두번 출력된다

// inputEl.addEventListener('keydown', event => {
//   if (event.key === 'Enter') {
//     console.log(event.isComposing)
//     console.log(event.target.value)
//   }
// })

// // 그니까 CJK 문자 쓸라면 isComposing을 알잘딱으로 쓰자!
// inputEl.addEventListener('keydown', event => {
//   if (event.key === 'Enter' && !event.isComposing) {
//     console.log(event.isComposing)
//     console.log(event.target.value)
//   }
// })

// Focus & Form Events

// Focus | 요소가 포커스를 얻었을 때
// blur | 요소가 포커스를 잃었을 때
// input | 값이 입력되었을 때
// change | 상태가 번경되었을때
// submit | 제출 버튼을 선택했을 때
// reset | 리셋 버튼을 선택했을 때

const formEl = document.querySelector('form')
const inputEl = document.querySelectorAll('input')

// inputEl.forEach(el => {
//   el.addEventListener('focus', () => {
//     formEl.classList.add('active')
//   })
//   el.addEventListener('blur', () => {
//     formEl.classList.remove('active')
//   })
//   el.addEventListener('input', event => {
//     console.log(event.target.value)
//   })
// })

// formEl.addEventListener('submit', event => {
//   event.preventDefault()
//   const data = {
//     id: event.target[0].value,
//     pw: event.target[1].value
//   }
// })

formEl.addEventListener('submit', event => {
  event.preventDefault()
  const data = {
    id: event.target[0].value,
    pw: event.target[1].value
  }
  console.log('제출!', data)
})

formEl.addEventListener('reset', event => {
  console.log('리셋!')
})