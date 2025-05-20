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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5R7CINW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGTWguwn7OOC3Kx1AtBJq2bhmjxIvmT0nW5mO3qr0FxAiBBhegWUXmsNOsGgydGtHfxovp9E2oYPb1yLAweznaVzSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcHW33uoNuorz4AylKtwDrxpQU2QZqpEb%2B6Ck1g4GFOIQJXxu%2Bbrwxq%2FvOc0C7%2FKiYo12ZYJdGHbJX%2FOPRbMEnbUwUkFtzMRYYBkGHXcr8VSVJ7oEYZMxIybQ0%2BW4gPZbgcyxiM%2FdPxJSRJG4mFGi%2BosuP44NdjyrQcfG8zwUMCW0BNmeUr1ZNBfrwAKLpmg%2FIdm%2FDuAdkfk99pdXiUVzTnCBswkesNh2cPd8%2FVbcU%2BTKYUVPScrsp8m5LZWUV6upbRT%2BsBvjKtq0MQMOmYsm4Ix7FyOxu9eAH%2FkL7otFgp3dW1v%2FSoI6p%2FWsyOA11QXZ5joa0njpRAIMkg2aO73p%2F%2FnnNQzgFJlJNT4AM9asoAouRgTh0NjSn8ZbSJCkH8r53la2HSXv6v%2FecDGuW3Kk22jyTfJbDDFtLx%2Fo%2FvpTgdAvBs6gq1udZtJRvAufAfju4gn7MmEA9MHLZLEtHrnv4qSXXIz2XG5TOmJxY8Hv0h7LIxiekU%2F3BA%2Bj2zfxWDgQfoLJDpjntwdCBLUWNVKQ2xvbu9S%2FXGMduJnZrk0UlHbyM3A5QKkso2s0%2BMD0nplGGjhrgnyTn19s8mEb9WAeAzhTGzGA%2B3VLQPGVkPjyPu%2FpALJJJOBMvaD%2BxFhi00xyg0hukB%2BYC2dnFEcw1JeywQY6pgE4rrZIWo6qp9%2BSOLYaFcJgeAQPXowCzwDNDQxbVFiaT3vyLpW1hqrd%2F1jmvAHvVuSSzdLeefX2fhtn2Fb3yKSwA1%2B4LmodT9dhFShmEpk3bBKeLC6coY0IeaMLmm4UKlQUqjFOJcMrxomQriMKFK3g%2BqKm93Xg5cFlTbIDErZOxnEH68rzSfAdY51Mfrz3wSQrYOHlMGf5VSNeL89Yhg3F1ivein49&X-Amz-Signature=61087b5e26e99d73a1074efc1da51c2ec620e578a2ed55a012b7b5d930ddc52f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5R7CINW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGTWguwn7OOC3Kx1AtBJq2bhmjxIvmT0nW5mO3qr0FxAiBBhegWUXmsNOsGgydGtHfxovp9E2oYPb1yLAweznaVzSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcHW33uoNuorz4AylKtwDrxpQU2QZqpEb%2B6Ck1g4GFOIQJXxu%2Bbrwxq%2FvOc0C7%2FKiYo12ZYJdGHbJX%2FOPRbMEnbUwUkFtzMRYYBkGHXcr8VSVJ7oEYZMxIybQ0%2BW4gPZbgcyxiM%2FdPxJSRJG4mFGi%2BosuP44NdjyrQcfG8zwUMCW0BNmeUr1ZNBfrwAKLpmg%2FIdm%2FDuAdkfk99pdXiUVzTnCBswkesNh2cPd8%2FVbcU%2BTKYUVPScrsp8m5LZWUV6upbRT%2BsBvjKtq0MQMOmYsm4Ix7FyOxu9eAH%2FkL7otFgp3dW1v%2FSoI6p%2FWsyOA11QXZ5joa0njpRAIMkg2aO73p%2F%2FnnNQzgFJlJNT4AM9asoAouRgTh0NjSn8ZbSJCkH8r53la2HSXv6v%2FecDGuW3Kk22jyTfJbDDFtLx%2Fo%2FvpTgdAvBs6gq1udZtJRvAufAfju4gn7MmEA9MHLZLEtHrnv4qSXXIz2XG5TOmJxY8Hv0h7LIxiekU%2F3BA%2Bj2zfxWDgQfoLJDpjntwdCBLUWNVKQ2xvbu9S%2FXGMduJnZrk0UlHbyM3A5QKkso2s0%2BMD0nplGGjhrgnyTn19s8mEb9WAeAzhTGzGA%2B3VLQPGVkPjyPu%2FpALJJJOBMvaD%2BxFhi00xyg0hukB%2BYC2dnFEcw1JeywQY6pgE4rrZIWo6qp9%2BSOLYaFcJgeAQPXowCzwDNDQxbVFiaT3vyLpW1hqrd%2F1jmvAHvVuSSzdLeefX2fhtn2Fb3yKSwA1%2B4LmodT9dhFShmEpk3bBKeLC6coY0IeaMLmm4UKlQUqjFOJcMrxomQriMKFK3g%2BqKm93Xg5cFlTbIDErZOxnEH68rzSfAdY51Mfrz3wSQrYOHlMGf5VSNeL89Yhg3F1ivein49&X-Amz-Signature=d117f8d4b3131cfb923f9b7dc5e798b849784b53a11cad9b06ca264867bb4b5c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
