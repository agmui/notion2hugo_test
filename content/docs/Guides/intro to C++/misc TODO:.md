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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT726YHA%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEk86sXybFj%2Fc3ultXKWHZaq0lp%2BP3pxMboVLbvxWr9dAiEAvr%2F8WYt5QCmmqj4P7QMhfc2o6eC8cwK%2BeTais8Lkp%2BwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeQL24x4URNNKEK4ircA4EKd78dXFqXN4wTa2DGFOgEG4FfXb3h8VbAHqYUKR%2FORtc8gVHW4vhKwPmA6v5%2BpbnpizJjU7ToafmK8DC2hql%2BcFrXRbicOpcO6h2Ly6h8U8A2xVlPM5ty6im6D%2B3uruw4oAtF%2FYtV0g6%2F97O8CB3%2FeuFXYG8v4fHt5labVbKF4plIx1r4ReM9x76CRCcInmrVp4iT%2BHmOYIuaY10YuyrdOcIfdF4QPxAsCxcPKjFafPyFJR%2FqmLv6BuuD%2B6L0mtvnLGM3Z5f0VMfTQDj9zQdvt3JDcv4rWeQnf96ogOjGtdHwKhHR8ydyW54WiT4hk4xdiMk7HyTmr98U92nk%2Fy0qKMBLz5UF4ypslEQ9pOWoY78ng58oy%2BhuPTYtoTRS2Sp1SK6fhwPuMK3%2FfHxDD7HoojwXSTminv8Qq3e%2B3b0dcKEW5vaRGdCgpkaJIMcO8svm5xmNBqR7im1zmkkosiPKo8zIQuBGu71NGbbPXdbWBwdqSV0vOPV1ynrWOIGf4%2F7W82EOrcircHqBJOzALY%2BpnvhkInIrpsJAMx8PytBUBMmA6m%2FW7Z%2FEzZk1P%2Fs%2FpcpQ9EK%2B92fF1PsFLjCoVIf%2BwhEv09v70NIhfiyHz9t82ECuGwFjKUWcMyC8MN6hg8EGOqUB6aWiiuNeeOjVvdil9B2ZFgLQR18oEBW5SniRndeiOQ1ckwuMRuhcS5ocUnA5ESDVOU2PvfcQwXl2ucINMU55sQfpmpbubScX9efsMaijWNikNnrMir1ff4f%2FRO49f21qemg2o%2B%2F7Q%2FcYrc%2BWoNZltW6dBk7peV8DChryJJVrKXdmhS5veF1lQKr4DXeOhY4fr0V9DOYp8v8KdQ9ktK6uLQp20Al2&X-Amz-Signature=f51a7f2442f5ac7bb3cc0cfa3bb49c0720fd823f88c3705d920a1ce239d70a69&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT726YHA%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEk86sXybFj%2Fc3ultXKWHZaq0lp%2BP3pxMboVLbvxWr9dAiEAvr%2F8WYt5QCmmqj4P7QMhfc2o6eC8cwK%2BeTais8Lkp%2BwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeQL24x4URNNKEK4ircA4EKd78dXFqXN4wTa2DGFOgEG4FfXb3h8VbAHqYUKR%2FORtc8gVHW4vhKwPmA6v5%2BpbnpizJjU7ToafmK8DC2hql%2BcFrXRbicOpcO6h2Ly6h8U8A2xVlPM5ty6im6D%2B3uruw4oAtF%2FYtV0g6%2F97O8CB3%2FeuFXYG8v4fHt5labVbKF4plIx1r4ReM9x76CRCcInmrVp4iT%2BHmOYIuaY10YuyrdOcIfdF4QPxAsCxcPKjFafPyFJR%2FqmLv6BuuD%2B6L0mtvnLGM3Z5f0VMfTQDj9zQdvt3JDcv4rWeQnf96ogOjGtdHwKhHR8ydyW54WiT4hk4xdiMk7HyTmr98U92nk%2Fy0qKMBLz5UF4ypslEQ9pOWoY78ng58oy%2BhuPTYtoTRS2Sp1SK6fhwPuMK3%2FfHxDD7HoojwXSTminv8Qq3e%2B3b0dcKEW5vaRGdCgpkaJIMcO8svm5xmNBqR7im1zmkkosiPKo8zIQuBGu71NGbbPXdbWBwdqSV0vOPV1ynrWOIGf4%2F7W82EOrcircHqBJOzALY%2BpnvhkInIrpsJAMx8PytBUBMmA6m%2FW7Z%2FEzZk1P%2Fs%2FpcpQ9EK%2B92fF1PsFLjCoVIf%2BwhEv09v70NIhfiyHz9t82ECuGwFjKUWcMyC8MN6hg8EGOqUB6aWiiuNeeOjVvdil9B2ZFgLQR18oEBW5SniRndeiOQ1ckwuMRuhcS5ocUnA5ESDVOU2PvfcQwXl2ucINMU55sQfpmpbubScX9efsMaijWNikNnrMir1ff4f%2FRO49f21qemg2o%2B%2F7Q%2FcYrc%2BWoNZltW6dBk7peV8DChryJJVrKXdmhS5veF1lQKr4DXeOhY4fr0V9DOYp8v8KdQ9ktK6uLQp20Al2&X-Amz-Signature=8e48877bb73d2e9563bc2750fa2faf349aa6dbac258b177c4668ee72dacbbb1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
