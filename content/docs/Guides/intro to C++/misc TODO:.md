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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X24N4OAA%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDHYjGsYFVq%2BFnmYN3MA3UfymHj314L7kixXbcur%2FWRAiEA8rnUschxUR6HUEj%2BSFHUnVt2VrPe1NMWi7718XRQ8OwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdx836rbCwSK2xHjyrcA%2Fb0vlfau86xP3C3YfR5AqRmJ%2FwyRFy%2BdkEp2jWmkpvdWbYeNLjicdH0lfks%2FoJorLr7tm1lzZF1sSpYy45ZvLrPgo1qxH6KKjkn6sKwQLk17L3yELrkrN1%2BMzHq4kBix7sRl4x0rZLs0xqWnbFerkuMh6dcZkVxXNPfQrQRw8cXJjfdVhvXKhSlxOXq68FvBaAAHz1PizalYEOmZzBp%2FRmL8GnwfQQUtcwSvin0NRz8ADn0k%2F1Euebf1Z%2F%2FXN0HiVluA7YLIzFvLQfQ9GHByClFaHQ0JqSV6sdd0loVkFIDItx38P8yXXH9BjM34WQYbZ4oEN%2FO9Ouhwk%2FApjnjo%2F0yAwf4jAmc77tvnrj608aTcJFxEbcEvP4fbykErvqLJua86iLsuw%2B%2FRt20jjDYveGxyH3MKfNRSENf7DMHLpgxa75h8gBCwAcZUV8i2gQtgPRiDsW9A542gkfYXtYTFAR7g93kW0%2FYaOBJ7w%2FSb9OqAwr4Uai7gHoUi8pu5AujiI7yr2rIiLlHh2%2FuHW%2FQDRLOj7MplBccP41Yb7PjlboBL2sU7%2BuvBH44vkD%2BTxx20hvP8ZV4jkL1CguK82iIh%2FCHf0%2Bcp2ZWoSWSxQBETFg1dCmD6MumCzYJu5y%2BMK7kob0GOqUBhqwtFmXEO2%2F2NS0hOGoC2m437bx6uKSxhdpG2SMGv3uLUuUP4S1J1UvOjOw8zg8hfiu9wr2AgfV%2F%2FeMv8OrqbUaOrJK3uTyL89T0dBq6n4Kn1XFURzX2QazLjLf2aKasO1goDQsWW99aP89CL8hHwh4qHxhezJ3BtWWTfjz6WIdICHci%2FnMavt%2FYo1MK0Cq5fTL2Xv0ipsoU4bTblK%2BOt5N0ETmQ&X-Amz-Signature=ceac762431a18e9b077091dcb85dd69c60191852158e6b1bc6ec5ef019849c82&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X24N4OAA%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDHYjGsYFVq%2BFnmYN3MA3UfymHj314L7kixXbcur%2FWRAiEA8rnUschxUR6HUEj%2BSFHUnVt2VrPe1NMWi7718XRQ8OwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdx836rbCwSK2xHjyrcA%2Fb0vlfau86xP3C3YfR5AqRmJ%2FwyRFy%2BdkEp2jWmkpvdWbYeNLjicdH0lfks%2FoJorLr7tm1lzZF1sSpYy45ZvLrPgo1qxH6KKjkn6sKwQLk17L3yELrkrN1%2BMzHq4kBix7sRl4x0rZLs0xqWnbFerkuMh6dcZkVxXNPfQrQRw8cXJjfdVhvXKhSlxOXq68FvBaAAHz1PizalYEOmZzBp%2FRmL8GnwfQQUtcwSvin0NRz8ADn0k%2F1Euebf1Z%2F%2FXN0HiVluA7YLIzFvLQfQ9GHByClFaHQ0JqSV6sdd0loVkFIDItx38P8yXXH9BjM34WQYbZ4oEN%2FO9Ouhwk%2FApjnjo%2F0yAwf4jAmc77tvnrj608aTcJFxEbcEvP4fbykErvqLJua86iLsuw%2B%2FRt20jjDYveGxyH3MKfNRSENf7DMHLpgxa75h8gBCwAcZUV8i2gQtgPRiDsW9A542gkfYXtYTFAR7g93kW0%2FYaOBJ7w%2FSb9OqAwr4Uai7gHoUi8pu5AujiI7yr2rIiLlHh2%2FuHW%2FQDRLOj7MplBccP41Yb7PjlboBL2sU7%2BuvBH44vkD%2BTxx20hvP8ZV4jkL1CguK82iIh%2FCHf0%2Bcp2ZWoSWSxQBETFg1dCmD6MumCzYJu5y%2BMK7kob0GOqUBhqwtFmXEO2%2F2NS0hOGoC2m437bx6uKSxhdpG2SMGv3uLUuUP4S1J1UvOjOw8zg8hfiu9wr2AgfV%2F%2FeMv8OrqbUaOrJK3uTyL89T0dBq6n4Kn1XFURzX2QazLjLf2aKasO1goDQsWW99aP89CL8hHwh4qHxhezJ3BtWWTfjz6WIdICHci%2FnMavt%2FYo1MK0Cq5fTL2Xv0ipsoU4bTblK%2BOt5N0ETmQ&X-Amz-Signature=fea359b7748d4c615c5c4a8a03ba2f609c382754dcdb7c4bf151e06ec5a12e5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
