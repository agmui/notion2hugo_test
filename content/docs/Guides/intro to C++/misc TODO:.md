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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2WWPHEV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzRUndebbX10MwHxoK0EMYIGmmOFeVBFmzNX2bqqJg1AIgK1wQwBrKc3Aa61e%2Fmb7OIgFEqC31DbrYvDPQ5yVeFJoq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMqjqQM%2F9LWFcdToPSrcAyLRJwKsR5snQPsczW81eTEwN8ZfMkH9rACzmkmVtS5DPXWdS0sVm%2F0uum69tT5ABadq1C4mRpfX7IuOgVpqYRTZRIQN7LyRNS2OzJx5ELJagnrZLARj28HuSFbCiYKRyB3f4r%2BsXAUFBKV4Qk7hz6IJ%2BATutAXUb%2B8IktnqpL88Lh%2BxpnQV8KOGZMTCz8gOhqVWWEDou65p9nAJ6DIJ96o8Ioek5iuOCR1JE0EnzlQoUFakvW7tvGU6hHtnWmlMU3KJ61YOPtcsRdg8ohk5lJSCYnlCFW%2Fswow%2F%2FbgaS3X%2Fy8j5yLqbCiPmQrfBuFff5pTKyT4T8R6OKoKIR7Qh2Bko9LCP%2BNWVwTUMe4rDpo7L467SE7JytT7xdwMZNm4prRo0Y%2FrOxcV3ub9g4Ws3Gu6iAugs6k%2Byt18HHXYOeMEQmJRwTQNejpU7aVVkw2eXXf9lSJRpmTXIMEjrVNqyzGMXtcxsFqvEkT%2Flikom3jU8ZpNixgivSwA5%2FtSzJzSpfWg31tyKDu3vtYGhD2uRpXHlIcADyRqE2Ax9VfPkUgPADc1h0%2FvhJwQiTScvyrQo4ayGAFxYlU4RLUUErMs1dpaFo7CyDHYOuaDQfY%2FsM099NzVQdBNADhyehKR3MJihzr8GOqUBCP2fNbMfpumZZ7g4UxDPsymUOt5mqvFasg5KdhilnEhTAJ2hU11CdBrKSB7VWK%2Bv1%2Fr97bKp2caaBQwugSo2u4lhQ3fcSLm7HHNh%2B1%2B%2BMn43OwaNGDYLkDZSzPP3z%2BTx9YZwQqMDFItdIZx8bVHomN73NF51sUx0E%2FBWCk3GGFdveQ2ppErGKfTVRxLc%2B1lyQa9BOEbJZxU6B8eVEYjL0%2FDGBE0c&X-Amz-Signature=1d21e8f41a8dbea9c418532dc7789e553db7e236f5a09ec5bec180ebdc5b0e5f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2WWPHEV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzRUndebbX10MwHxoK0EMYIGmmOFeVBFmzNX2bqqJg1AIgK1wQwBrKc3Aa61e%2Fmb7OIgFEqC31DbrYvDPQ5yVeFJoq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMqjqQM%2F9LWFcdToPSrcAyLRJwKsR5snQPsczW81eTEwN8ZfMkH9rACzmkmVtS5DPXWdS0sVm%2F0uum69tT5ABadq1C4mRpfX7IuOgVpqYRTZRIQN7LyRNS2OzJx5ELJagnrZLARj28HuSFbCiYKRyB3f4r%2BsXAUFBKV4Qk7hz6IJ%2BATutAXUb%2B8IktnqpL88Lh%2BxpnQV8KOGZMTCz8gOhqVWWEDou65p9nAJ6DIJ96o8Ioek5iuOCR1JE0EnzlQoUFakvW7tvGU6hHtnWmlMU3KJ61YOPtcsRdg8ohk5lJSCYnlCFW%2Fswow%2F%2FbgaS3X%2Fy8j5yLqbCiPmQrfBuFff5pTKyT4T8R6OKoKIR7Qh2Bko9LCP%2BNWVwTUMe4rDpo7L467SE7JytT7xdwMZNm4prRo0Y%2FrOxcV3ub9g4Ws3Gu6iAugs6k%2Byt18HHXYOeMEQmJRwTQNejpU7aVVkw2eXXf9lSJRpmTXIMEjrVNqyzGMXtcxsFqvEkT%2Flikom3jU8ZpNixgivSwA5%2FtSzJzSpfWg31tyKDu3vtYGhD2uRpXHlIcADyRqE2Ax9VfPkUgPADc1h0%2FvhJwQiTScvyrQo4ayGAFxYlU4RLUUErMs1dpaFo7CyDHYOuaDQfY%2FsM099NzVQdBNADhyehKR3MJihzr8GOqUBCP2fNbMfpumZZ7g4UxDPsymUOt5mqvFasg5KdhilnEhTAJ2hU11CdBrKSB7VWK%2Bv1%2Fr97bKp2caaBQwugSo2u4lhQ3fcSLm7HHNh%2B1%2B%2BMn43OwaNGDYLkDZSzPP3z%2BTx9YZwQqMDFItdIZx8bVHomN73NF51sUx0E%2FBWCk3GGFdveQ2ppErGKfTVRxLc%2B1lyQa9BOEbJZxU6B8eVEYjL0%2FDGBE0c&X-Amz-Signature=9790fb1d87df53b75450c212be742aa593e07744f669ad978384a157d95074f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
