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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQIUAEYW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7fHqSUt1XHemLWEv2VQno7zBaE4L2ZXc%2BPytprJhBDgIhAJJdAvKNoUkkDqMjma9exiLlrGab8QHCyCHBgVUkWwh2KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqUGbGJR0vqWmblvgq3AM7QElWWiQyYM3bEGJwkQEfXqorbFfr1cP2rMAC0PTTZK%2Bo4lDzCQY0e2i8JKDP8agXR5OoawWXW1%2Bem9M6xcSx%2F9UjP3WA1QscVPPgPAPDv5o5SSNf6dLXffhUbnOZF1Ox6sdQTmRK9AWaRos3%2Fc7ICPv1zM5Lqdfi9daYKPPHwAz3vxW1ghAUpybheiC9%2BT1NyXTRc5LLah%2FYfiMjkOC%2FdN4GE7%2Fc0D3s0EUULiVkvQb1K0DDaFoVoG9lcmyIsXn3nIJIwAoRoIGPenQdkMpWGVF6vfSUnd9UyXdRZy2zsJFCIFogdWB4itKDRaTd6RKCSxiAY4gSYV%2B67ZfmHnNsRY9TSOb1oKNkFHI6x4IbJJR7xgZVRPN%2FLWNotrCBSCtBWKSoTEKoWKhdz8ZoZo6lslgj61mTir6LKaLHFidAl5xqqAgUH1MMMqXfwy2y%2B8IN0ojWbUv97L9qUnCL%2F3rvI87ICopPyxPJVGysGzJodX6Y9DCTpOokhTPy%2FsfhT55mkTgILZcU9%2BFwoe%2FahYw8BbRMozNSxnFJyqFfEspWWlVfgpgl6%2FxBsOM5HG9632HWZwgsMn7T3JGjuCTud3X17ZgqFvjGGeNWhHCq571LvuDwJxsqyxFZwzyskTCy9JHDBjqkASCvDjiIUsuorqkmkq3xlg5KNAVBS6GEBdTKFkeXlv2x8dHWP9DuzYx3%2BaodTS53mJv8TAp0%2FUoqKs534DlhhQ6SwcvMdJsqgf%2F3hsg3BdDdAxdqFrscmZHl2fDAo0hE2PrgituyFjTDBxNBIZpuhTD97pSnWp1s4w07p1ysnXPHQCwvySIG%2F1wAmKehVRgHFVxT8tVNBMLkuwdDSQqyTIPDrvgH&X-Amz-Signature=9d284d0979eb5af6b2f00f9500ba24d5c57b1864550276c1e7d3a817cb9bd821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQIUAEYW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7fHqSUt1XHemLWEv2VQno7zBaE4L2ZXc%2BPytprJhBDgIhAJJdAvKNoUkkDqMjma9exiLlrGab8QHCyCHBgVUkWwh2KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqUGbGJR0vqWmblvgq3AM7QElWWiQyYM3bEGJwkQEfXqorbFfr1cP2rMAC0PTTZK%2Bo4lDzCQY0e2i8JKDP8agXR5OoawWXW1%2Bem9M6xcSx%2F9UjP3WA1QscVPPgPAPDv5o5SSNf6dLXffhUbnOZF1Ox6sdQTmRK9AWaRos3%2Fc7ICPv1zM5Lqdfi9daYKPPHwAz3vxW1ghAUpybheiC9%2BT1NyXTRc5LLah%2FYfiMjkOC%2FdN4GE7%2Fc0D3s0EUULiVkvQb1K0DDaFoVoG9lcmyIsXn3nIJIwAoRoIGPenQdkMpWGVF6vfSUnd9UyXdRZy2zsJFCIFogdWB4itKDRaTd6RKCSxiAY4gSYV%2B67ZfmHnNsRY9TSOb1oKNkFHI6x4IbJJR7xgZVRPN%2FLWNotrCBSCtBWKSoTEKoWKhdz8ZoZo6lslgj61mTir6LKaLHFidAl5xqqAgUH1MMMqXfwy2y%2B8IN0ojWbUv97L9qUnCL%2F3rvI87ICopPyxPJVGysGzJodX6Y9DCTpOokhTPy%2FsfhT55mkTgILZcU9%2BFwoe%2FahYw8BbRMozNSxnFJyqFfEspWWlVfgpgl6%2FxBsOM5HG9632HWZwgsMn7T3JGjuCTud3X17ZgqFvjGGeNWhHCq571LvuDwJxsqyxFZwzyskTCy9JHDBjqkASCvDjiIUsuorqkmkq3xlg5KNAVBS6GEBdTKFkeXlv2x8dHWP9DuzYx3%2BaodTS53mJv8TAp0%2FUoqKs534DlhhQ6SwcvMdJsqgf%2F3hsg3BdDdAxdqFrscmZHl2fDAo0hE2PrgituyFjTDBxNBIZpuhTD97pSnWp1s4w07p1ysnXPHQCwvySIG%2F1wAmKehVRgHFVxT8tVNBMLkuwdDSQqyTIPDrvgH&X-Amz-Signature=925e0eb581031447d000a858c6116cd5660be6423537df5f82154e658252be0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
