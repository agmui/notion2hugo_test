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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPTD3FUC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAxJVTAGR0%2FAnVpIsQVXkGrs09rvsq7kNetws%2FmoXzzeAiBeH%2FwlH3bZQ%2BCvNi7r79fBFVDc1tZdGrUWEgV4zvvyMSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMryHlOBqpWS27UJgrKtwDz94F5F1in4J%2FXwI8NFVqiZ8Xz5SsMGs55QGh%2F7Dl7w4pkFUIvWugMDA6jlURK28TuSjh88m5CovjNgrgdmWyKkgiq%2BKuSmvOHGqG3%2B93JCrk%2BBUfEpL4CgL0TD3XJuvnu52ctoqwsS3LAMn6M5Trk12SIkbU8ZP4KHJkPVPNje%2Fl25%2Fc0hLwIclqRd9lDpTDcF2%2B%2BI0N%2BHDLiXFIx03rsTe%2FgHozSfuhoVwDU02TLUuicLl0PfmL32DU4ZcR5nKhzWE8zLw0F63zQb717IYCMYhex0Al7QDIRil3vVenjiRBvyzuavca6EKPVXnWgzJv5JniGLpUWYCaaw1CKwlqyWGy517zouJNjUxbwaIFbApmMrA98C1zthErI2bAVnAC3vvMVZWQlbDIjQi7E%2FWKJ1cEpYiHNUPaj86lPeC7XzVMANty1UgI4mMmmeV7V9bQ9KkfhWsHR5I127mfsX55PXhtv17W1BjvA5Ft6%2F%2BGX92n94DPP5JvWFv%2BiTi721Y1OL2%2BX%2F4%2FgMPpUtmcpt96ICRlyghbtq3BYOLy%2Fz7NDnH8ZBzEhp6MjHND2kBfQg1tRaEHPuVUoG6jT7XJgB3y9Z8b5i2j9jX5Oy9SjcKegBRBo4OJETpBFYuqsGowquKRxAY6pgH4hdOqeFBxrbaNcUEBuc1k94%2FHv7tKRmcWnpyMpJgZnJSXuLD8Rn7BuafUez1cNaTCiBwfh9PslWvUxkJygvK3Tqu6N94mJCm5COn8iogquWAGtGEwUQR6Sssze7auNne8yDPhg6E%2FcGZR4lkZEU158Je3VgK%2FJLx3GfT22CJtbIAN0omNh%2Fsp9TU%2FAgfT7T73k7FcfLvuZ%2FQXIiVU7HR7olKfq%2B4M&X-Amz-Signature=7dd9b8bc1d797e99fc34182ad3b187b893adea433a888a544c7eb073133050d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPTD3FUC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAxJVTAGR0%2FAnVpIsQVXkGrs09rvsq7kNetws%2FmoXzzeAiBeH%2FwlH3bZQ%2BCvNi7r79fBFVDc1tZdGrUWEgV4zvvyMSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMryHlOBqpWS27UJgrKtwDz94F5F1in4J%2FXwI8NFVqiZ8Xz5SsMGs55QGh%2F7Dl7w4pkFUIvWugMDA6jlURK28TuSjh88m5CovjNgrgdmWyKkgiq%2BKuSmvOHGqG3%2B93JCrk%2BBUfEpL4CgL0TD3XJuvnu52ctoqwsS3LAMn6M5Trk12SIkbU8ZP4KHJkPVPNje%2Fl25%2Fc0hLwIclqRd9lDpTDcF2%2B%2BI0N%2BHDLiXFIx03rsTe%2FgHozSfuhoVwDU02TLUuicLl0PfmL32DU4ZcR5nKhzWE8zLw0F63zQb717IYCMYhex0Al7QDIRil3vVenjiRBvyzuavca6EKPVXnWgzJv5JniGLpUWYCaaw1CKwlqyWGy517zouJNjUxbwaIFbApmMrA98C1zthErI2bAVnAC3vvMVZWQlbDIjQi7E%2FWKJ1cEpYiHNUPaj86lPeC7XzVMANty1UgI4mMmmeV7V9bQ9KkfhWsHR5I127mfsX55PXhtv17W1BjvA5Ft6%2F%2BGX92n94DPP5JvWFv%2BiTi721Y1OL2%2BX%2F4%2FgMPpUtmcpt96ICRlyghbtq3BYOLy%2Fz7NDnH8ZBzEhp6MjHND2kBfQg1tRaEHPuVUoG6jT7XJgB3y9Z8b5i2j9jX5Oy9SjcKegBRBo4OJETpBFYuqsGowquKRxAY6pgH4hdOqeFBxrbaNcUEBuc1k94%2FHv7tKRmcWnpyMpJgZnJSXuLD8Rn7BuafUez1cNaTCiBwfh9PslWvUxkJygvK3Tqu6N94mJCm5COn8iogquWAGtGEwUQR6Sssze7auNne8yDPhg6E%2FcGZR4lkZEU158Je3VgK%2FJLx3GfT22CJtbIAN0omNh%2Fsp9TU%2FAgfT7T73k7FcfLvuZ%2FQXIiVU7HR7olKfq%2B4M&X-Amz-Signature=be08964d162399fd5291cc1be84811ff8aa0c91bf878082ae071bcc8acbfb8b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
