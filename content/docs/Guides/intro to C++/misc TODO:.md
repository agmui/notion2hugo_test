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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLHNQVL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCR1k7hW9BzAhMmxkepF%2BsQsrgrjEhCgc6kCKQXFex9IwIgb38JZJ%2BViSfB%2FPJ2vxfuWM%2FBuFUzO0vaPu79TEeUIN8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDI97OsQTAEVYCP0sBircA69%2FaK%2F0wzhRL%2Fnbxz9Jq1PB7OaocjLFjPkbLh4mpSb%2BX%2BirlPq0%2FhWCaiaxbtrFtulQ7is0yDYIhvlgrhWTq29FOvF2kx2SbKBW72yW04kJdVStSBLx01Hv%2BaPFe25d%2FbWkOTOuQg55e0NjIwfrlkqGzVyEL%2B2D%2BX8IomTHfmjujQyx%2BN3dOmZVoyIz2UJEkWe6jV%2BxO2t0%2F6Rchdjc5tSXOuBZyJYWP7hKd9CcBfnqwQdvuK%2FVCj3n0eqT6QNymBccNpV2Tv5Q%2BAZtuAj4HWUb%2B5mahEhdAhriTtPTZdiVBCxmDJ7kef1SUc9GCyNKiLzi4XeYHt2YOiLTGAzbsH%2FwXmi%2Flak4GJiK5deYGbSVNKN0Yc4pfa7%2Bt7PIphoBwfjZM8eBjH0zwTNxClD4ZNVG78VEmpu%2F1J1yt3rc%2BlHJYfWFojES6HNJtL2dk2YRc8Rt4oKpvSXGXUhRRGeW50UbqsKN2aJJ53k7sEaxObpRJ8r%2FuCHsaKNeZbAzOPlJWYcKsyi7brdDodkxNgbShzNuLzb3qaU4R%2FNDp3fIbuver5V3yy2fPvXtBwBI1sDNbQHrj1y5xD7nx%2FR9pTBd4gLyxEsOIglicQvUlPlxIUsmYWtsvvBlBMWtuDmHMNup1r8GOqUB87QP%2BftveZpNMFDb0MFHH6ZL6XrNVkHTP4X4rKOC0c72rTS1yKwv5Psf862OsCzmdYIFj2njKA4sE%2FuE%2BNTXoj0%2F7oE5Gb%2Fj02vAW72DKXdEk5vypfn50I6KiyRet5vmrPukbQaCydRcxYHZTvEJ1i%2FD66r4gekmmHElgSQRAmbQE8uuJt08K93XPh72pdSOMLjp8o3iRM3pNKWKE4%2BbnaSbgJE2&X-Amz-Signature=af338625c838d0552d8ed4371fbfdd41fd13d5d928b96631ead7b7bc1d02b1b5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLHNQVL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCR1k7hW9BzAhMmxkepF%2BsQsrgrjEhCgc6kCKQXFex9IwIgb38JZJ%2BViSfB%2FPJ2vxfuWM%2FBuFUzO0vaPu79TEeUIN8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDI97OsQTAEVYCP0sBircA69%2FaK%2F0wzhRL%2Fnbxz9Jq1PB7OaocjLFjPkbLh4mpSb%2BX%2BirlPq0%2FhWCaiaxbtrFtulQ7is0yDYIhvlgrhWTq29FOvF2kx2SbKBW72yW04kJdVStSBLx01Hv%2BaPFe25d%2FbWkOTOuQg55e0NjIwfrlkqGzVyEL%2B2D%2BX8IomTHfmjujQyx%2BN3dOmZVoyIz2UJEkWe6jV%2BxO2t0%2F6Rchdjc5tSXOuBZyJYWP7hKd9CcBfnqwQdvuK%2FVCj3n0eqT6QNymBccNpV2Tv5Q%2BAZtuAj4HWUb%2B5mahEhdAhriTtPTZdiVBCxmDJ7kef1SUc9GCyNKiLzi4XeYHt2YOiLTGAzbsH%2FwXmi%2Flak4GJiK5deYGbSVNKN0Yc4pfa7%2Bt7PIphoBwfjZM8eBjH0zwTNxClD4ZNVG78VEmpu%2F1J1yt3rc%2BlHJYfWFojES6HNJtL2dk2YRc8Rt4oKpvSXGXUhRRGeW50UbqsKN2aJJ53k7sEaxObpRJ8r%2FuCHsaKNeZbAzOPlJWYcKsyi7brdDodkxNgbShzNuLzb3qaU4R%2FNDp3fIbuver5V3yy2fPvXtBwBI1sDNbQHrj1y5xD7nx%2FR9pTBd4gLyxEsOIglicQvUlPlxIUsmYWtsvvBlBMWtuDmHMNup1r8GOqUB87QP%2BftveZpNMFDb0MFHH6ZL6XrNVkHTP4X4rKOC0c72rTS1yKwv5Psf862OsCzmdYIFj2njKA4sE%2FuE%2BNTXoj0%2F7oE5Gb%2Fj02vAW72DKXdEk5vypfn50I6KiyRet5vmrPukbQaCydRcxYHZTvEJ1i%2FD66r4gekmmHElgSQRAmbQE8uuJt08K93XPh72pdSOMLjp8o3iRM3pNKWKE4%2BbnaSbgJE2&X-Amz-Signature=557b7d638b8f3468d4e4e95b788313c225ca2346a97f6367a9e821412fd52988&X-Amz-SignedHeaders=host&x-id=GetObject)

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
