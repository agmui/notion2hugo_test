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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLIYEX2J%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBssyQK70Cf1Rb2r%2BquskQRGlNBYCBW9Zaab9g8vrJKwAiBH%2BwFgENCJ7gPQHtiAM3eYqXYI8X6uwnlIxW6dFzVZHyr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMLorkI2Km0QBOLKbeKtwD57UGeq62V%2BJfZgYnAH42C6e582MDKDFhORC1OysJ2kLtobKyJj796ipvUsQ2G9YbnKU4OOlNprF9cKkhvd8onoP%2BPJnKkFlIWYS%2BKBgXUS%2F9WsfmL015SrHT%2B0pXQltlNQ1%2BefjSmuTET%2BbYbNHo%2F1oKdEw91rh357ZmZFpSVXQrIobwwbwEfN87QXxLxeskanNlCQ44%2BKw3uYT7gzO7LE6c5zP3N%2FjJQvqVe5b1FPJJbiShy%2FazhDU7D7mKIlaN5oFb%2FM316Hg2hAf2lwEX%2FsonUzrQJy0DJodPJzJxCZMhOYJLxSfJ%2FB4xrzi%2FwZk%2Bt94NQ9WYNazTScfw8M1EDzOSnDDbvZU6V5ODAPC8rOf0mYIJofU2UXc8NjYBL7z6qLDSwYMqb7ulBbxwYz7hQbVjzyyLbGVf5n8EF2o6JNfRttmNHPgOaXzkapEQDG3LJrRFUjmIwO7vdlaDfxneyCwP8QIsg%2F0AVIncSMXGojjknuPYxF0HEOBpzCyvMqez%2B0C%2F3f5rj2ZzJUu%2B%2Bd9aeoLAYobmZlhFGc0oLeRN0wbQ3i7r6Wm3HDN02zhO2NOTqOvhdIW7qY6CFnJv0UN8s4R4wV1KLB5r%2FLJKKYSQ09wcDOFQEews9phT2Mcwh8q%2BvwY6pgF5BmweMjluHy0IeYogjJXjTIFpNoOLjY4nWbY4SigPjJHirUy7VxjcdnwriSosAcR%2F4Ab3I25AnwwYL5R%2FvVsRNDZLOemaUGxlyN4Usy1%2F859GjBcki9Klk8aWlbQRxKAHl1UE3WJAdtut7i63opMEBq2TzoirGgZUL%2BqS4IGr%2BKOschpKrGp3MfwAF3SkhCaSAICsDEvy%2BPTotOS%2FgbxbUYsJOTeF&X-Amz-Signature=18fb6dd65e3ce3382f794204b77bbac71f9aaef0697843c676e953bb4e9195cc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLIYEX2J%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBssyQK70Cf1Rb2r%2BquskQRGlNBYCBW9Zaab9g8vrJKwAiBH%2BwFgENCJ7gPQHtiAM3eYqXYI8X6uwnlIxW6dFzVZHyr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMLorkI2Km0QBOLKbeKtwD57UGeq62V%2BJfZgYnAH42C6e582MDKDFhORC1OysJ2kLtobKyJj796ipvUsQ2G9YbnKU4OOlNprF9cKkhvd8onoP%2BPJnKkFlIWYS%2BKBgXUS%2F9WsfmL015SrHT%2B0pXQltlNQ1%2BefjSmuTET%2BbYbNHo%2F1oKdEw91rh357ZmZFpSVXQrIobwwbwEfN87QXxLxeskanNlCQ44%2BKw3uYT7gzO7LE6c5zP3N%2FjJQvqVe5b1FPJJbiShy%2FazhDU7D7mKIlaN5oFb%2FM316Hg2hAf2lwEX%2FsonUzrQJy0DJodPJzJxCZMhOYJLxSfJ%2FB4xrzi%2FwZk%2Bt94NQ9WYNazTScfw8M1EDzOSnDDbvZU6V5ODAPC8rOf0mYIJofU2UXc8NjYBL7z6qLDSwYMqb7ulBbxwYz7hQbVjzyyLbGVf5n8EF2o6JNfRttmNHPgOaXzkapEQDG3LJrRFUjmIwO7vdlaDfxneyCwP8QIsg%2F0AVIncSMXGojjknuPYxF0HEOBpzCyvMqez%2B0C%2F3f5rj2ZzJUu%2B%2Bd9aeoLAYobmZlhFGc0oLeRN0wbQ3i7r6Wm3HDN02zhO2NOTqOvhdIW7qY6CFnJv0UN8s4R4wV1KLB5r%2FLJKKYSQ09wcDOFQEews9phT2Mcwh8q%2BvwY6pgF5BmweMjluHy0IeYogjJXjTIFpNoOLjY4nWbY4SigPjJHirUy7VxjcdnwriSosAcR%2F4Ab3I25AnwwYL5R%2FvVsRNDZLOemaUGxlyN4Usy1%2F859GjBcki9Klk8aWlbQRxKAHl1UE3WJAdtut7i63opMEBq2TzoirGgZUL%2BqS4IGr%2BKOschpKrGp3MfwAF3SkhCaSAICsDEvy%2BPTotOS%2FgbxbUYsJOTeF&X-Amz-Signature=2dc2c032f5e6b7a86e08ea29a80de6c4574a79a0feccaf7eaed694c5774d9eab&X-Amz-SignedHeaders=host&x-id=GetObject)

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
