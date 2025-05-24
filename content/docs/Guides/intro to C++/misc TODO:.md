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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWY5CWQ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCCYAZ2Ijx%2BVZqHtHlvxiIpY%2FnaReD88npO8hlOgXnWtwIhAMJ9MrreqFyp1C%2BtWVskcRnc2OM4vUFzaP4XXlXvUZlaKv8DCBwQABoMNjM3NDIzMTgzODA1Igy9%2BB53DADLmi8EzW4q3AMkQHi66gCq3EGZwB8GnmPBm2064WZ%2Fa%2BNZguskniGtoGXjuG6c44mCsTFwAvlgULf63p0W5PNS%2B72uGs6L5iDcw8pUFtiAX9nTDFpjEx9PpJeEzJpGdzyEZ%2F4mGB7o63dLPrZNX2D0uRLCK0V6DWHssZl1nbFzc5%2BUPxIeUxYyY%2BU4vEzPU4bttehocKIgpRQoyyYjJzZFNTIvNwyf8O0TdmEB4pWjLDZ3NB4W8DkrIytdYYiLp8te9iacWAyYIDx4OICtPbtAIz7im9lbP0D1taLkptLvlbR4KwDswwdWK4mdXj%2FPOMtP47Ieuwu8E2TwS8uddR13oxx436VoCQpzOYzot83Luc2iE4ufFSC%2FB5lSAmMbU%2F7XmAomkJYJwKJezfRxokE0XzohmFdxTVOkyimAlCTDzlCUaUGk5DmzZtyqyHUI2oM%2B6l26EaeQN43PTpJtJWpGVy7EO%2BQuOwchyAV0r8YTuW27jyj3CXp47zf0YmzKr8f6R9iy0C6inKJp1uC1hqw2pfJgBsE18Xa30VMPFOUZhdvd9j%2BwZALrY%2BpRpWuFEY8X1MAp9RyEG334hJhz4PIQniQuN%2BJbIo8HCwrTA8LcKJdjByg6jO2dF8xpTKO8gmYbk4CUaDCSqMjBBjqkARc7IIheF%2FkGHRMNh7gSJ%2FtOQRrkE68WP%2B4GXnD2aRgcGzWg8q%2ByaFXvFb7Terfq9LpIPEYkxBNMDhFASShKFO7Q6RxUwWiWbdfw7BPy03gxx0Teb9Dq0CMV9qvGZARndNkxCX%2BaTOqMPlh2wes6BFJf%2FI5k5ADNNrXWeYioGEfg8a2mFnys3p2ktr7NO8kFeCSwYbw2jzp8JT%2Be%2FReMTxFHLiF7&X-Amz-Signature=db389afa0d8ace44d24f9320b63e2effc9c114188b1c681802ea22169e01d84c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWY5CWQ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCCYAZ2Ijx%2BVZqHtHlvxiIpY%2FnaReD88npO8hlOgXnWtwIhAMJ9MrreqFyp1C%2BtWVskcRnc2OM4vUFzaP4XXlXvUZlaKv8DCBwQABoMNjM3NDIzMTgzODA1Igy9%2BB53DADLmi8EzW4q3AMkQHi66gCq3EGZwB8GnmPBm2064WZ%2Fa%2BNZguskniGtoGXjuG6c44mCsTFwAvlgULf63p0W5PNS%2B72uGs6L5iDcw8pUFtiAX9nTDFpjEx9PpJeEzJpGdzyEZ%2F4mGB7o63dLPrZNX2D0uRLCK0V6DWHssZl1nbFzc5%2BUPxIeUxYyY%2BU4vEzPU4bttehocKIgpRQoyyYjJzZFNTIvNwyf8O0TdmEB4pWjLDZ3NB4W8DkrIytdYYiLp8te9iacWAyYIDx4OICtPbtAIz7im9lbP0D1taLkptLvlbR4KwDswwdWK4mdXj%2FPOMtP47Ieuwu8E2TwS8uddR13oxx436VoCQpzOYzot83Luc2iE4ufFSC%2FB5lSAmMbU%2F7XmAomkJYJwKJezfRxokE0XzohmFdxTVOkyimAlCTDzlCUaUGk5DmzZtyqyHUI2oM%2B6l26EaeQN43PTpJtJWpGVy7EO%2BQuOwchyAV0r8YTuW27jyj3CXp47zf0YmzKr8f6R9iy0C6inKJp1uC1hqw2pfJgBsE18Xa30VMPFOUZhdvd9j%2BwZALrY%2BpRpWuFEY8X1MAp9RyEG334hJhz4PIQniQuN%2BJbIo8HCwrTA8LcKJdjByg6jO2dF8xpTKO8gmYbk4CUaDCSqMjBBjqkARc7IIheF%2FkGHRMNh7gSJ%2FtOQRrkE68WP%2B4GXnD2aRgcGzWg8q%2ByaFXvFb7Terfq9LpIPEYkxBNMDhFASShKFO7Q6RxUwWiWbdfw7BPy03gxx0Teb9Dq0CMV9qvGZARndNkxCX%2BaTOqMPlh2wes6BFJf%2FI5k5ADNNrXWeYioGEfg8a2mFnys3p2ktr7NO8kFeCSwYbw2jzp8JT%2Be%2FReMTxFHLiF7&X-Amz-Signature=45706684a636618e6c43b322e78275f07db285eb08967d0b972d46e9d03fc13d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
