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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CXURGYS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbU5v7dD3CzvYD2bSZEEqNKM7DVvU5U05AnqjBQWRGDAiBvcTUt%2F4A2LhFxKt%2FbW%2BPaB1cr34Nl7ireS%2F%2F0au5NqCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMu%2FBrLreNb2Y91jtgKtwDfgJguRUxfHAWhQdYozcYvgdOnmbO5O7f7t8DplxLD26yR1FA%2Fbtri8EfkdFftea5S8bByRymx5Eiy0umSnfgSuezLiLBYryAL3%2B0qCUolppy2unBMq13yRF01PPm0mHKXOnKpgG41UlN6pHXklRZwd9CS3Y5IcJCbt%2BMTSPAZ%2Fgv1wIwbHqHLjKN3K7M%2FkXg1fj4fmHAcd8z9h1BWuQBM4cKGMdMpnFrOu0gQxBRnw78uF7RpJ%2BiLTJFkUKf7g%2F9%2Fh19rERvsmV7vb7vOPfpC8I8ND5LO%2BIXE9nXK%2B%2FoBFDXf%2FWhKYC%2FMDBqKM1PBFCUClcSNodRxQs2i4PrGT40ACrNc%2B4ed6%2FrEAYDRICW8LPVxWqATaVXx9UNbY0Mfsy0xC%2B0CrThYLq8ypvs41dryik%2BvBu%2BFkjmQtWTejrpV4hQH4wz2KcWDTIrdf05HxTkk%2FG8SnI4lXJS9xAp3zOW7o%2Be8rO4cFWrhkavBOHiAr%2Bl3MjozBH3EXxV26Cl4QP2FbWrgknAcn8u20HApS%2Bam3qSIjWEDWMwrwgCEH96i%2FeuLlAUL29kTQ%2FvGS4piEJasN4I88JeDOyvyrSMBfMtVFNEAX%2FqhF5PA%2FfJ9nezYrBtB680s6bYtBvLojow7OPDvwY6pgHuW1p8i1Bz3CkyQE09YIYr8fATwug4MszLegRi0yUcYxNUqUOKAY4Jm9DkiuBQyX51OAKfh1B3fAVqloB8f%2F4jT774mpmaJBXQbRBRgilLp6OFXQHLBG%2FJD%2FoNvxMkdALYIIzOjdQdAshi9%2F%2FyQk8KHbWoN9ey%2BFgN9mFAsR8mGdthts7QCcUlWOr%2BdGjnIrw1wqqJ8gIwDINgRzoXKwuAs1UGCv1m&X-Amz-Signature=359b1f3e2648ce4058733d75b2caed4907ebbd5a7586e67e501d2d18c794f11e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CXURGYS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbU5v7dD3CzvYD2bSZEEqNKM7DVvU5U05AnqjBQWRGDAiBvcTUt%2F4A2LhFxKt%2FbW%2BPaB1cr34Nl7ireS%2F%2F0au5NqCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMu%2FBrLreNb2Y91jtgKtwDfgJguRUxfHAWhQdYozcYvgdOnmbO5O7f7t8DplxLD26yR1FA%2Fbtri8EfkdFftea5S8bByRymx5Eiy0umSnfgSuezLiLBYryAL3%2B0qCUolppy2unBMq13yRF01PPm0mHKXOnKpgG41UlN6pHXklRZwd9CS3Y5IcJCbt%2BMTSPAZ%2Fgv1wIwbHqHLjKN3K7M%2FkXg1fj4fmHAcd8z9h1BWuQBM4cKGMdMpnFrOu0gQxBRnw78uF7RpJ%2BiLTJFkUKf7g%2F9%2Fh19rERvsmV7vb7vOPfpC8I8ND5LO%2BIXE9nXK%2B%2FoBFDXf%2FWhKYC%2FMDBqKM1PBFCUClcSNodRxQs2i4PrGT40ACrNc%2B4ed6%2FrEAYDRICW8LPVxWqATaVXx9UNbY0Mfsy0xC%2B0CrThYLq8ypvs41dryik%2BvBu%2BFkjmQtWTejrpV4hQH4wz2KcWDTIrdf05HxTkk%2FG8SnI4lXJS9xAp3zOW7o%2Be8rO4cFWrhkavBOHiAr%2Bl3MjozBH3EXxV26Cl4QP2FbWrgknAcn8u20HApS%2Bam3qSIjWEDWMwrwgCEH96i%2FeuLlAUL29kTQ%2FvGS4piEJasN4I88JeDOyvyrSMBfMtVFNEAX%2FqhF5PA%2FfJ9nezYrBtB680s6bYtBvLojow7OPDvwY6pgHuW1p8i1Bz3CkyQE09YIYr8fATwug4MszLegRi0yUcYxNUqUOKAY4Jm9DkiuBQyX51OAKfh1B3fAVqloB8f%2F4jT774mpmaJBXQbRBRgilLp6OFXQHLBG%2FJD%2FoNvxMkdALYIIzOjdQdAshi9%2F%2FyQk8KHbWoN9ey%2BFgN9mFAsR8mGdthts7QCcUlWOr%2BdGjnIrw1wqqJ8gIwDINgRzoXKwuAs1UGCv1m&X-Amz-Signature=801f3f83b53bb0c62aba2ef63e06a276fadbee1bbcb5b0c441b8b46c1aa53938&X-Amz-SignedHeaders=host&x-id=GetObject)

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
