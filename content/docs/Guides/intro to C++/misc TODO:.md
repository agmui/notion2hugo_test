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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIKBE7EK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlNH%2FvcW5UAp9Olcu1SW68aqM2h2paFTdgWISYPJqs4wIhALKa0zd8SmXS2VPog9LKDAmTzRv9QVgv3LWK%2FydqtMJjKv8DCBoQABoMNjM3NDIzMTgzODA1IgxQ361fbK%2Ftw8RVVrYq3AMWdwrC%2F9UC%2FopCcocmbe5Sox0PaDuGB3uobqIzB6zXF7SWZA0h7CyC%2BmQlhJ3Fho5WFec1V2%2BYnfJ3JXbzM3VynnooLRuSV0QAUAauWMvbdZT2kBtU2Hb1AIHyBnkdF6Gy13z8G4XyYGq1Kk8GgVtrTv98DqMjpPhAzrRelCyoZ6mGjWw46Kxg%2FasLY8tOFvIZyYneoj7mji27vNZEnXKQSLAfYX5LOxRRulprD0WRwjaOnyCoWkF3%2FPcrmTmpwSB18xyWDurvGlM9Q8zc%2BkyL4pxlhga7gjdzhDU1p%2FwSpRUrX3FEUEoUpoNlnykPRoLyYuUHEcPugd0o0yBxNehRlPOg3SN6RE1n33WPMX%2BYAyFpk122uUVxEnnp2IoKj0kKM%2FuxLoOxnbp4TENwe23SWQdvIzywFGkrJ5ibd11YQJ7jgU1S8hw%2B5hDXT3mQ%2F7xhnD6%2FIYgw52r5ommFfv6qNU6D8yBrilLW7%2BUHj1w0tnTrrZyXw6RjQYhBMWWCnALrUbC3R7d9UxeB6FLIi4GlSSbjlMJQmlZ5wgDgLnuqY0IyHdsm2i%2Brd84jm64GjjFVDJQq4vosqUn7pqcD6g5gL2xunyHFD0Oi0YRr8lfGS0PDUuh1rIjC60q0cjC4ncC%2FBjqkAQ4ak0Ctcs1mnJEO%2FvsXxXlr7jpfOP03k5zSIXlX0UMy24MYI1%2FjjUgEtUlgje26A6e9BWkUoZ4Ux0O6HvWL2l6tPaqZfQF3AUYLYxYyTzmmTKF5mP8xKpgOJwDRFTmKtYWFbfBEFC%2FKZc5dzubfAYGrfMo54dzswXIRSTxQO4oKWtrVWfFMAQpyxpgjUN35nOjHcxpXLAaQtPQSrVkwFwrY0tbh&X-Amz-Signature=480a6b337e60d90133d03c1c797cb734a6a9b65492fa4013343bbc7576c6e8e3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIKBE7EK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlNH%2FvcW5UAp9Olcu1SW68aqM2h2paFTdgWISYPJqs4wIhALKa0zd8SmXS2VPog9LKDAmTzRv9QVgv3LWK%2FydqtMJjKv8DCBoQABoMNjM3NDIzMTgzODA1IgxQ361fbK%2Ftw8RVVrYq3AMWdwrC%2F9UC%2FopCcocmbe5Sox0PaDuGB3uobqIzB6zXF7SWZA0h7CyC%2BmQlhJ3Fho5WFec1V2%2BYnfJ3JXbzM3VynnooLRuSV0QAUAauWMvbdZT2kBtU2Hb1AIHyBnkdF6Gy13z8G4XyYGq1Kk8GgVtrTv98DqMjpPhAzrRelCyoZ6mGjWw46Kxg%2FasLY8tOFvIZyYneoj7mji27vNZEnXKQSLAfYX5LOxRRulprD0WRwjaOnyCoWkF3%2FPcrmTmpwSB18xyWDurvGlM9Q8zc%2BkyL4pxlhga7gjdzhDU1p%2FwSpRUrX3FEUEoUpoNlnykPRoLyYuUHEcPugd0o0yBxNehRlPOg3SN6RE1n33WPMX%2BYAyFpk122uUVxEnnp2IoKj0kKM%2FuxLoOxnbp4TENwe23SWQdvIzywFGkrJ5ibd11YQJ7jgU1S8hw%2B5hDXT3mQ%2F7xhnD6%2FIYgw52r5ommFfv6qNU6D8yBrilLW7%2BUHj1w0tnTrrZyXw6RjQYhBMWWCnALrUbC3R7d9UxeB6FLIi4GlSSbjlMJQmlZ5wgDgLnuqY0IyHdsm2i%2Brd84jm64GjjFVDJQq4vosqUn7pqcD6g5gL2xunyHFD0Oi0YRr8lfGS0PDUuh1rIjC60q0cjC4ncC%2FBjqkAQ4ak0Ctcs1mnJEO%2FvsXxXlr7jpfOP03k5zSIXlX0UMy24MYI1%2FjjUgEtUlgje26A6e9BWkUoZ4Ux0O6HvWL2l6tPaqZfQF3AUYLYxYyTzmmTKF5mP8xKpgOJwDRFTmKtYWFbfBEFC%2FKZc5dzubfAYGrfMo54dzswXIRSTxQO4oKWtrVWfFMAQpyxpgjUN35nOjHcxpXLAaQtPQSrVkwFwrY0tbh&X-Amz-Signature=10b791f54326cb1986f1dbed41936abca14846ad076f3e361ddb1bb3c4ea200f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
