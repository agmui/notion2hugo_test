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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U3BYXH7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTHTYztP%2FM%2BrhXiHv5vNg9xGejPpPgieMOoWZOVCZoHwIhAKZxwxyB%2FCKD9%2F5TNdwsZ2oOpDNWrJtRvsDv2qfhxaYuKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRI4WQ%2FthckFEHdI8q3ANXNe6I0N%2FBBgd8WSuY98HTBtD48IU0PLCPkn8behJRW4028nAOl%2FL4%2FfEKZUn10h1mU8lXrSESptfyhCz82z8%2FNMz5z9JXcXB358tDj0Y5Gkz3MLcSGGZG%2B2mQz0VWKbLb1MDut%2FPMWu3r6s6subky7d1wjF1NK3CNzgqBXHs4X1%2BsPHvMQ6QIpCVV%2BEqKufwFBrlc9zc83dD5bLS%2FgoUgUwhmUrlr%2Bp9NlM7O2lwqU2ROBEbxBnMOTv6KdiKxoOGciRnxCZ4pJZ%2BDAcJ50%2B3EiM6OC7qdAEWsENQSI2QXQkD1uTx7l1b4K6cmCRauO8RJb9JkNIg7V8ThvrJZQrNviXL7Tv7T1dipwSs30mHwKv5AOdm92nKjKr2DGAV16zhAzylEkQtdNyHSetU1F%2FdZmgYXB1GFwYTVa4oYCXXTX7VKDFgEYKxtlJWZ%2F6klwL5on8G0SOuvAODujO6%2B40%2F8WIPjKOA1guTIghgsPm4QS9phGF9Xo6g4AT8l9kLLcMCTSiF%2FoQ1KiNwGnFGsTvuRpxSJ0DM99IjYUKiUOOl6L8kodgJ%2FwnEcw9XvgeqIU%2FmK2xYe3%2BGAHA1U3l1D3CXTEVFxvoNdNnXtZM7vI5Xz7zjZaTUh02B94h2ovjCPqbK9BjqkAXO2b%2FY4H33V7xZUF3bQNBRvrYYN2vpgMg0orFEJQ0lB9vb7ZSKGfQHc7J%2By3TrI8NO3TneUx5%2B9JHfh6F3sZG2H8%2BD6lBMB4FSmy2wPTWJQ32Tq%2B62zbYZAaE7y1hw%2FTrwhvWYj1VbrhZRQ%2B0qLFL8ciD8t5LtG9SqyHPFdP4cr8cpBxW7png6ZglM9953uLqdDsCrlj5BxRLa2rr1SAL9viv3y&X-Amz-Signature=50fe1c3faf4a50274663002e911b1a5ca89e333c74badf1e51d9118290080b93&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U3BYXH7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTHTYztP%2FM%2BrhXiHv5vNg9xGejPpPgieMOoWZOVCZoHwIhAKZxwxyB%2FCKD9%2F5TNdwsZ2oOpDNWrJtRvsDv2qfhxaYuKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRI4WQ%2FthckFEHdI8q3ANXNe6I0N%2FBBgd8WSuY98HTBtD48IU0PLCPkn8behJRW4028nAOl%2FL4%2FfEKZUn10h1mU8lXrSESptfyhCz82z8%2FNMz5z9JXcXB358tDj0Y5Gkz3MLcSGGZG%2B2mQz0VWKbLb1MDut%2FPMWu3r6s6subky7d1wjF1NK3CNzgqBXHs4X1%2BsPHvMQ6QIpCVV%2BEqKufwFBrlc9zc83dD5bLS%2FgoUgUwhmUrlr%2Bp9NlM7O2lwqU2ROBEbxBnMOTv6KdiKxoOGciRnxCZ4pJZ%2BDAcJ50%2B3EiM6OC7qdAEWsENQSI2QXQkD1uTx7l1b4K6cmCRauO8RJb9JkNIg7V8ThvrJZQrNviXL7Tv7T1dipwSs30mHwKv5AOdm92nKjKr2DGAV16zhAzylEkQtdNyHSetU1F%2FdZmgYXB1GFwYTVa4oYCXXTX7VKDFgEYKxtlJWZ%2F6klwL5on8G0SOuvAODujO6%2B40%2F8WIPjKOA1guTIghgsPm4QS9phGF9Xo6g4AT8l9kLLcMCTSiF%2FoQ1KiNwGnFGsTvuRpxSJ0DM99IjYUKiUOOl6L8kodgJ%2FwnEcw9XvgeqIU%2FmK2xYe3%2BGAHA1U3l1D3CXTEVFxvoNdNnXtZM7vI5Xz7zjZaTUh02B94h2ovjCPqbK9BjqkAXO2b%2FY4H33V7xZUF3bQNBRvrYYN2vpgMg0orFEJQ0lB9vb7ZSKGfQHc7J%2By3TrI8NO3TneUx5%2B9JHfh6F3sZG2H8%2BD6lBMB4FSmy2wPTWJQ32Tq%2B62zbYZAaE7y1hw%2FTrwhvWYj1VbrhZRQ%2B0qLFL8ciD8t5LtG9SqyHPFdP4cr8cpBxW7png6ZglM9953uLqdDsCrlj5BxRLa2rr1SAL9viv3y&X-Amz-Signature=84776982912694742b583b29877fae7f4b907f05a9eed67a45cfc2e5343ec17f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
