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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466726FROPN%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUO3waF2WSpEDGhtGlV1Y8uoYW1W3b3ieIHUqkj4RJ2QIgQOSXzQVriZ3mYtxnlwTKbjL8gPh4fCe5Nb1BCw2ST2EqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUJbqaUy4kdOwi2iyrcA8DZQnZWOsffbCmtA0RRnuw5t4jWckL4QWzZv%2FlUDNSQoDBwgOU%2Fj8yIISbW0tQD9N0GlYEe9DiC9w%2BP9IgOTDwoeu7zu3CgPT4QkQ8lAjxjdF8zN5wd1rW0TsCJPqh2d68c28wMwzdgb0GngkGAa50TFyHCxcurfIhlm0e9lLRWaHq%2FEgKWTNrq3%2FVXSSW1nLVZSkQiSlX%2B5rjsfuScR51nto7An3P00xR%2F4WEoZmHW8caEmnyO6E%2FJart1XD1TqFXW5R5tnvkdN08sdWKUGq8qzhlY3jVuqBkLjc3OnHveME%2FKxxAWcWzcDjONSg7QaT%2FXtlZyu8DuJywbX9mXdeZtsPrcXutjkwy1yI0jG4FFILmbE0O7cfV3LfItInN1g67od7FgQa7IK2%2BOoU%2BHsAqglSlyI1sWuUC6ghty78GO6KUKJYwBf91tCUbpCi%2BHi10q9FeiiP7wDbPFlO7alzWgR5s2bBr6Ar3AVdHrcMen6bzYqG1z%2BV6pqw0Y%2Ffi3mr4ZGZNt%2FH%2Fp2YeFh8sOJ2lErn5RlkQ2FVIxu6Ir7k7R%2B5KhubeBsnqyZytOAJUunI8AIzWBRM3dT2V9fKvAVKApQxKin89IatTo49IIr%2F0Hg0XF4k04TEnZEN7KMN6zn8IGOqUBnmCW9y5AqrxPgLSz3ULEJMuPNHmx0mm43YnZghgTZfGRaZADdcH%2F7Ejq8A6t%2FUqd7jKFBTZgAKei17UOiEriVNApUEvxciTBP1Umda9gt3hWlJdlnzp4etKghlVJ6F%2B6Z1rdypcdxc%2BDuNYt04tgRkXvckWmQiTeFElnsP4fPJccMLszwHqc%2FHRPh2vCD3LtwxFzhFZISfi3mJ290JMnGWRnxSU8&X-Amz-Signature=d1ba3b36042a1d61716b91081a423fe0997a818722ab94af2ddacc0faa5d7f19&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466726FROPN%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUO3waF2WSpEDGhtGlV1Y8uoYW1W3b3ieIHUqkj4RJ2QIgQOSXzQVriZ3mYtxnlwTKbjL8gPh4fCe5Nb1BCw2ST2EqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUJbqaUy4kdOwi2iyrcA8DZQnZWOsffbCmtA0RRnuw5t4jWckL4QWzZv%2FlUDNSQoDBwgOU%2Fj8yIISbW0tQD9N0GlYEe9DiC9w%2BP9IgOTDwoeu7zu3CgPT4QkQ8lAjxjdF8zN5wd1rW0TsCJPqh2d68c28wMwzdgb0GngkGAa50TFyHCxcurfIhlm0e9lLRWaHq%2FEgKWTNrq3%2FVXSSW1nLVZSkQiSlX%2B5rjsfuScR51nto7An3P00xR%2F4WEoZmHW8caEmnyO6E%2FJart1XD1TqFXW5R5tnvkdN08sdWKUGq8qzhlY3jVuqBkLjc3OnHveME%2FKxxAWcWzcDjONSg7QaT%2FXtlZyu8DuJywbX9mXdeZtsPrcXutjkwy1yI0jG4FFILmbE0O7cfV3LfItInN1g67od7FgQa7IK2%2BOoU%2BHsAqglSlyI1sWuUC6ghty78GO6KUKJYwBf91tCUbpCi%2BHi10q9FeiiP7wDbPFlO7alzWgR5s2bBr6Ar3AVdHrcMen6bzYqG1z%2BV6pqw0Y%2Ffi3mr4ZGZNt%2FH%2Fp2YeFh8sOJ2lErn5RlkQ2FVIxu6Ir7k7R%2B5KhubeBsnqyZytOAJUunI8AIzWBRM3dT2V9fKvAVKApQxKin89IatTo49IIr%2F0Hg0XF4k04TEnZEN7KMN6zn8IGOqUBnmCW9y5AqrxPgLSz3ULEJMuPNHmx0mm43YnZghgTZfGRaZADdcH%2F7Ejq8A6t%2FUqd7jKFBTZgAKei17UOiEriVNApUEvxciTBP1Umda9gt3hWlJdlnzp4etKghlVJ6F%2B6Z1rdypcdxc%2BDuNYt04tgRkXvckWmQiTeFElnsP4fPJccMLszwHqc%2FHRPh2vCD3LtwxFzhFZISfi3mJ290JMnGWRnxSU8&X-Amz-Signature=398772db26c2f595166e9988de7a5cfa66269eb1ee2b8da6b728a3a1e5a61990&X-Amz-SignedHeaders=host&x-id=GetObject)

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
