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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIDJECFF%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCln0BwsdusiKYHnA3dgMkjnqoNLBdNhTdO%2FGIxCFdZ5gIhAIaxYW2IaQnXaR2AAESL2CTNddV6%2FyrEa3c8tcBYf20MKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUv9y8yvScOr%2F077Uq3APyk%2BFMj4bqR%2FABx2BQEHyAqqULPoY4YZp7hRCV6z8Tz2UmyAMRTlS7Cj9rtoZTkKT4mDYibzfmd9CIxj%2B%2FlG1%2FL%2BQqS6E9nvuZASEFlBAOuvC10DZXmB9djVgV4eiZf5RkNJOboVa9OOW9X6QwqVJIyrFWeppCt7sIe64sjQNNiyna22rm7SeaTk7t6kQfoFn3dcbF95jUQfqFxuWqKbhdChYDljG%2B1HYZXYZplZIzNAW9BbVcmphKlD9bNlvIak4F0vg6NX1UmzZMvWRhk1jhkxx%2BFrAXDRWmjC6zaiTpGOfQY9nAkTSBk%2FVUor2me8t9%2BdjspW24FIOIrx9WLrOOBp%2BvGjliKanTbhEcld3QXakU12iOwCep45mHIKgrH6WhYl84WkjgNY3LGFkBHFV3xOVK2pFQfklQhCLD3cPqSkxa4I8SFDZG9ZYOLr1G48MTu6P%2F8PfdXrUpcwK6POvKzn%2Fz9IsIFkKTnjZNiTfbBI%2FrvhbEHkhTolCaEfxujz6D89YaxDcln1rXdM%2Fla8%2FI3pSC%2BPlRM%2BqFgoqM9uRMF9XOtJNIBquJdgAEGykeJIcZbaO7NsoYBl2Z%2B9uSDI4MoaVXfSdFEMjA6cWm7n82WlEJD4jhODIgzIn%2BtDC6%2Bee9BjqkAYyDln1BUbhdlki2DTgyKBU%2BcF74c0ZNuqfmRiIhUbx1ZNTEEqWPdQGvzo98%2BC1nY5T%2F%2B9dd6ZChFAl7o%2FPu%2FrL2yUUJcWg4VSgQeRDSC%2ByJstm%2B4D4cqqwIrOhh%2Fw0iFgz2QBDR9tdKJ1ub4r1lsM5%2BNPJfKPBD5fUvSn9Ljg2wAgQz%2BCOgp%2FHN3edc5NCr4z5R0CJXO8cgSNn0BVpcDkw%2FtZkU&X-Amz-Signature=303d52f93007fe357ef85c2fb36b3256719997d90a3ecc15e528c931724f5386&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIDJECFF%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCln0BwsdusiKYHnA3dgMkjnqoNLBdNhTdO%2FGIxCFdZ5gIhAIaxYW2IaQnXaR2AAESL2CTNddV6%2FyrEa3c8tcBYf20MKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUv9y8yvScOr%2F077Uq3APyk%2BFMj4bqR%2FABx2BQEHyAqqULPoY4YZp7hRCV6z8Tz2UmyAMRTlS7Cj9rtoZTkKT4mDYibzfmd9CIxj%2B%2FlG1%2FL%2BQqS6E9nvuZASEFlBAOuvC10DZXmB9djVgV4eiZf5RkNJOboVa9OOW9X6QwqVJIyrFWeppCt7sIe64sjQNNiyna22rm7SeaTk7t6kQfoFn3dcbF95jUQfqFxuWqKbhdChYDljG%2B1HYZXYZplZIzNAW9BbVcmphKlD9bNlvIak4F0vg6NX1UmzZMvWRhk1jhkxx%2BFrAXDRWmjC6zaiTpGOfQY9nAkTSBk%2FVUor2me8t9%2BdjspW24FIOIrx9WLrOOBp%2BvGjliKanTbhEcld3QXakU12iOwCep45mHIKgrH6WhYl84WkjgNY3LGFkBHFV3xOVK2pFQfklQhCLD3cPqSkxa4I8SFDZG9ZYOLr1G48MTu6P%2F8PfdXrUpcwK6POvKzn%2Fz9IsIFkKTnjZNiTfbBI%2FrvhbEHkhTolCaEfxujz6D89YaxDcln1rXdM%2Fla8%2FI3pSC%2BPlRM%2BqFgoqM9uRMF9XOtJNIBquJdgAEGykeJIcZbaO7NsoYBl2Z%2B9uSDI4MoaVXfSdFEMjA6cWm7n82WlEJD4jhODIgzIn%2BtDC6%2Bee9BjqkAYyDln1BUbhdlki2DTgyKBU%2BcF74c0ZNuqfmRiIhUbx1ZNTEEqWPdQGvzo98%2BC1nY5T%2F%2B9dd6ZChFAl7o%2FPu%2FrL2yUUJcWg4VSgQeRDSC%2ByJstm%2B4D4cqqwIrOhh%2Fw0iFgz2QBDR9tdKJ1ub4r1lsM5%2BNPJfKPBD5fUvSn9Ljg2wAgQz%2BCOgp%2FHN3edc5NCr4z5R0CJXO8cgSNn0BVpcDkw%2FtZkU&X-Amz-Signature=6fa886c7b5c760ee9d047bdb8c76acb9e1d380e569816f77658d987ac42695b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
