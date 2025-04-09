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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ36A6NI%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIFIcZ4jcAO6Wypk7nLsc9sGWoJ%2Fl7emlzcDnkKnRzTYYAiAwsMBUeXURpvw9PEXUIyGzyjeJGxwsY9XthxlzD7MpTCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGbHkZ4GxuH%2F%2BvWsGKtwDAh%2F7ZskBwQEYAzVx3flB4CS6T9c8%2BXoUWZKfXAHhi7BrUOgoijZ2731xck59Bv8frgp6k2n5BprN04F7iFhmxG9OON7fbXTzkbNcyU%2Ff3MT97ZMCldRneCPTAP41g%2BOFYt7qaih7QFyqsvK1htZ%2BFBkbVQ5fc3EsNadUSgRwZzADVWN23zCqcMllpJ8LAj%2Fv097eA15gKFwAY2myL41cuudrb0MMxF9CI2LbabdFZ4VwiA4ctq1CjqDeZIy%2FhOJHRfQfyqy%2BlxG9mxNHJLabXT0rUcB6MfEb1jXweXxzo7wCXVHelYFOu7FXmMd8rw%2B2DxXXcJbDhk7eG8quyMiRUO6INMyNuSeOhD3tWTC3%2Fgtve5Y1CqVjRWIr5luGP1T14BokEq400ehpupbOwj92QVQ52eZSJwaimaWGNs9C26Xelcw7BdN5icdfoQcFKhcPzxFQ60j8%2B8Nz2qrlQgR6RTMvoPdyjK9VMkSAYtxwP5zoIacobzNNQZWhUW9FWKnItHDgw6c85i6DwKQ2G3Y0kzsOIzKMHHkA50KCHQSio932zCzcUyys9hzt15s5lifqSFuuuJR4jV8MF4LOBztpETiBVy2N43GdUoITvpd%2FfPHt%2BxqcOTJAbk%2FY13Qw%2FJfZvwY6pgFePuWS8FJ14FoV3aDR%2F%2F5ZmAeppnd%2Frmx7ewR8mhcrhtnDI4pj%2Fvpl8XGefji06Cg3Ucg0MY34XerLcg1cXS21QwWnW835Qgn4VgnOXdobZnGSRlZGBeSHZB%2BPS3Y9XJ8%2B9FYINVbiohfRXTGCW%2FhMTgsmSiAFRCzd%2BT9oouEMa6Z0Z7fyt4%2BGbWQ%2BYm9k8zNP1VuFVomA4x6tnNAFW6C%2FlLKdNrDz&X-Amz-Signature=d1305961703d7fbaa770fd1ad71c860c464b2ae84aca7479f77d821a7c94b1b1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ36A6NI%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIFIcZ4jcAO6Wypk7nLsc9sGWoJ%2Fl7emlzcDnkKnRzTYYAiAwsMBUeXURpvw9PEXUIyGzyjeJGxwsY9XthxlzD7MpTCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGbHkZ4GxuH%2F%2BvWsGKtwDAh%2F7ZskBwQEYAzVx3flB4CS6T9c8%2BXoUWZKfXAHhi7BrUOgoijZ2731xck59Bv8frgp6k2n5BprN04F7iFhmxG9OON7fbXTzkbNcyU%2Ff3MT97ZMCldRneCPTAP41g%2BOFYt7qaih7QFyqsvK1htZ%2BFBkbVQ5fc3EsNadUSgRwZzADVWN23zCqcMllpJ8LAj%2Fv097eA15gKFwAY2myL41cuudrb0MMxF9CI2LbabdFZ4VwiA4ctq1CjqDeZIy%2FhOJHRfQfyqy%2BlxG9mxNHJLabXT0rUcB6MfEb1jXweXxzo7wCXVHelYFOu7FXmMd8rw%2B2DxXXcJbDhk7eG8quyMiRUO6INMyNuSeOhD3tWTC3%2Fgtve5Y1CqVjRWIr5luGP1T14BokEq400ehpupbOwj92QVQ52eZSJwaimaWGNs9C26Xelcw7BdN5icdfoQcFKhcPzxFQ60j8%2B8Nz2qrlQgR6RTMvoPdyjK9VMkSAYtxwP5zoIacobzNNQZWhUW9FWKnItHDgw6c85i6DwKQ2G3Y0kzsOIzKMHHkA50KCHQSio932zCzcUyys9hzt15s5lifqSFuuuJR4jV8MF4LOBztpETiBVy2N43GdUoITvpd%2FfPHt%2BxqcOTJAbk%2FY13Qw%2FJfZvwY6pgFePuWS8FJ14FoV3aDR%2F%2F5ZmAeppnd%2Frmx7ewR8mhcrhtnDI4pj%2Fvpl8XGefji06Cg3Ucg0MY34XerLcg1cXS21QwWnW835Qgn4VgnOXdobZnGSRlZGBeSHZB%2BPS3Y9XJ8%2B9FYINVbiohfRXTGCW%2FhMTgsmSiAFRCzd%2BT9oouEMa6Z0Z7fyt4%2BGbWQ%2BYm9k8zNP1VuFVomA4x6tnNAFW6C%2FlLKdNrDz&X-Amz-Signature=69a285d1c2c2161f9a3c6030b148734b0a2257a21e6c96cebd02d41d4e132e98&X-Amz-SignedHeaders=host&x-id=GetObject)

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
