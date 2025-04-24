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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZCWQLBX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNAic9aysGgemYKq%2Bsh6tBrNixGQ9o6NYGg8YYP%2B48bwIgE3PzPd5wVJdQsn1V8gt4rui3%2BL7Iv3dexDiE0cmNfogq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDD5hPt8kzuD%2BRhVqQyrcA8mgerXdBlOlarLlACZDOa8pHcFzLhCcE1E50tCc6%2FSTDBKrQy3fIFBnk76g%2BgPqUPXxvQnwgNXmoJJD2kPqqHAmuSZ%2FmdnCOyGPnIxm4Q2DIPjntQwTQNbS4aT8U%2F%2BxDjHAKt49wxc3C1YRKJsX6QkVx89YZ%2Bybw1NUFSF6gBdQTnvrbcxI35EklvfGtf8cVA0a0Au7m8Y8%2B5yeRZdBBhaWm8rsvLJqEgB1Rvsdysg%2B0XPHjo9bl0jlF5pbRR4PKyaxKVMhqtAAAMG1R%2FYAfIMHolB7D7%2BIvlgAqCcdRe9KZHPMiQ9BnvBI22fPuQR4%2BD71tc4Ib8mMDQNq8Xf%2FOpSgGOSqRI0WX5VXWNgeeDvNQHv1S517lS90WDBlwN3Db2ehoPLY3VUcJ63W0zkFgysN%2BmpEZvinNIcFZkyg%2B%2BCIGAFlRCdYy3%2BBHrdLwxVPEI0mu%2BpEiwuVV84EKSt8xxDU8BgpKvDawdlL%2FlrvTBa4SiS%2BFZb9ta0h%2BQSGgqr1l8BOPW%2FzLIAjVTvCqcgjh%2Bk%2FPyEAmIBqmVrFTZ1potDydByIjLD4PC5xWle%2FO%2FAa3tK25WLi1YTjbijp%2BvlYZmP8y5jmd0EHZhGYDh9pMfzcbBX4UHceHkEU5oraMNrVqcAGOqUB7BWChjIfqIhT0I31V1Bmh2t7K%2F%2FE1VRHWqaNod6cLT8RXfnH%2BjaEEw4nupm6ocUmejqC7PSzufvmzfLC5S0LdGtAtPTmL4giACbBUx6ZWFmvu0sUdikyd1EamEdE8Eestc9MznDE2TIarV3mw8%2BxxDI3ahWOygIofjRVPsNnJtstAqSs5M%2FOMKRSZCtYaSid0FzOmRXvGKjOQmXNcpdPAGYx4kCl&X-Amz-Signature=a13e1a3f30ca4ef45b48bd4bf491300aded7e08ccdb539958d4644ea2976f841&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZCWQLBX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNAic9aysGgemYKq%2Bsh6tBrNixGQ9o6NYGg8YYP%2B48bwIgE3PzPd5wVJdQsn1V8gt4rui3%2BL7Iv3dexDiE0cmNfogq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDD5hPt8kzuD%2BRhVqQyrcA8mgerXdBlOlarLlACZDOa8pHcFzLhCcE1E50tCc6%2FSTDBKrQy3fIFBnk76g%2BgPqUPXxvQnwgNXmoJJD2kPqqHAmuSZ%2FmdnCOyGPnIxm4Q2DIPjntQwTQNbS4aT8U%2F%2BxDjHAKt49wxc3C1YRKJsX6QkVx89YZ%2Bybw1NUFSF6gBdQTnvrbcxI35EklvfGtf8cVA0a0Au7m8Y8%2B5yeRZdBBhaWm8rsvLJqEgB1Rvsdysg%2B0XPHjo9bl0jlF5pbRR4PKyaxKVMhqtAAAMG1R%2FYAfIMHolB7D7%2BIvlgAqCcdRe9KZHPMiQ9BnvBI22fPuQR4%2BD71tc4Ib8mMDQNq8Xf%2FOpSgGOSqRI0WX5VXWNgeeDvNQHv1S517lS90WDBlwN3Db2ehoPLY3VUcJ63W0zkFgysN%2BmpEZvinNIcFZkyg%2B%2BCIGAFlRCdYy3%2BBHrdLwxVPEI0mu%2BpEiwuVV84EKSt8xxDU8BgpKvDawdlL%2FlrvTBa4SiS%2BFZb9ta0h%2BQSGgqr1l8BOPW%2FzLIAjVTvCqcgjh%2Bk%2FPyEAmIBqmVrFTZ1potDydByIjLD4PC5xWle%2FO%2FAa3tK25WLi1YTjbijp%2BvlYZmP8y5jmd0EHZhGYDh9pMfzcbBX4UHceHkEU5oraMNrVqcAGOqUB7BWChjIfqIhT0I31V1Bmh2t7K%2F%2FE1VRHWqaNod6cLT8RXfnH%2BjaEEw4nupm6ocUmejqC7PSzufvmzfLC5S0LdGtAtPTmL4giACbBUx6ZWFmvu0sUdikyd1EamEdE8Eestc9MznDE2TIarV3mw8%2BxxDI3ahWOygIofjRVPsNnJtstAqSs5M%2FOMKRSZCtYaSid0FzOmRXvGKjOQmXNcpdPAGYx4kCl&X-Amz-Signature=76314673c2eb4b96f1872b631ddc947c7d8a49cfc30c82258fffe2c71df4d244&X-Amz-SignedHeaders=host&x-id=GetObject)

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
