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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCRQANBY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLlTR2vUP8XcBZ8qZt9gXNRQvRcNp1VckeeqBRYdDRgAIhAMZ24wFAOJrx%2FK2l1cS876HrkYV%2Fx4PB46h76F%2FaDI%2F3Kv8DCBYQABoMNjM3NDIzMTgzODA1IgxYgNut8H2klMiq%2BRkq3AP7me2%2FlLOwWo6Tzae7vgfchWQo8o4rKDuE3rfP4dp1KByCJw%2Be5mT4EkzILoD6HltCSqg2MXFg%2FFJt0QHHkmcGUzWyiHYLHYdahUXOSWtJdwkbGJ9iuD3oJzbs6w8Ya8eOllGucB0eV%2BLUio5wLP6eNUNSU0b76mOLWcB8aPyOuFhh2QJFr1eQD6J%2BAxefxLUwZnrawyg1KIVdzn3EavFu3XKjGSysJaslZ1LGI7M9QpiowaDwNgihxBKsIAwjAgKC1u60n4DI3f4K7QmQpXFAjGFHcgbQOHWQnjb35x4e4mxRCqji4h6EkPTdBWhBCGxWIkMXaT6NjPXkV%2B6iQZf3EoBhJZ%2BIeuQNMQKH%2Bi2ct5hjtIRSqWf5v42LCQguA8xLbXfcI76sRwlLaXJGpvBALWZ%2BZZrzX1Mwq7%2BxlMv7YhJ2Nz%2F5%2BOCU7imCW1vn5gxHmui%2BDtg%2FXREhrgkTC84G9tKDur0Go4%2BtRQ4WqsvT85uHMvFT3SpBZLEiW7R15FvcjxUOmenhBDmkSrdnZBcWpp7gnK750%2FU4rFac3rs1QK7GBprYJ4%2BHi3xBavjGvUbqweoqCpxUd%2F5kkajKqBQfjqa%2FyNi5c5p5DxCukRGRHmMMee55IEF75UuSEDDC3be9BjqkAen9oLjiVpQck7aIzFvF3JDSrzRzU3%2BTtnXmmESoyQe0n97amH1IpW4HWnRhAlgNleJeR3FCKYz5%2B20Ik83W8dEJ7Ddz3nKx0K4N45I1eNXf2xzAnhHW2V%2F%2ByJSfVxiCV%2B%2BpheKq0XcvjeZ4dDe3HDt12AW1z42chaIB9aWAfExbh6Yw8P0NK6Wn0rzVU0adCnYKDmnzef4aurIq%2FEtk5REPD2aB&X-Amz-Signature=7c4b1fb235606f095f46c51a5921590ab11d047d7286d4be909b85fb884bfe1e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCRQANBY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLlTR2vUP8XcBZ8qZt9gXNRQvRcNp1VckeeqBRYdDRgAIhAMZ24wFAOJrx%2FK2l1cS876HrkYV%2Fx4PB46h76F%2FaDI%2F3Kv8DCBYQABoMNjM3NDIzMTgzODA1IgxYgNut8H2klMiq%2BRkq3AP7me2%2FlLOwWo6Tzae7vgfchWQo8o4rKDuE3rfP4dp1KByCJw%2Be5mT4EkzILoD6HltCSqg2MXFg%2FFJt0QHHkmcGUzWyiHYLHYdahUXOSWtJdwkbGJ9iuD3oJzbs6w8Ya8eOllGucB0eV%2BLUio5wLP6eNUNSU0b76mOLWcB8aPyOuFhh2QJFr1eQD6J%2BAxefxLUwZnrawyg1KIVdzn3EavFu3XKjGSysJaslZ1LGI7M9QpiowaDwNgihxBKsIAwjAgKC1u60n4DI3f4K7QmQpXFAjGFHcgbQOHWQnjb35x4e4mxRCqji4h6EkPTdBWhBCGxWIkMXaT6NjPXkV%2B6iQZf3EoBhJZ%2BIeuQNMQKH%2Bi2ct5hjtIRSqWf5v42LCQguA8xLbXfcI76sRwlLaXJGpvBALWZ%2BZZrzX1Mwq7%2BxlMv7YhJ2Nz%2F5%2BOCU7imCW1vn5gxHmui%2BDtg%2FXREhrgkTC84G9tKDur0Go4%2BtRQ4WqsvT85uHMvFT3SpBZLEiW7R15FvcjxUOmenhBDmkSrdnZBcWpp7gnK750%2FU4rFac3rs1QK7GBprYJ4%2BHi3xBavjGvUbqweoqCpxUd%2F5kkajKqBQfjqa%2FyNi5c5p5DxCukRGRHmMMee55IEF75UuSEDDC3be9BjqkAen9oLjiVpQck7aIzFvF3JDSrzRzU3%2BTtnXmmESoyQe0n97amH1IpW4HWnRhAlgNleJeR3FCKYz5%2B20Ik83W8dEJ7Ddz3nKx0K4N45I1eNXf2xzAnhHW2V%2F%2ByJSfVxiCV%2B%2BpheKq0XcvjeZ4dDe3HDt12AW1z42chaIB9aWAfExbh6Yw8P0NK6Wn0rzVU0adCnYKDmnzef4aurIq%2FEtk5REPD2aB&X-Amz-Signature=eca9ff7a193458a4f0041aa8390b29a4d0a8c2f448d76f7dcfef6f179c72e941&X-Amz-SignedHeaders=host&x-id=GetObject)

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
