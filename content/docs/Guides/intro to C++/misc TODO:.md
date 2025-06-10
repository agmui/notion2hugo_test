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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWXS5PLR%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTbgRcLX5V4iczWGprKAH53pl1uNeUA9qgRTudhC5P3gIgGJgcfP7V19yEZO1KkH1hKK%2BuCZcrLGnB%2FTS1KUNtC2AqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOuhoVD05fqLUdLuircA%2FLT%2BL38JPB7wkDQVEWlrGNTY2pdDjo8Us%2BqfkLZ3UGzEVZOCYPNDmJV8ni5LP%2BAL8oAmZ5dY4AS8ggQOci0wWxRzEF%2FytFKg5zpYv7LVbQsz31IBdbWSpAlTr%2BPGw1fQhMc00vXzi4GxvttDl9FwklZxlE3uruyuo8RA4%2FehUPuWKfcyqLWOY5Gjre%2FjDlGnKssARteq6qOrTSH2q7cKUog%2BVbMLwBWc4Jfh4uq3UokRTIBBiJYg4G0gKxrzWnowg3bR0w6CjCiB0XHHrh8CeDRA554%2BsHh7Hv2jqryvlknMOGLnb75hTk2U8vR1h2llAH36u1C1Htib084fvOgl%2FaruXa%2FTIMp4wgyMqU6rM%2FEj1a%2BtaC7KMTpP%2FeITgNOaR08tLk3BmMfpl7EzpDBtMThOZNeq46%2FG9nuRG%2F1YRhjvlR2nIGdJySFMxAijICg8PALLZfNOm34Wg5I%2BuE07xmBd69X9MH8jFikZGsVyTfa3cvwvFdAdveAXQpcKSRm9RIQIKiz61241kA%2BZP0ulhkRpdI%2FDyX9DRLmiW7ylQWsHbyHTa89%2FZm0%2FbMA4fCZIJdO7KobM%2BzN3dXXFmJf7CQOite0HqHccxdEBEQpxAEB79rRCdAgpJwOXGtPMN7kosIGOqUBGfiP9B2NbZLDiwM7fUa4K0%2BmOeBpU75rxvgR%2Fze0vVrw4rmYtq9nitlp25gv26WjHMKlNfXd0Cia%2BZCygxpB57ctC8NKfjoQjMLvswZwOtcPKF1uuRWG9U57U6kG237EeJI33L5OB%2BgSHmRxrPrbtm1%2FCGtW6P%2BlyoXHp9CX4ACp19yl8ZbYuwbgfgUvlXm4NjbYH1sWxeAFe%2BWJ78MQ4EBdCRDb&X-Amz-Signature=7752fe0291def3e52157b1b9544d310b39625b4075f40a0f9e58422a969fe4ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWXS5PLR%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTbgRcLX5V4iczWGprKAH53pl1uNeUA9qgRTudhC5P3gIgGJgcfP7V19yEZO1KkH1hKK%2BuCZcrLGnB%2FTS1KUNtC2AqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOuhoVD05fqLUdLuircA%2FLT%2BL38JPB7wkDQVEWlrGNTY2pdDjo8Us%2BqfkLZ3UGzEVZOCYPNDmJV8ni5LP%2BAL8oAmZ5dY4AS8ggQOci0wWxRzEF%2FytFKg5zpYv7LVbQsz31IBdbWSpAlTr%2BPGw1fQhMc00vXzi4GxvttDl9FwklZxlE3uruyuo8RA4%2FehUPuWKfcyqLWOY5Gjre%2FjDlGnKssARteq6qOrTSH2q7cKUog%2BVbMLwBWc4Jfh4uq3UokRTIBBiJYg4G0gKxrzWnowg3bR0w6CjCiB0XHHrh8CeDRA554%2BsHh7Hv2jqryvlknMOGLnb75hTk2U8vR1h2llAH36u1C1Htib084fvOgl%2FaruXa%2FTIMp4wgyMqU6rM%2FEj1a%2BtaC7KMTpP%2FeITgNOaR08tLk3BmMfpl7EzpDBtMThOZNeq46%2FG9nuRG%2F1YRhjvlR2nIGdJySFMxAijICg8PALLZfNOm34Wg5I%2BuE07xmBd69X9MH8jFikZGsVyTfa3cvwvFdAdveAXQpcKSRm9RIQIKiz61241kA%2BZP0ulhkRpdI%2FDyX9DRLmiW7ylQWsHbyHTa89%2FZm0%2FbMA4fCZIJdO7KobM%2BzN3dXXFmJf7CQOite0HqHccxdEBEQpxAEB79rRCdAgpJwOXGtPMN7kosIGOqUBGfiP9B2NbZLDiwM7fUa4K0%2BmOeBpU75rxvgR%2Fze0vVrw4rmYtq9nitlp25gv26WjHMKlNfXd0Cia%2BZCygxpB57ctC8NKfjoQjMLvswZwOtcPKF1uuRWG9U57U6kG237EeJI33L5OB%2BgSHmRxrPrbtm1%2FCGtW6P%2BlyoXHp9CX4ACp19yl8ZbYuwbgfgUvlXm4NjbYH1sWxeAFe%2BWJ78MQ4EBdCRDb&X-Amz-Signature=0d670fbb7cc1d296c38296632bf26de9841389cce14ecb2622b15f675a8c934c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
