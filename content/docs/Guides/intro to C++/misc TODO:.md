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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFRFHGXL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlW4AHD7Z8f84k%2FLMRvc2cPKBMIE%2FUPLwmnqeyVsqbvAiBdcbINkIBb0k9hmANkDbxLV%2BEYiVSuctfSyAyKgndkVSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKck0IsoE4Rs5gIiEKtwDo6sv9th6NHLR3kJRKgdF3caCqAsJVd%2FHGMA6lNy1kDSGKSxB6wqpJ34w4P%2BBCpKM5FLj9ZA2h%2BVi%2B%2FVPXs1n9aEoD0tpcwDJapSpXRfrVutnInrxw2Ovck3RUMZH3gBqPEBRANnABmdyLQlNxauPxMcwjcMmCZf%2Fq7oHpyVDabMsCKKsEEU4Sxjk%2BJJpdhZEmoRCwMHdusvz%2BcQCCvE2gL%2BfYmyabZUVKjImyFuXm1oPOcsG99lMH6bSvGLFzinZmMOekw7w5pLWuZzmHAW2ebL1zCIQ5vVtIZLV4u2tA3CGOA0xnFS4gdaFI7Xi158YfozsUPvRRUtGvxrtrrX%2F9PBb0bgwmCJMH2iOH%2FKDe%2F0%2BcpIPzApw0o5aGVQ6Dx7DRJliYboztLwaeLsu9wDWlodHT5vs4XQB9U30MZNVlBIglhGgWA95yEbXu8OSeBEhKEhUho2U9TI3HDPB5Z1dzL95LG%2BujaQlJf2%2BH71%2BM6OwRAbKAcL0bexRyed7phwt%2B20uazjFqc1uISEaR%2FhhY6IQuktmTeG5yn%2B5sqPvj%2Fr5zNZQhTjf4vOaglYXQ%2BdPi6gfBzU%2Fk9vB5A%2F1l2iGbFf4j5ddu9t%2BKdq70csfT3zGkVz1nevXxLs40t4w4beuxAY6pgG5sLhG6paqOvfL8SVqWjo6Oxz8U%2B6BHrkJs6cskRsi15sBw4g4E1vXKfWr1wybzB9ToRmtGGCn%2FyQ0Iw0hZ94XjueKjCQYNeEk0yvEsFWuMMo0SbiP9e5zpJNTIOog5aHvmyDhiH60JVqjtd093%2FkLILz2lbKixPevv1w53fUKrWaJjvZtwAFN6rC5twmT%2FLofZ5twZ8eefOxC1H3cdKGTRQeH3cvM&X-Amz-Signature=e1f2cdd3dba0b71b1ea6ca2829632111740c03b0d6fce11bd8a4ba7b7e1fd48d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFRFHGXL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlW4AHD7Z8f84k%2FLMRvc2cPKBMIE%2FUPLwmnqeyVsqbvAiBdcbINkIBb0k9hmANkDbxLV%2BEYiVSuctfSyAyKgndkVSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKck0IsoE4Rs5gIiEKtwDo6sv9th6NHLR3kJRKgdF3caCqAsJVd%2FHGMA6lNy1kDSGKSxB6wqpJ34w4P%2BBCpKM5FLj9ZA2h%2BVi%2B%2FVPXs1n9aEoD0tpcwDJapSpXRfrVutnInrxw2Ovck3RUMZH3gBqPEBRANnABmdyLQlNxauPxMcwjcMmCZf%2Fq7oHpyVDabMsCKKsEEU4Sxjk%2BJJpdhZEmoRCwMHdusvz%2BcQCCvE2gL%2BfYmyabZUVKjImyFuXm1oPOcsG99lMH6bSvGLFzinZmMOekw7w5pLWuZzmHAW2ebL1zCIQ5vVtIZLV4u2tA3CGOA0xnFS4gdaFI7Xi158YfozsUPvRRUtGvxrtrrX%2F9PBb0bgwmCJMH2iOH%2FKDe%2F0%2BcpIPzApw0o5aGVQ6Dx7DRJliYboztLwaeLsu9wDWlodHT5vs4XQB9U30MZNVlBIglhGgWA95yEbXu8OSeBEhKEhUho2U9TI3HDPB5Z1dzL95LG%2BujaQlJf2%2BH71%2BM6OwRAbKAcL0bexRyed7phwt%2B20uazjFqc1uISEaR%2FhhY6IQuktmTeG5yn%2B5sqPvj%2Fr5zNZQhTjf4vOaglYXQ%2BdPi6gfBzU%2Fk9vB5A%2F1l2iGbFf4j5ddu9t%2BKdq70csfT3zGkVz1nevXxLs40t4w4beuxAY6pgG5sLhG6paqOvfL8SVqWjo6Oxz8U%2B6BHrkJs6cskRsi15sBw4g4E1vXKfWr1wybzB9ToRmtGGCn%2FyQ0Iw0hZ94XjueKjCQYNeEk0yvEsFWuMMo0SbiP9e5zpJNTIOog5aHvmyDhiH60JVqjtd093%2FkLILz2lbKixPevv1w53fUKrWaJjvZtwAFN6rC5twmT%2FLofZ5twZ8eefOxC1H3cdKGTRQeH3cvM&X-Amz-Signature=c0aadbbf93c8d1acd2d62d7fb62616ed3c03247b3756e2d9894b9dc4eceb2b32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
