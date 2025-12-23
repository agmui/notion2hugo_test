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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USNLP2EB%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIBp5nnZcTdEk4FfzLLT4eh4wQ6WoiUNgURNC4RpFNth1AiEA4%2BevH%2BIOFXG0I2l1AB6UmBYnmO0NacLNqCKwQsMJuYsq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDH4HXJa1xr7okSIN%2FSrcAy6%2BJo8kN5zyjTj518TYUY08IEALg9rgpeCDdkfRuGjGgohnVXDxlmiLSwRUEcZclBME8lwngyAOcfa9w8POkWb%2FkTgsuSJpoLcI%2F6Bjqi%2BmSZNEN7hGI5gP7kOGbvtfi7LY3rHxjRffPFm3Y51JhUglExixfXsSvTWvnhOhE8RhF1bJ9xFMvCh4nb4qbzaZqgULh8xr9Bj4wxgfq%2FJl3nhaB7S%2BOV7koJxXot1q9MmLdMbGZBKFAOZqjsfyfVtaar5shhLmBquQLtnCc5z7UAhX2WNflgxfxXtH417dXYNx2O21rks9M68hegrr%2BIf6KzN%2BEPxmLZkWBruyBWCE7kezoZjerDmqG2dxGHEFEBEzq52HEij5RB4cbkZHkkmyCApX8rYeZ9OPhdyhbiajWxx1SN12Km5duC7qw2eZ%2FQelmvqorqL6%2BzqMKxPVstx9paLY6SbdaXMp0kT8aap9pc0TuGTSTdatuSCmhYZFVvODGEoT35NLm%2BnoRHooqkv2UcoZfpu5g10pfLlDFQaiMVc6wXiKf8U5m0IQsiMtR1T3VFiFeI1vitSL85pjdWfddWCaJWkrE9ynhAwsNhgaD3eiq%2FYpodKITq4LYWx8Utd0GwiVolqrgKuF7nwpMPvfp8oGOqUBFe88pCV%2FGnyILJM0tGBzE2DnUlxEjb%2F4cToY%2FBeo8BSTUmu1pJ5u07krbU6LmP9FtKeLMshrPAR9O7va1S9Nwb0twxx9WUhhLDlh9YsDETXH3cLhZsulGJ7YHkQQnk8lDQh811Kvkb5aA%2FAqqtY3LFR%2F3JczBoFh8qmhAT10c621fAEz2wX3QxLQ969VtISPsf8hwADb5XKHljiLLZKLZQwnda0z&X-Amz-Signature=e5ac410c887a23372a63f8fceffc91d6a15c9caaee475339fad9d31437d4bda8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USNLP2EB%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIBp5nnZcTdEk4FfzLLT4eh4wQ6WoiUNgURNC4RpFNth1AiEA4%2BevH%2BIOFXG0I2l1AB6UmBYnmO0NacLNqCKwQsMJuYsq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDH4HXJa1xr7okSIN%2FSrcAy6%2BJo8kN5zyjTj518TYUY08IEALg9rgpeCDdkfRuGjGgohnVXDxlmiLSwRUEcZclBME8lwngyAOcfa9w8POkWb%2FkTgsuSJpoLcI%2F6Bjqi%2BmSZNEN7hGI5gP7kOGbvtfi7LY3rHxjRffPFm3Y51JhUglExixfXsSvTWvnhOhE8RhF1bJ9xFMvCh4nb4qbzaZqgULh8xr9Bj4wxgfq%2FJl3nhaB7S%2BOV7koJxXot1q9MmLdMbGZBKFAOZqjsfyfVtaar5shhLmBquQLtnCc5z7UAhX2WNflgxfxXtH417dXYNx2O21rks9M68hegrr%2BIf6KzN%2BEPxmLZkWBruyBWCE7kezoZjerDmqG2dxGHEFEBEzq52HEij5RB4cbkZHkkmyCApX8rYeZ9OPhdyhbiajWxx1SN12Km5duC7qw2eZ%2FQelmvqorqL6%2BzqMKxPVstx9paLY6SbdaXMp0kT8aap9pc0TuGTSTdatuSCmhYZFVvODGEoT35NLm%2BnoRHooqkv2UcoZfpu5g10pfLlDFQaiMVc6wXiKf8U5m0IQsiMtR1T3VFiFeI1vitSL85pjdWfddWCaJWkrE9ynhAwsNhgaD3eiq%2FYpodKITq4LYWx8Utd0GwiVolqrgKuF7nwpMPvfp8oGOqUBFe88pCV%2FGnyILJM0tGBzE2DnUlxEjb%2F4cToY%2FBeo8BSTUmu1pJ5u07krbU6LmP9FtKeLMshrPAR9O7va1S9Nwb0twxx9WUhhLDlh9YsDETXH3cLhZsulGJ7YHkQQnk8lDQh811Kvkb5aA%2FAqqtY3LFR%2F3JczBoFh8qmhAT10c621fAEz2wX3QxLQ969VtISPsf8hwADb5XKHljiLLZKLZQwnda0z&X-Amz-Signature=901e11b10e5d78fa3472ee79def29449baa8aff1e609865d3aad7f1753a0cd74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
