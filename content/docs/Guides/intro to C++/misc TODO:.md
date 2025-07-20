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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJRHCS3V%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnGPGVqY0BJjsHa%2FU4yBypPOYatqZ%2FNn%2FNcjut5KhqDwIhAJPNHa2%2Fbr%2FjRd3q2NyIR5HLlN%2FjKVrZEDEDqn7LKCXEKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOH2GznRU8s%2BgROzsq3AOqUSB8DrnZqvzGHQmWmAQKfCovdd6Ntrjck9aVLNDCoF8dpMyLUommjIFFMh5kArCX4NINpiIkgxpWUgr%2FBQXwc1TPi5cSM3IzGyaHRk4NXy4S4smdoc7PhN6po7E2LbrDlix%2BUL1nEq%2B%2F2641PCX6vt2E60%2FoyxGHE2t6RTgGSXS73tL50%2FbOu4OMTPpkNEVK0sg90lte0VGSF59KFOzmX%2B%2FeYWvaMduBN1nd9KFzd9sUY6gcqD4g34KvyNHpomRfB8EGKXnK8S682QLEbhX1TKRGIvZC8zjSKNr%2B3i0yNSlZpJZfl8zb10qb6ebmX6ZQ5ha4h83L4BNxEl6I3pegcKufezeGSONxRqpR4fRtYBwZMqrQ5ah5DSQP9t8jOF1J8IolsrDUZJpKZgVsw7S9bUnFP6QaR%2B44NqVa3p%2FoJE2Fqs96iE%2BbiuDJGxeSLWfdei5d624RNuUUqgpY5MXzOFHBFK0Dc2j7fpDlRDZHHIbGBZWsRuf6eug9r0WJHCTDev%2BoDhGgdNEFLc5vJ1UpDrkWjGy0VsxsBHOsFe4ZiuBjhHAlM8b%2B%2BypkupXE3FJ0dlQeEHZ3Bg9ORDpEfrcmJw4q8pI3uJJJG%2FbRksGNLCSgy4Ry0bSVPnnwEzCT9%2FTDBjqkAbNAqLmrVOethUPme5WN8GQwP9HAAhQ%2BoKBM1zH%2Ft9zv8MBw43mEtGiV6GZUhWswxNxTysHRRbLX%2FCjyW4aiQTvQ08sqm6TxhhcrCT1oaAnnNBXeUXH4XFmLfQJdUbgjBGOsCWAJ89XPu%2FPM3ngU%2Fey80lQ7cNanADiCqEtOOg8lCLk4VoRoLoBkoFDDU8l4C98Hmy58Sh4Kf896HT4eGM98cg68&X-Amz-Signature=9d980efa0d15b667a39db71baeb20c40ef0c5dcbb75df85a2f90b6df2b7cd1e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJRHCS3V%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnGPGVqY0BJjsHa%2FU4yBypPOYatqZ%2FNn%2FNcjut5KhqDwIhAJPNHa2%2Fbr%2FjRd3q2NyIR5HLlN%2FjKVrZEDEDqn7LKCXEKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOH2GznRU8s%2BgROzsq3AOqUSB8DrnZqvzGHQmWmAQKfCovdd6Ntrjck9aVLNDCoF8dpMyLUommjIFFMh5kArCX4NINpiIkgxpWUgr%2FBQXwc1TPi5cSM3IzGyaHRk4NXy4S4smdoc7PhN6po7E2LbrDlix%2BUL1nEq%2B%2F2641PCX6vt2E60%2FoyxGHE2t6RTgGSXS73tL50%2FbOu4OMTPpkNEVK0sg90lte0VGSF59KFOzmX%2B%2FeYWvaMduBN1nd9KFzd9sUY6gcqD4g34KvyNHpomRfB8EGKXnK8S682QLEbhX1TKRGIvZC8zjSKNr%2B3i0yNSlZpJZfl8zb10qb6ebmX6ZQ5ha4h83L4BNxEl6I3pegcKufezeGSONxRqpR4fRtYBwZMqrQ5ah5DSQP9t8jOF1J8IolsrDUZJpKZgVsw7S9bUnFP6QaR%2B44NqVa3p%2FoJE2Fqs96iE%2BbiuDJGxeSLWfdei5d624RNuUUqgpY5MXzOFHBFK0Dc2j7fpDlRDZHHIbGBZWsRuf6eug9r0WJHCTDev%2BoDhGgdNEFLc5vJ1UpDrkWjGy0VsxsBHOsFe4ZiuBjhHAlM8b%2B%2BypkupXE3FJ0dlQeEHZ3Bg9ORDpEfrcmJw4q8pI3uJJJG%2FbRksGNLCSgy4Ry0bSVPnnwEzCT9%2FTDBjqkAbNAqLmrVOethUPme5WN8GQwP9HAAhQ%2BoKBM1zH%2Ft9zv8MBw43mEtGiV6GZUhWswxNxTysHRRbLX%2FCjyW4aiQTvQ08sqm6TxhhcrCT1oaAnnNBXeUXH4XFmLfQJdUbgjBGOsCWAJ89XPu%2FPM3ngU%2Fey80lQ7cNanADiCqEtOOg8lCLk4VoRoLoBkoFDDU8l4C98Hmy58Sh4Kf896HT4eGM98cg68&X-Amz-Signature=e6709e4712dbdf09a3f33739269f2cf1a50dd52dd2ca88e2551f7f86369e2e96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
