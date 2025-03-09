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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEIG23HP%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIG7okwbVoSO6ZiRdiQIKlDrAGzhzhOzhjRfCwgiS5%2F3VAiAbJXjLZiXI1qT8jxxDaHEY5GmCzN8Y5XSUVAnI6EFjIyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM%2Fn%2BjywlCbjclpPBmKtwDUvBifKIXDl7fUmLMDKtQ2S%2BFh%2FeLI8MtZd5yeGfMCkZ9EocdcyLU9VmHfJD0f%2BYbRrTfa02QNwcpgbwYwfScm66IC8713X2HKXLb5QFATyRBUfiuHyAVBiPNNEbeQqN3DIxdXCpHAds2lSL2wuR7UqlGQg%2BFwTHVeLnv9FXVqblymzbKDEqxAfPa5v%2FpbeMu9Q1N7kA4%2BXbM5krkEvK14MwQROazMQjWEITM%2FWzr9vTk1RywB9QZmQh39s7U9LSgxEKFZKpFs5bjFjLeVYvEE8lgX3mjC%2B6tTDoI08psi193jL%2BPGgcICrcKqPQg%2FyQiP35yZivBHXeXY9wOPd0DG7F6E%2BbLJ%2FkqZRix6MRcqBRj1zNQV95jM17fdWuFQooJi81P12ReZgvfz0QsUPhJEnpc%2F5PRu1d7L1IhwpRqEBgy4rXXWQFL%2FaK8sFMEGLDagVMR0966EZtbBEyiyxsm2lq3wYdSqL1dLxNxC8IbERpn%2BAIjaYTUT%2FZ6vpRFaI7xrL2%2Bi%2FUXbsRaNcLi5QZYb2UbNFnaKcckJug7cMln%2BJbY2JZXsFdVWEVxIFPsGgvAJbKR78PQbDegwZjmfTDHA%2FRAeY4UjxwNSuPuhndY%2B1Y2mBXM%2B2Lvu8N9Hkkw%2B4q0vgY6pgHI7UG2rpK0HJElxrkzi1icJNUpx0H83WRKeRfuY4i8eKwJYDjpSIYApjfHmERCDOk3x1nDHPfCvCf3fXwNowYX3ql7ymSUpO325C%2BlNMfHwpvDbamL3Xn%2B5VzVbQHb8qVuj9vE6ICofTYX55gGvGiDBgWl18gPzlJ7sJinWnCpRQYu7yoZAW4JYug%2FGJhLI98fNthDvVj4J37Ck7mW2681fsus36QN&X-Amz-Signature=100fe710ff74a41be55b577bb71d9c7e93f7ed9b1e2de6b74dd351bbc161e926&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEIG23HP%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIG7okwbVoSO6ZiRdiQIKlDrAGzhzhOzhjRfCwgiS5%2F3VAiAbJXjLZiXI1qT8jxxDaHEY5GmCzN8Y5XSUVAnI6EFjIyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM%2Fn%2BjywlCbjclpPBmKtwDUvBifKIXDl7fUmLMDKtQ2S%2BFh%2FeLI8MtZd5yeGfMCkZ9EocdcyLU9VmHfJD0f%2BYbRrTfa02QNwcpgbwYwfScm66IC8713X2HKXLb5QFATyRBUfiuHyAVBiPNNEbeQqN3DIxdXCpHAds2lSL2wuR7UqlGQg%2BFwTHVeLnv9FXVqblymzbKDEqxAfPa5v%2FpbeMu9Q1N7kA4%2BXbM5krkEvK14MwQROazMQjWEITM%2FWzr9vTk1RywB9QZmQh39s7U9LSgxEKFZKpFs5bjFjLeVYvEE8lgX3mjC%2B6tTDoI08psi193jL%2BPGgcICrcKqPQg%2FyQiP35yZivBHXeXY9wOPd0DG7F6E%2BbLJ%2FkqZRix6MRcqBRj1zNQV95jM17fdWuFQooJi81P12ReZgvfz0QsUPhJEnpc%2F5PRu1d7L1IhwpRqEBgy4rXXWQFL%2FaK8sFMEGLDagVMR0966EZtbBEyiyxsm2lq3wYdSqL1dLxNxC8IbERpn%2BAIjaYTUT%2FZ6vpRFaI7xrL2%2Bi%2FUXbsRaNcLi5QZYb2UbNFnaKcckJug7cMln%2BJbY2JZXsFdVWEVxIFPsGgvAJbKR78PQbDegwZjmfTDHA%2FRAeY4UjxwNSuPuhndY%2B1Y2mBXM%2B2Lvu8N9Hkkw%2B4q0vgY6pgHI7UG2rpK0HJElxrkzi1icJNUpx0H83WRKeRfuY4i8eKwJYDjpSIYApjfHmERCDOk3x1nDHPfCvCf3fXwNowYX3ql7ymSUpO325C%2BlNMfHwpvDbamL3Xn%2B5VzVbQHb8qVuj9vE6ICofTYX55gGvGiDBgWl18gPzlJ7sJinWnCpRQYu7yoZAW4JYug%2FGJhLI98fNthDvVj4J37Ck7mW2681fsus36QN&X-Amz-Signature=d5ec9e9156aaa01ded18d5a3e61b7d9184db47a5bfb464f9b04f1afb7add40dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
