"use strict";

/* ============================================================
 *
 *  ES6 (2015)
 *
 *  1. Shorthand property names
 *  2. Destructuring assignment
 *  3. Spread syntax
 *  4. Default parameters
 *  5. Ternary Operator
 *  6. Template Literals
 *
 * ============================================================
 *
 *  ES11 (2020)
 *
 *  1. Optional chaining
 *  2. Nullish coalescing operator
 *
 * ============================================================ */

/**
 * Shorthand property names
 *
 * object의 key와 value의 네이밍이 같을 경우 key와 value를 하나로 축약하여 사용할 수 있다.
 */
{
  const name = "taylor";
  const age = 35;

  const user = { name, age };

  console.log(user, "유저");
}

/**
 * Destructuring assignment
 *
 * object나 array에 접근하기 위해 분해할당
 */
{
  const korea = {
    capital: "seoul",
    language: "hunminjeongeum",
  };
  const { capital } = korea; // seoul

  const fruits = ["apple", "banana", "mango", "grape"];

  const [first, second] = fruits; // apple, banana
}

/**
 * Spread Syntax
 *
 * object나 array를 복사하거나 concat 할 수 있다.
 */
{
  const apple = { color: "red" };
  const mango = { color: "yellow" };
  const fruits = [apple, mango];

  // copy
  const appleCopy = { ...apple };
  const mangoCopy = { ...mango };
  const fruitsCopy = [...fruits];

  // transform
  const newFruitsCopy = [{ color: "blue" }, ...fruits, { color: "green" }];

  // array concatenation
  const strings1 = ["a", "b", "c"];
  const strings2 = ["d", "e", "f"];
  const all = [...strings1, ...strings2];

  // object merge, object의 경우 만약 key네이밍이 같다면 마지막 값이 출력된다
  const obj1 = { name: "obj1" };
  const obj2 = { name: "obj2" };
  const obj3 = { ...obj1, ...obj2 }; // name: obj2
}

/**
 * Default parameters
 *
 * 함수의 인자의 기본 값을 설정 할 수 있다.
 */

{
  const printMessageOnConsole = (message = "default message") => {
    console.log(message);
  };
  printMessageOnConsole();
}

/**
 * Ternary operator
 *
 * 3항 연산자, (조건 ? 조건이 참일 경우 실행 : 조건이 거짓일 경우 실행)
 */
{
  const isCat = true;
  let animal = isCat ? "cat" : "dog";
  // animal = "cat"
}

/**
 * Template Literals
 *
 * 문자열을 조합할 때 백틱을 이용하여 + 연산자 없이 가독성을 올릴 수 있다.
 */
{
  const weather = "rain";
  const temparature = "16";
  let weatherMessage = `Today weather is ${weather} and temparature is ${temparature}`;
}

/**
 * Optional chaining
 *
 * runtime error를 방지 하기 위해 값이 있을 경우에만 실행되도록 로직을 구현할 수 있다.
 */
{
  const jakson = {
    name: "jakson",
    job: {
      title: "S/W Engineer",
      manager: {
        name: "bob",
      },
    },
  };

  const taylor = {
    name: "taylor",
  };

  const printManagerOnConsole = (person) => {
    console.log(person.job?.manager.name);
  };

  printManagerOnConsole(jakson);
  printManagerOnConsole(taylor);
}

/**
 * Nullish coalescing operator
 *
 * 값이 null이나 undefined라면 실행하라.
 *
 * Or operator과 다른점
 * false, "", 0, null, undefined를 모두 false값으로 본다
 * 반면 nullish coalescing operator는 null과 undefined만 false로 본다
 */

{
  let apple = "";
  console.log(apple ?? "apple"); // 빈스트링
}

{
  let apple = "";
  console.log(apple || "apple"); // apple
}
