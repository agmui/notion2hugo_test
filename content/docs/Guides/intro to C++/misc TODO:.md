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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RW3UZ2P%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIEPJrkqr0FFVtiyjaEjUa5eRUC2EttTbKIAHfoKxXAt%2FAiEA6eUUSI5jbxAPVmZiRnS%2B7j0f%2B048YNQvK5i6zuUosLcqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsw0iKX4%2FewF6I6sSrcA%2BneRQH4BKwX64DawTm12twW%2BbJfe2nfzMccqytOwcCfJ7R8ypb9z%2FGe7nOTd3X6EiKqVlAoTQAFhiUfNOnNZZgypjz9BXeGkeHCVmCCvwJUHaONg858FwiVxk1NGYeYQYVuZiTPwxxYf8RgHB0PUJ2BXXT44KnGGuu%2BkEZ3SVTQ2WHqQmzO8Ayo4kXv7FKOn4k2rTsZ2uZ9jvlGY3Y5Yx0W8sEXoosVJZCx%2F8HetzBiGG08S4nwJRUY70x9m9Kf5ZMofgeq%2FYgy%2F5zqM0N6TdPER4qnHxMOEIc3C4MHDSWp0sMmYxkyrvKQXBg8znumDdSV5VTphRTSZKkFLRTrGu3%2BlqMyD6qp1Cu%2FXnC8chIS1zyQKdkkjwRUWdfvZ0AVCKQ1ftgx8dFuQ2NMOkj94I5CuLb2x%2FtB49T0A0QnrHI1OKUZyVRziqDfTTpZs1FWXhkBbDr8VNw24%2BtCysdBg8srDFXw%2FtdrBxooHNIdM3IMwghFpWYvA0omeGC2jNYQmWtZpzO7zdP5v8XJsw%2Fmw8vZiF4KIJqx%2FRjxr4sUDM14hUkcBrZUZ88mjSzAv%2F7O6iUlaHq1frNOH8bk%2Fbmncupzkormr9lqhSKJbMlC8LZVkpwIEvtU1K922ylHMJSR4b8GOqUBiF0u35duzm4c9%2BAksqfKyTBX5YC%2FS6DitC8o5vC5%2Bo%2BfsBXP9mp9NbAtUY9ORduXaJaUeYQvjE45rgfeE%2FQnWCm8g0ge5mDKIOpK6HbOP2%2F1Msghn8a%2FT9FL6ncxl9unkHog8TvmiAICJP%2BjVkPoRXTZK%2FpuD9laj5FXuP6GBFaDapHJQBPSxOMwfZcthRTWKsgggx0ppIlNJv3pZSPFalRc2uwS&X-Amz-Signature=7ac609b89b791be1dd0c0939868491edb26f7d08a687d033ea02620ecc9d8f05&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RW3UZ2P%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIEPJrkqr0FFVtiyjaEjUa5eRUC2EttTbKIAHfoKxXAt%2FAiEA6eUUSI5jbxAPVmZiRnS%2B7j0f%2B048YNQvK5i6zuUosLcqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsw0iKX4%2FewF6I6sSrcA%2BneRQH4BKwX64DawTm12twW%2BbJfe2nfzMccqytOwcCfJ7R8ypb9z%2FGe7nOTd3X6EiKqVlAoTQAFhiUfNOnNZZgypjz9BXeGkeHCVmCCvwJUHaONg858FwiVxk1NGYeYQYVuZiTPwxxYf8RgHB0PUJ2BXXT44KnGGuu%2BkEZ3SVTQ2WHqQmzO8Ayo4kXv7FKOn4k2rTsZ2uZ9jvlGY3Y5Yx0W8sEXoosVJZCx%2F8HetzBiGG08S4nwJRUY70x9m9Kf5ZMofgeq%2FYgy%2F5zqM0N6TdPER4qnHxMOEIc3C4MHDSWp0sMmYxkyrvKQXBg8znumDdSV5VTphRTSZKkFLRTrGu3%2BlqMyD6qp1Cu%2FXnC8chIS1zyQKdkkjwRUWdfvZ0AVCKQ1ftgx8dFuQ2NMOkj94I5CuLb2x%2FtB49T0A0QnrHI1OKUZyVRziqDfTTpZs1FWXhkBbDr8VNw24%2BtCysdBg8srDFXw%2FtdrBxooHNIdM3IMwghFpWYvA0omeGC2jNYQmWtZpzO7zdP5v8XJsw%2Fmw8vZiF4KIJqx%2FRjxr4sUDM14hUkcBrZUZ88mjSzAv%2F7O6iUlaHq1frNOH8bk%2Fbmncupzkormr9lqhSKJbMlC8LZVkpwIEvtU1K922ylHMJSR4b8GOqUBiF0u35duzm4c9%2BAksqfKyTBX5YC%2FS6DitC8o5vC5%2Bo%2BfsBXP9mp9NbAtUY9ORduXaJaUeYQvjE45rgfeE%2FQnWCm8g0ge5mDKIOpK6HbOP2%2F1Msghn8a%2FT9FL6ncxl9unkHog8TvmiAICJP%2BjVkPoRXTZK%2FpuD9laj5FXuP6GBFaDapHJQBPSxOMwfZcthRTWKsgggx0ppIlNJv3pZSPFalRc2uwS&X-Amz-Signature=59c0980694b1f225f0e4dcfcd152cee083eb15eec6428dad27fa997b42374179&X-Amz-SignedHeaders=host&x-id=GetObject)

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
