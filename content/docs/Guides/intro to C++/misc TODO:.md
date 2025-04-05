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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJQ6FWQU%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfBT5ETS9p8GaCb5U5m4lm0BLF7MyBliFEuuQRxhfbhwIgSYozTqnuDpUqTvv97m2gXAm04bBPh%2FskLimZpFlCP3oq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEjvUll9o3SqhUEXxyrcA1Z%2F8p6thcU9MAxtTKu5mTZhgl4XxXgHX1qZgelH3A1VUhDGSQytgzvTGn064LzCdR3fzLWtkzUSZ4NNrXZmsfR%2FXlyUFxfIQiCiVeDMPWqLL5TO7FhhbD51Iqz8J6rjjv08ZUkvPZVaS%2BxofGcMh16yFBhhdB2h42SJ%2BLNnxILig%2Bem7PJpsJ1dNpUiQlw33eQSWwHogo7x6E%2BNE6t1nCWsvd9aVdD646LoskIGp28oGDsqhcDotEH%2FZ1pVuqnHkaXfcSCqQZFk4k0iDi0FpnqVwE0c%2F1uE9wFFWioPmwklue8aKOTQdZFMIw3vqIPVj%2BI27GRxDbkCvG0NyYsZxItLPr5P95ZUlgJH5EYq5XEv%2FMZ99dwCJMqHxme3CCnCCql9OUMIl2PuFXvFn9g8WDxc98BkXXhhSI0eaTLlrX6OKHRgFzeAY3cLGZ%2BNajuRQivU0S%2FWg0m%2BT6dN77r0jPuZkDYRLLcbB2onZt1%2BBJSIVZ0vSYellwjfpjsWs1lWyJYz%2BNA1Fe4uXC%2FVu8mVLnbuktQGTHQhn44BcG2Sx3sEe%2BV1PfRKukrSfylmxrKwVJv1PnNMwlfhykL7hxWOvqYnYyAYZXaIo6a5%2FCxq26SwAUinLxOFDdC7YbBFMPXjw78GOqUBW0wwHVmOxdpyB6rzNaoUzOdhjd1rCqNl3eY36wtFWDhh3R4hEOT8oQzqfbwaL1BDNf356LAg05%2F9tDGB12%2FdyoBBNCgTA5GyfX8Erhv%2Bm%2BZQKs8SvSU%2F5Yws7bnQq49WgAMJPl6qUZTjlBPuFHv%2B2R8kIbs5oMPp7vbOKLAzRZF%2Bm4t%2FAmghiPuUE2LbubgEwi5Sn7vtmUfLdVnmXow6p7rtL%2Fdd&X-Amz-Signature=454edcc3de07c646a5a58ef484783e2dca702ff45a5a318b0d2d3bfb84b73978&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJQ6FWQU%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfBT5ETS9p8GaCb5U5m4lm0BLF7MyBliFEuuQRxhfbhwIgSYozTqnuDpUqTvv97m2gXAm04bBPh%2FskLimZpFlCP3oq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEjvUll9o3SqhUEXxyrcA1Z%2F8p6thcU9MAxtTKu5mTZhgl4XxXgHX1qZgelH3A1VUhDGSQytgzvTGn064LzCdR3fzLWtkzUSZ4NNrXZmsfR%2FXlyUFxfIQiCiVeDMPWqLL5TO7FhhbD51Iqz8J6rjjv08ZUkvPZVaS%2BxofGcMh16yFBhhdB2h42SJ%2BLNnxILig%2Bem7PJpsJ1dNpUiQlw33eQSWwHogo7x6E%2BNE6t1nCWsvd9aVdD646LoskIGp28oGDsqhcDotEH%2FZ1pVuqnHkaXfcSCqQZFk4k0iDi0FpnqVwE0c%2F1uE9wFFWioPmwklue8aKOTQdZFMIw3vqIPVj%2BI27GRxDbkCvG0NyYsZxItLPr5P95ZUlgJH5EYq5XEv%2FMZ99dwCJMqHxme3CCnCCql9OUMIl2PuFXvFn9g8WDxc98BkXXhhSI0eaTLlrX6OKHRgFzeAY3cLGZ%2BNajuRQivU0S%2FWg0m%2BT6dN77r0jPuZkDYRLLcbB2onZt1%2BBJSIVZ0vSYellwjfpjsWs1lWyJYz%2BNA1Fe4uXC%2FVu8mVLnbuktQGTHQhn44BcG2Sx3sEe%2BV1PfRKukrSfylmxrKwVJv1PnNMwlfhykL7hxWOvqYnYyAYZXaIo6a5%2FCxq26SwAUinLxOFDdC7YbBFMPXjw78GOqUBW0wwHVmOxdpyB6rzNaoUzOdhjd1rCqNl3eY36wtFWDhh3R4hEOT8oQzqfbwaL1BDNf356LAg05%2F9tDGB12%2FdyoBBNCgTA5GyfX8Erhv%2Bm%2BZQKs8SvSU%2F5Yws7bnQq49WgAMJPl6qUZTjlBPuFHv%2B2R8kIbs5oMPp7vbOKLAzRZF%2Bm4t%2FAmghiPuUE2LbubgEwi5Sn7vtmUfLdVnmXow6p7rtL%2Fdd&X-Amz-Signature=abf4133dd6b0e25b170fe06130b3823005fc2e47a93775db65326e8f9cf97a23&X-Amz-SignedHeaders=host&x-id=GetObject)

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
