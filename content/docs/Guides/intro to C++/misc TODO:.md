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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6X4RZ4%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQD40g7uB45SbgObWe7G8tXD2%2F1X99T5XTiDM3UmgOcyiAIhANRDSQM4tXNvnAkqVFUjzlus10YnFBLPW2ZUVFXUo1rHKv8DCF0QABoMNjM3NDIzMTgzODA1Igx4bu8RVTmMiP4TVmYq3AMrkZnIGR4Q95CEdDbuiyiS0Pb8YdJVxQFl3E%2F5eiZk4S7zgV3IceqiJYEYQQNR4DnrucynlKai1HP6RdPXJAIjF1wb%2BJpJ5SMIagoiikRUKiSmfL6Nx%2FVFaqK2parUuy%2F5KbDnF2XKJLnUf2PEK8WhSK8rC5ouCmPSfBRi7D50%2BGt83ZlOW9072yRBjnRu%2F8dDvcw3XYzlj80qJ%2BVk4jUw3cYTDMDgsXKQ7a%2FHdjAr38yILjRYsJX%2FTeuBpox%2BI9Xz2Ws4vK2aQijkm9QMIjVPD%2Ft1zhU55DiVjHWrzr3Nyeu%2FC9DGX2TiXNNHnLsgX5AiFcBM4kJ7YGy91BLnVL5nV3ZByiO9buXNJ%2BdCuqtzN9dDMTGPeWH3ym0FIq1QBOs26TIdhBH4XcOuOE2v60yyzjg0VjJ3OjrH9DKUcQGKTkSG99szSp%2BXJpwVNvlGIjH3mK1bdcUdnLkvZ%2BYFxeHKFLsgq0rvjcu9DzZYLWd%2Bzr2pdvL5fP7fKNtGkCN21tDzE8OQ09rbT%2B2sLD9qAiFZSNCuqrHfKv6yNR4PK%2Bj%2FEop%2BVtDtfWmCMu%2BlwrTKf0WIsoEn7CwXXeJJscpBAKFS96sQAYnMuTalWbc96bWuF1zh7Z466H%2FfPFGWbzCZvqnDBjqkAQCZREH%2Bzj4PChWpIwj0SD%2BLBZPKGTu24kdlrGpQNOpMYsyzgEi2fJDubEfNnS5vjr7dn5pMuxezAap%2FUZlFXymM6yFig0vbYoSDyzHJfzDFkZRbNAdbATZ2iVHQrDB59VtZeJx7hOEd71lYPE68uTZgKVZ5DAEUTVNOHIAX9brwg46I3txZe2nNjFtiIWCmo3d%2BmFHAymY%2FCK0qlXKkzHSgnAuH&X-Amz-Signature=0d15f88ac966064b991d23614c82d73b3758b3a1df38b17ce84ef430a5467043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6X4RZ4%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQD40g7uB45SbgObWe7G8tXD2%2F1X99T5XTiDM3UmgOcyiAIhANRDSQM4tXNvnAkqVFUjzlus10YnFBLPW2ZUVFXUo1rHKv8DCF0QABoMNjM3NDIzMTgzODA1Igx4bu8RVTmMiP4TVmYq3AMrkZnIGR4Q95CEdDbuiyiS0Pb8YdJVxQFl3E%2F5eiZk4S7zgV3IceqiJYEYQQNR4DnrucynlKai1HP6RdPXJAIjF1wb%2BJpJ5SMIagoiikRUKiSmfL6Nx%2FVFaqK2parUuy%2F5KbDnF2XKJLnUf2PEK8WhSK8rC5ouCmPSfBRi7D50%2BGt83ZlOW9072yRBjnRu%2F8dDvcw3XYzlj80qJ%2BVk4jUw3cYTDMDgsXKQ7a%2FHdjAr38yILjRYsJX%2FTeuBpox%2BI9Xz2Ws4vK2aQijkm9QMIjVPD%2Ft1zhU55DiVjHWrzr3Nyeu%2FC9DGX2TiXNNHnLsgX5AiFcBM4kJ7YGy91BLnVL5nV3ZByiO9buXNJ%2BdCuqtzN9dDMTGPeWH3ym0FIq1QBOs26TIdhBH4XcOuOE2v60yyzjg0VjJ3OjrH9DKUcQGKTkSG99szSp%2BXJpwVNvlGIjH3mK1bdcUdnLkvZ%2BYFxeHKFLsgq0rvjcu9DzZYLWd%2Bzr2pdvL5fP7fKNtGkCN21tDzE8OQ09rbT%2B2sLD9qAiFZSNCuqrHfKv6yNR4PK%2Bj%2FEop%2BVtDtfWmCMu%2BlwrTKf0WIsoEn7CwXXeJJscpBAKFS96sQAYnMuTalWbc96bWuF1zh7Z466H%2FfPFGWbzCZvqnDBjqkAQCZREH%2Bzj4PChWpIwj0SD%2BLBZPKGTu24kdlrGpQNOpMYsyzgEi2fJDubEfNnS5vjr7dn5pMuxezAap%2FUZlFXymM6yFig0vbYoSDyzHJfzDFkZRbNAdbATZ2iVHQrDB59VtZeJx7hOEd71lYPE68uTZgKVZ5DAEUTVNOHIAX9brwg46I3txZe2nNjFtiIWCmo3d%2BmFHAymY%2FCK0qlXKkzHSgnAuH&X-Amz-Signature=26d013525d3e884efa2ea508186bf4cb61355734d4e0fd2297f41fab9f3543eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
