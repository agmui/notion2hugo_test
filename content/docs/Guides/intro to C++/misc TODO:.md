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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P54NQ64%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCcB%2FyCcVq%2FfD4Rctz5Q%2FJo3ML3PbMfWr7puMZWemLcggIgVHXGSP5Vo3JvLvtXqMi5LcBRe4Z01QLyHMWpSC4e4pkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIjE432DdYgVaPnxkircA8qfJsDFjelCdMxjtg4qa6TigElg7s8TtfHcuNUOg9rzcH02%2BkHFeasuMEQJuBqPz0EEKtvdFw4%2F1WR2vlz6ErYwxuvE3wOdc23og3fPsIkZOeoOuJqNFr5B8js7iEsA2mQaGFJp0UJu%2BAGy45EGo5dD9HeXqR1LmCFWeb1bF3oiNmgLoSLbiX4wS2zj8NxvriTFiqclDD%2BKFBa4MEKecsGX4gylBsG3R8LEJjc48hVDq24lykRBpAVUVvb69qWtf%2FTDPpRpCwP9zekz6%2FWIu3uGLJ9%2FTFIQvaCCX%2Fk0kFJJ3bNSBf6E5ZPTopkQXtdK7I7utz8q65GKjDeDBoXGu%2BGDpQHoIhV%2FT%2FAMpB%2Fn8JxJq6Czc5Nt1RKUE9p0BcFBGCbZFkJYk3n4ekIAV6ABtTuhLCYMbNCWJCpXN3x3FuTZPhG%2FV6p3QtBDL4ncD2laFZkc6pAODupIpkoWWHr%2FVzlcdymIE1R2CMqn1mIKgA6rhYwjRk2jeveaVBWctS4%2BKvMVi38mDcp73nfb3elI7QLwpVN4690BZRxu7F6wHYZq67uVZU48%2FSuLfGcVg9PsYoRYLOZos2gZHOqV9PBhSVDb0EeEYZ6lchDDAUlYXCCmHcwp63d2ff7DuzA1MLfjp8MGOqUBFih9zWjDfwAQ%2F9WYYC4IlVoV57D%2FvhpdOTIXctw3P4ZcvFs%2Fc0PLGRTaSy61CUFkkKg5yCAo8kSvJ2DmhfL7xzrJvnBUCWRcl0ajscR5RawXjYUpcpCOY47IBANZ45YAnAv6a6%2FKLQiw%2BFEa9K9iKF2o5DUplwFDKQiRWLwhn16D%2FkjeNpKZXMd3eSOGhvjC5y13mXOECNcyDmEabj6IS3BHR%2BRp&X-Amz-Signature=7a37cd56d5e008628f7629337918e245cb50884a8321a1eb4288d8e23d5c70fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P54NQ64%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCcB%2FyCcVq%2FfD4Rctz5Q%2FJo3ML3PbMfWr7puMZWemLcggIgVHXGSP5Vo3JvLvtXqMi5LcBRe4Z01QLyHMWpSC4e4pkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIjE432DdYgVaPnxkircA8qfJsDFjelCdMxjtg4qa6TigElg7s8TtfHcuNUOg9rzcH02%2BkHFeasuMEQJuBqPz0EEKtvdFw4%2F1WR2vlz6ErYwxuvE3wOdc23og3fPsIkZOeoOuJqNFr5B8js7iEsA2mQaGFJp0UJu%2BAGy45EGo5dD9HeXqR1LmCFWeb1bF3oiNmgLoSLbiX4wS2zj8NxvriTFiqclDD%2BKFBa4MEKecsGX4gylBsG3R8LEJjc48hVDq24lykRBpAVUVvb69qWtf%2FTDPpRpCwP9zekz6%2FWIu3uGLJ9%2FTFIQvaCCX%2Fk0kFJJ3bNSBf6E5ZPTopkQXtdK7I7utz8q65GKjDeDBoXGu%2BGDpQHoIhV%2FT%2FAMpB%2Fn8JxJq6Czc5Nt1RKUE9p0BcFBGCbZFkJYk3n4ekIAV6ABtTuhLCYMbNCWJCpXN3x3FuTZPhG%2FV6p3QtBDL4ncD2laFZkc6pAODupIpkoWWHr%2FVzlcdymIE1R2CMqn1mIKgA6rhYwjRk2jeveaVBWctS4%2BKvMVi38mDcp73nfb3elI7QLwpVN4690BZRxu7F6wHYZq67uVZU48%2FSuLfGcVg9PsYoRYLOZos2gZHOqV9PBhSVDb0EeEYZ6lchDDAUlYXCCmHcwp63d2ff7DuzA1MLfjp8MGOqUBFih9zWjDfwAQ%2F9WYYC4IlVoV57D%2FvhpdOTIXctw3P4ZcvFs%2Fc0PLGRTaSy61CUFkkKg5yCAo8kSvJ2DmhfL7xzrJvnBUCWRcl0ajscR5RawXjYUpcpCOY47IBANZ45YAnAv6a6%2FKLQiw%2BFEa9K9iKF2o5DUplwFDKQiRWLwhn16D%2FkjeNpKZXMd3eSOGhvjC5y13mXOECNcyDmEabj6IS3BHR%2BRp&X-Amz-Signature=2853100e87df3b3504fc31cf48e64e5f1da4be4cfe95fda77525e808fa4671ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
