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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLER5RJ5%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWIGzTHIC0%2F5UaFHiE1HUwYMRSGPrpag%2BQyuqP5G7oAAiBt%2BzcvvMiQL%2BBbA9WFx6FjbcSie%2Bisz6desGYYprc0Lyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM2j2Y6VA5snLg%2BlVHKtwDw%2Bjz1JVBiorp1gSyvNJhDTAlTa7XQ3T9nmBavN1fuPa7xritIZr6w4e8Y7kqUznOVc1TngspPHhybnM1peH3NHVAcBzFHO%2Bs4U05d2AfrgOHEVkYCe1teNAJzalfcC%2Bx15JHMwLPXzrEMmO0lYTv1K9LEOHwaRren06M6nL%2FyGCdh4dtmcdne%2FNdF%2BvcWpQ8KpweHRz%2FjDwonBBidUgS%2FAOfYS7ApSfkA5qWtctvuW5PFhV9NaYdkSaWH%2FCzPh2Bb%2Fq1hkURjEZ6DjNf2SDbOL4%2B5VP2IMek3ScA6h56HMf2DTTia%2Fr%2BZtCpZ6Bx2edCtiZL3Pa2gYiZ%2F35csGJKgkX0Lm81Vintsrdv6GcjiPGftEW8jdepitCfbOzFWq4q78VD6%2FRUJChHLbskPBYZnPP1njvwPF%2Bq7u2Pb7G60QShKSFiphVGHek%2FL6iHISneTDuY2moc215oYxTEqyiyMSkMuqgKgrjZmJ6hRoDVBFMuFaVLDWUT%2F5aN0XjQtZxsusX571S2fngMpacVOgeQPhcz%2F6a8SDYoIzTGuTz%2Ft2wG8uVzu5lNlADRPsB0ULEAcq%2BWxjI%2F0YOYKgRNmYOGgfowG82euE4rt2ggZDI0ZvxIrRWM5Iay%2Fr48vUow8ojHwgY6pgHPM%2FkcfsmCwFuW2sR1GJMT3qOHNUpQLOD759wohSmIy6YCKDmhXZ%2FTbEsM18QtWTEs0Q4q0FA22W2pbYpuWmavo%2FRwFL%2FkZS847M6%2Birze4aOMJh2hBUXPyggl3vaFwqvDCtdXa%2By32A%2FKIqJ%2F8aYgP%2B40AS5Z4RQzczDz8MWMKYeXEY3mabnzPJHmzCoSsgpgu%2F%2BH49spmuEwcoe0mN1Nh4guFiuS&X-Amz-Signature=e3f868d062336ee95f14d05a463eb5b438de6782821893c9dd9c8458d39f02a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLER5RJ5%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWIGzTHIC0%2F5UaFHiE1HUwYMRSGPrpag%2BQyuqP5G7oAAiBt%2BzcvvMiQL%2BBbA9WFx6FjbcSie%2Bisz6desGYYprc0Lyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM2j2Y6VA5snLg%2BlVHKtwDw%2Bjz1JVBiorp1gSyvNJhDTAlTa7XQ3T9nmBavN1fuPa7xritIZr6w4e8Y7kqUznOVc1TngspPHhybnM1peH3NHVAcBzFHO%2Bs4U05d2AfrgOHEVkYCe1teNAJzalfcC%2Bx15JHMwLPXzrEMmO0lYTv1K9LEOHwaRren06M6nL%2FyGCdh4dtmcdne%2FNdF%2BvcWpQ8KpweHRz%2FjDwonBBidUgS%2FAOfYS7ApSfkA5qWtctvuW5PFhV9NaYdkSaWH%2FCzPh2Bb%2Fq1hkURjEZ6DjNf2SDbOL4%2B5VP2IMek3ScA6h56HMf2DTTia%2Fr%2BZtCpZ6Bx2edCtiZL3Pa2gYiZ%2F35csGJKgkX0Lm81Vintsrdv6GcjiPGftEW8jdepitCfbOzFWq4q78VD6%2FRUJChHLbskPBYZnPP1njvwPF%2Bq7u2Pb7G60QShKSFiphVGHek%2FL6iHISneTDuY2moc215oYxTEqyiyMSkMuqgKgrjZmJ6hRoDVBFMuFaVLDWUT%2F5aN0XjQtZxsusX571S2fngMpacVOgeQPhcz%2F6a8SDYoIzTGuTz%2Ft2wG8uVzu5lNlADRPsB0ULEAcq%2BWxjI%2F0YOYKgRNmYOGgfowG82euE4rt2ggZDI0ZvxIrRWM5Iay%2Fr48vUow8ojHwgY6pgHPM%2FkcfsmCwFuW2sR1GJMT3qOHNUpQLOD759wohSmIy6YCKDmhXZ%2FTbEsM18QtWTEs0Q4q0FA22W2pbYpuWmavo%2FRwFL%2FkZS847M6%2Birze4aOMJh2hBUXPyggl3vaFwqvDCtdXa%2By32A%2FKIqJ%2F8aYgP%2B40AS5Z4RQzczDz8MWMKYeXEY3mabnzPJHmzCoSsgpgu%2F%2BH49spmuEwcoe0mN1Nh4guFiuS&X-Amz-Signature=9116df6699e2148cc512d6d5a6075cf35c3a86a1fb25cce1a4a540357b8b32a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
