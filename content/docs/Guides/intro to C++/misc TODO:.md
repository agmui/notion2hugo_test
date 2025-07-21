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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWUBJPWO%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn0i7pQe7tQdgnTUAGpqp3juxT1uT6fFMf6QjtjfdZRgIgbRNc6omJ4F0RWCOx9upsfp9myArTWcb0t%2Bv5sIgnGPcqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCd1SnMelXgmty9kiSrcA2SNrHIFyiom7QGenk%2BG5WCktrJjtHd7rcK%2FLlX2JRCvRcq4uN9epAbUo7fD%2FitQcfoShdg6CB6NiVAfuMo0ig5CSb34nIZUrJLY0zyJvgSyvIwhH%2Fwh%2FPGrZ3q1z074nLTvSvD%2BoxamfOW6Xbzju5h0dxGUqbtw9W4M128dfCOuh14LbBXbHBNXkgHLphnwaX9UEWKT9Es9nK90DzeQJ3fHaQK1X3qA6uiJbegu%2BV6jfye4v61l3aYUe5KrLCDs8lnXhy9farJ89qZ%2FuNfJ3tmh%2F0tzoz7fiT3TkS33YNCMSzTuV9pkElBahErHAS0fwzfaXCatyh0Ls86ejOOOfZSz4dCA5q2hwocQxdhdmeJ2bFRZbdlgDnQGSA6gfmezjliiQMaKqB9vwN9gwn24XaBmAIpEq2aqKrkMaxDi2SlDoqYQSVdVqOQBkobtLIgT4aGwBcMpqTIggnvC%2B39NkuwwoBuTXjc4m18GO4CEDisUFulhR2ZZUvTCr0VZ6IoTahdWbPYdK%2BnvIu1%2FnwTv0%2Fbf3EXYiiLZM%2FDflb1Pbr4TD1OPXU54e7%2B%2Fqly2WtfFEDnu%2FRWlAmXSkRXmuHHx7XGGzsqIF7HHQcn%2F22mPRGZXD0A%2BTXVDWMBb0fvNMNTI9sMGOqUBN0CJQPK%2FbATtWgcVFAgC22h%2BLXusTNfiT9kqIpb81VNP%2BsDzWZ5sXztiOFJh64CG4oue%2BUULH9yp8byJ5uchd9Wj8WmlNkjKVtkkVmvBCiLQ%2BsnPZT4RpmH5SH95WpfOESXZOLNgkJYBwLPFSyCy%2BHP4dDDF59q3Pcj6OrzFG3i5Ew5IRtwZ1sGFrp7btvzvx8nEZO5W0Zl%2B8pg%2BABRrKvTLpLEy&X-Amz-Signature=1ed0c6fee34e13ce808f0dd1429b157c9d6e2956f66cba9a9403b7dac8948b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWUBJPWO%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn0i7pQe7tQdgnTUAGpqp3juxT1uT6fFMf6QjtjfdZRgIgbRNc6omJ4F0RWCOx9upsfp9myArTWcb0t%2Bv5sIgnGPcqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCd1SnMelXgmty9kiSrcA2SNrHIFyiom7QGenk%2BG5WCktrJjtHd7rcK%2FLlX2JRCvRcq4uN9epAbUo7fD%2FitQcfoShdg6CB6NiVAfuMo0ig5CSb34nIZUrJLY0zyJvgSyvIwhH%2Fwh%2FPGrZ3q1z074nLTvSvD%2BoxamfOW6Xbzju5h0dxGUqbtw9W4M128dfCOuh14LbBXbHBNXkgHLphnwaX9UEWKT9Es9nK90DzeQJ3fHaQK1X3qA6uiJbegu%2BV6jfye4v61l3aYUe5KrLCDs8lnXhy9farJ89qZ%2FuNfJ3tmh%2F0tzoz7fiT3TkS33YNCMSzTuV9pkElBahErHAS0fwzfaXCatyh0Ls86ejOOOfZSz4dCA5q2hwocQxdhdmeJ2bFRZbdlgDnQGSA6gfmezjliiQMaKqB9vwN9gwn24XaBmAIpEq2aqKrkMaxDi2SlDoqYQSVdVqOQBkobtLIgT4aGwBcMpqTIggnvC%2B39NkuwwoBuTXjc4m18GO4CEDisUFulhR2ZZUvTCr0VZ6IoTahdWbPYdK%2BnvIu1%2FnwTv0%2Fbf3EXYiiLZM%2FDflb1Pbr4TD1OPXU54e7%2B%2Fqly2WtfFEDnu%2FRWlAmXSkRXmuHHx7XGGzsqIF7HHQcn%2F22mPRGZXD0A%2BTXVDWMBb0fvNMNTI9sMGOqUBN0CJQPK%2FbATtWgcVFAgC22h%2BLXusTNfiT9kqIpb81VNP%2BsDzWZ5sXztiOFJh64CG4oue%2BUULH9yp8byJ5uchd9Wj8WmlNkjKVtkkVmvBCiLQ%2BsnPZT4RpmH5SH95WpfOESXZOLNgkJYBwLPFSyCy%2BHP4dDDF59q3Pcj6OrzFG3i5Ew5IRtwZ1sGFrp7btvzvx8nEZO5W0Zl%2B8pg%2BABRrKvTLpLEy&X-Amz-Signature=c076553d42bf1e931f2b1d59d8925fad7222d5beee32d44d640e438bdd8b848d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
