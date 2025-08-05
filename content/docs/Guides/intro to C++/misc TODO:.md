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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPGV3IV2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBPr9LY5bkyDRnU%2FJonyFEDX467sbocgGCZHDkQ601vOAiBlcpsvJqaAPgHa%2FrKnSycrpyO9RIMrBtp%2FrlRGWsxkPir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMEjYPnp77Gv54fpJyKtwDAE9tVKOG%2B6ghKSIPefw1A4Kmg%2Foj1H%2FCAnmw4%2FkdAQ%2BVpfKO7Y%2F1SzYRB42ftxoGY4J%2FW%2F30Itz6HznYdcWggWLIQBXwlxjTxjFc83H7ysFVPf63afHHaEE3eQtgkO3WVDMWCzo4SHMzMvPyQ9cglYtG5S%2BCZ2dAAIgeoiegZWcXRRWPCIIpRYJZ6iUkRHQWdRTE9fTds6M4IKO2usL57vaouPIv6E1Xk9OjKTGESyaNaXGm5gIMEXTU4xQtBt%2FtdUhUdh0N0JnheG8NsZSgCJft4o6C0ZAYRzrDjVcua7C4h2O5xwavPIwhXN54CE4gGdBFctYuRBk2vOXnC%2FHQ9PPw7V%2BhYmqwn82zjnunm%2Bh6dNiSz6DnXKQoQq9PFw2NGxVUkMhbgZLIBU8r8Qnf9XFvY7jLex49rw0gDri%2FDZg7a3nL%2FBTnmVlh0AibSLZtkA2O9yE0CSxI%2BG910uy0vMd0DGiwnBlL7qw%2BoK5q3p1CVYKRgl04hxu5uck9vDNC9hF4oojCpHU3l7aBGXLHwUfF3XBMhwfri5WSWm5FmyhLQ3FmM9PjwUevzElZvoZxO%2ByFZOJNqYEsOhLB4EL1AyzKAcgERXYv0iODGGpbw8UsllpIUh%2Fci9oQ0GMwvOHJxAY6pgHTgabW1Ia2hHTYIHDodnmgB4GeOb%2F4ipbhA0HduiplToHAr2ZmscsbrOkxF2i%2FRvGYjQqmbj0tO%2BTDR8rK5wuJ%2FXW%2Fglb0PNhRGlMVBKbJ3g%2F4LjUfrhdZB868O2UhgS%2BWW90RV8Uw%2BL7%2BsveEaeHO5ildZ%2F8NUG6CZgHJBtoU2bRlv7AgjwCXmObp6T0grldg36NpjT9Sdz7j6rNfFkwbFkl%2FdNvB&X-Amz-Signature=a83ea1427b4eadafbff08ccdd256997dd2c20a823672c2d340f94c465eeda467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPGV3IV2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBPr9LY5bkyDRnU%2FJonyFEDX467sbocgGCZHDkQ601vOAiBlcpsvJqaAPgHa%2FrKnSycrpyO9RIMrBtp%2FrlRGWsxkPir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMEjYPnp77Gv54fpJyKtwDAE9tVKOG%2B6ghKSIPefw1A4Kmg%2Foj1H%2FCAnmw4%2FkdAQ%2BVpfKO7Y%2F1SzYRB42ftxoGY4J%2FW%2F30Itz6HznYdcWggWLIQBXwlxjTxjFc83H7ysFVPf63afHHaEE3eQtgkO3WVDMWCzo4SHMzMvPyQ9cglYtG5S%2BCZ2dAAIgeoiegZWcXRRWPCIIpRYJZ6iUkRHQWdRTE9fTds6M4IKO2usL57vaouPIv6E1Xk9OjKTGESyaNaXGm5gIMEXTU4xQtBt%2FtdUhUdh0N0JnheG8NsZSgCJft4o6C0ZAYRzrDjVcua7C4h2O5xwavPIwhXN54CE4gGdBFctYuRBk2vOXnC%2FHQ9PPw7V%2BhYmqwn82zjnunm%2Bh6dNiSz6DnXKQoQq9PFw2NGxVUkMhbgZLIBU8r8Qnf9XFvY7jLex49rw0gDri%2FDZg7a3nL%2FBTnmVlh0AibSLZtkA2O9yE0CSxI%2BG910uy0vMd0DGiwnBlL7qw%2BoK5q3p1CVYKRgl04hxu5uck9vDNC9hF4oojCpHU3l7aBGXLHwUfF3XBMhwfri5WSWm5FmyhLQ3FmM9PjwUevzElZvoZxO%2ByFZOJNqYEsOhLB4EL1AyzKAcgERXYv0iODGGpbw8UsllpIUh%2Fci9oQ0GMwvOHJxAY6pgHTgabW1Ia2hHTYIHDodnmgB4GeOb%2F4ipbhA0HduiplToHAr2ZmscsbrOkxF2i%2FRvGYjQqmbj0tO%2BTDR8rK5wuJ%2FXW%2Fglb0PNhRGlMVBKbJ3g%2F4LjUfrhdZB868O2UhgS%2BWW90RV8Uw%2BL7%2BsveEaeHO5ildZ%2F8NUG6CZgHJBtoU2bRlv7AgjwCXmObp6T0grldg36NpjT9Sdz7j6rNfFkwbFkl%2FdNvB&X-Amz-Signature=044823d1d7fc4449e9809e258cae63bae61cd7dffaa4446464d361972fdcf1c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
