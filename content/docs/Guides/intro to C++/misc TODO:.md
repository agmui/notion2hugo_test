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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JXLXDGF%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIGJm1DtcErh0k5yghM9Ur%2FTVeEAOtnXo8jhjU2eaQ0W4AiBZZEVIA%2FieHJ8EXvIYdgumJ20UvsO7krHcoOSLb4rN%2Fyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMmxfjWPsqVrNEnludKtwDC1OQiHUuWyTX5WqQodex1enSwS3WlENuHzGJGlE6Wl9ocYEs71qKqzGJDQMcpWpeXleDemGxKBlTiF6WI9BCiqoiMaW2BxeOMvrJLP8%2BNgYIsAP8CQ0LvU7dxNUsattamhT5RvJdIsCXJ6Wls370BzCELk7e0yyk9OQF7mveIq3jLAH13qMHqmcSm8GYZ7QHtKgGVfgSEqUjZLEfmUfMn6LCcGEpzYeDT4zhvCt4OSSyNLI%2B65OfI7EoX8UlLEAZQJMiNNRZrw6Pf6Yn3NcleQJJGVhiFA2lsbLV1xIuzGvNAsc1efjtBpea7Mz4uT9VGdgll1lrkwokxC7UYz%2BkA7PdeQ5NMfKb8ClDfWi6AqbinQCPAgCEwFTodVJ4IAim9J6EnGss%2B1c0Tw8zxPte7mYrg2jdFGlZwjmOr5KZ1SQVffSIChlCDf%2B7GG3kJ1c%2FgyyM7iVmfzMv1NDblkcQOw2S%2FxkWR5gtHTkqiEgnK2ITB16UEt608MLA6E%2BzJZmiz0%2BGeqgka3NBGKyfc%2BhzQ3e8zygahXVLyxGjdcLVIu0XwmfNf4Ad2Pvy7HGD9Bqvp%2B9ZDdFn3JTI6dFndGh03DvbuvKu02xahIciL0JNUx1AgV4uAInGsWMs1i4w0%2B%2FvwgY6pgFQ0bgDEgyrZkKtj42JATsfKmnqo6F9gxzcqtRwqBvVo5wSRdZLjgsJGVMmKQzIp%2BaCMV7wIHPyagCqyf6UBH3%2BtIPWs8PdcGTuBgQVyWfPxlrya9SnbQCN89jmLFrOv6oEve2fnK4Fs1vHcMz3PqSpyozYOllqi5a7xJpRq2yOX6cVZY0449w94WPKwbUl%2FS9Yuqcsl6YJIIrqOIF8rp%2FwkzkbyrxB&X-Amz-Signature=11bc4206d4d3126b9defb18cc1fea5eee5c24a2adfb04811765f915bc75d896c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JXLXDGF%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIGJm1DtcErh0k5yghM9Ur%2FTVeEAOtnXo8jhjU2eaQ0W4AiBZZEVIA%2FieHJ8EXvIYdgumJ20UvsO7krHcoOSLb4rN%2Fyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMmxfjWPsqVrNEnludKtwDC1OQiHUuWyTX5WqQodex1enSwS3WlENuHzGJGlE6Wl9ocYEs71qKqzGJDQMcpWpeXleDemGxKBlTiF6WI9BCiqoiMaW2BxeOMvrJLP8%2BNgYIsAP8CQ0LvU7dxNUsattamhT5RvJdIsCXJ6Wls370BzCELk7e0yyk9OQF7mveIq3jLAH13qMHqmcSm8GYZ7QHtKgGVfgSEqUjZLEfmUfMn6LCcGEpzYeDT4zhvCt4OSSyNLI%2B65OfI7EoX8UlLEAZQJMiNNRZrw6Pf6Yn3NcleQJJGVhiFA2lsbLV1xIuzGvNAsc1efjtBpea7Mz4uT9VGdgll1lrkwokxC7UYz%2BkA7PdeQ5NMfKb8ClDfWi6AqbinQCPAgCEwFTodVJ4IAim9J6EnGss%2B1c0Tw8zxPte7mYrg2jdFGlZwjmOr5KZ1SQVffSIChlCDf%2B7GG3kJ1c%2FgyyM7iVmfzMv1NDblkcQOw2S%2FxkWR5gtHTkqiEgnK2ITB16UEt608MLA6E%2BzJZmiz0%2BGeqgka3NBGKyfc%2BhzQ3e8zygahXVLyxGjdcLVIu0XwmfNf4Ad2Pvy7HGD9Bqvp%2B9ZDdFn3JTI6dFndGh03DvbuvKu02xahIciL0JNUx1AgV4uAInGsWMs1i4w0%2B%2FvwgY6pgFQ0bgDEgyrZkKtj42JATsfKmnqo6F9gxzcqtRwqBvVo5wSRdZLjgsJGVMmKQzIp%2BaCMV7wIHPyagCqyf6UBH3%2BtIPWs8PdcGTuBgQVyWfPxlrya9SnbQCN89jmLFrOv6oEve2fnK4Fs1vHcMz3PqSpyozYOllqi5a7xJpRq2yOX6cVZY0449w94WPKwbUl%2FS9Yuqcsl6YJIIrqOIF8rp%2FwkzkbyrxB&X-Amz-Signature=3dff335f8cf5d54cc83749e750db09797990b6d8314f64e4fdc1758391bb73d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
