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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4L7L26%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP5B0fGlQoyyI9Ik%2BbACokfNyFATVSq3MZbgkrIC16TwIgAJNqUAgsoi7J8wwc8eEBOyk9CCW1e9nDnWgp6o0q6KQqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFruDsZMKWOOq4NBiSrcA3eCIjC6Jlr%2BHlhxdHnUdSvLOH167v0j7sdJe3QqUhoc0%2FtZqn%2BFNxey4nFb5QHCVS90EsLNb9zF5CWvFchUl1RuZQxTOygea9HpKNWDshpCYOlbaPF8JxCc8vtmhZaqqw%2FW0OrAfIjn7lAJriQJW9VOBfFHq%2Bj1sOQZqdeK0QLfOm3AxtsVt1rDzrZVcOLcsBW9yG%2BWeemJiOa5A9rrQuwCS9NUIKHxIo%2F7RnAPhL0SRrHzJZQ0FBcVdG%2B93ET%2BAa9hw6o1pyY6DDdUofql1GBK2ut3R%2Fc70XXYy2Rz97dVJREcA0HcOBIa1JurCkMgghtOAHCqLhV4nN6lACSD7bDuuzlts18vXZLNSsKTEXIFjbRnbFp%2Fn%2FfcMHM1mDvMR6muV2ruTa%2FeFsD4WLcxVuTZv7qNqArvpiw81meGrNLRUGOQmyha%2BRuPPIJ3cxOvh5q4fxL2Fh5pD18FFHf8acIYm4zJ8tRE5eCXDXnChqVHquUbpY49xK0ux2mCZJDnPMzFrgwyMZbtsRH9gu3sX%2BKpvjt%2BuwCN%2BuIC96Gfsm1RmIfjwY3gOTYXBR9axfRRQhaVvd6klKRMCxMDafRcJ37Z4WuPvO7Z5QX8kCgyt%2F7m9RBifhCHBQYJ%2BnfDMLiEm74GOqUBQhhTRV%2BHJyTsWCe87IX1bgQ%2B9Vn%2F3LJSbyQqd7OXC%2FJEV3gkKZg97CLUdAiHeybNAbqECfn7vFRJRuIxojSzGaUW7siI0eYJwXY2p%2FkLZNfvKqkmCazU2qwEBE8%2Ba7fffB9Us4LwGRqJxfub0B9n28XA05Fi98mFF9K1jeCvP5Y7bgyTABFoq9do9BtLfyGfLzHXdgiyV5R5RwzZCo%2BIxLhJugrX&X-Amz-Signature=195e8ea8b717bfaef2981457d01413b4e4709277a7251f6fd789f673bd164418&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4L7L26%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP5B0fGlQoyyI9Ik%2BbACokfNyFATVSq3MZbgkrIC16TwIgAJNqUAgsoi7J8wwc8eEBOyk9CCW1e9nDnWgp6o0q6KQqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFruDsZMKWOOq4NBiSrcA3eCIjC6Jlr%2BHlhxdHnUdSvLOH167v0j7sdJe3QqUhoc0%2FtZqn%2BFNxey4nFb5QHCVS90EsLNb9zF5CWvFchUl1RuZQxTOygea9HpKNWDshpCYOlbaPF8JxCc8vtmhZaqqw%2FW0OrAfIjn7lAJriQJW9VOBfFHq%2Bj1sOQZqdeK0QLfOm3AxtsVt1rDzrZVcOLcsBW9yG%2BWeemJiOa5A9rrQuwCS9NUIKHxIo%2F7RnAPhL0SRrHzJZQ0FBcVdG%2B93ET%2BAa9hw6o1pyY6DDdUofql1GBK2ut3R%2Fc70XXYy2Rz97dVJREcA0HcOBIa1JurCkMgghtOAHCqLhV4nN6lACSD7bDuuzlts18vXZLNSsKTEXIFjbRnbFp%2Fn%2FfcMHM1mDvMR6muV2ruTa%2FeFsD4WLcxVuTZv7qNqArvpiw81meGrNLRUGOQmyha%2BRuPPIJ3cxOvh5q4fxL2Fh5pD18FFHf8acIYm4zJ8tRE5eCXDXnChqVHquUbpY49xK0ux2mCZJDnPMzFrgwyMZbtsRH9gu3sX%2BKpvjt%2BuwCN%2BuIC96Gfsm1RmIfjwY3gOTYXBR9axfRRQhaVvd6klKRMCxMDafRcJ37Z4WuPvO7Z5QX8kCgyt%2F7m9RBifhCHBQYJ%2BnfDMLiEm74GOqUBQhhTRV%2BHJyTsWCe87IX1bgQ%2B9Vn%2F3LJSbyQqd7OXC%2FJEV3gkKZg97CLUdAiHeybNAbqECfn7vFRJRuIxojSzGaUW7siI0eYJwXY2p%2FkLZNfvKqkmCazU2qwEBE8%2Ba7fffB9Us4LwGRqJxfub0B9n28XA05Fi98mFF9K1jeCvP5Y7bgyTABFoq9do9BtLfyGfLzHXdgiyV5R5RwzZCo%2BIxLhJugrX&X-Amz-Signature=45a9955abf5d662c4428df2d7ec7baf847eb3dad3e664f2d0cb65a1ba9f14946&X-Amz-SignedHeaders=host&x-id=GetObject)

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
