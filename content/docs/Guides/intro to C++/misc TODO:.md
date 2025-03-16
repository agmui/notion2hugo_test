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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFSCTVGF%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAoJV5rezdWobaJBDl%2BjKDYoCTIcHXV3plxl%2FPTZhEaAiBBLtt9eNd%2FN3tWRWTo9bHyvxZPQsxk4Cj0W8RRnUO6syr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMf8Fzr40nx1ES2nttKtwDGEmVK9hrvxpMWccgmVo4ebHOKM%2B7oECyGdeTwptt4msIwDtAFltS12rUunDRfRMkY%2F%2FrxmkyKLgSl%2BbMtyChTyWSn2Slg5wrM0Z2udCU1NYERmQDv1S1l4ThlRHIsRANDPt%2B7ZSAJGampuHab4o3oTBe438vlsf%2F8oVa8g9tbRflo7gyvzHKLqNZ2OglQXQ%2BeTJGAAMzIzj2x1IBtiC%2BOKWZ1NeWA0%2B08PHBSWLiK6ssrRveOocYM%2BF7kUFnZhnkRigVlGmLc9UuEXhZdrK93XnBKOxEBZOY1QjD7zDbNYI90vKJdxQMZyDucmLWGrPRwLYFg1JTRdkjBrEEVrnHdJ1iX%2Bvgfst3HIXhK%2Bm5u8npaPcTk7a5WITB0wsxcysTMnM8JWIIbTWeBMRD8GIgO66%2BdnGGhSmRB%2B6agwrxdgN5rvdL7ifXN0TYe2GnVNY%2Blvzqib9BC5bedMlX2oXb23KqhOIfHYIUv0Ji1PMOj7mU8AaVYFsI6RNU%2F7Sx9HuFTyhMhzQ5EOpKPvxAvTe%2FvoJdTSgfZL6OlM7QcgD2uPuadAIoC5BfydXFBsnopklELegNOxN97kIUwYPlqcba4SW4Px5ilJ1%2F3GDyM1%2BD7CW0EfzO4WZnohNO0b4wtd7bvgY6pgFvg1ZG2Mr4UzeBq3oEpx4y%2Bio9DF6Hjubs%2Fek9sFuRQ21x4VqfKNcrkDixuXniaXvEb3jQ21nrAWVS6UzW%2B%2F2Ewf%2BWaXwxkp0O65NDi3cmKUwDyusiGGqvnn7gUOTndSngAE5OAZLhy%2BdWuiUC3RkigyyTXleEVR18qmZssiTpuEpldC8k9pnKYdMBLZ5GeaQcsM%2BIP3fp9fOjeM1KYQSM36AH%2FDBD&X-Amz-Signature=96e6e69765ded9ff090a598a61232238dacf5a6d11bfbf7da028f57a363f53b8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFSCTVGF%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAoJV5rezdWobaJBDl%2BjKDYoCTIcHXV3plxl%2FPTZhEaAiBBLtt9eNd%2FN3tWRWTo9bHyvxZPQsxk4Cj0W8RRnUO6syr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMf8Fzr40nx1ES2nttKtwDGEmVK9hrvxpMWccgmVo4ebHOKM%2B7oECyGdeTwptt4msIwDtAFltS12rUunDRfRMkY%2F%2FrxmkyKLgSl%2BbMtyChTyWSn2Slg5wrM0Z2udCU1NYERmQDv1S1l4ThlRHIsRANDPt%2B7ZSAJGampuHab4o3oTBe438vlsf%2F8oVa8g9tbRflo7gyvzHKLqNZ2OglQXQ%2BeTJGAAMzIzj2x1IBtiC%2BOKWZ1NeWA0%2B08PHBSWLiK6ssrRveOocYM%2BF7kUFnZhnkRigVlGmLc9UuEXhZdrK93XnBKOxEBZOY1QjD7zDbNYI90vKJdxQMZyDucmLWGrPRwLYFg1JTRdkjBrEEVrnHdJ1iX%2Bvgfst3HIXhK%2Bm5u8npaPcTk7a5WITB0wsxcysTMnM8JWIIbTWeBMRD8GIgO66%2BdnGGhSmRB%2B6agwrxdgN5rvdL7ifXN0TYe2GnVNY%2Blvzqib9BC5bedMlX2oXb23KqhOIfHYIUv0Ji1PMOj7mU8AaVYFsI6RNU%2F7Sx9HuFTyhMhzQ5EOpKPvxAvTe%2FvoJdTSgfZL6OlM7QcgD2uPuadAIoC5BfydXFBsnopklELegNOxN97kIUwYPlqcba4SW4Px5ilJ1%2F3GDyM1%2BD7CW0EfzO4WZnohNO0b4wtd7bvgY6pgFvg1ZG2Mr4UzeBq3oEpx4y%2Bio9DF6Hjubs%2Fek9sFuRQ21x4VqfKNcrkDixuXniaXvEb3jQ21nrAWVS6UzW%2B%2F2Ewf%2BWaXwxkp0O65NDi3cmKUwDyusiGGqvnn7gUOTndSngAE5OAZLhy%2BdWuiUC3RkigyyTXleEVR18qmZssiTpuEpldC8k9pnKYdMBLZ5GeaQcsM%2BIP3fp9fOjeM1KYQSM36AH%2FDBD&X-Amz-Signature=7b5c5a156238463b0b5cb562ad9772e686bef0974978fb154154b131a9b9fd43&X-Amz-SignedHeaders=host&x-id=GetObject)

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
