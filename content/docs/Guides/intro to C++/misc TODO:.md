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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRMUMVH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEhp1cNGQq1jOmLDtSKbniDPt%2F6rrkjGAeG2KE4z7rWsAiEA8Iur3nFIFekhcDjdppuN2YM0guX80Z9nm0yW09FbyrcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR%2B8mUmeYmWIG9ClircA6a4KwFw4AAEZp3DiEQZA4GMZQYMJRPZ4T4gwD%2BB5LC5MXaC8mF%2BDJDTxPx%2FH4JADYOxnSOZ26lQx1S39QBBDjbJTccL0bfOG9nUESq7fg12QsqIUpuZxFdsgVwxvWhFRrQo2zoGbCF0Fo9WWYEpJ1poMh2wOpAeCBYRv5Ksyxcb0TZm3jP1GsZlWMxsA8k6u004s4WmGzFECZHsR%2B4tbiY%2BNugfKFkUkRNTSvvXGJEAJUypn3vGNkxCv%2FHDr%2BlvcoDxmTmc3PkQFG79oyJPS5PLZlYdZzUXWRZbVqW5Uy5plgm2%2BaHJQwN7tLLPF8Yp34cS8SMqhjhWiNDW1i6D53eqyGzcsORa7gL5Pyy312%2FzGJDq7iiifu6YbtJxhPvd469imBhuBD6bi5czWSLhhKx1lJ81c0BjAfUhkmsVfdN3c8Ee7ivqZHSzkZobXJ%2FxWZgGjfRg%2F5CFXlr4Y0yPFEc019120rWhzoFxeh%2BYZAY4gbV%2BY00qKjPPz0RRQAE0SMY97%2FEzuXiXqi8ZKDUVclk7%2Bl4ROpKxIvU068uUCtfpkR8%2FbuoujjuOz1HtN2Y%2FXR3JJCMQMHm2rpP%2FuBEe4MeQJR9WDpeb%2FPG4hFDstGPRoOyRBpEKBpB%2B4hjTMK%2FJ08QGOqUBtwgE6xnuSgqjEHRJ6%2Fga9%2BwKG%2BuFTmGcTGgoOF3WxmV3CSA42aBrLfuro9eeFjHY8c83dmmV%2ByVWXou0zvsGKfqelPOpQSAC6HzCXbFlxiq2S0cSuLtDWDlGU%2Fj1zDfxVJytaqU83SNFx%2FokNPYYLY4FN9blSeJ4WQaaoSL94EpYCfsZF3UztiHUTPYmEMTpUirVqo%2F6SGzM4nlOT7QV4XJMyMl%2B&X-Amz-Signature=7b1d6e5796014ff51b6ae0375f5931077dde495a96234843755b247a01c4ae9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRMUMVH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEhp1cNGQq1jOmLDtSKbniDPt%2F6rrkjGAeG2KE4z7rWsAiEA8Iur3nFIFekhcDjdppuN2YM0guX80Z9nm0yW09FbyrcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR%2B8mUmeYmWIG9ClircA6a4KwFw4AAEZp3DiEQZA4GMZQYMJRPZ4T4gwD%2BB5LC5MXaC8mF%2BDJDTxPx%2FH4JADYOxnSOZ26lQx1S39QBBDjbJTccL0bfOG9nUESq7fg12QsqIUpuZxFdsgVwxvWhFRrQo2zoGbCF0Fo9WWYEpJ1poMh2wOpAeCBYRv5Ksyxcb0TZm3jP1GsZlWMxsA8k6u004s4WmGzFECZHsR%2B4tbiY%2BNugfKFkUkRNTSvvXGJEAJUypn3vGNkxCv%2FHDr%2BlvcoDxmTmc3PkQFG79oyJPS5PLZlYdZzUXWRZbVqW5Uy5plgm2%2BaHJQwN7tLLPF8Yp34cS8SMqhjhWiNDW1i6D53eqyGzcsORa7gL5Pyy312%2FzGJDq7iiifu6YbtJxhPvd469imBhuBD6bi5czWSLhhKx1lJ81c0BjAfUhkmsVfdN3c8Ee7ivqZHSzkZobXJ%2FxWZgGjfRg%2F5CFXlr4Y0yPFEc019120rWhzoFxeh%2BYZAY4gbV%2BY00qKjPPz0RRQAE0SMY97%2FEzuXiXqi8ZKDUVclk7%2Bl4ROpKxIvU068uUCtfpkR8%2FbuoujjuOz1HtN2Y%2FXR3JJCMQMHm2rpP%2FuBEe4MeQJR9WDpeb%2FPG4hFDstGPRoOyRBpEKBpB%2B4hjTMK%2FJ08QGOqUBtwgE6xnuSgqjEHRJ6%2Fga9%2BwKG%2BuFTmGcTGgoOF3WxmV3CSA42aBrLfuro9eeFjHY8c83dmmV%2ByVWXou0zvsGKfqelPOpQSAC6HzCXbFlxiq2S0cSuLtDWDlGU%2Fj1zDfxVJytaqU83SNFx%2FokNPYYLY4FN9blSeJ4WQaaoSL94EpYCfsZF3UztiHUTPYmEMTpUirVqo%2F6SGzM4nlOT7QV4XJMyMl%2B&X-Amz-Signature=2e2235f60cde4d2fca0703365ce82d678227819e58f0554f8da1b2bcf6d5ebf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
