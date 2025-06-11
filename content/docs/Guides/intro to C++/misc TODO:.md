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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRPC6DDY%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtKkpYLCKT83gWZTC3GJaSUJT1mf0%2B56lkhiNw1vKXaAiBHU%2Bl2nOJ%2BE%2FGQcB7mUbLfxPXI9mBSw%2FMedjdGjKi4oyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjVBr3jt0%2FLNx689rKtwDbaYvbPi3vwYB37PMNJsd0kJvJ%2BbZY37t0dAq%2F8l3h3AAoLEraTg%2BgGirbPJ5yQrUfAmeOcrjxYz7BZ0Tmf1aafiO7Crs4ZWAU6K1QwZayaK6xLXzAt0hbRYlSy%2BZGINiqEvEfcpYvX53naTtv7hTTTX%2F%2FlruTNhA%2FZMVE7YMQDcPsKpKw5JTReioVVLcFN3YtHRFEQ4lMwPYP3eIb%2BaVcPeFCypR4XT4Ljc00ASnWZ%2FWylAK6lzqUqJ1EkgbzCZHBBNJd0DXNRL%2B%2FYPIQBkY%2F7ZshvZWZgg6aYbACl2Ip1EyALS%2FNTM4PHymvD7k9FfKhQrkfZ8uaRDdTaKC6Tf8LH9W2PS%2FSoRxfFvE%2F606Xff%2Fiv8IvXi24UnF8k2AoNlnEI31HfZua%2FiI2wGgE0Dhhg04cWT3gC9WO25pJSmoSWZGINi%2FCot%2FXF%2B%2FLH0NlYDn5aJV2xSz7CNUPrSkf%2FvJqJma7zZnpVvmIOF8iiNp2VSUZ6ZSHqLLUPGmSJ4uCEO1p6j%2BFD6Enx%2BFSsH2OIllJ9Lwgl%2FWiRsnbSSqb%2FCMma80%2FE9hOLvytv1V4F5kE98yB8kpchWaw44QNzNwXOZFllvXAZMNbfbA1on8bXTJ%2B2w%2FIb3t%2F9REYtr6hf8wgJakwgY6pgHmMyGAF3f8bBGXOa7qwZan1sAS6bX6OW5bOTscj4A%2F2fR5w2FLH5AHSXEDWfMd%2FGNHm4NTmC0WY2SmloD0L2lcU1qfBGK7h3oLTLE%2BnWkD3h7zYQRjpX28ERH7KqFo0SXlRqwuabVXdCVFUejdEVpNKx%2FcBGJsL8SBs2PLLYpx3vBuyWXc2ZQjsD9tKgVp1nSiX4q9AYQOA5opfD3%2BKM7BAMQg2JMh&X-Amz-Signature=6813dfe4f815aa9d51523f7f30f4cd70a67321a61d79c772487fac89bc3f2d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRPC6DDY%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtKkpYLCKT83gWZTC3GJaSUJT1mf0%2B56lkhiNw1vKXaAiBHU%2Bl2nOJ%2BE%2FGQcB7mUbLfxPXI9mBSw%2FMedjdGjKi4oyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjVBr3jt0%2FLNx689rKtwDbaYvbPi3vwYB37PMNJsd0kJvJ%2BbZY37t0dAq%2F8l3h3AAoLEraTg%2BgGirbPJ5yQrUfAmeOcrjxYz7BZ0Tmf1aafiO7Crs4ZWAU6K1QwZayaK6xLXzAt0hbRYlSy%2BZGINiqEvEfcpYvX53naTtv7hTTTX%2F%2FlruTNhA%2FZMVE7YMQDcPsKpKw5JTReioVVLcFN3YtHRFEQ4lMwPYP3eIb%2BaVcPeFCypR4XT4Ljc00ASnWZ%2FWylAK6lzqUqJ1EkgbzCZHBBNJd0DXNRL%2B%2FYPIQBkY%2F7ZshvZWZgg6aYbACl2Ip1EyALS%2FNTM4PHymvD7k9FfKhQrkfZ8uaRDdTaKC6Tf8LH9W2PS%2FSoRxfFvE%2F606Xff%2Fiv8IvXi24UnF8k2AoNlnEI31HfZua%2FiI2wGgE0Dhhg04cWT3gC9WO25pJSmoSWZGINi%2FCot%2FXF%2B%2FLH0NlYDn5aJV2xSz7CNUPrSkf%2FvJqJma7zZnpVvmIOF8iiNp2VSUZ6ZSHqLLUPGmSJ4uCEO1p6j%2BFD6Enx%2BFSsH2OIllJ9Lwgl%2FWiRsnbSSqb%2FCMma80%2FE9hOLvytv1V4F5kE98yB8kpchWaw44QNzNwXOZFllvXAZMNbfbA1on8bXTJ%2B2w%2FIb3t%2F9REYtr6hf8wgJakwgY6pgHmMyGAF3f8bBGXOa7qwZan1sAS6bX6OW5bOTscj4A%2F2fR5w2FLH5AHSXEDWfMd%2FGNHm4NTmC0WY2SmloD0L2lcU1qfBGK7h3oLTLE%2BnWkD3h7zYQRjpX28ERH7KqFo0SXlRqwuabVXdCVFUejdEVpNKx%2FcBGJsL8SBs2PLLYpx3vBuyWXc2ZQjsD9tKgVp1nSiX4q9AYQOA5opfD3%2BKM7BAMQg2JMh&X-Amz-Signature=68afc639bfee0325bbbf2cbf6910a97735318ef8864cebc04e852295e8e1d532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
