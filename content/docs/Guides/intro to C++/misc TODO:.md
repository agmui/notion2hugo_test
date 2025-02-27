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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AHTGWQI%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIAYXogqdJzub9DOQsSRyJrNUVr9%2BhU9ff5mJ43A9r5wFAiEA2ivS31ceMV20Rckpssod1Z45%2FS9bmVR0So3uJLSk6Nwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDPCxfqPtXuDdu%2FdX%2FSrcAwz3S%2Bsvb2MmmdfCyxPuWauFJQ2ZKOwaBKgn8FzXCx8te5jAYFBK6Zfrd7VM6ILVABNu7wubKeZOV2%2Fa6uSEUPA9%2BackTdMvjX1rIhAPwb0bYh9T6ZOUN7geFJH94nDCn%2BUQeGC5ikwOCytIrlxObw7kEAn32OH2Pfbscf0EiguKn%2B%2BxO8Stx7jx7Cpmc%2BbLCeWzG0cTJPwyJyssXk5OjY0UsVsKCAVk063g0P2OqepkcMYUEpVWWj1e43jEmwdwRD0I6kgX7LIuHZy5sZ7T5A97X0YLRsGs%2FtV45hgNfkjwhVasQ4e96gi9K04uk3h1ATPqMibC3Gl7EdVW7GKZpWSL8spdzHhEecV9Q82gVFr8EnkaXaDGoQ%2FXvfNUxoBp7ghowyGIH3%2Fz0Bw4KrmX5evTpGc0ki76by9%2F0T0dHdgu2Je9cceDDqbPJZMttY5qfmwpxZwow%2F99Q8ljgNd4uSJM5%2BwCVUHAuXA8RycsJL9zTHOtyUPLKIyZLsJvEDu946vkmD7iYK2xt0hrs3zJ0EhVIYkymkY9fQOnofqxbjpBeWMCVYahH0gVa0KBUK9srK4%2BFDfHAy9w4a%2FqnZ8TWnq7Hl9TTLySJc34cyixAbAZ670nnldabGlT9PubMLPSgr4GOqUBq5bZOXXDrKvCv6c6t9qDew66GvD%2BTBcwUKkQfuU5WC69rycxwuiFxmmuqEjw8558pEd9NAqA7Eqho9eZm98cleS%2BzxsMrtVDBRzriK4JFwPP%2Fkmwwplg%2BLCISaRv7oMF8o1QGWUKOyTWEGbFMdlq%2FYJWmJqPa%2BhWplWRrDwE26hAONsJpanh6CdINye3X%2BO424dbnMHzJo3do15lI%2Bhll3D5sENR&X-Amz-Signature=d2c66f3cdecdf1a5c5748f7a94bc9c7a7d3b66741c16b8a36d75aa4323d5aca2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AHTGWQI%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIAYXogqdJzub9DOQsSRyJrNUVr9%2BhU9ff5mJ43A9r5wFAiEA2ivS31ceMV20Rckpssod1Z45%2FS9bmVR0So3uJLSk6Nwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDPCxfqPtXuDdu%2FdX%2FSrcAwz3S%2Bsvb2MmmdfCyxPuWauFJQ2ZKOwaBKgn8FzXCx8te5jAYFBK6Zfrd7VM6ILVABNu7wubKeZOV2%2Fa6uSEUPA9%2BackTdMvjX1rIhAPwb0bYh9T6ZOUN7geFJH94nDCn%2BUQeGC5ikwOCytIrlxObw7kEAn32OH2Pfbscf0EiguKn%2B%2BxO8Stx7jx7Cpmc%2BbLCeWzG0cTJPwyJyssXk5OjY0UsVsKCAVk063g0P2OqepkcMYUEpVWWj1e43jEmwdwRD0I6kgX7LIuHZy5sZ7T5A97X0YLRsGs%2FtV45hgNfkjwhVasQ4e96gi9K04uk3h1ATPqMibC3Gl7EdVW7GKZpWSL8spdzHhEecV9Q82gVFr8EnkaXaDGoQ%2FXvfNUxoBp7ghowyGIH3%2Fz0Bw4KrmX5evTpGc0ki76by9%2F0T0dHdgu2Je9cceDDqbPJZMttY5qfmwpxZwow%2F99Q8ljgNd4uSJM5%2BwCVUHAuXA8RycsJL9zTHOtyUPLKIyZLsJvEDu946vkmD7iYK2xt0hrs3zJ0EhVIYkymkY9fQOnofqxbjpBeWMCVYahH0gVa0KBUK9srK4%2BFDfHAy9w4a%2FqnZ8TWnq7Hl9TTLySJc34cyixAbAZ670nnldabGlT9PubMLPSgr4GOqUBq5bZOXXDrKvCv6c6t9qDew66GvD%2BTBcwUKkQfuU5WC69rycxwuiFxmmuqEjw8558pEd9NAqA7Eqho9eZm98cleS%2BzxsMrtVDBRzriK4JFwPP%2Fkmwwplg%2BLCISaRv7oMF8o1QGWUKOyTWEGbFMdlq%2FYJWmJqPa%2BhWplWRrDwE26hAONsJpanh6CdINye3X%2BO424dbnMHzJo3do15lI%2Bhll3D5sENR&X-Amz-Signature=5340440cc4f6c6b97d045c92b5396b491b0f89f1e48b8aca741c0a0742198078&X-Amz-SignedHeaders=host&x-id=GetObject)

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
