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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636AUF7KN%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD38IZ6pjh72SkYkq1FSohXN7ExsUNqf0KMGRWR337kOwIgHIAH4a%2FyQw2VqI8mRHtfiZ7L62S84NLEgEqjifahzRAqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqyFjgo27fQu9X71yrcA6VnKY8tFiZltgVJxV9pN0JLfCDgXBjfnFQqr%2BvtfhpBgQe7SlPkyg%2BEFi1V8a5UglZUfDl%2BFD31vvqHDVvW3CZ4Dg8lPa1uHDR%2FAABFIImWdaUwsaR7coi%2FTm6iC%2BHLZHhnlJ3gQrF5NKPhLwcj%2F6KGFIPAcUE3udhzjyE6KMZC1VNuFxe36YIRHFhF6k785gDKilLvCYfK%2BDcaqMDU2bmYcF%2Fm3leMVhVFwxlqbImRseNLaVUYtk18kW16Wlz2dvLDfOVxZ1zQthPFw704nHk4gsUhzBiAI6Il%2FP6BH5kkLWdj1EWcd07WxpSDzUCZxfvT20OMSYID8bUHvnRAhGw%2FMSf96dzgBLn4I1YzT%2FffjVjU%2BIzS59QGD5GSgZrOB93Y0Wzl2GfP3EBrqXYKNbDQFCGZoeryZI8yQ%2B5Edmjfi7LmQ%2FY%2FIqWMpQ2H3cV7JJwxGyDY3o5RtDVFaQjl5Bg1UVBCjomYUfUmkfURnDEDHuP2u%2BNbECLCX4ciE%2F1%2FSL4P2%2B7fzZJokvHyUw8Hamkk1xJFzPONE74xynTJ0W%2Bq7ydi82C%2BMFhBC8hL3ZXNHV1sjBtAetBRF%2B4h0Z5gbetpVe%2F3zR8kiJph7tBHQ56WSPNUIaMUOWKWfRQwMPKd%2FLwGOqUBpXqUu8PAxFiYUEbY63Dcl689ubqsxmCDzLqrg7uBKfawoznRBGToc4wG%2FpfmIBmjOk%2FOOHQBpjwV1%2BcGd6IsCblsGKufyKyfUtQeRNJleg1emY%2FL3%2BMcQVLqTdTmfzmMSFs46NXQy9QPTFP7wDLOkpN7jSdc6nxzpNE%2FfbO%2FRHjaO%2BCSQJaf0Zw156byAHPUyPPbNnYNJ8nu%2FdtJ59zUUcaIvV2q&X-Amz-Signature=ff0638a8d211a18a7256a66cf233fc6ccce3304ee96177a94fc880ef7a48487d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636AUF7KN%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD38IZ6pjh72SkYkq1FSohXN7ExsUNqf0KMGRWR337kOwIgHIAH4a%2FyQw2VqI8mRHtfiZ7L62S84NLEgEqjifahzRAqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqyFjgo27fQu9X71yrcA6VnKY8tFiZltgVJxV9pN0JLfCDgXBjfnFQqr%2BvtfhpBgQe7SlPkyg%2BEFi1V8a5UglZUfDl%2BFD31vvqHDVvW3CZ4Dg8lPa1uHDR%2FAABFIImWdaUwsaR7coi%2FTm6iC%2BHLZHhnlJ3gQrF5NKPhLwcj%2F6KGFIPAcUE3udhzjyE6KMZC1VNuFxe36YIRHFhF6k785gDKilLvCYfK%2BDcaqMDU2bmYcF%2Fm3leMVhVFwxlqbImRseNLaVUYtk18kW16Wlz2dvLDfOVxZ1zQthPFw704nHk4gsUhzBiAI6Il%2FP6BH5kkLWdj1EWcd07WxpSDzUCZxfvT20OMSYID8bUHvnRAhGw%2FMSf96dzgBLn4I1YzT%2FffjVjU%2BIzS59QGD5GSgZrOB93Y0Wzl2GfP3EBrqXYKNbDQFCGZoeryZI8yQ%2B5Edmjfi7LmQ%2FY%2FIqWMpQ2H3cV7JJwxGyDY3o5RtDVFaQjl5Bg1UVBCjomYUfUmkfURnDEDHuP2u%2BNbECLCX4ciE%2F1%2FSL4P2%2B7fzZJokvHyUw8Hamkk1xJFzPONE74xynTJ0W%2Bq7ydi82C%2BMFhBC8hL3ZXNHV1sjBtAetBRF%2B4h0Z5gbetpVe%2F3zR8kiJph7tBHQ56WSPNUIaMUOWKWfRQwMPKd%2FLwGOqUBpXqUu8PAxFiYUEbY63Dcl689ubqsxmCDzLqrg7uBKfawoznRBGToc4wG%2FpfmIBmjOk%2FOOHQBpjwV1%2BcGd6IsCblsGKufyKyfUtQeRNJleg1emY%2FL3%2BMcQVLqTdTmfzmMSFs46NXQy9QPTFP7wDLOkpN7jSdc6nxzpNE%2FfbO%2FRHjaO%2BCSQJaf0Zw156byAHPUyPPbNnYNJ8nu%2FdtJ59zUUcaIvV2q&X-Amz-Signature=ba9f393698bfa3cc6e49bf168aab23dc778d4fa21f8036fb37502d881318ed55&X-Amz-SignedHeaders=host&x-id=GetObject)

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
