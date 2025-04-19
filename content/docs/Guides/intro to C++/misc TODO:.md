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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RTAVJHZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBXA9Bfzau1aNb8ZV6EMMXceeyOVgXJB6xXLMYUQtuzRAiEA5zVhfslGDIbJsRQVX6NYi%2FAeWIThMSuYFvFqfRE2PlcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDhIRaJFpXtFccUJircA8ED%2FIyGqW849eFR9sm5WZSeyToeQhcMgiAxJ9xzc7O%2BK61ByxOQrCWogEAcDcJhucBWzM7iGpQLq%2B6t00ENogA6fJIeyrNS0EZAgBdyhMpXMEqGhgjxv1kIrZv3FBXwwh1UqmAkqh0w5DA1uoOZmgmYLyEbCNwDU7BSh%2F4m4CzEXdy2H34msCg54WCxYuebN1BWtJZqvM%2F5R7Vla0Cifnj3COnglmQUWOujYxNCHaPwPLldmEDaqXTYT8AiqQsLijdASDNVgmdOha32XY2KpiB9h1PFfnlcXFYZnV0aPTv3uViSxAA6BDwzNGT8v52ooMA%2BJ5ssAJyJsd%2FoWptsoloOpiCsIflMolc619jII%2FDYEYUw6MwBFCI8B%2BS0V1kLnfepwzOOfjwtqctx3ln%2Fen8zXGtke5yt78F9Z6fNgHhEPzrB9Cpb3YutXR5pOk51INafBSxDb%2FhXRf4KC3YE45FoU3Il%2FhIbQX1CNBwG%2BejghKYRA9bWjJmeWiWoJC4OKAjvzZWFu6GTr%2BIpPR9KgheUGsnI%2B4U8bugdOqandAxT%2F9HwdWfe1CYc%2BBNPiJCvFpVN1L5uzL%2Bjw8FEgXbreXq%2BNoO9ROY8dWPfeJgeq%2BDd%2BsFHm6xzYX81PJUAMIigj8AGOqUBfX%2FpelA6bRoq%2BLtKFEZ9Vriu3wjSwANHnHp6Q4sPG6daLWjI4ybTmGf%2F8LbEocMHUPJ6uYdibG%2BvrUgMc%2BEv8JpWswWfZGzB7Ywyt2h2Y6iomWVWwexqalIfI6z9pOcTa2RmvcetnXk3vtg115C3652l3A6XUn1W3u6eVqg9uvB%2F6v87iqDCcuQCiG9glzBZyvt%2FiC4CLF6d853WDbeuDoXcZFR7&X-Amz-Signature=716704ddaa56741f324adee7997340b99bdc70130c88499618100ce2dbece890&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RTAVJHZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBXA9Bfzau1aNb8ZV6EMMXceeyOVgXJB6xXLMYUQtuzRAiEA5zVhfslGDIbJsRQVX6NYi%2FAeWIThMSuYFvFqfRE2PlcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDhIRaJFpXtFccUJircA8ED%2FIyGqW849eFR9sm5WZSeyToeQhcMgiAxJ9xzc7O%2BK61ByxOQrCWogEAcDcJhucBWzM7iGpQLq%2B6t00ENogA6fJIeyrNS0EZAgBdyhMpXMEqGhgjxv1kIrZv3FBXwwh1UqmAkqh0w5DA1uoOZmgmYLyEbCNwDU7BSh%2F4m4CzEXdy2H34msCg54WCxYuebN1BWtJZqvM%2F5R7Vla0Cifnj3COnglmQUWOujYxNCHaPwPLldmEDaqXTYT8AiqQsLijdASDNVgmdOha32XY2KpiB9h1PFfnlcXFYZnV0aPTv3uViSxAA6BDwzNGT8v52ooMA%2BJ5ssAJyJsd%2FoWptsoloOpiCsIflMolc619jII%2FDYEYUw6MwBFCI8B%2BS0V1kLnfepwzOOfjwtqctx3ln%2Fen8zXGtke5yt78F9Z6fNgHhEPzrB9Cpb3YutXR5pOk51INafBSxDb%2FhXRf4KC3YE45FoU3Il%2FhIbQX1CNBwG%2BejghKYRA9bWjJmeWiWoJC4OKAjvzZWFu6GTr%2BIpPR9KgheUGsnI%2B4U8bugdOqandAxT%2F9HwdWfe1CYc%2BBNPiJCvFpVN1L5uzL%2Bjw8FEgXbreXq%2BNoO9ROY8dWPfeJgeq%2BDd%2BsFHm6xzYX81PJUAMIigj8AGOqUBfX%2FpelA6bRoq%2BLtKFEZ9Vriu3wjSwANHnHp6Q4sPG6daLWjI4ybTmGf%2F8LbEocMHUPJ6uYdibG%2BvrUgMc%2BEv8JpWswWfZGzB7Ywyt2h2Y6iomWVWwexqalIfI6z9pOcTa2RmvcetnXk3vtg115C3652l3A6XUn1W3u6eVqg9uvB%2F6v87iqDCcuQCiG9glzBZyvt%2FiC4CLF6d853WDbeuDoXcZFR7&X-Amz-Signature=8c32de962415d23ebc56ec1e00876a0963075af802f1e60a1944df8b74b3b0d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
