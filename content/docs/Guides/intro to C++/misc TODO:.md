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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N4RYHGZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaecdWBJd%2BDAA8UKcxHIivlLn8rMrVrOC1xnjqfxZhwAIhAOTZ%2B71nOMSCaF6IT8Nfj3EKUbFTiKn4VDhgbTMuexAfKv8DCE0QABoMNjM3NDIzMTgzODA1IgwUcXNFxdy%2F4EU9ZwMq3AOCY%2FvvsRuIh46rtTQ9tmMNR8bTuaWtu5YpK8erdWlRVRC6UTNUkxUkgJ7AcpUzz4mHq9GS7aRY7erN9wznIwmMd3DZSmIeiqbLrJE8MlBguuRL%2BPeM%2F89kibVHVdPMm1wzxthpCRPXTrzwL%2FHmL8L07cMaHJ%2B65Q%2BDQ6rg25tFigSKnoR3JCUZBaVH3WZU4zwJdCJcuzQzAFV%2BOVEyZi8Pc8wRVjtG7s1LNN5DSnbgkS5LiEG2Lc7Eyx3vvycG%2BL8buATJ0emz5OVaj4UAtIBETuPEqK0xPav8VZNl9RcXn7Uab7fdJ3TEQv8PUDYgfxr3YcbL%2BM7xpUWUFlQTElyhUalyxOu5C85DP4knXyEGtt3L2PzQ4zBn0nA8uU1JCmsyyeT8jrGR8u0JSbLYotN48QXoOdRrMXWqIovkuN4MT8f6iDVBgX2Tm64UwvQ6FeFXxRTDf0prI%2BAUSEx897l7fvYc%2BEJsN9T3e3%2BXP%2BORjD6qSeXdeZmR0WZYykwmTZeuGjpRtR0S26GEYnunSl34Iw2%2FNKmn4xutVCPSNGlptQQDppYtbJ1%2B05tPNop1LZ8VKaTYFHzePfgGsZF1tlOM5jXEUv41OrRgD%2FAkFlEWk9q44xTDRGCu4o8w2DDzguK%2BBjqkATLGrc8tHHle9mvgJdZ8v7gfZueHlUxxrneZhaz3PQ71DDBR%2Bjjvrct%2BebcfM3eZ2vUQdwGEFi3Z8nZ8xwOmy%2B04fWsPIShMIIS2YewhggE5RID8DvC%2FdP5jY3wkmaQjC%2FmDM5%2FJX5hBkkXHNtCgf%2Fy%2FR8uU32nb3Xhr0NcXmUHcyalXw517Wuq1lqOLlwQwX%2FXRpg1gPGvftMp8BUD%2Fgq4Cx8H7&X-Amz-Signature=529c337e846a121f249d0fceaa7eb00b37aec4b0bb142a4e966cb4c03a70d54a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N4RYHGZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaecdWBJd%2BDAA8UKcxHIivlLn8rMrVrOC1xnjqfxZhwAIhAOTZ%2B71nOMSCaF6IT8Nfj3EKUbFTiKn4VDhgbTMuexAfKv8DCE0QABoMNjM3NDIzMTgzODA1IgwUcXNFxdy%2F4EU9ZwMq3AOCY%2FvvsRuIh46rtTQ9tmMNR8bTuaWtu5YpK8erdWlRVRC6UTNUkxUkgJ7AcpUzz4mHq9GS7aRY7erN9wznIwmMd3DZSmIeiqbLrJE8MlBguuRL%2BPeM%2F89kibVHVdPMm1wzxthpCRPXTrzwL%2FHmL8L07cMaHJ%2B65Q%2BDQ6rg25tFigSKnoR3JCUZBaVH3WZU4zwJdCJcuzQzAFV%2BOVEyZi8Pc8wRVjtG7s1LNN5DSnbgkS5LiEG2Lc7Eyx3vvycG%2BL8buATJ0emz5OVaj4UAtIBETuPEqK0xPav8VZNl9RcXn7Uab7fdJ3TEQv8PUDYgfxr3YcbL%2BM7xpUWUFlQTElyhUalyxOu5C85DP4knXyEGtt3L2PzQ4zBn0nA8uU1JCmsyyeT8jrGR8u0JSbLYotN48QXoOdRrMXWqIovkuN4MT8f6iDVBgX2Tm64UwvQ6FeFXxRTDf0prI%2BAUSEx897l7fvYc%2BEJsN9T3e3%2BXP%2BORjD6qSeXdeZmR0WZYykwmTZeuGjpRtR0S26GEYnunSl34Iw2%2FNKmn4xutVCPSNGlptQQDppYtbJ1%2B05tPNop1LZ8VKaTYFHzePfgGsZF1tlOM5jXEUv41OrRgD%2FAkFlEWk9q44xTDRGCu4o8w2DDzguK%2BBjqkATLGrc8tHHle9mvgJdZ8v7gfZueHlUxxrneZhaz3PQ71DDBR%2Bjjvrct%2BebcfM3eZ2vUQdwGEFi3Z8nZ8xwOmy%2B04fWsPIShMIIS2YewhggE5RID8DvC%2FdP5jY3wkmaQjC%2FmDM5%2FJX5hBkkXHNtCgf%2Fy%2FR8uU32nb3Xhr0NcXmUHcyalXw517Wuq1lqOLlwQwX%2FXRpg1gPGvftMp8BUD%2Fgq4Cx8H7&X-Amz-Signature=32d6bac96b155f3a1d13b1050018c6cbb4f13d9e369084af33b29ac1b540162e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
