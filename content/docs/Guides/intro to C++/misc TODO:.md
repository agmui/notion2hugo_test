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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZEY2NXM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU3KzYk7pxsqs0E%2BV6y%2FLacLzf76rCZr3pRXMJ%2FHyX5AiEAwlEDwREeQozidfgwXlgHKznF0Mjzni8ZVMwxJEEX1ikq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKMqKBFuEGYs9I00MCrcA29nGTYXs%2BuBT90js1n4Sz%2F8km8Qgt4xSgUdIeT4YoGaV0wNkLWjnN27yQtl4FPz34aqAF0Kl7E7u7oB4bfouKEeQYwRIPDcdnorMMYX15kjhMN5b0lX1SqkHOSUxD9cNwXSJvb9vdkkrkVHb351hcFjggWhFPbUYwOhhFvZinLZW6DiX18yQIzyeyDlr9Ch1thzQJgXsV8Ul9K2DHHGXWyoeBM6Tw%2Fmcxi7FZ5ZW8dVvQSxM846hdm5u5eV%2BDdZqpyin%2FZUZvaL8LJgg4wyxSKk%2F0nedYgr1zwaKMpMJVpLwSR6gDiGI5hlxJDtrkE6b8v635unIFGzAOuuhexN6NYFR4Reppv2kMbpSP%2FmyFDld9ujm4BZC%2Be8YGNdWpxq7cBOwmS4ATBxvLH5selb3tREtUgl2RJzHW96xas%2BElqsfE6RBZYWXq%2F1os2lx1XvEffd7t4rvoBhb%2FlzwHmYbh2e3Rru93p4waBm%2BxNPeyx8zAl1iLxu1dENlACK5TqgdARP0xlERxABCGA24dxLMC8NjIbMortL8yHp3C22%2FzFviwHSvWZ1ts2V2corrM3WIRO8QgYNeE3Fyuy%2F3kKUz6xxS7S1RQV3jsBkSINc8CDrEQbB2vvgWCkr%2BMTqML3ms8AGOqUBTUHX9MpJc3%2Fk8NnSEO7Ovk4f%2F3KJWQqdEXROtvefPTMG%2Bc3AdoBTLdhrucwciGyeUNxbP7rVvzH1TgMTwni7syd81F%2BZebhgKmSp2%2Fx%2BHt%2FuhDKbvlH5%2B7WAfCxt9zmh1wef8DSuZ09avwQVAhmilgfwqqd8FMUKOWeVesZgsM6Le9NGcG3VirhbUqcvuUBgVugxSup3XWaSxzUasFap8nSccWaj&X-Amz-Signature=a8d92fc03ba8dd4b0453b71291aeeca4f5d55b0f31d0f7539e4349169d9dadd2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZEY2NXM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU3KzYk7pxsqs0E%2BV6y%2FLacLzf76rCZr3pRXMJ%2FHyX5AiEAwlEDwREeQozidfgwXlgHKznF0Mjzni8ZVMwxJEEX1ikq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKMqKBFuEGYs9I00MCrcA29nGTYXs%2BuBT90js1n4Sz%2F8km8Qgt4xSgUdIeT4YoGaV0wNkLWjnN27yQtl4FPz34aqAF0Kl7E7u7oB4bfouKEeQYwRIPDcdnorMMYX15kjhMN5b0lX1SqkHOSUxD9cNwXSJvb9vdkkrkVHb351hcFjggWhFPbUYwOhhFvZinLZW6DiX18yQIzyeyDlr9Ch1thzQJgXsV8Ul9K2DHHGXWyoeBM6Tw%2Fmcxi7FZ5ZW8dVvQSxM846hdm5u5eV%2BDdZqpyin%2FZUZvaL8LJgg4wyxSKk%2F0nedYgr1zwaKMpMJVpLwSR6gDiGI5hlxJDtrkE6b8v635unIFGzAOuuhexN6NYFR4Reppv2kMbpSP%2FmyFDld9ujm4BZC%2Be8YGNdWpxq7cBOwmS4ATBxvLH5selb3tREtUgl2RJzHW96xas%2BElqsfE6RBZYWXq%2F1os2lx1XvEffd7t4rvoBhb%2FlzwHmYbh2e3Rru93p4waBm%2BxNPeyx8zAl1iLxu1dENlACK5TqgdARP0xlERxABCGA24dxLMC8NjIbMortL8yHp3C22%2FzFviwHSvWZ1ts2V2corrM3WIRO8QgYNeE3Fyuy%2F3kKUz6xxS7S1RQV3jsBkSINc8CDrEQbB2vvgWCkr%2BMTqML3ms8AGOqUBTUHX9MpJc3%2Fk8NnSEO7Ovk4f%2F3KJWQqdEXROtvefPTMG%2Bc3AdoBTLdhrucwciGyeUNxbP7rVvzH1TgMTwni7syd81F%2BZebhgKmSp2%2Fx%2BHt%2FuhDKbvlH5%2B7WAfCxt9zmh1wef8DSuZ09avwQVAhmilgfwqqd8FMUKOWeVesZgsM6Le9NGcG3VirhbUqcvuUBgVugxSup3XWaSxzUasFap8nSccWaj&X-Amz-Signature=da77647ebbb4205db7ad8582c4cd1f78a3f2dc5536a832ece1e8d309880c24af&X-Amz-SignedHeaders=host&x-id=GetObject)

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
