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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST4PMU54%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDH%2FVeava63fg0hKO8p9%2BcGvb8g8YZJ9mDpn9Oy71PL0AiBVw8J%2BrBRtvhnR9MZdoQrq4WxkSqBP6R8knPwFKOlmFCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMlUQ4MJdrUJegp3sdKtwDefR1hePnBcFCLzr7HfKzt6uuoQMtACS46rjGQTIiV9us5Gr467CBEQj39vJ%2BXOixw6gGIlwfgK2TI7mIvHlhZYveZGgA6%2Fz9lRY%2BuRHOiC3qsMkoOZ9YCnYpzdkOtJy%2FKc34KotbmX5EBvSTocfNOJTpUoQ1dU6EZhegptLBG8APqxkce07TlN6kDWcTask%2FRMWbQShDSReZlZygWXoVdrdTPRWy16RcLnj8zZyaWg%2BflXzjGztI4qyj5il%2Bvcj7JVZBmSud1q6vyG%2FN45%2FKz%2F1jU9olRz15pJN3jONssRnPKXjqhs%2FrPA5BdhZVlqnpRKW8nSdqzG8DDiSMKefLSdjA0dExK1MyFGdctV20ce4uSTzxrd3fKi%2BAAX%2F5Y0d5UmHB3J2iHyUCeOPHg0Df0tPBIuBCZSyiRwzLqqLWQUqPCBmj%2Fc6wYK2r%2FHuOfRPof0D4v2gEjWC9XFXshlm%2Foae0VS23h9Xf1Z%2FQ2hPVuNbxx6ZmqYsIsYr5XUTA1EEEqM2ujljQnVPLz3hYMpUdkwnkpT7jVsqrvq4IBqrt0pb10Ye4OHqht4pHV8Grt%2B%2FeZZG4Vy17OqCJdeKXPpabqD2Giz4NexrfCn8SL%2BbayAD09jS%2FcpnAH2B%2Fe5ow0o3XvgY6pgHvuXeTRiYUFKFmMCewnSAhlVB8j%2F2QTLYacVWtFXhfYTtEsKwLiHoOJxqLNT9mH2p7jJK052o1Qzwla2fr2HIoiDrNyDDGI%2FTCG4K%2B4hvgPGhxnU1QfElgpPjIOJJkriYIyYnN97%2FUkW6OokYrHQ%2B4lImbTwpSirxQ8kj%2BfrMu3R2OLFTqgMj55WYVf4uqjOGYn5d4dNrYoPulDS0buJ2tEcYH30rW&X-Amz-Signature=8abaa8c0fb07898eb54758cc43247d3f89d704ca2f640f6c8fa7d07d91e4f9ce&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST4PMU54%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDH%2FVeava63fg0hKO8p9%2BcGvb8g8YZJ9mDpn9Oy71PL0AiBVw8J%2BrBRtvhnR9MZdoQrq4WxkSqBP6R8knPwFKOlmFCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMlUQ4MJdrUJegp3sdKtwDefR1hePnBcFCLzr7HfKzt6uuoQMtACS46rjGQTIiV9us5Gr467CBEQj39vJ%2BXOixw6gGIlwfgK2TI7mIvHlhZYveZGgA6%2Fz9lRY%2BuRHOiC3qsMkoOZ9YCnYpzdkOtJy%2FKc34KotbmX5EBvSTocfNOJTpUoQ1dU6EZhegptLBG8APqxkce07TlN6kDWcTask%2FRMWbQShDSReZlZygWXoVdrdTPRWy16RcLnj8zZyaWg%2BflXzjGztI4qyj5il%2Bvcj7JVZBmSud1q6vyG%2FN45%2FKz%2F1jU9olRz15pJN3jONssRnPKXjqhs%2FrPA5BdhZVlqnpRKW8nSdqzG8DDiSMKefLSdjA0dExK1MyFGdctV20ce4uSTzxrd3fKi%2BAAX%2F5Y0d5UmHB3J2iHyUCeOPHg0Df0tPBIuBCZSyiRwzLqqLWQUqPCBmj%2Fc6wYK2r%2FHuOfRPof0D4v2gEjWC9XFXshlm%2Foae0VS23h9Xf1Z%2FQ2hPVuNbxx6ZmqYsIsYr5XUTA1EEEqM2ujljQnVPLz3hYMpUdkwnkpT7jVsqrvq4IBqrt0pb10Ye4OHqht4pHV8Grt%2B%2FeZZG4Vy17OqCJdeKXPpabqD2Giz4NexrfCn8SL%2BbayAD09jS%2FcpnAH2B%2Fe5ow0o3XvgY6pgHvuXeTRiYUFKFmMCewnSAhlVB8j%2F2QTLYacVWtFXhfYTtEsKwLiHoOJxqLNT9mH2p7jJK052o1Qzwla2fr2HIoiDrNyDDGI%2FTCG4K%2B4hvgPGhxnU1QfElgpPjIOJJkriYIyYnN97%2FUkW6OokYrHQ%2B4lImbTwpSirxQ8kj%2BfrMu3R2OLFTqgMj55WYVf4uqjOGYn5d4dNrYoPulDS0buJ2tEcYH30rW&X-Amz-Signature=0451dbfce88128d0bafb541981d7882442145c5e7ce2181a4cc3ca31a0dd0a49&X-Amz-SignedHeaders=host&x-id=GetObject)

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
