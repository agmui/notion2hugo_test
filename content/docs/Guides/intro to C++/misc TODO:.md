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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGU3JKO%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHIyg7A1bOd83jmFcpIYp70P6b8L5fvHCI1giZWFXMSBAiEAtl4G6X4FRkAPvPS3ZaembkqLuD%2BoifXzsMMjdy289U8q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDETCV8XkwDlMrkaBRircA4HQaG7OZ%2BA2hULWhRWBjs4QEkA2e2xWWgFOWlPRrJDyX3v%2B%2Becvpk7t8uesN9HtsP%2BNlz6Ufb6QQHOGscrjmM4Dulo9ZN0LHk0NrkTQ1b%2BB5uRPnVGuTe7hmUWfmj2GHa%2FzT4X%2B8%2Fdhd7BP7CUrzXn6qx4NR6gvvTCMgQGpuC6KRIe8nHOYVsxOIdHEl7Ir76f9pt2699WlTkiL91YNAEDIAXgMNeIAfpnkP%2FfBtGKjWg%2FzAzQsukPgus1MHXPLl2wDgWUGzZV0PySB0jtegaYRlkCqIRWsy%2Bhkd4YMeytZeUO0LG74N035bOMDejhfd1YdEsNX5RO96jfr%2FmPe4kbfz%2FQZKgsHL5nEh5F7NcPILkl0WK1NNKI3Mj0%2F2VcKdf3RgRTEgldkduv8zSURVsPkf1s9tnrit1KNLJDpt50REuRpzaXZQDiL1fX%2FCRcgf7Z%2B7ieh3DFCcNP9Ux8UMxdZN57r5QO9JCldYQWL7DsKX%2FMvLGM4igqiMXgtQfZOZmO%2Bh8POsDJIbicLlL92Uk5d4F6bNlVXFe4a6WAllhgMfTL2ZE9rn5UZ0IqznNiWMrYhR%2BtgUsTUiocheC%2F6l1NZW1Ke0XtctIxvnLb4KoPxrzBHmVXvZL7ldESvMPG8tMIGOqUBsET9omMamKHIdcfSCFPOyPjFJBl%2Fy33wXRtz%2FNM7ZDVwjL3RSh8HSR24ydO4vHxqvyPHZIMQqq%2FrQ4M6FoDZ6wwerCZa0aH2aXOa961NzHmIEiJDoOBgHtqdZkvz8TQ5wINoZ8kLY1cNsprVaJsXXZ895CQ0yJLI0RFVe7MPMuERACGI5CfP9Az1ZlNvtFOZfVEPGyypH4GV1Jbt2o36gvPggCDj&X-Amz-Signature=f39f8bed1362df6115094185b4ca12afa69c27d90393ddfc6ff24c3eca21b702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGU3JKO%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHIyg7A1bOd83jmFcpIYp70P6b8L5fvHCI1giZWFXMSBAiEAtl4G6X4FRkAPvPS3ZaembkqLuD%2BoifXzsMMjdy289U8q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDETCV8XkwDlMrkaBRircA4HQaG7OZ%2BA2hULWhRWBjs4QEkA2e2xWWgFOWlPRrJDyX3v%2B%2Becvpk7t8uesN9HtsP%2BNlz6Ufb6QQHOGscrjmM4Dulo9ZN0LHk0NrkTQ1b%2BB5uRPnVGuTe7hmUWfmj2GHa%2FzT4X%2B8%2Fdhd7BP7CUrzXn6qx4NR6gvvTCMgQGpuC6KRIe8nHOYVsxOIdHEl7Ir76f9pt2699WlTkiL91YNAEDIAXgMNeIAfpnkP%2FfBtGKjWg%2FzAzQsukPgus1MHXPLl2wDgWUGzZV0PySB0jtegaYRlkCqIRWsy%2Bhkd4YMeytZeUO0LG74N035bOMDejhfd1YdEsNX5RO96jfr%2FmPe4kbfz%2FQZKgsHL5nEh5F7NcPILkl0WK1NNKI3Mj0%2F2VcKdf3RgRTEgldkduv8zSURVsPkf1s9tnrit1KNLJDpt50REuRpzaXZQDiL1fX%2FCRcgf7Z%2B7ieh3DFCcNP9Ux8UMxdZN57r5QO9JCldYQWL7DsKX%2FMvLGM4igqiMXgtQfZOZmO%2Bh8POsDJIbicLlL92Uk5d4F6bNlVXFe4a6WAllhgMfTL2ZE9rn5UZ0IqznNiWMrYhR%2BtgUsTUiocheC%2F6l1NZW1Ke0XtctIxvnLb4KoPxrzBHmVXvZL7ldESvMPG8tMIGOqUBsET9omMamKHIdcfSCFPOyPjFJBl%2Fy33wXRtz%2FNM7ZDVwjL3RSh8HSR24ydO4vHxqvyPHZIMQqq%2FrQ4M6FoDZ6wwerCZa0aH2aXOa961NzHmIEiJDoOBgHtqdZkvz8TQ5wINoZ8kLY1cNsprVaJsXXZ895CQ0yJLI0RFVe7MPMuERACGI5CfP9Az1ZlNvtFOZfVEPGyypH4GV1Jbt2o36gvPggCDj&X-Amz-Signature=8a256bd69fe566688162dc81b433bd33d955d60b368c3d2233982253b10ee2fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
