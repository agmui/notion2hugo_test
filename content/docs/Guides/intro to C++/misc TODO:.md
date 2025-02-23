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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3NKRE34%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG74kMu7YvakjC4ESX0H%2BXQd5GfTzxkfMM2KUto9TXK%2BAiA%2FH7SG1eFOSqDOSrnxp8JUjw6zy8Ui3e7R9pI6xRfmdCr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMtL0ziVOYkawRIjIIKtwDgJbZ7bOYnVMCpZmSs%2BqBipr1ia%2F%2FSYVqChrw2CtpA0kcBdeSfFcknRdyylguCsdlELGOaO%2BCy5id2hcxHX9C%2F8OnihTPjBrm%2BgT6vTGkg%2FUSGi%2BMnpCxNVGGB4gy7CNIYzxE2jl14LQFcLJSxa1zKfsB3pko6c51PqTqWp1vElxRUT6ul69jYSj49qH%2B2OpndT%2FarIibUhdB0%2BRivwqJ7B0yuQ1prHDvbHAXqF9TMbPooteqwCgN1IiPWi5VmwF7qIxnsBVXpbgIm818Xu08MZDH0yxNUcdAPd%2FisL%2BKuwCqI%2BFV0RJK%2Fafi6qXuuOBJ8edkLOykz2sLxqAFWpQxAqtSFEUGXHYgYwvMxeM3MZNdMoPSBgX7gwE8rT66%2BJVTFIA%2FdF2eCxAP7hrZ0JG4MTtOTYMg4Jv6wxWblgznYJAxpQ0jjTY3M2rKxKyQW2dmANes6B%2FbJrxztVYPrtF6n%2B%2Bb3%2Fhkbe3uJrNzBwrzD8bjx5rST0QMr1Pvedyi0kOWneWc%2FEy%2B137CMJVGJjd72aWNbo14MAKYzgCyBXg4SkTRU5oA3OwyG7S59w5Tq%2FspCk2cHxlREgS1eNpCyZtFJocKgIIo53MigKpV8bAw7tPxLYy9K3hmb0gL7a4wq4LtvQY6pgGOwHv1sTSx3bHH1NvQg6a%2Fum29nokMSMkC5SEwONY7tKm47ZwRNFacJ2qKyLJsBJEdJgfrgbLsBYvM%2BflzVf%2FUFch617Iegn1Ov7AuSa%2F%2FA8i%2BO9L3d%2FMYOmRPf1NDbRsQEbVh07maTh4O%2BkkUOUDiymMem3OoXa4rv8RSMx%2F4zPAskkldB8zdcFHbXhgCIriPmwd7YSINjj95yiy%2BzqLX9eGXKTzr&X-Amz-Signature=56f593c950d64c97ec096e00035ca4a27bf58437156f000d2a204489576dea31&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3NKRE34%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG74kMu7YvakjC4ESX0H%2BXQd5GfTzxkfMM2KUto9TXK%2BAiA%2FH7SG1eFOSqDOSrnxp8JUjw6zy8Ui3e7R9pI6xRfmdCr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMtL0ziVOYkawRIjIIKtwDgJbZ7bOYnVMCpZmSs%2BqBipr1ia%2F%2FSYVqChrw2CtpA0kcBdeSfFcknRdyylguCsdlELGOaO%2BCy5id2hcxHX9C%2F8OnihTPjBrm%2BgT6vTGkg%2FUSGi%2BMnpCxNVGGB4gy7CNIYzxE2jl14LQFcLJSxa1zKfsB3pko6c51PqTqWp1vElxRUT6ul69jYSj49qH%2B2OpndT%2FarIibUhdB0%2BRivwqJ7B0yuQ1prHDvbHAXqF9TMbPooteqwCgN1IiPWi5VmwF7qIxnsBVXpbgIm818Xu08MZDH0yxNUcdAPd%2FisL%2BKuwCqI%2BFV0RJK%2Fafi6qXuuOBJ8edkLOykz2sLxqAFWpQxAqtSFEUGXHYgYwvMxeM3MZNdMoPSBgX7gwE8rT66%2BJVTFIA%2FdF2eCxAP7hrZ0JG4MTtOTYMg4Jv6wxWblgznYJAxpQ0jjTY3M2rKxKyQW2dmANes6B%2FbJrxztVYPrtF6n%2B%2Bb3%2Fhkbe3uJrNzBwrzD8bjx5rST0QMr1Pvedyi0kOWneWc%2FEy%2B137CMJVGJjd72aWNbo14MAKYzgCyBXg4SkTRU5oA3OwyG7S59w5Tq%2FspCk2cHxlREgS1eNpCyZtFJocKgIIo53MigKpV8bAw7tPxLYy9K3hmb0gL7a4wq4LtvQY6pgGOwHv1sTSx3bHH1NvQg6a%2Fum29nokMSMkC5SEwONY7tKm47ZwRNFacJ2qKyLJsBJEdJgfrgbLsBYvM%2BflzVf%2FUFch617Iegn1Ov7AuSa%2F%2FA8i%2BO9L3d%2FMYOmRPf1NDbRsQEbVh07maTh4O%2BkkUOUDiymMem3OoXa4rv8RSMx%2F4zPAskkldB8zdcFHbXhgCIriPmwd7YSINjj95yiy%2BzqLX9eGXKTzr&X-Amz-Signature=19cf4676a885a89241c6dfc0c586d971655364d9aaa21e7328aef1b58c36876c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
