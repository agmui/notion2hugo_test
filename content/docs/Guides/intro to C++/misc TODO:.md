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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAZBAES3%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2qOYEHxEyefGFNW3lzKLLZFruAbIsuTdIea2M0fv7hAiEA0U6e6lb8xrHZskq2ZHqFywsiHpMeexcbbBBG8PmmgkIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHFA2cMX87hNxjWXYCrcAyb4OSg5JJbrWfMzI2oJjUIcs8Wkm6o6R1XvGKvrxr3t%2Bfz6SmQgVXrFU4t5fVR0RkJvdtJCId690g5o9bIHX6mRZlFo6x03Hgmy70%2BJbaE%2FElC2T0ZfRma4Ds9hi6nDiai1Cfb6fAK6U8eDGEXNqPrxANS%2Bu6HGxPBPgUGiDZ5QXzQUi1D%2FT9H0%2B20AXJ3VpHPAMZbcUHkgAwrS%2FrMT2QQ5miDaEo2wHzeqgF5Fnv%2BSbfRksnaFv2xjemu0rEa5FZo8qN5G%2FCBjq7r1USTOVaCwCxmX2evJd5kI%2FHRNTRKpET80HwYMQF%2BSHzokux1OogWBfWYVsmYF%2BTISIjX5%2FhplSj6TazysFrdbVkyrRCvFi6%2B9%2Fo44rlyiT1QxvJTLohu4kGbX0V6xHAsfFf8BJSsiSQGnOpKpQgYtk9QwET8Y%2BtU1JOaBBY0scPnVDHmwGBt4pamNBFoXwxofxMw0IQzNPlzd6Lh34P09dNRFmM1RHYRpIqAQiCzboW%2FPZylkPonIWtxSs5RYKs%2FZwPRutpPJ0irLmjfHsrsiVhzEOznasjcEZtwt2VwZzOGwF2i6RNRKEB%2FKxRXWAM%2BtfmkXu4aP1%2BxpT0LReLUTmYeMTSZyTs8WuA0coz8HBCb4MNi83r4GOqUBzmk%2BH9v2Vg%2F6qQjA8yFfHwkkSqL4MQCSuk7ZG3hDyV69ZfQPIjxHs7Ft7JLuR%2FnolCvYDzQ781ZKKQvC21nWSovnVQnV4kI0607FIMR7F6xjADC7aAwlkES7tdX73U8ATcO5%2BGhX9kyPXV0KEI8CUAJOEjt4g68fXOCrA4U0Q9kmmyRAxdswgqq5HCvHhdJI5intkl9TvQEspXR4tHADrA6fFA9s&X-Amz-Signature=6f85a1a434fa668e5f4b42be22137fac876b462778398eeded4b345e15655601&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAZBAES3%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2qOYEHxEyefGFNW3lzKLLZFruAbIsuTdIea2M0fv7hAiEA0U6e6lb8xrHZskq2ZHqFywsiHpMeexcbbBBG8PmmgkIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHFA2cMX87hNxjWXYCrcAyb4OSg5JJbrWfMzI2oJjUIcs8Wkm6o6R1XvGKvrxr3t%2Bfz6SmQgVXrFU4t5fVR0RkJvdtJCId690g5o9bIHX6mRZlFo6x03Hgmy70%2BJbaE%2FElC2T0ZfRma4Ds9hi6nDiai1Cfb6fAK6U8eDGEXNqPrxANS%2Bu6HGxPBPgUGiDZ5QXzQUi1D%2FT9H0%2B20AXJ3VpHPAMZbcUHkgAwrS%2FrMT2QQ5miDaEo2wHzeqgF5Fnv%2BSbfRksnaFv2xjemu0rEa5FZo8qN5G%2FCBjq7r1USTOVaCwCxmX2evJd5kI%2FHRNTRKpET80HwYMQF%2BSHzokux1OogWBfWYVsmYF%2BTISIjX5%2FhplSj6TazysFrdbVkyrRCvFi6%2B9%2Fo44rlyiT1QxvJTLohu4kGbX0V6xHAsfFf8BJSsiSQGnOpKpQgYtk9QwET8Y%2BtU1JOaBBY0scPnVDHmwGBt4pamNBFoXwxofxMw0IQzNPlzd6Lh34P09dNRFmM1RHYRpIqAQiCzboW%2FPZylkPonIWtxSs5RYKs%2FZwPRutpPJ0irLmjfHsrsiVhzEOznasjcEZtwt2VwZzOGwF2i6RNRKEB%2FKxRXWAM%2BtfmkXu4aP1%2BxpT0LReLUTmYeMTSZyTs8WuA0coz8HBCb4MNi83r4GOqUBzmk%2BH9v2Vg%2F6qQjA8yFfHwkkSqL4MQCSuk7ZG3hDyV69ZfQPIjxHs7Ft7JLuR%2FnolCvYDzQ781ZKKQvC21nWSovnVQnV4kI0607FIMR7F6xjADC7aAwlkES7tdX73U8ATcO5%2BGhX9kyPXV0KEI8CUAJOEjt4g68fXOCrA4U0Q9kmmyRAxdswgqq5HCvHhdJI5intkl9TvQEspXR4tHADrA6fFA9s&X-Amz-Signature=7153bf963c37f8aba5793d5ccce684c4dc4ae4a2810495c58285426446983713&X-Amz-SignedHeaders=host&x-id=GetObject)

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
