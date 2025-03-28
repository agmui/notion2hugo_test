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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOUB2H3N%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlKqzhqy0txU9r1y6xyqVpkc4sCXpk%2FvN8Oi5touXs9QIhAPxPpujVm7IpYLZ5vtTvEWsq6hEMro1Vnkup%2Bl2xNkStKv8DCFYQABoMNjM3NDIzMTgzODA1IgztKft0%2FzCmXSCkFksq3AN76hbnPn3u7ykS5RSMt%2BPCRR6YyOG%2BmgDx9%2FQVtzd5TbIPm3IJyjrgC70%2BwV5ZvIl8%2BBG%2BOSAc9KULnmwul8aI4hacS3w9KAYrelwD6VMs4haj2CoQj%2F%2F81pGEB2x6AiVOeuLuKGz8EQvouGdvOEF%2FNpS4631QIyi%2FLkqixBVxLqMS%2F4h7h4X%2BO6M4xpyVfPYny7u7SHeLH1nILZRKNonYmYN2v3XzWiN41OP0ZnALTTRduyFEkzkTThyBENZbRxRAM7V5bHwORePYR6ZobPEu7RE55J%2Fk0zMLU3dErwqL449NSJIqz3JGVo55C3kwtxXx4Tjb1peikfuP6gIKsh3nNQiBRDqRkmckHtVZhqr17EGdP5LFhknsNsOP28HG73E1LwB0w2VJb27KmpB3C%2FSI8jKXxTwor5HHtnmTCBwMNXDejM%2BKOR54cH87UN9zsMsvZ%2FEtYcTtOtsa2m6QPWg6CMu7ARemfsxOqIn4cdvSg4dpld81hO5Uq99FY9VhP42NqDI5BbESLZggFmBnWcgUAoUVnOS%2BDQkjA1PIsQ6tYZjH%2FwDPgcHzvImQ6FztDkmYl1DgrZXauUEe%2BRNss3246qseer%2FJTm8H38Q7p7g6FpFfhqhvaPfqZeFcfDC7zJi%2FBjqkAb8J2fgtuOSQGVbv7BOxKMetyBxCCt2ZpWnnhhsre%2F5KAMDVyF4vvyki2wmMk%2BCtWZpZ96gG6jMwNi%2FRenH%2BmV8RaucvIVOPE7ZFLrIhQQQIzsRBlTH8QMX%2FCB03mXzhzfRBDyg5YOUd7JOOdCV9G%2BTNPN56ii%2BzmToyCY8dFUCS%2Brkiq9k%2FI8oiSvkS8xksdmR9OSVpwBPMeoUB395vaVl7r2ig&X-Amz-Signature=c6dbf6146e79804accab58ac17e7159c28b69c54686a7d5f724f6f0050525da6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOUB2H3N%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlKqzhqy0txU9r1y6xyqVpkc4sCXpk%2FvN8Oi5touXs9QIhAPxPpujVm7IpYLZ5vtTvEWsq6hEMro1Vnkup%2Bl2xNkStKv8DCFYQABoMNjM3NDIzMTgzODA1IgztKft0%2FzCmXSCkFksq3AN76hbnPn3u7ykS5RSMt%2BPCRR6YyOG%2BmgDx9%2FQVtzd5TbIPm3IJyjrgC70%2BwV5ZvIl8%2BBG%2BOSAc9KULnmwul8aI4hacS3w9KAYrelwD6VMs4haj2CoQj%2F%2F81pGEB2x6AiVOeuLuKGz8EQvouGdvOEF%2FNpS4631QIyi%2FLkqixBVxLqMS%2F4h7h4X%2BO6M4xpyVfPYny7u7SHeLH1nILZRKNonYmYN2v3XzWiN41OP0ZnALTTRduyFEkzkTThyBENZbRxRAM7V5bHwORePYR6ZobPEu7RE55J%2Fk0zMLU3dErwqL449NSJIqz3JGVo55C3kwtxXx4Tjb1peikfuP6gIKsh3nNQiBRDqRkmckHtVZhqr17EGdP5LFhknsNsOP28HG73E1LwB0w2VJb27KmpB3C%2FSI8jKXxTwor5HHtnmTCBwMNXDejM%2BKOR54cH87UN9zsMsvZ%2FEtYcTtOtsa2m6QPWg6CMu7ARemfsxOqIn4cdvSg4dpld81hO5Uq99FY9VhP42NqDI5BbESLZggFmBnWcgUAoUVnOS%2BDQkjA1PIsQ6tYZjH%2FwDPgcHzvImQ6FztDkmYl1DgrZXauUEe%2BRNss3246qseer%2FJTm8H38Q7p7g6FpFfhqhvaPfqZeFcfDC7zJi%2FBjqkAb8J2fgtuOSQGVbv7BOxKMetyBxCCt2ZpWnnhhsre%2F5KAMDVyF4vvyki2wmMk%2BCtWZpZ96gG6jMwNi%2FRenH%2BmV8RaucvIVOPE7ZFLrIhQQQIzsRBlTH8QMX%2FCB03mXzhzfRBDyg5YOUd7JOOdCV9G%2BTNPN56ii%2BzmToyCY8dFUCS%2Brkiq9k%2FI8oiSvkS8xksdmR9OSVpwBPMeoUB395vaVl7r2ig&X-Amz-Signature=8f4b27960bf80ff1409ae23f6f5280afd514a014a6a24a836afad25abeb6590a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
