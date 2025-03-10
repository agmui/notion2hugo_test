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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBYMQXUV%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIB5d%2FjpMc2eJGz9Cr7L8JQYmRFPdVjcq81%2BJ3S1Da3MuAiEA0zWslcf%2FE2clPf9gNM3vzzqULEFryzcJxSvzGO61hzQqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQp%2F2xv7bVfXOSctyrcA6ycegYPLAFErUpNpaJVNPohr3l4dWj2hgVI7driLH4x2gTypPTggGn537gQzh%2F4AuSHbIQhI2zmzxBLJKzuoeUGBoUy0O1qlnyl%2FY0bgOHcDZ3AsvtHHgY0VfppEfVsYOIWexaP6cuVGaEkdwagQKo9tZy%2BAYjoDWXLuOspTWv5yZAkGylTpBti0w5a94nuoeK4RLTr0wvoIwKo45iF7bjaQYfoiN0p%2FrbyW35qVsFMfYMW4hn7ObPowG8QFPdHCIpS21l%2BhkyPaNtzUXmYOxdIMrrn3QZF0pRUn4C1dqbkmxsbpmFPrbaK5XLkmel0HXyKTH74mkD%2BSe94MLA9045DECd5j0mUSZtVmKYbme7tw0VU1PbJ5OcpXKRix3iTC6hgFVqVpSz4%2F%2B27XN4pnIsb1UY0t0ImDPgEMvFdRhntV0rsqvLCBthbV8C3jI%2BGjeeHsqO%2FElTPiM7z6m2Z3M0tuaOxeY858bXNBTXWKKt%2BgsMSGWgnQZNc1io6PnqZrWJ%2BsNyUoCJDpr8V0lKzgiuwgWWaD%2BZGSjqwPh0cOTP6DZNv2j%2FHfsnp%2F434i3bmKXXH%2Fw2s%2FO%2BaT6Y9XYgkzbsY500Jjgq6sdSszhsuNVLxW%2BwY5g88LgBXFuTyMLPLvL4GOqUBeYNEMbiI%2BJ5Ce2vJwjAJXLm0yy0jjCyNPyNwLLuM6NmeJr%2BoPWSBvY6EHjtaHjf%2B3QwzsIrOXKn33MzdTOuJBDYdkp6IPxjmZY8KyCP1i1dip12ZJU4diW66po%2BxTaz0drLAo0LPgZ%2FOssawjAnoPZOBGZyjB6KP8G3rw0C6oox6HIp%2BN%2FOSisRgbazxNUDuAY1bbj%2BC%2FmwHzwt8FSywHncq9Ncn&X-Amz-Signature=a5efcafa56528d2c30c1d734737c55bfcde5e1d005aa8a89f6337b07b41aaf4b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBYMQXUV%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIB5d%2FjpMc2eJGz9Cr7L8JQYmRFPdVjcq81%2BJ3S1Da3MuAiEA0zWslcf%2FE2clPf9gNM3vzzqULEFryzcJxSvzGO61hzQqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQp%2F2xv7bVfXOSctyrcA6ycegYPLAFErUpNpaJVNPohr3l4dWj2hgVI7driLH4x2gTypPTggGn537gQzh%2F4AuSHbIQhI2zmzxBLJKzuoeUGBoUy0O1qlnyl%2FY0bgOHcDZ3AsvtHHgY0VfppEfVsYOIWexaP6cuVGaEkdwagQKo9tZy%2BAYjoDWXLuOspTWv5yZAkGylTpBti0w5a94nuoeK4RLTr0wvoIwKo45iF7bjaQYfoiN0p%2FrbyW35qVsFMfYMW4hn7ObPowG8QFPdHCIpS21l%2BhkyPaNtzUXmYOxdIMrrn3QZF0pRUn4C1dqbkmxsbpmFPrbaK5XLkmel0HXyKTH74mkD%2BSe94MLA9045DECd5j0mUSZtVmKYbme7tw0VU1PbJ5OcpXKRix3iTC6hgFVqVpSz4%2F%2B27XN4pnIsb1UY0t0ImDPgEMvFdRhntV0rsqvLCBthbV8C3jI%2BGjeeHsqO%2FElTPiM7z6m2Z3M0tuaOxeY858bXNBTXWKKt%2BgsMSGWgnQZNc1io6PnqZrWJ%2BsNyUoCJDpr8V0lKzgiuwgWWaD%2BZGSjqwPh0cOTP6DZNv2j%2FHfsnp%2F434i3bmKXXH%2Fw2s%2FO%2BaT6Y9XYgkzbsY500Jjgq6sdSszhsuNVLxW%2BwY5g88LgBXFuTyMLPLvL4GOqUBeYNEMbiI%2BJ5Ce2vJwjAJXLm0yy0jjCyNPyNwLLuM6NmeJr%2BoPWSBvY6EHjtaHjf%2B3QwzsIrOXKn33MzdTOuJBDYdkp6IPxjmZY8KyCP1i1dip12ZJU4diW66po%2BxTaz0drLAo0LPgZ%2FOssawjAnoPZOBGZyjB6KP8G3rw0C6oox6HIp%2BN%2FOSisRgbazxNUDuAY1bbj%2BC%2FmwHzwt8FSywHncq9Ncn&X-Amz-Signature=df35ee0aed5129a90c207aec22d83951797247d88eb310d0acab042ab4c61e76&X-Amz-SignedHeaders=host&x-id=GetObject)

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
