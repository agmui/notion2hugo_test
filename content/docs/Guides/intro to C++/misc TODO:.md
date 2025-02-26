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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7YY423K%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDFbX9BBOkGgzWK%2F6PE%2FaEibPOJpU%2BiJDNnB9bE2nAg1wIgVHrvTISeQiwOKOI%2BF%2BifLybrbHswVHBs2sQliRNzuXoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHzD9fnht%2BdwkP%2FmbircA4wGpDAdsIY0wSmaYDg7v2GONaj10cLEnnXCetkXHmcjGuWuEjHSG0OldZwBYfqSZi3AeYbNAHWjydvqjMFWsQ0LOuOJl5YTKJl%2F1vDdzXhp%2BLrGPjDrFbPqgKrGyBU4ydRoDhSxnqRGWaQPx0hJGzu%2F17JTJpFhttVIswIOZfK2xEx6SZB0ijhxSiuu8g9AcfmUt7dOgcnSRkXJjbiUEB2x8nQBowe8nZiEjYkxFZDsLaMfFmOMtV6qzyKuAZTJbCEweD6lupWYrh6C4syNWIRiXGkwkBUw2H5S4u%2FiYWljmLzPAb4uEMMTAEFJyNYKtaHIlNuGIWxhSY1w49V3Z18LOT6qtegcU%2F7GwA2%2Bm%2BExyam19h7jykuS9RjxV7oU2rpORyL5HThgEVnUQ%2FQE3A%2BFYVmAooZgdk8MR%2F4lA7sZakSGGZVxhH7QdR92jZR98%2Bp%2B5p51mKYo0F8mj1LK7k4%2FCyJRJC6XE5IfTFQhcqyRcAxyklLnkthtuz2SroUF3THS3AMi1A6VCB9X%2FPlWefn3HK1OOjfdQEep5nzOFA9CdVgd%2BP8sfZY71eM6MAkeJs1nFeoJhWaGPgZkEL5MnSc5LJbY9%2FOFQFcujhv6Ns5mCDx%2FAcb8IrACiS73MOi8%2Bb0GOqUBJTng68dn90HVXquIFTNXJfbw6eI4dn64fFX0L0tCMb4bcu2RyeK1ZusK0vICUgqUNII3a8Eb%2BR7d2oHIgOvYrEDSMRCvl8akZvAEuq%2FoKfyt1GANsa6oUqUDbBVKXxrxmUQBV3q7LzwXmbkEz3IqQiD6pq%2ByxdVmUf%2FbeVXuJCsuMtVdojGmh6trVFt31kI%2BpADEgi0waxVqzqVACrmQLhsDakT%2F&X-Amz-Signature=5ee14963b855ad5346f6616e552cd63c685d73baf19f650d2465014544b3f2ad&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7YY423K%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDFbX9BBOkGgzWK%2F6PE%2FaEibPOJpU%2BiJDNnB9bE2nAg1wIgVHrvTISeQiwOKOI%2BF%2BifLybrbHswVHBs2sQliRNzuXoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHzD9fnht%2BdwkP%2FmbircA4wGpDAdsIY0wSmaYDg7v2GONaj10cLEnnXCetkXHmcjGuWuEjHSG0OldZwBYfqSZi3AeYbNAHWjydvqjMFWsQ0LOuOJl5YTKJl%2F1vDdzXhp%2BLrGPjDrFbPqgKrGyBU4ydRoDhSxnqRGWaQPx0hJGzu%2F17JTJpFhttVIswIOZfK2xEx6SZB0ijhxSiuu8g9AcfmUt7dOgcnSRkXJjbiUEB2x8nQBowe8nZiEjYkxFZDsLaMfFmOMtV6qzyKuAZTJbCEweD6lupWYrh6C4syNWIRiXGkwkBUw2H5S4u%2FiYWljmLzPAb4uEMMTAEFJyNYKtaHIlNuGIWxhSY1w49V3Z18LOT6qtegcU%2F7GwA2%2Bm%2BExyam19h7jykuS9RjxV7oU2rpORyL5HThgEVnUQ%2FQE3A%2BFYVmAooZgdk8MR%2F4lA7sZakSGGZVxhH7QdR92jZR98%2Bp%2B5p51mKYo0F8mj1LK7k4%2FCyJRJC6XE5IfTFQhcqyRcAxyklLnkthtuz2SroUF3THS3AMi1A6VCB9X%2FPlWefn3HK1OOjfdQEep5nzOFA9CdVgd%2BP8sfZY71eM6MAkeJs1nFeoJhWaGPgZkEL5MnSc5LJbY9%2FOFQFcujhv6Ns5mCDx%2FAcb8IrACiS73MOi8%2Bb0GOqUBJTng68dn90HVXquIFTNXJfbw6eI4dn64fFX0L0tCMb4bcu2RyeK1ZusK0vICUgqUNII3a8Eb%2BR7d2oHIgOvYrEDSMRCvl8akZvAEuq%2FoKfyt1GANsa6oUqUDbBVKXxrxmUQBV3q7LzwXmbkEz3IqQiD6pq%2ByxdVmUf%2FbeVXuJCsuMtVdojGmh6trVFt31kI%2BpADEgi0waxVqzqVACrmQLhsDakT%2F&X-Amz-Signature=c0b4ba659f5c261a26a066f7d5f9be21e0fcecd0da4c8826da5ae8a6f0fad042&X-Amz-SignedHeaders=host&x-id=GetObject)

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
