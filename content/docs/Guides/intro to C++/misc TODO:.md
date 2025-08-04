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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG5RVIHL%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAigjIPxgDQwbKY8r51c1UulcUi2mkiytpcTs5SaHtuAAiB3j4HWvPBm8GLK%2FyXgaDoaiNXuhsrOmmNAxCHTeNUuVCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMa7M0l6ecALGOXNqhKtwDXQU2fV8veyk3ShPfL6bp7%2F1jXW2BG2jEm3TWZEU1xbBxffjMO6laUGekZsT0UBEWtb6%2FmfgLeqasbrDbg7YbRYU%2BNRFg3Av3rFr6bpD2XloCtm%2FQYw8pNrN1xRjeAkmDjg%2B1zP6kokLi0Q1EH2kWw1p98Udpm3sYnQyhfQVaGee5pohdZSibzbhk3p16RUjpquyknUVVieVVeT2yRRLBhnLJ%2BHxxJ2GqD4Tvx39S%2F%2BR15F0VPq0bLhsF956W0yS7s9hyOMHttHtWkwckYDtHt7Pn%2B7XbLlmbTR%2FrwD8XH1zNvEjgzl3X4k4lLzulidS3m1pkKLq7trNBRuPxg%2B2dpOBhfPaBJWGV4zxMFysCtf4UatW435TDf%2Bm%2Fl0WB7VzDtLJMVMQxm%2FhHcTAhjwJEmLOPfKOPIjLvJbHYPvDFidUvgB5rwexBSHTw47zv055enTDMXckjzT%2B%2FyGk3xU%2FXRMDMeGiHzVMMicwpgJHq2HgyqhQSkvpW235YwmJQzEGpNqyVdHUZvav03C7soXZ%2BgG2h5yUB2y4qZ4OR0z2HCScw5broK1lQVPvS4uDE1QTHtyvJ5NQldPyntLoadTtHl2yXADiVP8KtDxUL0z2u4s%2BffE8Fb%2Fr2eRJpBLcwo%2BnAxAY6pgEL7pi2%2BvP9UoFnVRhsduQgdaHkvpAsq%2BP7PNQboBSpYLXW9omVEwZKyeYr1s6xs%2BxOLm9qBReKxzLPkrklfmGU47s164LPnHFVOZ4F9%2FnsCfjN3RNaysurOnE2m%2FrfDA%2B%2FwKeUJQ%2FRck7D4pn7nBDf2GcrNjXJ3QuGPXYZDV88A9Gq7ljoup4mkWkwH0B6NDmTi4SQzypZLtbNGJeLL0liGF2r3vTz&X-Amz-Signature=7878651428595af44fd1364e18ffde5410ada48752dc41ba4e6bf02ccde4d21a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG5RVIHL%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAigjIPxgDQwbKY8r51c1UulcUi2mkiytpcTs5SaHtuAAiB3j4HWvPBm8GLK%2FyXgaDoaiNXuhsrOmmNAxCHTeNUuVCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMa7M0l6ecALGOXNqhKtwDXQU2fV8veyk3ShPfL6bp7%2F1jXW2BG2jEm3TWZEU1xbBxffjMO6laUGekZsT0UBEWtb6%2FmfgLeqasbrDbg7YbRYU%2BNRFg3Av3rFr6bpD2XloCtm%2FQYw8pNrN1xRjeAkmDjg%2B1zP6kokLi0Q1EH2kWw1p98Udpm3sYnQyhfQVaGee5pohdZSibzbhk3p16RUjpquyknUVVieVVeT2yRRLBhnLJ%2BHxxJ2GqD4Tvx39S%2F%2BR15F0VPq0bLhsF956W0yS7s9hyOMHttHtWkwckYDtHt7Pn%2B7XbLlmbTR%2FrwD8XH1zNvEjgzl3X4k4lLzulidS3m1pkKLq7trNBRuPxg%2B2dpOBhfPaBJWGV4zxMFysCtf4UatW435TDf%2Bm%2Fl0WB7VzDtLJMVMQxm%2FhHcTAhjwJEmLOPfKOPIjLvJbHYPvDFidUvgB5rwexBSHTw47zv055enTDMXckjzT%2B%2FyGk3xU%2FXRMDMeGiHzVMMicwpgJHq2HgyqhQSkvpW235YwmJQzEGpNqyVdHUZvav03C7soXZ%2BgG2h5yUB2y4qZ4OR0z2HCScw5broK1lQVPvS4uDE1QTHtyvJ5NQldPyntLoadTtHl2yXADiVP8KtDxUL0z2u4s%2BffE8Fb%2Fr2eRJpBLcwo%2BnAxAY6pgEL7pi2%2BvP9UoFnVRhsduQgdaHkvpAsq%2BP7PNQboBSpYLXW9omVEwZKyeYr1s6xs%2BxOLm9qBReKxzLPkrklfmGU47s164LPnHFVOZ4F9%2FnsCfjN3RNaysurOnE2m%2FrfDA%2B%2FwKeUJQ%2FRck7D4pn7nBDf2GcrNjXJ3QuGPXYZDV88A9Gq7ljoup4mkWkwH0B6NDmTi4SQzypZLtbNGJeLL0liGF2r3vTz&X-Amz-Signature=f9a710f696f74bb5c0ac72734d3028a9ef80d5bd7697f4832e97fdc0c50d0c5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
