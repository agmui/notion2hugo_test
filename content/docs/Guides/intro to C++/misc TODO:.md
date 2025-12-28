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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKHIYGLL%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa3MV6tevDeoXhB24bC%2B88gLElRgfhnROO%2FnGfrdY1jAIgCpForHlPFqtR3CCl2q%2BU18sDSnDwASzx1pBkVQhSeEcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDH3PWbU0lvQa49IfOircA6RFvmewDoWRU%2F%2FVY6djRl3JJ4czCQHgS%2FPXMuNdH1WOc2igAXzOnKyDw58ic9swkvPOdQJuvHrMjBF6XdXxg%2BHNY7vE01%2F7kbJD7Ak%2FdmPGW1oyeHUqmwcJgHz83DU3NkAm7a8zpXQplinqNynjkAskX4Xx%2Fsm%2FvBS3ekBHgAVHNb398qv5gzRSa88QN%2B1R5RyHRoQ442cotN08kM7yOaMPubi60vbFUYhJ6qjyF0PerIh%2BWcL8%2BHgNWtr4W53CFa5hUw6R7QmEaT0JUHND6vh9w5%2BKDtSWy9TEDuOiMeKSOZ5MtR%2BcAYD9BY17VjaAz%2FS8H4VYUV%2Fy3d8tFdlBSC%2FX5u%2Fndc2aMv9B4ORUZV4hmc9QUX8EJIGYPrDD7MdGbDU4t1%2BN6LLqk1ogtFtumFg96SeyORhyAcCfsuwZlFcgIiTTtzO5FUjDeJw5UBsD9evrD6xS19eJGVog7XN6gqo6myIaI%2BHNfRzDgzZoxDrYOWxBC9cqJDOzrLRy3bIcu57mdYmpdXQszBbYabF%2FSX9uV5Ip8Nt0hV1wNuEb3r6sBjoM5cuSOBk6XB0NQMwkkIz0fPjpMdhSEzmbTI2scXDyvMjluQdKSZYKIQCKxex8kkKAhsTcCGl3C5NBMIP0wcoGOqUBR5SIq%2FtuL9%2B5qYtFgbsqVePkKw2HX7hsY676I7IvJfRgjlh8GT%2BAGTxZsKWlk1wBkrJS2g4vhCa8WgGj9ZONtm%2F1cuQulwxaMe6kyOIOTHTDyn%2F5WPOqtoe3VvUwVELOzKN9Ws8COhBZave0N0qZeSfHfsx8mYfsANGpcLgowQ6LVwIN88d15oZPgfjqUCuatxYPlDz82UE2wl3f3vRojXQQ0Yti&X-Amz-Signature=78750f5c50ee0fec5af055d5c54d13520640bfd0310359121861d3e92629b4be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKHIYGLL%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa3MV6tevDeoXhB24bC%2B88gLElRgfhnROO%2FnGfrdY1jAIgCpForHlPFqtR3CCl2q%2BU18sDSnDwASzx1pBkVQhSeEcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDH3PWbU0lvQa49IfOircA6RFvmewDoWRU%2F%2FVY6djRl3JJ4czCQHgS%2FPXMuNdH1WOc2igAXzOnKyDw58ic9swkvPOdQJuvHrMjBF6XdXxg%2BHNY7vE01%2F7kbJD7Ak%2FdmPGW1oyeHUqmwcJgHz83DU3NkAm7a8zpXQplinqNynjkAskX4Xx%2Fsm%2FvBS3ekBHgAVHNb398qv5gzRSa88QN%2B1R5RyHRoQ442cotN08kM7yOaMPubi60vbFUYhJ6qjyF0PerIh%2BWcL8%2BHgNWtr4W53CFa5hUw6R7QmEaT0JUHND6vh9w5%2BKDtSWy9TEDuOiMeKSOZ5MtR%2BcAYD9BY17VjaAz%2FS8H4VYUV%2Fy3d8tFdlBSC%2FX5u%2Fndc2aMv9B4ORUZV4hmc9QUX8EJIGYPrDD7MdGbDU4t1%2BN6LLqk1ogtFtumFg96SeyORhyAcCfsuwZlFcgIiTTtzO5FUjDeJw5UBsD9evrD6xS19eJGVog7XN6gqo6myIaI%2BHNfRzDgzZoxDrYOWxBC9cqJDOzrLRy3bIcu57mdYmpdXQszBbYabF%2FSX9uV5Ip8Nt0hV1wNuEb3r6sBjoM5cuSOBk6XB0NQMwkkIz0fPjpMdhSEzmbTI2scXDyvMjluQdKSZYKIQCKxex8kkKAhsTcCGl3C5NBMIP0wcoGOqUBR5SIq%2FtuL9%2B5qYtFgbsqVePkKw2HX7hsY676I7IvJfRgjlh8GT%2BAGTxZsKWlk1wBkrJS2g4vhCa8WgGj9ZONtm%2F1cuQulwxaMe6kyOIOTHTDyn%2F5WPOqtoe3VvUwVELOzKN9Ws8COhBZave0N0qZeSfHfsx8mYfsANGpcLgowQ6LVwIN88d15oZPgfjqUCuatxYPlDz82UE2wl3f3vRojXQQ0Yti&X-Amz-Signature=d6e583469fac7ed6eec71d55dc9a8894dcc2c911fbcbb2616a9e803e063b4d87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
