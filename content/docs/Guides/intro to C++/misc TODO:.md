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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2JX52HD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4qfxT4vZWqxvk2%2FOCRSQ8end5zKYbyVPR81BtFCdZcQIhAMINTz0NQjkrCs172rKcP8MBZ8PYWRT8SFQ%2FX%2BkZJyP7KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKo%2BgXOvYuUcQCZiEq3ANDrnwgx2M8zpSDuB4Souu%2B9u%2BA%2BLPbrXn34ye3SKBkkAQlwMEtBgx%2FqbT5gnRoGMqvShqG3f5tMAnwjqnU05vKanrnUWH6y6FYWlBJxOzO8%2B%2FCPL5bQf6kT1jeCuOmx6aBG22FoDZ9XdFCIFUh7Bu3Rs2JaOgqVHB%2BratAj2DrDf3%2B1DIaOCK8bEvhcQRihpXDPM20uCaqZCgRnKg6RiDRnzSAS9pE%2BT%2FJkZTwG2A%2Bnt0uYH1WGpA%2FRz5fmWa9UNsoParfEeiwp6sREQEFM6lNG50hzNTlj7CTBZHQMnFJj2y2Te4qvrJ8t7avGc%2FGomFASocKU811AkdhHgqEQvep7k6FzCUd%2ByjSllywSA5G1etSdgimJ3GewBBKImsOpsCbyu1d1Y1RQdvrI4dxBBWviidNY4KG1GXMAk5ejQO1RJLcCjF%2FQ4FrB45NvsN3oBpsWOD5hZWjsMw%2FiY2C0rKuDuFk4AF%2Fv9f9%2FqnREUBOTvanYUTYCnlN48VIxGtKreFJTckwObc9V%2F07T43IoH66EQXC4U78HKQKyS6LwHJW139pD2d%2Fe46VCiMivOh8SPUboOCJxHwDGUIS95aNJ%2Bua8q4MzECc48XqIujs0KmwVIR6kG4Gj0jeOgZSyzCqrt7CBjqkAaat%2BkFfTVuMueq3Ylng1VjXPTzxAwbC5hcSyD3IzQ9OU4Hso6zcwKgadCrT8gciXpY2utTiGUADplJoghHAC9BnI%2Bs6OCw5QOQQmCVBa6MdHl7rrpLcnA4PEZs5fvcdtideiJEKXRPYtV8ethBDLcVV1XL%2BFNcEPiHwyAheP52cXE8uZbHnYOduSVfMEPYJI5mmi%2FI54tS2KETsb6Qze04j1Rgx&X-Amz-Signature=9525a4722416ca3d73d987313c9fb1dbb44abd3320ef3e9b8466d1a1f9bc0082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2JX52HD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4qfxT4vZWqxvk2%2FOCRSQ8end5zKYbyVPR81BtFCdZcQIhAMINTz0NQjkrCs172rKcP8MBZ8PYWRT8SFQ%2FX%2BkZJyP7KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKo%2BgXOvYuUcQCZiEq3ANDrnwgx2M8zpSDuB4Souu%2B9u%2BA%2BLPbrXn34ye3SKBkkAQlwMEtBgx%2FqbT5gnRoGMqvShqG3f5tMAnwjqnU05vKanrnUWH6y6FYWlBJxOzO8%2B%2FCPL5bQf6kT1jeCuOmx6aBG22FoDZ9XdFCIFUh7Bu3Rs2JaOgqVHB%2BratAj2DrDf3%2B1DIaOCK8bEvhcQRihpXDPM20uCaqZCgRnKg6RiDRnzSAS9pE%2BT%2FJkZTwG2A%2Bnt0uYH1WGpA%2FRz5fmWa9UNsoParfEeiwp6sREQEFM6lNG50hzNTlj7CTBZHQMnFJj2y2Te4qvrJ8t7avGc%2FGomFASocKU811AkdhHgqEQvep7k6FzCUd%2ByjSllywSA5G1etSdgimJ3GewBBKImsOpsCbyu1d1Y1RQdvrI4dxBBWviidNY4KG1GXMAk5ejQO1RJLcCjF%2FQ4FrB45NvsN3oBpsWOD5hZWjsMw%2FiY2C0rKuDuFk4AF%2Fv9f9%2FqnREUBOTvanYUTYCnlN48VIxGtKreFJTckwObc9V%2F07T43IoH66EQXC4U78HKQKyS6LwHJW139pD2d%2Fe46VCiMivOh8SPUboOCJxHwDGUIS95aNJ%2Bua8q4MzECc48XqIujs0KmwVIR6kG4Gj0jeOgZSyzCqrt7CBjqkAaat%2BkFfTVuMueq3Ylng1VjXPTzxAwbC5hcSyD3IzQ9OU4Hso6zcwKgadCrT8gciXpY2utTiGUADplJoghHAC9BnI%2Bs6OCw5QOQQmCVBa6MdHl7rrpLcnA4PEZs5fvcdtideiJEKXRPYtV8ethBDLcVV1XL%2BFNcEPiHwyAheP52cXE8uZbHnYOduSVfMEPYJI5mmi%2FI54tS2KETsb6Qze04j1Rgx&X-Amz-Signature=011569063f9b18f12a033371a5714419f11205d8a42eefed73cb12331ea76ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
