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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPR5RXA2%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCID8o2wBCfUri1uJyn766LpDg37bAD60sa%2BI9bQ6bA%2Bk9AiAiebW1YKpJiKHntiobZ8GKXqbGlcTHgVbGujWmZHYDwSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUrU3AFK9iW1lAEfiKtwDcq%2BKYlFwW9ULXX%2FryPnu%2BcpnQ29dsZ1Vir6uD7L6tE0dv4IQr%2FqIr0%2FdLzIV%2B9XtZ7OtCMxDq71rdlMwUzTfbnzU4mmb3SN1cff1ldXTeNcAW9mIs6gdQodc25fBVOnyDgV7xqHe4SW9hlQmqriWY6fcAo6pTzB%2FrnpTiRzt6ScAd4WVQYTCadLS62peYZiGye%2BiuZUtSQbS2IAFIgE9%2B8xNuNsFCM7lfzaRzcsbEF9znXtcr6m9uENzHeMUSoruBSLsiRKsaaNXdrR7JBpSpuyIJIowI80sc0Ng1g%2B5bZfwFIq1rzYPsbbMjI40M42jrGkw%2FdDxDGzRrbwd7QQP2TDZm6ixDoNnY4fR3h%2B8neIIMGHi7BHa%2Bb7utNS10%2Bis%2FCsyCWcaWHkBs6EQb7RPtrfoCtKXcsr3YfeLEAjTZ1J%2F3TFFb2HBipUkLpqs7Qb73m36wDlAgKFcOaUc4lp%2B8OTUw9y0A5y86DMPYUOaeklEWQV9%2Bpzia%2BC6ESMPnT4sNQrmv1qeX6lsy4LCJZ0E2IkqLE4QjX5wNLwMrMnJfgm0vCrKBdiHwI75tAYaJL6AE0%2F2RpPbdZatMNL5kQJZMb4e%2BsLFh0yXNU291oa6mq7L2rRkejHc6Pp3dNYwn9vRvQY6pgEGHYMrBEUGIa%2F0vju9SkxRWYaZphtdePJa6TBlMLJhl5NUQk6xAwuhGyIXW2jUpL%2BOLa9AeWRyj73cBXhy1eZr4zJrcn4IVjJtxyz4j7iV7lYxleX9l2nahRoMCwqwVkevXUldSHEfMkqk%2F7gPVUzMyB8LB9GbNaCf1UOaNUhczajhuCsqcZVLJllgYzzmSmp14qMnY24Vy19xvDLIAkndNBaj61Q8&X-Amz-Signature=bb1c0dea192978ad49974cf4e92b745d0cae2e18962fa1e7572a0db9f4df3ca5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPR5RXA2%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCID8o2wBCfUri1uJyn766LpDg37bAD60sa%2BI9bQ6bA%2Bk9AiAiebW1YKpJiKHntiobZ8GKXqbGlcTHgVbGujWmZHYDwSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUrU3AFK9iW1lAEfiKtwDcq%2BKYlFwW9ULXX%2FryPnu%2BcpnQ29dsZ1Vir6uD7L6tE0dv4IQr%2FqIr0%2FdLzIV%2B9XtZ7OtCMxDq71rdlMwUzTfbnzU4mmb3SN1cff1ldXTeNcAW9mIs6gdQodc25fBVOnyDgV7xqHe4SW9hlQmqriWY6fcAo6pTzB%2FrnpTiRzt6ScAd4WVQYTCadLS62peYZiGye%2BiuZUtSQbS2IAFIgE9%2B8xNuNsFCM7lfzaRzcsbEF9znXtcr6m9uENzHeMUSoruBSLsiRKsaaNXdrR7JBpSpuyIJIowI80sc0Ng1g%2B5bZfwFIq1rzYPsbbMjI40M42jrGkw%2FdDxDGzRrbwd7QQP2TDZm6ixDoNnY4fR3h%2B8neIIMGHi7BHa%2Bb7utNS10%2Bis%2FCsyCWcaWHkBs6EQb7RPtrfoCtKXcsr3YfeLEAjTZ1J%2F3TFFb2HBipUkLpqs7Qb73m36wDlAgKFcOaUc4lp%2B8OTUw9y0A5y86DMPYUOaeklEWQV9%2Bpzia%2BC6ESMPnT4sNQrmv1qeX6lsy4LCJZ0E2IkqLE4QjX5wNLwMrMnJfgm0vCrKBdiHwI75tAYaJL6AE0%2F2RpPbdZatMNL5kQJZMb4e%2BsLFh0yXNU291oa6mq7L2rRkejHc6Pp3dNYwn9vRvQY6pgEGHYMrBEUGIa%2F0vju9SkxRWYaZphtdePJa6TBlMLJhl5NUQk6xAwuhGyIXW2jUpL%2BOLa9AeWRyj73cBXhy1eZr4zJrcn4IVjJtxyz4j7iV7lYxleX9l2nahRoMCwqwVkevXUldSHEfMkqk%2F7gPVUzMyB8LB9GbNaCf1UOaNUhczajhuCsqcZVLJllgYzzmSmp14qMnY24Vy19xvDLIAkndNBaj61Q8&X-Amz-Signature=0b34d7bb87b17aec4d2e528d4a2efeb23cc0f641ecc357f87cfa6cb58663b572&X-Amz-SignedHeaders=host&x-id=GetObject)

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
