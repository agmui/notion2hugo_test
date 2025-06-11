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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ6HG3FZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCEhcFq%2F3QJh0ZIh9kVCD9DiDUjAnm0fFF4JCEsDdnIqQIhAPYtrhYn%2BExz9VnOIjWnzIV9%2FJCJ%2FVYF4P9Iz3h5Nx6kKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzy%2F5o2XNMp52MbEYsq3AMPHBJPlHCpffX0DKoX4MP50Lvel%2BT%2BhWsNqLpeU3cgu2DfxR9UGmq%2BV%2BdbRbAB3J3ngFtu%2F7pTx4zB2hFtMECQrXsKgSB%2BqiCV2yx%2FrJmkfztUjxS6vq6CBG7WuFr9ywlrmVwTj6dkDCz3kr4tmmZ%2BizFJSlbk6R0P3Oy2nPkpoYJmyr3HbjUN%2FOY4Un%2BjMiDPhjH7R9Rfi8zKF2LH5bDrGioHMZ%2BLeLBnaj7gc5loyyclp9h4Wv3BbOrbUhShfFhXVM1y75zxcsct67bAlDkEk6Cf2GF2Ck76vKT65Jdvt8y1uhfmRMr2cm%2B7pYwZHk7s56C%2FaFyKt93HUdsurIqUgXDvau56U2KbSkKZT3iwkrOneN5l9CCGu0a2%2FqgI2qYeIwPDquZE%2BiY2GpzMM2BhGelcq6aD73JlYpCXH%2FIIeLiaXODQXS8g4Ov22PYAN1ylfI8bZPYUd6YlcUg%2Bo8xsMwci5xEoptLQP%2BtH2bBK%2BCkHhAatAF09nPQQ6Sz66%2BmRhvC4b2MYlJPxTvHGxDSgOFXZrC2Q0UCNKrOr7sxFs1cR9DoprNjA4inwdzb0nOvSp7l8LCmgQDR58ODIhcEadGOwzEzaBIbKgTEL2O%2BYDQjJpNrtxKw4kEVI7TCXyafCBjqkAS4SwDI9KofvFbtmhyP6iN8aoD2pkC5CFIo959KVz6iz%2B11azm57nIETfaThq9pI%2BUqiZ46OnX17TXxDkqUqITUXDucMEYDVufffwEBqvByB6WACOTy9FGj22pwlT1L2hXyOu0JXIW3Elsx8e%2FSa1CrlYaIGJxa13gN0RmDN4SoOf0YXB71GakXz5MPAV5m%2F8gpNBkjBOplBeHancOvhxEuJg7J3&X-Amz-Signature=df5e200e6db414c2a4bf67f7bceaa39389cf8205d12394f7aecff72189cf0767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ6HG3FZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCEhcFq%2F3QJh0ZIh9kVCD9DiDUjAnm0fFF4JCEsDdnIqQIhAPYtrhYn%2BExz9VnOIjWnzIV9%2FJCJ%2FVYF4P9Iz3h5Nx6kKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzy%2F5o2XNMp52MbEYsq3AMPHBJPlHCpffX0DKoX4MP50Lvel%2BT%2BhWsNqLpeU3cgu2DfxR9UGmq%2BV%2BdbRbAB3J3ngFtu%2F7pTx4zB2hFtMECQrXsKgSB%2BqiCV2yx%2FrJmkfztUjxS6vq6CBG7WuFr9ywlrmVwTj6dkDCz3kr4tmmZ%2BizFJSlbk6R0P3Oy2nPkpoYJmyr3HbjUN%2FOY4Un%2BjMiDPhjH7R9Rfi8zKF2LH5bDrGioHMZ%2BLeLBnaj7gc5loyyclp9h4Wv3BbOrbUhShfFhXVM1y75zxcsct67bAlDkEk6Cf2GF2Ck76vKT65Jdvt8y1uhfmRMr2cm%2B7pYwZHk7s56C%2FaFyKt93HUdsurIqUgXDvau56U2KbSkKZT3iwkrOneN5l9CCGu0a2%2FqgI2qYeIwPDquZE%2BiY2GpzMM2BhGelcq6aD73JlYpCXH%2FIIeLiaXODQXS8g4Ov22PYAN1ylfI8bZPYUd6YlcUg%2Bo8xsMwci5xEoptLQP%2BtH2bBK%2BCkHhAatAF09nPQQ6Sz66%2BmRhvC4b2MYlJPxTvHGxDSgOFXZrC2Q0UCNKrOr7sxFs1cR9DoprNjA4inwdzb0nOvSp7l8LCmgQDR58ODIhcEadGOwzEzaBIbKgTEL2O%2BYDQjJpNrtxKw4kEVI7TCXyafCBjqkAS4SwDI9KofvFbtmhyP6iN8aoD2pkC5CFIo959KVz6iz%2B11azm57nIETfaThq9pI%2BUqiZ46OnX17TXxDkqUqITUXDucMEYDVufffwEBqvByB6WACOTy9FGj22pwlT1L2hXyOu0JXIW3Elsx8e%2FSa1CrlYaIGJxa13gN0RmDN4SoOf0YXB71GakXz5MPAV5m%2F8gpNBkjBOplBeHancOvhxEuJg7J3&X-Amz-Signature=7fe17b9371bb2d3b05dec0d99d938d2465918074a9162e5c3954e2918ea76cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
