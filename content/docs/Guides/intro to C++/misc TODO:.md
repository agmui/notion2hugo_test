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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3UOUA5M%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2yXxiwmOBngib%2F4fn4gccMJXsjp%2FG4Yf0FwZijfxfYAiEA0UnCRtM84gvE9ccKvnqCvCDOmwNgcoQXZ7uzR%2FurqL0q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDP9MbRyLBf8%2FhDclJyrcA4%2F1adrllq2gXo7lAy%2FgtjH3xxXvo21KUprFxWtRJ7EhnpMCX9YmGYOurGJk%2Bxib8YZMJbzpdtNZFO%2FEfrTrqrUDjbNhAOdr%2FBam%2FkzKWH3NkdEfWFQGjK823HYQOSHVz97Oi3LsCKaofBYuftKy6ek%2BT19Q%2FiQ5scAnkTglylE%2Bf4EKVqv6YajRmtuljUBp%2BeeNmeGtTIBHwuDvtvReeXP3jTCM3WbIOwV0UV3VL1e9NvMdL7hMAGKaLxkSJF6O%2FiocPS9YJvAmt2ERNhwPxjh8I0SexzqvIHF0dc1e1IXNtrq5R2wkvE9ONsF4o%2F7QkTf1YPfXsT4MgrvHrPjB0eA7xejLnW%2BNQBgqjDtPPHicSP7tPuxC1%2F8XYQPXo8GH0ebav8iQH8AmBOVox7rdd5Z1GgOIo%2FEi9h3PrVqsGioGbNWStWZ%2F%2FtAg5i2JWQuMF27%2BarQhie%2FCskAj%2Fbz0UdKUIVdBdcIXdv%2BRpyV4EnNsGtyH136AIzlAcXq3qOCUNrFozIKwgWV5A0uDSKB1Xink%2FT0GwEQ%2FudinBBIxZfi90KcnSpzl9onVy87vTCJdo0ItLbk%2Bulpq1kjBborddCr%2BMXblB67e3ScjgKjgMUoDObpqG7c7w%2F6DwhnuMJyc8r0GOqUBiBw%2FgwfNQ0a8LV%2BbNCqushJc%2BKjGX3a8z%2BYr9MFxocP%2BKBWEtdIpSUj92%2F6xQXJ1hVuJ22lJ%2F%2BkfNJ21ehaTcKFdMR8ZHvamakYt2ccpsbJyiWwCt4XBNxINBEMbkU3GA8M%2B5LiO5RhWCkeVYEBA4m9%2FiOYoQLg4RuFGO65Fh18LxFJcCq4g6U9SxQxNdeOf7wyLj0c0Cg%2F9g4RHob14A5U1iM40&X-Amz-Signature=27dadcd7fdc6819f40eba25aed88b8ed4820db35492804e7f51d811747b1ebc1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3UOUA5M%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2yXxiwmOBngib%2F4fn4gccMJXsjp%2FG4Yf0FwZijfxfYAiEA0UnCRtM84gvE9ccKvnqCvCDOmwNgcoQXZ7uzR%2FurqL0q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDP9MbRyLBf8%2FhDclJyrcA4%2F1adrllq2gXo7lAy%2FgtjH3xxXvo21KUprFxWtRJ7EhnpMCX9YmGYOurGJk%2Bxib8YZMJbzpdtNZFO%2FEfrTrqrUDjbNhAOdr%2FBam%2FkzKWH3NkdEfWFQGjK823HYQOSHVz97Oi3LsCKaofBYuftKy6ek%2BT19Q%2FiQ5scAnkTglylE%2Bf4EKVqv6YajRmtuljUBp%2BeeNmeGtTIBHwuDvtvReeXP3jTCM3WbIOwV0UV3VL1e9NvMdL7hMAGKaLxkSJF6O%2FiocPS9YJvAmt2ERNhwPxjh8I0SexzqvIHF0dc1e1IXNtrq5R2wkvE9ONsF4o%2F7QkTf1YPfXsT4MgrvHrPjB0eA7xejLnW%2BNQBgqjDtPPHicSP7tPuxC1%2F8XYQPXo8GH0ebav8iQH8AmBOVox7rdd5Z1GgOIo%2FEi9h3PrVqsGioGbNWStWZ%2F%2FtAg5i2JWQuMF27%2BarQhie%2FCskAj%2Fbz0UdKUIVdBdcIXdv%2BRpyV4EnNsGtyH136AIzlAcXq3qOCUNrFozIKwgWV5A0uDSKB1Xink%2FT0GwEQ%2FudinBBIxZfi90KcnSpzl9onVy87vTCJdo0ItLbk%2Bulpq1kjBborddCr%2BMXblB67e3ScjgKjgMUoDObpqG7c7w%2F6DwhnuMJyc8r0GOqUBiBw%2FgwfNQ0a8LV%2BbNCqushJc%2BKjGX3a8z%2BYr9MFxocP%2BKBWEtdIpSUj92%2F6xQXJ1hVuJ22lJ%2F%2BkfNJ21ehaTcKFdMR8ZHvamakYt2ccpsbJyiWwCt4XBNxINBEMbkU3GA8M%2B5LiO5RhWCkeVYEBA4m9%2FiOYoQLg4RuFGO65Fh18LxFJcCq4g6U9SxQxNdeOf7wyLj0c0Cg%2F9g4RHob14A5U1iM40&X-Amz-Signature=f287110fd3bb177ae7a360c13d2309f691418dbf6264eb2b63218ba9cd4f7891&X-Amz-SignedHeaders=host&x-id=GetObject)

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
