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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSTD6OGA%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVElFzDtQPSKeSqdktn%2BaL0rsrtILYY5t35WPdEwKSGAiB1OVdWHZ3YbdmyBRkh2HUsCH5L6WU7vM5xW0u29LR62Cr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMdnwzObsItOqmwUrhKtwDRHmQY8CwA4p1ene9PMMjSEf6d297lOMvv0%2FamEXIsWwffkcax9MYnSLJebu%2B05QerO6W2v7cjrmX2arZvO%2BHximTZft%2BZQxNN8PDIbYjNffLhx62MSClx5Vr8AO8jjsDNnnGrNm%2FAsRA2bUrHgSimiSMoMw3OJHcPKJPJedCTSz928mTYLDK%2F1kgHbHGzoXGoiMHF5U%2BxW4K2dLSWajC%2B4RLXqmwtohv5QTkA2ooq1c6Tn1GDQmYeiV6fVtjOxSzzbL04bEa4z5dSKLDCzDMQZf6qOkOxSQ6FxwaUSxOsM29JSi2jRluMg6oYf9UL4qgUhxhcmjyxpnRUcj9%2FQgaxeZaP5CkBcZuBO%2FqtpeA5%2F%2F059VWGK84KbDiN%2BZgcbGnM%2BZibVhgaQucP0Q3HJ4LYH7cTiVeb9zlSdHE5QwS43cePLPbJV39imyOja0TwcKG8ubyOWuvb%2FOA5BBbPH%2BTLi4gJuSSGSTSQcpeVR%2BI95%2Bl8OaLSw7cZjWF8P1AtlpQGhXB1SCG3cy%2B8t%2BvmRZI4jBPfWt0SEVnXqts48X9fqEX%2BWLe9W8OKcVwmZ5zhnqhfO1iNT4Bwi8e0mtBCx63MtQgplI8IoGoouPG48PfrcCEx4TvEbO7tKN0dH4wgeTDvwY6pgEsNZtD3qflEEknz%2BSFYH6ZKEYgWFfNcAtSvrTlqjmU58xbkm1WGijqEwFZrNZMP53XwC9gcgKpcOR1JWeaGtdEbmQkx8a03KX8f9MA1XJPoEoUD%2FnbWaGBkA1EPV0E5qhk6kVWTjkD1UGZ8EVGcp9W0ik1QV5aHsMxWMea5OqlkfGkMgdHv6irIICVm0fFYHeC2SZjfLPE39A%2BuUS2foY7hwT2wQV%2F&X-Amz-Signature=2c117064b415c75db9a6048549638a4301074d0e185efdb3121ea2fc26d32be4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSTD6OGA%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVElFzDtQPSKeSqdktn%2BaL0rsrtILYY5t35WPdEwKSGAiB1OVdWHZ3YbdmyBRkh2HUsCH5L6WU7vM5xW0u29LR62Cr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMdnwzObsItOqmwUrhKtwDRHmQY8CwA4p1ene9PMMjSEf6d297lOMvv0%2FamEXIsWwffkcax9MYnSLJebu%2B05QerO6W2v7cjrmX2arZvO%2BHximTZft%2BZQxNN8PDIbYjNffLhx62MSClx5Vr8AO8jjsDNnnGrNm%2FAsRA2bUrHgSimiSMoMw3OJHcPKJPJedCTSz928mTYLDK%2F1kgHbHGzoXGoiMHF5U%2BxW4K2dLSWajC%2B4RLXqmwtohv5QTkA2ooq1c6Tn1GDQmYeiV6fVtjOxSzzbL04bEa4z5dSKLDCzDMQZf6qOkOxSQ6FxwaUSxOsM29JSi2jRluMg6oYf9UL4qgUhxhcmjyxpnRUcj9%2FQgaxeZaP5CkBcZuBO%2FqtpeA5%2F%2F059VWGK84KbDiN%2BZgcbGnM%2BZibVhgaQucP0Q3HJ4LYH7cTiVeb9zlSdHE5QwS43cePLPbJV39imyOja0TwcKG8ubyOWuvb%2FOA5BBbPH%2BTLi4gJuSSGSTSQcpeVR%2BI95%2Bl8OaLSw7cZjWF8P1AtlpQGhXB1SCG3cy%2B8t%2BvmRZI4jBPfWt0SEVnXqts48X9fqEX%2BWLe9W8OKcVwmZ5zhnqhfO1iNT4Bwi8e0mtBCx63MtQgplI8IoGoouPG48PfrcCEx4TvEbO7tKN0dH4wgeTDvwY6pgEsNZtD3qflEEknz%2BSFYH6ZKEYgWFfNcAtSvrTlqjmU58xbkm1WGijqEwFZrNZMP53XwC9gcgKpcOR1JWeaGtdEbmQkx8a03KX8f9MA1XJPoEoUD%2FnbWaGBkA1EPV0E5qhk6kVWTjkD1UGZ8EVGcp9W0ik1QV5aHsMxWMea5OqlkfGkMgdHv6irIICVm0fFYHeC2SZjfLPE39A%2BuUS2foY7hwT2wQV%2F&X-Amz-Signature=ec61bc036dfc935cc6d749ada9bd65abad5ffaf51f2f6ab467ef129e24983320&X-Amz-SignedHeaders=host&x-id=GetObject)

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
