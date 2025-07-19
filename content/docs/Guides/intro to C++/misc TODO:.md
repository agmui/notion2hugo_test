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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAHT2ONF%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgSiSWUiXkOpGIzqscOjg4bHVMBHDM0pAMh%2FQh5SqNSAiBQoPRO5DZ%2BYfj68JUQqxUv9CUr%2Fg1QUo0eRfhuUxxEJyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhyb9vwZiTJ1IIVD5KtwD%2Binde9YTputY3SS%2BlUDx8aXQHrW25%2Boxn%2B5tTuWPP06W6bcfNsZGw0N4AReNnqklCs1Su7f5NQHBgcbv%2F6dmTdeu5o51agxKGVmzrpa8XJkfsqzY64RXCAjNp3naQTD6HjTfswswWRcAzquOX5wBJdqxOc0xK9nI%2By%2Fls3VYSvkDtFGTPXqtmA1H5NM3tkAy5QUtx7DCgfFum7JXDqVBaBhhwWBtHjn3qO6z0gvDmJXMz5gAJ0xgZnWlRUTGEgVHyHgZtQpi2FYRGda%2FfJKcqsAdLnjt30HrKryW5cAp%2BJazYcoTL%2BUowPsHPYt7SHj6fk3M8K9DO4SmsUrNBJR7vjHqtvwWva7xBlTPsJev%2F8S5n%2BsAf0pIb%2FTS%2Br%2BhLMC5kXF9a2maGsh1lVrPIsPBZkmC8pGJOFjvT9YwKAAIAYl6micwlVCKPnafm%2F1ISnxaFLXeRfDJtuT%2FSCbG8TLEtp1fEHRt%2BLrJ2lvBp1CK2LQ5BqwDfV6gWRerHGYqj2zFDWmXOhp%2Bc4cjESnkMEK9VxugpWPAXs8b1yTE7eZlit32XJ1uYa0sWNHTtsJVS1CUEg33JpWUkjqCU2YbO1rv6FnTvu35EtAuPtl3nkvuqUJbEN1eU5xpMW9d7kAw2rjuwwY6pgH9KMTtzc4YlzY3aKC%2FAH%2B40X7OyUa%2B%2FTTplxG9Lfc15uWt3LC9sFuR3Sj7Hfvb0NkL2pQg7YfsxqywpKIsGEMtmWrvIKLCgTRluqpquHeQiYCWx7XuWYzcepb3ea3FEQ1hl8qm1AWlCohiABIo%2F0jQXRiVZqJvaEa09N6%2BQi%2FGAurETl%2F1HIjq2SxMTQ%2FbVt6ABfpHklsijzKo%2Bq5F06jWGsb2%2BjPR&X-Amz-Signature=60033829df57abec881b4f6e2d04e4c361877ee1a79b578535540ad1785cc1e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAHT2ONF%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgSiSWUiXkOpGIzqscOjg4bHVMBHDM0pAMh%2FQh5SqNSAiBQoPRO5DZ%2BYfj68JUQqxUv9CUr%2Fg1QUo0eRfhuUxxEJyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhyb9vwZiTJ1IIVD5KtwD%2Binde9YTputY3SS%2BlUDx8aXQHrW25%2Boxn%2B5tTuWPP06W6bcfNsZGw0N4AReNnqklCs1Su7f5NQHBgcbv%2F6dmTdeu5o51agxKGVmzrpa8XJkfsqzY64RXCAjNp3naQTD6HjTfswswWRcAzquOX5wBJdqxOc0xK9nI%2By%2Fls3VYSvkDtFGTPXqtmA1H5NM3tkAy5QUtx7DCgfFum7JXDqVBaBhhwWBtHjn3qO6z0gvDmJXMz5gAJ0xgZnWlRUTGEgVHyHgZtQpi2FYRGda%2FfJKcqsAdLnjt30HrKryW5cAp%2BJazYcoTL%2BUowPsHPYt7SHj6fk3M8K9DO4SmsUrNBJR7vjHqtvwWva7xBlTPsJev%2F8S5n%2BsAf0pIb%2FTS%2Br%2BhLMC5kXF9a2maGsh1lVrPIsPBZkmC8pGJOFjvT9YwKAAIAYl6micwlVCKPnafm%2F1ISnxaFLXeRfDJtuT%2FSCbG8TLEtp1fEHRt%2BLrJ2lvBp1CK2LQ5BqwDfV6gWRerHGYqj2zFDWmXOhp%2Bc4cjESnkMEK9VxugpWPAXs8b1yTE7eZlit32XJ1uYa0sWNHTtsJVS1CUEg33JpWUkjqCU2YbO1rv6FnTvu35EtAuPtl3nkvuqUJbEN1eU5xpMW9d7kAw2rjuwwY6pgH9KMTtzc4YlzY3aKC%2FAH%2B40X7OyUa%2B%2FTTplxG9Lfc15uWt3LC9sFuR3Sj7Hfvb0NkL2pQg7YfsxqywpKIsGEMtmWrvIKLCgTRluqpquHeQiYCWx7XuWYzcepb3ea3FEQ1hl8qm1AWlCohiABIo%2F0jQXRiVZqJvaEa09N6%2BQi%2FGAurETl%2F1HIjq2SxMTQ%2FbVt6ABfpHklsijzKo%2Bq5F06jWGsb2%2BjPR&X-Amz-Signature=c5ec52549484133b9cc538515c6a9da0ad0e775ff5e95e5dacebb2058609178a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
