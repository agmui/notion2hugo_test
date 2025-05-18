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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGP2JMCX%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUHaILBtvjzNHrFw0xhi5hZJlmmt1fiQrdLSia%2BBtvhgIgZkTvhB0lyymnEpJaraL18AGdLq8cy8XiqrJgmXo5kigq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBZbMjmrfoHPd2O1CSrcA5lkb7j7B2hBO7i6d1T2Xkue4c9uyHcY49PWT0X%2FXbEMaGwnQ8kwuS0gP%2Fy%2FXHsYv816pkB0bJmDSmjcnX0tC41A8ltbfMFwSfF0EUoyT%2BHzTEt%2BanAocqtScSx%2BHyhtbFdTxEwr1jUFcJ9pqm4BdmBnY%2FsNFklg8OXTpywnd5ajO2TwSNG4YZ%2FAhx9qeEE3gXJ9ids%2Fiu16m5pR5PZ%2Fv45z9rVN5foQmmJGsKrAOJyXZ0p01wGL7R2bKhErG%2FJQIeSupCWvIClhRaBbBa1VApxfDlxRgeLC43phGge8KBN4Hk9Q%2Bf8FwWvD4nyL1Tux%2B8nNR4jVqEZJzK0qOJTS%2FMzcgf%2Fs2pJcK47JtHmlC11Y2f4z8mf0j3FsBZcOClNa%2BdtxRCsj3LAtY8o1Uwmsm8fvMHn9ohUBSNmM4ehLkOiCkupAjpLFzFLm2GNJbqcHcSm%2F0HouoHjYER2gyCHUaJaNejIrLRNEVD7GM7izedBfTIMdOoGY5Wmy%2BuOgR0Fmn6C0EReZ702hFTnv%2Fj3tVEqunItjjfMzoAE%2BOd6NTEwSXUwvymQ0wFh%2BIQGe5ewSU3D2P543IMMJ%2FGSL%2BxgdwnuWHgWDh10Rs4TsvO08zwQagcocNoNhtaDULYtNMMT9pcEGOqUBXqv6lcAMVJ0IJ2uE1MNLfH0AlLi%2BR0u0D1xprEMcUvplLwDql6uXOeXELPy5t8yTdV0WsLApSzFm%2Bf5hRw092DZz4XMZDj9N6x32ELF%2FChJ87u73KaBtHHEoqCBObv9uvKXdptVEAqV%2FiYQaHOczWVII3JMh7I9FdwJLHZ8s7E5LJdJQyANl7cgZfOKPhq3hJi%2BFVrZf%2FQ9%2FYgTBaLDOSGqaS2H%2B&X-Amz-Signature=7b611c5e2aacae94f45bd351bac992d9e2439de4378a563370570e6894d43c3f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGP2JMCX%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUHaILBtvjzNHrFw0xhi5hZJlmmt1fiQrdLSia%2BBtvhgIgZkTvhB0lyymnEpJaraL18AGdLq8cy8XiqrJgmXo5kigq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBZbMjmrfoHPd2O1CSrcA5lkb7j7B2hBO7i6d1T2Xkue4c9uyHcY49PWT0X%2FXbEMaGwnQ8kwuS0gP%2Fy%2FXHsYv816pkB0bJmDSmjcnX0tC41A8ltbfMFwSfF0EUoyT%2BHzTEt%2BanAocqtScSx%2BHyhtbFdTxEwr1jUFcJ9pqm4BdmBnY%2FsNFklg8OXTpywnd5ajO2TwSNG4YZ%2FAhx9qeEE3gXJ9ids%2Fiu16m5pR5PZ%2Fv45z9rVN5foQmmJGsKrAOJyXZ0p01wGL7R2bKhErG%2FJQIeSupCWvIClhRaBbBa1VApxfDlxRgeLC43phGge8KBN4Hk9Q%2Bf8FwWvD4nyL1Tux%2B8nNR4jVqEZJzK0qOJTS%2FMzcgf%2Fs2pJcK47JtHmlC11Y2f4z8mf0j3FsBZcOClNa%2BdtxRCsj3LAtY8o1Uwmsm8fvMHn9ohUBSNmM4ehLkOiCkupAjpLFzFLm2GNJbqcHcSm%2F0HouoHjYER2gyCHUaJaNejIrLRNEVD7GM7izedBfTIMdOoGY5Wmy%2BuOgR0Fmn6C0EReZ702hFTnv%2Fj3tVEqunItjjfMzoAE%2BOd6NTEwSXUwvymQ0wFh%2BIQGe5ewSU3D2P543IMMJ%2FGSL%2BxgdwnuWHgWDh10Rs4TsvO08zwQagcocNoNhtaDULYtNMMT9pcEGOqUBXqv6lcAMVJ0IJ2uE1MNLfH0AlLi%2BR0u0D1xprEMcUvplLwDql6uXOeXELPy5t8yTdV0WsLApSzFm%2Bf5hRw092DZz4XMZDj9N6x32ELF%2FChJ87u73KaBtHHEoqCBObv9uvKXdptVEAqV%2FiYQaHOczWVII3JMh7I9FdwJLHZ8s7E5LJdJQyANl7cgZfOKPhq3hJi%2BFVrZf%2FQ9%2FYgTBaLDOSGqaS2H%2B&X-Amz-Signature=9241cb3633fa478ff19ed4934081363cf32b946683945ec03786602ff7cc06de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
