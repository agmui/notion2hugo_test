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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGCJ2DBA%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQTIPmYHe08BAE3GqXdOehka%2F%2FRYVAyd4ytf2xg9qu%2BwIgYMMRtZ2Ih43%2FILMKedaU3FLnnOSDeJZGwe48e4SR7bcqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLoEjP2a8RnmPFvKCrcA1BojQXEJ5%2BdD%2FTyhiES8T8GZHApW2sjBYvab3%2F%2B0OELtjEi06M0OoSmjCTDVShxXL7zVXJi%2BLiNtBqUUto2Jpc6tC1NxGWnn5ZglO20XyuOZoJomGWKwt%2FGgcCi4ri%2BTEOn32oI86MqhTduemBLjWEhnUP1YYZhUm1smSfV5fGISIPJKH8SBR50NG%2FdsJwis%2B2NbnpDUGe6xb1yVKnoKvBN8ATWbEm6hi4AVAiS6Kc1Z83rKBM8SY%2FQDWHk9YcoqOZOQj57%2BYhAhWZXRKwDjXoCKpaOtnZkRuQHDRtJv6z%2FKn%2F2%2BrQG9CSpWDmrVOvSQCL1od7eTOHQpNbStemyEARRSqcBvU%2FmRoHY4Fb7h4%2BQaJhWbxssHfFfaapmUxcK7R%2BelRF9U%2Fo9YpYCFFQCAhRScgjF0AzgWWw5cB4%2BTArwUOSV71gnzIc8YycjcFmrUCo7QoLY11pnE6xlKg0olJeWxV%2Fv74vKxlEFrmi8N8UsWefrw9cleN9jB8pTSVw2GcDncpnpNOJ%2FuZc%2FsQpYm%2Fj%2FRWZHGq1yS%2FqeyEBa%2BA%2FAjCRP0Uva3x5Ot83UIU3M91zZBxABeCfAqVTeoxl9eDieZg8fSqxoIArAphKt6QBVaxCh0oqko05GKp54MJev2MIGOqUBGNA%2FyA1Kq9yv4lGbAAc%2BpsnVmNcVhwK9CeQv7hwGIWYEzTlX5p2h80LZuwaoDKK7ZPDIvQ9ROaXONcjvkXmSfyxNmOGyEeGHjUjlePvzgaJXA1bI4Y19Uej%2BMj2rJdLJFg3%2B95ZPaVNavYMCdyHyxIVnhXCXd6fMNRxxqWvoDQXnP7O1zqfwlkJlX%2FujQmf6T%2F8Nd7N8XaPHYk4I%2BKerzcj10GnC&X-Amz-Signature=603f1de249dbc1a416c2e8f5c1263ec68fbfee439270e033c0f7467f33731c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGCJ2DBA%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQTIPmYHe08BAE3GqXdOehka%2F%2FRYVAyd4ytf2xg9qu%2BwIgYMMRtZ2Ih43%2FILMKedaU3FLnnOSDeJZGwe48e4SR7bcqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLoEjP2a8RnmPFvKCrcA1BojQXEJ5%2BdD%2FTyhiES8T8GZHApW2sjBYvab3%2F%2B0OELtjEi06M0OoSmjCTDVShxXL7zVXJi%2BLiNtBqUUto2Jpc6tC1NxGWnn5ZglO20XyuOZoJomGWKwt%2FGgcCi4ri%2BTEOn32oI86MqhTduemBLjWEhnUP1YYZhUm1smSfV5fGISIPJKH8SBR50NG%2FdsJwis%2B2NbnpDUGe6xb1yVKnoKvBN8ATWbEm6hi4AVAiS6Kc1Z83rKBM8SY%2FQDWHk9YcoqOZOQj57%2BYhAhWZXRKwDjXoCKpaOtnZkRuQHDRtJv6z%2FKn%2F2%2BrQG9CSpWDmrVOvSQCL1od7eTOHQpNbStemyEARRSqcBvU%2FmRoHY4Fb7h4%2BQaJhWbxssHfFfaapmUxcK7R%2BelRF9U%2Fo9YpYCFFQCAhRScgjF0AzgWWw5cB4%2BTArwUOSV71gnzIc8YycjcFmrUCo7QoLY11pnE6xlKg0olJeWxV%2Fv74vKxlEFrmi8N8UsWefrw9cleN9jB8pTSVw2GcDncpnpNOJ%2FuZc%2FsQpYm%2Fj%2FRWZHGq1yS%2FqeyEBa%2BA%2FAjCRP0Uva3x5Ot83UIU3M91zZBxABeCfAqVTeoxl9eDieZg8fSqxoIArAphKt6QBVaxCh0oqko05GKp54MJev2MIGOqUBGNA%2FyA1Kq9yv4lGbAAc%2BpsnVmNcVhwK9CeQv7hwGIWYEzTlX5p2h80LZuwaoDKK7ZPDIvQ9ROaXONcjvkXmSfyxNmOGyEeGHjUjlePvzgaJXA1bI4Y19Uej%2BMj2rJdLJFg3%2B95ZPaVNavYMCdyHyxIVnhXCXd6fMNRxxqWvoDQXnP7O1zqfwlkJlX%2FujQmf6T%2F8Nd7N8XaPHYk4I%2BKerzcj10GnC&X-Amz-Signature=cf4c91f5ebc32dd08732a87b99033b12152edf5569b4476fa75b3cfb806c7e28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
