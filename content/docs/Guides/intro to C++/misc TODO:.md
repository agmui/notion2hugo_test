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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIOBVIMY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtUY%2Bs4EuqV9lmjiRWlwIo3Tt33vjuZqcCvGaIR%2FPBrAiAGLIji8nG4n5a5Tvv6i6hxbYs%2FQ60oR5hNa8UrXHrdPiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfy9mYoZwS4b5m3EhKtwD32d0OjKBGi64gN15ChQp03ixslav%2F8OCNNkhKWM5qRnh9onagEE%2BluNogJJputS7MuiXzIuEpbWvn8YrNgcU5JXS%2Flo3vkIGg9Zmh3qtClZ7nkZxbz%2FjkGIV2L0Y%2FNYD2dqtCel%2BdrQvPynmL9vJ5NDdg2VyAOtjf5jQLUjJpPqsUyxoZvPegN%2FcI1hUiHRK5Z5f3bWkpLBCX86NrkpXhpYtciNtKKWiZK76yh22kVYnhRNLN%2FAjGZExkbw78%2Ful69T0QVlFQ5dzlU8oSFyQRJpMV0dkCVwXyvmMHwsga3JhqQXZkm3zRNDC1VyD%2BkQfAIaomwVZ4tSqxjpPMUDqH4QbPEDlKKvRd6HyCwbr2cbEP1%2BN765Y9F%2Bb60ND3nOMDQhYXo37piZYR64paVZ%2FmNRGJ0NBAz8vQ2QTzTXsJawcSSqxS4Z9QA7HoleqxYXSVjFlS7l89jyMVkS3SDYvb0oKIypQ7EUuUWmxOZa9wGe7%2FgJjM6njonQI0w6mnHVe9aeFU1I%2BO5K5ARckE6BLzWJpGtjDy9cHqi%2BWNmXc6sZx%2FEnacvpYrJ6s%2F%2FKF68R%2FwXn4GqQYHsn5c91yC%2FuSRwI%2Bjz5bSE1I3U0ITaJ6E9DBBdxmdA9JNJ46bw8w3Ki0vQY6pgHwdMI%2Ft5ShPRxkX8D6Z%2F5dLFjqMUWReN9WVECwES6onZAVg3lHxy65a4mK2JGRFjWEyCnhIhq5mjHA1R5%2BjfZg8vvTwl1V2cX0aPyRerzxeoxey9%2BNg4Og1BxnDSjzhExr9IlJUCV8IB%2FZM7uDZDHuTkvj%2BxP%2FZcw2bb49GTzLbOTByxCP0eudN4GgUz8OeBcfhlEL7iDnqn7Otio%2BLDXJq6C3BRYJ&X-Amz-Signature=b93ea353cb3934b7c53e96cde415129a51e6e9c8f26433bb6ea5e319039fa678&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIOBVIMY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtUY%2Bs4EuqV9lmjiRWlwIo3Tt33vjuZqcCvGaIR%2FPBrAiAGLIji8nG4n5a5Tvv6i6hxbYs%2FQ60oR5hNa8UrXHrdPiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfy9mYoZwS4b5m3EhKtwD32d0OjKBGi64gN15ChQp03ixslav%2F8OCNNkhKWM5qRnh9onagEE%2BluNogJJputS7MuiXzIuEpbWvn8YrNgcU5JXS%2Flo3vkIGg9Zmh3qtClZ7nkZxbz%2FjkGIV2L0Y%2FNYD2dqtCel%2BdrQvPynmL9vJ5NDdg2VyAOtjf5jQLUjJpPqsUyxoZvPegN%2FcI1hUiHRK5Z5f3bWkpLBCX86NrkpXhpYtciNtKKWiZK76yh22kVYnhRNLN%2FAjGZExkbw78%2Ful69T0QVlFQ5dzlU8oSFyQRJpMV0dkCVwXyvmMHwsga3JhqQXZkm3zRNDC1VyD%2BkQfAIaomwVZ4tSqxjpPMUDqH4QbPEDlKKvRd6HyCwbr2cbEP1%2BN765Y9F%2Bb60ND3nOMDQhYXo37piZYR64paVZ%2FmNRGJ0NBAz8vQ2QTzTXsJawcSSqxS4Z9QA7HoleqxYXSVjFlS7l89jyMVkS3SDYvb0oKIypQ7EUuUWmxOZa9wGe7%2FgJjM6njonQI0w6mnHVe9aeFU1I%2BO5K5ARckE6BLzWJpGtjDy9cHqi%2BWNmXc6sZx%2FEnacvpYrJ6s%2F%2FKF68R%2FwXn4GqQYHsn5c91yC%2FuSRwI%2Bjz5bSE1I3U0ITaJ6E9DBBdxmdA9JNJ46bw8w3Ki0vQY6pgHwdMI%2Ft5ShPRxkX8D6Z%2F5dLFjqMUWReN9WVECwES6onZAVg3lHxy65a4mK2JGRFjWEyCnhIhq5mjHA1R5%2BjfZg8vvTwl1V2cX0aPyRerzxeoxey9%2BNg4Og1BxnDSjzhExr9IlJUCV8IB%2FZM7uDZDHuTkvj%2BxP%2FZcw2bb49GTzLbOTByxCP0eudN4GgUz8OeBcfhlEL7iDnqn7Otio%2BLDXJq6C3BRYJ&X-Amz-Signature=c5a496e972309dbcb2af6c727ba33a7620cdbafdf05514a21c341613c1d54c3d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
