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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOOWLRTA%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPO79BCNggJ4VuMhC3TD5qxCX5em16Gn4sFoWIOK7LawIhALbkE3aT2jYA362NDvwY%2Be2dAcNLh%2BN5izTHOwBMYDG1Kv8DCDQQABoMNjM3NDIzMTgzODA1IgwIO3IlWefmGuj1wCwq3AMZDqHV63pCjHH2Oj7puumCbqWDtxU4YQnUZ9zorkFw5f9%2FU91%2BrTMJnDQ44HcjUTT0APtl89Mcba4WnzLGg%2FFX%2FMrONtjaGCUKEckgj0QwyoAEqE6tR2Ve31NC%2Bix3c4LDNOHXcY%2BiystFCmboUb8eyr31LBrPsNz1ru7tJyMvDm95xOTRFvMEsAjpxthH%2F0S9zSUQd4wGoKtTTFnd1QdG0m02xVANKH9FUdXFktj2ttiVifnBXixM%2FaVPVGs5CeR%2ByKcgxC6xwFeWT859iqsbfKZL2mDz1r7VmDT3hDR%2FYY%2BfZlIxIFmsRG4%2Bzah1ftJXvoF%2BUosqdIjZVuyk%2BHjy5ZEwmT5xqGRwd0Y1tdGvWcAdsfSjVY6k25V4ZKc2lbLOBv%2BE%2Bl0vv0%2BaXaNn0YMW32nweQiXI%2BOEHgAlGsGisOrkPlTROmxWgce5z8g8IOknOuHu7q5Td0kOzhgJCDHaO4PkC6GU7gvP94WKQh5i4mZNxeZ4i9155fy7MefA1aQM%2Bqet%2B7hcl%2BK7JykIIRL6h0SkVNhHC4GmaP3%2FUxwSP%2B6tTAI6Gq144AmOjhESxlDZVMGt3kbWkiLeKw90rTNbVGgNz897o27IoHGiF%2FV6l5RXQbdC75Ab6OyBzTCJ1vq%2FBjqkAbQsJiPYRPVb2FrMSDhCq1d%2BobiDksZmea8Dphh5VSzolqh3pLva8dw39ogGHQJtaAzfRMk2E0iQGMQos9e47xoO9Nu%2FPnh08KpiP8rC8EgB6R%2BgGcRw%2Bnk5uuQKXphyt4gHkcyHDBnotwJI%2Fuq2FOtdtNvf5Z%2FR%2BlhqhiaXMEoGdbgu0LwcM2tkE%2BVZA8coWWJJSEKGLLyDAZQAQdJN6NO9knOO&X-Amz-Signature=e28a9498ad53c973c40ed205abc3a55a532ed2730c22d3afce791a28e837a35b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOOWLRTA%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPO79BCNggJ4VuMhC3TD5qxCX5em16Gn4sFoWIOK7LawIhALbkE3aT2jYA362NDvwY%2Be2dAcNLh%2BN5izTHOwBMYDG1Kv8DCDQQABoMNjM3NDIzMTgzODA1IgwIO3IlWefmGuj1wCwq3AMZDqHV63pCjHH2Oj7puumCbqWDtxU4YQnUZ9zorkFw5f9%2FU91%2BrTMJnDQ44HcjUTT0APtl89Mcba4WnzLGg%2FFX%2FMrONtjaGCUKEckgj0QwyoAEqE6tR2Ve31NC%2Bix3c4LDNOHXcY%2BiystFCmboUb8eyr31LBrPsNz1ru7tJyMvDm95xOTRFvMEsAjpxthH%2F0S9zSUQd4wGoKtTTFnd1QdG0m02xVANKH9FUdXFktj2ttiVifnBXixM%2FaVPVGs5CeR%2ByKcgxC6xwFeWT859iqsbfKZL2mDz1r7VmDT3hDR%2FYY%2BfZlIxIFmsRG4%2Bzah1ftJXvoF%2BUosqdIjZVuyk%2BHjy5ZEwmT5xqGRwd0Y1tdGvWcAdsfSjVY6k25V4ZKc2lbLOBv%2BE%2Bl0vv0%2BaXaNn0YMW32nweQiXI%2BOEHgAlGsGisOrkPlTROmxWgce5z8g8IOknOuHu7q5Td0kOzhgJCDHaO4PkC6GU7gvP94WKQh5i4mZNxeZ4i9155fy7MefA1aQM%2Bqet%2B7hcl%2BK7JykIIRL6h0SkVNhHC4GmaP3%2FUxwSP%2B6tTAI6Gq144AmOjhESxlDZVMGt3kbWkiLeKw90rTNbVGgNz897o27IoHGiF%2FV6l5RXQbdC75Ab6OyBzTCJ1vq%2FBjqkAbQsJiPYRPVb2FrMSDhCq1d%2BobiDksZmea8Dphh5VSzolqh3pLva8dw39ogGHQJtaAzfRMk2E0iQGMQos9e47xoO9Nu%2FPnh08KpiP8rC8EgB6R%2BgGcRw%2Bnk5uuQKXphyt4gHkcyHDBnotwJI%2Fuq2FOtdtNvf5Z%2FR%2BlhqhiaXMEoGdbgu0LwcM2tkE%2BVZA8coWWJJSEKGLLyDAZQAQdJN6NO9knOO&X-Amz-Signature=45985dc58c19a48b7e491c9910e0c2443bd7e129198c4950b98a1f1c6dac72ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
