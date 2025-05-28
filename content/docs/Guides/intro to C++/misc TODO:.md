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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DWM43WE%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3y16Eg1JfVTUyeI2Vf59UcSKv8m514UjLF6hWTWRndQIgDgXjG%2BPjw08GHKjR6Q3H0ymjLkRQzmOCt1BbpEdaayoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLE7AujBiJk9oIZGjyrcA0skqKbwwNG1eqmxQW5NOVRGiX%2BFePzvLTqsk4sr718ZhTRyuMNSAsyjWpqgYK2vRLZCjgoJ2yDE11D8aMeI4ByuJVyvl6TL4oqcnrAQM4n3%2BuuA%2B50hUBMmrjm75lEj85UYkTOk%2BdchJZwXgSPF%2BQ9UrZ%2FdYdIjHWJ1dwCPefoua03csFFvboufN28ctfPYvMBgv8sQvvD4R98I16QBzk5kLS3LksEsgtWLe271nst6MsS8c02%2BIEKR0VRrDuXZvZ5LG2GSi%2FEOmzdZCc9xtioBdjDsJWTI67DlcvFrkqtGR2TA4C47Zr2CkTNX%2F1Va5RvMrJ1LRtz22Qa%2BxaRUmNOXSldoA15oUwgre%2BHPK3QpoOh7LL6T8oY0QBrXYagFTa%2BovzLW6y44RW5pMxUACbec%2Fzd%2FzkrL2PYVE64x2hEBkl6Iur8b1xHeEzYZBa7KXxFWfxbAcVPTlT5k3XRcsPTYpwRWSgg084oZNdOQ%2FdginroJ8R9cObNtU16pSWyp3alMxANuD1iWL3U3Z6LhuRjcdYr4NetmAwFSKRhPj0vY%2BJP80z%2BivduEktCqhJjcAgWViOHwgZVRtYEJROPdwB0gBFCtB2GcR8WDEd3AdcwbDY4pr2FbBfTX3T8tMNeT3MEGOqUB4NvB5zRjmoRT68LFj9kJKuLvjl6fb%2Fis1U1zHB1GWhXV879EjkLBhVy862PvJj4FoGDOntwjDtQwKQns2YhY%2FJZwDrVPOtTdDmhwp3RglmsqBmw8YGTDFp%2FS4kEJ8hYvi6og43gaAqxbJpMpU7uolYj%2Bh7tHe1Rw2oI%2BT8Z2Fb5CVM%2FkYMATHfVm7qU5TLcZUgN8KYoQ1rnW%2Fmn2Du4tmGOShEVz&X-Amz-Signature=77977219906f8985434f1f00a6056afdb5dfc3a261be59587952808fb4a1f07a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DWM43WE%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3y16Eg1JfVTUyeI2Vf59UcSKv8m514UjLF6hWTWRndQIgDgXjG%2BPjw08GHKjR6Q3H0ymjLkRQzmOCt1BbpEdaayoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLE7AujBiJk9oIZGjyrcA0skqKbwwNG1eqmxQW5NOVRGiX%2BFePzvLTqsk4sr718ZhTRyuMNSAsyjWpqgYK2vRLZCjgoJ2yDE11D8aMeI4ByuJVyvl6TL4oqcnrAQM4n3%2BuuA%2B50hUBMmrjm75lEj85UYkTOk%2BdchJZwXgSPF%2BQ9UrZ%2FdYdIjHWJ1dwCPefoua03csFFvboufN28ctfPYvMBgv8sQvvD4R98I16QBzk5kLS3LksEsgtWLe271nst6MsS8c02%2BIEKR0VRrDuXZvZ5LG2GSi%2FEOmzdZCc9xtioBdjDsJWTI67DlcvFrkqtGR2TA4C47Zr2CkTNX%2F1Va5RvMrJ1LRtz22Qa%2BxaRUmNOXSldoA15oUwgre%2BHPK3QpoOh7LL6T8oY0QBrXYagFTa%2BovzLW6y44RW5pMxUACbec%2Fzd%2FzkrL2PYVE64x2hEBkl6Iur8b1xHeEzYZBa7KXxFWfxbAcVPTlT5k3XRcsPTYpwRWSgg084oZNdOQ%2FdginroJ8R9cObNtU16pSWyp3alMxANuD1iWL3U3Z6LhuRjcdYr4NetmAwFSKRhPj0vY%2BJP80z%2BivduEktCqhJjcAgWViOHwgZVRtYEJROPdwB0gBFCtB2GcR8WDEd3AdcwbDY4pr2FbBfTX3T8tMNeT3MEGOqUB4NvB5zRjmoRT68LFj9kJKuLvjl6fb%2Fis1U1zHB1GWhXV879EjkLBhVy862PvJj4FoGDOntwjDtQwKQns2YhY%2FJZwDrVPOtTdDmhwp3RglmsqBmw8YGTDFp%2FS4kEJ8hYvi6og43gaAqxbJpMpU7uolYj%2Bh7tHe1Rw2oI%2BT8Z2Fb5CVM%2FkYMATHfVm7qU5TLcZUgN8KYoQ1rnW%2Fmn2Du4tmGOShEVz&X-Amz-Signature=e9fa44fffa4db76c2b13d8392697a0f51e65bf39959dd530d6689a34b46484ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
