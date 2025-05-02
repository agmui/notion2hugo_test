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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRSXNA44%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDx%2B71QOnJrHCYanZWHSmGo4Lz5QZ1DyGQSPP4GhQqHVwIgN5XKEMUQHlac30cGx12XS53LsYN8voCoK6purycye6sqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5Q78DkikJ2cGSOnCrcA4A5hWNE5Bmg%2BnaB%2BXCT2PdFVUCMHBdq%2BpT9QP%2FcGXHcIc4su8nFSwRl%2BS0AbckkCAxLp5NcRoUiELU3H%2FnC6pp0joUKndtTQbDhrVuo7wxMMYsWcAOowcLdubR9wkKcqishpJbY%2BCHg2Kk77OGPQff7n2PuL6GpjSTsgifybONcUfJsIJm1G6I5AOuM67xHl9RltwYIEukCXMk%2FRdeF0nMjm1L2RPf5xGWew34FbJG0E%2BG2Ymtplbm3fr18lZ1k5JBG%2BVoJkzP98JAcJAngvW7U4YP0BLEIoDQbJMkvLoMdiUnifn3Yg0usWrCqKaTQO11C%2FqWYMVAbUl99woZb9FqJlCS8Qb25H0N%2B59k7zOwIPykbDFuO6ql78GqLtjQm9v49sYJW9lEJmA5kEoscJRUgJX5z8u0byGmTbMHUQ%2BWyzqrzUHS3Ixss%2F71C3mMRFjMA6kk3R0t9qGDK1iLU44yRAbKcRn5WM62%2Fy%2Fw8HWPqdyF6ycCNpnLb274A7Vr%2Ffs0BpQzrDq1ZT2pp%2Bb%2Bk3Z1%2BQ3rrxGPUBiib%2FpKck1PbpleHTa1oRx6%2FJ%2Bj%2BsY2qNfzB%2B1xoZBdaqP7b2m%2BnmuxchLpMXd%2Fvr7lO0DSb3F%2B%2BZCMrHdpQQPGZsb3iMJHk08AGOqUBwGAhKpOBJS%2FSQfvGZU9vv%2FIfbuZlJf8BW9S1lQtJ3h5ZXAjoKb2xdesnU9nWhT4etGHsmymy7%2BdiCcvUG2mkVHUWZWv6ZKM6Uj7D5%2Bokvmst75HSD9xnxx2zczkxpNGpWK42gU%2BrtYhI6bsAukcGPmTCvitoEmxbjPH0R71bWblgXI%2FdI1SPBLFUPOIQrMpJqwy0RveSCfjemzPee42Mj4Bc0erY&X-Amz-Signature=899e64e147d9f232731bb21695501ede9f10891724bdbb10fd7c53e88ce1749a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRSXNA44%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDx%2B71QOnJrHCYanZWHSmGo4Lz5QZ1DyGQSPP4GhQqHVwIgN5XKEMUQHlac30cGx12XS53LsYN8voCoK6purycye6sqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5Q78DkikJ2cGSOnCrcA4A5hWNE5Bmg%2BnaB%2BXCT2PdFVUCMHBdq%2BpT9QP%2FcGXHcIc4su8nFSwRl%2BS0AbckkCAxLp5NcRoUiELU3H%2FnC6pp0joUKndtTQbDhrVuo7wxMMYsWcAOowcLdubR9wkKcqishpJbY%2BCHg2Kk77OGPQff7n2PuL6GpjSTsgifybONcUfJsIJm1G6I5AOuM67xHl9RltwYIEukCXMk%2FRdeF0nMjm1L2RPf5xGWew34FbJG0E%2BG2Ymtplbm3fr18lZ1k5JBG%2BVoJkzP98JAcJAngvW7U4YP0BLEIoDQbJMkvLoMdiUnifn3Yg0usWrCqKaTQO11C%2FqWYMVAbUl99woZb9FqJlCS8Qb25H0N%2B59k7zOwIPykbDFuO6ql78GqLtjQm9v49sYJW9lEJmA5kEoscJRUgJX5z8u0byGmTbMHUQ%2BWyzqrzUHS3Ixss%2F71C3mMRFjMA6kk3R0t9qGDK1iLU44yRAbKcRn5WM62%2Fy%2Fw8HWPqdyF6ycCNpnLb274A7Vr%2Ffs0BpQzrDq1ZT2pp%2Bb%2Bk3Z1%2BQ3rrxGPUBiib%2FpKck1PbpleHTa1oRx6%2FJ%2Bj%2BsY2qNfzB%2B1xoZBdaqP7b2m%2BnmuxchLpMXd%2Fvr7lO0DSb3F%2B%2BZCMrHdpQQPGZsb3iMJHk08AGOqUBwGAhKpOBJS%2FSQfvGZU9vv%2FIfbuZlJf8BW9S1lQtJ3h5ZXAjoKb2xdesnU9nWhT4etGHsmymy7%2BdiCcvUG2mkVHUWZWv6ZKM6Uj7D5%2Bokvmst75HSD9xnxx2zczkxpNGpWK42gU%2BrtYhI6bsAukcGPmTCvitoEmxbjPH0R71bWblgXI%2FdI1SPBLFUPOIQrMpJqwy0RveSCfjemzPee42Mj4Bc0erY&X-Amz-Signature=afe12f0eed848fc66b36707a9ae6dfc24d01052ff79bff70d7c8d0b6442b0a41&X-Amz-SignedHeaders=host&x-id=GetObject)

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
