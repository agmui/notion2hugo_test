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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HMAWDNQ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCGihck2g%2FaHBfC8j9pC82ttVwjHtWfA4F5QO1c5gZ%2BcQIgCWrJWc29JcIMTEk%2FDASAAL%2Fdw4348CSpUFmnOLILQzEqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbpmBcrmEvfVwyYBCrcA3NEDxO3JleZ%2Ft4wtVY9Q8Q%2FDA6uWYYLlTW7HescR5plFsNFtLlR%2F27YfFVIFUEOLsRMZWLGs2vwkIGCC18Kb5CjHjEhffbJG%2BMnWbWPmtzMGxeQ9AaPzyqAXOhjNSSwOWvzwkDNWw1WtjngSWfML6gtOl5X4Snx%2Fs7VwugBeIQynVibM9N2H%2B4iQI%2BcuNfYQBFornYs8IvUN66MTMS6vSB7shaqBTy3gXv2itIgKw7Q%2FW26S29PPYnG%2B0r8cQEWuJebJaZOEhNxIsROlfwwBsihIHbAcgFBLiPysaMVdctgHy11c4inoNLz0mMRLV%2F7lUli6AuIIo0Nasfr4YC39Q8v77q%2B2tpaB1qcBpHPJvcUiGYMm1J%2B2Fy8xl5FnjLRszMbZj%2Frpbf7WJtGE5ft%2Bz8f28z5MTp49qfy3gvxky2gwX1jFTD0BL0njCuHIsm2F851%2BmWkEN3%2BCexW1dFmRYJzDEEybs%2F8rgnpseivjxtNx8xRrkG5ZCyEFwUClPR6dgy6Ua2qZrlt%2B7KLievaoNOJmMloUgxaAQlBCs47J%2BontUG8thVHmaORTz0nhE%2B4Rs36idUOVIx6OsC3%2BPQqpftrUO%2B%2BWujqLbxJpWKbFjEUtcLygiS0WzB9PE5mML798cEGOqUBzdRdT%2BrD5lp3vja6bX21KBEKInPA5dxmZ4zlzzr2s2gZFVi5lzNVqO22z%2Bv%2BQqLt05x%2Bj5ODsOdeyxsic1rj1ehxBYza5cy1%2Ft2Bm3cygA1pnZ9m%2Fc7ddKi5ahHOESzHpQP5vqXiLkaj1k%2Bc9M%2B9nVqqlpFf8bQDxKaBSZPc%2Fnfsgulw7JfJIXasF06NpfSzfbegYmlH0hyFgED2143OLIcQ%2BGIB&X-Amz-Signature=a957a59432d6916db1743e22d1f55f3a4ee33e98169b1e5b7680820093b2e9a9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HMAWDNQ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCGihck2g%2FaHBfC8j9pC82ttVwjHtWfA4F5QO1c5gZ%2BcQIgCWrJWc29JcIMTEk%2FDASAAL%2Fdw4348CSpUFmnOLILQzEqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbpmBcrmEvfVwyYBCrcA3NEDxO3JleZ%2Ft4wtVY9Q8Q%2FDA6uWYYLlTW7HescR5plFsNFtLlR%2F27YfFVIFUEOLsRMZWLGs2vwkIGCC18Kb5CjHjEhffbJG%2BMnWbWPmtzMGxeQ9AaPzyqAXOhjNSSwOWvzwkDNWw1WtjngSWfML6gtOl5X4Snx%2Fs7VwugBeIQynVibM9N2H%2B4iQI%2BcuNfYQBFornYs8IvUN66MTMS6vSB7shaqBTy3gXv2itIgKw7Q%2FW26S29PPYnG%2B0r8cQEWuJebJaZOEhNxIsROlfwwBsihIHbAcgFBLiPysaMVdctgHy11c4inoNLz0mMRLV%2F7lUli6AuIIo0Nasfr4YC39Q8v77q%2B2tpaB1qcBpHPJvcUiGYMm1J%2B2Fy8xl5FnjLRszMbZj%2Frpbf7WJtGE5ft%2Bz8f28z5MTp49qfy3gvxky2gwX1jFTD0BL0njCuHIsm2F851%2BmWkEN3%2BCexW1dFmRYJzDEEybs%2F8rgnpseivjxtNx8xRrkG5ZCyEFwUClPR6dgy6Ua2qZrlt%2B7KLievaoNOJmMloUgxaAQlBCs47J%2BontUG8thVHmaORTz0nhE%2B4Rs36idUOVIx6OsC3%2BPQqpftrUO%2B%2BWujqLbxJpWKbFjEUtcLygiS0WzB9PE5mML798cEGOqUBzdRdT%2BrD5lp3vja6bX21KBEKInPA5dxmZ4zlzzr2s2gZFVi5lzNVqO22z%2Bv%2BQqLt05x%2Bj5ODsOdeyxsic1rj1ehxBYza5cy1%2Ft2Bm3cygA1pnZ9m%2Fc7ddKi5ahHOESzHpQP5vqXiLkaj1k%2Bc9M%2B9nVqqlpFf8bQDxKaBSZPc%2Fnfsgulw7JfJIXasF06NpfSzfbegYmlH0hyFgED2143OLIcQ%2BGIB&X-Amz-Signature=9783b4f7a6c18bd51e4491c15fbe6b91993f73b24e3efcdbe713188064259650&X-Amz-SignedHeaders=host&x-id=GetObject)

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
