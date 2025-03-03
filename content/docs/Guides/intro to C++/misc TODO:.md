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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QIKVEZ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTGqMOq5kFRyx2Cl3FE4gX%2FP3%2FMbfimVLaMuTthREGnAiEA7BIx9IIwuqs4q2RVCC5KeKiZsQ4gVb8M41XZB%2FGfv20qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkT1FJKoisMEzGrhCrcA4PZkgRvI5Rb6UMk1K2002irkEqQPLpWYQv3cKMgYkXDG2NxOxR3UGWE%2FIlX9wszWiBYBzfQMHdNXsU51w0yQxrNjfzXl6V6S5mmNsg6lS8knmiia2SnE4CCuo%2F6nlmhqDTElM3h8NQNWs42KuLhy7w7Fj9ly5trfX26x1cMZn2e%2FeIKb8hc0ELD2EEVXzxm2v8Nvc4rGrDcZry4FmC714DqkKSI3soerFReUXQNANdmQcH9Y4JzUTyXlO61bayGU15r3SAGrgtH5bvzoOWS9rfcz4FsjPlaR3GmgSdF3Am%2Fw55Q2tY1eRqscI81eq4OrBhFfwBBv4S6pLxg6M7Lj6SxvMn8wq3%2FYrXihJ93OvehNYFq6cYlG7VBmWcauDJHNqRvU15T5wV%2B1sPVRQSKIC5BGvcTtQFnwDqT7u07IzTuBHubBe2XHM7IBDjv3bPNOlbjYXAWuUGa2Rsuvxv9DciX3zcED9p%2FoCcr6ApnK0HO%2BKnTS9dKWtljYOZpMg0e58U30qsEOEH6Q0CIixf%2BQhyaTQ3ldFnnG%2BGR6iZBBhbTGNgH26yB%2FLHyr3db%2Bq7bfqjmYLCKml2LLvmzP3U0olhUP1s1eYPnyLxNTX8jdfPbl0jzf%2BdxU%2Fu38cr2MLrZlL4GOqUBvU1JnE57CevWgi%2Fm8AFctqdIcyxT5lGtIZCJHdapUIdOSZSVjBT%2BMLf6fFyFDmJ2Wu0375%2BePNwW6oSTfLK2MNv16PftMzn1UZI0DeMipVmyr31FLlX5DZgTeACnihmkLkgXbcTWw%2FtapNboZk4Ecp%2FykTrCBhfskD2oYJE63hzwdSZ3dVtCCoCV3F4HDegV%2BVZU5IrqL4jrR3qeWLJZuS89tKT1&X-Amz-Signature=4678a4e6917dcba26806415f2dbb7b9f2e68b1f9779c3d4cdc5120487ac04c64&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QIKVEZ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTGqMOq5kFRyx2Cl3FE4gX%2FP3%2FMbfimVLaMuTthREGnAiEA7BIx9IIwuqs4q2RVCC5KeKiZsQ4gVb8M41XZB%2FGfv20qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkT1FJKoisMEzGrhCrcA4PZkgRvI5Rb6UMk1K2002irkEqQPLpWYQv3cKMgYkXDG2NxOxR3UGWE%2FIlX9wszWiBYBzfQMHdNXsU51w0yQxrNjfzXl6V6S5mmNsg6lS8knmiia2SnE4CCuo%2F6nlmhqDTElM3h8NQNWs42KuLhy7w7Fj9ly5trfX26x1cMZn2e%2FeIKb8hc0ELD2EEVXzxm2v8Nvc4rGrDcZry4FmC714DqkKSI3soerFReUXQNANdmQcH9Y4JzUTyXlO61bayGU15r3SAGrgtH5bvzoOWS9rfcz4FsjPlaR3GmgSdF3Am%2Fw55Q2tY1eRqscI81eq4OrBhFfwBBv4S6pLxg6M7Lj6SxvMn8wq3%2FYrXihJ93OvehNYFq6cYlG7VBmWcauDJHNqRvU15T5wV%2B1sPVRQSKIC5BGvcTtQFnwDqT7u07IzTuBHubBe2XHM7IBDjv3bPNOlbjYXAWuUGa2Rsuvxv9DciX3zcED9p%2FoCcr6ApnK0HO%2BKnTS9dKWtljYOZpMg0e58U30qsEOEH6Q0CIixf%2BQhyaTQ3ldFnnG%2BGR6iZBBhbTGNgH26yB%2FLHyr3db%2Bq7bfqjmYLCKml2LLvmzP3U0olhUP1s1eYPnyLxNTX8jdfPbl0jzf%2BdxU%2Fu38cr2MLrZlL4GOqUBvU1JnE57CevWgi%2Fm8AFctqdIcyxT5lGtIZCJHdapUIdOSZSVjBT%2BMLf6fFyFDmJ2Wu0375%2BePNwW6oSTfLK2MNv16PftMzn1UZI0DeMipVmyr31FLlX5DZgTeACnihmkLkgXbcTWw%2FtapNboZk4Ecp%2FykTrCBhfskD2oYJE63hzwdSZ3dVtCCoCV3F4HDegV%2BVZU5IrqL4jrR3qeWLJZuS89tKT1&X-Amz-Signature=223325782e4c8efcb0f026011cd3388b6eb390bf575d0c4e38e7d64cf28f02fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
