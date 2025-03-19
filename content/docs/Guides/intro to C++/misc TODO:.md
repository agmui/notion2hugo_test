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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VGDBSQU%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHhEJNWjXlcbjf5emBe3b3iYmyHTuH2EZH2h0p1aOxycAiA%2FpgRjzEkrHYS6jXFsnOHcM%2BB3TixgafHdeR7ZPW60fCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMy4dOdZ%2Fi%2FZa77UZlKtwDaC%2F646VjICDWLDT%2BPy4iVxLjt0zeIXVQlXcXouQwOsVtOjPnYA6EkUiZCeeWksndBfhWxNszBjAyyQqmJ3SNTHjG08deH9v5yXUb%2BwWK1R1DLU7%2FYLoXyaNfkfb%2Fk3DrtvxCnPpGtoX7yFozF8kHoRu2Qs5oLrkfHv%2BAlcP4fLF%2BN00KVla1geHE0WXifllkvYjdNGgZ1ZsoNak%2FCSmBdx0QJO3SCtNrE5byX0uGRK291SBKmaGvHkPJYaWlAkB4ajmyDTIV8K1A3wsiGTE8QQTFNvAfeCZRRZcQyNDgeZvbdBZF7kTjMkwhXTsFy76i2luMuz3d%2FNIPI%2BXnWIZrfkNzy%2Bkh0NllOq5qJgh3WIPtTGhADrtfWpZC1jQk8TtVNfybhLTeN17FAAosU%2Betg0aos9TCe%2B5sru17bwg4GVzpTAdzh8Jy2MxNYb278cs5FnSkx0OMmViTgE3hIV2zo7bufEQ7wSucSdbKIC7atDct25WYLQgqOVHgUATq9HWm8%2FUlxZvhkqzJBDPOT5K7X4Mt8KM324GP595sS1nS8igKhubT8tlg5MHiW90IV%2BztiPZwPQ42K5lhOYb7anIvo1xbUoxeFa%2BNAChbIw0qsYDZIBwevAob3p9Jnhcwm7zrvgY6pgHx1HPlsgUrPxDsaZrel4BB%2FXB4%2FPmJNcprA5Ens5PIa2XZOZrpBHGujcEDh%2Bo%2BK5My8rb95ymZN8vBcrXMICSnM61DiwR609hbTGgeDyJZNzuM%2FfnbloqW6231H7GCfqoIcDFZqVs9%2BTrVsHEDL4o2xkeousx8UD7Y9mR7zq0jyziJRsIGci2%2Fy8YHC0%2FmJ%2F%2FHey0eztG0d1alnABdmsxD6RpMaZpq&X-Amz-Signature=1f1d65927e646106fe601cd0ad833efd130e543cc0bd2c287239ba18a2de75dc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VGDBSQU%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHhEJNWjXlcbjf5emBe3b3iYmyHTuH2EZH2h0p1aOxycAiA%2FpgRjzEkrHYS6jXFsnOHcM%2BB3TixgafHdeR7ZPW60fCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMy4dOdZ%2Fi%2FZa77UZlKtwDaC%2F646VjICDWLDT%2BPy4iVxLjt0zeIXVQlXcXouQwOsVtOjPnYA6EkUiZCeeWksndBfhWxNszBjAyyQqmJ3SNTHjG08deH9v5yXUb%2BwWK1R1DLU7%2FYLoXyaNfkfb%2Fk3DrtvxCnPpGtoX7yFozF8kHoRu2Qs5oLrkfHv%2BAlcP4fLF%2BN00KVla1geHE0WXifllkvYjdNGgZ1ZsoNak%2FCSmBdx0QJO3SCtNrE5byX0uGRK291SBKmaGvHkPJYaWlAkB4ajmyDTIV8K1A3wsiGTE8QQTFNvAfeCZRRZcQyNDgeZvbdBZF7kTjMkwhXTsFy76i2luMuz3d%2FNIPI%2BXnWIZrfkNzy%2Bkh0NllOq5qJgh3WIPtTGhADrtfWpZC1jQk8TtVNfybhLTeN17FAAosU%2Betg0aos9TCe%2B5sru17bwg4GVzpTAdzh8Jy2MxNYb278cs5FnSkx0OMmViTgE3hIV2zo7bufEQ7wSucSdbKIC7atDct25WYLQgqOVHgUATq9HWm8%2FUlxZvhkqzJBDPOT5K7X4Mt8KM324GP595sS1nS8igKhubT8tlg5MHiW90IV%2BztiPZwPQ42K5lhOYb7anIvo1xbUoxeFa%2BNAChbIw0qsYDZIBwevAob3p9Jnhcwm7zrvgY6pgHx1HPlsgUrPxDsaZrel4BB%2FXB4%2FPmJNcprA5Ens5PIa2XZOZrpBHGujcEDh%2Bo%2BK5My8rb95ymZN8vBcrXMICSnM61DiwR609hbTGgeDyJZNzuM%2FfnbloqW6231H7GCfqoIcDFZqVs9%2BTrVsHEDL4o2xkeousx8UD7Y9mR7zq0jyziJRsIGci2%2Fy8YHC0%2FmJ%2F%2FHey0eztG0d1alnABdmsxD6RpMaZpq&X-Amz-Signature=2d4e7dcc6d354858ac91eb19b2b326027fd66f453e9288fb2f71101099789c1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
