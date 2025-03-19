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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GMIHMDT%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIGchwEMQ6do8DjTk3ViDKxlBZcPK4umujC4Nf7ODjXJYAiBZXf5hHeqqessEo%2FhlZ4c%2BS680700YPb6HkWJ5UifcGCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM%2BF2Gdg1WnFiJuSiyKtwDOVE6%2BETQABKopeI9k3EVy%2BUKRvd3llZz%2F6r0NjiRf5wwg0diQhEbiYPE7uFmqopv0UXwQNte2XbSKaubnbncKIqkTdWkHTXag4D%2FS%2F45uLZmrDTbEojyVBn5kWEYY%2BRZDirQTB2XD1ATe8YqpCAUNHSioVQsJUvDtJ4X%2BNhBmcry6QbscFIq8JAClh1P4c4Wfm9nn%2F1DCuSvNOwENaDwNvh735P%2B1dbXDKgZT5986ecONcRIhqEo%2BDJCmDRQIaFMt4j3VfUifsOPhWQeBWZIYxa5Bx5RmTZ95uH%2BKmOWPvjvh9z6qrdl1wkP18ZuC8L6GztyN4ZuvjhYssfyNo89tyJNmJkf2IXQuKevds1F3TgsUYZoURM%2F9GxVKUw66og8jwhxSk4gEK3dIdxM2dL4O2tJtQP1%2Fk7hWctiC7MH5B69eDeuYQt%2B5IN8E6hMkohQoIWiPGrJQgeNff38T1XWC4LElJEGwmeWOYFCq7U3Z9o9hV%2F6TQWK7qHiMCIQk%2B6RJMY1HmzHw8RiyGzkbHdRIH40ffW%2FPla2eZH92%2FuM0Y1l5M%2Fz1KwRaQqFdHDk0bzbFWEAxJSMq%2BBKehvXmLYLxJRAcG54tLscZ9o4HOy%2FV3%2BwavaxvxCWnP%2FcyG4w47DnvgY6pgHMFPp79NCv1BBNmJSDjykDf33uRNLPmuqChuDnqYBm2KMlKZH6HUQlh9PspR8pw%2BWDUhO6fP4AihEAHADrIgQYYlnV7pPw0vWgdO1%2FrO6ZGXDcGjJrXOCSHZQv1foTbpbAuoIKnpF%2BBpPQKVXeAHeCy%2BWlAg%2FxpUrRA8pqRWDSKTX1DhE3rKCH0GFS7%2FJ6mD2jLtVUht9oVyhnqQQge43PgLWWWJbw&X-Amz-Signature=ba4793314d43f255fb0dd30bf4ca80c97737935bbcdb32c9a6f2fba68fe98114&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GMIHMDT%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIGchwEMQ6do8DjTk3ViDKxlBZcPK4umujC4Nf7ODjXJYAiBZXf5hHeqqessEo%2FhlZ4c%2BS680700YPb6HkWJ5UifcGCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM%2BF2Gdg1WnFiJuSiyKtwDOVE6%2BETQABKopeI9k3EVy%2BUKRvd3llZz%2F6r0NjiRf5wwg0diQhEbiYPE7uFmqopv0UXwQNte2XbSKaubnbncKIqkTdWkHTXag4D%2FS%2F45uLZmrDTbEojyVBn5kWEYY%2BRZDirQTB2XD1ATe8YqpCAUNHSioVQsJUvDtJ4X%2BNhBmcry6QbscFIq8JAClh1P4c4Wfm9nn%2F1DCuSvNOwENaDwNvh735P%2B1dbXDKgZT5986ecONcRIhqEo%2BDJCmDRQIaFMt4j3VfUifsOPhWQeBWZIYxa5Bx5RmTZ95uH%2BKmOWPvjvh9z6qrdl1wkP18ZuC8L6GztyN4ZuvjhYssfyNo89tyJNmJkf2IXQuKevds1F3TgsUYZoURM%2F9GxVKUw66og8jwhxSk4gEK3dIdxM2dL4O2tJtQP1%2Fk7hWctiC7MH5B69eDeuYQt%2B5IN8E6hMkohQoIWiPGrJQgeNff38T1XWC4LElJEGwmeWOYFCq7U3Z9o9hV%2F6TQWK7qHiMCIQk%2B6RJMY1HmzHw8RiyGzkbHdRIH40ffW%2FPla2eZH92%2FuM0Y1l5M%2Fz1KwRaQqFdHDk0bzbFWEAxJSMq%2BBKehvXmLYLxJRAcG54tLscZ9o4HOy%2FV3%2BwavaxvxCWnP%2FcyG4w47DnvgY6pgHMFPp79NCv1BBNmJSDjykDf33uRNLPmuqChuDnqYBm2KMlKZH6HUQlh9PspR8pw%2BWDUhO6fP4AihEAHADrIgQYYlnV7pPw0vWgdO1%2FrO6ZGXDcGjJrXOCSHZQv1foTbpbAuoIKnpF%2BBpPQKVXeAHeCy%2BWlAg%2FxpUrRA8pqRWDSKTX1DhE3rKCH0GFS7%2FJ6mD2jLtVUht9oVyhnqQQge43PgLWWWJbw&X-Amz-Signature=2b76dc3f8d2cce170d1ce25edeec8c2ab6b1a2eab2ca102f2b556c4cded4e7ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
