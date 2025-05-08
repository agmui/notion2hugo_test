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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDLWS5HB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqIaD7X5kbKgfsi5kpPQqzfkIzSJE1LpHACJIGROAkMAiEAvxuuPTubqCI%2FqUq1iz6OxJTrQL5q%2BaaM2C3demmjq9cq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDC5eqcG%2F%2BbwTCuqQQircA6BGtHiSsOr3gXa18Ur2ChZsc3oYxOB9V7QAe7f9C9E17w%2BpCCSDtcyVDRKrhvNNMYQmJoPomLKIGp1Rm%2B9pp2uQFUnhmnRiN%2Bxk%2BLsxtPsizIFxuuWGJ3Qhz%2F99BGKSxtKN7Hdz6ZfFzL%2BIJUI6jSrWdbQDMCwMn%2FPiPIztXaEas4ep1j0SB9Wd9CkajoGY0MWAHFOKxlTeIImQc73do9jFZ7LrFjKj2El8jU13yoqL5%2FJV74gQJoQgUGhVkUmmqHOaoGETSRjS9aM%2BVHUPTt4wB9yY%2FD0oJzUXorzQt8fB3yjpsEz8X6U%2FpPD8pAgYeyFoLnkegvCQmTWNo%2B3C1sL%2FnqvZ72TxbqPb8UIe%2Bmwbz4%2BrTK%2BT6cBdl8h8hbeAFVGEC35C%2BWppT7hkmmFy%2F9Tou8GbK%2BaG2SFW2i8vbseeasSssw0XJZ5HW0q3x6V46RHNL5DjoW0gS4rDeopW1ieGu%2Bb%2BXb8vGDBotPi2AgeviAvGMCdRhJbGZJUn%2FSZlKRjZD9S3cgaEqkzA9g%2B%2FxY1pxlJrCjWRSQWPa0%2BjfkCD8JnM7ZqSvL6pzXLfZITOIN%2FAcv5pOWeK0l55ip2rXlrE%2F52v6jrST8c8DqWKxBBcZFRRRAI195RZVBcoMKng8cAGOqUBJ5BCLR2vWJAaFZOuYc7TZ2Pk8SNIodPfFiwO9qDCdaoZKuw0h3D7QG6QxsV%2BILMibNIBoPWCRFia2rXWtKkhMCg1tx4swFRGXZk0SK%2BbAIvL6M6UnPT%2BaLntrmjFae6AdeJTdUL9eM%2FGqParxxe8gPPEKaSk14SNpnRjMq5l4ducbQ4fRO9GouiHsqA2xu2tygg0myMKU4b5a7PPZm1R%2BOFbKOmo&X-Amz-Signature=f1b484add83d63af649c6c9387a4ede3edeea403f7122579230feb095b341d7d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDLWS5HB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqIaD7X5kbKgfsi5kpPQqzfkIzSJE1LpHACJIGROAkMAiEAvxuuPTubqCI%2FqUq1iz6OxJTrQL5q%2BaaM2C3demmjq9cq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDC5eqcG%2F%2BbwTCuqQQircA6BGtHiSsOr3gXa18Ur2ChZsc3oYxOB9V7QAe7f9C9E17w%2BpCCSDtcyVDRKrhvNNMYQmJoPomLKIGp1Rm%2B9pp2uQFUnhmnRiN%2Bxk%2BLsxtPsizIFxuuWGJ3Qhz%2F99BGKSxtKN7Hdz6ZfFzL%2BIJUI6jSrWdbQDMCwMn%2FPiPIztXaEas4ep1j0SB9Wd9CkajoGY0MWAHFOKxlTeIImQc73do9jFZ7LrFjKj2El8jU13yoqL5%2FJV74gQJoQgUGhVkUmmqHOaoGETSRjS9aM%2BVHUPTt4wB9yY%2FD0oJzUXorzQt8fB3yjpsEz8X6U%2FpPD8pAgYeyFoLnkegvCQmTWNo%2B3C1sL%2FnqvZ72TxbqPb8UIe%2Bmwbz4%2BrTK%2BT6cBdl8h8hbeAFVGEC35C%2BWppT7hkmmFy%2F9Tou8GbK%2BaG2SFW2i8vbseeasSssw0XJZ5HW0q3x6V46RHNL5DjoW0gS4rDeopW1ieGu%2Bb%2BXb8vGDBotPi2AgeviAvGMCdRhJbGZJUn%2FSZlKRjZD9S3cgaEqkzA9g%2B%2FxY1pxlJrCjWRSQWPa0%2BjfkCD8JnM7ZqSvL6pzXLfZITOIN%2FAcv5pOWeK0l55ip2rXlrE%2F52v6jrST8c8DqWKxBBcZFRRRAI195RZVBcoMKng8cAGOqUBJ5BCLR2vWJAaFZOuYc7TZ2Pk8SNIodPfFiwO9qDCdaoZKuw0h3D7QG6QxsV%2BILMibNIBoPWCRFia2rXWtKkhMCg1tx4swFRGXZk0SK%2BbAIvL6M6UnPT%2BaLntrmjFae6AdeJTdUL9eM%2FGqParxxe8gPPEKaSk14SNpnRjMq5l4ducbQ4fRO9GouiHsqA2xu2tygg0myMKU4b5a7PPZm1R%2BOFbKOmo&X-Amz-Signature=2930fb121389866a8755da69ce773393b849d6df8032b463585a34ec6b8a5ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
