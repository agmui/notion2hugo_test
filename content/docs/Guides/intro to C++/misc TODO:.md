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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLGNFLXX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCLvtVJrv9E2Wb8tdFnpSRtM1gjykraxiAkvX1GsNZDRgIgSyT%2Be5QMx9p3t%2F8CKm9lC%2BTbwi76CVqP9U5TqNSh0AMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaFPpetSXY26I%2Ft1yrcA7VkMC57vgVFOXRlYGvXxgRiQRaNYoDTc3feNmaTWso18ZfVg%2BMFgsYGhIK6%2F%2FixZZLg7BxIqt4KkoyF7ainNYrzhp980fkCT5X3Nox%2BTl4BifbMaypSOv6c%2BRhhLYzpCRmhe9wNBGJmPyiMRORnt%2FK40WChyOKP4oCpMs9s8Epp%2BDO9Iqn4sWHM6QfzVB3Ym2MfZoUYQQNZZD5nEYNFYjIhCFbFeDwRM0LVG0ZbUMhUbzVrqI0FxfBT%2FDy0eRMcZioG5zWff1Hw%2BaBVThsk4VNewdQft%2Ff%2B6jX1PVdvpWUOnhJ4Jt4n62FegxYljYsc3%2BhJ8kZcYsx26IS7SSgkH6U65kouoUsuphIxYfTUTqvK%2FpaQ0jOpL6DBheuiBdww8isolQEMiKSxdTc2KxSqXJAlCFELmubJupYLFKri1hyAbgqfBBdzk5u5fa1DBGfVCoXCjoVHOEZY9QlPi%2FBq4rOnFyqDagGKEs9RAL7yzp%2B8YUvDN0wofhhsdt%2FLgojBvIWFj62GEzKTfsb%2BXXZ1NwImANwvkF18h3Tyfc93n1FJXcwrK76hIVHOi3HJN4gua4SPlotfA5%2BaupLJMkH9KgcBD%2BrGWZPIm1GYhg66a2ntKFTpFD1R3xpXdFB2MPiGxsAGOqUBxUNoPCwgdV8oO9XXfoaxo3JdnDOvOUp%2F7OsBi3QI7%2BRwTXmspkWT4ieDRSxtNeR%2F9W8TXs1pqIjOMe82vaHMrpSNVe839hnBFGK%2FUdq8iY7vM6JvLnBZUT3FP4HoL35wHWzIT%2FDxCjn5M3qzxRq5%2Fdt6c6zyxSD3SR%2BlwawlqA5gxOG8RpPwyqy0Jqn59rJ%2Fl3xIKwlcAMhW3MCLfO1vw12xXTgJ&X-Amz-Signature=b8e2aed6005f40b2297e477f593c3064c29dcb21155eeaf523e52e176a233ecf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLGNFLXX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCLvtVJrv9E2Wb8tdFnpSRtM1gjykraxiAkvX1GsNZDRgIgSyT%2Be5QMx9p3t%2F8CKm9lC%2BTbwi76CVqP9U5TqNSh0AMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaFPpetSXY26I%2Ft1yrcA7VkMC57vgVFOXRlYGvXxgRiQRaNYoDTc3feNmaTWso18ZfVg%2BMFgsYGhIK6%2F%2FixZZLg7BxIqt4KkoyF7ainNYrzhp980fkCT5X3Nox%2BTl4BifbMaypSOv6c%2BRhhLYzpCRmhe9wNBGJmPyiMRORnt%2FK40WChyOKP4oCpMs9s8Epp%2BDO9Iqn4sWHM6QfzVB3Ym2MfZoUYQQNZZD5nEYNFYjIhCFbFeDwRM0LVG0ZbUMhUbzVrqI0FxfBT%2FDy0eRMcZioG5zWff1Hw%2BaBVThsk4VNewdQft%2Ff%2B6jX1PVdvpWUOnhJ4Jt4n62FegxYljYsc3%2BhJ8kZcYsx26IS7SSgkH6U65kouoUsuphIxYfTUTqvK%2FpaQ0jOpL6DBheuiBdww8isolQEMiKSxdTc2KxSqXJAlCFELmubJupYLFKri1hyAbgqfBBdzk5u5fa1DBGfVCoXCjoVHOEZY9QlPi%2FBq4rOnFyqDagGKEs9RAL7yzp%2B8YUvDN0wofhhsdt%2FLgojBvIWFj62GEzKTfsb%2BXXZ1NwImANwvkF18h3Tyfc93n1FJXcwrK76hIVHOi3HJN4gua4SPlotfA5%2BaupLJMkH9KgcBD%2BrGWZPIm1GYhg66a2ntKFTpFD1R3xpXdFB2MPiGxsAGOqUBxUNoPCwgdV8oO9XXfoaxo3JdnDOvOUp%2F7OsBi3QI7%2BRwTXmspkWT4ieDRSxtNeR%2F9W8TXs1pqIjOMe82vaHMrpSNVe839hnBFGK%2FUdq8iY7vM6JvLnBZUT3FP4HoL35wHWzIT%2FDxCjn5M3qzxRq5%2Fdt6c6zyxSD3SR%2BlwawlqA5gxOG8RpPwyqy0Jqn59rJ%2Fl3xIKwlcAMhW3MCLfO1vw12xXTgJ&X-Amz-Signature=00a26aec3b7a6e0af0a98f808a9c33730665cb6402e7942bf704f0aeabbd0c40&X-Amz-SignedHeaders=host&x-id=GetObject)

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
