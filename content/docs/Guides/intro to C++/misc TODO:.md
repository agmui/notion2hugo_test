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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDQ3FDW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZLWWQTXuB46rbDPkGwBzpwAMyhY0Mrnd12iiPzGxkNQIgZOaMf5YWFSdlU4%2FjrEGyWpsVaubMiClyB%2Ba%2FOr1VpRgqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMzKqTpQk0bFUZW%2FCrcAx6Pnqr3EHE0IHMVyzlnn1RZE5QQTPm3aTGryjC3cl0Wj2J02l8cCqyLom3l9OxWj0%2B5Mv3SiW2WhEEP8WMfyko6a7qXKJ07GhNpu%2FSEIyDC6hHEp6AUjeb0%2B6i3g5Fhwm7Kjc%2BTHTneq6tkxvUwamYT5jKJypFfh%2BRXGY0tQzpOh2pUDsZkVpKJbcY9emvkquxWSdMKOoA9lEWC6sdZiy4nPrBUMHozDkUo9h7HrJUJHhslfbPYEHHOvYICLIIYoLYSq0qFLICB7D9NliaKrDZJVrI4GJsKLiZSwohwCCcB0zWUFjobhGz9A8X1Gz3maM2YC4n25MiXUBy%2BBSMWSzemTD2n5%2FobXdDeZwcGxPS4i6k3EgBzhuoRY4MBsylCrXyJZ1s634i1Ss63OY5IhQ%2BtDEVdxN5RXJsU49RyuSlVOP8GQ%2FxOIogIq4G2Q5rOf28F%2FeYnqpCTwQ5ehbVrYolhW4foubQILSNkn5KNMLPcnybJuUTDIwF2aW2YdgbmLiHOi2UAk84bcf8X%2Bg7CCFHrYsgdplJT79wyF8XictAgDte7cEPnogV1l4ujA7MD8XEkgzaQvleFl9Mpu9qh1CS6h2aTjwpgqIN8hRqnEux0WqWAW%2Bb8lxOROvSlMKPL3L0GOqUBXFYoIeTJ6dSzYLHjy0ve8h65abscT%2F4zO%2BABK7QccqFIy2Q3rmd4%2BQrRMRAD18cwS4vt5U6urgnYhE0FxPM69wZxBB7qdm1HkhPNHkCZqwiI%2F4AvpJ7GDudIMFjDXYc2GP2EjqcqRKZ2ZNURi0JxBAUpfyjtMfuD3YcNIJdoXLVsXYslevH%2FsvU9KZawR%2BuX4jvpbw9WmpguxeP0df%2FkCbwMh%2FsN&X-Amz-Signature=3c04796837613ea0e0825eca6170005b983e5cf9a253054bfcd51fecb6361404&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDQ3FDW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZLWWQTXuB46rbDPkGwBzpwAMyhY0Mrnd12iiPzGxkNQIgZOaMf5YWFSdlU4%2FjrEGyWpsVaubMiClyB%2Ba%2FOr1VpRgqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMzKqTpQk0bFUZW%2FCrcAx6Pnqr3EHE0IHMVyzlnn1RZE5QQTPm3aTGryjC3cl0Wj2J02l8cCqyLom3l9OxWj0%2B5Mv3SiW2WhEEP8WMfyko6a7qXKJ07GhNpu%2FSEIyDC6hHEp6AUjeb0%2B6i3g5Fhwm7Kjc%2BTHTneq6tkxvUwamYT5jKJypFfh%2BRXGY0tQzpOh2pUDsZkVpKJbcY9emvkquxWSdMKOoA9lEWC6sdZiy4nPrBUMHozDkUo9h7HrJUJHhslfbPYEHHOvYICLIIYoLYSq0qFLICB7D9NliaKrDZJVrI4GJsKLiZSwohwCCcB0zWUFjobhGz9A8X1Gz3maM2YC4n25MiXUBy%2BBSMWSzemTD2n5%2FobXdDeZwcGxPS4i6k3EgBzhuoRY4MBsylCrXyJZ1s634i1Ss63OY5IhQ%2BtDEVdxN5RXJsU49RyuSlVOP8GQ%2FxOIogIq4G2Q5rOf28F%2FeYnqpCTwQ5ehbVrYolhW4foubQILSNkn5KNMLPcnybJuUTDIwF2aW2YdgbmLiHOi2UAk84bcf8X%2Bg7CCFHrYsgdplJT79wyF8XictAgDte7cEPnogV1l4ujA7MD8XEkgzaQvleFl9Mpu9qh1CS6h2aTjwpgqIN8hRqnEux0WqWAW%2Bb8lxOROvSlMKPL3L0GOqUBXFYoIeTJ6dSzYLHjy0ve8h65abscT%2F4zO%2BABK7QccqFIy2Q3rmd4%2BQrRMRAD18cwS4vt5U6urgnYhE0FxPM69wZxBB7qdm1HkhPNHkCZqwiI%2F4AvpJ7GDudIMFjDXYc2GP2EjqcqRKZ2ZNURi0JxBAUpfyjtMfuD3YcNIJdoXLVsXYslevH%2FsvU9KZawR%2BuX4jvpbw9WmpguxeP0df%2FkCbwMh%2FsN&X-Amz-Signature=242dd4e31bdaf544b18e97ccc2b4ed3f4d5e5b5abcb8d2e1c8d0fa1a055f0848&X-Amz-SignedHeaders=host&x-id=GetObject)

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
