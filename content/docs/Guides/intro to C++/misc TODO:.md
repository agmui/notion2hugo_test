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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE4L7EPC%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl%2FP3JOWClADNzrFtMX%2F6wtfk5%2Fd7dnUb1Iz396DTdoQIgQVwR0w1psU9khevB6SODjPe7wzu6%2BzQQBn5GDv6DjhUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAhupFTumrG8ziBk2yrcA1T%2FIaIutDG37jumyjfv7Jl%2FxT0KdBTLB70Xvv%2BA5GEAzeLgOiSA1%2B3wlKvsO3Bxa7E9a4TXcxkEiPDOCd%2BmYOaxwTODoeOe2AVF9vdGSrwVpiPrZ8H1GLwYhP8jXq%2FfqlkcD2f%2FBaqIU%2Bgwi%2BFSolG6M97mEdnvtROaf736ncC%2BO5L34grRJkrV44T7kxG%2F%2FX4caNmcibq3LxlKS49UpGsAXrSsA4hnQCfniHuLiG8FVjIV6R7gRrhtIktbkODVa3ersayZcyu3a17lqgXa7YJRQG4u5P1ygc6RF2nt2AiRIcshkZeFNrCEJn2ZlJaWG9duhq%2BuIs%2FqV7UgGywfi8e4qsxr3Al6sW4pBocWP9TMqljcFSJKVazK5hyrZ%2B7Xbd%2FD3YGDWV4TZpfKPPEoCnWMLUauSEfLS4i0zFog2wz2q%2BJf%2Fsd9YVi09NYqLQnm3bUdpHuC3wMxZCUnVPFUR%2FBIRd3id3mIuJRQFMyvZBu%2Fo%2FRdkwze1m5wfZLtxqIID3Ae%2F1YNO8BLvkN%2FIsuI3UeleObbrv%2Fjwc2fLmJMO4uIXfZBWK5fj9s0tYNdGb4N6l1a48dX4i8BRPGlyJ08ud8XsdCWSJpdiuGMkl6wqIWMRFx4iCkJ0jzst1T3MMrGu84GOqUBeKEuVX4vy1GdI41VJ3XM1iMWkLxEsT4dDVXaE69jCnM85wPylZtYNEy6pG1ofPn2gobhH4O1RUL7cTyYMtvJyGFm4oqFxgLcb6myQuCjPFM6gZgTOEIRGcKw1viTi2wpW3%2FZ8P2l1G2Z6stJ3bOiHJrTkrXxN3Ff%2BKHCKhHAfgdwkte7M8hNKO0t9iawknWEBQg6sYSGNNIwbykF8xNVme6Qhros&X-Amz-Signature=d12308bc2f73478cd96f2bd3654e070dd11351e258528b1f0125fa21a28c8ea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE4L7EPC%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl%2FP3JOWClADNzrFtMX%2F6wtfk5%2Fd7dnUb1Iz396DTdoQIgQVwR0w1psU9khevB6SODjPe7wzu6%2BzQQBn5GDv6DjhUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAhupFTumrG8ziBk2yrcA1T%2FIaIutDG37jumyjfv7Jl%2FxT0KdBTLB70Xvv%2BA5GEAzeLgOiSA1%2B3wlKvsO3Bxa7E9a4TXcxkEiPDOCd%2BmYOaxwTODoeOe2AVF9vdGSrwVpiPrZ8H1GLwYhP8jXq%2FfqlkcD2f%2FBaqIU%2Bgwi%2BFSolG6M97mEdnvtROaf736ncC%2BO5L34grRJkrV44T7kxG%2F%2FX4caNmcibq3LxlKS49UpGsAXrSsA4hnQCfniHuLiG8FVjIV6R7gRrhtIktbkODVa3ersayZcyu3a17lqgXa7YJRQG4u5P1ygc6RF2nt2AiRIcshkZeFNrCEJn2ZlJaWG9duhq%2BuIs%2FqV7UgGywfi8e4qsxr3Al6sW4pBocWP9TMqljcFSJKVazK5hyrZ%2B7Xbd%2FD3YGDWV4TZpfKPPEoCnWMLUauSEfLS4i0zFog2wz2q%2BJf%2Fsd9YVi09NYqLQnm3bUdpHuC3wMxZCUnVPFUR%2FBIRd3id3mIuJRQFMyvZBu%2Fo%2FRdkwze1m5wfZLtxqIID3Ae%2F1YNO8BLvkN%2FIsuI3UeleObbrv%2Fjwc2fLmJMO4uIXfZBWK5fj9s0tYNdGb4N6l1a48dX4i8BRPGlyJ08ud8XsdCWSJpdiuGMkl6wqIWMRFx4iCkJ0jzst1T3MMrGu84GOqUBeKEuVX4vy1GdI41VJ3XM1iMWkLxEsT4dDVXaE69jCnM85wPylZtYNEy6pG1ofPn2gobhH4O1RUL7cTyYMtvJyGFm4oqFxgLcb6myQuCjPFM6gZgTOEIRGcKw1viTi2wpW3%2FZ8P2l1G2Z6stJ3bOiHJrTkrXxN3Ff%2BKHCKhHAfgdwkte7M8hNKO0t9iawknWEBQg6sYSGNNIwbykF8xNVme6Qhros&X-Amz-Signature=44d4dcb1c7f7aef8d1c67e4b8e00568f4619d40ce4cfce596af286a924d48649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
