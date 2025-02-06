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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUKYTACT%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQD7d2mopZ4p%2FxG7HoOSGjP3fhs0QBcmcyFO%2BZgh2ZEsgwIhALHNJdJsCmWtgoSumC%2B%2FM7%2F5rLFPVyNH134m1WlfULKUKv8DCFoQABoMNjM3NDIzMTgzODA1IgyOhcBYP%2Be4Fpup6K0q3APlPos5ofYMYFmW69gLapfbNyRxjr9%2BJ8XFTQyES3ZbueviyFg6juP0Qvm2KOf98rHEZVGUUsND24lRc3Xe1Xlyb0B6%2BtvTERJRPo1a6kj2g8e2C4rH0wbdFwqe831bkkNPOLD1qhJMz0DTeaWv4NW37l25gYeIL2LEARTaCSZJHkkruAzIQIHUo4jJBEnj%2FcA3o1e4mUij%2BLrpGS05VkbrD%2BxDGQv0M2%2FvReI5swwUkuil4JL1OPqur6xsRAzpT9wz%2FyYs2xUmcLoGpngJmydfYw2PBOVArl0kBeMLTASqjsLLEDBFGfvdh8%2FGPomqmI2Z8cL9aFP%2BIyUplt62kkI6qkGs4r36m79sTJhg7WOFPSrsKI258K%2BjnWt4vwMY4DWXFeFRyzrQ2DsnkoAtUEtoeNK2fCT0AtEUTR51ROj1RG2zee2u9UmcE7T9bfyx%2BuCoWYoWyP225kl0J9EThrC2WOgYnlfDgDAAvd%2FSl8EaDBELf3QGSa0GZUB8WPu8ovNGDgeQ2%2FF%2Fx5HVTYdZjRoWVeaX5cXOKz3GntoXKsNoaB60G1qtFt54MVl7RM0S%2BNJ0YdIaQw1SdHXEIf7NpOh3kzBxcpi%2BITEE3Y3phUQFSconR70xL9fBa59f1zCR7ZG9BjqkATZ3up6byyodxpulo5Nwc0nITzFGVASsBHoj9za6LUPtbexwaa7WA6uC71qlAPN4k%2FXIEu0EHQv3Gj5DmBIGnIEfL5kCudHBGRLBhoNEivT8B38I4lSNa6LQ0anqJvLs6K4zaVnrf09D%2FrGkBdCHgMLs8LvOMYcHvVqXVc%2BkkqZH1NtWxn0HQH3NVF5CaV29i6QeiOTI7i67GzxomGmel34BtqFv&X-Amz-Signature=7628b01a6506780b15f5dc72b95d379b2a3ebd6337a592f83aefa1470846f9c1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUKYTACT%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQD7d2mopZ4p%2FxG7HoOSGjP3fhs0QBcmcyFO%2BZgh2ZEsgwIhALHNJdJsCmWtgoSumC%2B%2FM7%2F5rLFPVyNH134m1WlfULKUKv8DCFoQABoMNjM3NDIzMTgzODA1IgyOhcBYP%2Be4Fpup6K0q3APlPos5ofYMYFmW69gLapfbNyRxjr9%2BJ8XFTQyES3ZbueviyFg6juP0Qvm2KOf98rHEZVGUUsND24lRc3Xe1Xlyb0B6%2BtvTERJRPo1a6kj2g8e2C4rH0wbdFwqe831bkkNPOLD1qhJMz0DTeaWv4NW37l25gYeIL2LEARTaCSZJHkkruAzIQIHUo4jJBEnj%2FcA3o1e4mUij%2BLrpGS05VkbrD%2BxDGQv0M2%2FvReI5swwUkuil4JL1OPqur6xsRAzpT9wz%2FyYs2xUmcLoGpngJmydfYw2PBOVArl0kBeMLTASqjsLLEDBFGfvdh8%2FGPomqmI2Z8cL9aFP%2BIyUplt62kkI6qkGs4r36m79sTJhg7WOFPSrsKI258K%2BjnWt4vwMY4DWXFeFRyzrQ2DsnkoAtUEtoeNK2fCT0AtEUTR51ROj1RG2zee2u9UmcE7T9bfyx%2BuCoWYoWyP225kl0J9EThrC2WOgYnlfDgDAAvd%2FSl8EaDBELf3QGSa0GZUB8WPu8ovNGDgeQ2%2FF%2Fx5HVTYdZjRoWVeaX5cXOKz3GntoXKsNoaB60G1qtFt54MVl7RM0S%2BNJ0YdIaQw1SdHXEIf7NpOh3kzBxcpi%2BITEE3Y3phUQFSconR70xL9fBa59f1zCR7ZG9BjqkATZ3up6byyodxpulo5Nwc0nITzFGVASsBHoj9za6LUPtbexwaa7WA6uC71qlAPN4k%2FXIEu0EHQv3Gj5DmBIGnIEfL5kCudHBGRLBhoNEivT8B38I4lSNa6LQ0anqJvLs6K4zaVnrf09D%2FrGkBdCHgMLs8LvOMYcHvVqXVc%2BkkqZH1NtWxn0HQH3NVF5CaV29i6QeiOTI7i67GzxomGmel34BtqFv&X-Amz-Signature=ec562ba9fb22f134db3e444bd63ea7c179ea269a2f18393ddb30be3ae3182606&X-Amz-SignedHeaders=host&x-id=GetObject)

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
