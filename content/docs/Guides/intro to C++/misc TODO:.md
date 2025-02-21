---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCRZMUOC%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1YE9IIgkk8XA2BC4PrGH7wJBxCQW7qNTVtiDm4yqusAIhAO1i5h2ce9%2FpsAn7OZK%2B5z7BdmUTsxFkeUs79NtcrzP5KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDLS7%2FXXG9XKrJbD4q3AM0kyblMB1%2FRWR1PhvG6eQ7dnlyPtjf%2FRox181KxO0tY3vcMU92kTgLuEAWEBtc54ntP1Vk8teQx07HRNKW04eiGd%2BI2lept%2FA%2BoCahmhlcWqphyVfg6xbVajN2AHry9QC%2BQvfiHNUbJltx8tm%2FmhcfXGI0TrPbVeShaWGg5YT3UWdCKCnUXzo7ZC2wda1aNAQN%2Fuk%2FBGuzCAtyL%2Fsqnqv5dBTkeSQwF%2FMFknH9aIdsWMmfUTAbSG%2Bxa1mQ3YsO2SUaSyi3dA3UfHPwnh0erYsDX2m4p%2BqW1vnyJIoLeErIb4lqtYlMxFvHRMdBQBBUQ%2BlIr5aYDKUPPTfct4sWa6Nq4e07bBArcPPPG7ThTssj1HW%2BbigjqCAhs7Aq90Z21YDG0ZfdaOR4sh%2F%2B7k9X%2B0zop6SmnvTVqDClhv0PFJy7KgpW8RuUznIUymSLba0SAzUhgjQpCBv4XaO86flzg%2BFNi7cSuhO%2BMxBsdFz5cSbBRHOO8zFkDxJZrcSZrXJ1y0Q5o%2FZYZ3uveGXEJftMvJt2ZFFXpLqSwGyXkvMsgEE4H%2BCqmVY4Km35CbEIVNuhbiWW8n%2FeJkR6ptzGBUww4i4KGhyyNWoXye%2Bkt0FX%2BCHbYjfXEyjWFTZ6%2FixBIjCa%2B%2BC9BjqkAQSafSuMPoZ3f%2BCJIHR%2BmlJ%2BNx6xQ6qfEbZUF8t%2FuK3bxHfJO24iPRgBlumdYd%2FfI5yIf%2Fz4bo4E7qqkqj5IYdZC7fYRvwv4YulibP5lb79BbgYzZoX7VONZDqYApKO0m0mXX5IvpSOAfqj%2FYQRJre9MBJt4eKQj2DDxqZigYOaakOAoUrgURYd59mj1%2FIZ%2BRIsByONe9xyrTZ0Y5mQ6hwTV31QX&X-Amz-Signature=ee4902496446abe594d56a4b27a42e1caf68f69abf0b22fdf863f0c8a664f01c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCRZMUOC%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1YE9IIgkk8XA2BC4PrGH7wJBxCQW7qNTVtiDm4yqusAIhAO1i5h2ce9%2FpsAn7OZK%2B5z7BdmUTsxFkeUs79NtcrzP5KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDLS7%2FXXG9XKrJbD4q3AM0kyblMB1%2FRWR1PhvG6eQ7dnlyPtjf%2FRox181KxO0tY3vcMU92kTgLuEAWEBtc54ntP1Vk8teQx07HRNKW04eiGd%2BI2lept%2FA%2BoCahmhlcWqphyVfg6xbVajN2AHry9QC%2BQvfiHNUbJltx8tm%2FmhcfXGI0TrPbVeShaWGg5YT3UWdCKCnUXzo7ZC2wda1aNAQN%2Fuk%2FBGuzCAtyL%2Fsqnqv5dBTkeSQwF%2FMFknH9aIdsWMmfUTAbSG%2Bxa1mQ3YsO2SUaSyi3dA3UfHPwnh0erYsDX2m4p%2BqW1vnyJIoLeErIb4lqtYlMxFvHRMdBQBBUQ%2BlIr5aYDKUPPTfct4sWa6Nq4e07bBArcPPPG7ThTssj1HW%2BbigjqCAhs7Aq90Z21YDG0ZfdaOR4sh%2F%2B7k9X%2B0zop6SmnvTVqDClhv0PFJy7KgpW8RuUznIUymSLba0SAzUhgjQpCBv4XaO86flzg%2BFNi7cSuhO%2BMxBsdFz5cSbBRHOO8zFkDxJZrcSZrXJ1y0Q5o%2FZYZ3uveGXEJftMvJt2ZFFXpLqSwGyXkvMsgEE4H%2BCqmVY4Km35CbEIVNuhbiWW8n%2FeJkR6ptzGBUww4i4KGhyyNWoXye%2Bkt0FX%2BCHbYjfXEyjWFTZ6%2FixBIjCa%2B%2BC9BjqkAQSafSuMPoZ3f%2BCJIHR%2BmlJ%2BNx6xQ6qfEbZUF8t%2FuK3bxHfJO24iPRgBlumdYd%2FfI5yIf%2Fz4bo4E7qqkqj5IYdZC7fYRvwv4YulibP5lb79BbgYzZoX7VONZDqYApKO0m0mXX5IvpSOAfqj%2FYQRJre9MBJt4eKQj2DDxqZigYOaakOAoUrgURYd59mj1%2FIZ%2BRIsByONe9xyrTZ0Y5mQ6hwTV31QX&X-Amz-Signature=e99957db926edd32c2e926733fa91012918107e4601026b3f13a3509c7223af7&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
