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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLTMZ67Q%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDZ7QtCr43JNIOcGIJCFo1JNrfez9j1QXh7hJcn9edx7QIhAJSRNrH8xgfDifhJZnMA6q9Y3VVWrPQF2q3xex3M%2FHbOKv8DCEwQABoMNjM3NDIzMTgzODA1IgyGgGERqrXnuuWQqD8q3AN0%2BC9SHnjPHRv4ES6QyAPAC1%2F7K%2Fq9gtmusauAoO0UvTsnzlCObGq%2FS1ddqcNAYxlAga5%2FJA6CAAdX54HsKonULgIsbSwB8yauRphY2J6eoY841gQR07%2FoyiE%2FWPX6ADwv8S0ik6o7nZu9YB2Cb0GqY1yeR5CyJs39oCD3XwJeFjfEuhO1YQcSTv%2Fs78MIsiEtkEuEtlzP2GN%2F6Qw0Bgo4h5X2iKtjcPDeuhd1PP5yc%2Bbi2gu8RXbOi4%2FUWQlpe9gjx5gSLKAWXRUBnxvRTd3oAwVHY8b9cdHRl8vFh8DUARGfwr2oVzkaTWcKw9ZPMMOhknhK6kjXPhjlu9EDM2ia5e50ZpNCbHhhnU0opAMgUwSzMO%2FbziJfhY9fOzAM0hJ4LE7XBG9H5sSlnUbPnA2M0QD%2BvKC%2BL4PcZ8vW9f7qrseaUvNxCCdpp6ZaWDki8s7E%2FuRiwoj5K2TayaZC7KfYzN%2BMBARJxXDplNCEY2S6%2FlOSztQ0cZnPyH2%2FEJcYfQmqwku8iCCq4VIhTouscMG1ewkQT%2FBXpDXXuJzX5Q0IF41ZY%2FP8a88caBq0P%2FsVri2mua0uB4pUu%2BPDot2WvMsvlXWm9rNsZ%2Bdxa85Oo%2FOkgxyfPlk4lM3nFHDlpjCg76XDBjqkAbtwW1pSRZGAGrRbIOnUtVvE%2Bmyd%2B3324CHArJ%2FcDDOm7d%2FVoE0F%2FEQLRhue3lf%2FNbTrhYgV2VAkKLwi%2FwAGAokNq9PTQXDo9UQWU93%2BiqRzoaDCThpN5fR%2Fv7%2ByNL%2Fj0Vmx0sq0D9q8plHLMr%2FetYxAA1y2qQT83TQOmwmfhefpzdJpR11ZZy2K2bagkWlNYY6WAAchvI6gW56T6%2FT7WYArwIuQ&X-Amz-Signature=13f2707837cbbc51cd9751578d62a687dd98e44edd87ac1e3c185094ab130b47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLTMZ67Q%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDZ7QtCr43JNIOcGIJCFo1JNrfez9j1QXh7hJcn9edx7QIhAJSRNrH8xgfDifhJZnMA6q9Y3VVWrPQF2q3xex3M%2FHbOKv8DCEwQABoMNjM3NDIzMTgzODA1IgyGgGERqrXnuuWQqD8q3AN0%2BC9SHnjPHRv4ES6QyAPAC1%2F7K%2Fq9gtmusauAoO0UvTsnzlCObGq%2FS1ddqcNAYxlAga5%2FJA6CAAdX54HsKonULgIsbSwB8yauRphY2J6eoY841gQR07%2FoyiE%2FWPX6ADwv8S0ik6o7nZu9YB2Cb0GqY1yeR5CyJs39oCD3XwJeFjfEuhO1YQcSTv%2Fs78MIsiEtkEuEtlzP2GN%2F6Qw0Bgo4h5X2iKtjcPDeuhd1PP5yc%2Bbi2gu8RXbOi4%2FUWQlpe9gjx5gSLKAWXRUBnxvRTd3oAwVHY8b9cdHRl8vFh8DUARGfwr2oVzkaTWcKw9ZPMMOhknhK6kjXPhjlu9EDM2ia5e50ZpNCbHhhnU0opAMgUwSzMO%2FbziJfhY9fOzAM0hJ4LE7XBG9H5sSlnUbPnA2M0QD%2BvKC%2BL4PcZ8vW9f7qrseaUvNxCCdpp6ZaWDki8s7E%2FuRiwoj5K2TayaZC7KfYzN%2BMBARJxXDplNCEY2S6%2FlOSztQ0cZnPyH2%2FEJcYfQmqwku8iCCq4VIhTouscMG1ewkQT%2FBXpDXXuJzX5Q0IF41ZY%2FP8a88caBq0P%2FsVri2mua0uB4pUu%2BPDot2WvMsvlXWm9rNsZ%2Bdxa85Oo%2FOkgxyfPlk4lM3nFHDlpjCg76XDBjqkAbtwW1pSRZGAGrRbIOnUtVvE%2Bmyd%2B3324CHArJ%2FcDDOm7d%2FVoE0F%2FEQLRhue3lf%2FNbTrhYgV2VAkKLwi%2FwAGAokNq9PTQXDo9UQWU93%2BiqRzoaDCThpN5fR%2Fv7%2ByNL%2Fj0Vmx0sq0D9q8plHLMr%2FetYxAA1y2qQT83TQOmwmfhefpzdJpR11ZZy2K2bagkWlNYY6WAAchvI6gW56T6%2FT7WYArwIuQ&X-Amz-Signature=a6b8cdf147fb0b44f7afc5beb0e7f3ee6770b444249c3258a04d0d5a57f687b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
