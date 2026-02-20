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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAZKBGYN%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjxtoenMFs6gXWC0JS47sGl%2FKbV%2FPybUlA7bGxLffiWQIhALWUtkZdQU15ybFR%2B0TLTUz7RaBRIW5frRqYjuJ5CQo4KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwc6JoDSaG2wAzapm8q3AN%2BuQeoTIQf4Uaq4W4lbEsy%2BmEczzsiwpqFZYXcmQwmYOSjWEllxdG0vtoc9%2BlBVwMsBrB86nQxcFhWXu%2FxhzV6Ik2RSh7VH%2BmDZrjwXT6q%2BN0C8p%2FLIBL1OQXhPfKB%2FpCs77jbenMNbbvkUb2JXpt7jGkPzfs3yyPoGfKxMV96MmK%2FIt%2BYs2Tgd%2BktpRepUSRc0vjPkhe1WC7THRQkyapp7qzbNXIWUwCHhStQqZRLuM95t1SEIF0PDijccqAk%2FrjFVvI5SVZDuJpjEpk1yvI8dOeQhoEkJBP4z8RRuM%2FzKWVaqx3jMAOO6f3ZxBUGtNMTlRWbc4pgktK%2Fengv7Sw%2BM0cgj6m65gHXNYQOVnbmNbKAB7NYXPy6COvKTql4vOdm0%2BHWfy4aVqH%2F%2BKZc%2FcI%2BAGrGmiSm7VfNPhMuLlG2yhdegaN2h2lC0NUvpVOdWd%2FThMi46ahcYUxf848WX1QWmHo%2FeiEljT19jejVe%2FSY3fNtRu8rfMMtmBnEjxY5Jms7NqGQQZDrqP0zgVOqJaZJ4lNyK40%2Ft60aw65ZPFr09ImMepeXCiuT4N0OSZCfOIR7eOxiO%2B3iFVqhUnsWvZbPzLFAq98KKOBAhDfrVt3AcI4O1MetLrYeLIPKsjDn597MBjqkAcAXDxKcAL3aaJoU2sjc2gd8QeRxDBKzlQM3F9Rn2sxofr04VnrEtjG6hFCvBoVwxuXZpmrrxFx8xfzQAogMZmuu0bOjUOzUoBj7vgG%2BztyBbH2eukyb2vUueGDBqjGc8E7BlaeKoyXhK8nxlaf2sWuuurvI2iwA6pC0cCOoZUIyQNJKqJ%2FtepijNJx%2FWEsRrCWWThSIedtQlh5pIQ884Y05JqFU&X-Amz-Signature=5e20c03583a1aa4c5bb4974c468863e2693d3a413a9d3c9be466caf22b3a33ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAZKBGYN%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjxtoenMFs6gXWC0JS47sGl%2FKbV%2FPybUlA7bGxLffiWQIhALWUtkZdQU15ybFR%2B0TLTUz7RaBRIW5frRqYjuJ5CQo4KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwc6JoDSaG2wAzapm8q3AN%2BuQeoTIQf4Uaq4W4lbEsy%2BmEczzsiwpqFZYXcmQwmYOSjWEllxdG0vtoc9%2BlBVwMsBrB86nQxcFhWXu%2FxhzV6Ik2RSh7VH%2BmDZrjwXT6q%2BN0C8p%2FLIBL1OQXhPfKB%2FpCs77jbenMNbbvkUb2JXpt7jGkPzfs3yyPoGfKxMV96MmK%2FIt%2BYs2Tgd%2BktpRepUSRc0vjPkhe1WC7THRQkyapp7qzbNXIWUwCHhStQqZRLuM95t1SEIF0PDijccqAk%2FrjFVvI5SVZDuJpjEpk1yvI8dOeQhoEkJBP4z8RRuM%2FzKWVaqx3jMAOO6f3ZxBUGtNMTlRWbc4pgktK%2Fengv7Sw%2BM0cgj6m65gHXNYQOVnbmNbKAB7NYXPy6COvKTql4vOdm0%2BHWfy4aVqH%2F%2BKZc%2FcI%2BAGrGmiSm7VfNPhMuLlG2yhdegaN2h2lC0NUvpVOdWd%2FThMi46ahcYUxf848WX1QWmHo%2FeiEljT19jejVe%2FSY3fNtRu8rfMMtmBnEjxY5Jms7NqGQQZDrqP0zgVOqJaZJ4lNyK40%2Ft60aw65ZPFr09ImMepeXCiuT4N0OSZCfOIR7eOxiO%2B3iFVqhUnsWvZbPzLFAq98KKOBAhDfrVt3AcI4O1MetLrYeLIPKsjDn597MBjqkAcAXDxKcAL3aaJoU2sjc2gd8QeRxDBKzlQM3F9Rn2sxofr04VnrEtjG6hFCvBoVwxuXZpmrrxFx8xfzQAogMZmuu0bOjUOzUoBj7vgG%2BztyBbH2eukyb2vUueGDBqjGc8E7BlaeKoyXhK8nxlaf2sWuuurvI2iwA6pC0cCOoZUIyQNJKqJ%2FtepijNJx%2FWEsRrCWWThSIedtQlh5pIQ884Y05JqFU&X-Amz-Signature=a67d0444f1d10ea0e1b87ecd042c403216aff25b8eaf35c3baefb3f081af3a7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
