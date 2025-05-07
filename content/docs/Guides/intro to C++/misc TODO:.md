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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDHPGCRZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL0ELw8s1G22mts%2BQgrxMDxPNMFTV3LUU6%2FERjiq%2B9%2FQIgI2hevSC%2BGBIWVa%2FPJt2dTsVa6PrSXi7HEsP6MneyHZsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDkCFsRAuRdaUTuKtyrcAxklyHt3cfWY3kB6nySUrtghu6s8fNYBxArQE5EnrbkDA8GQ377KVaLpXRqYdp7hrGxU3jV7gR8ZBmtP73ehvYG7tWqO3eyxfsqVqddNhDdc%2Fkqad3E%2F0qhq2Sqy%2FFyg3DfukN0wDGkQQqz8OUnXebcrAGh9%2Bo%2BuoJgSgrpasyzcRfGXnHwaUVxZJKeLorSmx8OBv2wmNQ7zPwwy9tTs9U0rTcqsXqAeq%2BUXQx1flEwoRqCmkUkgDOHKNXZcTfZz%2FpIc%2BfF19WvtbwnOiJRdPwRiLq8vI2f5L5bqJ2unu63UgzgAMOFlKaSAOLHNTuM0dpzuPJHG0rdFvoA6MJP%2FbHsuZja3%2BBWJiX85mF4hwGU%2BgIHXHvui%2BA70tExw61hLGnLEiSPDg0pjmr0%2F15DlrGE4CNy7BblibLYb2Aa8Gn7zSizwk%2Fy4g8jYlxu6SdcdGGLqQwtREAL%2F1PmLNXBXZnWuALYiKYr8I91Lh%2Fh8pV7zkRabf2DhNS5Y8%2BV6D2SbUwL4JgHgN0fCXNq3iJv5P%2B6hXRwu2QPm3iG5V4tF7pkQj8qSTpoNcqEDPBENLunxiBvAPQtyFGCPRDcIHSyLKw%2B%2BQAEFH3KYUc8H0JnTUG5NQlzB%2BPhMDW17MaNuMLGN78AGOqUBto88dotikFx%2BB%2FtP7n9LVCzO5RP%2FA6kaFRcsIOlMASEKjFugQtz680%2BJMKRL9u6U88Ifgh5hcuBwVEgmBW%2FlstOeBGY82K8B%2B5kdUZlOSbiaDd0wWuxK0W1l3buS3n4J9N2FtrRj5FptHKw8Ag%2BW6yshnGrKSgK25AH40Mf17QjAqoIIbKxME5PLTlL9fc06EWaC%2BCHvS91Ja5NvzRpA8ERX6B9q&X-Amz-Signature=26943ff597c1d1579d49078240a09455de252eae090ab1c9c877a808af3dc0c3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDHPGCRZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL0ELw8s1G22mts%2BQgrxMDxPNMFTV3LUU6%2FERjiq%2B9%2FQIgI2hevSC%2BGBIWVa%2FPJt2dTsVa6PrSXi7HEsP6MneyHZsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDkCFsRAuRdaUTuKtyrcAxklyHt3cfWY3kB6nySUrtghu6s8fNYBxArQE5EnrbkDA8GQ377KVaLpXRqYdp7hrGxU3jV7gR8ZBmtP73ehvYG7tWqO3eyxfsqVqddNhDdc%2Fkqad3E%2F0qhq2Sqy%2FFyg3DfukN0wDGkQQqz8OUnXebcrAGh9%2Bo%2BuoJgSgrpasyzcRfGXnHwaUVxZJKeLorSmx8OBv2wmNQ7zPwwy9tTs9U0rTcqsXqAeq%2BUXQx1flEwoRqCmkUkgDOHKNXZcTfZz%2FpIc%2BfF19WvtbwnOiJRdPwRiLq8vI2f5L5bqJ2unu63UgzgAMOFlKaSAOLHNTuM0dpzuPJHG0rdFvoA6MJP%2FbHsuZja3%2BBWJiX85mF4hwGU%2BgIHXHvui%2BA70tExw61hLGnLEiSPDg0pjmr0%2F15DlrGE4CNy7BblibLYb2Aa8Gn7zSizwk%2Fy4g8jYlxu6SdcdGGLqQwtREAL%2F1PmLNXBXZnWuALYiKYr8I91Lh%2Fh8pV7zkRabf2DhNS5Y8%2BV6D2SbUwL4JgHgN0fCXNq3iJv5P%2B6hXRwu2QPm3iG5V4tF7pkQj8qSTpoNcqEDPBENLunxiBvAPQtyFGCPRDcIHSyLKw%2B%2BQAEFH3KYUc8H0JnTUG5NQlzB%2BPhMDW17MaNuMLGN78AGOqUBto88dotikFx%2BB%2FtP7n9LVCzO5RP%2FA6kaFRcsIOlMASEKjFugQtz680%2BJMKRL9u6U88Ifgh5hcuBwVEgmBW%2FlstOeBGY82K8B%2B5kdUZlOSbiaDd0wWuxK0W1l3buS3n4J9N2FtrRj5FptHKw8Ag%2BW6yshnGrKSgK25AH40Mf17QjAqoIIbKxME5PLTlL9fc06EWaC%2BCHvS91Ja5NvzRpA8ERX6B9q&X-Amz-Signature=1fb86388e11349bf2a6897d01c87e9b7c3e74f5c1c461140fec4c8fc4372a525&X-Amz-SignedHeaders=host&x-id=GetObject)

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
