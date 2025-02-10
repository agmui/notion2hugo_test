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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMXHEPY%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbusu0EOVVStbiDoQsp%2BEtEYYVtVykMNucVqCYqqf1RAiAZYD6unMt%2B0QgnF33l35QmV%2FNCt%2Fi%2FBWDfN3XAFCqyWSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1xTE7U%2FYFeq8rOSVKtwDj%2FoEIxTb6i6tzHK14NeYR9olHGgvIY1BW4g%2F6iXzfn7ll03Nq36f0F3WrGTd4UL%2FsmoND1WdxiR7tXx82zoM1O4C9rQrlJsOpKjByooAs3zkJk2uHbuSW4ZVlF%2FPdYpv08oT91rnfam3U1qPp0mE3D8DgkurblURRiXHwwrXdYoNTn5GHv%2FibBx1tFacmP89LFIYvFYxb6Mo15TJUMahHK%2FtNVXKzHn6uvbKQDrS9yBKWpTP0uKk%2FDG3aPipFPga05WYmVBzTqMSeAGYoqb%2F%2F37CfxssyepHbYuQt8rGOhMjd3WOHcEuxSjyCTqJKEroq4Yf%2BWIR5iow%2FyHhz9aWlenpV37q1kxGNLmMUzdwQ33qxI2z24c6q4BnpbIG7g7jkIyUdKtP6EiNfxQBimoFmCVaimAyPpjFabbb6OWz8kXlMy9jeHBqML%2FN7GJZgg4XrQgdkuchSpyVQcG0In%2FJcEaeei5El9z2dwKfKHe%2FQxbcd26mHmcBeGsFEB1zfamO2K0NJ4ijyQ%2BPx86buPNAhe1v3xGrURsjaW%2FjCDkXdLFITmUQtsspYpkkP2m7mw1B8EYaF4pHcYtE2upuzhtHfTMKtdVGjZBRaLNwx78whPYiT4y9qMu9rsxBfxAw35ulvQY6pgHtpdadlR0aT1nRxkS4XKrrtRNEGwnmVrtgiE2up3CR%2BL9KPh9WKcvnBd6q0s3i7b76%2FxUe2jslspqIGo9ihC7eUiI7Bv6aKugJvN0I%2FUc%2FcbUvdjdrdL%2BLgMecXSLw1aW%2BRlQWrLPoG5FbvQXGVXx7stAy4ITlVGLOC7ImkYtgjAlVviJfdDcnwnDMUZAGTSPBnz8FodEoGHG%2ByZcGW0av7ofVPSy5&X-Amz-Signature=5957e9890c2bc7a4201062f61918f8f3abe9c54cd5c0bc436f0081272d55fbff&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMXHEPY%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbusu0EOVVStbiDoQsp%2BEtEYYVtVykMNucVqCYqqf1RAiAZYD6unMt%2B0QgnF33l35QmV%2FNCt%2Fi%2FBWDfN3XAFCqyWSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1xTE7U%2FYFeq8rOSVKtwDj%2FoEIxTb6i6tzHK14NeYR9olHGgvIY1BW4g%2F6iXzfn7ll03Nq36f0F3WrGTd4UL%2FsmoND1WdxiR7tXx82zoM1O4C9rQrlJsOpKjByooAs3zkJk2uHbuSW4ZVlF%2FPdYpv08oT91rnfam3U1qPp0mE3D8DgkurblURRiXHwwrXdYoNTn5GHv%2FibBx1tFacmP89LFIYvFYxb6Mo15TJUMahHK%2FtNVXKzHn6uvbKQDrS9yBKWpTP0uKk%2FDG3aPipFPga05WYmVBzTqMSeAGYoqb%2F%2F37CfxssyepHbYuQt8rGOhMjd3WOHcEuxSjyCTqJKEroq4Yf%2BWIR5iow%2FyHhz9aWlenpV37q1kxGNLmMUzdwQ33qxI2z24c6q4BnpbIG7g7jkIyUdKtP6EiNfxQBimoFmCVaimAyPpjFabbb6OWz8kXlMy9jeHBqML%2FN7GJZgg4XrQgdkuchSpyVQcG0In%2FJcEaeei5El9z2dwKfKHe%2FQxbcd26mHmcBeGsFEB1zfamO2K0NJ4ijyQ%2BPx86buPNAhe1v3xGrURsjaW%2FjCDkXdLFITmUQtsspYpkkP2m7mw1B8EYaF4pHcYtE2upuzhtHfTMKtdVGjZBRaLNwx78whPYiT4y9qMu9rsxBfxAw35ulvQY6pgHtpdadlR0aT1nRxkS4XKrrtRNEGwnmVrtgiE2up3CR%2BL9KPh9WKcvnBd6q0s3i7b76%2FxUe2jslspqIGo9ihC7eUiI7Bv6aKugJvN0I%2FUc%2FcbUvdjdrdL%2BLgMecXSLw1aW%2BRlQWrLPoG5FbvQXGVXx7stAy4ITlVGLOC7ImkYtgjAlVviJfdDcnwnDMUZAGTSPBnz8FodEoGHG%2ByZcGW0av7ofVPSy5&X-Amz-Signature=81c565dd415184570b4f44a84ab9e3e8f615a0fe127679b836edc2b9839b417e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
