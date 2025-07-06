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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AJTA2OV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQChNTgwVSYAw8rGBnwbGyS3POedfLyJVZEXSvD49SZavQIhANirIBXKSJywAmPD533Z9t4lnrs8tAuyTGWgz4%2Bdt42BKv8DCFcQABoMNjM3NDIzMTgzODA1Igzm0RQ71Pmuu2g4J4Mq3AOR1HXWsY5DvT%2BdkR7dctyIqEm6hNiZfii6RN5P9mOGMMPQbyUWMRZ1BLA9f51xbG3DBhQPF9x4bWAATTv54S6hQIdeqf6%2BESiESqBp5P3QcvjXt9Hc4tYd%2Bn1AMYMHYIPeMwMEpKDHp85Frqc0%2BOyQCCaoZWPtciUa6zf8n4p8rC6m1DPXWtUEj%2FLY6PQL0wC7CzFboN%2BtTWN0%2BM9Ks3sZ%2By9pM4qIC5qfLQeuNmzm2YE2%2BeZ%2BXAYwcHya0UYE2uTLcf%2BNmGMVTw8uOcbV%2BDI7SGZi4EWqNmtNTtbJSad0ESrStN3exhFJ8aHgqVjPpnQWWxEmAKEZUt7jAiekNMjorqq%2B869hgJU3qDdi12GoeXm3qj5O0a9pyWQ2s7PI%2B%2FcvCqPyC656Xk4hWDYCxrbL9UQkJ3rZZwLHX8LsT6BjXSf%2Bq1zGbssjNyultVOHTigY5vXHwxVZc3WHZGxDwzEwYbxRjZl36hwPsQx56%2BRBugkMBqpLXajP0BYL07VsLjN92Hk%2F8q%2BqDIQH%2BbYiLH3zvYkcv0WjGFX4bsHFt2vSagUSJpBF3p2UarOzE54%2FO91zRTT0dCtblsFNmQCZeHmoXFFT0TKacpMspjPwNOBqwunt3tdAVeRrdL26CTDWpKjDBjqkAQks2gHXl4jqkEFiul9XxSw8XXb0rzBkaxYr9rCvKBAD18teQIF%2FcGHsBky9fVxKXVWjHTPMLFyytEJ40iZVkDdSgxBz0HdmGk%2FPHp4gEyKGSjjwIiaRDAXxtkAvJP0gh%2FFFMm4VUvKQqN4keIX48glbu8q9SyS%2FzKxY5dFwqYBA8Ni5iXn0EP%2B7iYpnBrt40xTb0Gq%2FfOQ78MfCcB4Lt%2FtZuEGe&X-Amz-Signature=8e6561f92faf32adf17bfcec376bc571eb2e79ce78dd70d9890b3fd4cd750303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AJTA2OV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQChNTgwVSYAw8rGBnwbGyS3POedfLyJVZEXSvD49SZavQIhANirIBXKSJywAmPD533Z9t4lnrs8tAuyTGWgz4%2Bdt42BKv8DCFcQABoMNjM3NDIzMTgzODA1Igzm0RQ71Pmuu2g4J4Mq3AOR1HXWsY5DvT%2BdkR7dctyIqEm6hNiZfii6RN5P9mOGMMPQbyUWMRZ1BLA9f51xbG3DBhQPF9x4bWAATTv54S6hQIdeqf6%2BESiESqBp5P3QcvjXt9Hc4tYd%2Bn1AMYMHYIPeMwMEpKDHp85Frqc0%2BOyQCCaoZWPtciUa6zf8n4p8rC6m1DPXWtUEj%2FLY6PQL0wC7CzFboN%2BtTWN0%2BM9Ks3sZ%2By9pM4qIC5qfLQeuNmzm2YE2%2BeZ%2BXAYwcHya0UYE2uTLcf%2BNmGMVTw8uOcbV%2BDI7SGZi4EWqNmtNTtbJSad0ESrStN3exhFJ8aHgqVjPpnQWWxEmAKEZUt7jAiekNMjorqq%2B869hgJU3qDdi12GoeXm3qj5O0a9pyWQ2s7PI%2B%2FcvCqPyC656Xk4hWDYCxrbL9UQkJ3rZZwLHX8LsT6BjXSf%2Bq1zGbssjNyultVOHTigY5vXHwxVZc3WHZGxDwzEwYbxRjZl36hwPsQx56%2BRBugkMBqpLXajP0BYL07VsLjN92Hk%2F8q%2BqDIQH%2BbYiLH3zvYkcv0WjGFX4bsHFt2vSagUSJpBF3p2UarOzE54%2FO91zRTT0dCtblsFNmQCZeHmoXFFT0TKacpMspjPwNOBqwunt3tdAVeRrdL26CTDWpKjDBjqkAQks2gHXl4jqkEFiul9XxSw8XXb0rzBkaxYr9rCvKBAD18teQIF%2FcGHsBky9fVxKXVWjHTPMLFyytEJ40iZVkDdSgxBz0HdmGk%2FPHp4gEyKGSjjwIiaRDAXxtkAvJP0gh%2FFFMm4VUvKQqN4keIX48glbu8q9SyS%2FzKxY5dFwqYBA8Ni5iXn0EP%2B7iYpnBrt40xTb0Gq%2FfOQ78MfCcB4Lt%2FtZuEGe&X-Amz-Signature=860d73273d94facb866bf935b289ec1a4fa1eb9ca62ea168ddd41fdc628f4e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
