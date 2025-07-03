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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPRRC7UM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDPQTMPLGbloUb9U9yFYlSqGbAYmFAvOiG2ryk3ivXlIQIgEIkgP5o1WlnkTVF0UMGXSpDibseJNriQYhD63Tir3UsqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRCx3A36o2jdXxt7yrcA1W%2BDIdlEnW21lCWVQK9CnvvjSz3f3ssOuV%2FqYN6EBGX2pnfnKpX6UYsCfl4yp1OrTvjDxi7PQpzdCIBSXwFTzcdBbLD5gybMPHtvufYHK7DMr%2BjOCkXCraxpFPk4mp5JCDgNCI8nzsp775GyOPzxZPMHjSS4pZlXCil5CJ4h49sorYXdAxfK0iWpyCw1M0cwfqk2Mj7HYEDe4eEj78jRZSmve2Q4uBckXnpioC3x0fVEwPppOqpfaVxhAttfxE1p4YhZKMjxfTPPGB8o7gPAJkLtzfQzh%2FNmzrGdAJZ2EVt%2B57He8aSYVFyIxCcwyFcl%2Ftyf5E1SoF288VU7xpK2Uv7H3sy4kgDlaTk9c9C5DbQ%2BBP1AktRrafkU99ieH2ZYn%2F74T7FQilANVZTHDGKZ5DKr0kZfhm%2Bn4s2banCUmdYM5xCwwVWExf%2Bm9kX3LEJKalgkmiqAHXv9TblF7ldpP4TPRStciOle1xvAlkjMYnGGESh2JJsRIzLzpiJ9FiuRUfAAlTOxhHJS72VjjbHsZQg0Lc2RWUpL5fdLJruQOrRtjxxQ3Fc9IK1hsXBPiDdwSa429rFbO7KfNMSEnQDJJ3%2BN72%2BmomLlK3ZY33%2BN4N%2BVI8Fr7osnlwH0tANMK6HmMMGOqUBQD3ipfIrzU73kVl5k4zGFjRuiJnTNAZgx4lFcFCpI%2BS0ogcDoWuWxGAVf1jOe93iB2w6Zq4MJfFHdIPYPW55SU%2BG89RyEru5jOC7Elzzg7tzv1jCKfNs4gInP%2BtiVwd2702LOVi8hUUssKN5EjjS38IknzexKl%2F%2BGotgTiYe30g5ySy9NSzLnFsQ%2FgB6hNR4LM6ezI6PgCKdOho8CZnMtZVxMbr8&X-Amz-Signature=21b9288dd3bc1ea5e4df5b719750953e3a11fdfdc292f02420244a90cc3b3367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPRRC7UM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDPQTMPLGbloUb9U9yFYlSqGbAYmFAvOiG2ryk3ivXlIQIgEIkgP5o1WlnkTVF0UMGXSpDibseJNriQYhD63Tir3UsqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRCx3A36o2jdXxt7yrcA1W%2BDIdlEnW21lCWVQK9CnvvjSz3f3ssOuV%2FqYN6EBGX2pnfnKpX6UYsCfl4yp1OrTvjDxi7PQpzdCIBSXwFTzcdBbLD5gybMPHtvufYHK7DMr%2BjOCkXCraxpFPk4mp5JCDgNCI8nzsp775GyOPzxZPMHjSS4pZlXCil5CJ4h49sorYXdAxfK0iWpyCw1M0cwfqk2Mj7HYEDe4eEj78jRZSmve2Q4uBckXnpioC3x0fVEwPppOqpfaVxhAttfxE1p4YhZKMjxfTPPGB8o7gPAJkLtzfQzh%2FNmzrGdAJZ2EVt%2B57He8aSYVFyIxCcwyFcl%2Ftyf5E1SoF288VU7xpK2Uv7H3sy4kgDlaTk9c9C5DbQ%2BBP1AktRrafkU99ieH2ZYn%2F74T7FQilANVZTHDGKZ5DKr0kZfhm%2Bn4s2banCUmdYM5xCwwVWExf%2Bm9kX3LEJKalgkmiqAHXv9TblF7ldpP4TPRStciOle1xvAlkjMYnGGESh2JJsRIzLzpiJ9FiuRUfAAlTOxhHJS72VjjbHsZQg0Lc2RWUpL5fdLJruQOrRtjxxQ3Fc9IK1hsXBPiDdwSa429rFbO7KfNMSEnQDJJ3%2BN72%2BmomLlK3ZY33%2BN4N%2BVI8Fr7osnlwH0tANMK6HmMMGOqUBQD3ipfIrzU73kVl5k4zGFjRuiJnTNAZgx4lFcFCpI%2BS0ogcDoWuWxGAVf1jOe93iB2w6Zq4MJfFHdIPYPW55SU%2BG89RyEru5jOC7Elzzg7tzv1jCKfNs4gInP%2BtiVwd2702LOVi8hUUssKN5EjjS38IknzexKl%2F%2BGotgTiYe30g5ySy9NSzLnFsQ%2FgB6hNR4LM6ezI6PgCKdOho8CZnMtZVxMbr8&X-Amz-Signature=2c8d696f96700292292c279f12d163650d2996e2c6710258782223cc65c88125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
