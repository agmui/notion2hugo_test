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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEA2BWTE%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBKtWcTE28Vu97sixvnXkNaZo57wtwXdCdPMhBEgYCliAiAhV8Bm8x59l4X652%2F3SOKPpD%2FDjR7Ddf1THDwaF7rTASqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1IfRnepjgHQt%2BIjnKtwDlSzLZLrz%2FWCgU7%2FJxIqCgM9opg6HLxGqNh%2BqPzMg4NsvH8Kw2Nq2WHIHvFixT3rcH5bmQT%2Fix96G8sZIxz%2FCT8qK5UOw%2FtNcVEzZpOOoJ%2BQ4kK%2FH7LO9V4S%2BfOy0xHE%2FFLlSvAuufD9iGviZUuQ1K9sI9UJN0Pl%2FdODdH2971U9mY16Enp31qQ6fGP0O530ePcXMb4Symzr5FV32WWhbFgkOOGnDiaJFcisfjhcU%2BxFGiu3PdqfVmOIILEQPGvhFEJEgkbtsmlgkbq3P0g5GkaUAxKpPqPYShAOZr%2FejpSXbztrQ1%2F1ivfV0Ack1Q3MWEAyxa8tbEqNA%2FJWCiLE7b2ybmUU%2BF5q3tQpl3G40tz7UlXKPF3EZ4z3pxR0iVcTTPMC5IxiyfI7cDGvMkRMfZD07Ivtsl01wakyg96FwlWeuWMksXzulHjQ%2FzUwQS3R6W%2FYb6%2BzoGf%2BuSqjB8fWAyGHUmZOKKbU16prGxj1jIpdsXaJ12j4JsbHT%2FrnbOmjE0p%2BqcdD34jcmle24ZUC290fP7jb9dm9znTisNVvfuFyaAFG07m7ZIgUDD01YikKl%2FLIWFWTkz%2FL0ZkRaJwsXoP%2ByTIwZmO2owLKfBZYQYPXdRD1ycWYVUQHYRtcw%2FKihxwY6pgGBHoNbbA2XJY7KxfgA%2BiZE2JPVrnOQpeUGNH4lY1WJPotfDuZBe0UhhMNKu40%2BTD1xs6NP2rcFlh7ugM9%2B8MBfYw8PgA1noSea6A9EtRz2tv4SxZv83ObM7P9TfmYfazrCKX9ABYPMRXNdTbFaah6QZ82MC4eal%2BnDTQs7zl8tQcSxhO1odvuptVI0hl1%2BSKXmYU1EDSbfswpFQ07o1bI2tnhPsgmn&X-Amz-Signature=82cdde21f23be3a0a179c9fdbfede19cd08594c81023095152f78c6eb88fc07a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEA2BWTE%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBKtWcTE28Vu97sixvnXkNaZo57wtwXdCdPMhBEgYCliAiAhV8Bm8x59l4X652%2F3SOKPpD%2FDjR7Ddf1THDwaF7rTASqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1IfRnepjgHQt%2BIjnKtwDlSzLZLrz%2FWCgU7%2FJxIqCgM9opg6HLxGqNh%2BqPzMg4NsvH8Kw2Nq2WHIHvFixT3rcH5bmQT%2Fix96G8sZIxz%2FCT8qK5UOw%2FtNcVEzZpOOoJ%2BQ4kK%2FH7LO9V4S%2BfOy0xHE%2FFLlSvAuufD9iGviZUuQ1K9sI9UJN0Pl%2FdODdH2971U9mY16Enp31qQ6fGP0O530ePcXMb4Symzr5FV32WWhbFgkOOGnDiaJFcisfjhcU%2BxFGiu3PdqfVmOIILEQPGvhFEJEgkbtsmlgkbq3P0g5GkaUAxKpPqPYShAOZr%2FejpSXbztrQ1%2F1ivfV0Ack1Q3MWEAyxa8tbEqNA%2FJWCiLE7b2ybmUU%2BF5q3tQpl3G40tz7UlXKPF3EZ4z3pxR0iVcTTPMC5IxiyfI7cDGvMkRMfZD07Ivtsl01wakyg96FwlWeuWMksXzulHjQ%2FzUwQS3R6W%2FYb6%2BzoGf%2BuSqjB8fWAyGHUmZOKKbU16prGxj1jIpdsXaJ12j4JsbHT%2FrnbOmjE0p%2BqcdD34jcmle24ZUC290fP7jb9dm9znTisNVvfuFyaAFG07m7ZIgUDD01YikKl%2FLIWFWTkz%2FL0ZkRaJwsXoP%2ByTIwZmO2owLKfBZYQYPXdRD1ycWYVUQHYRtcw%2FKihxwY6pgGBHoNbbA2XJY7KxfgA%2BiZE2JPVrnOQpeUGNH4lY1WJPotfDuZBe0UhhMNKu40%2BTD1xs6NP2rcFlh7ugM9%2B8MBfYw8PgA1noSea6A9EtRz2tv4SxZv83ObM7P9TfmYfazrCKX9ABYPMRXNdTbFaah6QZ82MC4eal%2BnDTQs7zl8tQcSxhO1odvuptVI0hl1%2BSKXmYU1EDSbfswpFQ07o1bI2tnhPsgmn&X-Amz-Signature=81e26a210b3f5d67e00b2aadade87038592d43a9494080b8cfa7f4647b2c439a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
