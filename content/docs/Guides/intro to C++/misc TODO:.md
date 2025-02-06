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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PMCPBAJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDukTt4kTUmQcbhuX5WxwwBcemTj7CYST7gZovdg9%2BuXAIgTSDTAdDtO%2FCBLkqD%2BGyLzpE8NTuDc63yb%2FEtsTqjNDAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFkZpUdyEgIimvd4iyrcA%2BBNnhxk6NcHlItJecSmbC7PDVOd5f9RukkCe8BS10GrzNpZ6kt2wkzDtSTP18iT0FZVXxqs6qN6KdamFn22kJF0CWIROQMXaOkNE6vim4%2FGmCSZIudaqzMNZ9ys3PIn%2F6re%2Bwb1Eb6QWWlYWHd3EgvOWuyrgwlHXc4GYVwX6%2FKH0yp1uIPp9%2FD7xpbJPKmOQXkUpTUwRVtH1uIkmkDmN6YxE5dNb3fAfJOOPKsJPiUEMVUwNVHR4xN21dHZBCbip%2Fx5q50%2BUPOkv5qSu9CDhb5pKvJvgGM7kAHFtCy1gFgT10IRBh%2Bpg%2Blnhiu3yh9iCh2ceZQybQiH8yrFmFrdPkHXAytZF%2BAoxPU2jV1EW08CeWRRAtDfirghwo%2BD773LlPGcjOLPI4tL5O7gvwDYgKusA0TRaJt%2BzeUpAKpajAqgDKTd4aktQSQt6%2BqNyhIxwQmRvvOLrlBLpOSn%2B7q%2BWn%2FCRUBPwqzMLFb8DLAggSA3KdMh%2BQ16gkUqJQ0iecPu7JxOJ2y11o%2FLGXZwgXebukJr2qT7z7GHUKihoM93uotDCo5I6dcQInjUI9HsVarZq5YbHADZ1jWRuB8nIBODzgn8qUk2hBPPgkrvT7UmZbMWFW2xwuDd%2BaSo%2FCKqMPm5lL0GOqUBIn9SGRdX4ie4dMZZrpDduIR0SKyf87Qq1erC6Vdcyy3ceIz%2FL2EU8Ga64rY1Y0L%2F9T3F%2F6P8Z9o4Fy1pJauDjV83YctXtVygsuITMRjKRZkPI0Uj5Tu%2FqyOMFMji31gXAM38yklyHVRZPOQzl637Ug9BViamAG%2F405e836DdNOO9EpwnzgMymwQokZYs4zQwB3Mc8kjgy49C%2BSeQ%2BxjriMBqFwiz&X-Amz-Signature=4c10a1aac86a152ea115a787f326f995e9457cc5cb1973c05c716eafa567f1bd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PMCPBAJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDukTt4kTUmQcbhuX5WxwwBcemTj7CYST7gZovdg9%2BuXAIgTSDTAdDtO%2FCBLkqD%2BGyLzpE8NTuDc63yb%2FEtsTqjNDAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFkZpUdyEgIimvd4iyrcA%2BBNnhxk6NcHlItJecSmbC7PDVOd5f9RukkCe8BS10GrzNpZ6kt2wkzDtSTP18iT0FZVXxqs6qN6KdamFn22kJF0CWIROQMXaOkNE6vim4%2FGmCSZIudaqzMNZ9ys3PIn%2F6re%2Bwb1Eb6QWWlYWHd3EgvOWuyrgwlHXc4GYVwX6%2FKH0yp1uIPp9%2FD7xpbJPKmOQXkUpTUwRVtH1uIkmkDmN6YxE5dNb3fAfJOOPKsJPiUEMVUwNVHR4xN21dHZBCbip%2Fx5q50%2BUPOkv5qSu9CDhb5pKvJvgGM7kAHFtCy1gFgT10IRBh%2Bpg%2Blnhiu3yh9iCh2ceZQybQiH8yrFmFrdPkHXAytZF%2BAoxPU2jV1EW08CeWRRAtDfirghwo%2BD773LlPGcjOLPI4tL5O7gvwDYgKusA0TRaJt%2BzeUpAKpajAqgDKTd4aktQSQt6%2BqNyhIxwQmRvvOLrlBLpOSn%2B7q%2BWn%2FCRUBPwqzMLFb8DLAggSA3KdMh%2BQ16gkUqJQ0iecPu7JxOJ2y11o%2FLGXZwgXebukJr2qT7z7GHUKihoM93uotDCo5I6dcQInjUI9HsVarZq5YbHADZ1jWRuB8nIBODzgn8qUk2hBPPgkrvT7UmZbMWFW2xwuDd%2BaSo%2FCKqMPm5lL0GOqUBIn9SGRdX4ie4dMZZrpDduIR0SKyf87Qq1erC6Vdcyy3ceIz%2FL2EU8Ga64rY1Y0L%2F9T3F%2F6P8Z9o4Fy1pJauDjV83YctXtVygsuITMRjKRZkPI0Uj5Tu%2FqyOMFMji31gXAM38yklyHVRZPOQzl637Ug9BViamAG%2F405e836DdNOO9EpwnzgMymwQokZYs4zQwB3Mc8kjgy49C%2BSeQ%2BxjriMBqFwiz&X-Amz-Signature=d8136d5c8314d0ae869c5e3588dd37b85c135583bd5f86c533c59c9ca72e80e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
