

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>B:ReferenceError: greetign is not defined</b></summary>
<p>

#### Answer: ?

<i>In the code, there's a typo where greetign is used instead of greeting.
JavaScript will throw a ReferenceError because greetign is not defined.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>C:12</b></summary>
<p>

#### Answer: ?

<i>JavaScript is dynamically typed, and it will perform type coercion when trying to add a number and a string.
In this case, the number 1 will be implicitly converted to a string, and then the two strings will be concatenated, resulting in "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b> A: `['🍕', '🍫', '🥑', '🍔']`</b></summary>
<p>

#### Answer: ?

<i>The info.favoriteFood property is initially set to the first element of the food array, which is "🍕".
Later, it is reassigned to "🍝", but this change doesn't affect the food array, so it remains ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>B: Hi there, undefined</b></summary>
<p>

#### Answer: ?

<i>The sayHi function expects a name parameter, but when it is called with no arguments (sayHi()), name is undefined.
The function still executes, but name is undefined, so the result is "Hi there, undefined".</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>A: 1</b></summary>
<p>

#### Answer: ?

<i>The forEach method iterates through the nums array and counts the number of truthy values.
In JavaScript, 0 is considered falsy, and all other numbers are truthy.
So, there is only one truthy value (1) in the array, resulting in a count of 1.</i>

</p>
</details>
**Five features**
1/Unique Design: The website boasts a one-of-a-kind design and concept, setting it apart from conventional wedding management platforms.

2/Diverse Service Offerings: Users can choose from a wide array of event services, each accompanied by detailed descriptions and pricing information.

3/Secure User Authentication: The website implements robust email and password-based authentication, ensuring user data remains protected.

4/Convenient Login Options: In addition to traditional login methods, users can access the platform with their preferred social media or third-party accounts.

5/Personalized User Experience: Once logged in, users enjoy a personalized experience with their name, profile picture, and easy access to log out or explore private routes.


Website name : DreamDayPlanners\
livelink :
