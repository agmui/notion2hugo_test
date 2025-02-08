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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5LVBXMT%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDMqfz9hIaMgigVL0ceiT2LF1vdzl%2FgmWE4nNphhGt54QIhALCCxdYQonjN6LJiMe5OJ%2FmdKnvXmPWd8oqdU2OXAlMdKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi9BEJDddmZHCfn98q3AOHoWrMJCRCPNceNA7OeG4pfIaaefK69GNe955Kb%2BtJrxy%2BWjv7Lka8RDTGJ8PBpdiKlKcSyIFP5jc6Mzx4nL%2B8QHdBVqejeuBv2p75R7Z4Adjk2RpcxptVv6C3KMkVMJVlgnvg5Zw8BZr5Kjc7aOB91VdKw4AQbd%2FNFQUF6e0CJL%2Fy8y4oknLPB0KQ541MAfgXB7lvCAwkWjFZZ953j%2FXyPS4bieEu9Q8mJFIXZrw5Q21SIa6XpDZmv%2FwUa7vg6TpeF%2But6BRRVzqeydZKjoznlVRCBo8J0MYougpueheea7pRjQqV0SN3efVoxagJkDvKigdLWjQeYDXsTCkeowjJlvlRoy4ohbLB6qJkKDXPM18r5%2BeHCro3w0O2HKWWSkpjPePlXwFt4aplV2Fx6Hm4SETZbpP%2BHkGacIY4pAL4T%2BKSd4Qgr2wbSo%2BILwXX7mycdNAfEZs4N4TsqE0RsQa4tihRNCbtd0yOiiANpgSNbyaySRbhT%2Bf3Ij9c7jOyN7q%2FxWV4tGfZoLHH8uUTOAINIWTCr3FApfAHyWNLtQGeXWnUBzinfOlLla12ZWQ83Tz3eaJGdVPc11P7i5BtnIEJkHjqQAqEBv3wO8Uf6lHxFLn%2BG2SEO6M9qE49GDCGh529BjqkAWF4F%2B%2FQqghoY6Kg9OlUHLTUoLeBkDKANswRygEEsuHXKF1G3Ve%2F%2FhJ33Nb%2FVPiFjuyVIPpsoljg0yu1z%2BZRAg9XcHjXMF5mkY4hy2KYBUNUF2KFAqLmLHHEFWxAik%2Bf36J9HMWkwKg60a%2FhdiucXL%2B7bbTHker%2Bj1TBRS0EP9kdLOKDaQnZtd1BWXi5cQTMXlsowyuV1sciKeWrjnpHeyEm58G1&X-Amz-Signature=36acba735e6a6de20aea61a85061945435eae4807047c95fdc051fe4ce93fe3a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5LVBXMT%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDMqfz9hIaMgigVL0ceiT2LF1vdzl%2FgmWE4nNphhGt54QIhALCCxdYQonjN6LJiMe5OJ%2FmdKnvXmPWd8oqdU2OXAlMdKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi9BEJDddmZHCfn98q3AOHoWrMJCRCPNceNA7OeG4pfIaaefK69GNe955Kb%2BtJrxy%2BWjv7Lka8RDTGJ8PBpdiKlKcSyIFP5jc6Mzx4nL%2B8QHdBVqejeuBv2p75R7Z4Adjk2RpcxptVv6C3KMkVMJVlgnvg5Zw8BZr5Kjc7aOB91VdKw4AQbd%2FNFQUF6e0CJL%2Fy8y4oknLPB0KQ541MAfgXB7lvCAwkWjFZZ953j%2FXyPS4bieEu9Q8mJFIXZrw5Q21SIa6XpDZmv%2FwUa7vg6TpeF%2But6BRRVzqeydZKjoznlVRCBo8J0MYougpueheea7pRjQqV0SN3efVoxagJkDvKigdLWjQeYDXsTCkeowjJlvlRoy4ohbLB6qJkKDXPM18r5%2BeHCro3w0O2HKWWSkpjPePlXwFt4aplV2Fx6Hm4SETZbpP%2BHkGacIY4pAL4T%2BKSd4Qgr2wbSo%2BILwXX7mycdNAfEZs4N4TsqE0RsQa4tihRNCbtd0yOiiANpgSNbyaySRbhT%2Bf3Ij9c7jOyN7q%2FxWV4tGfZoLHH8uUTOAINIWTCr3FApfAHyWNLtQGeXWnUBzinfOlLla12ZWQ83Tz3eaJGdVPc11P7i5BtnIEJkHjqQAqEBv3wO8Uf6lHxFLn%2BG2SEO6M9qE49GDCGh529BjqkAWF4F%2B%2FQqghoY6Kg9OlUHLTUoLeBkDKANswRygEEsuHXKF1G3Ve%2F%2FhJ33Nb%2FVPiFjuyVIPpsoljg0yu1z%2BZRAg9XcHjXMF5mkY4hy2KYBUNUF2KFAqLmLHHEFWxAik%2Bf36J9HMWkwKg60a%2FhdiucXL%2B7bbTHker%2Bj1TBRS0EP9kdLOKDaQnZtd1BWXi5cQTMXlsowyuV1sciKeWrjnpHeyEm58G1&X-Amz-Signature=261f8215ef57c9e4235f07a70e95fc1f5d4d1cfbee964bfaca95d1a43d8f8e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
