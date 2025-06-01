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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X63EKTNN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDF74%2BFnkCeulHrUAwwKl642HnNzQmxoJSulBsK%2BRp5fgIhAJYGJFfNVBD2IjxJgkurOhcRLGMJ8g440%2F%2Bk7D10WqDCKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCcoEGmtT49Jt0%2F2wq3APxdprGaHcNmybwysZC9RBST75fw2kvkkX1tMO%2BNWyXkx4GpC4OxAX3K7cOyCoojN20kbnK4x%2F8gteWI4NSGNiti7JIQnDaGvgfKwRAxUEgmttKK7CR8TveOsbW1ZksfGwalp6sUf%2F0LHgJrypgmy1pGGxR6MKm9XKk3k8ZmWa5s1qN2d71TSfDkpexx%2BXV5yaYTS%2BH07ExZ%2BNaCp7%2FiFRV5BCOhxh8FGYCejZpe%2Bsp5IrkL9sQb8f6LVfel%2FDfzE56JMh4Qvjljj97M4w3nGYJkNTuTCNnLwR9430L2fQcG3CkMomd8bCjeBCRVIe6rgMa61wgI3E014UQjmiR0bXtrOn%2BXGln1KQvzgbt7iOGFvK7pKi2aB3KXa57esrEER4AOIQWqLCEUWh9VREuE8aBKFG3de7xVqZm0DOacraqDwch8pNEQ7Fi8HXYthbYnrw9oC4DlKQXBcEthfry7iOuT3VP8r95EvEzCuHDv6O%2FjnFMVhLMDanMJijnqOdZOiGOFEGEv%2BVHiXy3xbtahAhKS%2FIAfBI3UE1xWg%2FBlwBFJCGFu9DWtLtsJtNUqOStXVBUsC%2BZ0hN0IcrKw8B2f%2BXMfwkWmiM5YFZSLpDhzOupsLpfW%2FAkA9JAkExgrDDM2%2B%2FBBjqkARyyh6QhSAcbsmtTBipX8RnwEWTuYXhSbiLExMybdRbP7BefusISkMnggKwwrCQsLwOUITpbr8ltXYU4sdZwiurS%2BY%2BK%2FZY1oYHj61WKZy9y4tEEO9Lb67MVL6lFGnuX4tZM5p4vE1d%2B%2B2Rt6Ub5GP12ULvZWN5%2FI9CimFYfHmPq5EecIJxa20X3HCCbIkp0QADdViBDZCvC%2Ff4KZarUv0wMT%2Fhy&X-Amz-Signature=4a0f1b306d5e7e83a02590f571b9c6415fcf68a33a9dd22c77f1903ef0e33491&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X63EKTNN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDF74%2BFnkCeulHrUAwwKl642HnNzQmxoJSulBsK%2BRp5fgIhAJYGJFfNVBD2IjxJgkurOhcRLGMJ8g440%2F%2Bk7D10WqDCKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCcoEGmtT49Jt0%2F2wq3APxdprGaHcNmybwysZC9RBST75fw2kvkkX1tMO%2BNWyXkx4GpC4OxAX3K7cOyCoojN20kbnK4x%2F8gteWI4NSGNiti7JIQnDaGvgfKwRAxUEgmttKK7CR8TveOsbW1ZksfGwalp6sUf%2F0LHgJrypgmy1pGGxR6MKm9XKk3k8ZmWa5s1qN2d71TSfDkpexx%2BXV5yaYTS%2BH07ExZ%2BNaCp7%2FiFRV5BCOhxh8FGYCejZpe%2Bsp5IrkL9sQb8f6LVfel%2FDfzE56JMh4Qvjljj97M4w3nGYJkNTuTCNnLwR9430L2fQcG3CkMomd8bCjeBCRVIe6rgMa61wgI3E014UQjmiR0bXtrOn%2BXGln1KQvzgbt7iOGFvK7pKi2aB3KXa57esrEER4AOIQWqLCEUWh9VREuE8aBKFG3de7xVqZm0DOacraqDwch8pNEQ7Fi8HXYthbYnrw9oC4DlKQXBcEthfry7iOuT3VP8r95EvEzCuHDv6O%2FjnFMVhLMDanMJijnqOdZOiGOFEGEv%2BVHiXy3xbtahAhKS%2FIAfBI3UE1xWg%2FBlwBFJCGFu9DWtLtsJtNUqOStXVBUsC%2BZ0hN0IcrKw8B2f%2BXMfwkWmiM5YFZSLpDhzOupsLpfW%2FAkA9JAkExgrDDM2%2B%2FBBjqkARyyh6QhSAcbsmtTBipX8RnwEWTuYXhSbiLExMybdRbP7BefusISkMnggKwwrCQsLwOUITpbr8ltXYU4sdZwiurS%2BY%2BK%2FZY1oYHj61WKZy9y4tEEO9Lb67MVL6lFGnuX4tZM5p4vE1d%2B%2B2Rt6Ub5GP12ULvZWN5%2FI9CimFYfHmPq5EecIJxa20X3HCCbIkp0QADdViBDZCvC%2Ff4KZarUv0wMT%2Fhy&X-Amz-Signature=623e0f611d96829a4b2693f2c225dee96b8022f45cb89cd112617e5036043a7d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
