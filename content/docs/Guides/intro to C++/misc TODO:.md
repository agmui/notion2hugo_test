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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVVUHMAG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj4KUWI0sMZyZYJ3kgcQRmy6gJ28EVGRXEflDtK1kYJQIgFEyvDOvmEA5o8AZKl9MbB5jM7Vfk2cPr2Sl4p4lMc5wq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBGyodel5JyiR%2FkVXSrcA%2BfHJnoIEtKySY3%2BHqH1E2s8uVitgca3zzC1ZWcWyRVVhQlXk%2B3XDcyYQu5kd1oxYWglFXO0%2B5UGGeekx7yyMxhKLmO%2Fj7FhQIHE8XbvNls20xRW07fQcZ0GXTmwO8mhnxdiOgMIJC0MLuUoTRBxAURE83c3a1zUNg%2FIhPJ6MrxmSFnYmpS0ftgsGMPx3GQ7UcKhTJintP3uR%2FmBtOmsqfCudSomR5FV2dMPc9qwuMg2FzJ5%2FNZuY4TIwuYp%2Bhs6WzPKGagxqpIgZiF9H0e3s4b6Dvci2el%2FgkciqQKarvZtxxlcSgk3d%2FSPfuc6x6y%2FQIwuWyjf8tWdCC9F2f9ehiLYFtQTMGfEDOp6OGjDxwO1rQQ92TLzUV%2BhRafKihcCppOhN%2BBWRx9329Ziw22RNPQ5Wx4mDliZWSIAk8OG4KBdtRP3b7ZABVtsBvzV6FdtWnDpbA3wvZfgu1X4uOuCaHJhjfvH2%2FCk%2FxFhm%2FCiLn4jKS5amhdxVEsQQ4rSeCYJbcA81k9ivEmbpxhclWo4%2Bgmh2xmyX%2BuEQlW4nPs2c0sIZ%2F%2BocGcinQZ6qUxdS63tMCDEEzLRuLZm4i9s6I6AK%2B9Wkb%2BwfWy4T%2F36LEScWcxEmYKbuTCR1d2KrSQYMPG3z78GOqUBDYz4rzN%2FkCGdtdkq95wmXxA5gBqi3ijH9QlZ3R3jOwHCWZmCEHu8G2SiME5sL25uLgmUTzzyncdgsa58JpXEOF4224Rk2esPWqwVn%2BazvXjmyQDKlZAXSLESMpclpMJI2IiwE73OAaRfR8nmuQpdpm8kCx%2Fm4KGP8jFWgj8E2ztXkbfq3vOzSf9dr1LfPqb%2BmHefnU1YNuA0HSVHcRZVpH14jMW5&X-Amz-Signature=318634e02bd84b23e4fc8c821f9b839f2c934d48df7a79d10b58e50e7b8185b4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVVUHMAG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj4KUWI0sMZyZYJ3kgcQRmy6gJ28EVGRXEflDtK1kYJQIgFEyvDOvmEA5o8AZKl9MbB5jM7Vfk2cPr2Sl4p4lMc5wq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBGyodel5JyiR%2FkVXSrcA%2BfHJnoIEtKySY3%2BHqH1E2s8uVitgca3zzC1ZWcWyRVVhQlXk%2B3XDcyYQu5kd1oxYWglFXO0%2B5UGGeekx7yyMxhKLmO%2Fj7FhQIHE8XbvNls20xRW07fQcZ0GXTmwO8mhnxdiOgMIJC0MLuUoTRBxAURE83c3a1zUNg%2FIhPJ6MrxmSFnYmpS0ftgsGMPx3GQ7UcKhTJintP3uR%2FmBtOmsqfCudSomR5FV2dMPc9qwuMg2FzJ5%2FNZuY4TIwuYp%2Bhs6WzPKGagxqpIgZiF9H0e3s4b6Dvci2el%2FgkciqQKarvZtxxlcSgk3d%2FSPfuc6x6y%2FQIwuWyjf8tWdCC9F2f9ehiLYFtQTMGfEDOp6OGjDxwO1rQQ92TLzUV%2BhRafKihcCppOhN%2BBWRx9329Ziw22RNPQ5Wx4mDliZWSIAk8OG4KBdtRP3b7ZABVtsBvzV6FdtWnDpbA3wvZfgu1X4uOuCaHJhjfvH2%2FCk%2FxFhm%2FCiLn4jKS5amhdxVEsQQ4rSeCYJbcA81k9ivEmbpxhclWo4%2Bgmh2xmyX%2BuEQlW4nPs2c0sIZ%2F%2BocGcinQZ6qUxdS63tMCDEEzLRuLZm4i9s6I6AK%2B9Wkb%2BwfWy4T%2F36LEScWcxEmYKbuTCR1d2KrSQYMPG3z78GOqUBDYz4rzN%2FkCGdtdkq95wmXxA5gBqi3ijH9QlZ3R3jOwHCWZmCEHu8G2SiME5sL25uLgmUTzzyncdgsa58JpXEOF4224Rk2esPWqwVn%2BazvXjmyQDKlZAXSLESMpclpMJI2IiwE73OAaRfR8nmuQpdpm8kCx%2Fm4KGP8jFWgj8E2ztXkbfq3vOzSf9dr1LfPqb%2BmHefnU1YNuA0HSVHcRZVpH14jMW5&X-Amz-Signature=c019cf0589eccba7b3e2052b8d2b99636ca6e60fcbd9b5b7850654e2d2decbda&X-Amz-SignedHeaders=host&x-id=GetObject)

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
