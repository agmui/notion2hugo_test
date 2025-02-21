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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YO3PB2M%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOLjr0dXeHf0lE65pMGXiuCSk%2B%2BDEPSptjE33Jp8slKwIgROXXJJC4v94sKZDc9yotB%2BOZTYrrQkdOecaPmeE68JQqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7j5KSPHjmDSA73zircA1vt8DC6ID5eLi%2FmyVufGh0%2FtlysVs7np9BWI8oaYbTt1Nz%2B61JROLF8B3aM9118f4GeoQzRGdk1Axe0doICKd5%2BOA6E338f2McUy8oJj0jzLHPm8VY5bXZUcYza4F78%2FjdYf%2BtbwXBr3SwbBLTyC7LnSd8QSj4MiFTeXFbnyPfoNYbYNN1Tu%2B%2FFFZoKQb0gMx%2FWzc2OnAK%2F6e8F0iy5UZLGQd%2B86Wepe5yQbRUl6c9%2BKqrXQeMcmGbZJBnTRbOlhxWXCi1ClELgEwlINYeCigkRzdg0DsUF63keIspttdoBDBqOba6LcnTg9ZaeTzoW6mUo2ovsIPc87pMkdCLJN9CQnUWjCVHdLxypWMvQYrba24lKaDurqN2gIW9UypQIZkgRWMxjiOZJAgo%2BdjfEhiiuLuA4HTH0op5aENASXN%2B6JOQioKe4nKFKTDV%2B5zOhPij5ffsXRlfPb%2FaIxm8j1yVf8vTnAW%2B0cm5U9T0VEJM1bQFRjobMPDd6PHJrecnhnl87QpV%2BakqxaVfVxm4Pqfz0BcXhuVfIIUOmqjIWwU5PpHGHYSqXd2r8Vis0yfPQA8NhP4HO4YC4eTqk1%2BUCF%2FMZJFgV3pvQ0j9bMcT2Ipe96UEudd5l3a2tao%2F4MODk4r0GOqUBL5JVtR7w7ekXbd04uX4AC68ffQ6er6vKrvsMMVN2fqRhmM6N5eK2hbiMfC%2FaVgQo89uNFocaDUI0W04Ma9mj33PTQAkcZ%2BVQp6rN4PHJu30CpU55cisrYu2qPLAiXzGnzAkRBQYveRvlC%2B5WOjevx1ruOpu3wMiRdkRptUJSzbMwLdBvhyRg1hXzEgnOeUCsCQ76UcBpVUS3jG0Z57oEobf393Lq&X-Amz-Signature=4c8c948428faf490c0f787a205867df5d43e328bcf53b9efc38301d0e14d6ba5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YO3PB2M%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOLjr0dXeHf0lE65pMGXiuCSk%2B%2BDEPSptjE33Jp8slKwIgROXXJJC4v94sKZDc9yotB%2BOZTYrrQkdOecaPmeE68JQqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7j5KSPHjmDSA73zircA1vt8DC6ID5eLi%2FmyVufGh0%2FtlysVs7np9BWI8oaYbTt1Nz%2B61JROLF8B3aM9118f4GeoQzRGdk1Axe0doICKd5%2BOA6E338f2McUy8oJj0jzLHPm8VY5bXZUcYza4F78%2FjdYf%2BtbwXBr3SwbBLTyC7LnSd8QSj4MiFTeXFbnyPfoNYbYNN1Tu%2B%2FFFZoKQb0gMx%2FWzc2OnAK%2F6e8F0iy5UZLGQd%2B86Wepe5yQbRUl6c9%2BKqrXQeMcmGbZJBnTRbOlhxWXCi1ClELgEwlINYeCigkRzdg0DsUF63keIspttdoBDBqOba6LcnTg9ZaeTzoW6mUo2ovsIPc87pMkdCLJN9CQnUWjCVHdLxypWMvQYrba24lKaDurqN2gIW9UypQIZkgRWMxjiOZJAgo%2BdjfEhiiuLuA4HTH0op5aENASXN%2B6JOQioKe4nKFKTDV%2B5zOhPij5ffsXRlfPb%2FaIxm8j1yVf8vTnAW%2B0cm5U9T0VEJM1bQFRjobMPDd6PHJrecnhnl87QpV%2BakqxaVfVxm4Pqfz0BcXhuVfIIUOmqjIWwU5PpHGHYSqXd2r8Vis0yfPQA8NhP4HO4YC4eTqk1%2BUCF%2FMZJFgV3pvQ0j9bMcT2Ipe96UEudd5l3a2tao%2F4MODk4r0GOqUBL5JVtR7w7ekXbd04uX4AC68ffQ6er6vKrvsMMVN2fqRhmM6N5eK2hbiMfC%2FaVgQo89uNFocaDUI0W04Ma9mj33PTQAkcZ%2BVQp6rN4PHJu30CpU55cisrYu2qPLAiXzGnzAkRBQYveRvlC%2B5WOjevx1ruOpu3wMiRdkRptUJSzbMwLdBvhyRg1hXzEgnOeUCsCQ76UcBpVUS3jG0Z57oEobf393Lq&X-Amz-Signature=5bb044af9cd293541fdd3898818fd9daa35e0a09d4fb6763b40fb21297e52115&X-Amz-SignedHeaders=host&x-id=GetObject)

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
