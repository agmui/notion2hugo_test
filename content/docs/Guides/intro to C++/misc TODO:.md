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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634Z3PDE3%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIG0YHAVPwnoyL0E0QTrMYosHqLP3iGXkqODj3y0TRLzEAiBL1rLm6MrKpilKi8SIwAYTwQxIY8SCD0HpcsHsgZ3cuSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM2Pyt2TJGWr1a35YjKtwDhPQg2e408OGX%2FdVjes7q0Zy%2FgVkHKG4WRDU7Br2DZ%2FztcE%2BeE7dUY57VJFnfwkEaPelASWHUipaESiLFciavXglXzxNjDRAkxeQKNSX%2B50jh%2BLFKlxR65NoZw5mNvKCbWFTmkBSavscwePMjI7ty4oluOYZ3dSGAbbiCnQCM%2FIE7bZoPPAyt5aUKqTQXkvJouHULaFC7wraUm6W9d94YCzwC5JxuCifjIqs3ukQ%2FfBdmT2UZBtvefuZlaIoUD9fLOw%2FDh%2B6ACh8ujBdfh%2F3XVVXOfUp3TviQWdXq5nTAA%2BO%2FWc1INNvFEoNL%2B4WWCD3TSBnCFpstr2m3NLu%2FjQDiFa1U0EA%2FzS%2F6sEfmDlgUmc1EQwaaQTgxIub2wIWce57UmU46X30QKXPbI9NcZQdu6bIGH6abE60F3661wYcqFmC7YNYIg2h2I7qudgAdM%2B0bx0My6NdkWEGQM9JT%2BNRbHSocMq5zTcsTJ9auG9SepLRJmvOpOepsbZK4TM6iJM%2FBSsf%2Fdmrpi%2BDIOpwyx5IKJUoszV3H5lGAUnX4bTdWUjl6nyQUUt4PGf9Zev3KSH3TSAOMEQwpBujbXtPKXaRXkLYibZjrbVKTTzCkCH3VbKI4AbUUYUWrQYK4eWAwqMaevwY6pgHBsdpIgIpEKr7kvvOfepTntog%2Fsz3gT%2Byetvf%2FdJkMoOIAHA5p%2BRCUR21r5N6LdtymePYxQrLrutAiDSG3vnfosxcMtYFAWTG8geOd7s40quN56%2F0Vs831sWlT4DfZ43AWrotE1zvgb%2BVMOMavyhYvy6fr8O5ekkc59hvhjsGYJq1YV7pYFY3XnRNu0vLMM%2FCJH9rKIRL3%2FTc70xUL%2Fg82vRRmDCh3&X-Amz-Signature=4775a6f4282ef4a1ffc72db2e7956d83103f96265a108e0757e9ff958469036c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634Z3PDE3%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIG0YHAVPwnoyL0E0QTrMYosHqLP3iGXkqODj3y0TRLzEAiBL1rLm6MrKpilKi8SIwAYTwQxIY8SCD0HpcsHsgZ3cuSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM2Pyt2TJGWr1a35YjKtwDhPQg2e408OGX%2FdVjes7q0Zy%2FgVkHKG4WRDU7Br2DZ%2FztcE%2BeE7dUY57VJFnfwkEaPelASWHUipaESiLFciavXglXzxNjDRAkxeQKNSX%2B50jh%2BLFKlxR65NoZw5mNvKCbWFTmkBSavscwePMjI7ty4oluOYZ3dSGAbbiCnQCM%2FIE7bZoPPAyt5aUKqTQXkvJouHULaFC7wraUm6W9d94YCzwC5JxuCifjIqs3ukQ%2FfBdmT2UZBtvefuZlaIoUD9fLOw%2FDh%2B6ACh8ujBdfh%2F3XVVXOfUp3TviQWdXq5nTAA%2BO%2FWc1INNvFEoNL%2B4WWCD3TSBnCFpstr2m3NLu%2FjQDiFa1U0EA%2FzS%2F6sEfmDlgUmc1EQwaaQTgxIub2wIWce57UmU46X30QKXPbI9NcZQdu6bIGH6abE60F3661wYcqFmC7YNYIg2h2I7qudgAdM%2B0bx0My6NdkWEGQM9JT%2BNRbHSocMq5zTcsTJ9auG9SepLRJmvOpOepsbZK4TM6iJM%2FBSsf%2Fdmrpi%2BDIOpwyx5IKJUoszV3H5lGAUnX4bTdWUjl6nyQUUt4PGf9Zev3KSH3TSAOMEQwpBujbXtPKXaRXkLYibZjrbVKTTzCkCH3VbKI4AbUUYUWrQYK4eWAwqMaevwY6pgHBsdpIgIpEKr7kvvOfepTntog%2Fsz3gT%2Byetvf%2FdJkMoOIAHA5p%2BRCUR21r5N6LdtymePYxQrLrutAiDSG3vnfosxcMtYFAWTG8geOd7s40quN56%2F0Vs831sWlT4DfZ43AWrotE1zvgb%2BVMOMavyhYvy6fr8O5ekkc59hvhjsGYJq1YV7pYFY3XnRNu0vLMM%2FCJH9rKIRL3%2FTc70xUL%2Fg82vRRmDCh3&X-Amz-Signature=7a81ce2e12252364c6998dc1e4368426574662d03e5bd950110e44bba3c6c067&X-Amz-SignedHeaders=host&x-id=GetObject)

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
