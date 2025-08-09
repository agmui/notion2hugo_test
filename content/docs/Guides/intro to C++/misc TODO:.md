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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFTWVQJG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQD5F40VbNaEO5UDfsF75JbEhsMGItN8nt8zYjhxlqz7OwIhAIrb5Y2%2B%2FRd8niXz8eeLqloQ2jV9Tv2RrhcFCtsS0NfJKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJOhfWj724567L5NQq3APY3b7Xc%2FVaDvc7RP3K9OeKIJJIQfiiaHnEFVZfzCpElw2MyQQCPVDQcBo2GJ%2FvHNJ7TvATPuSfp5Dq3%2BDJFGDJ7qi5z8a6y84OExy%2BIl9H6HHAPPkI9J9IQjJ3BsBgoBtgDRpz03DSGVjYxZHWqGnQXetXJyhuvDXXRT3B4kUZNikX8A74TjQBR5m1aHsw8VMdwzYgW4IbqlL8BPb0LqHHvcHVMGJQ%2FrG2TW32vs%2Fi1MWi6VbzrDMImnaVRNzhvaYnqyzd0yfWgCFM4pq8dQmOJkfHRsxXIytwLAjCqaZPGsNcg2eBhzlsYvoagOmY3DxcDWNXv7OSwheWSukpseIrKvHSQRYyx40k5KlZ2oklEKVoS6hK116lKynO4mmsOuSvEUj2N%2Bk%2BdWy8UJOg1ihbgSPhymwjB0yfDOFS5WMympQ9eoL23GvFa21RXvg6L5oMFCOm3A9kbZyetG5%2BgHjRdsi0pw1vmad0Lwq4OZkQOil5bwmz3C%2FzIgC2NNtm1wQ%2BcX5Z2tdEIflPvJ9gX08d2tcs5jpUtL4qFPNXhFhEIzINUwydFMWG3%2FeMyWPvX%2B7Y7U2xxneZnPS7%2BiS5DIFgH%2FFKgtUn3RoH7KVpK6ubHM2uu2sMrjepOmW1JDDLxNvEBjqkARcyVN31bnymARbYwkxa6njsDRdorlu5GdiwlvT40wYMgxjDQCzhUF0lAORCmx2qhpew%2FfdxxroRn7ajsj%2BsoU8Qjwy7gaN%2BDSUPggSmIFb%2FUP%2BdhhhbZIhuEJJym88Ilsr5e%2Fwl6FiBkeGRDNf2zQ0CN2uqoABWo0Kd8B5XlNCW682%2B7FqvdZvhCqqhet6IHjmY%2FpNzx%2B%2F%2Bs%2BhDYKIyZE%2Bdo%2FPB&X-Amz-Signature=05fd5da35df01d4b7d593b00d50cda3dc9d12c5b2c1c55553a43b0292f2a425e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFTWVQJG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQD5F40VbNaEO5UDfsF75JbEhsMGItN8nt8zYjhxlqz7OwIhAIrb5Y2%2B%2FRd8niXz8eeLqloQ2jV9Tv2RrhcFCtsS0NfJKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJOhfWj724567L5NQq3APY3b7Xc%2FVaDvc7RP3K9OeKIJJIQfiiaHnEFVZfzCpElw2MyQQCPVDQcBo2GJ%2FvHNJ7TvATPuSfp5Dq3%2BDJFGDJ7qi5z8a6y84OExy%2BIl9H6HHAPPkI9J9IQjJ3BsBgoBtgDRpz03DSGVjYxZHWqGnQXetXJyhuvDXXRT3B4kUZNikX8A74TjQBR5m1aHsw8VMdwzYgW4IbqlL8BPb0LqHHvcHVMGJQ%2FrG2TW32vs%2Fi1MWi6VbzrDMImnaVRNzhvaYnqyzd0yfWgCFM4pq8dQmOJkfHRsxXIytwLAjCqaZPGsNcg2eBhzlsYvoagOmY3DxcDWNXv7OSwheWSukpseIrKvHSQRYyx40k5KlZ2oklEKVoS6hK116lKynO4mmsOuSvEUj2N%2Bk%2BdWy8UJOg1ihbgSPhymwjB0yfDOFS5WMympQ9eoL23GvFa21RXvg6L5oMFCOm3A9kbZyetG5%2BgHjRdsi0pw1vmad0Lwq4OZkQOil5bwmz3C%2FzIgC2NNtm1wQ%2BcX5Z2tdEIflPvJ9gX08d2tcs5jpUtL4qFPNXhFhEIzINUwydFMWG3%2FeMyWPvX%2B7Y7U2xxneZnPS7%2BiS5DIFgH%2FFKgtUn3RoH7KVpK6ubHM2uu2sMrjepOmW1JDDLxNvEBjqkARcyVN31bnymARbYwkxa6njsDRdorlu5GdiwlvT40wYMgxjDQCzhUF0lAORCmx2qhpew%2FfdxxroRn7ajsj%2BsoU8Qjwy7gaN%2BDSUPggSmIFb%2FUP%2BdhhhbZIhuEJJym88Ilsr5e%2Fwl6FiBkeGRDNf2zQ0CN2uqoABWo0Kd8B5XlNCW682%2B7FqvdZvhCqqhet6IHjmY%2FpNzx%2B%2F%2Bs%2BhDYKIyZE%2Bdo%2FPB&X-Amz-Signature=7998f1c295028cdff9bf85b133e9cc7933dddca083164e48b92f1fea14088f9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
