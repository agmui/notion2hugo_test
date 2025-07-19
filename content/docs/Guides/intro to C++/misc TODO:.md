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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUSIJNWU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbmnb%2FnB3vLDXgTJa2r%2F1myRc9WCZJNfOyWq6X2lXBugIgP2hS3hwwoSDHqqhx7q1aaI1ItZiFkrEowrargCjepU0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPe6TfRAWjXotMM%2FOyrcA6voefnlUeRBH%2FKI3qv4d6xt7F6x1yMgjioTSS2uOAaTd3nXL7Uvm9yWtTKEM4SNZefP30mDrJA0JDqKQcUua1fDJ1BYxC79OP9tUOVijTJmakFBHBmn4Ok0IbP%2FsgSD4%2BBu0hE1ZNQWDfi7BQXetQo3mf72%2F%2Bjz9yXioPnQUXHTr0Vsdc8GE%2F8omA1cZzzeGWgWVaQIInivDm5lamb0Ez%2B0U4VSGvo8LNPCTD8omEdS6BgOD0tXJ22L219HADEL%2FLrVxcajaBrhtIxItQfJKF%2BLgYZH%2BQkhbd0cE89yuUvYGG%2Fz2y8U6GjPREPNUumhR9UQTuYu6QYV3LAUgr8QpN5KZxVnpC8YlEl4AoqfvOPoGTUagG8TQCd%2FLjk3N0piPeACydLAIJ%2BQcxS5t7qNQewGY7tVKtcZXOiIllP4kMrpiVP5Mt0ATtZ9i2Bm5HzZRFE25W8aUsRjRhSFasznMSOL%2FH%2B0gMjWXoEdng2DuGczd67YAEGT90Tt6J%2F%2BRaIt6Et3n09HAEA68ehMAKBlRhhN6as9S9%2BZoFMCqT7elSsDChZ8bSGB%2BOFBewX5lnbZIfBcCReNBDIEqWh46VXdsdazKsh36jXfHsWK8dS3QfiQExCpluvu8GH9mYmqMMbF7MMGOqUBMge1AplM%2BP82%2FuOtVAZ9wK2wI7WozRORICxjH%2BWcami%2FsF3ZCsVS6thmUpdgogLmtUfRogO1625fgRaj%2F7LN%2BxlsSDdN6LbF9xSzL8YQWK1ngb11TqmWCDkqiFP%2Fgxu7IgbnMWjeUNe0p4RtDp%2FlLRraxmuFtCFz2z%2FpnmQr0x1QAvvMkejpgObMfG2ztSNj8btQSnqPCuMbdOqFP8gttmzVZFft&X-Amz-Signature=6cca8ea8ab66059434e57ae24d398fd17f449404f2fc532afaea380607ee5854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUSIJNWU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbmnb%2FnB3vLDXgTJa2r%2F1myRc9WCZJNfOyWq6X2lXBugIgP2hS3hwwoSDHqqhx7q1aaI1ItZiFkrEowrargCjepU0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPe6TfRAWjXotMM%2FOyrcA6voefnlUeRBH%2FKI3qv4d6xt7F6x1yMgjioTSS2uOAaTd3nXL7Uvm9yWtTKEM4SNZefP30mDrJA0JDqKQcUua1fDJ1BYxC79OP9tUOVijTJmakFBHBmn4Ok0IbP%2FsgSD4%2BBu0hE1ZNQWDfi7BQXetQo3mf72%2F%2Bjz9yXioPnQUXHTr0Vsdc8GE%2F8omA1cZzzeGWgWVaQIInivDm5lamb0Ez%2B0U4VSGvo8LNPCTD8omEdS6BgOD0tXJ22L219HADEL%2FLrVxcajaBrhtIxItQfJKF%2BLgYZH%2BQkhbd0cE89yuUvYGG%2Fz2y8U6GjPREPNUumhR9UQTuYu6QYV3LAUgr8QpN5KZxVnpC8YlEl4AoqfvOPoGTUagG8TQCd%2FLjk3N0piPeACydLAIJ%2BQcxS5t7qNQewGY7tVKtcZXOiIllP4kMrpiVP5Mt0ATtZ9i2Bm5HzZRFE25W8aUsRjRhSFasznMSOL%2FH%2B0gMjWXoEdng2DuGczd67YAEGT90Tt6J%2F%2BRaIt6Et3n09HAEA68ehMAKBlRhhN6as9S9%2BZoFMCqT7elSsDChZ8bSGB%2BOFBewX5lnbZIfBcCReNBDIEqWh46VXdsdazKsh36jXfHsWK8dS3QfiQExCpluvu8GH9mYmqMMbF7MMGOqUBMge1AplM%2BP82%2FuOtVAZ9wK2wI7WozRORICxjH%2BWcami%2FsF3ZCsVS6thmUpdgogLmtUfRogO1625fgRaj%2F7LN%2BxlsSDdN6LbF9xSzL8YQWK1ngb11TqmWCDkqiFP%2Fgxu7IgbnMWjeUNe0p4RtDp%2FlLRraxmuFtCFz2z%2FpnmQr0x1QAvvMkejpgObMfG2ztSNj8btQSnqPCuMbdOqFP8gttmzVZFft&X-Amz-Signature=437a6222b66fa092c00f9acca3cee63922c75697f395f799d66be58a2900510e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
