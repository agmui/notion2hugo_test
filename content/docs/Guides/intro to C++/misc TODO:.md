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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GMVE5TZ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTp%2FV7bvIQGtHCjbF4QX5zvBdHmk2rrDeDsJNCmulTPgIhAMnpASE6uUMNHzV384pHYOsiBaK5WdQlzvh0uBJPrSTkKv8DCHAQABoMNjM3NDIzMTgzODA1IgwaunM0oyjtnAqbIGYq3APgpO2JaaNVjWyM7Q%2BIllex6V8vTRd%2F6Mkf04O9aLW5IEaHvxgIgp%2Bk4v9rtduIC6hhmaLlSPfngGbn8wLZjfFqQLAi2K7Wb%2Bq1HIOkxiBzDBD1EcQfIeocUAiVxVvDEe0%2F80ZMyh869IFNpb6W3BUVWZ135zkAuARJKRNuVflXW9WIH%2BwVGLaI%2Fx%2B39F%2BOM5zf9alCoA%2FlhfEtSfws1SlwxogRnpwfZycgMpRsR87gwo7PyRyXPP3mGVSwKrX%2B4lhM8680hDuz%2Fqe3LySiUOWQLLM3DSuff1%2Bk7Z6VC8sodFU7tL2ADvt4ENSuuk3azH%2F0NNmrU9KjWiu2LoeK1ypaInDZu3tcdAwrxXp3R9OdRotxAeEDHU3CEGzCyJZL0J2AfJf8YYeRQe7HWgSfHCKHK0RwypB4QykaruLLUJBhpig%2BHDvIRqUtdpeIiqWmtL1XiOPG7Sn9j61whNLPq0aqIs376sSz87aD2EZo57RNP3xqUc%2B9GitbTuQdX3qEX%2FQJIkSJLHySL0R2wi%2FaYNCS29BTmXGuMoUc6GR3vegwaHMZ9FBJFcexBar2yh5Sxmi0onCGTpeuSUQ3JWFMPmjQF1FEZTleeJIhx2feSEO9sZV2K7716hQC%2Bg4juDDF94fABjqkAYFpX90yWX2GcB2XeLl43sckbyiR3QjRWlRFXKJrrt2bf6cGyGKbE%2FjpIx7W7KlzXux4pUyFzsvmP1NTm2BbB4%2BPP0eFou%2FwYJW%2BduQRAtPhKfBbuaA%2FjuNwWrnaO1iHXhLhWqBLbblf6EQT4%2BKQT1LefOm8EwUCvpT8LBVTk4rloiqNrRT2QmHr%2Fy%2FKh2qb%2BLrN9PNp0iilzAN4uGNtOyNxpfPz&X-Amz-Signature=48d088935fb29594b0bdeedbaa74a8ca8fb49673b2721fd494c61665131bb0c4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GMVE5TZ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTp%2FV7bvIQGtHCjbF4QX5zvBdHmk2rrDeDsJNCmulTPgIhAMnpASE6uUMNHzV384pHYOsiBaK5WdQlzvh0uBJPrSTkKv8DCHAQABoMNjM3NDIzMTgzODA1IgwaunM0oyjtnAqbIGYq3APgpO2JaaNVjWyM7Q%2BIllex6V8vTRd%2F6Mkf04O9aLW5IEaHvxgIgp%2Bk4v9rtduIC6hhmaLlSPfngGbn8wLZjfFqQLAi2K7Wb%2Bq1HIOkxiBzDBD1EcQfIeocUAiVxVvDEe0%2F80ZMyh869IFNpb6W3BUVWZ135zkAuARJKRNuVflXW9WIH%2BwVGLaI%2Fx%2B39F%2BOM5zf9alCoA%2FlhfEtSfws1SlwxogRnpwfZycgMpRsR87gwo7PyRyXPP3mGVSwKrX%2B4lhM8680hDuz%2Fqe3LySiUOWQLLM3DSuff1%2Bk7Z6VC8sodFU7tL2ADvt4ENSuuk3azH%2F0NNmrU9KjWiu2LoeK1ypaInDZu3tcdAwrxXp3R9OdRotxAeEDHU3CEGzCyJZL0J2AfJf8YYeRQe7HWgSfHCKHK0RwypB4QykaruLLUJBhpig%2BHDvIRqUtdpeIiqWmtL1XiOPG7Sn9j61whNLPq0aqIs376sSz87aD2EZo57RNP3xqUc%2B9GitbTuQdX3qEX%2FQJIkSJLHySL0R2wi%2FaYNCS29BTmXGuMoUc6GR3vegwaHMZ9FBJFcexBar2yh5Sxmi0onCGTpeuSUQ3JWFMPmjQF1FEZTleeJIhx2feSEO9sZV2K7716hQC%2Bg4juDDF94fABjqkAYFpX90yWX2GcB2XeLl43sckbyiR3QjRWlRFXKJrrt2bf6cGyGKbE%2FjpIx7W7KlzXux4pUyFzsvmP1NTm2BbB4%2BPP0eFou%2FwYJW%2BduQRAtPhKfBbuaA%2FjuNwWrnaO1iHXhLhWqBLbblf6EQT4%2BKQT1LefOm8EwUCvpT8LBVTk4rloiqNrRT2QmHr%2Fy%2FKh2qb%2BLrN9PNp0iilzAN4uGNtOyNxpfPz&X-Amz-Signature=3f78c8f2fcfeb23133b247efc26957b20b7f62914f575e9e5ee482c7bf83a044&X-Amz-SignedHeaders=host&x-id=GetObject)

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
