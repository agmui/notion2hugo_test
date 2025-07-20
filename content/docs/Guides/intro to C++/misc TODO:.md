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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IMO2J6Z%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNSWi5wPqXuaZKlSiuDkJMUiWpRQKvOsX5dYHym6R6lAIhAIVURbmtk9ugbsCfLiWLj%2B17VS0Bdpo67wbB1xHNctgpKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzhrKsR%2Bk68xlY8awq3AOX4lDhWxTo32RhRQX0f7VQMk3JyREZz554AXfWERSfOu74k5ZlENQ151K%2FjIWJ7SJ1gDU7uBC5iLhSu86liJa3XKBYiBp0oQxP48hqVYXkPpp6l72Dm%2Ba7EQZMDH%2FtCNY6hwZ5synxTdX5hd8L7VP0s%2FnbBcrS%2FQ4zSSLYNyYCNlSb3Mplr7BrjGMtmNQfIOJKNmkQE0%2BUwElGcH3RBbS8B%2BtoY4wU1cshgPyxXtRxoMIddNGDSKAE3hUbgx81oD5kngpfDZK0ExC8bDfXnj73e7N8mGDUE48sQlp1hf%2B5J0OhmcsRfrYosQnTce5bMxKwb9yjsMgKsXSEqIbEOeCJAd5VuQa50N0VWXtIIdMIj8hsNvbIvInh4GNPeQBiu7AQHW1gFkJm1JIFqAV9XQVpF102sMv7fCQfCSaXsBIKRKdEzGNf2csHqPc4SDmrQln8Up06Nk3y5YTv1cJqhlLePaJMAt5e3sbHsJbvKtYVL8HBBp6H2rrJuL50d393wpU1SU63JFpdbZrMYDLDDtEjE5JS4FSK%2BIuRWhrtJk29fZz9iFH4OZQi6oExl7nJUddnYV%2Fod7Np46O8J0ey9HfpY12kBpcMpSYHqvrV3r33DxR9cADxSbf5RhguIDCV8fTDBjqkAVSpxBxANngIyp4GF9MAOo3AcPID2i9Jh8xC4GrsyKkjwC58Dp7FElpobrbCsWbM5NxVupHBSvfybrFjZVBnoFFXvSYdT%2B7KNqESy6j38JX10wj0EnLkfpYXLSHKUIfnv597Ig4yH4kafN6JQ2onwuAfysG0kODJckXJr3%2BhdULqzLEofLe%2BSdYz7tC4dFS6Ho323o53EqtfbcWTXEoLO16082uT&X-Amz-Signature=d8bc66b71611fc894d095bce2411f09fb668b05a16cdc6d8eae1e3e1bdab0ebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IMO2J6Z%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNSWi5wPqXuaZKlSiuDkJMUiWpRQKvOsX5dYHym6R6lAIhAIVURbmtk9ugbsCfLiWLj%2B17VS0Bdpo67wbB1xHNctgpKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzhrKsR%2Bk68xlY8awq3AOX4lDhWxTo32RhRQX0f7VQMk3JyREZz554AXfWERSfOu74k5ZlENQ151K%2FjIWJ7SJ1gDU7uBC5iLhSu86liJa3XKBYiBp0oQxP48hqVYXkPpp6l72Dm%2Ba7EQZMDH%2FtCNY6hwZ5synxTdX5hd8L7VP0s%2FnbBcrS%2FQ4zSSLYNyYCNlSb3Mplr7BrjGMtmNQfIOJKNmkQE0%2BUwElGcH3RBbS8B%2BtoY4wU1cshgPyxXtRxoMIddNGDSKAE3hUbgx81oD5kngpfDZK0ExC8bDfXnj73e7N8mGDUE48sQlp1hf%2B5J0OhmcsRfrYosQnTce5bMxKwb9yjsMgKsXSEqIbEOeCJAd5VuQa50N0VWXtIIdMIj8hsNvbIvInh4GNPeQBiu7AQHW1gFkJm1JIFqAV9XQVpF102sMv7fCQfCSaXsBIKRKdEzGNf2csHqPc4SDmrQln8Up06Nk3y5YTv1cJqhlLePaJMAt5e3sbHsJbvKtYVL8HBBp6H2rrJuL50d393wpU1SU63JFpdbZrMYDLDDtEjE5JS4FSK%2BIuRWhrtJk29fZz9iFH4OZQi6oExl7nJUddnYV%2Fod7Np46O8J0ey9HfpY12kBpcMpSYHqvrV3r33DxR9cADxSbf5RhguIDCV8fTDBjqkAVSpxBxANngIyp4GF9MAOo3AcPID2i9Jh8xC4GrsyKkjwC58Dp7FElpobrbCsWbM5NxVupHBSvfybrFjZVBnoFFXvSYdT%2B7KNqESy6j38JX10wj0EnLkfpYXLSHKUIfnv597Ig4yH4kafN6JQ2onwuAfysG0kODJckXJr3%2BhdULqzLEofLe%2BSdYz7tC4dFS6Ho323o53EqtfbcWTXEoLO16082uT&X-Amz-Signature=b7c2538e6ebeb86e590fae74f2abd3783a930248b32f1132c6c0c62fffd51de3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
