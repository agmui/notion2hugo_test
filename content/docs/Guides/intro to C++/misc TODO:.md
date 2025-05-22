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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRXYTLW5%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDaM%2BnLr8bS1HqwHzu3nctFiOBhVLI0L%2F7nWBNHYxBIoQIhANPyFnhLOhjdJrtD4puCCZQhZyLjkX7vga44AvjDt%2BiUKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJVU4eY4MqlgZdWJ8q3APmwxxh5FMLKTMFULtTDACHJRN%2FiLRQvqJ%2FqrfBf3GeKv9GHYf2CRRgnLjec1h%2Fy4Sa1ThDpLJ5xMBJpwrhl0DPfcET0GRaydtUxFy%2FxcKqeatO2k8GhoIsgIJPK6z9BHPQ70mqp1Znn7l8nV%2FmyfHpu%2BpBZ%2BHOknlDEDWpw9Du58oSRXiBthvP%2Fm90kQnGHz3jWzhFjKnSexLJ8%2BgJZyB%2Fg8cvXymyzcfMSWR24xxg8A9g0ToSo8wvze%2FNm9m7UW%2Bq7LntZzSOYnwrCsqSp4zxbENcCUXlg3Cr1PZRO2s3JJDsf0Y50vKAY38KnKrbNKyMRyjDfeYDiSOs1hV0ApyJixIWZ4FoBBZqfgeCHRBmDPpIg2bo9Rng8hjUZjax35V4KkpD49ddufU0IkMsC0YPauUvhZ8nG82S0nQiBA3daVD9Mp4LTaGcrSZtV2TCYazZELIytBQoITu8fsSwMZ7b5jWpwEPMDmQiT4NEkoOVI5ZF0MSNcyhgzONvcIMIGV5gVKjCxwaMzehFOwT2R9zhpTW%2F0m0%2FXmSari4fCsV8prs6tNPQQmKDwkrxQX6lnyD6AtE8RATF%2B%2Fk5KfvHuZPprCvxuxCi%2BR%2BhkXp9yK69f%2B5%2F18DFaytqI0zqxDDG4rzBBjqkAb8Gx7RcLz6J9d3%2FfLZqH84EcWa6yd5m3XAf3EtomjMLgGFis0pFOtLKHbD1w8jnbR9z64amuElDqMyerKFhVTFpkAiYc1ty1qL8%2F%2FSPh0WfTBDCcdpVFY1HC8AMEenx8hEPo3IMdBFbJ18VrmqhEiZNLsCS5GHQpZkMsDlQ%2F6689kTTWygU0oBRg%2BUI7S2O3OHNqnW9qxOI77rjVxIX0f8scDWh&X-Amz-Signature=22119495a3db35b18ee40ecb2fe79e6b157432ab03921a7e125538a095d0a6b5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRXYTLW5%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDaM%2BnLr8bS1HqwHzu3nctFiOBhVLI0L%2F7nWBNHYxBIoQIhANPyFnhLOhjdJrtD4puCCZQhZyLjkX7vga44AvjDt%2BiUKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJVU4eY4MqlgZdWJ8q3APmwxxh5FMLKTMFULtTDACHJRN%2FiLRQvqJ%2FqrfBf3GeKv9GHYf2CRRgnLjec1h%2Fy4Sa1ThDpLJ5xMBJpwrhl0DPfcET0GRaydtUxFy%2FxcKqeatO2k8GhoIsgIJPK6z9BHPQ70mqp1Znn7l8nV%2FmyfHpu%2BpBZ%2BHOknlDEDWpw9Du58oSRXiBthvP%2Fm90kQnGHz3jWzhFjKnSexLJ8%2BgJZyB%2Fg8cvXymyzcfMSWR24xxg8A9g0ToSo8wvze%2FNm9m7UW%2Bq7LntZzSOYnwrCsqSp4zxbENcCUXlg3Cr1PZRO2s3JJDsf0Y50vKAY38KnKrbNKyMRyjDfeYDiSOs1hV0ApyJixIWZ4FoBBZqfgeCHRBmDPpIg2bo9Rng8hjUZjax35V4KkpD49ddufU0IkMsC0YPauUvhZ8nG82S0nQiBA3daVD9Mp4LTaGcrSZtV2TCYazZELIytBQoITu8fsSwMZ7b5jWpwEPMDmQiT4NEkoOVI5ZF0MSNcyhgzONvcIMIGV5gVKjCxwaMzehFOwT2R9zhpTW%2F0m0%2FXmSari4fCsV8prs6tNPQQmKDwkrxQX6lnyD6AtE8RATF%2B%2Fk5KfvHuZPprCvxuxCi%2BR%2BhkXp9yK69f%2B5%2F18DFaytqI0zqxDDG4rzBBjqkAb8Gx7RcLz6J9d3%2FfLZqH84EcWa6yd5m3XAf3EtomjMLgGFis0pFOtLKHbD1w8jnbR9z64amuElDqMyerKFhVTFpkAiYc1ty1qL8%2F%2FSPh0WfTBDCcdpVFY1HC8AMEenx8hEPo3IMdBFbJ18VrmqhEiZNLsCS5GHQpZkMsDlQ%2F6689kTTWygU0oBRg%2BUI7S2O3OHNqnW9qxOI77rjVxIX0f8scDWh&X-Amz-Signature=f15f0453f29d89c3854143540307f8ebf2c6f6b9aa93e95f2b095cd05d3849fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
