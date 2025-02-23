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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656NICDH7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvHuFZms8yRIeHwXvP%2BOkXSYDc%2FfOs73pxtxVCDgyWoQIhAMdz1sRll5F5ubzyX9A1OI49ckvUf%2BeCYS665ZDfKW5BKv8DCBgQABoMNjM3NDIzMTgzODA1IgyZUExXxMgMIkzUBYoq3APsmunzviu7ncFElqejSdnQF7JdVQlP%2FPSFSC8Z4dwb%2Fra%2FwTX5n5QfzABvQjOmka8uA2ipx36lervT7ujwwAKDFQbvCZr1HlmMMAuSHoY8gErdaM0iSyG3Etryly37dZKF0BfwESxin4%2FmO05If8JiVh91dLM1kca7wdsMj2q1r89MzmauhOQ8ZTdDqL6Kl3nu6%2B5qF7trHsFTM%2BWIxLn90VTYcqXy2YSr6hRVQ%2BbKe5IDkNq631NeQioZTK%2FW4nSkMtPor%2BDfQaNiFxu4m8LsjcePAh6O7Kx5bvMY0Qx5rkcXFVVtk6ws4EuQkwlDLSE72YvxL7bDHB26FBQZB774HigZYwDvnIKWJYCNEiVBKEzYSJrZWT5%2BB133%2F8hw8MVlA1KPPyC7r1AphN6bony5ranPBia%2FRRuBk3npv0uSp8XIZlGrF%2FnQdTokq%2FHvCOKJO6b%2B4kcFtIgwtHdBHQG%2BU2z318txlrJRRfqwc2UKC3Y3nQa4KGk%2BoxRxpbrfqPmaS7wtoC5GxY0pyYgQ%2FXkeVkmhbw08xIilqvqpQmsB%2Fz9dLIwQOCY1A25Ug%2BBVy4pCd6UFC81gn8xuR3VjUp7HEopnRXAbIVA8aoHOLQn3JwnZvQaC0KpSD6q4SzCv%2Buy9BjqkAVge9XfBoD8GNQGOtvm9shB1bZ5id2SZ1cvjnl1RHOChx9QhtnK4AGxy8N9uEKXDvRhDU5hS%2BgSZr5aBc7JtWMZvdZlcA74EFICTudIYzDD%2FQ1MzWGJ1TOF7W8NI%2F6LBCWvBDqxC1Jdys%2FwnIkSPWwyzF7m%2BFwawntwT%2BC%2BXSb1MytrUIgqtk4bSeeGVoK35JdWyXsW5Dm0m0JlvhEFDfdgh%2B%2Fv%2F&X-Amz-Signature=3d0dc319282ac6f0f1833adc1d51b3ff0c16a2520ccabc99c4a04b219b56c03c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656NICDH7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvHuFZms8yRIeHwXvP%2BOkXSYDc%2FfOs73pxtxVCDgyWoQIhAMdz1sRll5F5ubzyX9A1OI49ckvUf%2BeCYS665ZDfKW5BKv8DCBgQABoMNjM3NDIzMTgzODA1IgyZUExXxMgMIkzUBYoq3APsmunzviu7ncFElqejSdnQF7JdVQlP%2FPSFSC8Z4dwb%2Fra%2FwTX5n5QfzABvQjOmka8uA2ipx36lervT7ujwwAKDFQbvCZr1HlmMMAuSHoY8gErdaM0iSyG3Etryly37dZKF0BfwESxin4%2FmO05If8JiVh91dLM1kca7wdsMj2q1r89MzmauhOQ8ZTdDqL6Kl3nu6%2B5qF7trHsFTM%2BWIxLn90VTYcqXy2YSr6hRVQ%2BbKe5IDkNq631NeQioZTK%2FW4nSkMtPor%2BDfQaNiFxu4m8LsjcePAh6O7Kx5bvMY0Qx5rkcXFVVtk6ws4EuQkwlDLSE72YvxL7bDHB26FBQZB774HigZYwDvnIKWJYCNEiVBKEzYSJrZWT5%2BB133%2F8hw8MVlA1KPPyC7r1AphN6bony5ranPBia%2FRRuBk3npv0uSp8XIZlGrF%2FnQdTokq%2FHvCOKJO6b%2B4kcFtIgwtHdBHQG%2BU2z318txlrJRRfqwc2UKC3Y3nQa4KGk%2BoxRxpbrfqPmaS7wtoC5GxY0pyYgQ%2FXkeVkmhbw08xIilqvqpQmsB%2Fz9dLIwQOCY1A25Ug%2BBVy4pCd6UFC81gn8xuR3VjUp7HEopnRXAbIVA8aoHOLQn3JwnZvQaC0KpSD6q4SzCv%2Buy9BjqkAVge9XfBoD8GNQGOtvm9shB1bZ5id2SZ1cvjnl1RHOChx9QhtnK4AGxy8N9uEKXDvRhDU5hS%2BgSZr5aBc7JtWMZvdZlcA74EFICTudIYzDD%2FQ1MzWGJ1TOF7W8NI%2F6LBCWvBDqxC1Jdys%2FwnIkSPWwyzF7m%2BFwawntwT%2BC%2BXSb1MytrUIgqtk4bSeeGVoK35JdWyXsW5Dm0m0JlvhEFDfdgh%2B%2Fv%2F&X-Amz-Signature=56a1d4652770d586f81d389f60b51aaa3345ebd0e358f92d8e9b52059f75fd71&X-Amz-SignedHeaders=host&x-id=GetObject)

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
