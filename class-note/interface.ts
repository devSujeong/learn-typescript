interface StringRegexDictionary {
	[key: string]: RegExp
}

var obj: StringRegexDictionary = {
  // sth: /abc/
  cssFile: /css/,
}

interface Person {
	name: string;
	age: number;
}

interface Developer extends Person {
	language: string;
}

function logText(text: string | number) {
  text.toString();
}

console.log(logText(10));