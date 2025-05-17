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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZG4FVIJ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjF4C0WwDCMCs7cQ0oBIf1oh1P442pqexvijmhqiyTWAiEAx0j%2BaS1UxLu9rGgiTnZ8Nka0HGuIIfSiuat%2FLgDoaPcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDD75%2FAOUEBVcfZwaJSrcA4z5pdglpcXDpCWD6Pu7czXjP3091zNO4bYiWDU1SllLmx3vEOrd%2FOQm%2FjCIJ6cOC1TOg8mot1GKiUHLQJXFqyzaODg1HlzYj6q2Gy1vdtE%2FOUZB0XqConiGMHA4Pa5l8QaoVsNflME4iTwsexf4aJvTx5NKfoWLA7W%2FkOVwJIgmgQ9R5Z91mRanQxaNYluy64eHnRZj7QGDtrs%2B0i2CrSrLvhwI086YZ%2FNbNJGt%2FSk3tvxTRtSCAQdEnxNIvVc8rYzc0EJ%2Fa%2FlfbPK1vuGnTgbbQMEK%2BYK2EU6hv5e3YS5NYW3Wz9NOizWAnWcf32oL5E9stkiOfjVlACMAZm7cIiV4isaesBOfOxtpJT%2FzP38%2BxHb75JkSgtGM74MaLAaaa%2Ft7Oq5GprPl2%2ByWrQ1hLkyeOi2dCcGdQmCSZ4VBA2jAdqfgcqWeB4ZffP9xiMUXK7BF96H%2FI919wBa13USxMB2EkCLT95uvViFr18nrtAac0PJzxgD2bYXTPPR1%2Bb%2FrtqBW3YOlgoCiJavzTaHapUEhFBf79EJSvHKBL764NgaC2Bot%2BuK99iV8oqHFmn%2BUfMIZvWkRem7URsEGTV2WUagCJd3sdTsGXBqufO5M07B6bxeYrATDvZYSw3kmMOq2osEGOqUBFu7NqD9W0wgsRvkKwFOfiPqKoMWymgh1a6jodvvN%2BhzwviiBSX27bDv2fFS2uGr072MdHsD1Gi%2FHbAOtzy6XJaRw%2BvL2Zo4do97tu2%2BE4F%2F3h1bTDFgbT4MhqQVuvA4ZO6FNA5odnZ56JmEIIn2hh9TeFSKaenLgXEL%2BSrnpkCO7pfES3IaG6npGP1pQuqcvCYNzW%2FBJAUoH%2ByPfUgZ%2FPZaOsnmO&X-Amz-Signature=6033675e15cecd7c3a4beba4e89c5a9cecad6f01bd05227a64787bfbbb40b893&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZG4FVIJ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjF4C0WwDCMCs7cQ0oBIf1oh1P442pqexvijmhqiyTWAiEAx0j%2BaS1UxLu9rGgiTnZ8Nka0HGuIIfSiuat%2FLgDoaPcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDD75%2FAOUEBVcfZwaJSrcA4z5pdglpcXDpCWD6Pu7czXjP3091zNO4bYiWDU1SllLmx3vEOrd%2FOQm%2FjCIJ6cOC1TOg8mot1GKiUHLQJXFqyzaODg1HlzYj6q2Gy1vdtE%2FOUZB0XqConiGMHA4Pa5l8QaoVsNflME4iTwsexf4aJvTx5NKfoWLA7W%2FkOVwJIgmgQ9R5Z91mRanQxaNYluy64eHnRZj7QGDtrs%2B0i2CrSrLvhwI086YZ%2FNbNJGt%2FSk3tvxTRtSCAQdEnxNIvVc8rYzc0EJ%2Fa%2FlfbPK1vuGnTgbbQMEK%2BYK2EU6hv5e3YS5NYW3Wz9NOizWAnWcf32oL5E9stkiOfjVlACMAZm7cIiV4isaesBOfOxtpJT%2FzP38%2BxHb75JkSgtGM74MaLAaaa%2Ft7Oq5GprPl2%2ByWrQ1hLkyeOi2dCcGdQmCSZ4VBA2jAdqfgcqWeB4ZffP9xiMUXK7BF96H%2FI919wBa13USxMB2EkCLT95uvViFr18nrtAac0PJzxgD2bYXTPPR1%2Bb%2FrtqBW3YOlgoCiJavzTaHapUEhFBf79EJSvHKBL764NgaC2Bot%2BuK99iV8oqHFmn%2BUfMIZvWkRem7URsEGTV2WUagCJd3sdTsGXBqufO5M07B6bxeYrATDvZYSw3kmMOq2osEGOqUBFu7NqD9W0wgsRvkKwFOfiPqKoMWymgh1a6jodvvN%2BhzwviiBSX27bDv2fFS2uGr072MdHsD1Gi%2FHbAOtzy6XJaRw%2BvL2Zo4do97tu2%2BE4F%2F3h1bTDFgbT4MhqQVuvA4ZO6FNA5odnZ56JmEIIn2hh9TeFSKaenLgXEL%2BSrnpkCO7pfES3IaG6npGP1pQuqcvCYNzW%2FBJAUoH%2ByPfUgZ%2FPZaOsnmO&X-Amz-Signature=a7f2d1d03febafb199746135e3af7b2b2613d70b888106cfc614783665b871c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
