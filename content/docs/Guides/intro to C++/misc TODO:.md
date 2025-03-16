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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2XCNGEJ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1TFzgE0hxTMe8xq2o1LUzusZXqkJGyn%2BxM1H8XAowPAiASiGkFwZ3AjV0CZ8ibn960bMNdxBzJXfyT3ubwBrwMgir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM61GdoLugthuU%2BdJSKtwDMdgAkkyNV5rxjIlivfTyIqgkkl6Qk%2Bojf4wZEq9qOPPSNr3H6SxyQuGu3N9wVH8heR%2FHoeOpkxwpIxzkOfKbTEa21YC0vM3U5Zn7zFXodDd7frYERu%2BtK0Ib%2FQwWAxALdLuca3fqFxDQP7nGdeQRpeVFNxbgByU1MqpW0yaeDYfGAKkWrF4pPfyRzvyJkZB6tLrSUb0Ek7I6QVb2ElHD9BM4DOmlsVhBHFyJJ%2FEsO%2FLke5yey7niACE4xcwRBS76lMbkWuY1NqMHh9xXvCI0h5AqCZfJxIYLSLgXhkUsDP3juEuFSVq%2F9AHdiDQwZio%2B7eAUZRDjR2%2F9y7CmaAoIuUIiCbUe%2Fbd%2FEEtlzSyrCR67WmrxhlCXcV6IfMr45uF6iVXbHv%2FjsSPzE8TrT2ILZs%2Bx%2FlHp0HvunRmAmS3kLvJfIQUVm9dY7Sh%2BWoqhc0awHfMJZTlM00wWP6YslVU7%2Bc5vX%2ByeoboSeDJ6sSy6e1u3zNRYtp%2FQrq%2BgMuoMDALRX%2BV0IP%2BuKHQ1SP7b7L6KG%2FnkabZ3EmA4w7qG1W%2FY%2Bk%2Fb%2BRLj7p3RzAoAnbtC1iVm76ety5wGFK3rU4b71erlwCtzFFFpTnh6rLJzO4GVsTLwzrwneiUdg5XSiDswt73bvgY6pgG1MJucfvCkp90JDdp0GRJaMcQqWSiGI%2F2uHG%2B5I8xbISaIQ9vuhWiLsPTlwGXr%2BCj8hKLlCsK1wiU4uqzwrvwjyZkSiC5J5qH38Y%2B1DNg%2BOFHhrEkx%2Bu3xcOQEGU%2BU0WG189rCngxAFH3FwOHkTMAMS9xdaYl0TWVgg8SC7Ht0%2FeXQ6mqXIc7UZIwm%2BAcUP36ft7ArrSLJmmxwlqDafCWkyfXxWmLW&X-Amz-Signature=38c89479a0de4dc96afd929e5f5b6914d61b6139921f7e36971daf2f9c4d8cd5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2XCNGEJ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1TFzgE0hxTMe8xq2o1LUzusZXqkJGyn%2BxM1H8XAowPAiASiGkFwZ3AjV0CZ8ibn960bMNdxBzJXfyT3ubwBrwMgir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM61GdoLugthuU%2BdJSKtwDMdgAkkyNV5rxjIlivfTyIqgkkl6Qk%2Bojf4wZEq9qOPPSNr3H6SxyQuGu3N9wVH8heR%2FHoeOpkxwpIxzkOfKbTEa21YC0vM3U5Zn7zFXodDd7frYERu%2BtK0Ib%2FQwWAxALdLuca3fqFxDQP7nGdeQRpeVFNxbgByU1MqpW0yaeDYfGAKkWrF4pPfyRzvyJkZB6tLrSUb0Ek7I6QVb2ElHD9BM4DOmlsVhBHFyJJ%2FEsO%2FLke5yey7niACE4xcwRBS76lMbkWuY1NqMHh9xXvCI0h5AqCZfJxIYLSLgXhkUsDP3juEuFSVq%2F9AHdiDQwZio%2B7eAUZRDjR2%2F9y7CmaAoIuUIiCbUe%2Fbd%2FEEtlzSyrCR67WmrxhlCXcV6IfMr45uF6iVXbHv%2FjsSPzE8TrT2ILZs%2Bx%2FlHp0HvunRmAmS3kLvJfIQUVm9dY7Sh%2BWoqhc0awHfMJZTlM00wWP6YslVU7%2Bc5vX%2ByeoboSeDJ6sSy6e1u3zNRYtp%2FQrq%2BgMuoMDALRX%2BV0IP%2BuKHQ1SP7b7L6KG%2FnkabZ3EmA4w7qG1W%2FY%2Bk%2Fb%2BRLj7p3RzAoAnbtC1iVm76ety5wGFK3rU4b71erlwCtzFFFpTnh6rLJzO4GVsTLwzrwneiUdg5XSiDswt73bvgY6pgG1MJucfvCkp90JDdp0GRJaMcQqWSiGI%2F2uHG%2B5I8xbISaIQ9vuhWiLsPTlwGXr%2BCj8hKLlCsK1wiU4uqzwrvwjyZkSiC5J5qH38Y%2B1DNg%2BOFHhrEkx%2Bu3xcOQEGU%2BU0WG189rCngxAFH3FwOHkTMAMS9xdaYl0TWVgg8SC7Ht0%2FeXQ6mqXIc7UZIwm%2BAcUP36ft7ArrSLJmmxwlqDafCWkyfXxWmLW&X-Amz-Signature=b173a562d6f1b10a3701b56de135e58049d1b2519fd7930e0e8eb7963f7dc431&X-Amz-SignedHeaders=host&x-id=GetObject)

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
