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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642OUYEYU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtaCOrxScHBhnpmTdNIP4b0eVjkz2Lh21rETkAPaJm7AiEAvJtImxEbquEXLS18LtecBz1H9oo%2F1p%2BYGAzx8MdnrLcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BrxD7lF5H7xDlVNircA%2FCIZmb868mlsodx0cee6Fn2tnxJFzsScs9uXao4JRuHSJBS%2FoTYtaq12n8xuwXPxQeDVud6cpUtf9gcmeE%2FcSJcI%2BvbM0Ysrx742uBFnq%2FRnrAjXxAoK%2FobakPADN7szzWGVOHO6oSQSfsm%2F4xPOSmSS9rX7GjX0tvsvMY0fIWywXOApcky842lMCYfa2TynmTV8vxdflLUemE8m1yGQZaswhaggJpmiUh2PX%2F5VSqz%2BTTppjsouFvlJYU%2FLsvL9xNBKGsV86xwmO5RfP%2FSwb6fDa7ldgEnM6Urwsz0Purbp6Vaz%2BQS1O%2BX3p6hLXNLnvPlHCqTAr5uvqFlArgxfQzqZL2StlRe8ZNtUQHXlAP%2FDf4V3LRwykHpk7zWaX2UULKk%2B1jTvFHEMszJzwD1UcRcYMvgFUIDKKxu0mt%2BzdTUxhkKl7zfJw%2FLgCOz67OOwWuFB4bL5yNVQXz2oFcDDsrxKxhRJgwaPbMtvJPq9s%2FGdhZpN0TmYHDUaQgpy%2BeEjG8RtscZguE4GXhRkW%2FZpoj77b5uiOVVuU1N1pl05x0XeKURm3iUOxsg7w%2FOCjMlxADcUSC2%2BamUSe7CSTr%2F94EpLmcCwWfuK%2F%2F8vNmRVqRXNStumX5ST0UpaX%2F1MNSWlb4GOqUB6U9Od1MZrtR7jMX9RmbOIhUE%2BDWpf41%2F4ZNrzGLS9rW4OIi%2BibjCKcEXKOSatFzeToPu0yrnd%2BLMNE3dvLaqM3rXERKB1QfVuz7tgDhuWXTfvnB1mPl1aza%2BlnYc2IF%2Bo%2BBK2xVrfetjkzPbE6sWy0BbDbchq%2FgydBJZ72fBWTg%2BntWcWJbWRIQktpGlw%2FoZxuQYAnI%2FABtr8lancWGjLRF0EepT&X-Amz-Signature=465b0e4918803735f21fc731ca0b2348320791528b03c9268d8165608c1c5943&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642OUYEYU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtaCOrxScHBhnpmTdNIP4b0eVjkz2Lh21rETkAPaJm7AiEAvJtImxEbquEXLS18LtecBz1H9oo%2F1p%2BYGAzx8MdnrLcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BrxD7lF5H7xDlVNircA%2FCIZmb868mlsodx0cee6Fn2tnxJFzsScs9uXao4JRuHSJBS%2FoTYtaq12n8xuwXPxQeDVud6cpUtf9gcmeE%2FcSJcI%2BvbM0Ysrx742uBFnq%2FRnrAjXxAoK%2FobakPADN7szzWGVOHO6oSQSfsm%2F4xPOSmSS9rX7GjX0tvsvMY0fIWywXOApcky842lMCYfa2TynmTV8vxdflLUemE8m1yGQZaswhaggJpmiUh2PX%2F5VSqz%2BTTppjsouFvlJYU%2FLsvL9xNBKGsV86xwmO5RfP%2FSwb6fDa7ldgEnM6Urwsz0Purbp6Vaz%2BQS1O%2BX3p6hLXNLnvPlHCqTAr5uvqFlArgxfQzqZL2StlRe8ZNtUQHXlAP%2FDf4V3LRwykHpk7zWaX2UULKk%2B1jTvFHEMszJzwD1UcRcYMvgFUIDKKxu0mt%2BzdTUxhkKl7zfJw%2FLgCOz67OOwWuFB4bL5yNVQXz2oFcDDsrxKxhRJgwaPbMtvJPq9s%2FGdhZpN0TmYHDUaQgpy%2BeEjG8RtscZguE4GXhRkW%2FZpoj77b5uiOVVuU1N1pl05x0XeKURm3iUOxsg7w%2FOCjMlxADcUSC2%2BamUSe7CSTr%2F94EpLmcCwWfuK%2F%2F8vNmRVqRXNStumX5ST0UpaX%2F1MNSWlb4GOqUB6U9Od1MZrtR7jMX9RmbOIhUE%2BDWpf41%2F4ZNrzGLS9rW4OIi%2BibjCKcEXKOSatFzeToPu0yrnd%2BLMNE3dvLaqM3rXERKB1QfVuz7tgDhuWXTfvnB1mPl1aza%2BlnYc2IF%2Bo%2BBK2xVrfetjkzPbE6sWy0BbDbchq%2FgydBJZ72fBWTg%2BntWcWJbWRIQktpGlw%2FoZxuQYAnI%2FABtr8lancWGjLRF0EepT&X-Amz-Signature=1bd8993fb90e50cc40cdcf9839a89dac2dfea608116a671ff99ac32b84344510&X-Amz-SignedHeaders=host&x-id=GetObject)

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
