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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXWV5DKL%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDxEtRynhsRkpj9flTLV2w6a1YvNwNTZVdr6StssClFdAIgJeFEwPZgCafMrMo8SWdqgr%2FWYXl8fPlT9bsB9I7G9I8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQK%2Bxxv06c9euYokSrcA5WUtVwaUidRMAxYWx8lWfQYfRmacbYzduyUhgh5XLYDH7oAEGByIE18IuUu0dnsCz59HHhQDgnJ2FPtrXRw4wA%2FBudADSD4Gd5gMcfJaPZz9VcsCnAttY7n97blRwg3fafzSO2DhuwHbnD2LHV1dd1QiFoE8h%2FpvpXmsXf5%2BymXG5YfccS8l0XGsgfeXO0H10W8Oe6JqkZ0dnjyWLSkvdb8LFpSxJPnZYF%2BVJ1KEPq4trcV9BtR9upyo1yM2gYmCOxBkzHrJKmuBV8LIitUTnyByCAB0UyqCJL8s3baSH9MqRUsgtplNuPHMtDtUmXBIL9Ps8fu%2FNR%2BefSY2ZLYfnfdIBUB0K6t9vOTpa1oQPrHJ%2FnDXSCvl41vS9zVUbY5EPfGZLtfy%2BNZSrylmrdi9c9LrL1bFXDzfy%2FPdz8tkLebMc6%2FHIIMSiRCZNApA2RR1HOk%2FhpGe6KlAq5SHDKF%2FfK6cdqc9x%2BB%2BuDL1Dg8e6iYd9x7SD8TXeuxeWKDhzs%2F5pZ7kaztzCoBOmKpysSjeTjXY7Kfc4MvMArl%2B7RC%2FbRs6tbCCuCZKkWKNuEKiYK4isALOHKEOXHo8zHuF1lVVgRyb9uXVeyY49UXrYEMA5r9%2BcxG95VhvqyDZxmoMJS79L4GOqUBr92IEYZfGRwTOSn1LJtyfz3b%2BrIm4Of%2BPQ5K%2FK05vfvz5NxTMIu8xfrSAjdi15URRgw%2Fa2eeG4%2BicIZ%2BmgAQcpC07%2FSTL5O%2FOdmQPlDVYPNvyLRQyBSgDmNY1IUdeu4KqgltjHmnzTmqxBO9L9s8jgwc872Mf1eQFdUn53f%2BkMYz3o%2F0BsIEZqFSwTClA5IUby5yv%2FLtcYDiW0uHaHAL2Nhb%2F3l2&X-Amz-Signature=fb4a70ef1fa8c01657e87a977b7190f941dc063ba243e90a2314af7857d044de&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXWV5DKL%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDxEtRynhsRkpj9flTLV2w6a1YvNwNTZVdr6StssClFdAIgJeFEwPZgCafMrMo8SWdqgr%2FWYXl8fPlT9bsB9I7G9I8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQK%2Bxxv06c9euYokSrcA5WUtVwaUidRMAxYWx8lWfQYfRmacbYzduyUhgh5XLYDH7oAEGByIE18IuUu0dnsCz59HHhQDgnJ2FPtrXRw4wA%2FBudADSD4Gd5gMcfJaPZz9VcsCnAttY7n97blRwg3fafzSO2DhuwHbnD2LHV1dd1QiFoE8h%2FpvpXmsXf5%2BymXG5YfccS8l0XGsgfeXO0H10W8Oe6JqkZ0dnjyWLSkvdb8LFpSxJPnZYF%2BVJ1KEPq4trcV9BtR9upyo1yM2gYmCOxBkzHrJKmuBV8LIitUTnyByCAB0UyqCJL8s3baSH9MqRUsgtplNuPHMtDtUmXBIL9Ps8fu%2FNR%2BefSY2ZLYfnfdIBUB0K6t9vOTpa1oQPrHJ%2FnDXSCvl41vS9zVUbY5EPfGZLtfy%2BNZSrylmrdi9c9LrL1bFXDzfy%2FPdz8tkLebMc6%2FHIIMSiRCZNApA2RR1HOk%2FhpGe6KlAq5SHDKF%2FfK6cdqc9x%2BB%2BuDL1Dg8e6iYd9x7SD8TXeuxeWKDhzs%2F5pZ7kaztzCoBOmKpysSjeTjXY7Kfc4MvMArl%2B7RC%2FbRs6tbCCuCZKkWKNuEKiYK4isALOHKEOXHo8zHuF1lVVgRyb9uXVeyY49UXrYEMA5r9%2BcxG95VhvqyDZxmoMJS79L4GOqUBr92IEYZfGRwTOSn1LJtyfz3b%2BrIm4Of%2BPQ5K%2FK05vfvz5NxTMIu8xfrSAjdi15URRgw%2Fa2eeG4%2BicIZ%2BmgAQcpC07%2FSTL5O%2FOdmQPlDVYPNvyLRQyBSgDmNY1IUdeu4KqgltjHmnzTmqxBO9L9s8jgwc872Mf1eQFdUn53f%2BkMYz3o%2F0BsIEZqFSwTClA5IUby5yv%2FLtcYDiW0uHaHAL2Nhb%2F3l2&X-Amz-Signature=8b8e7cc3f902310cbe690d188d7790346a4bb14bfd43c09b2a3ce66329f4e86e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
