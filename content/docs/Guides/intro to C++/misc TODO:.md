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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZP2YIU5%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCuefBgEu29VCt2tqUbHAfCWGi3m7s0aXewZ9i2x5L1HAIhAPQ%2FzsXyNX5bukaM1M1MMDu7gA8I0MjHqpksvqrwdaE%2BKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAUNp44%2F4FvjLFNjkq3AOMHh%2BRduH23Ac8bpPLSZxA0LauLRFsxKw%2FeCsHdHa9961PqDLwrlvMrS9fgsh8KCRRGxgFlA08QulqPzbsOBVROyNmFptlJk1JfEnjpcPRhUqKQL9cN6hQTZqBuj2fL6IvK7vxJIoLgg2yE1%2FRVjTlzg3RO3CDYxsJc2yCXH1j8i0pBMmuO71VqWbXEuvzp39ufhO%2B7bFk5aLRmIyFN1MUv074DNKQ6OD6lr8bC4Wjv86mGHp2lgPzdAOa0n25%2BBg6XxecBWI4G7Ctj01qHA5KNZMXZDnUDYeuQT%2BHTTE9JEaePLnqVU3iyx0sQhYF8CpC4Ftqm%2B5HauJS6UJoWImxXBW9fDMNhjP3mDAOJ%2B%2BQr4GaLhq23lEBQl9QO2tDnRNm%2BRy0PFIHx%2BHgCdVh2EqHqXPwFD6YnD4NAJxRuOS69wXp7hzI2P5iHpClKZZmTOOIsWFnIqEZPZPbXwtpY5F6coaS%2F5RI2j%2BCGB4piwNk03WKRb9%2BXy0gUZ%2BWXGOo%2BoLf0MslP5nB8u34dOlVcDOoBvwPsFJcuNYBXTLFwN6x1nnavPXkR%2B46h4uyBUlC%2FbUAx8ho6NfCIJMOnABM3lBsrqcsBztLVVEfTs85vxjJLWpWqlvdsZBahGEMETCHyKLABjqkAbEgVR5kvw8KeDRd67UGWR8ZybxTerhL9mcGuvPFFvIfj3LpK45Gn3Gz%2FIe8rDPJUzeVxBYd%2B46h7ssB5wKwglwz94SJrH71NdNOyY5k7MVvApMKYBfDSMne1FKqD6IQU%2FmBwuPzWlWctEWkW%2BCmR3kGDUP%2FhRwXO3eITMwV12QhL%2BFbrnUNwHFJ%2B6HCP4q8sQ%2Bb8ulnZuJ1GHf%2BNUzKOC5COtRq&X-Amz-Signature=98b4c707407d705e2e0972ff8d3446e207cd9c49a9735921ea5ebe66d895e34d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZP2YIU5%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCuefBgEu29VCt2tqUbHAfCWGi3m7s0aXewZ9i2x5L1HAIhAPQ%2FzsXyNX5bukaM1M1MMDu7gA8I0MjHqpksvqrwdaE%2BKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAUNp44%2F4FvjLFNjkq3AOMHh%2BRduH23Ac8bpPLSZxA0LauLRFsxKw%2FeCsHdHa9961PqDLwrlvMrS9fgsh8KCRRGxgFlA08QulqPzbsOBVROyNmFptlJk1JfEnjpcPRhUqKQL9cN6hQTZqBuj2fL6IvK7vxJIoLgg2yE1%2FRVjTlzg3RO3CDYxsJc2yCXH1j8i0pBMmuO71VqWbXEuvzp39ufhO%2B7bFk5aLRmIyFN1MUv074DNKQ6OD6lr8bC4Wjv86mGHp2lgPzdAOa0n25%2BBg6XxecBWI4G7Ctj01qHA5KNZMXZDnUDYeuQT%2BHTTE9JEaePLnqVU3iyx0sQhYF8CpC4Ftqm%2B5HauJS6UJoWImxXBW9fDMNhjP3mDAOJ%2B%2BQr4GaLhq23lEBQl9QO2tDnRNm%2BRy0PFIHx%2BHgCdVh2EqHqXPwFD6YnD4NAJxRuOS69wXp7hzI2P5iHpClKZZmTOOIsWFnIqEZPZPbXwtpY5F6coaS%2F5RI2j%2BCGB4piwNk03WKRb9%2BXy0gUZ%2BWXGOo%2BoLf0MslP5nB8u34dOlVcDOoBvwPsFJcuNYBXTLFwN6x1nnavPXkR%2B46h4uyBUlC%2FbUAx8ho6NfCIJMOnABM3lBsrqcsBztLVVEfTs85vxjJLWpWqlvdsZBahGEMETCHyKLABjqkAbEgVR5kvw8KeDRd67UGWR8ZybxTerhL9mcGuvPFFvIfj3LpK45Gn3Gz%2FIe8rDPJUzeVxBYd%2B46h7ssB5wKwglwz94SJrH71NdNOyY5k7MVvApMKYBfDSMne1FKqD6IQU%2FmBwuPzWlWctEWkW%2BCmR3kGDUP%2FhRwXO3eITMwV12QhL%2BFbrnUNwHFJ%2B6HCP4q8sQ%2Bb8ulnZuJ1GHf%2BNUzKOC5COtRq&X-Amz-Signature=ed25b7308ab31dcbb00546d6f3ada0508c4b6b04d00a83c92990ddc398c77f17&X-Amz-SignedHeaders=host&x-id=GetObject)

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
