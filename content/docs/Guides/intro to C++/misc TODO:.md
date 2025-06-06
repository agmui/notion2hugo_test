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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GDRCHTS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDsnvhJkT2tlaMc0GsBPQ%2BnbWxrM4ZN5UV9LxZ6q0WhQQIgQBgQvTp1NHkN0ZpA27nvdcPMSsAjBRFtX0A5ZszcUUoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDC8HRztAshvM2kmIeyrcAxicz6Il5b68ptol%2BOGe3b8CzXpIf%2BXxqQjNtEYfokbEbIp6qaSerrjb6R38FNsMYQg9l5Pc6N0Nu5sF4VDlBRnbPc98JqeqthzHH3CIrCcCICRAAYtu15WYTc4lhZCPjHpt%2F5qwgZDHO3JteUnX3p4%2FGerbN7vB7OKLtMCC0cAdX0WC5%2BDCm1etYt4NBben%2FqMcPysAMuEb8Y0Vm%2BBIfkHoCOPiyBhcmikw7ZZIMc7HMZ0hCsukJY9NQSDrdzzvC1CdTxTkhgf16fq7zcF3Y3KiW5dgTG%2BOA2aJImR87ZLc%2FP%2BrnQx5tuPuwE8wFKKcVqjrcUl%2FoDzSO67dne3zBxWJCLIwPag%2F6vXHAmraQ%2BIkFDRvm5ZDU%2BCpGyzqD109bdTZq1OPZVmCNKUZ5WOnKiA0iyYHV35viZUfls8v4TRUqCBIbgCXy4GxkccqN%2BvvCJeTHI5UHUN%2FWdl%2FpCKbKzLLnA3NCm%2BefT%2FJXrBEMq3psan5ZKl%2Bs%2FqtkVCxTYp18LHtAh9idS9IyZEpoODaqMODuv7%2FKEe3jsgrBWQ%2BfwcbbwAkOn40PXUec4JaMNrJ3Q93yLfAfHfJCmk3pPy88S62c1hgWxlDa0tQ5pfc%2FTWrPnMtq8YoXvMzhrYrMM6WisIGOqUBtwNhYfmpx6Iv8%2BbLJBSjB7hbKIQdIA9VlHQb%2F1c3MS77Ifu7mo4DK4SZfdPqUiC%2BmIOse0JsKJuIgpXODlRmsQwbxGrJgUSvLoMzDn2Z8LZtWM7ulaPDma0GXX0TqBn9kXwKyAwy1MvBT%2F6IRQqysoigT3heEGqFZftMTzk%2FtgFdyROO26jCOz%2FgfX4oQo2tLuu8aa2uNrMEGg%2FY%2B9uJqKxI3VOE&X-Amz-Signature=0287eea61fbb27fe365f78935400f90c6cfc25e33f4ea07e9ba8b349ee5f203f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GDRCHTS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDsnvhJkT2tlaMc0GsBPQ%2BnbWxrM4ZN5UV9LxZ6q0WhQQIgQBgQvTp1NHkN0ZpA27nvdcPMSsAjBRFtX0A5ZszcUUoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDC8HRztAshvM2kmIeyrcAxicz6Il5b68ptol%2BOGe3b8CzXpIf%2BXxqQjNtEYfokbEbIp6qaSerrjb6R38FNsMYQg9l5Pc6N0Nu5sF4VDlBRnbPc98JqeqthzHH3CIrCcCICRAAYtu15WYTc4lhZCPjHpt%2F5qwgZDHO3JteUnX3p4%2FGerbN7vB7OKLtMCC0cAdX0WC5%2BDCm1etYt4NBben%2FqMcPysAMuEb8Y0Vm%2BBIfkHoCOPiyBhcmikw7ZZIMc7HMZ0hCsukJY9NQSDrdzzvC1CdTxTkhgf16fq7zcF3Y3KiW5dgTG%2BOA2aJImR87ZLc%2FP%2BrnQx5tuPuwE8wFKKcVqjrcUl%2FoDzSO67dne3zBxWJCLIwPag%2F6vXHAmraQ%2BIkFDRvm5ZDU%2BCpGyzqD109bdTZq1OPZVmCNKUZ5WOnKiA0iyYHV35viZUfls8v4TRUqCBIbgCXy4GxkccqN%2BvvCJeTHI5UHUN%2FWdl%2FpCKbKzLLnA3NCm%2BefT%2FJXrBEMq3psan5ZKl%2Bs%2FqtkVCxTYp18LHtAh9idS9IyZEpoODaqMODuv7%2FKEe3jsgrBWQ%2BfwcbbwAkOn40PXUec4JaMNrJ3Q93yLfAfHfJCmk3pPy88S62c1hgWxlDa0tQ5pfc%2FTWrPnMtq8YoXvMzhrYrMM6WisIGOqUBtwNhYfmpx6Iv8%2BbLJBSjB7hbKIQdIA9VlHQb%2F1c3MS77Ifu7mo4DK4SZfdPqUiC%2BmIOse0JsKJuIgpXODlRmsQwbxGrJgUSvLoMzDn2Z8LZtWM7ulaPDma0GXX0TqBn9kXwKyAwy1MvBT%2F6IRQqysoigT3heEGqFZftMTzk%2FtgFdyROO26jCOz%2FgfX4oQo2tLuu8aa2uNrMEGg%2FY%2B9uJqKxI3VOE&X-Amz-Signature=cf9305e85922f26a54ad7756d857c649c70a8e261dfd12d264e54f654ebc8464&X-Amz-SignedHeaders=host&x-id=GetObject)

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
