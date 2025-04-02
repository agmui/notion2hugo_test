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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWZN47SJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIC40XXptf0vH4X%2FPNOTpJPOwi7JFXSSnFFRHyU%2FxNtMwAiEApcq%2Byg%2BWSRwmTAHnNs5aIp1exD2qeE%2FZgjkiPYzck%2FEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9jAWi75uUa%2FwEdrSrcAxV8qzrkVbuKQ7MwNp%2F5XQiwsvmH4eM0ytfJFT3KiZJic1XN3zPn6wiAEUvcuRc%2F79hVzY9aB%2BDK4F8HZ1dTYgOxqqaHncJSmaBIjrLSnGxbc9%2FlDVBPxvdmI5LgAOMa%2Fx%2B%2FDODlAtSjDTqweow5lt9RXUeogp%2F9bI0XwVlv6LfOR3fP1EHZ%2B7heOGnXfaUcLSweURwb3FuaBz8gZF5u%2BJpJ3feGRERMF%2B1HNHRyXAs11dEEqWegBQWZkY9QGmabXZCsUgNpOmnxlCTEovcavJNOrZa8ag1dJczHNcvz%2F2pufVJCE%2FYhelS1N7WUUf0z%2BxL06k0YQttEE7fDLFvQ%2BuGJFIqXnsQOHJIEJlm7ChWe%2FqIrQDHyevILKA93FhXPivLcuLnk475ySZ4Bq9DhUe8qfbSe0x9UR3ZNH2X4Ot3sqmPq07tVYQoC4GjvGAR0my3L3nYO1HnjbSAHSBEP2WMJxqBjPuIEgO7b8LfNVbjf8%2BUz0R%2FPU%2F54TEUcn%2FL3qmijoPcKWrTkPdTx3VXWHAuuCWa3riUXfk12zywAymOjt3VWy237wl%2FV%2FGlVgnlybWkcglDTPPY2yqk%2Fgfrmu%2B4dsI2%2BgnTB8%2BgUwxtJz762UHlNs7JamLzvV%2BGqMNKpsb8GOqUBMqGgL386AmnwiOecrAF3XIYxin8gCQEOwnKDijxEYZxq%2BTICdyr2Kqfzwd7dWQqQKyLc1VuHENLoJDOGn0%2BhLV7CLbBoV8TK9QZ9EhnB%2FD3p34G6D8VpkIUlbuNDPs7xRXw6J590Tj7nZMCbhq51R7FGHaLwWB7c9UUmVgN37N78gmpyH9mo7%2BENWDDbZAviq%2B0JMnlxL6O9MJPhKRaDl%2FfKMAhe&X-Amz-Signature=9b8f8378fc50d3b992295141199fe47d079d4f512ace8729a0dae8584bab5b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWZN47SJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIC40XXptf0vH4X%2FPNOTpJPOwi7JFXSSnFFRHyU%2FxNtMwAiEApcq%2Byg%2BWSRwmTAHnNs5aIp1exD2qeE%2FZgjkiPYzck%2FEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9jAWi75uUa%2FwEdrSrcAxV8qzrkVbuKQ7MwNp%2F5XQiwsvmH4eM0ytfJFT3KiZJic1XN3zPn6wiAEUvcuRc%2F79hVzY9aB%2BDK4F8HZ1dTYgOxqqaHncJSmaBIjrLSnGxbc9%2FlDVBPxvdmI5LgAOMa%2Fx%2B%2FDODlAtSjDTqweow5lt9RXUeogp%2F9bI0XwVlv6LfOR3fP1EHZ%2B7heOGnXfaUcLSweURwb3FuaBz8gZF5u%2BJpJ3feGRERMF%2B1HNHRyXAs11dEEqWegBQWZkY9QGmabXZCsUgNpOmnxlCTEovcavJNOrZa8ag1dJczHNcvz%2F2pufVJCE%2FYhelS1N7WUUf0z%2BxL06k0YQttEE7fDLFvQ%2BuGJFIqXnsQOHJIEJlm7ChWe%2FqIrQDHyevILKA93FhXPivLcuLnk475ySZ4Bq9DhUe8qfbSe0x9UR3ZNH2X4Ot3sqmPq07tVYQoC4GjvGAR0my3L3nYO1HnjbSAHSBEP2WMJxqBjPuIEgO7b8LfNVbjf8%2BUz0R%2FPU%2F54TEUcn%2FL3qmijoPcKWrTkPdTx3VXWHAuuCWa3riUXfk12zywAymOjt3VWy237wl%2FV%2FGlVgnlybWkcglDTPPY2yqk%2Fgfrmu%2B4dsI2%2BgnTB8%2BgUwxtJz762UHlNs7JamLzvV%2BGqMNKpsb8GOqUBMqGgL386AmnwiOecrAF3XIYxin8gCQEOwnKDijxEYZxq%2BTICdyr2Kqfzwd7dWQqQKyLc1VuHENLoJDOGn0%2BhLV7CLbBoV8TK9QZ9EhnB%2FD3p34G6D8VpkIUlbuNDPs7xRXw6J590Tj7nZMCbhq51R7FGHaLwWB7c9UUmVgN37N78gmpyH9mo7%2BENWDDbZAviq%2B0JMnlxL6O9MJPhKRaDl%2FfKMAhe&X-Amz-Signature=5aca971e26acd87b77f754f14d261dd33fe1595cc767ad4f3e653535a1493336&X-Amz-SignedHeaders=host&x-id=GetObject)

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
