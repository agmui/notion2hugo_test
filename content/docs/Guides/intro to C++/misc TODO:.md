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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY7RTHM5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDMGH1IvjJSX%2Ba3h0nXe5VJguyG2qpdHMMQBe42d%2BebEQIhAO6LLsHGKiMIha3T4P%2BSYZz1ZAeqyFGp975kKAfnlmADKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDlqZL77aXck5QXt8q3ANjk9TIB1rsErWtpjGvLzTIKNCRJyvZZbDDhvHBlH43g4xFFmkSWq97VSC3rrVcEMiANwnld05enCSRC3fbt152oqjHk3WEu3m3A%2Fg2puAod98SdfmcMxOVQhb%2BzYScGa%2BrO%2FeHW7tA9Pv6Oq5nPK4Uy34QB4TmaVbTrlIZ8Tfz8xqhJjbLOsUYfyPuwa2vNfMvhwRKbbxvJYuomSCrFtNcAq9FKx69Co7byynLWmI2MT%2FnKmXbbGP1Wg9TaIFnWVwVsSjYUBlqnDMA5MgtEGCuJACkh%2Ba1BOq5XTs%2FPHed5VUit543%2Fy%2BqmcyIIsIyn%2F7uPwC8J%2BH%2FRkufLT2Xg%2B%2BE2Cs563yO5NwMD%2F91L2wcVe4tWce275TkFqRtvZrRiTQ%2BAPp75xBezV3xK8Bas1BpHmKlsKQrU9wkXGIXTgwdU5iidJKLH4X2n9lhPKHDlc4hTnLHxI4%2BF%2BsujlFsX0N1fhRTfwW70YaS5bd3v9e10f9sblO4K5Hu%2BSZD8Crewal%2BDRfJlIVUMepvjhvocfIq4aULsxA0ZtE4yy9YISOX08%2Bt3SggAXdlQt9NS7Qlj0WLNyiPd8Q9Z5y%2FpsxEfVj9GNXMdkjukAOGX8QmsViYUqsFNF3zZACYfxuEzzD03oLBBjqkAXVLubrHytMv7LC%2FDkkjGp36%2BhZioXGYkK3Y8aB9QvOti6OA1XVoiS0eY6k%2FEdwcXvLoHxnKtvxFfMILfyHzmEhCQAcjccjp6%2BMn10efNZOYg%2BuW2mR6fT7KsZkDGqXeFhK4M%2BfU9BY3CSi7luvu9iYELwlTb8Akqeu16OI8G%2Fw7ZydRX%2FUufGjz6kKBuEYJ6s2xcgrtaHrUNPK2%2FE9iL9%2BXeSJ3&X-Amz-Signature=c1e4ab21d277052d14ad27041bd4a209ec721f9927d91e1fc9397ae5afb99f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY7RTHM5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDMGH1IvjJSX%2Ba3h0nXe5VJguyG2qpdHMMQBe42d%2BebEQIhAO6LLsHGKiMIha3T4P%2BSYZz1ZAeqyFGp975kKAfnlmADKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDlqZL77aXck5QXt8q3ANjk9TIB1rsErWtpjGvLzTIKNCRJyvZZbDDhvHBlH43g4xFFmkSWq97VSC3rrVcEMiANwnld05enCSRC3fbt152oqjHk3WEu3m3A%2Fg2puAod98SdfmcMxOVQhb%2BzYScGa%2BrO%2FeHW7tA9Pv6Oq5nPK4Uy34QB4TmaVbTrlIZ8Tfz8xqhJjbLOsUYfyPuwa2vNfMvhwRKbbxvJYuomSCrFtNcAq9FKx69Co7byynLWmI2MT%2FnKmXbbGP1Wg9TaIFnWVwVsSjYUBlqnDMA5MgtEGCuJACkh%2Ba1BOq5XTs%2FPHed5VUit543%2Fy%2BqmcyIIsIyn%2F7uPwC8J%2BH%2FRkufLT2Xg%2B%2BE2Cs563yO5NwMD%2F91L2wcVe4tWce275TkFqRtvZrRiTQ%2BAPp75xBezV3xK8Bas1BpHmKlsKQrU9wkXGIXTgwdU5iidJKLH4X2n9lhPKHDlc4hTnLHxI4%2BF%2BsujlFsX0N1fhRTfwW70YaS5bd3v9e10f9sblO4K5Hu%2BSZD8Crewal%2BDRfJlIVUMepvjhvocfIq4aULsxA0ZtE4yy9YISOX08%2Bt3SggAXdlQt9NS7Qlj0WLNyiPd8Q9Z5y%2FpsxEfVj9GNXMdkjukAOGX8QmsViYUqsFNF3zZACYfxuEzzD03oLBBjqkAXVLubrHytMv7LC%2FDkkjGp36%2BhZioXGYkK3Y8aB9QvOti6OA1XVoiS0eY6k%2FEdwcXvLoHxnKtvxFfMILfyHzmEhCQAcjccjp6%2BMn10efNZOYg%2BuW2mR6fT7KsZkDGqXeFhK4M%2BfU9BY3CSi7luvu9iYELwlTb8Akqeu16OI8G%2Fw7ZydRX%2FUufGjz6kKBuEYJ6s2xcgrtaHrUNPK2%2FE9iL9%2BXeSJ3&X-Amz-Signature=2a23461134bc5fb96082e8e8c35e685e2a695c3f17b14a21930ad5914b146a4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
