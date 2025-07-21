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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2FWYEC%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUcazzwcdsnN9vX8SOn%2FpnpPg0wYiQmAa%2BCZT%2F68XkiAiEA7mp%2FKsGLnItn7Bo0b%2FUzzvyy2ABmB6NO%2BS9mnf0GjOAqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQ6h5UL47IY5obdcyrcA7%2BzNVdxlwKKSwWMdlXsWuJC%2BvECDxEubgDeaI69TQpIXZDAUYMzwJiFhyreZ34bvjQDbrPVLIS4%2FY821UWumQxaNKwK4pnbHOyxjdbJC1QDR6CQ1A%2BVNOY7ZYSVb4Agr6RFak0IsR3uC4fpwOy37x8ONCSw5uwG%2F7fgzBnTf0dcawOoXUzDM6xfowUp0KyxE8BNAG6DASeOwVyMKCHi75w%2FxNPMqgI1yU0PHDM6D5WZ3%2FqK0tL4ftoczhxGxD2RQJTx0P3SOXWDU502IDaivUilYVbKStdGg0RyNTpx8i3aIIpKx1zyYFtZDlZ9yyD0b5FOZOg4korzh0N7HXKzet3PnU6f1tQIeBXi3rK3dcBI3AE%2BJAfuua9i%2BiUxfWl3Sw2AP4TNzcQp678litkaWzyfnzydp87G94Kcwk9OgNfnPr8jJWB2NNjDGs6NWzMtk1PpHNs8SKY2A6vaMuAU2BLGmuenIml5lLWwvw3bf4tYu%2BYNhvRCDcCrp3BGzdFVsTjPAksp1yJEwUpNX9D1ljFw6nLahRzibwcEIEsrQbfdeYhawV59cb7Bh9nYR2lR9e0XR4G57S5pf6Araxel1t%2BRDZGVPKxhVUqkgiTo9iIvN3CNDE4xOIGhxpdlMOWO%2BsMGOqUBFcXIcpiR1d0vUNxSLArJNILLlU0RRERx9gewGLWprnFNk0Orqlbjs1RjpiQhIZisjU%2ByKuj0jrlwLxFRFfy9xHMsMjUd4aLlZ1IyKItqDOjHFHF2rjUcDDslxX4qqy2lCxoiTCh1JieynNYHuIL4F3QvQ6KNl664VpS7SMhvuFv18DbMHZ41enjVRFGtQJNIajD%2BiwGzGJJNU5OGrC8u%2BlvEVIkS&X-Amz-Signature=41e41b55a4f8525956a0212abcf51d5171fe85613b2bbe41c871a7a6f66b6528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2FWYEC%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUcazzwcdsnN9vX8SOn%2FpnpPg0wYiQmAa%2BCZT%2F68XkiAiEA7mp%2FKsGLnItn7Bo0b%2FUzzvyy2ABmB6NO%2BS9mnf0GjOAqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQ6h5UL47IY5obdcyrcA7%2BzNVdxlwKKSwWMdlXsWuJC%2BvECDxEubgDeaI69TQpIXZDAUYMzwJiFhyreZ34bvjQDbrPVLIS4%2FY821UWumQxaNKwK4pnbHOyxjdbJC1QDR6CQ1A%2BVNOY7ZYSVb4Agr6RFak0IsR3uC4fpwOy37x8ONCSw5uwG%2F7fgzBnTf0dcawOoXUzDM6xfowUp0KyxE8BNAG6DASeOwVyMKCHi75w%2FxNPMqgI1yU0PHDM6D5WZ3%2FqK0tL4ftoczhxGxD2RQJTx0P3SOXWDU502IDaivUilYVbKStdGg0RyNTpx8i3aIIpKx1zyYFtZDlZ9yyD0b5FOZOg4korzh0N7HXKzet3PnU6f1tQIeBXi3rK3dcBI3AE%2BJAfuua9i%2BiUxfWl3Sw2AP4TNzcQp678litkaWzyfnzydp87G94Kcwk9OgNfnPr8jJWB2NNjDGs6NWzMtk1PpHNs8SKY2A6vaMuAU2BLGmuenIml5lLWwvw3bf4tYu%2BYNhvRCDcCrp3BGzdFVsTjPAksp1yJEwUpNX9D1ljFw6nLahRzibwcEIEsrQbfdeYhawV59cb7Bh9nYR2lR9e0XR4G57S5pf6Araxel1t%2BRDZGVPKxhVUqkgiTo9iIvN3CNDE4xOIGhxpdlMOWO%2BsMGOqUBFcXIcpiR1d0vUNxSLArJNILLlU0RRERx9gewGLWprnFNk0Orqlbjs1RjpiQhIZisjU%2ByKuj0jrlwLxFRFfy9xHMsMjUd4aLlZ1IyKItqDOjHFHF2rjUcDDslxX4qqy2lCxoiTCh1JieynNYHuIL4F3QvQ6KNl664VpS7SMhvuFv18DbMHZ41enjVRFGtQJNIajD%2BiwGzGJJNU5OGrC8u%2BlvEVIkS&X-Amz-Signature=d000e500f4e46358703f4888676926d19b46ed87f01e62c189a38f3ab0da2982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
