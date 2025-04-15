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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWWXIHWS%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BMX1eF9o3vCl6RP72ZN3o6LdDSwSL5frpS2y6aLno7AiEA3PqY1TBTWrpEBmbiygRouBdLSqdHZX5K0mA0D4K7RxQq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDCk7M7wgo36o8X2Q6yrcA1wlGkLOQEPt1Hc9DfdOvzEwUXBXQaJHfpCqZ2JxILi9L1YZtftF9xhF0p69VtthZMOf2fx3BU59tKQgMmmirBFCmJalR4kgY%2By5th%2FmDuMigj19w5jBEC9EYnxP12rFxvWXZRyjAiyvyYHDCc6N%2BTGEwRYEMcALpYMsdghCwrK9ZOxl3sMuWTw9G0vPW7yk86VhqejleT8lx7zhlps2kdYqblcqqzhKt%2FsabMi7huj7WDGBkTQZlfK0sfcAoCSVg9wq35VXFQAQcJK42sS3nwrN%2FtLAertiHmOIb1u%2FuZhHse4%2B%2BrQCm%2BBPgC9v7Ko5SCoa8P1P6P3zYwIMO%2BCdWhYYUqsxH9jpTGGN%2FdMD4n0g3o9%2FT6dKkM%2BbGvtwO7%2BLAhz0ohxU0e7m6cg5rI1RQsmHEMT0oxQvHcb3jKusMlck9lCM8D3OKGsdRCEjq0uqRpUd7hBUGLG%2BQXCYKKCgCFZSSMZzlEOJkR44xyIFcd0%2FjOcU4vJO%2FWPKz7%2BQv334zD460oswCbg7mvpCn4H796b6vocJqkPT518Rw0m%2BpoaR%2BdXP3lQlTzqpXcPeYqHSBxhgOGTTDonqa1hy4dcezYpGxVuUA0N16FtNf8l6DNwbFnaMlUMBZ283LfpXMPiE%2Br8GOqUBn8HAbmo%2B4KafXDzXLe83pH0ZyljfItvbHlHnLtrqj5AHU2ZikCCg1p%2B6Hdc7wq4mwn9uuOHulwoSg%2Ft1WgSDmvAskrLVoeNQ6PaB3dxSskdw%2FkbFSzDSr%2FakI3BFTifEri%2BEVhxq5yN65w%2FQhc2gDb%2BM0YIcROBJUB1qOgveT895IBaWR2r69ZlatmpfJDnFnqPG8lKGjPOUoyhAQwQSL2CXA8ux&X-Amz-Signature=f20e23b52ef1f62a16f33ca5876832b8da65872442f75c52c4a3f8f7bafd7e16&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWWXIHWS%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BMX1eF9o3vCl6RP72ZN3o6LdDSwSL5frpS2y6aLno7AiEA3PqY1TBTWrpEBmbiygRouBdLSqdHZX5K0mA0D4K7RxQq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDCk7M7wgo36o8X2Q6yrcA1wlGkLOQEPt1Hc9DfdOvzEwUXBXQaJHfpCqZ2JxILi9L1YZtftF9xhF0p69VtthZMOf2fx3BU59tKQgMmmirBFCmJalR4kgY%2By5th%2FmDuMigj19w5jBEC9EYnxP12rFxvWXZRyjAiyvyYHDCc6N%2BTGEwRYEMcALpYMsdghCwrK9ZOxl3sMuWTw9G0vPW7yk86VhqejleT8lx7zhlps2kdYqblcqqzhKt%2FsabMi7huj7WDGBkTQZlfK0sfcAoCSVg9wq35VXFQAQcJK42sS3nwrN%2FtLAertiHmOIb1u%2FuZhHse4%2B%2BrQCm%2BBPgC9v7Ko5SCoa8P1P6P3zYwIMO%2BCdWhYYUqsxH9jpTGGN%2FdMD4n0g3o9%2FT6dKkM%2BbGvtwO7%2BLAhz0ohxU0e7m6cg5rI1RQsmHEMT0oxQvHcb3jKusMlck9lCM8D3OKGsdRCEjq0uqRpUd7hBUGLG%2BQXCYKKCgCFZSSMZzlEOJkR44xyIFcd0%2FjOcU4vJO%2FWPKz7%2BQv334zD460oswCbg7mvpCn4H796b6vocJqkPT518Rw0m%2BpoaR%2BdXP3lQlTzqpXcPeYqHSBxhgOGTTDonqa1hy4dcezYpGxVuUA0N16FtNf8l6DNwbFnaMlUMBZ283LfpXMPiE%2Br8GOqUBn8HAbmo%2B4KafXDzXLe83pH0ZyljfItvbHlHnLtrqj5AHU2ZikCCg1p%2B6Hdc7wq4mwn9uuOHulwoSg%2Ft1WgSDmvAskrLVoeNQ6PaB3dxSskdw%2FkbFSzDSr%2FakI3BFTifEri%2BEVhxq5yN65w%2FQhc2gDb%2BM0YIcROBJUB1qOgveT895IBaWR2r69ZlatmpfJDnFnqPG8lKGjPOUoyhAQwQSL2CXA8ux&X-Amz-Signature=38db2489cedc0ebc00d4c83bad36d446301f5700175365626122c219b2cc530f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
