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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624BEKRUZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBL%2BmKKoirIa3y3zkhbb6b5bvtQW7JccEpm97tt6MlfJAiBAI%2F%2BsP6EF0bQZzdCAmnLANIu3oGtnmxco35oifoy0oCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMyZd59Z4wMYdaAXrnKtwD2wyn2wJtvdD%2BfKsp2dlHNcOhI8cJGgRALSSwjisWd%2FSRjeldt3Cat7xq9OG6bAM7PLy713%2BWK%2BCr8Gv64NPwf7jfVcsdM8co6CvwheFzXLjJxyIHThQrMr8VqTu3U8eXkeAZvnZTYnj9%2FIeg5qE2keBfwfMN%2FEI2fvTIa36LpOLcpAnFxRcYo8XrI8mAL9R7HxyASHCeC7tlIBRLonGm1f1lrzEs41ItCp6yyhMWzMxCXpSd6jVVIMKdppUA2b4LdxzJqtnonp%2BLe6IwySFkCaHgbGXArwqFVnijj3hdGmV33lkF0Ro3eXRErAQjXRIwUE%2BEJV79O4OpxgI6qTP0pPhQX2Ys4zAhJC1OLngeJXFDh8ywn%2BNSyup7dniz2IqQhCcqaUBEHFgxTJJbxSuqWI9SCkzvxat8vm1vgvct7cwSIB7AhFlYZmIqzPx3K%2Bq18hlE7gAsYFGprjwYjpVQc%2Fn%2F6j3m9Xqun%2BJW56xSyoTh8BiwG%2BdwQ9FCGXQgUhPcApd8PhfN5iWc93DANojfWAn0TvLlOJei3qqSljQEfjzvH%2B1yttXMY%2FVNF8mordwVZWDbF%2FqbcScHG7LQapuEEpCUCOhiLFwXI0%2BfzdkS%2FdjVeUwaOgwvN2oWJuEwov2QvQY6pgHp9vXLJ4rGuXemro%2BhLJ2vgVdgeAvPX%2FR%2BuA1l%2FpyoGNb1HiGyA85txHBHJ4qmZMi4JSN2qF%2FYTkanSMm1RqYn%2BCrp5Fjp8EZfgIRBPiNJ5%2FH5bRQtDxj2wRiuGSG3%2B7941XRWziyLNiEaizrDDbK%2BcS%2FJGLSY3ko0mV0vVugZIA%2FmtUtyZV%2BwaqkmnlGXYBfE0acKAQSu9SkIdY46jFxyYWbsfLxm&X-Amz-Signature=431fd67066d1f0133cd132df7e65b01ce46a147eef727ee9d2d967ffcfb5af3e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624BEKRUZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBL%2BmKKoirIa3y3zkhbb6b5bvtQW7JccEpm97tt6MlfJAiBAI%2F%2BsP6EF0bQZzdCAmnLANIu3oGtnmxco35oifoy0oCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMyZd59Z4wMYdaAXrnKtwD2wyn2wJtvdD%2BfKsp2dlHNcOhI8cJGgRALSSwjisWd%2FSRjeldt3Cat7xq9OG6bAM7PLy713%2BWK%2BCr8Gv64NPwf7jfVcsdM8co6CvwheFzXLjJxyIHThQrMr8VqTu3U8eXkeAZvnZTYnj9%2FIeg5qE2keBfwfMN%2FEI2fvTIa36LpOLcpAnFxRcYo8XrI8mAL9R7HxyASHCeC7tlIBRLonGm1f1lrzEs41ItCp6yyhMWzMxCXpSd6jVVIMKdppUA2b4LdxzJqtnonp%2BLe6IwySFkCaHgbGXArwqFVnijj3hdGmV33lkF0Ro3eXRErAQjXRIwUE%2BEJV79O4OpxgI6qTP0pPhQX2Ys4zAhJC1OLngeJXFDh8ywn%2BNSyup7dniz2IqQhCcqaUBEHFgxTJJbxSuqWI9SCkzvxat8vm1vgvct7cwSIB7AhFlYZmIqzPx3K%2Bq18hlE7gAsYFGprjwYjpVQc%2Fn%2F6j3m9Xqun%2BJW56xSyoTh8BiwG%2BdwQ9FCGXQgUhPcApd8PhfN5iWc93DANojfWAn0TvLlOJei3qqSljQEfjzvH%2B1yttXMY%2FVNF8mordwVZWDbF%2FqbcScHG7LQapuEEpCUCOhiLFwXI0%2BfzdkS%2FdjVeUwaOgwvN2oWJuEwov2QvQY6pgHp9vXLJ4rGuXemro%2BhLJ2vgVdgeAvPX%2FR%2BuA1l%2FpyoGNb1HiGyA85txHBHJ4qmZMi4JSN2qF%2FYTkanSMm1RqYn%2BCrp5Fjp8EZfgIRBPiNJ5%2FH5bRQtDxj2wRiuGSG3%2B7941XRWziyLNiEaizrDDbK%2BcS%2FJGLSY3ko0mV0vVugZIA%2FmtUtyZV%2BwaqkmnlGXYBfE0acKAQSu9SkIdY46jFxyYWbsfLxm&X-Amz-Signature=5370dad25bcfa87d80e953e3d2586b532d0bee9b701f3ee67b413ad0318d619d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
