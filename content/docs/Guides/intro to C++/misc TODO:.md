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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMML7YL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCKuNv%2BZIyGfArgvZyA3fn2yKcIi4InwrxYU%2FE1Jgrk7QIgfeXVOi7Jc9panf7RPVN85rJ1O39bEKxRg2uRrd6G0iUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzW3krIeoowxNmCjircA807JZZUfz3V007kcs1HFHZ%2F1YAPWYR2wNsWYS9wvgBFN8aIyESmatHdLJDL7qRGB8PAgekO3DIVqmDc9pXXQgtrtMGMbMNEFuoMCpOwLph0pZZTp4jQdBmhq%2B9Z8TNZuww3Cwvgoip32xcFMatdQ8r21WgKjXBY%2FqpDd%2FSY3HZ%2FiY8f6Ki2k8lZAwEjyUgLZvgTOnfkjfrWmHu5VHIsyCV8pgEdeLGDzSQhhuUtEpC8tZrP7kDwMbEELc5r%2FvhCRNBHed%2FZpgvc5pHTWelFj1Dy35cVrBwYFgav0VjrLcAuoN5efIi%2FkwOMDjHK3IKCRcYCIeSOJQiVd4DE4G4dSjQSKY1KIhGSbZCRHxAMNONpJgsoCJmI%2FyC9w0zV3vs5epCe6f0pmv%2BTk%2F3%2FFrptslcOIC3DghoD3VXQ86JDwoWeDbuqFgPh32YHBZ%2BXtEV7jrKkLFuOCvhiotKCkQHtouBLrPHjpKsrrQrepR2WUQqPendUzpCwqX5i0Zn86eVjmRrzqWYDWE%2Bub2tYd21XOoTcRXmxSRCL2ULOHyhSIP2RePVbgreeprDl26fxekCn7UCzaor4Lk7rl1NX8WSB%2BkOVme589Cd99RGgzYQoXCFAvOjTeAmXQozWaauEMN%2By2b8GOqUBPqrU906D3G%2B8V2toSKbL08HjidBYECd9wKQj7lJmEIzgjdMrdc%2BFAEK0lfhG04Ld8L5FnXxP7F63NYOFt1uRkmTnQ0pFgI2oXmAk8h9AFGr1Mjgsev1%2BkTvyVBS3mle%2FP0kFukxHZ4IwVlwOlbJBRNxlMUxctinAmLZd1ux8PM%2BR8GxkZoPXRSOtGoEwOL%2BhoQ2V53qydZ7XnMTK1z57DFEwQ5DF&X-Amz-Signature=38bacb8fed6f921a20d4cd4d98396746665df63002ac6bad01f95df6aace8e9e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMML7YL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCKuNv%2BZIyGfArgvZyA3fn2yKcIi4InwrxYU%2FE1Jgrk7QIgfeXVOi7Jc9panf7RPVN85rJ1O39bEKxRg2uRrd6G0iUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzW3krIeoowxNmCjircA807JZZUfz3V007kcs1HFHZ%2F1YAPWYR2wNsWYS9wvgBFN8aIyESmatHdLJDL7qRGB8PAgekO3DIVqmDc9pXXQgtrtMGMbMNEFuoMCpOwLph0pZZTp4jQdBmhq%2B9Z8TNZuww3Cwvgoip32xcFMatdQ8r21WgKjXBY%2FqpDd%2FSY3HZ%2FiY8f6Ki2k8lZAwEjyUgLZvgTOnfkjfrWmHu5VHIsyCV8pgEdeLGDzSQhhuUtEpC8tZrP7kDwMbEELc5r%2FvhCRNBHed%2FZpgvc5pHTWelFj1Dy35cVrBwYFgav0VjrLcAuoN5efIi%2FkwOMDjHK3IKCRcYCIeSOJQiVd4DE4G4dSjQSKY1KIhGSbZCRHxAMNONpJgsoCJmI%2FyC9w0zV3vs5epCe6f0pmv%2BTk%2F3%2FFrptslcOIC3DghoD3VXQ86JDwoWeDbuqFgPh32YHBZ%2BXtEV7jrKkLFuOCvhiotKCkQHtouBLrPHjpKsrrQrepR2WUQqPendUzpCwqX5i0Zn86eVjmRrzqWYDWE%2Bub2tYd21XOoTcRXmxSRCL2ULOHyhSIP2RePVbgreeprDl26fxekCn7UCzaor4Lk7rl1NX8WSB%2BkOVme589Cd99RGgzYQoXCFAvOjTeAmXQozWaauEMN%2By2b8GOqUBPqrU906D3G%2B8V2toSKbL08HjidBYECd9wKQj7lJmEIzgjdMrdc%2BFAEK0lfhG04Ld8L5FnXxP7F63NYOFt1uRkmTnQ0pFgI2oXmAk8h9AFGr1Mjgsev1%2BkTvyVBS3mle%2FP0kFukxHZ4IwVlwOlbJBRNxlMUxctinAmLZd1ux8PM%2BR8GxkZoPXRSOtGoEwOL%2BhoQ2V53qydZ7XnMTK1z57DFEwQ5DF&X-Amz-Signature=7c62cd838194a27875fcdbba91541e26c836bf1d42e6c4244f877be05da1b6ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
