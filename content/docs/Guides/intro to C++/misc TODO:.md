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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FNJDXB6%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpwaCa9qYBqs4I5s2eC6eNRm0GmMISVYTZ0ZIW6%2BuvmQIhAMpCCOi%2B18jTV2DlZGkMqfaZjmUe1ByvFasHLo%2FQLXUaKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyJ0Tz%2B7pXXIXQRT8q3AN2jb3QDyaHo0FEkwddZwbaguE4aa9JkA8Jnn7leJhTR0jGLTobsJuDHyBNvhyCIrujAChBTlg%2BPeYq7dgIF%2FVLDXLgxFB%2BoK46Ioo9nP62UbZBEwGWPWMh%2Bnxg7dus3QiKO0ubcd2v5z1w3UnpZweXq7xA8ZUmblr6f4qIcaY697Q2efc6aT9UN4RJGfWb26qH86867a5CSGWophA12Zxt6tioy7CKvkz3tBsW8sbxiuL6bDmfOD6bNkAwU4aB6uXAd3EquMtEHFlM4bEYS1Iuq7AqxSoFYdoUEHgDaDP9WZ4232UWFMBw4dnkRmfeOdpQMwfRk9MhtTUyZVqJeaBzM8wo2xxtBVNCm9F9LuhQDaWcIRvkdpV%2B6DQddlegFlBFu%2BDadLhJegMEBk97EY3lpZHk21ueUo%2BH4xRf0dupV3j9UUa3H4lQC3FnEpqPO2xuRj55nIe379DVrZ%2B5mqmL0haMRqAvpp21RCUhDBVhyCTJtIHA1fbaBiQY4bC5j294MKExh9z74OIYbyE0EApXSRJEBXUOe7Ok5pnXYREugjK0SLcPYmrVQtBd3qmDgSwzG0z1DDc8%2Bcz8bRrUBKvXyr2tq7ZobfSEGWbi8Df82RSNZnGmGj3Ji2GMJDCH9fvABjqkAY%2B%2FwDsWlOUY5dCl9YVPflE2chORp39JMe%2FmoghNBYJLndGwD27U8iR7sfpU7mnglxU7EkE%2FnLoOn%2Fmc9zLLEKGxGnFhXOpTudU5YKJBTKwGXGzf657dAvzaVFUy2%2FTO8S2EcX%2FBhEO7x260PyqrNDZd15FBgUipAIGHIKgEjoh%2BdnmzdXlEEKZnWbAxRWn5VSU1yZAjq4ii1EqTOToLfKmDEaS2&X-Amz-Signature=9ef8df3820fd903802d037d64b42b5630f6e1a68f1c5224b7f44cf70374b9350&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FNJDXB6%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpwaCa9qYBqs4I5s2eC6eNRm0GmMISVYTZ0ZIW6%2BuvmQIhAMpCCOi%2B18jTV2DlZGkMqfaZjmUe1ByvFasHLo%2FQLXUaKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyJ0Tz%2B7pXXIXQRT8q3AN2jb3QDyaHo0FEkwddZwbaguE4aa9JkA8Jnn7leJhTR0jGLTobsJuDHyBNvhyCIrujAChBTlg%2BPeYq7dgIF%2FVLDXLgxFB%2BoK46Ioo9nP62UbZBEwGWPWMh%2Bnxg7dus3QiKO0ubcd2v5z1w3UnpZweXq7xA8ZUmblr6f4qIcaY697Q2efc6aT9UN4RJGfWb26qH86867a5CSGWophA12Zxt6tioy7CKvkz3tBsW8sbxiuL6bDmfOD6bNkAwU4aB6uXAd3EquMtEHFlM4bEYS1Iuq7AqxSoFYdoUEHgDaDP9WZ4232UWFMBw4dnkRmfeOdpQMwfRk9MhtTUyZVqJeaBzM8wo2xxtBVNCm9F9LuhQDaWcIRvkdpV%2B6DQddlegFlBFu%2BDadLhJegMEBk97EY3lpZHk21ueUo%2BH4xRf0dupV3j9UUa3H4lQC3FnEpqPO2xuRj55nIe379DVrZ%2B5mqmL0haMRqAvpp21RCUhDBVhyCTJtIHA1fbaBiQY4bC5j294MKExh9z74OIYbyE0EApXSRJEBXUOe7Ok5pnXYREugjK0SLcPYmrVQtBd3qmDgSwzG0z1DDc8%2Bcz8bRrUBKvXyr2tq7ZobfSEGWbi8Df82RSNZnGmGj3Ji2GMJDCH9fvABjqkAY%2B%2FwDsWlOUY5dCl9YVPflE2chORp39JMe%2FmoghNBYJLndGwD27U8iR7sfpU7mnglxU7EkE%2FnLoOn%2Fmc9zLLEKGxGnFhXOpTudU5YKJBTKwGXGzf657dAvzaVFUy2%2FTO8S2EcX%2FBhEO7x260PyqrNDZd15FBgUipAIGHIKgEjoh%2BdnmzdXlEEKZnWbAxRWn5VSU1yZAjq4ii1EqTOToLfKmDEaS2&X-Amz-Signature=468151304d6aafe7c383598cc3bc8c1ecb7cc4e51c6a4dda28abbf44c880bd95&X-Amz-SignedHeaders=host&x-id=GetObject)

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
