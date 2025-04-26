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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IHF4RC2%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwr9o0FDzmOcXut8fQiBQ117DwlSBSfkvwqXb2W9B5%2BwIgPCJ8QQ1gtg84i1MsJBEPct4bUqP8PiOXn6y2F6YrSmAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDD2aReqyAMU91nxSVyrcA%2B%2FtfmyJb5Vwv73XAMJDUDayMDzuy4XHnO%2FuOoZmLl3CqquJOnLtNnRofxv52Z8KSjfL2D%2FU4Zli82GisFSdu2EcN5yBjj2wEi%2B9DyUrOIFNcCudXdhZFb2LZcunoSd2teJk%2FuMwlofBIeaN2PTOgGkYTWWLbdN9fb%2B7anV5LCNONNWtEfJKJ5twEDUAoMBGFq1cPQRSyfZmbtjTCoQIgKe7rRlPiNqqUJeMIPwYdS5j3i8vuelMPqGDAe%2F2Q8Sw2gHwYx3DiiNg%2BXJcTQHjDhab2AeuFnjeY2J%2FM6Fr3d0S%2FHLp%2Bji8oN9Cy7ZEdVFu7FiGZhroZdZ2HjDevUU4z5XNrcZABgKv0scIa4q6Kh2xBNUol%2Fx3bov7Uz6C0G3yhoxlVa0MLejQlQKO%2BkXINH0ZI0V5ES5IhDWco%2Brvp0G72yvNkN7bLXAu2es1UEAmiYpvVuzOxR17JugFp7X6oL2suC9VBhcAAlcYA%2FxWPihQajgkoSq0yA65Klwp2d6WJ%2FY2B%2B2swWbY6eo%2FyOiea5B2bEuqQNh4XvOx2s4uOLlxd3bFCRU51cEKlYyhkNh%2B4GTFDmVr1X72n%2Fk7n1cQdvpBfhWwn%2BoywM5C8395vs5Wg9amWPei%2B8%2B7A0FBMK%2BqscAGOqUBnMpvj5ou0HunlZjM8DMq%2BDh8LpsjB3DDbekv8gsIHd%2BOzANS7dF0sp%2BoJH1gd76dqpgyAtxgCQMPZnqTMfgJnWqVLlPFb73mx08VlEt7OFwkZruZfbT1odHwKNQqY73dviy3EUqEpH8pP7GE2p78ctPh5KNOARz5DwmO8duM%2BUl5loEMwD4D60Kmv346NcEWMYb3%2BVt2ioPohtnXzqmXfzNU3kgb&X-Amz-Signature=281838fef6166fcd67e1398a6708477ee2bceb5204bd5a87cd30d3342a277552&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IHF4RC2%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwr9o0FDzmOcXut8fQiBQ117DwlSBSfkvwqXb2W9B5%2BwIgPCJ8QQ1gtg84i1MsJBEPct4bUqP8PiOXn6y2F6YrSmAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDD2aReqyAMU91nxSVyrcA%2B%2FtfmyJb5Vwv73XAMJDUDayMDzuy4XHnO%2FuOoZmLl3CqquJOnLtNnRofxv52Z8KSjfL2D%2FU4Zli82GisFSdu2EcN5yBjj2wEi%2B9DyUrOIFNcCudXdhZFb2LZcunoSd2teJk%2FuMwlofBIeaN2PTOgGkYTWWLbdN9fb%2B7anV5LCNONNWtEfJKJ5twEDUAoMBGFq1cPQRSyfZmbtjTCoQIgKe7rRlPiNqqUJeMIPwYdS5j3i8vuelMPqGDAe%2F2Q8Sw2gHwYx3DiiNg%2BXJcTQHjDhab2AeuFnjeY2J%2FM6Fr3d0S%2FHLp%2Bji8oN9Cy7ZEdVFu7FiGZhroZdZ2HjDevUU4z5XNrcZABgKv0scIa4q6Kh2xBNUol%2Fx3bov7Uz6C0G3yhoxlVa0MLejQlQKO%2BkXINH0ZI0V5ES5IhDWco%2Brvp0G72yvNkN7bLXAu2es1UEAmiYpvVuzOxR17JugFp7X6oL2suC9VBhcAAlcYA%2FxWPihQajgkoSq0yA65Klwp2d6WJ%2FY2B%2B2swWbY6eo%2FyOiea5B2bEuqQNh4XvOx2s4uOLlxd3bFCRU51cEKlYyhkNh%2B4GTFDmVr1X72n%2Fk7n1cQdvpBfhWwn%2BoywM5C8395vs5Wg9amWPei%2B8%2B7A0FBMK%2BqscAGOqUBnMpvj5ou0HunlZjM8DMq%2BDh8LpsjB3DDbekv8gsIHd%2BOzANS7dF0sp%2BoJH1gd76dqpgyAtxgCQMPZnqTMfgJnWqVLlPFb73mx08VlEt7OFwkZruZfbT1odHwKNQqY73dviy3EUqEpH8pP7GE2p78ctPh5KNOARz5DwmO8duM%2BUl5loEMwD4D60Kmv346NcEWMYb3%2BVt2ioPohtnXzqmXfzNU3kgb&X-Amz-Signature=b8208aa974c9d46da0e4696f36c32be5af687114e9825c6ad81f2d4e5b512101&X-Amz-SignedHeaders=host&x-id=GetObject)

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
