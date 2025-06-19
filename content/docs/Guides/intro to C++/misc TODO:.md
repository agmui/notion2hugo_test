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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LBBY2TS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFycQBfflJcuG%2BhnTlZpHNgFPV0OH70Wh4v4Y3zjZk5kAiEAnbTBs7uBcAVAPPmdKmdYslGVPvTsPylZEsRP8L6JHJgqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5TVqo%2BZDoN7%2BQEOyrcAwfAzliywIIx3oHn1iuZlcPcMz263pUsDUUXseG15PqpvlGbjMn2to5unFyrgleTVQ81cTCrR%2FTALL3XsS9i12%2B%2FkQfWGPdnX65mOxmrPYldMJH%2FqYlqf%2FxHqjFcmRkyKn6Y1OGCKglw4aWRIWydvzXlDYDAz4MwhhEj71psXPsGms8fuxvbLreVaPNFzqORLRSLOEfb%2FZczpdpXG9OAQ52BzvEhNHupQ6nc8wjJEWUmoGR%2BPOYXTh9%2FxQFBKe1Rzm7XBiYOZVJeZi7GrxdTYPSej85hBStqXST1qwhoC9jNyVPk6Ab2IoPV%2B4wFPaDVG6Qcl%2FPx9N07f5lCXPLdkReSjbsVcc02EmFk13sO%2BCwti0shr9KS22zxlc38zob%2B0drXjUDoqunQ2fwQ985pNNxww0EXROV6uf9qajyqB1SF7q97nX6%2FvdCozyrUmt%2B6OjbdQglV4cS%2By0yCYvrJh5v2frslZfrIysQWdq%2FzUn5MLqqJ%2Fdm5cg4iduqRX%2FINF0hlz0SxbXR4eZxsbLFapfzMVpq%2FQJO53Bmg4QdaKxSFqyjXv08lrtI2I%2FlvAR0wxc8G05ncQaHg%2BVu8kc8FRqM072UDOAKyAZBtJOvu2vkDjxRMnMnMzFyln5A%2BMK%2Fe0MIGOqUB3ue1wLHj%2Fl7pdl3QE73FLhwt5t7M4WDDCQDBnmFqdLz9WgNspT%2BZYyOxzxTSQzrrnd7qnXSwx1JBHjrmOprdYtMuPKBrR4gvVVVj3gOwTHeeP%2FY6Q%2FGqESifxwpyAY7wY0UwMjUL3%2BuXyzbrM5Ni7dNkaihmT3kdEIwx44SBda2Rd%2F3YRebE965RZKm37topQc7L1whYGW8b5i2IUFv5ZBTbmRXK&X-Amz-Signature=9727368e81bff78354d5f09ba4f8bb504faeffae1009985d891d51fcec9626f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LBBY2TS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFycQBfflJcuG%2BhnTlZpHNgFPV0OH70Wh4v4Y3zjZk5kAiEAnbTBs7uBcAVAPPmdKmdYslGVPvTsPylZEsRP8L6JHJgqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5TVqo%2BZDoN7%2BQEOyrcAwfAzliywIIx3oHn1iuZlcPcMz263pUsDUUXseG15PqpvlGbjMn2to5unFyrgleTVQ81cTCrR%2FTALL3XsS9i12%2B%2FkQfWGPdnX65mOxmrPYldMJH%2FqYlqf%2FxHqjFcmRkyKn6Y1OGCKglw4aWRIWydvzXlDYDAz4MwhhEj71psXPsGms8fuxvbLreVaPNFzqORLRSLOEfb%2FZczpdpXG9OAQ52BzvEhNHupQ6nc8wjJEWUmoGR%2BPOYXTh9%2FxQFBKe1Rzm7XBiYOZVJeZi7GrxdTYPSej85hBStqXST1qwhoC9jNyVPk6Ab2IoPV%2B4wFPaDVG6Qcl%2FPx9N07f5lCXPLdkReSjbsVcc02EmFk13sO%2BCwti0shr9KS22zxlc38zob%2B0drXjUDoqunQ2fwQ985pNNxww0EXROV6uf9qajyqB1SF7q97nX6%2FvdCozyrUmt%2B6OjbdQglV4cS%2By0yCYvrJh5v2frslZfrIysQWdq%2FzUn5MLqqJ%2Fdm5cg4iduqRX%2FINF0hlz0SxbXR4eZxsbLFapfzMVpq%2FQJO53Bmg4QdaKxSFqyjXv08lrtI2I%2FlvAR0wxc8G05ncQaHg%2BVu8kc8FRqM072UDOAKyAZBtJOvu2vkDjxRMnMnMzFyln5A%2BMK%2Fe0MIGOqUB3ue1wLHj%2Fl7pdl3QE73FLhwt5t7M4WDDCQDBnmFqdLz9WgNspT%2BZYyOxzxTSQzrrnd7qnXSwx1JBHjrmOprdYtMuPKBrR4gvVVVj3gOwTHeeP%2FY6Q%2FGqESifxwpyAY7wY0UwMjUL3%2BuXyzbrM5Ni7dNkaihmT3kdEIwx44SBda2Rd%2F3YRebE965RZKm37topQc7L1whYGW8b5i2IUFv5ZBTbmRXK&X-Amz-Signature=8db28aaff7e7c18995e8bb228be65712d2c8c5e9712c15b8d317429405de2d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
