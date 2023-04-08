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

const str = '1234567890123'

console.log(str.padStart(10, '0'))
console.log(str)



































