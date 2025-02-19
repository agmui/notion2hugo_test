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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRZL5X6I%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDlAPjT8fZt4DaqwagQ0zsSwmwHJAQgAHpk8rOO3cn6tgIgEpZWZiLub5Ds0BGPahd6VvLe7rx2XWhbCCrORid5yFkqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaNU5GlJBjnBdNF3SrcA3ZKVsOraJyzROvpXiG%2Fw8Vts%2BoXyT3jXy9brALkFilS6TGXBTj8voUhamThJO0EONqhfw%2BcshA5WCn5KtGmSmJOIMOZ7VHCvgfz38UFJSUH0MaoZnfMNrwhJeDaTqACtRUnPZrpn%2FPYH3CC8wdpKB0%2FGL8pr4p1Fj70TcEZYZ%2FOlMYBw4M0nyqbNWlgY8DT9xOBiD85Dg3VbP0O1Q597eDENe%2Bbyp0WYrAb1mDzV7oMym%2B9tPBo21kKmLQFLIi687RvanWxrAMrem4g7w1gqDgTGFM2MxtdQ%2Fw1Q0bev49zarIs3%2FKTMpFYYPcFC91gMXTd8KGzMcgtCinSBgfD67JaZrcb6kwaId%2FZEOrHRuY%2FdXARQIlyE6AVtsNeUxAV7nCwBoNvg2%2FRdNDrLpUjrMEapW%2Bbo4H70xXVx9s8%2BV7SrdPTKu4f0lSX0YKwjsJ3im3Ouc%2FAq0MGEySapWIwvkWmAMynyD3Q%2Bh6lbAa%2BVr17OLhZiQvjd3SwNixrzwiYG9RbiqTQjmMampf8sfw1Uq6K%2BRMWeUjsX6Jy%2FEMKLPLfRiybO3dOPzc%2BzKkd4xNx7MmiUq1QsVzAstz0vko57lVYutyXLyAMs7iW9RyLlifkBHk%2BrEoJe9NzOPMCMP361r0GOqUBTDgQ6%2Bkdfsq1XImz8Vx2INsYYyES122%2FSabGPpKGAv8a6P%2FAqzMqVZXYNjYa4NP1XZyxdDkEs8U%2BaG23UAXoPkcQb723DTvzh0dRyEzSf61TAzrwMQWmFiy5e1n9nrxv%2Fmh7KCgTcWAh40%2BqUczosSD0NlI5b5HiLzKwOZRzxUgH67neI3hhtNcoJYtlrq5Jv%2BpnVx7RkPXGl%2FySJd8hqLQSTn5O&X-Amz-Signature=ee76563c0de62b776b159bebc6406a8e3708e8da6a1a5df1289db29723af7fcd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRZL5X6I%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDlAPjT8fZt4DaqwagQ0zsSwmwHJAQgAHpk8rOO3cn6tgIgEpZWZiLub5Ds0BGPahd6VvLe7rx2XWhbCCrORid5yFkqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaNU5GlJBjnBdNF3SrcA3ZKVsOraJyzROvpXiG%2Fw8Vts%2BoXyT3jXy9brALkFilS6TGXBTj8voUhamThJO0EONqhfw%2BcshA5WCn5KtGmSmJOIMOZ7VHCvgfz38UFJSUH0MaoZnfMNrwhJeDaTqACtRUnPZrpn%2FPYH3CC8wdpKB0%2FGL8pr4p1Fj70TcEZYZ%2FOlMYBw4M0nyqbNWlgY8DT9xOBiD85Dg3VbP0O1Q597eDENe%2Bbyp0WYrAb1mDzV7oMym%2B9tPBo21kKmLQFLIi687RvanWxrAMrem4g7w1gqDgTGFM2MxtdQ%2Fw1Q0bev49zarIs3%2FKTMpFYYPcFC91gMXTd8KGzMcgtCinSBgfD67JaZrcb6kwaId%2FZEOrHRuY%2FdXARQIlyE6AVtsNeUxAV7nCwBoNvg2%2FRdNDrLpUjrMEapW%2Bbo4H70xXVx9s8%2BV7SrdPTKu4f0lSX0YKwjsJ3im3Ouc%2FAq0MGEySapWIwvkWmAMynyD3Q%2Bh6lbAa%2BVr17OLhZiQvjd3SwNixrzwiYG9RbiqTQjmMampf8sfw1Uq6K%2BRMWeUjsX6Jy%2FEMKLPLfRiybO3dOPzc%2BzKkd4xNx7MmiUq1QsVzAstz0vko57lVYutyXLyAMs7iW9RyLlifkBHk%2BrEoJe9NzOPMCMP361r0GOqUBTDgQ6%2Bkdfsq1XImz8Vx2INsYYyES122%2FSabGPpKGAv8a6P%2FAqzMqVZXYNjYa4NP1XZyxdDkEs8U%2BaG23UAXoPkcQb723DTvzh0dRyEzSf61TAzrwMQWmFiy5e1n9nrxv%2Fmh7KCgTcWAh40%2BqUczosSD0NlI5b5HiLzKwOZRzxUgH67neI3hhtNcoJYtlrq5Jv%2BpnVx7RkPXGl%2FySJd8hqLQSTn5O&X-Amz-Signature=e57bf15fe92809ec54a3555bb71e90a58ef9e27dde22521bec45da6f14b89912&X-Amz-SignedHeaders=host&x-id=GetObject)

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
