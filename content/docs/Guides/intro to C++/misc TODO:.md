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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4CMBJYH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQxQV8JD0OyiRazOV2WNnJSLoQ2gr9Vz5iddoee9aksAiEAmTWNsntRzllwnGssmy%2FJPLhibbMjmVSfBcO77aymnKAqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMSEhNIAObO3KOIbircA%2BAx%2BY%2BfUM%2F%2FJizm%2Fh6R6dcQ6x3r6gRyG4INbjhIUd6c1uk%2BBCvVX2sXq05VsR9aAKnObTFdzh5deXmvQl20zMXCTRCrnhXmZajJ9OAYDZRwZO1L8aN6Sh8MmgWMIwBCrxOlcQr3CKaNqezuw8xOi6WXG8J%2FLXGvFknxQeTAbOu1DONvzsEFGEBPaOHKe8afjhxod6p%2FJGHBViPX36sPzugztQk2r%2FIaYxQlrTxlQveMJjr49ooket%2BqF3Xowk4%2FJS1j2XkBiBiWKZQAjkYP5Nb1ms4RWy2UH0Zr6Si6twnRSdcSCYQgXineQ%2F%2FDwvb8%2BdpppxC0zq6DxlUARZadVWiFmHFMPZCvb57r0VfF%2FJCdkH%2BCkB9waLQeJ1yUaxGvClDhP4NjLSemf0LRakVCr%2Ffd1NiMeWtbxoi1OSSuC03KAHOJOHeK4aD56iIAFHdmtDY6XW6RGmmkOYfGoRL1H784d5d86jaB9aXR7qYaGvceo5%2BwKLtAS3rK4Z4wRW1hVjkAYYcD7DDuSmdSvbs%2BDoXikeM9J%2FvbAEzfpuNnwuh%2F661AEymzcvznPRKz6zZ72Jb3iuXdTS%2Bop2UeslTPZN0uHZZbqaCuFMIfoXKH4esmRsF4xCygs%2BfyeHsfMOL4x8MGOqUBzpSAQs0Bwx9OkiUktZhkF3W46crb4QcOrFwzoc78GnEQoEiQPuxVqJerceyoFZR%2Fg35FOy9ZE63wYxRC%2B4lmjpEjiXacv3buqYy%2F13OAXU8jaJ13V1mXHGigpe%2B5CdIogxtx5FFCVhHD6jQ8i0L90ozGbomtHr8wFuYrVEPuQrJWdp%2Fh0PDA%2B2OPyssBMPGimG%2ByDR%2F3vX3lJ8LqugpDkR2Sgjhb&X-Amz-Signature=35a081fbfd6bc876f927d2c536617b42456d6fe072bc3f84d58b4771a3947be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4CMBJYH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQxQV8JD0OyiRazOV2WNnJSLoQ2gr9Vz5iddoee9aksAiEAmTWNsntRzllwnGssmy%2FJPLhibbMjmVSfBcO77aymnKAqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMSEhNIAObO3KOIbircA%2BAx%2BY%2BfUM%2F%2FJizm%2Fh6R6dcQ6x3r6gRyG4INbjhIUd6c1uk%2BBCvVX2sXq05VsR9aAKnObTFdzh5deXmvQl20zMXCTRCrnhXmZajJ9OAYDZRwZO1L8aN6Sh8MmgWMIwBCrxOlcQr3CKaNqezuw8xOi6WXG8J%2FLXGvFknxQeTAbOu1DONvzsEFGEBPaOHKe8afjhxod6p%2FJGHBViPX36sPzugztQk2r%2FIaYxQlrTxlQveMJjr49ooket%2BqF3Xowk4%2FJS1j2XkBiBiWKZQAjkYP5Nb1ms4RWy2UH0Zr6Si6twnRSdcSCYQgXineQ%2F%2FDwvb8%2BdpppxC0zq6DxlUARZadVWiFmHFMPZCvb57r0VfF%2FJCdkH%2BCkB9waLQeJ1yUaxGvClDhP4NjLSemf0LRakVCr%2Ffd1NiMeWtbxoi1OSSuC03KAHOJOHeK4aD56iIAFHdmtDY6XW6RGmmkOYfGoRL1H784d5d86jaB9aXR7qYaGvceo5%2BwKLtAS3rK4Z4wRW1hVjkAYYcD7DDuSmdSvbs%2BDoXikeM9J%2FvbAEzfpuNnwuh%2F661AEymzcvznPRKz6zZ72Jb3iuXdTS%2Bop2UeslTPZN0uHZZbqaCuFMIfoXKH4esmRsF4xCygs%2BfyeHsfMOL4x8MGOqUBzpSAQs0Bwx9OkiUktZhkF3W46crb4QcOrFwzoc78GnEQoEiQPuxVqJerceyoFZR%2Fg35FOy9ZE63wYxRC%2B4lmjpEjiXacv3buqYy%2F13OAXU8jaJ13V1mXHGigpe%2B5CdIogxtx5FFCVhHD6jQ8i0L90ozGbomtHr8wFuYrVEPuQrJWdp%2Fh0PDA%2B2OPyssBMPGimG%2ByDR%2F3vX3lJ8LqugpDkR2Sgjhb&X-Amz-Signature=04ab501f5b67734b79420dab3c3993844dfe8c91ef78173924ef3bcb69c89686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
