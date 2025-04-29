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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622C6O2L2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNq9NKPrR86M%2Fv5GJKFBWZbCpMBmyRfrteyHiko8obRAIgKaq5lCAJltLoatYmYh4n0uJ2dywCzd%2FuU2fWsEcTpRoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt8G8h2hiEGqYxgDircA2qx4BfXICNyf6dsFXA069tEZl7mdu8Z5l3DUx5Yi29gUsmbBHOy2KspCF6h2DX7uqIjkBOFGolu3jgtoEC3OjkxicG6E08q0P9fhOzj%2BF4v3hZgqjvg%2Fw3hJKrqImXfo%2FML3y4Ypv96vSj0DFDLFoRyqFyz9g7LUAmputQXmoTca6H3VYLZ7PjSYNIXuATqBV3JdbzMnwUn6%2FTl%2BKWYnOvqr9Pl8cX84OWy%2FOq9bjaDasBltwk4ed%2BofdqkeT52ywVd1NtaRCYw7W1CvRJ%2Fw3%2Fpa2d%2FqoUGu5NXkvmAGD0b76fTkeDXGJNJLDPHtsDPDlr73Ockavg524v6q9QlSEd8PySbEp9S20Ag%2BGHkXQt8VV0ipItkB0%2Brx3EJzFEjnJFPjCSS2UlYosAFFX4UsgpuPRJlVBhl7NU2H0XKPBCceEcfNMoFQ%2BZYn5IhH1M2V89CytwwPBz%2FW%2BwkbvI8hUIIEXqYQAUG%2FM1nGkgo%2FqFhqpZSVY4avs1sBPFQTP%2FKuvjvMJgE%2FdEC1gbT3csJzevwhrsNVfDwDVeRowtDaNVjQS2M50oW8Bnzj7AvfREI9Ypb9dW2Ojw7geYGQ189hjODmvePQ7dhLsExnoL1Da1lBrveZf3U9iNm92RQMOeZwcAGOqUBzZSNcEZPbpy0xc9H6MLAb%2BOxBD6LN%2FcPneUF8XiwwOifNwmJuzNmN5AjcNzdSEDG282iUutvElRVjISUDTv5XHKE%2BoO%2FPXE1vRn2GroZt6JgfbJcTQHcUIiLSWD7yVl1JqON7tgDFMrojVbXa4HqVQfZFfXRqxuPXUjWSjWmVPIXY1oKVkmgFHrrBn2x%2FPN93b9rcDX%2BI%2FOQX5%2BCMRuEA079kfXa&X-Amz-Signature=63b2f313694e85b1f6d3fb13177b2d69ba148a384cc5d27727b5440e1a1b2fd7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622C6O2L2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNq9NKPrR86M%2Fv5GJKFBWZbCpMBmyRfrteyHiko8obRAIgKaq5lCAJltLoatYmYh4n0uJ2dywCzd%2FuU2fWsEcTpRoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt8G8h2hiEGqYxgDircA2qx4BfXICNyf6dsFXA069tEZl7mdu8Z5l3DUx5Yi29gUsmbBHOy2KspCF6h2DX7uqIjkBOFGolu3jgtoEC3OjkxicG6E08q0P9fhOzj%2BF4v3hZgqjvg%2Fw3hJKrqImXfo%2FML3y4Ypv96vSj0DFDLFoRyqFyz9g7LUAmputQXmoTca6H3VYLZ7PjSYNIXuATqBV3JdbzMnwUn6%2FTl%2BKWYnOvqr9Pl8cX84OWy%2FOq9bjaDasBltwk4ed%2BofdqkeT52ywVd1NtaRCYw7W1CvRJ%2Fw3%2Fpa2d%2FqoUGu5NXkvmAGD0b76fTkeDXGJNJLDPHtsDPDlr73Ockavg524v6q9QlSEd8PySbEp9S20Ag%2BGHkXQt8VV0ipItkB0%2Brx3EJzFEjnJFPjCSS2UlYosAFFX4UsgpuPRJlVBhl7NU2H0XKPBCceEcfNMoFQ%2BZYn5IhH1M2V89CytwwPBz%2FW%2BwkbvI8hUIIEXqYQAUG%2FM1nGkgo%2FqFhqpZSVY4avs1sBPFQTP%2FKuvjvMJgE%2FdEC1gbT3csJzevwhrsNVfDwDVeRowtDaNVjQS2M50oW8Bnzj7AvfREI9Ypb9dW2Ojw7geYGQ189hjODmvePQ7dhLsExnoL1Da1lBrveZf3U9iNm92RQMOeZwcAGOqUBzZSNcEZPbpy0xc9H6MLAb%2BOxBD6LN%2FcPneUF8XiwwOifNwmJuzNmN5AjcNzdSEDG282iUutvElRVjISUDTv5XHKE%2BoO%2FPXE1vRn2GroZt6JgfbJcTQHcUIiLSWD7yVl1JqON7tgDFMrojVbXa4HqVQfZFfXRqxuPXUjWSjWmVPIXY1oKVkmgFHrrBn2x%2FPN93b9rcDX%2BI%2FOQX5%2BCMRuEA079kfXa&X-Amz-Signature=63a8e33ded16cab392eed2e3fdd5c532b1a2ca1909eed970e0048960bd32f3f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
