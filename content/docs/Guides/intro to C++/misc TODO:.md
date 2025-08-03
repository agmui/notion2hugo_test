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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX6E5AK3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb554t3VFQHL5Xe1SugV15WabiirlrVNN9qbMpIcC12AIhAO%2BZsf9YztxgY29OE%2F2qYdly%2Be1mCsNOZi4%2BSrOx2VsbKv8DCCQQABoMNjM3NDIzMTgzODA1Igypk%2BY2Ab1qHX2xZ%2F8q3AMzcOgTkyWfE5zxM8y0bDta4wMWbhfikuKKOzZfttuD%2FC9ROp88naM3mG3Tbm0B8OCRpv40QnlGJCad5wBzJBFSgrmPNa1qEkh4MWuNshrJuz%2BNv0otzbMWDHv%2Ff9C5i2AuGrSF6174v%2BALSi6G61RpZzJ8Akfuvjfy3uet5RlyVvrdjO39YdJp5%2BKLt912TkOC0mwKftbpY36ztGp%2FbNnBk6SakL4bKd8DTahwvkdwbe9%2BC8lw0d1YuGzjmqJE%2BfJ9wzbqJiDjYCPQ8aDG8qd54bQNJu5jhwh9aykctvPzApteMvhfnfPr%2BgSRSrdsMxqiabDdWKUvQw%2Bx3t1Un2G5m7sGyOPQ%2BCFwGZhJ8BoR5PCCIpsrEA1JhZ0cvxvsa2mm0CTGzA6r%2FeqYkGDgmmoaRRLUiW4%2B%2Fg%2BIK%2Fsvyoa0xkvd0C9mWQwmIp2G%2F5i9c92DWoFpMIw9Vgz4LDpHuLJQSmh5CtV2XBqTbO0WKHA9LQm2a%2Bg1tapZyCrdpjF6F8WoSpFCTMgiXcSU1LFlTQCbBxhUQ5uZzeFr2J1HfiCDDubihm0hpEk1PZ5fi%2F%2FQStYJY2U96JaI7EosR4SmaLAEfpWyy3jQIcQgEWu4xob79gwAQcPF9CnRHzspGzDLobvEBjqkAe4Qg7z3vqT4VXHZJj7IeUjcH3aiM4sSQCSWksqJ2647CoLzl6aYa5LN4tGA0O6%2BiAyBJdU8WlIiL24VUs5ek6GpTR4gIMgf%2FHB53GpRUQmP6kuiRUXz%2BRiRWNbN9LKF16R8EZk28V6%2FXobb8wpjbd2bu%2FxHjt5uAWhbcHRkH%2Bw0b9Nc3RwggR2Aj2T3t4OhbiGP2x19fbELFY%2F%2F8z1KcoKU0bKc&X-Amz-Signature=e4fc808e40b989cf79429a7dfa941877b6fd81caf17f83ce079cf32ae58c6f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX6E5AK3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb554t3VFQHL5Xe1SugV15WabiirlrVNN9qbMpIcC12AIhAO%2BZsf9YztxgY29OE%2F2qYdly%2Be1mCsNOZi4%2BSrOx2VsbKv8DCCQQABoMNjM3NDIzMTgzODA1Igypk%2BY2Ab1qHX2xZ%2F8q3AMzcOgTkyWfE5zxM8y0bDta4wMWbhfikuKKOzZfttuD%2FC9ROp88naM3mG3Tbm0B8OCRpv40QnlGJCad5wBzJBFSgrmPNa1qEkh4MWuNshrJuz%2BNv0otzbMWDHv%2Ff9C5i2AuGrSF6174v%2BALSi6G61RpZzJ8Akfuvjfy3uet5RlyVvrdjO39YdJp5%2BKLt912TkOC0mwKftbpY36ztGp%2FbNnBk6SakL4bKd8DTahwvkdwbe9%2BC8lw0d1YuGzjmqJE%2BfJ9wzbqJiDjYCPQ8aDG8qd54bQNJu5jhwh9aykctvPzApteMvhfnfPr%2BgSRSrdsMxqiabDdWKUvQw%2Bx3t1Un2G5m7sGyOPQ%2BCFwGZhJ8BoR5PCCIpsrEA1JhZ0cvxvsa2mm0CTGzA6r%2FeqYkGDgmmoaRRLUiW4%2B%2Fg%2BIK%2Fsvyoa0xkvd0C9mWQwmIp2G%2F5i9c92DWoFpMIw9Vgz4LDpHuLJQSmh5CtV2XBqTbO0WKHA9LQm2a%2Bg1tapZyCrdpjF6F8WoSpFCTMgiXcSU1LFlTQCbBxhUQ5uZzeFr2J1HfiCDDubihm0hpEk1PZ5fi%2F%2FQStYJY2U96JaI7EosR4SmaLAEfpWyy3jQIcQgEWu4xob79gwAQcPF9CnRHzspGzDLobvEBjqkAe4Qg7z3vqT4VXHZJj7IeUjcH3aiM4sSQCSWksqJ2647CoLzl6aYa5LN4tGA0O6%2BiAyBJdU8WlIiL24VUs5ek6GpTR4gIMgf%2FHB53GpRUQmP6kuiRUXz%2BRiRWNbN9LKF16R8EZk28V6%2FXobb8wpjbd2bu%2FxHjt5uAWhbcHRkH%2Bw0b9Nc3RwggR2Aj2T3t4OhbiGP2x19fbELFY%2F%2F8z1KcoKU0bKc&X-Amz-Signature=c4c2d2bb9458303e20e1a75c3b3689f459f2e44d92fc2d7145b537383fee2112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
