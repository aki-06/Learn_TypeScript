import React from "react";
import logo from "./logo.svg";
import "./App.css";

// 書き換え不可
const name = "hello";

// 書き換え可
let nameChange = "hello";
nameChange = "hello2";

// アノテーション(型推論してくれるため基本的には不要)
let userName: string = "hello";
let num: Number = 2;
let bool: Boolean = true;

// 配列
let array1 = [true, false, true];
let array2 = [0, 1, "heelo"];

// オブジェクト
interface NAME {
  first: string;
  last: string;
}

// |をつけると指定したどちらかの型を許容する
// ?をつけるとlastの値がある場合のみ代入される
interface NAME2 {
  first: string | null;
  last?: string;
}

let nameObj: NAME = { first: "Yamada", last: "Taro" };

// lastの型が違うためエラー
// let nameObj: NAME = { first: "Yamada", last: 1 };

// interfaceの定義と異なるためエラー
// let nameObj: NAME = { first: "Yamada" };

let nameObj2: NAME2 = { first: null };

// 関数
// 戻り値の型はしていなくても良い
const func1 = (x: number, y: number): number => {
  return x + y;
};

// Intersection Types(複数の型の定義を結合)
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
};

// Union Types(受け取れる型を制限する)
let value: boolean | number;
value = true;
value = 10;
// エラーになる
// value = "string";

let arrayUni: (number | string)[];
arrayUni = [0, 1, "hello"];
// エラーになる
// arrayUni = [true, false]

// Literal Types
let company: "Facebook" | "Google" | "Amazon";
company = "Amazon";
// エラーになる
// company = "Apple";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
