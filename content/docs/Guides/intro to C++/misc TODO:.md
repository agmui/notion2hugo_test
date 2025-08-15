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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY5J4QMT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD2AsPmKqz3mE5AhzJ1NegwoJp9uTVHYcKC50v02sBpywIgSWN2f6P%2B5pgP4tkNlp9YEHqXIOdd9FpqIvWWn5n5wOsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIAMs4JJE%2FvBujriryrcAx3Mq4WSII2x5dg45WaS4KHM49KGQuhmiHWcO3NeBwVDr3MEOcSXC8M7%2FsuJqjYHVKz%2FusIZc%2FsHPgOfzxwXrzLL2J5S6NCb1cuKyF%2B2VzQMDnjKsW0oTvSAzHiy6e2DkSUgp2GjgKwO%2BWZBRqLHnyie6EtoywWkrfbSgXXZz50b0O3fO90IRQdTEE5RMPoPqOttKA32M8PrK6a%2Bn%2BSg8RXJIgorTTi06sSGSQ26c7M1Ve7OWf86qjVeWaWy0zKON2N4cSzeRB%2BRZNEGGsamRk52OHVdyTwE695t2clh823FXv1972EA%2FJbokEg%2BbKq5sCcYuOsSPumWpoAiBcqrN%2Ffqb1vYrg4g2D8D3jpUXL99B3W6Szr1iLzjg4JLYR5uOf8SwPuwM9ShCxyyhoHh2Unr8yeRSAGDJmA1xBqRJVWZRlhSeiRvsHDqbgJZXnIfUPesi5YacdcKAWrcqanf9xtOSaGtl4A7w47bci1OiaLislg%2Ber2zqw1LaKDcjkrAkse6ofjAfI777eYe%2BZTMC%2ByuBdqZewh%2Bk3%2BuDsMDWJPKjHiokOhKSBzqTzM9DcMH3IW9h1P6asovbTGZx1c%2FMHRR6p%2FiCFbIMISKoIaSMm6%2FHUPobjZ2mFm1%2B0G1MOO3%2FMQGOqUB1YSWhYGvPJ%2BxdZlCw5tmwBfAztvtVVGWtQ8KdywyZfl0kv%2Fad2BhNFyYUYSIJtkcSu0AGh9ukrt8%2F6kBHXTT7SrEDqr88RhP3cFDdEZYlgvYP5HRH7rJYQB274MUVOh4D9QYjtgUrmX%2FivPbrcH8TgoYbcUiMIh%2B6f2eUc97F9yAk2iUcJA5R0T3yjLS7rwDEXMfOPLfruVXID2I8mg520LY%2F%2F66&X-Amz-Signature=47eec93571cd7a18611a86058f690c9a234d32a4bb5bbb9bd15f7e6e92210afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY5J4QMT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD2AsPmKqz3mE5AhzJ1NegwoJp9uTVHYcKC50v02sBpywIgSWN2f6P%2B5pgP4tkNlp9YEHqXIOdd9FpqIvWWn5n5wOsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIAMs4JJE%2FvBujriryrcAx3Mq4WSII2x5dg45WaS4KHM49KGQuhmiHWcO3NeBwVDr3MEOcSXC8M7%2FsuJqjYHVKz%2FusIZc%2FsHPgOfzxwXrzLL2J5S6NCb1cuKyF%2B2VzQMDnjKsW0oTvSAzHiy6e2DkSUgp2GjgKwO%2BWZBRqLHnyie6EtoywWkrfbSgXXZz50b0O3fO90IRQdTEE5RMPoPqOttKA32M8PrK6a%2Bn%2BSg8RXJIgorTTi06sSGSQ26c7M1Ve7OWf86qjVeWaWy0zKON2N4cSzeRB%2BRZNEGGsamRk52OHVdyTwE695t2clh823FXv1972EA%2FJbokEg%2BbKq5sCcYuOsSPumWpoAiBcqrN%2Ffqb1vYrg4g2D8D3jpUXL99B3W6Szr1iLzjg4JLYR5uOf8SwPuwM9ShCxyyhoHh2Unr8yeRSAGDJmA1xBqRJVWZRlhSeiRvsHDqbgJZXnIfUPesi5YacdcKAWrcqanf9xtOSaGtl4A7w47bci1OiaLislg%2Ber2zqw1LaKDcjkrAkse6ofjAfI777eYe%2BZTMC%2ByuBdqZewh%2Bk3%2BuDsMDWJPKjHiokOhKSBzqTzM9DcMH3IW9h1P6asovbTGZx1c%2FMHRR6p%2FiCFbIMISKoIaSMm6%2FHUPobjZ2mFm1%2B0G1MOO3%2FMQGOqUB1YSWhYGvPJ%2BxdZlCw5tmwBfAztvtVVGWtQ8KdywyZfl0kv%2Fad2BhNFyYUYSIJtkcSu0AGh9ukrt8%2F6kBHXTT7SrEDqr88RhP3cFDdEZYlgvYP5HRH7rJYQB274MUVOh4D9QYjtgUrmX%2FivPbrcH8TgoYbcUiMIh%2B6f2eUc97F9yAk2iUcJA5R0T3yjLS7rwDEXMfOPLfruVXID2I8mg520LY%2F%2F66&X-Amz-Signature=ff0d64d21f95c4c2f7b19bdf4fbb9a589d8008764ff0153793871eaf557ee5e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
