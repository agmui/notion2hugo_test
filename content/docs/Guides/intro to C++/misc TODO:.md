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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGV7R7Y%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi9%2BjUd1FwohzrqIPxyiO8ViXntFFXNjxuRkNN%2FtlV6QIhAN9BAiAdwYZ8iSUoxd3Z65xXOnlxxLxN8ie5RjkudJMoKv8DCDMQABoMNjM3NDIzMTgzODA1Igwc0CyekchTAMkacpAq3APcl2fd11D%2B%2B9DUw9DQ8oz7FSddOPCbp9Rg2Y65C8BoTYiYiyoUvtE1NbA4c7w0XDD5gdflJBCg3pOswDFnGmlMPapLUjRu53lsJZCrE16332aoJqNxMLxOgRYstlFKexHiuoablVt5UEfN4Kq9Oa7WG2fr%2Fj%2F%2BZFN60dRgpgOxBZlmxIUMUsQlcZVYDNdOP6ubQHvStEiO0AmECRBprt3TqBITaqmMcZMHOPCEdFC0BIWAQdf%2FCTBBgXzr23XcW23GxAlxG18bpcvgXbtT%2BjeOaHWwkg6b9lOqLBKJjWzF7%2F%2BPoLV%2FKZ8QqKW18XbdpaaYfdkuo0RRXNsNQsltQqU3Xc8tz7PEZ8bM%2FJLdsfe0fmEJ%2BP%2BBZBuBSud9OLjyg42%2ByxLXj2GPBS2TdQtdHe2p0mICp9IiuGHPsE6TpE6%2F1if%2Bd3O81AXqUgdkzVdIUWi0A9fMqTGefmUmaZRzWIHjHLQT9%2FGis8ZqG0uCWAgDdNZSIw8JYqP0pJgAgCxzPSoVmHRuECJKq4Bb3bUwiPrkcNYTwE1GDtvB8JP4s9U1kxnBeq6riWgIO6kmzVomYg0l%2FdMSj5fbSYLnDPnZy%2BxdflXpzPDAu7CO6Oi168SRnEuFiwLnaeAfIgpZYzCHzqe%2BBjqkAXYs3%2BzIaSQsVQMX%2FKZLE1PBHrPcY%2BwXSSjrxXRs2U482Ytqvn%2FirCbPSEvl4hvs9Imv%2FEK7FXh%2BM016icSQ1nspyo3tIWJuiecS2x%2B1xfPijnM4qZLTUF4pIkAT3rd01jZGHUauM7UI9RE2%2BlZIvG0vTdRyq085xzHs8MT5JGXV%2Bd%2FmpA2NG24DtQ07PnTBaLmAuunSexICzwka7IxslfQxVGsW&X-Amz-Signature=383bd2e5a8036a7e05c2bbf6774d84f30b9f3144d72ae5c8d4a2dd5744b9d02a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGV7R7Y%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi9%2BjUd1FwohzrqIPxyiO8ViXntFFXNjxuRkNN%2FtlV6QIhAN9BAiAdwYZ8iSUoxd3Z65xXOnlxxLxN8ie5RjkudJMoKv8DCDMQABoMNjM3NDIzMTgzODA1Igwc0CyekchTAMkacpAq3APcl2fd11D%2B%2B9DUw9DQ8oz7FSddOPCbp9Rg2Y65C8BoTYiYiyoUvtE1NbA4c7w0XDD5gdflJBCg3pOswDFnGmlMPapLUjRu53lsJZCrE16332aoJqNxMLxOgRYstlFKexHiuoablVt5UEfN4Kq9Oa7WG2fr%2Fj%2F%2BZFN60dRgpgOxBZlmxIUMUsQlcZVYDNdOP6ubQHvStEiO0AmECRBprt3TqBITaqmMcZMHOPCEdFC0BIWAQdf%2FCTBBgXzr23XcW23GxAlxG18bpcvgXbtT%2BjeOaHWwkg6b9lOqLBKJjWzF7%2F%2BPoLV%2FKZ8QqKW18XbdpaaYfdkuo0RRXNsNQsltQqU3Xc8tz7PEZ8bM%2FJLdsfe0fmEJ%2BP%2BBZBuBSud9OLjyg42%2ByxLXj2GPBS2TdQtdHe2p0mICp9IiuGHPsE6TpE6%2F1if%2Bd3O81AXqUgdkzVdIUWi0A9fMqTGefmUmaZRzWIHjHLQT9%2FGis8ZqG0uCWAgDdNZSIw8JYqP0pJgAgCxzPSoVmHRuECJKq4Bb3bUwiPrkcNYTwE1GDtvB8JP4s9U1kxnBeq6riWgIO6kmzVomYg0l%2FdMSj5fbSYLnDPnZy%2BxdflXpzPDAu7CO6Oi168SRnEuFiwLnaeAfIgpZYzCHzqe%2BBjqkAXYs3%2BzIaSQsVQMX%2FKZLE1PBHrPcY%2BwXSSjrxXRs2U482Ytqvn%2FirCbPSEvl4hvs9Imv%2FEK7FXh%2BM016icSQ1nspyo3tIWJuiecS2x%2B1xfPijnM4qZLTUF4pIkAT3rd01jZGHUauM7UI9RE2%2BlZIvG0vTdRyq085xzHs8MT5JGXV%2Bd%2FmpA2NG24DtQ07PnTBaLmAuunSexICzwka7IxslfQxVGsW&X-Amz-Signature=8dafc553bad90c3945ef06e5f50ab3669228151ee9d7e31ee28112721f4dff15&X-Amz-SignedHeaders=host&x-id=GetObject)

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
