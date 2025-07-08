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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCNQHFV4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBwDJB%2BKkr07rVdyTDmgS%2BrD6urTlCVWA%2Fr7S3G1jD5AiAxdh%2B%2BpsY34kcIyYJGqMHFjVHu%2BjzWP3XkDDfXKYxydSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ147ez1G0x5TphZJKtwDXgl2bz8YSt8SmxDgLuHRj4SGJ3iUymKSYL1HCRsKB2cGManqhYSyYN1rZ34aMnl2vvKCVQaIlNKyji6pXU50gewbB5vkpP3JWcnopfGGVYRLrRTHqRvawvpezdVt%2BdgzIB2DCDW5FdG%2Ffj9ygRNCX0Qm88iAiz9tDovJ65UUGw5wDvSCUuTieMvmZZXSZinu5rNaILjfLkM%2FXviPdh%2FbnqengxjwH0HAjy08nuc1O3DMIA2PjZ6UOQxaN%2B4%2B%2B7i%2BjII3J4rGtvDGJrdssqg59ztPyFc4mkQPFe%2B22J1tpioakw3qEwtxUxFQDG6gjR0SEoonw1nuaKPveAqGuJE0qmfLRCPArKqNDRpV0oXCn5DeRK7NQq85C2Ci%2Fli4f%2BNXygwhCXoCrlYezYew91Rjz7NhPlMujCULtJlax64s8Xld1kPPSbRcAQahekPvCMim2TzATNm8%2BuSvWcwawjw9ctXcIna2Xu7DlIdcpNTdD%2B2CDmYkNKZNeV4HPiaGUH7fD5FnPYskIgfvjQscYK6uA%2F7Ek0Y85pAn%2F1Cxv38f3FzBF38sd%2FWXVFvb1UXod7WQ%2Buu%2FJ3DEnRkTFJTKN%2Bb%2BiIFd%2FvhveFAUGwliztG8hx6p1sOgix08DZZmrtkwgv2zwwY6pgHL%2FlHJwQw8S9CZswUIC6NaJAgSspVDagwATKNuYT1SJuz7NP6y6ee%2FhublgzbjETygljJo5LDGWEURwbUNIpoyrRwDMFr%2FpxJrwGq%2BZtDWiXov3OtNT5W99wFnwjvRWwFfNAex9QK%2FpRa%2FELGwnnth0QF3WPVWfWqWfjKuq1%2FlOvFoYhTREQrNaCOYx243sHehzzUKFmAHoaNgDdhayTmItSN5qr5b&X-Amz-Signature=1e2fbf6d70dc412c1a3dab8b9c549a1146c03a8cccbcc4a398e6dc0ee58f9289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCNQHFV4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBwDJB%2BKkr07rVdyTDmgS%2BrD6urTlCVWA%2Fr7S3G1jD5AiAxdh%2B%2BpsY34kcIyYJGqMHFjVHu%2BjzWP3XkDDfXKYxydSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ147ez1G0x5TphZJKtwDXgl2bz8YSt8SmxDgLuHRj4SGJ3iUymKSYL1HCRsKB2cGManqhYSyYN1rZ34aMnl2vvKCVQaIlNKyji6pXU50gewbB5vkpP3JWcnopfGGVYRLrRTHqRvawvpezdVt%2BdgzIB2DCDW5FdG%2Ffj9ygRNCX0Qm88iAiz9tDovJ65UUGw5wDvSCUuTieMvmZZXSZinu5rNaILjfLkM%2FXviPdh%2FbnqengxjwH0HAjy08nuc1O3DMIA2PjZ6UOQxaN%2B4%2B%2B7i%2BjII3J4rGtvDGJrdssqg59ztPyFc4mkQPFe%2B22J1tpioakw3qEwtxUxFQDG6gjR0SEoonw1nuaKPveAqGuJE0qmfLRCPArKqNDRpV0oXCn5DeRK7NQq85C2Ci%2Fli4f%2BNXygwhCXoCrlYezYew91Rjz7NhPlMujCULtJlax64s8Xld1kPPSbRcAQahekPvCMim2TzATNm8%2BuSvWcwawjw9ctXcIna2Xu7DlIdcpNTdD%2B2CDmYkNKZNeV4HPiaGUH7fD5FnPYskIgfvjQscYK6uA%2F7Ek0Y85pAn%2F1Cxv38f3FzBF38sd%2FWXVFvb1UXod7WQ%2Buu%2FJ3DEnRkTFJTKN%2Bb%2BiIFd%2FvhveFAUGwliztG8hx6p1sOgix08DZZmrtkwgv2zwwY6pgHL%2FlHJwQw8S9CZswUIC6NaJAgSspVDagwATKNuYT1SJuz7NP6y6ee%2FhublgzbjETygljJo5LDGWEURwbUNIpoyrRwDMFr%2FpxJrwGq%2BZtDWiXov3OtNT5W99wFnwjvRWwFfNAex9QK%2FpRa%2FELGwnnth0QF3WPVWfWqWfjKuq1%2FlOvFoYhTREQrNaCOYx243sHehzzUKFmAHoaNgDdhayTmItSN5qr5b&X-Amz-Signature=add7ca0f2085a463caac6edca173208e56b5bcd6e9e146d0a73e94ea880f64a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
