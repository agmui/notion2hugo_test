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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJOBKH54%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCMYkwEgFunyWqAVsrZqHzkI3aum5ZMRAHfalrRRTMpgQIhAIDIWPniNeNkyRRQ22bzBR5itDU7PW9J0A0VNtLpCIn0Kv8DCH0QABoMNjM3NDIzMTgzODA1IgxbtX1NMmpyA7WJ0Dkq3ANgELOVc6Al9xIGox7r7CVHC7dLyi1H3b2JzVk8dUyTHOMLtxk6t7MMsH4c7I2l7BrzT%2BCsJfe5lABhOA6VvXeAaKf1Q4JLXKZm9laOn8V7JkV5sUCokI8w6MoOSFclIgWNEzPFxaCJbwIEipXDOVCjLyx0oJyTl1ZtWujFWjC1hfXEuInSKAzm3VhwUuKyyVrjSvDZgP8vJSh7SymtJXANMI0AHhFsKoP4%2BrKJq7ipDdl%2F8H47W4aNZbHZqk0qyrs5eMclHF39dQO9lDxZ1BgNJ8HzMDNV%2FQxR2L6AF0IL48TC9G1x%2FLRch36QQZhbGGl%2BBmXXpMJtyuEQ1T9rjVYeuNb4EowOuntSOyJJHvLvVwXg6Outp1ct8JrOm2a5uhtgCoXRl9%2FMXTkZlHHGqFkT0Bcap65%2FS6YqNRGzo8Js2vwDRApNfh8TztniRiCe6u0vftr%2FxnuaYJdDhyTLVrL%2BoTjbMxJXguROwzcW%2Fk5TSxaoekbEWSEJPKHqMpeY3yO7u7wflDsrN8%2FNOulxyCtnsvTLBIki%2BPnO8Nud%2F7KyySQy%2B0oLFszoEcc70rzm9dis7rJhTbS9fy4yRvQvtKAaAQTCGyOXY7fxHRpjYSsuKX%2FxuzqUb7dYfAB2DDCnvrDDBjqkAYP3U%2FTNPMuuQ%2BKqFwm7Ju085T110XPtmtuZ23pvbvUsQrM6dzYgO6ka67XV2FaVjey3eIzZa9ttEdztROmmHRGUareF9wRiQy4BZ80BFjdm8GH4BejgqFTfUp62MmzJcqIsu1Q6wBv8geCLMiLojoLC%2FxUHhm1UNzWgWmmaBfWb%2BAwl3qmDy%2Fdu4n8%2BIN%2BDIxz%2BE48KZO%2BK48Xa96TzrDhpzCd6&X-Amz-Signature=bb6ea932c50e4872bdcb910f766494a890562026861613433fe0d2f5071c4d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJOBKH54%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCMYkwEgFunyWqAVsrZqHzkI3aum5ZMRAHfalrRRTMpgQIhAIDIWPniNeNkyRRQ22bzBR5itDU7PW9J0A0VNtLpCIn0Kv8DCH0QABoMNjM3NDIzMTgzODA1IgxbtX1NMmpyA7WJ0Dkq3ANgELOVc6Al9xIGox7r7CVHC7dLyi1H3b2JzVk8dUyTHOMLtxk6t7MMsH4c7I2l7BrzT%2BCsJfe5lABhOA6VvXeAaKf1Q4JLXKZm9laOn8V7JkV5sUCokI8w6MoOSFclIgWNEzPFxaCJbwIEipXDOVCjLyx0oJyTl1ZtWujFWjC1hfXEuInSKAzm3VhwUuKyyVrjSvDZgP8vJSh7SymtJXANMI0AHhFsKoP4%2BrKJq7ipDdl%2F8H47W4aNZbHZqk0qyrs5eMclHF39dQO9lDxZ1BgNJ8HzMDNV%2FQxR2L6AF0IL48TC9G1x%2FLRch36QQZhbGGl%2BBmXXpMJtyuEQ1T9rjVYeuNb4EowOuntSOyJJHvLvVwXg6Outp1ct8JrOm2a5uhtgCoXRl9%2FMXTkZlHHGqFkT0Bcap65%2FS6YqNRGzo8Js2vwDRApNfh8TztniRiCe6u0vftr%2FxnuaYJdDhyTLVrL%2BoTjbMxJXguROwzcW%2Fk5TSxaoekbEWSEJPKHqMpeY3yO7u7wflDsrN8%2FNOulxyCtnsvTLBIki%2BPnO8Nud%2F7KyySQy%2B0oLFszoEcc70rzm9dis7rJhTbS9fy4yRvQvtKAaAQTCGyOXY7fxHRpjYSsuKX%2FxuzqUb7dYfAB2DDCnvrDDBjqkAYP3U%2FTNPMuuQ%2BKqFwm7Ju085T110XPtmtuZ23pvbvUsQrM6dzYgO6ka67XV2FaVjey3eIzZa9ttEdztROmmHRGUareF9wRiQy4BZ80BFjdm8GH4BejgqFTfUp62MmzJcqIsu1Q6wBv8geCLMiLojoLC%2FxUHhm1UNzWgWmmaBfWb%2BAwl3qmDy%2Fdu4n8%2BIN%2BDIxz%2BE48KZO%2BK48Xa96TzrDhpzCd6&X-Amz-Signature=39c543d2ed6cb3f5ad6c8e0ce0b7cafde5b94fcd4c899a68e3f5acb80e427914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
