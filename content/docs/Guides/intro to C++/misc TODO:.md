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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XCYXUVS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDQ22bYGgWObG2P8Y%2BIl9xtQrl2aFKZLLbz%2BnTCy2kPeAiEA1KENSyjz7oPbMAfVYdjQed9eDq75DjtFEzqF9ohfUCIq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCVSnNPvpBS1JjuQFyrcA%2BDXNvfUrSQiHh6cXFB8%2B4Qk9j9Kaw7ihNybO6NVrgYR5RcjSioBLxKpBeehtDwxw0wp2rUYDD1zSyXgYztUbOTI6o1WzaCSKSyX%2FgUvfC%2BmNDi%2BvUYSyiGRtDbFqy4gS5Y7twnp0P94Z8wFBva9r%2FOL9aoPlOvtk%2BubSnoj%2B87Q9MDzY2bKKNeJerYxrNf61qPyHXunzO2qzrGyHXWh%2BM2Qa8nZVjCgqedAAL8nfq%2BFmj0ELPXer8gavnlw7T%2FQ1rG0oIR6jHeVHdzMWSXNVTIjnHA0EaLQz5AGhVRXWXSPBTyYuNt03ycKOOGLvrjfTZTPsZjg76wXl%2FeOKujy0t3TUKi5jq851572qwY8tAPY%2FhzddQGf01cnL3GHR78c5PboN98zbKHgl3fLWKZNnebzJN0gnc2m60PrTsa5YcesO7bNq5upLsOGHKwvbOx8aT9wuX0vWZM2%2F4qNE67qclRmbMpvY9iqhfQWmjypB9%2BXFxIY9AQlsTz3wLU5ktxRzD8bkTSLtAmLi6ytV7cDDRc3ISrw6vc9H%2FD%2FYZ2c97j%2Bs4%2F0A7FoACKbiJZ3Xr4uxGvKesxdFHPYu9BggKuXNqWJRkOgjr37r3VBSlM4B%2Fjdy8Dpxx%2F1LKJOddMlMJf9k70GOqUBdNNqLEV9oHPaDBG6WWC04UT8qjeD04x41lp4mo4zZpEmxRbEu1oRwAzSYUKGbhcqFn0wKu1d4YpiTWlkd495y13k6LA6CRySpLUOqPB9kGU3JIwz99DnMcSIGGDE7FPetXXielvdibbIQ%2BsRbBL97RqW27vhcZI3QGpnwlutb%2FtQnBurU0sjWlwtSraS4uKpMzo0SXA31cHcbQu2PeSSAW%2FBM%2FqH&X-Amz-Signature=d45d82831c2eefffeb0ceb036b6e73ea886de03a8cb2bf584fe8e21fa4e11081&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XCYXUVS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDQ22bYGgWObG2P8Y%2BIl9xtQrl2aFKZLLbz%2BnTCy2kPeAiEA1KENSyjz7oPbMAfVYdjQed9eDq75DjtFEzqF9ohfUCIq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCVSnNPvpBS1JjuQFyrcA%2BDXNvfUrSQiHh6cXFB8%2B4Qk9j9Kaw7ihNybO6NVrgYR5RcjSioBLxKpBeehtDwxw0wp2rUYDD1zSyXgYztUbOTI6o1WzaCSKSyX%2FgUvfC%2BmNDi%2BvUYSyiGRtDbFqy4gS5Y7twnp0P94Z8wFBva9r%2FOL9aoPlOvtk%2BubSnoj%2B87Q9MDzY2bKKNeJerYxrNf61qPyHXunzO2qzrGyHXWh%2BM2Qa8nZVjCgqedAAL8nfq%2BFmj0ELPXer8gavnlw7T%2FQ1rG0oIR6jHeVHdzMWSXNVTIjnHA0EaLQz5AGhVRXWXSPBTyYuNt03ycKOOGLvrjfTZTPsZjg76wXl%2FeOKujy0t3TUKi5jq851572qwY8tAPY%2FhzddQGf01cnL3GHR78c5PboN98zbKHgl3fLWKZNnebzJN0gnc2m60PrTsa5YcesO7bNq5upLsOGHKwvbOx8aT9wuX0vWZM2%2F4qNE67qclRmbMpvY9iqhfQWmjypB9%2BXFxIY9AQlsTz3wLU5ktxRzD8bkTSLtAmLi6ytV7cDDRc3ISrw6vc9H%2FD%2FYZ2c97j%2Bs4%2F0A7FoACKbiJZ3Xr4uxGvKesxdFHPYu9BggKuXNqWJRkOgjr37r3VBSlM4B%2Fjdy8Dpxx%2F1LKJOddMlMJf9k70GOqUBdNNqLEV9oHPaDBG6WWC04UT8qjeD04x41lp4mo4zZpEmxRbEu1oRwAzSYUKGbhcqFn0wKu1d4YpiTWlkd495y13k6LA6CRySpLUOqPB9kGU3JIwz99DnMcSIGGDE7FPetXXielvdibbIQ%2BsRbBL97RqW27vhcZI3QGpnwlutb%2FtQnBurU0sjWlwtSraS4uKpMzo0SXA31cHcbQu2PeSSAW%2FBM%2FqH&X-Amz-Signature=8cf45f3f529653a8e5146a2cc302bbc030b6feae6b1728846b29fbb62c796e98&X-Amz-SignedHeaders=host&x-id=GetObject)

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
