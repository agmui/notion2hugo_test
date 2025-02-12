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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVOE2BPD%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKJKZ%2B2BfcczBdydJtunsFaa1zaWPCXCgYeQswsXSGnwIhAKUJxPebT%2BhYWuhuIRwo8wl21qh0Rpw9vvF8h0dV6HB%2FKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt2s%2Fcl%2F2TE79YZY4q3ANAwI47%2BPO8Cr7oDZXNL3iuXMK2t2uVmBd%2BzoYtbzNJdf1rqvRcnV9BVL2WHXagD%2Flg9WR9lYbLa3wQIBed52z3Z%2F9N6kcC1Ikx2vrnMb1lxpDYKuTgnajVngsLQ%2FWqgFcwkqNRzvuM0gLYHFDrRlC92Oy8Fiq8Ri40p%2Bk7%2BuxWoRPXw1whxsqLGNV0vLTrImCnkga%2BUl8FoMyv4eVo2vnnXg8lQ%2FWufnYAsn7F0fMwDWUnW5vbPuFG8ZcAQGdUeKiFgLj7prTHdvW7061J60BFVcrUwwbID2FSIwZiRS8iarDNnQswqGShhUDNTZwUNn%2B1%2FF3SJrYb%2FVD7cNq2pOL7inhWx34fR9KHj71RswaeIhRclY3tRT%2FcudJc4xoiBp25Jt8NnN1hYbDGj5R%2F5BWMJ0zP8m%2Bw8JmuPYGzIIFToQMyXJC4wjSur%2Flw22tkZb6pJMSWqwK%2B2ZcqpfyRz4AeWz0iSqwCO39TZaJeCEUNs9NFBH1WpObNDEVtcwMPvGq%2FDx2beKhNr5sNcMOBrSi8u7A4kqqsMdGX8uoGv%2FAi2kDiIGlt9twnWxJcBIIOj4QLk7wdwpH2fVnh%2BvSCWlhhGvyPCFGwYyl73PiMhwl4WN%2BURoDQTmBeb%2FMMpjD2qrK9BjqkAY2ah%2BNeX%2B67O%2FxolRY%2FKEqbNUltDboKrWC5AZJ6SbsCdDxjmzP1q78LYwpA1NMJl%2BK5AJgN%2FKe9vVufUw8FVUrXVkbvcI8MxBzKNLaj9%2B4XIRlHWv2JLYwDw3H2YCjjgaC%2FVVLgXvxBTLeXOIJXfiJDWrq%2BYKpAXr9Qsr8kYoFtWeZ6Qwz%2BiuthTnBc3suWdn54WsXxbsvFJViGoFNEJg4uvhQ3&X-Amz-Signature=19ae94aa2026154267b30a5730b021198078efa7f6cdd42f998f058eb98e756e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVOE2BPD%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKJKZ%2B2BfcczBdydJtunsFaa1zaWPCXCgYeQswsXSGnwIhAKUJxPebT%2BhYWuhuIRwo8wl21qh0Rpw9vvF8h0dV6HB%2FKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt2s%2Fcl%2F2TE79YZY4q3ANAwI47%2BPO8Cr7oDZXNL3iuXMK2t2uVmBd%2BzoYtbzNJdf1rqvRcnV9BVL2WHXagD%2Flg9WR9lYbLa3wQIBed52z3Z%2F9N6kcC1Ikx2vrnMb1lxpDYKuTgnajVngsLQ%2FWqgFcwkqNRzvuM0gLYHFDrRlC92Oy8Fiq8Ri40p%2Bk7%2BuxWoRPXw1whxsqLGNV0vLTrImCnkga%2BUl8FoMyv4eVo2vnnXg8lQ%2FWufnYAsn7F0fMwDWUnW5vbPuFG8ZcAQGdUeKiFgLj7prTHdvW7061J60BFVcrUwwbID2FSIwZiRS8iarDNnQswqGShhUDNTZwUNn%2B1%2FF3SJrYb%2FVD7cNq2pOL7inhWx34fR9KHj71RswaeIhRclY3tRT%2FcudJc4xoiBp25Jt8NnN1hYbDGj5R%2F5BWMJ0zP8m%2Bw8JmuPYGzIIFToQMyXJC4wjSur%2Flw22tkZb6pJMSWqwK%2B2ZcqpfyRz4AeWz0iSqwCO39TZaJeCEUNs9NFBH1WpObNDEVtcwMPvGq%2FDx2beKhNr5sNcMOBrSi8u7A4kqqsMdGX8uoGv%2FAi2kDiIGlt9twnWxJcBIIOj4QLk7wdwpH2fVnh%2BvSCWlhhGvyPCFGwYyl73PiMhwl4WN%2BURoDQTmBeb%2FMMpjD2qrK9BjqkAY2ah%2BNeX%2B67O%2FxolRY%2FKEqbNUltDboKrWC5AZJ6SbsCdDxjmzP1q78LYwpA1NMJl%2BK5AJgN%2FKe9vVufUw8FVUrXVkbvcI8MxBzKNLaj9%2B4XIRlHWv2JLYwDw3H2YCjjgaC%2FVVLgXvxBTLeXOIJXfiJDWrq%2BYKpAXr9Qsr8kYoFtWeZ6Qwz%2BiuthTnBc3suWdn54WsXxbsvFJViGoFNEJg4uvhQ3&X-Amz-Signature=9d77b238b923c91b0d934314424c4e4eb0d1bfcd2cdf9807bcadb8908e69f0c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
