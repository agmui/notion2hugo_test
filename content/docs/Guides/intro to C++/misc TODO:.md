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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676DTXQKP%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxlzrd3QyXe2c8Cy3k50KKMZeCVJ%2BhFdfVlatt1liPAgIgDB6OVn85DDmgkCVDjqVzzg0d0Y0sJn6KzI3%2FLhzVSuQqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmuvPlVSF6s7MIa8ircA0bSAbtP9ZDnmIymUG4znJTLHllOhHTjXf6h1i5%2BAjedqJ7KacWUrc8ld9Ub969gfmdbAgngvTrPNtHxuqq0acWSqenIG%2Bq5P9mELAkTvxk5mzX1C3vvTH7BX%2BhiEF5wFYVDJx15YeKHj1Nl4WKkgX17pXfhwFW0fiIYOuifsiOmX1YsO5bEcSu%2Fynjb%2BlwE7e8UJNhPH5KUGfdzGgiZeJkV9IG%2FNV%2B4JwfyQJKIGOAoTyLGf34HlVI8hwI8zBZV7oenmicazND0Qp17IZ5FLoA66ur38HthT0DQj591Jp3VAu%2BwHWVixaME5Bo77rYZJZUTCySx0rQEXsdMIWhYRvb3jvRT6NuCyoVsLAPYb0M%2BBbp2KbQpw846wK%2BdtjRYjVaLbK9Hom5sGCIdgBWnDXFlVhTo3IiYPfRsGB9kMWhKyw0yAUusowApbl9FRnA3vBMrQjKeqSx9RK6iuuH8pD6lZEQKVzBAUhGUEyRDSJACokmixZfFiTLG%2F916e5KpZsdFXkONz6TdjnHowBK10GqtnWkehsjbptG4ZmlrAHuK7FEWvJUb78I9IxZDD2pTqkm4xE1HU%2F43cr1PI7MH1p8cYTh0emRyDAb5EHBikjr2oqlR0PI1LPkIvFtfMIL5x8MGOqUBI934f2%2BmOYpm%2BEYiClsSQhSpFaYVWdJTcWHR46WgVXVwTCPBikdt5s4d5Lp5lO4jxhHVQeM3MjLJEOd%2BVBXlcgvzuNIdZjQBCAeSJ8AyufQR5X89w4MTcAUkc6LtJ01u%2BtZtutlCx4HFRfmSYGCNZ5pkHV23E2G1yfW8WhSiiEVwK%2FJBWkdk3xHY4L20QZAzZ6tvOumVARxibasXeJMoa04t4bdZ&X-Amz-Signature=d2bc41a368901fb5b7d4d15cb964931e95c595dfb07efe936bd806411bf79b80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676DTXQKP%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxlzrd3QyXe2c8Cy3k50KKMZeCVJ%2BhFdfVlatt1liPAgIgDB6OVn85DDmgkCVDjqVzzg0d0Y0sJn6KzI3%2FLhzVSuQqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmuvPlVSF6s7MIa8ircA0bSAbtP9ZDnmIymUG4znJTLHllOhHTjXf6h1i5%2BAjedqJ7KacWUrc8ld9Ub969gfmdbAgngvTrPNtHxuqq0acWSqenIG%2Bq5P9mELAkTvxk5mzX1C3vvTH7BX%2BhiEF5wFYVDJx15YeKHj1Nl4WKkgX17pXfhwFW0fiIYOuifsiOmX1YsO5bEcSu%2Fynjb%2BlwE7e8UJNhPH5KUGfdzGgiZeJkV9IG%2FNV%2B4JwfyQJKIGOAoTyLGf34HlVI8hwI8zBZV7oenmicazND0Qp17IZ5FLoA66ur38HthT0DQj591Jp3VAu%2BwHWVixaME5Bo77rYZJZUTCySx0rQEXsdMIWhYRvb3jvRT6NuCyoVsLAPYb0M%2BBbp2KbQpw846wK%2BdtjRYjVaLbK9Hom5sGCIdgBWnDXFlVhTo3IiYPfRsGB9kMWhKyw0yAUusowApbl9FRnA3vBMrQjKeqSx9RK6iuuH8pD6lZEQKVzBAUhGUEyRDSJACokmixZfFiTLG%2F916e5KpZsdFXkONz6TdjnHowBK10GqtnWkehsjbptG4ZmlrAHuK7FEWvJUb78I9IxZDD2pTqkm4xE1HU%2F43cr1PI7MH1p8cYTh0emRyDAb5EHBikjr2oqlR0PI1LPkIvFtfMIL5x8MGOqUBI934f2%2BmOYpm%2BEYiClsSQhSpFaYVWdJTcWHR46WgVXVwTCPBikdt5s4d5Lp5lO4jxhHVQeM3MjLJEOd%2BVBXlcgvzuNIdZjQBCAeSJ8AyufQR5X89w4MTcAUkc6LtJ01u%2BtZtutlCx4HFRfmSYGCNZ5pkHV23E2G1yfW8WhSiiEVwK%2FJBWkdk3xHY4L20QZAzZ6tvOumVARxibasXeJMoa04t4bdZ&X-Amz-Signature=afb65d49cf712c3da2a943c1e91431fd5bd9453c63f4de2f52d785a144ac61cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
