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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMFSJU6S%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyW%2BzLrImrwrFOKnxVpM13eZp3xcehD6GEDJ%2F3uXCbowIgEpUF3k5r5zXv97X6TuIBUF9ZxyNuCk5z%2B110c8ke%2FxoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhmxUmPHye62xMEiCrcAz%2F58ygLanVkpshNVhiAPhv42ybDbz%2BJRJGmGjeiDTv2VlaFA%2Bks3Xut%2BTsApzLiuw2fuYzYXXc4pqVJfeebBmUor2YlS8YvnhBRi0J%2BbsWgyGFRXOjsF5Abe4yuzJS2QOsj1Ooo4JICNYbIYCc8g2K9f%2BteH1dfn%2B1IimXFAlyAv2%2FHAcTy6%2BnJPR60X92yIo3IsnPJ4HEjo5mob0Q3tY0PdCJpvCtaN3F2MkysQ4CONmH6ogqIg6yNsguQLIci5IMh3T37Obv0tVUOco%2FAfG%2FTiB9NQb50AN%2FKbbjwlKViiczyUNFWMD8JUAtbH6A2xoh3AwlNIut0iu1FC1QLoxvFbAZNjnPVjtcG3QfX0ExsIy3HjpPsmQxpFMPZOD4AfcLl1Y7nQkfgaj%2BPXCHRad6RYXWwZWBkrmfW35IlEETYXS31jAQyoGs51sx8Psi8uUay9N45SsqMwu%2F58Va%2BwiT1WKhmzTWHDxszwKv4oPRWNX7cJKeN1s0XPLDVVwHXarQURMY3uaukcmCGCV8TUiHcpc6nCsYaN1SdtJ2TRl%2BDdnyLC4yNOMf%2FH3MH5R7xB86WCTj9Iylh2hky2lxsfWMW1cv7cA55Ez7Gy704pHUnl355m0baFFzvAww0ML2BrMEGOqUBk8C3cRh%2BTeF5DoNj8rArbCEGCgO3zmAYSj8K0zwU89mYR%2FMQg3ZvYsDjSFtmWILJ2yOK6tq8zGHJmGoIWeV4qr6A4ZGdDpJbRZcrhdhrna2OZdDopTMhPj9w%2FUqlwn0wPfC8JCKsFoAeNqWyWICol79fMd5%2BOPZgCTKtd%2FMLz3j53DJYcMcCEB9uWnef%2BIQib0vqoE%2BlL7zG4nni57g%2FKkRhZqa5&X-Amz-Signature=af578568afb2baa35988b99765169aa5e73d153cf8e11f804f0ba7d9f3b28138&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMFSJU6S%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyW%2BzLrImrwrFOKnxVpM13eZp3xcehD6GEDJ%2F3uXCbowIgEpUF3k5r5zXv97X6TuIBUF9ZxyNuCk5z%2B110c8ke%2FxoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhmxUmPHye62xMEiCrcAz%2F58ygLanVkpshNVhiAPhv42ybDbz%2BJRJGmGjeiDTv2VlaFA%2Bks3Xut%2BTsApzLiuw2fuYzYXXc4pqVJfeebBmUor2YlS8YvnhBRi0J%2BbsWgyGFRXOjsF5Abe4yuzJS2QOsj1Ooo4JICNYbIYCc8g2K9f%2BteH1dfn%2B1IimXFAlyAv2%2FHAcTy6%2BnJPR60X92yIo3IsnPJ4HEjo5mob0Q3tY0PdCJpvCtaN3F2MkysQ4CONmH6ogqIg6yNsguQLIci5IMh3T37Obv0tVUOco%2FAfG%2FTiB9NQb50AN%2FKbbjwlKViiczyUNFWMD8JUAtbH6A2xoh3AwlNIut0iu1FC1QLoxvFbAZNjnPVjtcG3QfX0ExsIy3HjpPsmQxpFMPZOD4AfcLl1Y7nQkfgaj%2BPXCHRad6RYXWwZWBkrmfW35IlEETYXS31jAQyoGs51sx8Psi8uUay9N45SsqMwu%2F58Va%2BwiT1WKhmzTWHDxszwKv4oPRWNX7cJKeN1s0XPLDVVwHXarQURMY3uaukcmCGCV8TUiHcpc6nCsYaN1SdtJ2TRl%2BDdnyLC4yNOMf%2FH3MH5R7xB86WCTj9Iylh2hky2lxsfWMW1cv7cA55Ez7Gy704pHUnl355m0baFFzvAww0ML2BrMEGOqUBk8C3cRh%2BTeF5DoNj8rArbCEGCgO3zmAYSj8K0zwU89mYR%2FMQg3ZvYsDjSFtmWILJ2yOK6tq8zGHJmGoIWeV4qr6A4ZGdDpJbRZcrhdhrna2OZdDopTMhPj9w%2FUqlwn0wPfC8JCKsFoAeNqWyWICol79fMd5%2BOPZgCTKtd%2FMLz3j53DJYcMcCEB9uWnef%2BIQib0vqoE%2BlL7zG4nni57g%2FKkRhZqa5&X-Amz-Signature=183a44a43d6e90050d24e402df631a55227eacf2589dfce2c69cd7232f7ab544&X-Amz-SignedHeaders=host&x-id=GetObject)

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
