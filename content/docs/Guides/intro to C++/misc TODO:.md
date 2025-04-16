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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WLDTTB5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9z3g58pcFTqgCosh5TgrNKD8blGhY8VqvskNZn%2Ff%2B%2FAiBgHjToHnQi5CWjtvNNaoG%2FhoUabYO0WOFR9d8wLqn%2BoSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMr4CTF7g4vSJB4rdmKtwDVcpgX3eUfJJTgCHQqNtiU27J3MFg%2FP8gt7JL6w0Mh3HRZnBixtqRh9gLF4CzNHm3BqePe62aiheKXBJEgBsQxZHihBLQwHXU2Ees7aA0Rt8vCBFeZrZ0mBBRNZ%2BnRVKkb9PueDR3E0Emgeuz%2BG0M46OkK03VA32ozOpsHBpfGu1NVqKZBd5Wfduh8QidwfSAXEJ7qoxBUA5bi%2FJ1J2JgBT%2FBPqnl%2BflYEOE4K%2FiGBgqQVZF3zDGSUxejri0tgaO6dHh93XmkLIlkAGWAj%2F17eis5VmTkfkW%2Fv2VQWJha2A14nOuwfaSrFr2i5XN%2BNLpsjq3d49eelMLsn9Be57IXSiTy60rgzr%2FI3iiZ9cxbD21vjzzFTN%2BIVsVpB5dMXNBfqp7IrisSGxfc4WBZiu0ZeW51NgiL8mB5NXKJbmA9I%2FiP5Lcl9Y6pfvd4aLRVYDsYowtPQtu5uLGsSJ1Jhj1EbFdhJ7CIulT002PjySq%2FFk1Z%2F5%2Fsi9k26I4Xu2Cp%2BD2t4egwerN2y5h3Sj547tFttDZKYbPWx0%2BVXQFsKKbrGrwgfZr0c8OyI3xHgVEKR8VI7T4LNdifjQ8EWAUtzIuiN9U72F5OuPHs%2FpHKIKGPkhEM4jnxvEytATdFxAcw2aP9vwY6pgGRHKN9Z%2FV0kscv6AfDRbWM8GkCVHfe4P3dxzZlX7hZyuIAF5QZwN3GSFt30YE6T81RB0Q2Q%2FRSb9YVj2Dgu1veojJVp92L%2BxH1piHPB6AQcL0716F4jCg%2FKWkyobnLquL7aeD7D79qTfimy%2FO3F6YsfiK%2B8aaivgLBemKnj07H1R1YffkWWRm3LANgBLvg0pecntuoFdvSALj8lw8rtlMrnkmDmfVk&X-Amz-Signature=11de342445ab19beec290f5bb652ca17b53ec9ea9656f2601582893853d6b9f5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WLDTTB5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9z3g58pcFTqgCosh5TgrNKD8blGhY8VqvskNZn%2Ff%2B%2FAiBgHjToHnQi5CWjtvNNaoG%2FhoUabYO0WOFR9d8wLqn%2BoSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMr4CTF7g4vSJB4rdmKtwDVcpgX3eUfJJTgCHQqNtiU27J3MFg%2FP8gt7JL6w0Mh3HRZnBixtqRh9gLF4CzNHm3BqePe62aiheKXBJEgBsQxZHihBLQwHXU2Ees7aA0Rt8vCBFeZrZ0mBBRNZ%2BnRVKkb9PueDR3E0Emgeuz%2BG0M46OkK03VA32ozOpsHBpfGu1NVqKZBd5Wfduh8QidwfSAXEJ7qoxBUA5bi%2FJ1J2JgBT%2FBPqnl%2BflYEOE4K%2FiGBgqQVZF3zDGSUxejri0tgaO6dHh93XmkLIlkAGWAj%2F17eis5VmTkfkW%2Fv2VQWJha2A14nOuwfaSrFr2i5XN%2BNLpsjq3d49eelMLsn9Be57IXSiTy60rgzr%2FI3iiZ9cxbD21vjzzFTN%2BIVsVpB5dMXNBfqp7IrisSGxfc4WBZiu0ZeW51NgiL8mB5NXKJbmA9I%2FiP5Lcl9Y6pfvd4aLRVYDsYowtPQtu5uLGsSJ1Jhj1EbFdhJ7CIulT002PjySq%2FFk1Z%2F5%2Fsi9k26I4Xu2Cp%2BD2t4egwerN2y5h3Sj547tFttDZKYbPWx0%2BVXQFsKKbrGrwgfZr0c8OyI3xHgVEKR8VI7T4LNdifjQ8EWAUtzIuiN9U72F5OuPHs%2FpHKIKGPkhEM4jnxvEytATdFxAcw2aP9vwY6pgGRHKN9Z%2FV0kscv6AfDRbWM8GkCVHfe4P3dxzZlX7hZyuIAF5QZwN3GSFt30YE6T81RB0Q2Q%2FRSb9YVj2Dgu1veojJVp92L%2BxH1piHPB6AQcL0716F4jCg%2FKWkyobnLquL7aeD7D79qTfimy%2FO3F6YsfiK%2B8aaivgLBemKnj07H1R1YffkWWRm3LANgBLvg0pecntuoFdvSALj8lw8rtlMrnkmDmfVk&X-Amz-Signature=59c6408eb780753cb469a364467bc497801e28b2c79f78c34d4c479f8fce2655&X-Amz-SignedHeaders=host&x-id=GetObject)

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
