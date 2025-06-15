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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4MJ3UCS%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIH1GX%2FAF4%2BVogtUbOrSOdnbsoI4WIUvhDYdFZxJRmuiDAiEAmAi6QmlB2FBJff9yH5M70DhgrZw%2FHwAP9HkV8Z9jGYgq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJdNZVk9xLEd22lxDSrcAxNmbu8hKAv9pcBFUCljZ%2FIrxgCNG40j%2BkFqixglTP6I1pWapNG6zkOY6lFgAcMncVaKVXA5P35v4KR7JJwPKSBphooM8JU3lEMO1NBfSPcblYnEnMNKlkePA%2F5mgZoCyA6dqXZdvilyPPRvWgfqOGszjCIiWFGtwDQk8EWP2uXpmMkWeMVJUQih1zvRdQHuSxmsiWvL7c%2BhHJHca4DxPYx3aPU8cGjCX9SwhgX1kEh7t%2BZy4Q30Go%2BGfYYtUfNv%2BwncPXmTmjYA90C1M7TBOXab7L4oPClv7GR%2F%2Fsvqqur4oYL1JKqol43mVakTFJmaWjYNyHs8huYU%2BR52TiUpkcgjz%2BULP5LFA7bz4tJWu1MA3ymOHHaLLceKol%2BMMfaVJ8q9MLTionCpg0YOGlzxL19r5RQYbthqTuchEFXWdIZ9MYFyE0z7bwi3NJntlRkcBCw0%2F7pWMc6iSQW88ZXtGlbxYT0fomo0ln3WEoRbWenSJKI2wOHt72qUSYEyZE1jxxiiJ0COPo7GY%2Ftlr0w4qW54%2F3%2Fw%2FTy5OgwgwNtUZvkiCYUYRZvUOIb1jX%2Fhf0MIdF1dUcnk8OJmBYHXB0L5Lgc3cdfBcHnePklYTIVjRg1P6%2BLWOjd9DFxT%2FohrMID8usIGOqUBXI0OXT9Ci699TKNh89ZIWMa1mEhMEwjbCdUIns9qyl4mn%2B3tqkqKtPlp9mbse36TU5vZDXgPAzxDCG0euWa6amH%2Bbz1o6cxYdgZ63VQ0FDEa0eYAc2tNBqVdtFbCnMW4C2sqcq5zSVJ9IeE94l0Beb5PcjTtloSQxylcIuJNf0Y%2B%2Fb0bFNzlWzdXZ19FRhJJ9YmtNOujic7Knk3Al1wgWF6hAfLF&X-Amz-Signature=157fc641e64a9f11494ee06c46ee7122bec4d13b1c55288e03d54c0eb9ba401d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4MJ3UCS%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIH1GX%2FAF4%2BVogtUbOrSOdnbsoI4WIUvhDYdFZxJRmuiDAiEAmAi6QmlB2FBJff9yH5M70DhgrZw%2FHwAP9HkV8Z9jGYgq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJdNZVk9xLEd22lxDSrcAxNmbu8hKAv9pcBFUCljZ%2FIrxgCNG40j%2BkFqixglTP6I1pWapNG6zkOY6lFgAcMncVaKVXA5P35v4KR7JJwPKSBphooM8JU3lEMO1NBfSPcblYnEnMNKlkePA%2F5mgZoCyA6dqXZdvilyPPRvWgfqOGszjCIiWFGtwDQk8EWP2uXpmMkWeMVJUQih1zvRdQHuSxmsiWvL7c%2BhHJHca4DxPYx3aPU8cGjCX9SwhgX1kEh7t%2BZy4Q30Go%2BGfYYtUfNv%2BwncPXmTmjYA90C1M7TBOXab7L4oPClv7GR%2F%2Fsvqqur4oYL1JKqol43mVakTFJmaWjYNyHs8huYU%2BR52TiUpkcgjz%2BULP5LFA7bz4tJWu1MA3ymOHHaLLceKol%2BMMfaVJ8q9MLTionCpg0YOGlzxL19r5RQYbthqTuchEFXWdIZ9MYFyE0z7bwi3NJntlRkcBCw0%2F7pWMc6iSQW88ZXtGlbxYT0fomo0ln3WEoRbWenSJKI2wOHt72qUSYEyZE1jxxiiJ0COPo7GY%2Ftlr0w4qW54%2F3%2Fw%2FTy5OgwgwNtUZvkiCYUYRZvUOIb1jX%2Fhf0MIdF1dUcnk8OJmBYHXB0L5Lgc3cdfBcHnePklYTIVjRg1P6%2BLWOjd9DFxT%2FohrMID8usIGOqUBXI0OXT9Ci699TKNh89ZIWMa1mEhMEwjbCdUIns9qyl4mn%2B3tqkqKtPlp9mbse36TU5vZDXgPAzxDCG0euWa6amH%2Bbz1o6cxYdgZ63VQ0FDEa0eYAc2tNBqVdtFbCnMW4C2sqcq5zSVJ9IeE94l0Beb5PcjTtloSQxylcIuJNf0Y%2B%2Fb0bFNzlWzdXZ19FRhJJ9YmtNOujic7Knk3Al1wgWF6hAfLF&X-Amz-Signature=4731f14eaaba334e4c24180b7e147b4fcdb28910c20b59bf1d4bd5d7c0e76881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
