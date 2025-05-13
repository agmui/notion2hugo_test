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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYAG7TFD%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIFyso007B2ITLeLopiCl1%2FWLysFgxoYdV8mf9StYxA%2F0AiBr6IlGVb%2BmhT%2FUQa%2Bp%2BpvozhCICc4DrON19%2Fwcs2ziFyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9UJab%2BtkGRJ%2FtpIqKtwDk2e0WhfjO8KRRtSvv3GINrPAOmeqdbhWS2h5FC754ZXpQOnDyw4DTdQ4rHYeDXMJSFEtCCTjPazojtj%2FZrcwzGe7zFrg2dw4WWnJSc0xZefhynmLNIugWWgnf0z0dPQzldCTCKnOlHvVJXQiu7fMAC1U8FUncD%2FvmX9xovKjnT53NOsf6QIjqL0rdfUhlgNNyKwt8VAbAJqeMq2m7WbOlRnhWS6kTenmWTMf9NszcwNX5O2shDq98z%2BYZCFJs%2FuhUd59lZeAlPghnaAvcuAbjibj6fmRxcGMEeKHZMcwL%2BZAU1x4KnF4yWWnDPv5cxONdmTKqQPdJlEH6bpGlCxviMz9W6IraA6WsawnurMWr5fi88Ut%2F6IOGSvmYpsCWRaEThg%2B666%2BMEteGND%2Fw8GsZM%2Fe9LqnXtCXWZIYTrmZrAyJEGSInFmFsBcHjTYJD8kZpZ64rAa9%2Bs%2Bz581SkGOjkmQb1ZWcGSSdz8h6SVrwcNFY6bDU3ajd%2BUYFFa8R5hujNHiWDFT%2FHNauWswXwc3fNZDZbzJMqq%2BiCVQbi%2B9zrvebMEUVSgJylc1V08qmXqRLv8rUpbiRc9oFV0F4T7S1DCHBc026h5RpjpO6c8pIAv1sLBJbsrrDkoqcip4w4saOwQY6pgFVId3jYbN7m5NPYMPo6fdPsmrmWVIRcLpfkU4eqvBTdSvVnCD8iYYgV3QXNlS0TK2RiFFrcuccJ0TmkibQgyY0qG%2BjlXemRZoUa%2FveJNyHtmyGzS6hKwP5i2JEBPkWaRH%2F0oaQPGSUF4vyY%2Bo%2BuAUK37jW6E2cEM658pBDgogeIOJ7Gh3XM8RFvmC5Z2KwmdB0RR75jqq8sVXQNv9fcLIilKz1ls2m&X-Amz-Signature=3ce4569be6a178e472c952366f71f5e8718927f4322379237b3643810664cbeb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYAG7TFD%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIFyso007B2ITLeLopiCl1%2FWLysFgxoYdV8mf9StYxA%2F0AiBr6IlGVb%2BmhT%2FUQa%2Bp%2BpvozhCICc4DrON19%2Fwcs2ziFyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9UJab%2BtkGRJ%2FtpIqKtwDk2e0WhfjO8KRRtSvv3GINrPAOmeqdbhWS2h5FC754ZXpQOnDyw4DTdQ4rHYeDXMJSFEtCCTjPazojtj%2FZrcwzGe7zFrg2dw4WWnJSc0xZefhynmLNIugWWgnf0z0dPQzldCTCKnOlHvVJXQiu7fMAC1U8FUncD%2FvmX9xovKjnT53NOsf6QIjqL0rdfUhlgNNyKwt8VAbAJqeMq2m7WbOlRnhWS6kTenmWTMf9NszcwNX5O2shDq98z%2BYZCFJs%2FuhUd59lZeAlPghnaAvcuAbjibj6fmRxcGMEeKHZMcwL%2BZAU1x4KnF4yWWnDPv5cxONdmTKqQPdJlEH6bpGlCxviMz9W6IraA6WsawnurMWr5fi88Ut%2F6IOGSvmYpsCWRaEThg%2B666%2BMEteGND%2Fw8GsZM%2Fe9LqnXtCXWZIYTrmZrAyJEGSInFmFsBcHjTYJD8kZpZ64rAa9%2Bs%2Bz581SkGOjkmQb1ZWcGSSdz8h6SVrwcNFY6bDU3ajd%2BUYFFa8R5hujNHiWDFT%2FHNauWswXwc3fNZDZbzJMqq%2BiCVQbi%2B9zrvebMEUVSgJylc1V08qmXqRLv8rUpbiRc9oFV0F4T7S1DCHBc026h5RpjpO6c8pIAv1sLBJbsrrDkoqcip4w4saOwQY6pgFVId3jYbN7m5NPYMPo6fdPsmrmWVIRcLpfkU4eqvBTdSvVnCD8iYYgV3QXNlS0TK2RiFFrcuccJ0TmkibQgyY0qG%2BjlXemRZoUa%2FveJNyHtmyGzS6hKwP5i2JEBPkWaRH%2F0oaQPGSUF4vyY%2Bo%2BuAUK37jW6E2cEM658pBDgogeIOJ7Gh3XM8RFvmC5Z2KwmdB0RR75jqq8sVXQNv9fcLIilKz1ls2m&X-Amz-Signature=63be2acaddbadfbf2db3fd834f2e441b5e3aa1118610737207f6a2dfc0a3262c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
