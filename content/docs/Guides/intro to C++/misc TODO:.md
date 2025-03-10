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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYJ4JM6X%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIAnHtVn0K32RhSm8ozN1%2BF2W0lP5Rv5N0xCnlvqYY59GAiEAteR3xir3tIRHC5%2B0v%2FoXKDRwVehvuKDaQ7Ly70g3KXUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPXToxa%2BzVW3Sy6iCrcA6tEwioPlEJjtOLDku7VU9SvOCet0Tp%2FZc6S5SgGkCeIpgvxaND%2Bq%2Fv29KfKORJGSFYilZDOebIBhru%2BCDYylPYLhD2h72EpuvsMqcp0ZdXr9H5m5o5lyzE5QUOoOb%2BkkCOUIyjeF3YE%2FA0jisbHUEOa7XtDJQPVAQKXtE%2FkNEsWkKV9pAKq0vLJReuFBg5FTQ1oqRNPgbG1P1tuDe%2BU8P88hQpK9OMGCDMUofVZLpzZYlr9zHq1vtPdNange8nYgBsJud7P%2FKtcgP9F1cuQ2Fq%2FBiccNB5LTXlmrw%2FWh0y7WKHp3yAG9LqTGHOVlr0HVZ%2BrKxGMTu35Rk%2F6ecXL1t3Y12VAXgFK2yNqOWdil1h%2BJa%2BxhbSCjx8pu6HycHok8oUMIermvCrtM8F1XbSKsKkQCY7y0OdHHPXNV1d%2Bnyd81Vq27vYbwtVNkxv21sXbMGnbumEZowExulnV1ZBOS6q%2FKjYDFuHg73J%2F4RuKkILoRbQ4ZHu8Un0Bs2XLFcceitGdi%2FVfKDy%2Fmm4BXGxsX%2BxxtvppsAW5OCgqPP5p3zuM1QGOVCjky9c6LjnQ1oklTiqk%2F03oz%2FXGWeiwMRNup6KJ2WYQveshmHcJN7Na7VJFRbw0y2AIa9kQE93XMPyLvb4GOqUB6te9rdlYouLXL8vHwokLv8%2Fh6NzpqS7mPIRuQ7Ljwp7xoL9v2dG5d1xz6AQlXT5q1L5zBCtSUV%2Bp28HL8DckjjorG%2BuN%2B%2BbTWPNrxKOJeuECLLchqUjcoifKZVQc2GFLvYncTpKt9ZV5igF0gBZ%2Bzg1NCKU517WL0gaAlTXuKSZihEIl9k%2FMt465vj0J7Z0p%2FSU083NsO39qDvQovYqzzQwaszzk&X-Amz-Signature=534b957c76b09a69ed8f47273731aa2a1c048c78c4d3a4584783acbb1c52c06e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYJ4JM6X%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIAnHtVn0K32RhSm8ozN1%2BF2W0lP5Rv5N0xCnlvqYY59GAiEAteR3xir3tIRHC5%2B0v%2FoXKDRwVehvuKDaQ7Ly70g3KXUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPXToxa%2BzVW3Sy6iCrcA6tEwioPlEJjtOLDku7VU9SvOCet0Tp%2FZc6S5SgGkCeIpgvxaND%2Bq%2Fv29KfKORJGSFYilZDOebIBhru%2BCDYylPYLhD2h72EpuvsMqcp0ZdXr9H5m5o5lyzE5QUOoOb%2BkkCOUIyjeF3YE%2FA0jisbHUEOa7XtDJQPVAQKXtE%2FkNEsWkKV9pAKq0vLJReuFBg5FTQ1oqRNPgbG1P1tuDe%2BU8P88hQpK9OMGCDMUofVZLpzZYlr9zHq1vtPdNange8nYgBsJud7P%2FKtcgP9F1cuQ2Fq%2FBiccNB5LTXlmrw%2FWh0y7WKHp3yAG9LqTGHOVlr0HVZ%2BrKxGMTu35Rk%2F6ecXL1t3Y12VAXgFK2yNqOWdil1h%2BJa%2BxhbSCjx8pu6HycHok8oUMIermvCrtM8F1XbSKsKkQCY7y0OdHHPXNV1d%2Bnyd81Vq27vYbwtVNkxv21sXbMGnbumEZowExulnV1ZBOS6q%2FKjYDFuHg73J%2F4RuKkILoRbQ4ZHu8Un0Bs2XLFcceitGdi%2FVfKDy%2Fmm4BXGxsX%2BxxtvppsAW5OCgqPP5p3zuM1QGOVCjky9c6LjnQ1oklTiqk%2F03oz%2FXGWeiwMRNup6KJ2WYQveshmHcJN7Na7VJFRbw0y2AIa9kQE93XMPyLvb4GOqUB6te9rdlYouLXL8vHwokLv8%2Fh6NzpqS7mPIRuQ7Ljwp7xoL9v2dG5d1xz6AQlXT5q1L5zBCtSUV%2Bp28HL8DckjjorG%2BuN%2B%2BbTWPNrxKOJeuECLLchqUjcoifKZVQc2GFLvYncTpKt9ZV5igF0gBZ%2Bzg1NCKU517WL0gaAlTXuKSZihEIl9k%2FMt465vj0J7Z0p%2FSU083NsO39qDvQovYqzzQwaszzk&X-Amz-Signature=7e3458391a3d4dfc892c5bfabfd955068004cf4cdac007e6b732434e473cf251&X-Amz-SignedHeaders=host&x-id=GetObject)

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
