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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RONWURH4%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbCy9JA09INggHyiUw51dsW5kTvHKAfU9Ztxh466D4igIgBoKGEPhUibqv26bLTVxvWYpkHZ2fVR8JGVsyu3Utdt8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4PmWgnwHi69gm3gyrcAzeFzP9I6zkhONqcSAeDEPqI4rA8LREfXebm149dNrtlGQQAd6RDJVbCoCGx8G%2B3qIYMH4d8IxZTIyEfxbapORD%2BKegIxgbxbZbscsmBKus5AaivQv6qEK%2FnvLoaN8Sz06Je%2BduK9lmRfN50ePcWzXNPx7nb9%2BTCWuRU2kK%2Fv1bmdJV6QsDg0qHcGaSIap5YO%2BgfzTTj7EG5zVa6h4x3gFyxUmWhf%2FakbqYnvmh0Kmbsdhf0CnuZ44P%2Fim3xscVzB3CMaOwJXTZygbeCINp0YgdVUZAWPp94ETet%2BzKRYzf%2F0yb7LEY%2F4c00sCzsPuRuF7Tl9dg3XeolEon%2Fl41x40AeqTHh1MDId%2F%2BHXCTHFy4Sc8Ve3KeMKa9PcP4y83%2BXBfPKna1uq%2F7lqBKzv67SQsihUoNp1052V34oMN%2Fc6tzTpgy417g5zMI8lm84VU%2BwRUF2U%2BYHTXquNqU7jgNzZ0qIeHMxi7CEwEv6gKg%2BDOycAhrcgJgnL7Gulxiak9Y3hnCDWucLNep8ZgEBOpK8jeQ2mYapmbVeMjDclmQWgXHNC5UTm1Jtvq1LUqjaMbE2IFS20iuGWN3jTo1UuGFvK5OsfKbQo%2FEyPH7H%2B%2FobtY8SN%2FJsq3ULIyJPHezLMOuzosIGOqUBRQXHJS7UvVxQVmDCpbFKlvFU6wP7uhj9ca3qhl2Ib%2FzlWhoTw5uMZPrKZ%2F%2BbUsbNEqzxuffrDaYQMfct7sYgFnKUah0lscvDJimetrfpxjcOpCWf2ZnlolQLojnT%2BEx2bFABcdb9XVi1YFthLyoTVKMHVDchOH8s8pmz2zSeosN847JAeanwt2DAEaDdSXgZagtBSUM7J%2BdTYU7AqdMkaSB%2BUH9I&X-Amz-Signature=c82240003409f45d011b17cad85faf5ee4e4451f1c163532cfa47e5b30a79c96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RONWURH4%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbCy9JA09INggHyiUw51dsW5kTvHKAfU9Ztxh466D4igIgBoKGEPhUibqv26bLTVxvWYpkHZ2fVR8JGVsyu3Utdt8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4PmWgnwHi69gm3gyrcAzeFzP9I6zkhONqcSAeDEPqI4rA8LREfXebm149dNrtlGQQAd6RDJVbCoCGx8G%2B3qIYMH4d8IxZTIyEfxbapORD%2BKegIxgbxbZbscsmBKus5AaivQv6qEK%2FnvLoaN8Sz06Je%2BduK9lmRfN50ePcWzXNPx7nb9%2BTCWuRU2kK%2Fv1bmdJV6QsDg0qHcGaSIap5YO%2BgfzTTj7EG5zVa6h4x3gFyxUmWhf%2FakbqYnvmh0Kmbsdhf0CnuZ44P%2Fim3xscVzB3CMaOwJXTZygbeCINp0YgdVUZAWPp94ETet%2BzKRYzf%2F0yb7LEY%2F4c00sCzsPuRuF7Tl9dg3XeolEon%2Fl41x40AeqTHh1MDId%2F%2BHXCTHFy4Sc8Ve3KeMKa9PcP4y83%2BXBfPKna1uq%2F7lqBKzv67SQsihUoNp1052V34oMN%2Fc6tzTpgy417g5zMI8lm84VU%2BwRUF2U%2BYHTXquNqU7jgNzZ0qIeHMxi7CEwEv6gKg%2BDOycAhrcgJgnL7Gulxiak9Y3hnCDWucLNep8ZgEBOpK8jeQ2mYapmbVeMjDclmQWgXHNC5UTm1Jtvq1LUqjaMbE2IFS20iuGWN3jTo1UuGFvK5OsfKbQo%2FEyPH7H%2B%2FobtY8SN%2FJsq3ULIyJPHezLMOuzosIGOqUBRQXHJS7UvVxQVmDCpbFKlvFU6wP7uhj9ca3qhl2Ib%2FzlWhoTw5uMZPrKZ%2F%2BbUsbNEqzxuffrDaYQMfct7sYgFnKUah0lscvDJimetrfpxjcOpCWf2ZnlolQLojnT%2BEx2bFABcdb9XVi1YFthLyoTVKMHVDchOH8s8pmz2zSeosN847JAeanwt2DAEaDdSXgZagtBSUM7J%2BdTYU7AqdMkaSB%2BUH9I&X-Amz-Signature=d47d2d3e6aff3fe82f6ee438ca0460ba485cfaa8e0ca5eb1376e01a8ebc05e23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
