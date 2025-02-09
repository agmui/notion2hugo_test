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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRY23FRB%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZX3PvNGvIYgegSSTYHD4Qc7FRpt%2F53w566gto1%2BC1HAiAmG%2FfZ8VuH54cvpu%2BK%2BqZPJ2yBxEzJouURs12HaRFxJCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDZoXtR72lb6VGYFGKtwDZ1pc%2BBUj83XriJj%2F3wSBoy6ogK3MGkzAYOLscX0wVWT%2FUWLCxt%2F8uBNEOASOBSAqVMakb3w9XMMONE%2Fp0%2Fo4IZBhbRXxiqvEwoP4YZqCOsZ5LVmPUEhweMYvsbmRt0bXmeDVYER3ImYPh3TubY8i4dx0gnvf4YvG0uHPousULGOIUTc5KFMvvdL%2F7gYmGywrfRJSCS183DrlRk2xBy7LwRVQvuN2cegL0QpfG1d4E%2FcI0zZ7aQ3Go1vK%2BjN5JnFPg5CIJrtdSVNB5VUFMT2sLxQds4%2Bu9zVz3I8A3W%2FZDSqNoCjLYv9t7Nkuw6a2vnMp4MHpMxv0NLMN0h1f974nZOO1619P9JQROslLi5P4P3aDvEN5PVNBw72ubbtJ7lRGnWnz59vPkhInBvL3Cr1HPVT7YLiX69pwbTShdYg5aFuZ6dobp6c4rqNv1V831oFtl6jMiLDAN7SgqwsRpJfRX7uM%2F0pFEbKjk0VBFzlyweNOVVE1PDTvqfq3uw%2BW5lvjg6NJoZYcxy%2BoT%2FgRY%2FHPKvhBEJbIv64C33euP%2Bh9be8gz431OcJ2tDhJzOA8u3q0JoZlnmGveDmnSicXypY%2BVE7%2Bq%2FxRivjYqUnGVGEhhRv6b3MwQu6lJs8qiyUw676gvQY6pgH1xwhoCQ%2B34IN6apBaLvrhdDfWDTNGhN0OSnje%2Fw%2B1hx5bEOy7UsAw7NWmEWNpP%2BwNcqPZNs0MA4jie5S2TaKj76pIvH8XXsSPh6vKE4OGrAggROQQXxPMzSuYucyTTU3jXQ0EjQ0um3lpemsxjtpzBLhCCVKp%2BTVvSAqoi3SU4Q4ZsTaca7M7LDG7rK1EfjvmnnC0KFv4Ijf15oe%2F9SnWchNweqI6&X-Amz-Signature=d77372ae98000b575566681e7d01bae4552c37ca5b939ea791d6316aee8a79f7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRY23FRB%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZX3PvNGvIYgegSSTYHD4Qc7FRpt%2F53w566gto1%2BC1HAiAmG%2FfZ8VuH54cvpu%2BK%2BqZPJ2yBxEzJouURs12HaRFxJCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDZoXtR72lb6VGYFGKtwDZ1pc%2BBUj83XriJj%2F3wSBoy6ogK3MGkzAYOLscX0wVWT%2FUWLCxt%2F8uBNEOASOBSAqVMakb3w9XMMONE%2Fp0%2Fo4IZBhbRXxiqvEwoP4YZqCOsZ5LVmPUEhweMYvsbmRt0bXmeDVYER3ImYPh3TubY8i4dx0gnvf4YvG0uHPousULGOIUTc5KFMvvdL%2F7gYmGywrfRJSCS183DrlRk2xBy7LwRVQvuN2cegL0QpfG1d4E%2FcI0zZ7aQ3Go1vK%2BjN5JnFPg5CIJrtdSVNB5VUFMT2sLxQds4%2Bu9zVz3I8A3W%2FZDSqNoCjLYv9t7Nkuw6a2vnMp4MHpMxv0NLMN0h1f974nZOO1619P9JQROslLi5P4P3aDvEN5PVNBw72ubbtJ7lRGnWnz59vPkhInBvL3Cr1HPVT7YLiX69pwbTShdYg5aFuZ6dobp6c4rqNv1V831oFtl6jMiLDAN7SgqwsRpJfRX7uM%2F0pFEbKjk0VBFzlyweNOVVE1PDTvqfq3uw%2BW5lvjg6NJoZYcxy%2BoT%2FgRY%2FHPKvhBEJbIv64C33euP%2Bh9be8gz431OcJ2tDhJzOA8u3q0JoZlnmGveDmnSicXypY%2BVE7%2Bq%2FxRivjYqUnGVGEhhRv6b3MwQu6lJs8qiyUw676gvQY6pgH1xwhoCQ%2B34IN6apBaLvrhdDfWDTNGhN0OSnje%2Fw%2B1hx5bEOy7UsAw7NWmEWNpP%2BwNcqPZNs0MA4jie5S2TaKj76pIvH8XXsSPh6vKE4OGrAggROQQXxPMzSuYucyTTU3jXQ0EjQ0um3lpemsxjtpzBLhCCVKp%2BTVvSAqoi3SU4Q4ZsTaca7M7LDG7rK1EfjvmnnC0KFv4Ijf15oe%2F9SnWchNweqI6&X-Amz-Signature=83a2e90eaaace6b643f6a4898148f092199497b8dce075db029e93ad57de5a16&X-Amz-SignedHeaders=host&x-id=GetObject)

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
