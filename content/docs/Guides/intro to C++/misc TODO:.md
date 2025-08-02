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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WU2IDPE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSltp6gDk2Sqs%2BVhBVQLGssH2vJrsJbEw4vGrTBqjyDAiBnMbxqWnxvk467dtVz48enhKaR14Xr%2BqifbhVKA2OPfSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrEF8ZOhu%2FXIbHlUVKtwDEHcQKKntNgutGUS69aybAM9F6zoyTG2m9GSwV9zTgTxUYCRFQ%2FxOfOfnsjGZzIIbV5kMbsolqjz1GmEHoKEVhuEOEFqijnyQMOv9nijLonOdikyN1d4FmwqynDwWADFPBoY6LefZo50dvRbbIRT%2Fdb%2FlKctMzJIXbpQzajEgjQ3LtzkAwPcw3mj%2FW4nPzGe8VbPYGhJjaBL9WK19ZjuXSlva9NuJjlTUi5A3zlVC8oCZEMIjX2uFfbbBny8NzMGCpIy2EkmwYa%2FipIvQanj6pl2oa%2BJvaakOcm1H3MMm3gbmdLPLxm4O3jdRxT9NKaRAJziB5nPyXNcHROdTBJ9QfRU%2FN15BmXm61FnDdl61uWYRPYQVpShbXZerKyxuk%2B9osOguV%2BTBGyyQVRbFok3qrLHLfbg%2FdVCUEhixZCLh6iyccoZTJ06D1oOfWHcH%2BosHTyzR9NLx4hX3hTNU7MFT88iJ2j2NoyuWEK7P3kLr8WIqcCuAZCn6PDDCd5EDTKDaGdJkPL5jcaB0%2FES8Zj1bxE%2BoJg081nl45qjLVu9JCUEO5qoYLJaLE3AmgIRJ5vxCV%2BhWFfY71a5C68tGt9kET4rGVx1z3Dp%2FYpGb9JnmrzX7I8sgV%2Bwvr7LW7lAwz5y2xAY6pgGOJShoxSG3obSJ9uUGAjd2W4WFyJWqY2h2UQeVtKcOw2iCSvsqXSRnEtDEQWAsx7brk8iK7Loj6Vi64HvBhnkbZWkYk7OjcLFg%2BfDmcKkphmvUYbliHfQnGJZ2IOIfS4Dk57%2F4ieG3BKltl%2BEbK7EznWm%2Fc8EwSxxpJCrLR0L38CnrACBWUJVBSkNJQvzAsy93sgVBGb%2FV4xbruW4kdndVmHDg8X7%2F&X-Amz-Signature=ab75f46eec5c3240039d9827876686d89436cd185e4241fdce10417bf651ce2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WU2IDPE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSltp6gDk2Sqs%2BVhBVQLGssH2vJrsJbEw4vGrTBqjyDAiBnMbxqWnxvk467dtVz48enhKaR14Xr%2BqifbhVKA2OPfSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrEF8ZOhu%2FXIbHlUVKtwDEHcQKKntNgutGUS69aybAM9F6zoyTG2m9GSwV9zTgTxUYCRFQ%2FxOfOfnsjGZzIIbV5kMbsolqjz1GmEHoKEVhuEOEFqijnyQMOv9nijLonOdikyN1d4FmwqynDwWADFPBoY6LefZo50dvRbbIRT%2Fdb%2FlKctMzJIXbpQzajEgjQ3LtzkAwPcw3mj%2FW4nPzGe8VbPYGhJjaBL9WK19ZjuXSlva9NuJjlTUi5A3zlVC8oCZEMIjX2uFfbbBny8NzMGCpIy2EkmwYa%2FipIvQanj6pl2oa%2BJvaakOcm1H3MMm3gbmdLPLxm4O3jdRxT9NKaRAJziB5nPyXNcHROdTBJ9QfRU%2FN15BmXm61FnDdl61uWYRPYQVpShbXZerKyxuk%2B9osOguV%2BTBGyyQVRbFok3qrLHLfbg%2FdVCUEhixZCLh6iyccoZTJ06D1oOfWHcH%2BosHTyzR9NLx4hX3hTNU7MFT88iJ2j2NoyuWEK7P3kLr8WIqcCuAZCn6PDDCd5EDTKDaGdJkPL5jcaB0%2FES8Zj1bxE%2BoJg081nl45qjLVu9JCUEO5qoYLJaLE3AmgIRJ5vxCV%2BhWFfY71a5C68tGt9kET4rGVx1z3Dp%2FYpGb9JnmrzX7I8sgV%2Bwvr7LW7lAwz5y2xAY6pgGOJShoxSG3obSJ9uUGAjd2W4WFyJWqY2h2UQeVtKcOw2iCSvsqXSRnEtDEQWAsx7brk8iK7Loj6Vi64HvBhnkbZWkYk7OjcLFg%2BfDmcKkphmvUYbliHfQnGJZ2IOIfS4Dk57%2F4ieG3BKltl%2BEbK7EznWm%2Fc8EwSxxpJCrLR0L38CnrACBWUJVBSkNJQvzAsy93sgVBGb%2FV4xbruW4kdndVmHDg8X7%2F&X-Amz-Signature=be4ff7b779378abcc8210e0d24277a6fc79cf28f11cc4d1a3cd40ab140b19f62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
