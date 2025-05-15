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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZCY2J4A%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQC0%2FjGtmspHsomh4G0uDEcwG%2BA0ymxE7wHGfDS9a629bgIgCkSb180Chxd1QPaapkWNUNt74%2BxwYvaPiOG3ijWVO50q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDGQWaVkq%2B9RAlipmmCrcA%2B0U%2F%2B5s9T6Z7dybqsQvI5sA%2FouXFy3y0iOPrTYuB3meDM29v6F83wiB86320BLjOZ1kgx%2FEWjrWi2jVkbjcR1vYGjQauLHVQvsa%2B1OFil523rgZuiMjEAtfXX%2BpbhjG%2FMpZboBZmuSD106bC7CFT8Y0eaunOvtDSeayMVbG%2Bxku7%2BBD1QpGdABrpDKcYsoVVOAdTct78x4kIzGwyfi275JSkQOR%2BecnuD7Ue0NW8rt1L4h2OLbct28Jy4Wka8g76wotbvxOq3%2BSmKu3Hkzi2TQXy6FSXJE99IT10BjBqj9%2BBMpXtEBRpo%2B4vsrQ9FxpfZaTMVDU7H1LRxV9ev3uw0zkK%2BoC8%2FdvxdqTyglxF23HGwFVDirTRva1uAWbe3f3uCFe0iPSYF1%2FBaB8c7uJ1gMfDAsIiPwSCiCuZ%2BHqrZaPYbBdCH%2B1cyb4yOlmIrSefIL175m09N7lpa8aVdu%2BkzUaqam14yApmfpj1fb7560aPMdNEvwl7FeFmUNx6YItbK2pc9ayRLIsdCXroGEIvLCZhhZOBtiibNYUHWClPeFK9%2BTs%2BBe82d4DGFvrBsATA71BRZEigPaTAfdpkho27G3n%2F5%2FqTZAgEQRGbKCdnRPKOmwIGKbGCGzUOQNrMOHRlcEGOqUBWqeuaOZy4VLE1VkrqWXTmm18gUkyGIQGNqGHgEjYllBcJ57k9EzCSI%2FZWneSq5MnQGqrlgycv0FckfWjA8CY78AvDlEH7Sqld09tyOAB%2FGxv1Z1YlGzzt0na4wVu7uJpnH5o6ubj1RUZuWgmxWc0CORJDEIiQeNATDN1fL9cNTzsgECzbBZOdx%2Fna%2FPdp90VJHSGQ1W6zX5OJOp1pbJUubT%2F9uYp&X-Amz-Signature=132e76d789d8bdad610ccb63f5b3cdb4e0052ee02c22261b7b142054d106a249&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZCY2J4A%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQC0%2FjGtmspHsomh4G0uDEcwG%2BA0ymxE7wHGfDS9a629bgIgCkSb180Chxd1QPaapkWNUNt74%2BxwYvaPiOG3ijWVO50q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDGQWaVkq%2B9RAlipmmCrcA%2B0U%2F%2B5s9T6Z7dybqsQvI5sA%2FouXFy3y0iOPrTYuB3meDM29v6F83wiB86320BLjOZ1kgx%2FEWjrWi2jVkbjcR1vYGjQauLHVQvsa%2B1OFil523rgZuiMjEAtfXX%2BpbhjG%2FMpZboBZmuSD106bC7CFT8Y0eaunOvtDSeayMVbG%2Bxku7%2BBD1QpGdABrpDKcYsoVVOAdTct78x4kIzGwyfi275JSkQOR%2BecnuD7Ue0NW8rt1L4h2OLbct28Jy4Wka8g76wotbvxOq3%2BSmKu3Hkzi2TQXy6FSXJE99IT10BjBqj9%2BBMpXtEBRpo%2B4vsrQ9FxpfZaTMVDU7H1LRxV9ev3uw0zkK%2BoC8%2FdvxdqTyglxF23HGwFVDirTRva1uAWbe3f3uCFe0iPSYF1%2FBaB8c7uJ1gMfDAsIiPwSCiCuZ%2BHqrZaPYbBdCH%2B1cyb4yOlmIrSefIL175m09N7lpa8aVdu%2BkzUaqam14yApmfpj1fb7560aPMdNEvwl7FeFmUNx6YItbK2pc9ayRLIsdCXroGEIvLCZhhZOBtiibNYUHWClPeFK9%2BTs%2BBe82d4DGFvrBsATA71BRZEigPaTAfdpkho27G3n%2F5%2FqTZAgEQRGbKCdnRPKOmwIGKbGCGzUOQNrMOHRlcEGOqUBWqeuaOZy4VLE1VkrqWXTmm18gUkyGIQGNqGHgEjYllBcJ57k9EzCSI%2FZWneSq5MnQGqrlgycv0FckfWjA8CY78AvDlEH7Sqld09tyOAB%2FGxv1Z1YlGzzt0na4wVu7uJpnH5o6ubj1RUZuWgmxWc0CORJDEIiQeNATDN1fL9cNTzsgECzbBZOdx%2Fna%2FPdp90VJHSGQ1W6zX5OJOp1pbJUubT%2F9uYp&X-Amz-Signature=2da2b493d1767e00c9f72d0164b66076389e1d786e7d0c0b36a57c3afa09b6f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
