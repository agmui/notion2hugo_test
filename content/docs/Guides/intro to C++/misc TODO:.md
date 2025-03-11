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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC3N6N7T%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIF%2BucfbLvc6f4a%2FXMghFkCtG3jimGYJXBos7vQ5hvnsNAiBR2a%2FxO%2FmPKNVJeRENVkbolLGRua0VNAw9RrzjegjAgCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEdsuyLV2Sf1rDsowKtwDqAkjpdxmJzNaH7EcBILxDchYA99zuobvuiEcu%2BkkIeg7dc3hsX4GJSZt4QzBdiafF%2BaLeQmpqG%2FePVYR88w47e4f8LdrPNpgai1XJkv84FGBqGhTUHAz6ZI8yMl7fZIMBz3HFVfHRNSAaO%2FlqMFWEOHGWmFLw4yauZX1iOBfPTLonWJDTIT3qCybCYhe1hCTmVblGzyt8zhLI4i7X5P5eDy3%2BK%2FEn2syW5XQ3EJnJCOXTS5JzBUHUiQaTLucOz18m4CcKvLm%2B5pMhVXs%2FNIkJuuJoiF9OzwMbUKMRnvP1mVUbo%2B4wL1S%2F9AtOyctAWju3ju38jpWJ5PbRrVKNpXFnFYQBFBOahUakNqyazsK6x1Bp2C1%2BKJ2JareZgTe0nZrZCsBY7GtTyzlgIL0oMEWfGBXcgU0LyRTkso%2F4JDy7O3J%2FSz63nUPUkA5abQkRfCa7Ytfgiz0xWKhYE3zXb1ROaihj4ogcKT%2BJWoeQLe0XVo%2Frt19wtYY1jQ6Re%2FsGz9WIpIosoQpqEuwLbQDPT6A7MWEk5neyr8I4tDSG5HPZag9odO69VVFaAp7gsZKQO7cjPUdwNTcG17zqcei94uaUZBFZEld7GcIzoH6GJVBSjhvMmJp0CSrALYiWrUw9YvBvgY6pgEb4KmM2gC2dtoZhmUna2FEfP8Gbyn5asFWMuS%2FTWr5JeuCo7o4GSfO7MRiQti6emyBZ64CgQVt9X6GOrCkfPgrlmXEzizrQ64b0VDBGJC9PTm8fXEnuNKEwFtV46OnRqIjrVgojoPONZHmIjOQrXlnFXgqD2%2B6HT0JYepg0nd%2F3%2FgFtWMjayZ441r8dIRM5CLKrut5RTOZueehTgDiG%2F%2Fz4cU2fHbJ&X-Amz-Signature=0cb6fc296d2d3d3d0b98d64154622ca8426dc0d22cda987ba491441731684583&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC3N6N7T%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIF%2BucfbLvc6f4a%2FXMghFkCtG3jimGYJXBos7vQ5hvnsNAiBR2a%2FxO%2FmPKNVJeRENVkbolLGRua0VNAw9RrzjegjAgCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEdsuyLV2Sf1rDsowKtwDqAkjpdxmJzNaH7EcBILxDchYA99zuobvuiEcu%2BkkIeg7dc3hsX4GJSZt4QzBdiafF%2BaLeQmpqG%2FePVYR88w47e4f8LdrPNpgai1XJkv84FGBqGhTUHAz6ZI8yMl7fZIMBz3HFVfHRNSAaO%2FlqMFWEOHGWmFLw4yauZX1iOBfPTLonWJDTIT3qCybCYhe1hCTmVblGzyt8zhLI4i7X5P5eDy3%2BK%2FEn2syW5XQ3EJnJCOXTS5JzBUHUiQaTLucOz18m4CcKvLm%2B5pMhVXs%2FNIkJuuJoiF9OzwMbUKMRnvP1mVUbo%2B4wL1S%2F9AtOyctAWju3ju38jpWJ5PbRrVKNpXFnFYQBFBOahUakNqyazsK6x1Bp2C1%2BKJ2JareZgTe0nZrZCsBY7GtTyzlgIL0oMEWfGBXcgU0LyRTkso%2F4JDy7O3J%2FSz63nUPUkA5abQkRfCa7Ytfgiz0xWKhYE3zXb1ROaihj4ogcKT%2BJWoeQLe0XVo%2Frt19wtYY1jQ6Re%2FsGz9WIpIosoQpqEuwLbQDPT6A7MWEk5neyr8I4tDSG5HPZag9odO69VVFaAp7gsZKQO7cjPUdwNTcG17zqcei94uaUZBFZEld7GcIzoH6GJVBSjhvMmJp0CSrALYiWrUw9YvBvgY6pgEb4KmM2gC2dtoZhmUna2FEfP8Gbyn5asFWMuS%2FTWr5JeuCo7o4GSfO7MRiQti6emyBZ64CgQVt9X6GOrCkfPgrlmXEzizrQ64b0VDBGJC9PTm8fXEnuNKEwFtV46OnRqIjrVgojoPONZHmIjOQrXlnFXgqD2%2B6HT0JYepg0nd%2F3%2FgFtWMjayZ441r8dIRM5CLKrut5RTOZueehTgDiG%2F%2Fz4cU2fHbJ&X-Amz-Signature=cb49deb69058a782e6502951dc3c871683dc92927feab9750dcdd01eed63cdad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
