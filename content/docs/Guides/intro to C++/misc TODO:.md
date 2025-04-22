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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5JYIFYR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCDP5AVOqEHErjuxtO7GjzwlQ3jrGSuu6DDLXCxJ4SVggIgYkGhRGt7G6EKkbAJXMOPOX5HEtWpvlMwXKptPH8BgawqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEifVWtidJ%2BxTB14zSrcA6IVqyBqkiFJXptpjUZMo5lAeFvKGAukd8uk9N5j65p3w9lBiOc07%2B1%2B0o%2BL8ZB1b0pEoHJUaBO3UKDQ3Z46BQM0ncnV%2Fn9YECZJFG8kf5yEx3UI6CZlTcRncqIjB9dvKB7g%2Bs6UWTO%2BZFmYZ6kIiNrCqtYk5fdJ7zFMC4gX8usyxDRoC8%2FRfAGJ1GiutKwevW%2FJ%2F1FY9PjhiRHKlNkdzRfrijJq2vwfbYWDBskVcJ1PZ70RVKowNELn8q8DV2Y7vfzE5AhYG%2FvqYsN%2FdERx1vHDXRtcK9b2Moap7hxOEYmT0EGwyEKI7NHJsFdg78oXBWyt6OAXiQArk3oK9glUNuXww%2Fvs1RLE6Z%2FWQrg%2Faco5%2B0f3J9HFynELran4Hh2POt8x%2F6jWdDuk54uDLV%2BPE0MCatf9tT87%2BXizy%2B8Yr1BhHz1XZ8DRRv7KHUxU7O4RJfhSeZlr3g7itXPme3M72oFZu%2B%2FXFxStCD%2BUV2z%2BuR15Nvm3WTsYM1hqU5f%2FrMmbmkTnSLVjV0PS4aHgQpwSdoegAvcj5bk4cpUEJt9dF%2BN6OoofVhcCAKxHw%2BjYMMFCkfEQpT%2BqdQ0wj9f6wsz%2BUaHJ3K0175gQrPNlb0reufSp1Chpy97UHQlAj8NWMI%2FVn8AGOqUB78BwlmPOW0Zxkzft7ajMKv2snam659kp4DD0ik2JV1L5bD5sHgSd1cmSivfiTqGcIAy2yaX97HBVmp6QRZzsNnrgcTZPFt5RogMVJKPnz1sDosqIR1Zz%2BPk%2BlkAYe1QJ0pZoHBmIKh1YO3mXb4cJEuv2RMwjMCTunKnrWObAMEszZ1MVuHumtJKN2ukD2pCGZW3OnQEhQrC5j0Yy4wnZxR8KaVr6&X-Amz-Signature=4c9ce5258eccbe04caf122565e850d071de9a6b6ecf4cf966520362957d039b0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5JYIFYR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCDP5AVOqEHErjuxtO7GjzwlQ3jrGSuu6DDLXCxJ4SVggIgYkGhRGt7G6EKkbAJXMOPOX5HEtWpvlMwXKptPH8BgawqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEifVWtidJ%2BxTB14zSrcA6IVqyBqkiFJXptpjUZMo5lAeFvKGAukd8uk9N5j65p3w9lBiOc07%2B1%2B0o%2BL8ZB1b0pEoHJUaBO3UKDQ3Z46BQM0ncnV%2Fn9YECZJFG8kf5yEx3UI6CZlTcRncqIjB9dvKB7g%2Bs6UWTO%2BZFmYZ6kIiNrCqtYk5fdJ7zFMC4gX8usyxDRoC8%2FRfAGJ1GiutKwevW%2FJ%2F1FY9PjhiRHKlNkdzRfrijJq2vwfbYWDBskVcJ1PZ70RVKowNELn8q8DV2Y7vfzE5AhYG%2FvqYsN%2FdERx1vHDXRtcK9b2Moap7hxOEYmT0EGwyEKI7NHJsFdg78oXBWyt6OAXiQArk3oK9glUNuXww%2Fvs1RLE6Z%2FWQrg%2Faco5%2B0f3J9HFynELran4Hh2POt8x%2F6jWdDuk54uDLV%2BPE0MCatf9tT87%2BXizy%2B8Yr1BhHz1XZ8DRRv7KHUxU7O4RJfhSeZlr3g7itXPme3M72oFZu%2B%2FXFxStCD%2BUV2z%2BuR15Nvm3WTsYM1hqU5f%2FrMmbmkTnSLVjV0PS4aHgQpwSdoegAvcj5bk4cpUEJt9dF%2BN6OoofVhcCAKxHw%2BjYMMFCkfEQpT%2BqdQ0wj9f6wsz%2BUaHJ3K0175gQrPNlb0reufSp1Chpy97UHQlAj8NWMI%2FVn8AGOqUB78BwlmPOW0Zxkzft7ajMKv2snam659kp4DD0ik2JV1L5bD5sHgSd1cmSivfiTqGcIAy2yaX97HBVmp6QRZzsNnrgcTZPFt5RogMVJKPnz1sDosqIR1Zz%2BPk%2BlkAYe1QJ0pZoHBmIKh1YO3mXb4cJEuv2RMwjMCTunKnrWObAMEszZ1MVuHumtJKN2ukD2pCGZW3OnQEhQrC5j0Yy4wnZxR8KaVr6&X-Amz-Signature=9beb9daab2d0d39626735e346219f3d742913559e7cbb420b345eef62ffd9ec8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
