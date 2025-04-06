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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSF55NHL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDICxw7apWwjXC8ArbLPhwmaM96WMX7t5OmsAwtZw3AHQIgCU5yk9odJN8wuiIqO4CaEHRaDI2tqfwCmfJQ11aqPqUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLb%2FDcrlKqIYO5k8aSrcAyV7gAynRxpHKKG3W5sAjES63cbAn19sp%2BK3%2BOwcCB%2FLjJHTbITM9CsSdDLbkITObYDBZLiXeY43C6wssgQn5%2BqHYNGLqU7WbLK%2B4sdhP%2BbUDIpnxT05su7st3RtghbtZpJNo6vFh0K9w3JGNRRsT4ZLfYoM6AkG3amDDzlHjK9lUO0Gpsk%2BOrrBI3ZIcjzbwv3HgVQ3Sl9jNiuZg4DfUb7kAQ7MOKsgiM02SYJUpYvWaxDcV7lDv6UrrY0cwy1NYF4LFB2xBIR9bYV02pGtMEjHw21A85T16wTf%2BtWDNrsoVlR14UGZvMzb8cQ6CrQRxYIhsqFknMh7CTsRfBDh0BrwnRipLSpqrz14rzqXReO2PaFMyAQQZ3A9Eex26at7kyZt2GT4gcc48w%2FY4yzhBIT8jGz%2BmLLehf%2FBgaq4PHnXO8fJtqnBhAwqbhOzt%2FB3SX2Xg2Q%2BTfluvrpVrSZD%2BZZxiRsVcJkfTi4X2Ghi4H7Z4ZlG1pPmmC%2BrG7jMoTiTCuVlWIGmemH4Yj1F1lbjoTnJ0B25aOQ1ZLRpehDnN%2FwwZuYQUVgCNZG95DrvocsSL3fc9eyfiqjROBgYEOJSujaGXXhT7R9eIY3TNxQ2UWc9dfEhVXQLI9ja6RqLMLLCxr8GOqUBVzLxDb8g0kf5PeypEtvRR31Q96Y7W3%2B2fBXoKtZdqGB8QlXZttYLnvkKuoxzc0jSES23VZHVG5iD5V8k4Iz%2BLTk35v8Bci6j04OuCnO6Py8XnFu8tqqbRw6JLID3OSQ2LDIgNwFe2keSBTkI%2B2DT1wn23Bji%2B66Us60l8%2BkxH8vnh5aHGwvQ%2BIpJb0mXqpGauDOde0fLhtuzfekOLKne1FUul5BV&X-Amz-Signature=a995a47fda031bcaa1eabea7fa37583275ad83efa95646d7aa25f97229866e09&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSF55NHL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDICxw7apWwjXC8ArbLPhwmaM96WMX7t5OmsAwtZw3AHQIgCU5yk9odJN8wuiIqO4CaEHRaDI2tqfwCmfJQ11aqPqUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLb%2FDcrlKqIYO5k8aSrcAyV7gAynRxpHKKG3W5sAjES63cbAn19sp%2BK3%2BOwcCB%2FLjJHTbITM9CsSdDLbkITObYDBZLiXeY43C6wssgQn5%2BqHYNGLqU7WbLK%2B4sdhP%2BbUDIpnxT05su7st3RtghbtZpJNo6vFh0K9w3JGNRRsT4ZLfYoM6AkG3amDDzlHjK9lUO0Gpsk%2BOrrBI3ZIcjzbwv3HgVQ3Sl9jNiuZg4DfUb7kAQ7MOKsgiM02SYJUpYvWaxDcV7lDv6UrrY0cwy1NYF4LFB2xBIR9bYV02pGtMEjHw21A85T16wTf%2BtWDNrsoVlR14UGZvMzb8cQ6CrQRxYIhsqFknMh7CTsRfBDh0BrwnRipLSpqrz14rzqXReO2PaFMyAQQZ3A9Eex26at7kyZt2GT4gcc48w%2FY4yzhBIT8jGz%2BmLLehf%2FBgaq4PHnXO8fJtqnBhAwqbhOzt%2FB3SX2Xg2Q%2BTfluvrpVrSZD%2BZZxiRsVcJkfTi4X2Ghi4H7Z4ZlG1pPmmC%2BrG7jMoTiTCuVlWIGmemH4Yj1F1lbjoTnJ0B25aOQ1ZLRpehDnN%2FwwZuYQUVgCNZG95DrvocsSL3fc9eyfiqjROBgYEOJSujaGXXhT7R9eIY3TNxQ2UWc9dfEhVXQLI9ja6RqLMLLCxr8GOqUBVzLxDb8g0kf5PeypEtvRR31Q96Y7W3%2B2fBXoKtZdqGB8QlXZttYLnvkKuoxzc0jSES23VZHVG5iD5V8k4Iz%2BLTk35v8Bci6j04OuCnO6Py8XnFu8tqqbRw6JLID3OSQ2LDIgNwFe2keSBTkI%2B2DT1wn23Bji%2B66Us60l8%2BkxH8vnh5aHGwvQ%2BIpJb0mXqpGauDOde0fLhtuzfekOLKne1FUul5BV&X-Amz-Signature=60c5e34cda04498acaf182b46b6f19c496dd6967688ea6457ddae5f08523fc1c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
