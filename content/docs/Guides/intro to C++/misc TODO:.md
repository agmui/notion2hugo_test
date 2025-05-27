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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BQVMOQR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAaDJRJXIfZIr5KboYKDyP1Fne1r2XR3cosCiu4qHjpXAiB%2Bp6QqDms95vk44SV9cP4oYDnK8awi123%2FAK0d0jDzVyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMOrtmfoYrrz0MooXkKtwDKH366gcyN7bqFVeDehZrsCFMLgwgHtuZ41e%2FcwZ5rnAWE3r0NtHH5UHqt2Fvzvy0y%2FVL4d01xht0k%2Bv2f4C5L0OLXjTkZZYypxWhwlDSoAPVxJytHq72gUdTEkZghiY%2FeYw1UNvMIAF%2FlkmIeer4Cg0YAEx03gUO1cOgRqnEa8YWhkWbNi5Dcppa0T02vweLVdNUO4BmL6TlKFPs%2BhX0zkDvZqbUoss0WVqItW8l1mG3Gm%2FddBU2cw5VKF3OK%2B1t05lLjJAEUKKdx0AsT6cf%2FYM1Mtnlzuwc7Wz58tYATufGBnEUzIoGMsdbS%2BoxgxDJ1d%2FpNNA8xwc22Pdzo%2Faf6TnnomMDn6VQoXCPbC0xxRBY3R9w4FSbWlIKqWMM%2BhAKeSt4QfmcFDIVoW8Hf9dvYcGNkzMN5oRGv4SMauxWM%2Bp94TgigUzfhBnCy3axc8kh55h9q5tbIOrNvJ036PSJLJjakwch0vWO1TjONVhpAwBVXGz14llBoqPSJWIjxAik%2FDVm2N6pH9uEo7zG7ddzrQyI8o25pLd%2Bf%2BCCVyTwSVWuz%2F4XQ9h6AbfJ5GgIdcrsjZeN%2FdcPjDa1HWAtMldjjRQcszW%2FQRJfyuNQ65TljtP%2BSvu0Cs3RRBboEX4w54PUwQY6pgFZ5NmPhyqCxKqZ8GkRrdHL6hHjFXgy7zfLWum2m2YRW1rXA9c1qTOfvxTD9JoWuFej4Qpx7vl53eku2sLg4KdWPpqc4%2FWTRftX23pF6iM5deD4xjrRXYyLWx30glthXbJVuaJDd21DhfLfLsDy2w1fwc3876BkAo1nurXveUZSO5KtNKrp1u6qs4%2Bx54MyAUPpPT7u4nhzdLkavggYM%2B7JogehNsPd&X-Amz-Signature=38a3a143ce938e31078c7116845eeb7cf9d0ffe30b67669dc6f177599f9915cb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BQVMOQR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAaDJRJXIfZIr5KboYKDyP1Fne1r2XR3cosCiu4qHjpXAiB%2Bp6QqDms95vk44SV9cP4oYDnK8awi123%2FAK0d0jDzVyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMOrtmfoYrrz0MooXkKtwDKH366gcyN7bqFVeDehZrsCFMLgwgHtuZ41e%2FcwZ5rnAWE3r0NtHH5UHqt2Fvzvy0y%2FVL4d01xht0k%2Bv2f4C5L0OLXjTkZZYypxWhwlDSoAPVxJytHq72gUdTEkZghiY%2FeYw1UNvMIAF%2FlkmIeer4Cg0YAEx03gUO1cOgRqnEa8YWhkWbNi5Dcppa0T02vweLVdNUO4BmL6TlKFPs%2BhX0zkDvZqbUoss0WVqItW8l1mG3Gm%2FddBU2cw5VKF3OK%2B1t05lLjJAEUKKdx0AsT6cf%2FYM1Mtnlzuwc7Wz58tYATufGBnEUzIoGMsdbS%2BoxgxDJ1d%2FpNNA8xwc22Pdzo%2Faf6TnnomMDn6VQoXCPbC0xxRBY3R9w4FSbWlIKqWMM%2BhAKeSt4QfmcFDIVoW8Hf9dvYcGNkzMN5oRGv4SMauxWM%2Bp94TgigUzfhBnCy3axc8kh55h9q5tbIOrNvJ036PSJLJjakwch0vWO1TjONVhpAwBVXGz14llBoqPSJWIjxAik%2FDVm2N6pH9uEo7zG7ddzrQyI8o25pLd%2Bf%2BCCVyTwSVWuz%2F4XQ9h6AbfJ5GgIdcrsjZeN%2FdcPjDa1HWAtMldjjRQcszW%2FQRJfyuNQ65TljtP%2BSvu0Cs3RRBboEX4w54PUwQY6pgFZ5NmPhyqCxKqZ8GkRrdHL6hHjFXgy7zfLWum2m2YRW1rXA9c1qTOfvxTD9JoWuFej4Qpx7vl53eku2sLg4KdWPpqc4%2FWTRftX23pF6iM5deD4xjrRXYyLWx30glthXbJVuaJDd21DhfLfLsDy2w1fwc3876BkAo1nurXveUZSO5KtNKrp1u6qs4%2Bx54MyAUPpPT7u4nhzdLkavggYM%2B7JogehNsPd&X-Amz-Signature=39902d9ff2b776d3b70f9380b53cb65d53f2909e34054e7b0693d8787cafbca4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
