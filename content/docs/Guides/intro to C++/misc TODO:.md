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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6HTAHKJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC98agF5Z6aq90wh%2FktYlpHOwjFckIB0UPKn%2BkVcocGLgIhAJEREFOAlguevVbUa%2BTTLR%2F9CP3K40rvpZ8zCvurmfw8Kv8DCBEQABoMNjM3NDIzMTgzODA1IgxpAqyPMglDnqMaR6oq3APxNT2LzVI9scya3UkCRJKgcwNUF2rx0snsuFBObjVngQd2JXuf%2FHIj8QOaApffOpQH4G9wv%2BYDfqEAHwS2kAdB%2B68I2NHvA%2Ft6d6Qfpd1MJyvvtUkutjZC6yDwUM4TZhaVJ6qxRdLUqQ2bQ8AAUci6vMb%2BQ2RgKlIFFzyJRvpvS05O05Exe65jqMQ%2FsmrBUU%2BdLxj0d%2FXiJBhCwwe778ZlNtbNsRcA0ZMYWYmC8u6ijmgJe1kT2Cr94h4Xis9iEs27etDdjbv167FkmKwW%2Bps%2BG6rJaav5Xx0MJYuj4tvhxN8uindfQK44%2BAAdMFsEW%2BqNZCChp0p1Hhl5Y%2FHD1tqq%2BK2zU9OaMQRLzqpUOFYffUcfIK3S1sC2qWEz1RAGgn2%2B46IJ1wtYUb9bltIX7jsRvrQpZQWoUbfIL1AZ%2B2JzBnMW7L9HYZ7fRGoBJz2hAzth5Ma0AP3kTvJayKiwtQW17XwiRJAZ6dzyxstqBv%2BdLIGTqxyeqmuAT2bfo5l7m1j6xfSiLBA97x4oi%2Fe3IIAjLrFXcgWRhtSOwCS8BQMEloYNHj%2FjwM9uJnathMYCj60Xm9cvg%2BrBIA1OPaazzrreQvY9XpL6653jMsUI2EuFz62O1nx0JhJdrBUYpzDF46fABjqkAZMu65ZNXegpfZ8KwzcX3sEU4Jvrhi92OD82PcwPw3SlWAmf2Ide6kjc4fIqa1Rr1CE0Kph1LokD%2FYnfQTAZpyCCWo6GgE%2FsbA2Q1UARt%2F8HKgmHL1yoXeOrVkK0174FhNhZM6%2BthgneiUmLvyD%2BTkIQsQVIEtQOmcjaFcB3psQOE%2B1HMur5IzffP5mY4nuj3u0cpQRNHOWbfl%2Bpg09CzCtF8s%2FY&X-Amz-Signature=eb113fba3768fa6501fcb28d6c4a325a18205bd466559df9ad4252ea4212e304&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6HTAHKJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC98agF5Z6aq90wh%2FktYlpHOwjFckIB0UPKn%2BkVcocGLgIhAJEREFOAlguevVbUa%2BTTLR%2F9CP3K40rvpZ8zCvurmfw8Kv8DCBEQABoMNjM3NDIzMTgzODA1IgxpAqyPMglDnqMaR6oq3APxNT2LzVI9scya3UkCRJKgcwNUF2rx0snsuFBObjVngQd2JXuf%2FHIj8QOaApffOpQH4G9wv%2BYDfqEAHwS2kAdB%2B68I2NHvA%2Ft6d6Qfpd1MJyvvtUkutjZC6yDwUM4TZhaVJ6qxRdLUqQ2bQ8AAUci6vMb%2BQ2RgKlIFFzyJRvpvS05O05Exe65jqMQ%2FsmrBUU%2BdLxj0d%2FXiJBhCwwe778ZlNtbNsRcA0ZMYWYmC8u6ijmgJe1kT2Cr94h4Xis9iEs27etDdjbv167FkmKwW%2Bps%2BG6rJaav5Xx0MJYuj4tvhxN8uindfQK44%2BAAdMFsEW%2BqNZCChp0p1Hhl5Y%2FHD1tqq%2BK2zU9OaMQRLzqpUOFYffUcfIK3S1sC2qWEz1RAGgn2%2B46IJ1wtYUb9bltIX7jsRvrQpZQWoUbfIL1AZ%2B2JzBnMW7L9HYZ7fRGoBJz2hAzth5Ma0AP3kTvJayKiwtQW17XwiRJAZ6dzyxstqBv%2BdLIGTqxyeqmuAT2bfo5l7m1j6xfSiLBA97x4oi%2Fe3IIAjLrFXcgWRhtSOwCS8BQMEloYNHj%2FjwM9uJnathMYCj60Xm9cvg%2BrBIA1OPaazzrreQvY9XpL6653jMsUI2EuFz62O1nx0JhJdrBUYpzDF46fABjqkAZMu65ZNXegpfZ8KwzcX3sEU4Jvrhi92OD82PcwPw3SlWAmf2Ide6kjc4fIqa1Rr1CE0Kph1LokD%2FYnfQTAZpyCCWo6GgE%2FsbA2Q1UARt%2F8HKgmHL1yoXeOrVkK0174FhNhZM6%2BthgneiUmLvyD%2BTkIQsQVIEtQOmcjaFcB3psQOE%2B1HMur5IzffP5mY4nuj3u0cpQRNHOWbfl%2Bpg09CzCtF8s%2FY&X-Amz-Signature=366437279de6b709ae542235f96f612740f05948685efe47bb85537465576d6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
