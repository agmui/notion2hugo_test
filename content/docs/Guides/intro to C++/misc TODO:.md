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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZBJQVEJ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3RLTaNg3yx56%2FUE42yJTUQV8p1mgsglPP%2Fu6J1pdGowIgUGv%2BysOmyVoQM8SYkoAuR1OXvQYK97GTqD%2Bd7Io5rCYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPmZMlS8fpRFmaV4yrcA9Ca8m7xwh5tOO6NnYkZcl%2FzcTWfL5q4JkJxEgnDryVMdCXkI7mvi69Qr2xzt1ymHex%2Fn%2BYIf0w%2FZQDHiCKKvELHRNW18iT0NyyLrMBiO71SFIsdbWUj7tTJbLXRSJB3Uy4SojOELr0A3MZO%2BHMsf775suWrRqmkuYYj%2FPmjeOfqa6hXAjWCLVO%2FtzaAZyeULlHUpnO4TiINdPilz26J3k3N0M%2F2mpXZ8Ne1wgxciS1O%2FWWUNJi8eOEj7wnl01oE5xZQ7p%2B%2FizEaktEi9VmhmLsW6kqasDftQEF%2BT4cvUQzpAPIp5Dcg7gCqN%2BAo0IymLj1MKIHE6Tz0E2dAz4D%2BoUp3FdZDqzJA49hF9GDu9mzwWQW%2B3zSiMZJM2cduLLbDFb6DYL2w5UsOhSvtE%2FDHFVEXwIVJY9gA0A6zONUajnD%2FEBLNHr9Ke3%2B7L7IMy5qgo6%2BLDSuyklDFErYq05eTRCF19IoW%2BoVPYLFLpq%2FW3%2BwxNGByJuUB2zc%2F5HWX%2BzOf2S8SlY60%2B9GP%2Ff0jt%2BDgeaex2mYXsfBHNVY8JIA1v9ZhQRu8SBfrvXawyGVjjecgsoZ%2FNf7shvlyiKX%2BrikgF3rgfZDzbVdeUkqupwdYFMY6Oek4uK83eiJ1QFQhMKuD4r0GOqUBQvxc%2F4N0JkBhQwUvrxC%2FsSwkXbfZ583hH0bkqIztE5eA7VhXYR9IZqWAjDaum%2BTiMXNMTrXDtVNsHgMROS0U%2F4hMnlHMgGHtvaDb6LGgf6f9LsYjITRqPHE4O%2BNURe6mQb1PjwoXb9lIEWzjf%2Fi4Zpte5KlqG4hahBgCLbreBONic2xLYSESW7pJz1gOxHmXWgiKSGYr5eNusRKzfoon0mzPuBF1&X-Amz-Signature=f5d5d9bb0b46ed419968edac1264059dff6d23f197426c00c1e89d157f95da95&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZBJQVEJ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3RLTaNg3yx56%2FUE42yJTUQV8p1mgsglPP%2Fu6J1pdGowIgUGv%2BysOmyVoQM8SYkoAuR1OXvQYK97GTqD%2Bd7Io5rCYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPmZMlS8fpRFmaV4yrcA9Ca8m7xwh5tOO6NnYkZcl%2FzcTWfL5q4JkJxEgnDryVMdCXkI7mvi69Qr2xzt1ymHex%2Fn%2BYIf0w%2FZQDHiCKKvELHRNW18iT0NyyLrMBiO71SFIsdbWUj7tTJbLXRSJB3Uy4SojOELr0A3MZO%2BHMsf775suWrRqmkuYYj%2FPmjeOfqa6hXAjWCLVO%2FtzaAZyeULlHUpnO4TiINdPilz26J3k3N0M%2F2mpXZ8Ne1wgxciS1O%2FWWUNJi8eOEj7wnl01oE5xZQ7p%2B%2FizEaktEi9VmhmLsW6kqasDftQEF%2BT4cvUQzpAPIp5Dcg7gCqN%2BAo0IymLj1MKIHE6Tz0E2dAz4D%2BoUp3FdZDqzJA49hF9GDu9mzwWQW%2B3zSiMZJM2cduLLbDFb6DYL2w5UsOhSvtE%2FDHFVEXwIVJY9gA0A6zONUajnD%2FEBLNHr9Ke3%2B7L7IMy5qgo6%2BLDSuyklDFErYq05eTRCF19IoW%2BoVPYLFLpq%2FW3%2BwxNGByJuUB2zc%2F5HWX%2BzOf2S8SlY60%2B9GP%2Ff0jt%2BDgeaex2mYXsfBHNVY8JIA1v9ZhQRu8SBfrvXawyGVjjecgsoZ%2FNf7shvlyiKX%2BrikgF3rgfZDzbVdeUkqupwdYFMY6Oek4uK83eiJ1QFQhMKuD4r0GOqUBQvxc%2F4N0JkBhQwUvrxC%2FsSwkXbfZ583hH0bkqIztE5eA7VhXYR9IZqWAjDaum%2BTiMXNMTrXDtVNsHgMROS0U%2F4hMnlHMgGHtvaDb6LGgf6f9LsYjITRqPHE4O%2BNURe6mQb1PjwoXb9lIEWzjf%2Fi4Zpte5KlqG4hahBgCLbreBONic2xLYSESW7pJz1gOxHmXWgiKSGYr5eNusRKzfoon0mzPuBF1&X-Amz-Signature=1b16f56152c50f0d38a5f556642aa7ed32f42c03b07882080a239a0a8b9ad3b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
