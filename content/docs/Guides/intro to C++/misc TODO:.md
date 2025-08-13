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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K3LLHP4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvrLsGZtoig8lm9bwyoVzpNs8UKCLQxGU2Va27S%2FfVnAiEAsg5AJe3Gl0uUavhmG%2BFLoMh2kcIiaGmqGldAWMwykvUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLECdbVgf5Pza5no3SrcAxrcW9S484pcSJHV0VSfmgpQI8Xhfh%2FXY2CAZFwK%2BFQAr%2BCHytNk%2BbKuThBVGI0fo649l520elrHFuTYbBZnOVZa4iVWS9lWM0pNtcrws3rqxjwavCdUp0WWNf5e0dxE6B6krCUPnxZPiUVSTr7HDWrQIrb7otEMjx%2F8mfyubYv76iDeOER8ZDIIyWLfLxqTr5f1e8QAL8nhk%2F3NkpUFNbiAlvOcGiUZzE%2FQEBK%2BKIBQqBFT85YLCl9K4xH3GRRygrAUeY7m152xOllvMqu3oNVtSSreaDUhaQAp6MX1ESHz0wpH7y45Z6CTE0A1d9f8%2BO1sRzCGT%2BDQsYBIeV3Cahg08Js1u2IxpnXTPEchAjjEdBEBtYagWkOMr4SvwM7EajCxQZIXTz%2FGOv4mnTGbpZJf%2FKibtox5I%2BLXis6YP5VOYLgGVoyXFLcJI3ifvqy%2BvmwWn6TNeNTZxiGwfJv%2Fv%2BqsouoqN2LA1G46qqQHkBtoU9uPgjat64dJ6YWp%2BenOtknx2jPLWGt8E0FdGzvBNRB3LsDH7FLTyd6PfGcnM955q2ufQw1%2FjswWZVo%2Byijz1ggRcMrMXbqhT1XGJ%2FRZsA1jY98A%2BoZRrzlVb3ILkGkhYzhRJnCYp%2BFCeWLEMOj78sQGOqUB7rGjPyN63wKxPTR1hTREofVJbo0faMO0pxKPy5AoHJgaaqQfrzQGRzGFgRBMRIXE6M%2F4EC4VucB%2B7ZHVQLwzUJU7JmOLiHe7Opez%2FI4XORN505qwPFBmdO1U1YozdfbxfaNzkoWzIDvSafyYm9p%2BsIbS6TaChe9jEJV63FCc%2FUoiA8dp35RrD6%2FJ0PZRMzwqFq%2BMyhL8PEk%2BdSWhmQDr1dm8%2FvLs&X-Amz-Signature=6f4b5b46057826b6a7ac7896a7278b75fc6a5105f38490fc436f4b64160ed63f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K3LLHP4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvrLsGZtoig8lm9bwyoVzpNs8UKCLQxGU2Va27S%2FfVnAiEAsg5AJe3Gl0uUavhmG%2BFLoMh2kcIiaGmqGldAWMwykvUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLECdbVgf5Pza5no3SrcAxrcW9S484pcSJHV0VSfmgpQI8Xhfh%2FXY2CAZFwK%2BFQAr%2BCHytNk%2BbKuThBVGI0fo649l520elrHFuTYbBZnOVZa4iVWS9lWM0pNtcrws3rqxjwavCdUp0WWNf5e0dxE6B6krCUPnxZPiUVSTr7HDWrQIrb7otEMjx%2F8mfyubYv76iDeOER8ZDIIyWLfLxqTr5f1e8QAL8nhk%2F3NkpUFNbiAlvOcGiUZzE%2FQEBK%2BKIBQqBFT85YLCl9K4xH3GRRygrAUeY7m152xOllvMqu3oNVtSSreaDUhaQAp6MX1ESHz0wpH7y45Z6CTE0A1d9f8%2BO1sRzCGT%2BDQsYBIeV3Cahg08Js1u2IxpnXTPEchAjjEdBEBtYagWkOMr4SvwM7EajCxQZIXTz%2FGOv4mnTGbpZJf%2FKibtox5I%2BLXis6YP5VOYLgGVoyXFLcJI3ifvqy%2BvmwWn6TNeNTZxiGwfJv%2Fv%2BqsouoqN2LA1G46qqQHkBtoU9uPgjat64dJ6YWp%2BenOtknx2jPLWGt8E0FdGzvBNRB3LsDH7FLTyd6PfGcnM955q2ufQw1%2FjswWZVo%2Byijz1ggRcMrMXbqhT1XGJ%2FRZsA1jY98A%2BoZRrzlVb3ILkGkhYzhRJnCYp%2BFCeWLEMOj78sQGOqUB7rGjPyN63wKxPTR1hTREofVJbo0faMO0pxKPy5AoHJgaaqQfrzQGRzGFgRBMRIXE6M%2F4EC4VucB%2B7ZHVQLwzUJU7JmOLiHe7Opez%2FI4XORN505qwPFBmdO1U1YozdfbxfaNzkoWzIDvSafyYm9p%2BsIbS6TaChe9jEJV63FCc%2FUoiA8dp35RrD6%2FJ0PZRMzwqFq%2BMyhL8PEk%2BdSWhmQDr1dm8%2FvLs&X-Amz-Signature=53e305ad803d1f8d1fc5ac81d8ff432a162d53c28258bd74779394d0cf226e3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
