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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6CX7G4X%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDklflSAgib1h0buVi4mRukyGXinYu%2FepvBGInPf59A4AiAJilsu7pqHw5lhaicnoAzH20Ibog66HYs2hYxshj6%2Fxyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMR9X5wzUVo%2BKsMwXzKtwDhlJRcJddvB7Tk9%2FSo1gVPmjYVbWjj9x9dZpOjbE85KVX2eaWBDRsd3%2BJCeJxwn96TjhS7%2BUvRKS4LhcITLumMlAx5XnArsJBh1fqQNzIhDVBHpF4Iok990hcJU5Q441mobNII28qN9DLap8b9YoDWVioL3FwVB79am9%2FDCzg4spxe5oPbsjNGGvBP%2FVj7un%2BXW2oyGhy7xYigMm7d%2BWZPjm0aeaadfrnarrvmK1yO0kCLZ5Glv8bMmGFFLSA46XGnhULunUvYlwBxo%2F1m%2B42DPG6xe1n07M9u2txa%2F3k7zpEg6MqiCw%2B%2Budjd8W1mH2JZhJR4TjH4%2BSSebYOdttIojqsnV9oF45hiTRLL7D92tFSNJWjGg%2BTQv%2FkKbIlKIsHdyqWNoMJ8slm9O2zcK8tnPHr3VtZF%2BXaWLECdQSI%2BxULVnBiVVcrLf4x6RJCq2zMYxTOO3mTfhJNJABcBwMK6ViuY1x0NzYGjp%2BsTv8LwNDu%2F2ruzh1xtE0QTcvDmuU2jpI9UGyLwFV6YNZQ9TEXZUkqCa%2FxmmNjKRoJc%2FU1FEHr2NdQI%2B5pEyD9SPlBez%2B53ZpZ7%2BZ9Xj0YCQJBAYcBBX%2F%2Ba8rmtJ9sSCAMKyjD8drg5jNo%2BEwSVZkCw1UwlazTwQY6pgGtYoYiI70VFC19PcigvOa%2FRSY7Z7qQNC8H%2FrOqW2FxT9GKTXQUeZ3N9QoCXNPwIBQbnzHDM7vZiw7tXpX2OAuxGVuroca5uyrsvMZW4TNRiesZJBXo07isYWkuB8QR62MmxJjnzeVCl1adJhJJ4tNN41lfvpb3EjfBYbxGsduBpoik5aG9pdXqnmKxhjvMkoUXb1Fl10qBmBQ9idVEaFfQE186HtJI&X-Amz-Signature=6901084b6e5e3814cb14c1920a37d2413434a40b1d812c971f8f67344bf62a2b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6CX7G4X%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDklflSAgib1h0buVi4mRukyGXinYu%2FepvBGInPf59A4AiAJilsu7pqHw5lhaicnoAzH20Ibog66HYs2hYxshj6%2Fxyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMR9X5wzUVo%2BKsMwXzKtwDhlJRcJddvB7Tk9%2FSo1gVPmjYVbWjj9x9dZpOjbE85KVX2eaWBDRsd3%2BJCeJxwn96TjhS7%2BUvRKS4LhcITLumMlAx5XnArsJBh1fqQNzIhDVBHpF4Iok990hcJU5Q441mobNII28qN9DLap8b9YoDWVioL3FwVB79am9%2FDCzg4spxe5oPbsjNGGvBP%2FVj7un%2BXW2oyGhy7xYigMm7d%2BWZPjm0aeaadfrnarrvmK1yO0kCLZ5Glv8bMmGFFLSA46XGnhULunUvYlwBxo%2F1m%2B42DPG6xe1n07M9u2txa%2F3k7zpEg6MqiCw%2B%2Budjd8W1mH2JZhJR4TjH4%2BSSebYOdttIojqsnV9oF45hiTRLL7D92tFSNJWjGg%2BTQv%2FkKbIlKIsHdyqWNoMJ8slm9O2zcK8tnPHr3VtZF%2BXaWLECdQSI%2BxULVnBiVVcrLf4x6RJCq2zMYxTOO3mTfhJNJABcBwMK6ViuY1x0NzYGjp%2BsTv8LwNDu%2F2ruzh1xtE0QTcvDmuU2jpI9UGyLwFV6YNZQ9TEXZUkqCa%2FxmmNjKRoJc%2FU1FEHr2NdQI%2B5pEyD9SPlBez%2B53ZpZ7%2BZ9Xj0YCQJBAYcBBX%2F%2Ba8rmtJ9sSCAMKyjD8drg5jNo%2BEwSVZkCw1UwlazTwQY6pgGtYoYiI70VFC19PcigvOa%2FRSY7Z7qQNC8H%2FrOqW2FxT9GKTXQUeZ3N9QoCXNPwIBQbnzHDM7vZiw7tXpX2OAuxGVuroca5uyrsvMZW4TNRiesZJBXo07isYWkuB8QR62MmxJjnzeVCl1adJhJJ4tNN41lfvpb3EjfBYbxGsduBpoik5aG9pdXqnmKxhjvMkoUXb1Fl10qBmBQ9idVEaFfQE186HtJI&X-Amz-Signature=38b9cb1768bc32b1e57b0934d78d605b5d154230f3788668b85ccbbd9d2c47f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
