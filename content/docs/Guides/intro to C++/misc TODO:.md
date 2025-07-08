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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW4CLYO7%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCID2PSA61S82lmB9PeM59b8Kz2E3V3D0U%2Bd5IdXXLFlFRAiAGQyqE7j7SCID7xXdhlhjtyb2el9bBat1aHjq5C66jeSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrDUDiZvRmoN2QX8oKtwDAD5fwLxzcPT%2BPFw4P5rlyky3ekOJGfzuO2ADiwHsKUlz200ieMtvLzfaaixovcQ8pADX%2F31x%2B41Mx4aDqiqdZQKH6QpI1uGWIdVPanPsshUtqLNofEZHIZ66ml0yLSHK3x5XVUbnnSAUoAMTMVtEKeguop8IlL%2FMXTXMqjn24m92QeMX8ptJMlfPvNNUEUVGfIpiok7novYT3a5%2BxOqN6pu9VHJmmtsmjLwQ4MkZEVt6sqbAMC%2Bg8l1xARXNQ2a1vg9oF1JTOJfO8dU7S7Z%2FUQoDsJQ1I1CTjjr8HijVdMvfdl3YD5nqKIipfYeyMj6hrri1hP1k6tBvYhVzMadALSHWArHwE%2FL%2BnuSgbOgU8hNG0bc483WaMhEUeTr3KZAozhjOxtCiFzkvNU%2FXdBy5OwDa7vzLhBWD4PfptpeCPzddpEJs%2Bd7cf0pFWHdIXMQddSIGIlEdHYuQ%2FLGu512Cp%2BB9Aock5XfWRqUpQtLsDrNxdJLKrr94jtMinp0oE%2FyUnJfbj0ILqFBKTVN3FZL4IVuTaZP4NOuYMsMdVJy6FN%2FhlwpnRQzo6dbZO1hs59cfoniXVbx91yCbpSQTxVC9iU2IjG1qX3Ado3rgfY4E4di%2FuJFAWDnHjWEtohcwhYSywwY6pgH7o4UFATJ8v8WsOAOSol4A%2Fi5eZBiSKKk79yhoE9dccd1dKmplWhkWqozgHBQCJNvgNH%2BXmCcPR%2FkZnSX8XGYF%2FCkWraTOP5UFV4fhe4EIrmy7UxDGkdGspoK13Qq5T%2BoRyI67FEvyDae1jKez3PoEeBPDxJjV6IfA%2Be5VgC0wRLlao14Xa0r7a7qcTgbZvFKJZgt%2FpRKOQbS4soT8HU1Q9eSaar3d&X-Amz-Signature=629266ad72fdaae53d676106d1221a8ddd743a86c87e4e143ce342b0a5bcd031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW4CLYO7%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCID2PSA61S82lmB9PeM59b8Kz2E3V3D0U%2Bd5IdXXLFlFRAiAGQyqE7j7SCID7xXdhlhjtyb2el9bBat1aHjq5C66jeSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrDUDiZvRmoN2QX8oKtwDAD5fwLxzcPT%2BPFw4P5rlyky3ekOJGfzuO2ADiwHsKUlz200ieMtvLzfaaixovcQ8pADX%2F31x%2B41Mx4aDqiqdZQKH6QpI1uGWIdVPanPsshUtqLNofEZHIZ66ml0yLSHK3x5XVUbnnSAUoAMTMVtEKeguop8IlL%2FMXTXMqjn24m92QeMX8ptJMlfPvNNUEUVGfIpiok7novYT3a5%2BxOqN6pu9VHJmmtsmjLwQ4MkZEVt6sqbAMC%2Bg8l1xARXNQ2a1vg9oF1JTOJfO8dU7S7Z%2FUQoDsJQ1I1CTjjr8HijVdMvfdl3YD5nqKIipfYeyMj6hrri1hP1k6tBvYhVzMadALSHWArHwE%2FL%2BnuSgbOgU8hNG0bc483WaMhEUeTr3KZAozhjOxtCiFzkvNU%2FXdBy5OwDa7vzLhBWD4PfptpeCPzddpEJs%2Bd7cf0pFWHdIXMQddSIGIlEdHYuQ%2FLGu512Cp%2BB9Aock5XfWRqUpQtLsDrNxdJLKrr94jtMinp0oE%2FyUnJfbj0ILqFBKTVN3FZL4IVuTaZP4NOuYMsMdVJy6FN%2FhlwpnRQzo6dbZO1hs59cfoniXVbx91yCbpSQTxVC9iU2IjG1qX3Ado3rgfY4E4di%2FuJFAWDnHjWEtohcwhYSywwY6pgH7o4UFATJ8v8WsOAOSol4A%2Fi5eZBiSKKk79yhoE9dccd1dKmplWhkWqozgHBQCJNvgNH%2BXmCcPR%2FkZnSX8XGYF%2FCkWraTOP5UFV4fhe4EIrmy7UxDGkdGspoK13Qq5T%2BoRyI67FEvyDae1jKez3PoEeBPDxJjV6IfA%2Be5VgC0wRLlao14Xa0r7a7qcTgbZvFKJZgt%2FpRKOQbS4soT8HU1Q9eSaar3d&X-Amz-Signature=149b4ce0406ab0c9b5cb75cf82a2230ac7d204ddfbc34234d773e81f360ce10d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
