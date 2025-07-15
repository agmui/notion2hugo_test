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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XDG2MTF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIE6PxT9%2FkRRJBknLaMrWWW%2Bbm8cQ9cwYT5ID3aelp%2F2cAiEArHGH%2BjekNp2EyLxJo3L1ncHgVSvLHvQCFYRPD5a8oNIq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDBrnrJyRPWF9aNDzrSrcA2jr2ujSXkqhUzSo0oHUSGZsDltoMO8wb7d2e%2BqA2VZ4KT6UTFkS8DPsGE4wuxxlB6irdCwG%2B6O9TSt7vmV8Dw84tSD8w5lesz2zIkQcXpoTLPEx3fY0ZBi8pjElMhDcV2ArJ6fYDydDD7A7245xuT0bTguNjT6vF%2FsTQDDZ3Le6Dnt%2FkYfT1h%2BH2CuHkXffgVO5A6GMhtzZ7KT0ecCgd4%2FuLobeQPHKHbgkA8jpG9rkX4DwZPWM1UhIE9OMC6nWVe1IPxczL1vCe0ivm%2BkkiztUqxuDhF43QygHKgQkB8vQkXpeVO4MyjQCB6tVX6Ud5%2FyX0i42ZrqItS2eL3GtA9eNgP3Pmh8jzOt99fGPLKg9hj9lK7QVx8Md0sSCIwRhR3yc9%2Bg%2BfYhQwxgUFF6nTRVGx9jPrF%2FCZd1I0o9EzdFs3DVPSabW2YZSAvGyCVoltGCZRST1Q1mSu%2BaP9o7JJCmsPYJVuS8L5ZogPEM8ZflbtTSxBA4M5RZgHiJm9kmD%2BBf1kwjFYpZjLcv4%2ByVrgXQ4SQTdRl1oXH2oAkRP98q4UpLwsJh%2FWEaNMn6hZSKP6ssRuU0Km2sbPs48zsG0TVFaEcoOMD3t3%2FLkvZQEh7iJvwJuL9grN5N%2FaHhQMLCx2MMGOqUBoByek1zsr0A0lUkihqvB86pGhHb3e2o4drqAaxFeaWxN5kXIUQEysUtRpz2%2FAX2AWABrCK2QB07Cowx8v%2BGLpQV59ZKKmYq6tXbAoX%2FvBES3BricGPV6pD9KUwpi6mNeY0h47Wgk6oWNJ5elI12OkYmPqiZTMuDAlP9xVmnKyRfPSODwLx9iKr0x6FqrteoV0%2B8yWZZG79%2Bmo2Id3%2FBtL5wArDYX&X-Amz-Signature=16610376277aa50b0990bed1a3ccd57e4a54bd4cd1491fee3c45fe4fd35de532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XDG2MTF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIE6PxT9%2FkRRJBknLaMrWWW%2Bbm8cQ9cwYT5ID3aelp%2F2cAiEArHGH%2BjekNp2EyLxJo3L1ncHgVSvLHvQCFYRPD5a8oNIq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDBrnrJyRPWF9aNDzrSrcA2jr2ujSXkqhUzSo0oHUSGZsDltoMO8wb7d2e%2BqA2VZ4KT6UTFkS8DPsGE4wuxxlB6irdCwG%2B6O9TSt7vmV8Dw84tSD8w5lesz2zIkQcXpoTLPEx3fY0ZBi8pjElMhDcV2ArJ6fYDydDD7A7245xuT0bTguNjT6vF%2FsTQDDZ3Le6Dnt%2FkYfT1h%2BH2CuHkXffgVO5A6GMhtzZ7KT0ecCgd4%2FuLobeQPHKHbgkA8jpG9rkX4DwZPWM1UhIE9OMC6nWVe1IPxczL1vCe0ivm%2BkkiztUqxuDhF43QygHKgQkB8vQkXpeVO4MyjQCB6tVX6Ud5%2FyX0i42ZrqItS2eL3GtA9eNgP3Pmh8jzOt99fGPLKg9hj9lK7QVx8Md0sSCIwRhR3yc9%2Bg%2BfYhQwxgUFF6nTRVGx9jPrF%2FCZd1I0o9EzdFs3DVPSabW2YZSAvGyCVoltGCZRST1Q1mSu%2BaP9o7JJCmsPYJVuS8L5ZogPEM8ZflbtTSxBA4M5RZgHiJm9kmD%2BBf1kwjFYpZjLcv4%2ByVrgXQ4SQTdRl1oXH2oAkRP98q4UpLwsJh%2FWEaNMn6hZSKP6ssRuU0Km2sbPs48zsG0TVFaEcoOMD3t3%2FLkvZQEh7iJvwJuL9grN5N%2FaHhQMLCx2MMGOqUBoByek1zsr0A0lUkihqvB86pGhHb3e2o4drqAaxFeaWxN5kXIUQEysUtRpz2%2FAX2AWABrCK2QB07Cowx8v%2BGLpQV59ZKKmYq6tXbAoX%2FvBES3BricGPV6pD9KUwpi6mNeY0h47Wgk6oWNJ5elI12OkYmPqiZTMuDAlP9xVmnKyRfPSODwLx9iKr0x6FqrteoV0%2B8yWZZG79%2Bmo2Id3%2FBtL5wArDYX&X-Amz-Signature=0a20ae6573ec265bdf2093f97a11c8ef357d8586e3e14aebdec2c69775d601d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
