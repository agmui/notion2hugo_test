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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPBB45FH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHL1ZDYiHAwDprzlS4BzC3YwX3R5qEJ0Y3C7kRunzfmgAiB8B1XBaZGOjVDNL01WqAO6iPCWPCLVisw9qMii7JEGPir%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMUjvmgDRFB4pF0NxBKtwDkCBqAV32JxPhuerzq%2F74hr3UOEUN1UORVA6AfubpNhzpAewmtjV3hAnZwhsFdOXfLW0WYcj%2FnKEvsKLmwuZINWjU2fbwy0K%2BGxK0M2fbFf3JtHG4EtkzH8kW4mxJaqr%2BaJF87Z2KkdVcfJDa%2FO9V%2B%2BT7eRF8DLdj9GCxOlAy9n47s6G83MbXExDCGJQtPqEHlzimIUyhbBblUxClImhkcirDSAMvIXU32g8w%2FdZrzOGeL1z0R1q5lU12y3EsJK1phhyx2Evyq2K7jFZUMGAMOJ5gxV6sd%2FMcEt50jTOIOMz70OLjD4HIvZM0wro1qKultNBGDtdO%2Beqt%2BXRlUQabLaMLXFk%2BVc6t%2BLTHesp2HopOi2RQ372oxvqfpGq8407Wvp0y%2B2qGUjyjiE9gXbEDKaGqS0U5oaJwZ1vZlfEe47pnw9tXaYL2mrqcAALuf54tEkxXBl9Yx8%2BZAVd2WCvMK85MD3DkL%2FcVaDAt188T5vG7DMXHT4yhIrVaSaUWngRZ4nsOhF0tPKEjSpYCaPhEN1uDxpAE0SJsCTMYtkY83LiMZEP4yg94uwkXP3X7yrk0pCmEOcqEATyLFCI%2BdxxX5W7V6Fx3uR0lkcapR668ubTZbej6ZL3QW4dB7uIwhMDzvwY6pgHfdnp1HE%2BhGv7DmJGj%2B1jKXYoMhq8PD43W17h0pY91pY%2F%2Fl046qS6buZDLHemfw62Z6zkT1rzrAx67z7E3sQwkY2N5vxALEmUIsawJu4%2F3Z8tCNHKD61yhJJGKMM14pqpeCydx0Xv9F4qV11hUxCl1eChOGUD%2Bi0ZHVPr7JOUMP34GdVl7ri12hJ9paA777Of7tpRiGWHiA%2Bj0grnYpZcSXVjH9iYk&X-Amz-Signature=26ae562fe68476acb68b42457ba2189ad349b98140bc3d62d10bcbaf5f21287c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPBB45FH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHL1ZDYiHAwDprzlS4BzC3YwX3R5qEJ0Y3C7kRunzfmgAiB8B1XBaZGOjVDNL01WqAO6iPCWPCLVisw9qMii7JEGPir%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMUjvmgDRFB4pF0NxBKtwDkCBqAV32JxPhuerzq%2F74hr3UOEUN1UORVA6AfubpNhzpAewmtjV3hAnZwhsFdOXfLW0WYcj%2FnKEvsKLmwuZINWjU2fbwy0K%2BGxK0M2fbFf3JtHG4EtkzH8kW4mxJaqr%2BaJF87Z2KkdVcfJDa%2FO9V%2B%2BT7eRF8DLdj9GCxOlAy9n47s6G83MbXExDCGJQtPqEHlzimIUyhbBblUxClImhkcirDSAMvIXU32g8w%2FdZrzOGeL1z0R1q5lU12y3EsJK1phhyx2Evyq2K7jFZUMGAMOJ5gxV6sd%2FMcEt50jTOIOMz70OLjD4HIvZM0wro1qKultNBGDtdO%2Beqt%2BXRlUQabLaMLXFk%2BVc6t%2BLTHesp2HopOi2RQ372oxvqfpGq8407Wvp0y%2B2qGUjyjiE9gXbEDKaGqS0U5oaJwZ1vZlfEe47pnw9tXaYL2mrqcAALuf54tEkxXBl9Yx8%2BZAVd2WCvMK85MD3DkL%2FcVaDAt188T5vG7DMXHT4yhIrVaSaUWngRZ4nsOhF0tPKEjSpYCaPhEN1uDxpAE0SJsCTMYtkY83LiMZEP4yg94uwkXP3X7yrk0pCmEOcqEATyLFCI%2BdxxX5W7V6Fx3uR0lkcapR668ubTZbej6ZL3QW4dB7uIwhMDzvwY6pgHfdnp1HE%2BhGv7DmJGj%2B1jKXYoMhq8PD43W17h0pY91pY%2F%2Fl046qS6buZDLHemfw62Z6zkT1rzrAx67z7E3sQwkY2N5vxALEmUIsawJu4%2F3Z8tCNHKD61yhJJGKMM14pqpeCydx0Xv9F4qV11hUxCl1eChOGUD%2Bi0ZHVPr7JOUMP34GdVl7ri12hJ9paA777Of7tpRiGWHiA%2Bj0grnYpZcSXVjH9iYk&X-Amz-Signature=589efb19d883b0310bd0053e7d7290a02a6bc681a9b31d7466947239d1a7da66&X-Amz-SignedHeaders=host&x-id=GetObject)

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
