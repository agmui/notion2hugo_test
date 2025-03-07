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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LQL3COW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh%2BX9rhfYSplTTnwuS4YF5eNeVQ2ljwWN9LP93QvBV5gIhAOE09TvtwfBH34vcR5cvqICYPSoTHImhifgv4sanNHvmKv8DCD0QABoMNjM3NDIzMTgzODA1Igz5NO%2BA6W%2B0DSdco%2BEq3APCvZqH61oglsWgZgpO6GI7pVvq%2FkUneJtinvCG8AG0zeIkkYbn4zHovfSdd0ixyz0z4e0NXPPvC833%2BHUXxh%2BPueo3KJkI5aj0d6S8eW949bSqDvWRjIEazMHowDrP%2Fc8MfwV7AHMZjThKoszKXWil9EZ7qjJpkFkkMWRM4aPGfG%2FeJTW%2FLhOIgCqfb%2BFGfIMv42RHcOkEXur65c%2B5CWGG6XEWbBxjh%2FLgaKDLxLE892dBG43DYwaxNuJuwgO2tLbRKumcimLYoQP97mDH%2B1Hr4ACxr4zkzrpd%2FuoTS5aqjP5jj9HHP2uk%2F%2FQMHzUGlE%2BCwrYHgo1Mk1vDD6ijAk%2FLoZFo3X42IVjeK27qWKgNDcp3a%2FrIAeY4oCIRp6IYBaeVB7G7k%2B1vUvS9%2BvznfEXvpfRuId75AMjR%2BM3Nx5ds4et%2FYgLSwCbk1%2FTk5GPNBgKH5SD3yvugRYeDa6Zu2D4V2CIijmcZBXXOfFzMHggQdITwC3Bf5fEp46QUPLEsQIpfQCIE4hx9xJpl4h7wNmO59zD5quAIodXPOvjrMCjTeg6jH79czMMZTiqa8mtcDd%2BXyu3%2FCn9%2BWvXohut35t1SR%2BnDg9VNzg%2FKet%2F5N6ED%2BcztKRHm9gYR6oZa7zDZ5qm%2BBjqkASlq9kgrL%2Bo%2FC5NPz0iUH3jCBnUfm8Hdfd4g6KQ%2BeTwgXDBww%2FI2Z8WDnLb%2FDYLx0DkSMK6eb13bzrrkI69eg4W9wD82PBIsYY6Qk8EXgTSwr1dEA%2FEsYtFcIvwG%2FFK0pyvWCzXW6iFlJdROTzaXTbP%2FMzUw3j2kQmu7b7qsz%2BCo7k4HfgEo7r83UyK00BY6oRFtHTAhS6QTqx8Fb3l8gHMdCu9X&X-Amz-Signature=3b3696c271d6b80a70f4da218999f5a34d6f3b45238588ce88c3e108ccc4142d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LQL3COW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh%2BX9rhfYSplTTnwuS4YF5eNeVQ2ljwWN9LP93QvBV5gIhAOE09TvtwfBH34vcR5cvqICYPSoTHImhifgv4sanNHvmKv8DCD0QABoMNjM3NDIzMTgzODA1Igz5NO%2BA6W%2B0DSdco%2BEq3APCvZqH61oglsWgZgpO6GI7pVvq%2FkUneJtinvCG8AG0zeIkkYbn4zHovfSdd0ixyz0z4e0NXPPvC833%2BHUXxh%2BPueo3KJkI5aj0d6S8eW949bSqDvWRjIEazMHowDrP%2Fc8MfwV7AHMZjThKoszKXWil9EZ7qjJpkFkkMWRM4aPGfG%2FeJTW%2FLhOIgCqfb%2BFGfIMv42RHcOkEXur65c%2B5CWGG6XEWbBxjh%2FLgaKDLxLE892dBG43DYwaxNuJuwgO2tLbRKumcimLYoQP97mDH%2B1Hr4ACxr4zkzrpd%2FuoTS5aqjP5jj9HHP2uk%2F%2FQMHzUGlE%2BCwrYHgo1Mk1vDD6ijAk%2FLoZFo3X42IVjeK27qWKgNDcp3a%2FrIAeY4oCIRp6IYBaeVB7G7k%2B1vUvS9%2BvznfEXvpfRuId75AMjR%2BM3Nx5ds4et%2FYgLSwCbk1%2FTk5GPNBgKH5SD3yvugRYeDa6Zu2D4V2CIijmcZBXXOfFzMHggQdITwC3Bf5fEp46QUPLEsQIpfQCIE4hx9xJpl4h7wNmO59zD5quAIodXPOvjrMCjTeg6jH79czMMZTiqa8mtcDd%2BXyu3%2FCn9%2BWvXohut35t1SR%2BnDg9VNzg%2FKet%2F5N6ED%2BcztKRHm9gYR6oZa7zDZ5qm%2BBjqkASlq9kgrL%2Bo%2FC5NPz0iUH3jCBnUfm8Hdfd4g6KQ%2BeTwgXDBww%2FI2Z8WDnLb%2FDYLx0DkSMK6eb13bzrrkI69eg4W9wD82PBIsYY6Qk8EXgTSwr1dEA%2FEsYtFcIvwG%2FFK0pyvWCzXW6iFlJdROTzaXTbP%2FMzUw3j2kQmu7b7qsz%2BCo7k4HfgEo7r83UyK00BY6oRFtHTAhS6QTqx8Fb3l8gHMdCu9X&X-Amz-Signature=f7faf0ddd26377d568cdf5879512f154f4d76d0a78945666c151bebb686a04d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
