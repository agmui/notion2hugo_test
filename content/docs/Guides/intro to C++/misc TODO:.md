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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY635FYV%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIC3K%2BduEyy0RsD94CdStuJiCUaWg1B7WKn0oxXLhi7qGAiBXauw9rc1kDtm8izShdpPcLzBjkfXDGyEZuqPNBil7HSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaeiyozB8LK5C7HrgKtwDaQ%2Bh1yDI64TvBEkyEynH7J5a8Aqo7Xxp9PnGsO57837sXorfK1C%2BjuIjaNQEMY4YA5MPO5KVBCUyi%2Bs2A8QV2NfSRXNmBDtFBQ8mwAz9Vwb%2BgOBshE2%2BXptmlbG5DsxnCsjirQ3JjcpRcxpPE4V9%2FpZZPNdkbTvKC%2B67xsqWgs217GGcQl13YP9kbMeGWKkYeGAwdQDSuhHbfyXgQtUG%2FRiKZrDe0PJRvb8NwoMcpW8dDDXikTmwGYuBHfQyr1sbS4txUazJJBhtQA0%2B4u6BNsHE3nweV6wdd%2F%2BedDa6pP6FDBoBOkvfuXSwCSnkEE%2FfqLzy2k60z%2BCh9T%2F3qZW15TZWyW5r9yRmCoCa6vL9uTdVxGAUJECKf1Wy8tGpKyg6PrfMh0iesSngNH7XG84MnZiaOsxD1JgEyxZ%2Br6dhiml81ygqCV9U4sh3jvTJbJjDGalfSUJKoHmYrSxO1buluyf%2BOLW%2FbdFwV1vkTan8pl8QS1SxUIZXaYgBJQCS40%2FOBHYyRWvbMREUgy6%2BzV2K40CBsSqU6Gv66eUGDR%2FTe5uvZztx8992C5dusg3dGumokEhWl1fP2wNlcwEwzQYfr4ffZVJPn1csEnPYHMbmGqdBQaew6yRa8hSRGJAwo7eowgY6pgFEsQWPwTlf%2F4WWCte8DOkPf%2Ba8sPxNmx5O8uPaYhdMoi9CZNhm2DRJZ%2B4WdS5Yt%2BMzMs9eE%2FKg1a%2FjUW8boqqoYnxDIr0FgI8uFHKjfzFUTG0iOpRNljWuIyC7o%2Fn7rGZUh1lsbJXHyc%2BHu4ZD4H8aaaZz1XaT2qQvXFODp182t9%2Bb0kld5QNSrVmHT0tK1bUEOAiq82e9vZArzwj99xohlHxtLtQl&X-Amz-Signature=46e2cf14482aa909d79bfb9856bc5dec9d5a2d57f5ec91a4b8467ac5de09efd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY635FYV%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIC3K%2BduEyy0RsD94CdStuJiCUaWg1B7WKn0oxXLhi7qGAiBXauw9rc1kDtm8izShdpPcLzBjkfXDGyEZuqPNBil7HSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaeiyozB8LK5C7HrgKtwDaQ%2Bh1yDI64TvBEkyEynH7J5a8Aqo7Xxp9PnGsO57837sXorfK1C%2BjuIjaNQEMY4YA5MPO5KVBCUyi%2Bs2A8QV2NfSRXNmBDtFBQ8mwAz9Vwb%2BgOBshE2%2BXptmlbG5DsxnCsjirQ3JjcpRcxpPE4V9%2FpZZPNdkbTvKC%2B67xsqWgs217GGcQl13YP9kbMeGWKkYeGAwdQDSuhHbfyXgQtUG%2FRiKZrDe0PJRvb8NwoMcpW8dDDXikTmwGYuBHfQyr1sbS4txUazJJBhtQA0%2B4u6BNsHE3nweV6wdd%2F%2BedDa6pP6FDBoBOkvfuXSwCSnkEE%2FfqLzy2k60z%2BCh9T%2F3qZW15TZWyW5r9yRmCoCa6vL9uTdVxGAUJECKf1Wy8tGpKyg6PrfMh0iesSngNH7XG84MnZiaOsxD1JgEyxZ%2Br6dhiml81ygqCV9U4sh3jvTJbJjDGalfSUJKoHmYrSxO1buluyf%2BOLW%2FbdFwV1vkTan8pl8QS1SxUIZXaYgBJQCS40%2FOBHYyRWvbMREUgy6%2BzV2K40CBsSqU6Gv66eUGDR%2FTe5uvZztx8992C5dusg3dGumokEhWl1fP2wNlcwEwzQYfr4ffZVJPn1csEnPYHMbmGqdBQaew6yRa8hSRGJAwo7eowgY6pgFEsQWPwTlf%2F4WWCte8DOkPf%2Ba8sPxNmx5O8uPaYhdMoi9CZNhm2DRJZ%2B4WdS5Yt%2BMzMs9eE%2FKg1a%2FjUW8boqqoYnxDIr0FgI8uFHKjfzFUTG0iOpRNljWuIyC7o%2Fn7rGZUh1lsbJXHyc%2BHu4ZD4H8aaaZz1XaT2qQvXFODp182t9%2Bb0kld5QNSrVmHT0tK1bUEOAiq82e9vZArzwj99xohlHxtLtQl&X-Amz-Signature=25064ee30601db311cecdd9dab511d3d14b78902100a215f38d0cad1318f34d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
