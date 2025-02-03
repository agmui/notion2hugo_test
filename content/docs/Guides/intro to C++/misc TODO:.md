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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647FVVOWF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD5I2%2FEyYgvO%2FbTAcdSJRBa%2FoRPlHO3J0Z6Drfe84tZggIgW%2BV7tn3PjbIFRLGn4on2mHFKP88iXSZOVNevwTa43lMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDN7F5leinOPIB091vircA7feWmS%2FLR9CDtm9Xi7FqUXDODfcpdWMUTGsODgtaVEzEjtqsnxmEHEKj4hYLCn7Bm%2FS7syEa5mAV%2BvtNIbccb5%2FZbgsyKGOuSHSBnUK7Kf1TGITbx0wDzt0bm%2FZBSi7KMbiCFUUVrNY%2B6HA4dA0sU7%2BCjf3qu8F3Kq8VG4Kbjzknaes3xaRXTF5dZYX74tIdp0KMSS%2BjUyqOpoL8j3dkQdxMXAtVUV91%2BDqdHI7Sn8iMSMqQB4zIzx2h2XpWKYT0DMaRjYuE%2FxWRPli4ig3S9O6Pc9zxanB8gCXQcvajeZWhKDkTTyI0WtHj3NrOsaIuXhQSTvEdh0r9j5w9AN6TUP9FIAWUkPmefukG3Alh%2BbgmWhbA0Ayk%2FefSfgVL6%2Bol6lRxtPJHfbx2OqhRl1nUN%2FM7nIfaB%2ByEW3YLYlO5VD8jDVD%2BuhppJs9POgL%2B%2FMAglWxi2qsbyiIrmqQldviYeZ%2FwtkWIjQyfZxB759bY3RSMsGOqF8CbPliCZKi%2B4UVLGNYTOhDxXECHERw4vfJIzY2Z2Kqm4vMxgglapgHmOBkhgS9RD3BEVlR8j0me3On4QRzKre7uhdFgWFsZI2VaXXvRH81y5Rb6JuKPoBL%2BoJAvXonjNcN0iiGhfabMP2Uhb0GOqUBr%2FuUn52zDyOP39w4pi622byHvc6KpAf10q1uMcZCMVP3g5T4wv8Xh4s1JlqqiNRCbMkfVOkomV%2BobsQxlzjFKOVsQhapsX8wsiayOZQgmT9AkolVsoBBIgLUpz7Mde%2FQxH4rlSVfWxpFOXiYHfNRaMHKZtQDTOaxh5QLnvQgTGqCUShs2PtLHQrluFGdOTG%2FCfpC9b2Tp72fim4Ou0BnsRrk9wWc&X-Amz-Signature=479fb265d7dad3729e06e84389ea2038e976665670f226d92be22446a5189c44&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647FVVOWF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD5I2%2FEyYgvO%2FbTAcdSJRBa%2FoRPlHO3J0Z6Drfe84tZggIgW%2BV7tn3PjbIFRLGn4on2mHFKP88iXSZOVNevwTa43lMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDN7F5leinOPIB091vircA7feWmS%2FLR9CDtm9Xi7FqUXDODfcpdWMUTGsODgtaVEzEjtqsnxmEHEKj4hYLCn7Bm%2FS7syEa5mAV%2BvtNIbccb5%2FZbgsyKGOuSHSBnUK7Kf1TGITbx0wDzt0bm%2FZBSi7KMbiCFUUVrNY%2B6HA4dA0sU7%2BCjf3qu8F3Kq8VG4Kbjzknaes3xaRXTF5dZYX74tIdp0KMSS%2BjUyqOpoL8j3dkQdxMXAtVUV91%2BDqdHI7Sn8iMSMqQB4zIzx2h2XpWKYT0DMaRjYuE%2FxWRPli4ig3S9O6Pc9zxanB8gCXQcvajeZWhKDkTTyI0WtHj3NrOsaIuXhQSTvEdh0r9j5w9AN6TUP9FIAWUkPmefukG3Alh%2BbgmWhbA0Ayk%2FefSfgVL6%2Bol6lRxtPJHfbx2OqhRl1nUN%2FM7nIfaB%2ByEW3YLYlO5VD8jDVD%2BuhppJs9POgL%2B%2FMAglWxi2qsbyiIrmqQldviYeZ%2FwtkWIjQyfZxB759bY3RSMsGOqF8CbPliCZKi%2B4UVLGNYTOhDxXECHERw4vfJIzY2Z2Kqm4vMxgglapgHmOBkhgS9RD3BEVlR8j0me3On4QRzKre7uhdFgWFsZI2VaXXvRH81y5Rb6JuKPoBL%2BoJAvXonjNcN0iiGhfabMP2Uhb0GOqUBr%2FuUn52zDyOP39w4pi622byHvc6KpAf10q1uMcZCMVP3g5T4wv8Xh4s1JlqqiNRCbMkfVOkomV%2BobsQxlzjFKOVsQhapsX8wsiayOZQgmT9AkolVsoBBIgLUpz7Mde%2FQxH4rlSVfWxpFOXiYHfNRaMHKZtQDTOaxh5QLnvQgTGqCUShs2PtLHQrluFGdOTG%2FCfpC9b2Tp72fim4Ou0BnsRrk9wWc&X-Amz-Signature=5049e69b8673c0d664a482f7f2eed1fd9e5d1e5451bdf0c96bf8aee0d652e439&X-Amz-SignedHeaders=host&x-id=GetObject)

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
