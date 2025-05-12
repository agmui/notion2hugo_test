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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IA5NS7G%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDuXr%2BsNYi2qpc%2F3MpLPXdC9EHM60CC9LBZQs7uFoCPEgIhALurc1Sbi6LA0hUZRAkWvZYUAjZu1vk2VsNg8JcmR6wHKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEuUmU95geCe0dzw8q3AMs%2Bs%2BYhnAGnSLh1IDdWSk5VP7lsxi2ijM2Mt1tI%2FNZeWdCLJU5wdJ1w0w2weckwcEtqvLDeQMUnXXXrTvBTV0rpV55QmVcIHE%2FyRN8UAyHJBvVinw0W0PN38E2wGfev7CfCOHRCppKXnuUBbwuZxdfXrEWen3hH6aCArdYaDKT4Ew6Bal4dcLcKal4jH9ukF%2FWp3jB1jqV2fsCwyFshow81%2FynnnKIj7yVXAIxsP%2BC8mxq1GnHTRYqSwhNcGuA0Qzw1RtwoUkTpeVBlSGTX3wI38rMwI4MIzMSB%2FSZrULuYERz1OFfax%2FmGA8%2BRTd8AnWQc8hO%2BswsqnhTNv2sV5gFAl%2FY%2Br3RDL2bEqFMP0Y%2FaRB62FN%2BlN%2FAIA1YJFS1YXAsCsf9Tqw9j0aFHsUc69%2Fnb1Oq%2BxKyyNEjoHvNIFtPTeK9ylVCI8nHFgWW82qkWyxLvafW6FkQLfD2SEFtG78KzU18EbSPPp6%2FLpfwt9UcnmYXJxhiprFRuaE%2BqF61lL9jh8LD8xJWPUACZKW5Mw%2B0PONMqYdWcpO25J5ByDyBThDEHIMQsDxWJ8MifGkFiFDnFoiJUm1R5niso1k7DqH7MF8d0Axt5Jn9mQuYYtashMLvQHKeRAfcJc%2BcYTDQqYnBBjqkAWIjmQ%2F2%2BmrA6rHLIBeFZwOCu5WBVXNKHh6EJPm%2BQVubeH7ZtbgfYQLwPYAhH4QNuA2SsUaBzNecq7J80T3nQ4uI75qNsF15fmUchbbtzd7JCGJn4zX%2B049bfGurQcn90qkqrA6HSf1tb8QUZ2g82vVf2ktErh%2BnmIhK6EZqvp785Ri5hEerYza2xOpUUt4jbb1xb4KgCWPKMoxu%2Bv280%2Br9hS%2B6&X-Amz-Signature=82dc5672e54cb02109798789cafc834b02cdf94d80537d9ef685b85cc5f768cb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IA5NS7G%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDuXr%2BsNYi2qpc%2F3MpLPXdC9EHM60CC9LBZQs7uFoCPEgIhALurc1Sbi6LA0hUZRAkWvZYUAjZu1vk2VsNg8JcmR6wHKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEuUmU95geCe0dzw8q3AMs%2Bs%2BYhnAGnSLh1IDdWSk5VP7lsxi2ijM2Mt1tI%2FNZeWdCLJU5wdJ1w0w2weckwcEtqvLDeQMUnXXXrTvBTV0rpV55QmVcIHE%2FyRN8UAyHJBvVinw0W0PN38E2wGfev7CfCOHRCppKXnuUBbwuZxdfXrEWen3hH6aCArdYaDKT4Ew6Bal4dcLcKal4jH9ukF%2FWp3jB1jqV2fsCwyFshow81%2FynnnKIj7yVXAIxsP%2BC8mxq1GnHTRYqSwhNcGuA0Qzw1RtwoUkTpeVBlSGTX3wI38rMwI4MIzMSB%2FSZrULuYERz1OFfax%2FmGA8%2BRTd8AnWQc8hO%2BswsqnhTNv2sV5gFAl%2FY%2Br3RDL2bEqFMP0Y%2FaRB62FN%2BlN%2FAIA1YJFS1YXAsCsf9Tqw9j0aFHsUc69%2Fnb1Oq%2BxKyyNEjoHvNIFtPTeK9ylVCI8nHFgWW82qkWyxLvafW6FkQLfD2SEFtG78KzU18EbSPPp6%2FLpfwt9UcnmYXJxhiprFRuaE%2BqF61lL9jh8LD8xJWPUACZKW5Mw%2B0PONMqYdWcpO25J5ByDyBThDEHIMQsDxWJ8MifGkFiFDnFoiJUm1R5niso1k7DqH7MF8d0Axt5Jn9mQuYYtashMLvQHKeRAfcJc%2BcYTDQqYnBBjqkAWIjmQ%2F2%2BmrA6rHLIBeFZwOCu5WBVXNKHh6EJPm%2BQVubeH7ZtbgfYQLwPYAhH4QNuA2SsUaBzNecq7J80T3nQ4uI75qNsF15fmUchbbtzd7JCGJn4zX%2B049bfGurQcn90qkqrA6HSf1tb8QUZ2g82vVf2ktErh%2BnmIhK6EZqvp785Ri5hEerYza2xOpUUt4jbb1xb4KgCWPKMoxu%2Bv280%2Br9hS%2B6&X-Amz-Signature=3575cb185261f818bea8b5bc625f605474d636ffdd2ae3fd88ec6feb44611313&X-Amz-SignedHeaders=host&x-id=GetObject)

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
