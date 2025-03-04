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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IH2LG56%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHswZXlOyVJF3YtcUS3WA64Tv6TIh6B%2B5GvtQPPfAG5HAiBhHwS%2F0C33EE%2FMO%2Bv4jbP8WNa%2BECooNxRMAlkRx1oipyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9fqlTwoi5S%2FyRGIgKtwDBuXqf%2BLX%2F%2BCj%2B8U%2BzF9%2BWwdTfRLJBoJGwhfciWbehBYzzyjfevLbYncO4MWpMbUPy3g5svWVLk%2Bn2N3JNjravUOSnJ04PYU7UnNfpZtCv1f9k3gjPDuvdcmapn0syHCbmh3UW0hyAzRaqvdd2UP1hEYRWLDd9zauZ4K3A1e7HECaIoZXLebwvTW4tC3iSDAG6P3Evz6uL8eUNEmMvKkf90TDYTNahGgtCzppuO8ontSJMlm1kJl4EKLPjbY7D3aPWSuh7G8w0k4kdWmP3Y%2BQzAMHuR%2FGjwnk55xUAWbjH9ukjGMONnLbIVYyi7YyxkYQubD6HUirl2UK56zKgPmwdpCfix2LYxbC08m1k5LCsMg9qQtncHrCTCPBg6vsdcrWfBVhLLrnclDrjqmwJhvep8qKHVj%2B%2B6ifIzwnqSYmaRM2Y0r8svVKJlv5cVHDw88X1idRbOo0t9ERXBrfL6mNZ5wW7zp79Xtui7efynTgASHtHXq8JwyfCoVGtdS92Slpse%2Fuc5pvj0o%2Fw0xPtffwvDLOHN7vEPH1cTHrRrfCghbEl1Q%2Blxu1f3Z8gEsUT9%2FSB4ZoV8HFGXkHN7wv24Aub68xuc%2FE7IeJ15Pumbcn1YfmeeDtC4qHYEt0%2FRkw%2F%2FeYvgY6pgEkdKx6sE6EB0W7vH%2Fsd43Fi5zG3Ijabkrp7bC41tGT5PybOwSZCQL8ZjDf9kIAj3LVeZlBHoTcVdoIys3btCwy9f9X%2FO9iA1P2F8EY1ZwY0OB25cvHmZL1hpSLKOWHZ3wzV34BbSb%2BW%2BiwzTenlkGcPJmGKiW7un4GIejsPL0dr%2B6eDJLBiQ%2BcSNe5lnVLxXmvXDMSBWXOZ%2BRhL6h8GsgP%2Bdwxa1jJ&X-Amz-Signature=1179ec293e9e4283969197f51d604d778bd0ee5b9d23cd0e473a22aa8e89ad72&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IH2LG56%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHswZXlOyVJF3YtcUS3WA64Tv6TIh6B%2B5GvtQPPfAG5HAiBhHwS%2F0C33EE%2FMO%2Bv4jbP8WNa%2BECooNxRMAlkRx1oipyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9fqlTwoi5S%2FyRGIgKtwDBuXqf%2BLX%2F%2BCj%2B8U%2BzF9%2BWwdTfRLJBoJGwhfciWbehBYzzyjfevLbYncO4MWpMbUPy3g5svWVLk%2Bn2N3JNjravUOSnJ04PYU7UnNfpZtCv1f9k3gjPDuvdcmapn0syHCbmh3UW0hyAzRaqvdd2UP1hEYRWLDd9zauZ4K3A1e7HECaIoZXLebwvTW4tC3iSDAG6P3Evz6uL8eUNEmMvKkf90TDYTNahGgtCzppuO8ontSJMlm1kJl4EKLPjbY7D3aPWSuh7G8w0k4kdWmP3Y%2BQzAMHuR%2FGjwnk55xUAWbjH9ukjGMONnLbIVYyi7YyxkYQubD6HUirl2UK56zKgPmwdpCfix2LYxbC08m1k5LCsMg9qQtncHrCTCPBg6vsdcrWfBVhLLrnclDrjqmwJhvep8qKHVj%2B%2B6ifIzwnqSYmaRM2Y0r8svVKJlv5cVHDw88X1idRbOo0t9ERXBrfL6mNZ5wW7zp79Xtui7efynTgASHtHXq8JwyfCoVGtdS92Slpse%2Fuc5pvj0o%2Fw0xPtffwvDLOHN7vEPH1cTHrRrfCghbEl1Q%2Blxu1f3Z8gEsUT9%2FSB4ZoV8HFGXkHN7wv24Aub68xuc%2FE7IeJ15Pumbcn1YfmeeDtC4qHYEt0%2FRkw%2F%2FeYvgY6pgEkdKx6sE6EB0W7vH%2Fsd43Fi5zG3Ijabkrp7bC41tGT5PybOwSZCQL8ZjDf9kIAj3LVeZlBHoTcVdoIys3btCwy9f9X%2FO9iA1P2F8EY1ZwY0OB25cvHmZL1hpSLKOWHZ3wzV34BbSb%2BW%2BiwzTenlkGcPJmGKiW7un4GIejsPL0dr%2B6eDJLBiQ%2BcSNe5lnVLxXmvXDMSBWXOZ%2BRhL6h8GsgP%2Bdwxa1jJ&X-Amz-Signature=80acb7d0a9a4a1d9d171aefcafe3cada94e57546c9ec4650d7cdc3600ef08eb9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
