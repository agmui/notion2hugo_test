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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQRMLOWW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICE6aGj2BmMDtyrgnBKIY2spseDyoFhH3QbBNip6qzJiAiEAiT7AwGJPyVTp2K2UrU74Zjh0cdD%2BtH1LraJ6lywK13AqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQ5arsE3a9raWIPrSrcAxFknShlqBPYnJGIzrBEr3gLN4dmns59AQWOrbWrTnLu2PGtSQyC5U7RfzZlUobZ1TrCrJg8t5J8rZUscruAGJDdrWXd6V1Jx4%2FkporFG6Z9p9GN9nyDmVVQb%2FYfjavguaZ0cKuJGN2UVHzqZzhl7Lf366UQxrYTYG6L9mFPB3G%2B%2F4BjvPP2NX6XptTQmbwd8cciFqxyz8SG4Ii2HUpvMUZXLkY%2FXWnd%2FTlllSuhJvcybeVkbocDPZhTjVYEycIElCsQBkPW8BmyDjVlKgvKcq6nk2fOPk5tcqK1LuCAiFetzIgUBhbjFR%2FT0vVBn3RBxL%2BVOzEr6pWqoKY08YMwG549WfFjXPAd7kgkN2VKCd1vQbxNWV%2Fr%2BI3rp6TVujyYHbhhHa7L0BXH75NQG1%2FK5iXX3nSx57JWWSJr2H%2BEOS4lLhPb6VmS5QrlMLk%2FhU5UduU46RqsmmfYLFe6aSHh9adFW%2FlIe6oO8sCPmVWfbCsw9dPH6GEHcUH5knENljeazN44P%2B3d%2BO8vDvqGTssPEyBzAnVJAbjt1vvfgJv0EIhqmfhEQR9aA3bO4jlAqhONkMNR%2F3L2ad81WZ78GHyMJtas2l4WNKdiJtHG2dXdw3t%2FI%2BMQ9gm2B9fedwdsMJvj2L8GOqUBtCddjZxU4MPSqEOeg5chRQ3gGNKhjEIh%2FNrBxucOxKTF%2BoNacGK0Ft02u3t6nPjAhepIDJUThHPD%2F42UJeSdS5h%2FFs8xTD1YFqTbAZfbekMag%2BARVVrGRQvHnyUCN8z0rohv80p8kFx5mS%2B%2FGclhdyY4D7jF%2BzchWuqfnGbtCeKkWTl0xHRZ3pfWshEXqZ2X12oG2r6OyrhH5sY8a9lFvP7gAPR3&X-Amz-Signature=bd777d601b986dfc8834b12e556ad2446bc96e54739426f4eda84aac1f301bde&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQRMLOWW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICE6aGj2BmMDtyrgnBKIY2spseDyoFhH3QbBNip6qzJiAiEAiT7AwGJPyVTp2K2UrU74Zjh0cdD%2BtH1LraJ6lywK13AqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQ5arsE3a9raWIPrSrcAxFknShlqBPYnJGIzrBEr3gLN4dmns59AQWOrbWrTnLu2PGtSQyC5U7RfzZlUobZ1TrCrJg8t5J8rZUscruAGJDdrWXd6V1Jx4%2FkporFG6Z9p9GN9nyDmVVQb%2FYfjavguaZ0cKuJGN2UVHzqZzhl7Lf366UQxrYTYG6L9mFPB3G%2B%2F4BjvPP2NX6XptTQmbwd8cciFqxyz8SG4Ii2HUpvMUZXLkY%2FXWnd%2FTlllSuhJvcybeVkbocDPZhTjVYEycIElCsQBkPW8BmyDjVlKgvKcq6nk2fOPk5tcqK1LuCAiFetzIgUBhbjFR%2FT0vVBn3RBxL%2BVOzEr6pWqoKY08YMwG549WfFjXPAd7kgkN2VKCd1vQbxNWV%2Fr%2BI3rp6TVujyYHbhhHa7L0BXH75NQG1%2FK5iXX3nSx57JWWSJr2H%2BEOS4lLhPb6VmS5QrlMLk%2FhU5UduU46RqsmmfYLFe6aSHh9adFW%2FlIe6oO8sCPmVWfbCsw9dPH6GEHcUH5knENljeazN44P%2B3d%2BO8vDvqGTssPEyBzAnVJAbjt1vvfgJv0EIhqmfhEQR9aA3bO4jlAqhONkMNR%2F3L2ad81WZ78GHyMJtas2l4WNKdiJtHG2dXdw3t%2FI%2BMQ9gm2B9fedwdsMJvj2L8GOqUBtCddjZxU4MPSqEOeg5chRQ3gGNKhjEIh%2FNrBxucOxKTF%2BoNacGK0Ft02u3t6nPjAhepIDJUThHPD%2F42UJeSdS5h%2FFs8xTD1YFqTbAZfbekMag%2BARVVrGRQvHnyUCN8z0rohv80p8kFx5mS%2B%2FGclhdyY4D7jF%2BzchWuqfnGbtCeKkWTl0xHRZ3pfWshEXqZ2X12oG2r6OyrhH5sY8a9lFvP7gAPR3&X-Amz-Signature=1ce9577814ffe42f2779b5217cb257c1a657c402479769363a7bf387c3d71154&X-Amz-SignedHeaders=host&x-id=GetObject)

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
