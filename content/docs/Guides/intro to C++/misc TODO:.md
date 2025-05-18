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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V63DZF2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlXdJ7SOTuvEgyXN7m6wbb%2FVTBbAmd371WPBTs8pGk6wIgeGEwmWdbM6aa2AA0aD8g74g07IPPFpzjaPK0IIt28ukq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDOug9pWhdWByTUiViyrcA6ANc%2FZ%2F2hdRlR4WElYUh%2FU4YNe2p0JDuQDFkb5yfbepct%2FqxhtXVquzXITh9wxb9ppnp2jiKOyqoOpOeI11THDeRd%2BHjrH71%2FziTDI2YOsEsdMChJkECSzerrnE9btViaKaaWmQqL4FN29mR0X6DHaMvMlzg1ch%2B5q%2Fr827hlE5DYpqwSTWPOriQ8VYp4UvOvKvyVjVjJpM%2Bdkmfc55H%2Fa9m0Z9MLVo6ClCxU1g%2Bjx2fRX6sJ7T8tIchLKkfRYw7mvKtsgqdT91946OuNfi0jJ1A4nT0xWSKQfg3Bve5S4GL69GiIuD2ITuAy1MTfOPdONxSn1GcSloGUNgGu1xkHcqAyhdxLRS4umvOKNHCfVhqU1ZW24s5Zx9ghqm06%2Bmvj5e0R%2BdxCXOWfrUbZHczXwJVaBaykU%2B3Ph89BBV8TtQUbPcE6RdJ4Vr73cUQvSgwef0uZyK%2FgidccX4rs29Ji9qCnQtHpAGIhufvPaS49Cif4JkjrE83HnFoLA42qb%2BUSCYzIHxewH3WRaz%2FDRZ9mxKA9QP9MX57dzxFDT5PhZtdhcSpbIX3fANFbC%2BI%2BMFqkVRm2nVWdpGl%2FQySZSovlh4tnX6SmBxdd4FPR7CpiUD%2Fmbt5DRsMMTp8cqFMPnBqMEGOqUBek0iYJ%2BmK0z1jzYzA1NEtrkvI8zmPG%2Bs8ksDKHHjohLdc7lc%2FwXJkvVbda%2FTr7Ty2L6pHA8x2I40kCp94gXXgLnXadrjyfGGpZaPnsYXR8mteJgUzSlu7cgnY1zwk%2BIz4%2Foms7nh6sZsiA9dsmlx9DssSKIuYbdzorFh1Q910QdS9AZV8K9zdn3AmZig0%2BXXAHQZZxhczkZSiMRaNb%2F193KAaWEw&X-Amz-Signature=8a4c66f6dabab01219739dcac95b1f68f6ff069d9b4453fa7edc3c4e8f59d4db&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V63DZF2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlXdJ7SOTuvEgyXN7m6wbb%2FVTBbAmd371WPBTs8pGk6wIgeGEwmWdbM6aa2AA0aD8g74g07IPPFpzjaPK0IIt28ukq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDOug9pWhdWByTUiViyrcA6ANc%2FZ%2F2hdRlR4WElYUh%2FU4YNe2p0JDuQDFkb5yfbepct%2FqxhtXVquzXITh9wxb9ppnp2jiKOyqoOpOeI11THDeRd%2BHjrH71%2FziTDI2YOsEsdMChJkECSzerrnE9btViaKaaWmQqL4FN29mR0X6DHaMvMlzg1ch%2B5q%2Fr827hlE5DYpqwSTWPOriQ8VYp4UvOvKvyVjVjJpM%2Bdkmfc55H%2Fa9m0Z9MLVo6ClCxU1g%2Bjx2fRX6sJ7T8tIchLKkfRYw7mvKtsgqdT91946OuNfi0jJ1A4nT0xWSKQfg3Bve5S4GL69GiIuD2ITuAy1MTfOPdONxSn1GcSloGUNgGu1xkHcqAyhdxLRS4umvOKNHCfVhqU1ZW24s5Zx9ghqm06%2Bmvj5e0R%2BdxCXOWfrUbZHczXwJVaBaykU%2B3Ph89BBV8TtQUbPcE6RdJ4Vr73cUQvSgwef0uZyK%2FgidccX4rs29Ji9qCnQtHpAGIhufvPaS49Cif4JkjrE83HnFoLA42qb%2BUSCYzIHxewH3WRaz%2FDRZ9mxKA9QP9MX57dzxFDT5PhZtdhcSpbIX3fANFbC%2BI%2BMFqkVRm2nVWdpGl%2FQySZSovlh4tnX6SmBxdd4FPR7CpiUD%2Fmbt5DRsMMTp8cqFMPnBqMEGOqUBek0iYJ%2BmK0z1jzYzA1NEtrkvI8zmPG%2Bs8ksDKHHjohLdc7lc%2FwXJkvVbda%2FTr7Ty2L6pHA8x2I40kCp94gXXgLnXadrjyfGGpZaPnsYXR8mteJgUzSlu7cgnY1zwk%2BIz4%2Foms7nh6sZsiA9dsmlx9DssSKIuYbdzorFh1Q910QdS9AZV8K9zdn3AmZig0%2BXXAHQZZxhczkZSiMRaNb%2F193KAaWEw&X-Amz-Signature=458ab07da8ecd6b7f33c07c18691d10af9a4711b66f2d9c367f7ca214228bcbd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
