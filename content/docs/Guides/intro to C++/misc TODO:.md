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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAL2E4QU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIHjP4jKO0oioRu02rAOmQoQM7xwt0g2JRO9MHhr0m%2FNhAiBXfw7GutxmvnwRo0%2FjfuicGfwKaiVBudbG4B2ZKL84%2Byr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMOPoxx2E0N8h75SieKtwDvcM2rUoSdbE83bLvxz5O%2BfIj9EuwXNN%2FUiwCQFt%2FvtK%2FjikGlo6xxkvUrDkh1sSWFjH7MwpxZGvpEaYv5s5pIYdlE5d71Y048gxBWx5Q5rdrZ%2BwtvUklM0VSl%2F%2BiH%2FDQ9v%2BwLWVNpcotf83oKYwFEcsQx7lbUMTDafgBJifQ0tvb2myHtapVwYEQwIVXrOB24EtxXHsiShQL%2B3AZh%2BW0MO07LWMEZsErO2JIC3YOPMdT0kNNPKiIptgjwGg3x%2FcToUjoIp8JR2Cw5y6ni6tatF36bfHOXjRArX%2FW7fZUx1%2FMWeqEkXcaJIEUGuuDHK5GpKOfrfWzfoY8lWqoMHtRLWmsnf000fpfl9z%2BKGBRL67cnatGa5pnXZJT4yBaIk8PM1x%2FSsWEAMNBtZ9j62Mqh390up4L%2FvPlLH4cyV9TSq7PQCr2f3hbDgDIu%2B9y%2BiG4lescbGXNgu5wdrOe3KXKJkvNw6NExpX0qO%2BF5LPgEzjf9puVNy%2B7ci6IcMOQjzzoAorpmlJNMocJfV1%2BYFxnAe6oDCb22l9O6CNETSXJ5OOmsipRfbh%2FyI2Ia8gkMc4Y0jHokemYkO8TRaWJvoHdXbiZEA7gHFpqtUPNzBdrAo1lwP7XxTEWZQVhh1swuba%2BvQY6pgHhgPCDXP0sMeR6NC%2FTdUxM8h%2Byk1cL4%2FRYW2r5QwvEvM0uMmt%2Bt2RbzYCEx5u3yD5iWsrTg6e%2Bd0nCqtr5nn%2FwrYCqCWDYjjkHXv6qfiuMzhvHXUhDwQInmFgQr8bbWm53Y8JOXtOvzr4aoO3Gr5s4n0lFFdQQCLVZ1lUfQJHzKJb3CpEauuHT%2BusAEGgdzLNHPzxKQUm6BC%2Bf3l%2FRYYlG06spO6Iu&X-Amz-Signature=410585038e888b4e82269986271bdf64d0796032a3f4dc772f1731f4bfe90835&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAL2E4QU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIHjP4jKO0oioRu02rAOmQoQM7xwt0g2JRO9MHhr0m%2FNhAiBXfw7GutxmvnwRo0%2FjfuicGfwKaiVBudbG4B2ZKL84%2Byr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMOPoxx2E0N8h75SieKtwDvcM2rUoSdbE83bLvxz5O%2BfIj9EuwXNN%2FUiwCQFt%2FvtK%2FjikGlo6xxkvUrDkh1sSWFjH7MwpxZGvpEaYv5s5pIYdlE5d71Y048gxBWx5Q5rdrZ%2BwtvUklM0VSl%2F%2BiH%2FDQ9v%2BwLWVNpcotf83oKYwFEcsQx7lbUMTDafgBJifQ0tvb2myHtapVwYEQwIVXrOB24EtxXHsiShQL%2B3AZh%2BW0MO07LWMEZsErO2JIC3YOPMdT0kNNPKiIptgjwGg3x%2FcToUjoIp8JR2Cw5y6ni6tatF36bfHOXjRArX%2FW7fZUx1%2FMWeqEkXcaJIEUGuuDHK5GpKOfrfWzfoY8lWqoMHtRLWmsnf000fpfl9z%2BKGBRL67cnatGa5pnXZJT4yBaIk8PM1x%2FSsWEAMNBtZ9j62Mqh390up4L%2FvPlLH4cyV9TSq7PQCr2f3hbDgDIu%2B9y%2BiG4lescbGXNgu5wdrOe3KXKJkvNw6NExpX0qO%2BF5LPgEzjf9puVNy%2B7ci6IcMOQjzzoAorpmlJNMocJfV1%2BYFxnAe6oDCb22l9O6CNETSXJ5OOmsipRfbh%2FyI2Ia8gkMc4Y0jHokemYkO8TRaWJvoHdXbiZEA7gHFpqtUPNzBdrAo1lwP7XxTEWZQVhh1swuba%2BvQY6pgHhgPCDXP0sMeR6NC%2FTdUxM8h%2Byk1cL4%2FRYW2r5QwvEvM0uMmt%2Bt2RbzYCEx5u3yD5iWsrTg6e%2Bd0nCqtr5nn%2FwrYCqCWDYjjkHXv6qfiuMzhvHXUhDwQInmFgQr8bbWm53Y8JOXtOvzr4aoO3Gr5s4n0lFFdQQCLVZ1lUfQJHzKJb3CpEauuHT%2BusAEGgdzLNHPzxKQUm6BC%2Bf3l%2FRYYlG06spO6Iu&X-Amz-Signature=67d254a804475caec37ac242bf8ccea64042758f79785696332233e1b7d6656d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
