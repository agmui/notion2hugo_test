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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZSU2AWL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCOWDWaFKEIHHh6r562XaJo4JnQmZ%2FPYOobwstWdVeZcAIhAK9iRnz8RsV%2BClLfslzW0zcOm7%2FP7ISP14%2FXRJLN05omKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJvcDoL7M7EfAby1Uq3AM8%2BJdM%2FVnuTH2ewpY5Tv6eHSvVHCHDe4HBuA1FGwuvnCmEyDRn3w40NLenXWFsjRp6H0NzBBPUSWtLcT0Lu3VxTR5by3ng0vIsNIIkbP%2BTdHy6vb9AXc7yEVfMwJkRnFnerwQl8R8DsE5zs%2ByIz%2F4lHSKrbSUNCyurNwzhikNfuKqTGqrVdv06maZWm0NQLSgxEvWayz5C1Kt2slUv%2FK34ZtV66K5HG%2FHH6ZzOC1ITbqePaL3HMgwCWy6u212RMVzH2KObZdF8ufdoiFCThVOSLBGdGgQtN167PQAuwTSj5xSXUAOBDpnTs1TDXWfcSIeJvl5odnqpwyaQkzZr1Ra1OYZhk0iswIxf4Y%2B5m%2FAIkQfIksb4rWR2aaBmWskK9br47jz7I5fV1RI2ISs1tdn66yK1xHNm4iP2VsgxfR%2FbAlvEy%2B%2BNPvH4r1QFbRjkrJwjOD7I2a8FSp3bW3M9m%2FhIwkhg59Fm3Nw84thm0NmjkVEQ9ZxGXNQLFyXeMrsh9KfAeDqQyvBBRQjF0W3D4g7hpMK%2BU7jdyTQLzUdr9RNlwUfHckBQqOCuIMCv82c5MxzhhRpFzO4L8jX6Jpd1n8jU5ChHwZEAeIR93%2FKcOlLpXoWpYJcUlcWZLH66FjCSnYjBBjqkAfy3bcspfXWIWdx4eP%2BQ5%2FzZXpriDwEQuuQc0rSnYw6bED9efUYhhghyqBnCDTOdBba48l7bA7%2BCI9%2BooQPlNH4krPGKrzaMfNmN0fzZIF%2FP9AqOGHS6ZvETbDzaNmsYdljKwVbUAy3SWXQZIwwa%2Fk5wKwNP0eWPgQQyN2zyUsCi%2F65g8FtIZdZIuMG7ThRwwmh2wD0ICg7OWcT4DLHvIWUkk%2Fvc&X-Amz-Signature=edee3e876c9c6114449f608402f39216ab48f31cf32d1342fd96de09c00d29d4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZSU2AWL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCOWDWaFKEIHHh6r562XaJo4JnQmZ%2FPYOobwstWdVeZcAIhAK9iRnz8RsV%2BClLfslzW0zcOm7%2FP7ISP14%2FXRJLN05omKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJvcDoL7M7EfAby1Uq3AM8%2BJdM%2FVnuTH2ewpY5Tv6eHSvVHCHDe4HBuA1FGwuvnCmEyDRn3w40NLenXWFsjRp6H0NzBBPUSWtLcT0Lu3VxTR5by3ng0vIsNIIkbP%2BTdHy6vb9AXc7yEVfMwJkRnFnerwQl8R8DsE5zs%2ByIz%2F4lHSKrbSUNCyurNwzhikNfuKqTGqrVdv06maZWm0NQLSgxEvWayz5C1Kt2slUv%2FK34ZtV66K5HG%2FHH6ZzOC1ITbqePaL3HMgwCWy6u212RMVzH2KObZdF8ufdoiFCThVOSLBGdGgQtN167PQAuwTSj5xSXUAOBDpnTs1TDXWfcSIeJvl5odnqpwyaQkzZr1Ra1OYZhk0iswIxf4Y%2B5m%2FAIkQfIksb4rWR2aaBmWskK9br47jz7I5fV1RI2ISs1tdn66yK1xHNm4iP2VsgxfR%2FbAlvEy%2B%2BNPvH4r1QFbRjkrJwjOD7I2a8FSp3bW3M9m%2FhIwkhg59Fm3Nw84thm0NmjkVEQ9ZxGXNQLFyXeMrsh9KfAeDqQyvBBRQjF0W3D4g7hpMK%2BU7jdyTQLzUdr9RNlwUfHckBQqOCuIMCv82c5MxzhhRpFzO4L8jX6Jpd1n8jU5ChHwZEAeIR93%2FKcOlLpXoWpYJcUlcWZLH66FjCSnYjBBjqkAfy3bcspfXWIWdx4eP%2BQ5%2FzZXpriDwEQuuQc0rSnYw6bED9efUYhhghyqBnCDTOdBba48l7bA7%2BCI9%2BooQPlNH4krPGKrzaMfNmN0fzZIF%2FP9AqOGHS6ZvETbDzaNmsYdljKwVbUAy3SWXQZIwwa%2Fk5wKwNP0eWPgQQyN2zyUsCi%2F65g8FtIZdZIuMG7ThRwwmh2wD0ICg7OWcT4DLHvIWUkk%2Fvc&X-Amz-Signature=6617b0f64e102d85c16ce5dbe63110f48b072bd4d897a10c86c54d1f1989532a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
