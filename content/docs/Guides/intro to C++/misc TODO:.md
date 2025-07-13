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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CSC6JSD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtUoLiw8WsgZoVatLuSawOpu3haK%2FixVdzTmB2HO9s%2FgIgGVDbrpT1flZ5Fn4egTAtnVlwCpqCio%2FvejX2BxiP1hgqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4w4u8jITe379iHeircAzaKOdYw0ayMfEX4%2FUbeJnPtAYtL2zFqSXXGSsjT5dgJpoMEeMIqf1tjBv9rq8m2f6g6z3Na0Nr2YvpqZ%2FTA7MsDYE7WORjtiE2NOW0jlCJwwUwkSpyx3nC6l8KcvYGkXZX970ET0Ny4jwMSsrhWbo9S9ClCwG6nRDs2oowDHw1HbYB%2Bjx%2FfIUR5xNF4TvQssRiE2ngUmIJjIPUTk8A6c7%2Bp1VJNoCjNzPrPDXb5VefJYlf6ewWfaBSBiziu9XXDOX7LCYfwu9Ir640KKDck401jPi8yZAHE2bay2HBq2MdRXslhWl6tcQ0Q9tHTnkgJ%2BMsGhoRMNGK%2BMV2o%2FlvaoWZmAlW0zUrRCIe2zP%2Fi1obcJAOV8I6220O%2FZ%2BY2hgyEY9JFwVbyQ3StZW%2B%2BFLqj8btyE9ZFnHrRuwJj6BMFOQ3iD%2FFvRVc6uBNzEjhupBpOLaiNmOXBovvwHErlWqcRlruMwxRJH0V0XEQoEakv9usRZcn4m1YInJB3z7l%2BtyitqsKfWAcOLFTV0UvbNxaHYZfE%2FjrELK4p7%2FBlOJsJ7332N3CwPiLkkCRL6%2FM7HgIgqEpIozf2pIhngrMsy%2FCbfvF9XgIE0shupEqoXlb9Ebj20sv3lNMyqvr1jtDkML%2FYzMMGOqUBkON%2BNtXJTCMTY0Hr8d7snk1PmPjw80sPTVmyCn2B81VaWkhjrVVALQRsnanHfs4BMiNfxBWmgvySpG8UJ2FODIWylLtBz8Fre2BrOgipNIPKnGZvL2BX7Jfjcz1S7U91BxnIuD8jBgZXqBHM5rvXuplriF3nvYFXWzpoZTQzpY94Gonnu0NI%2FQAHbejQ7USBJwVFh9I0sG8x6CRSGmnPX8gKjaeK&X-Amz-Signature=c8a8d4fba591b29be12c8740817eb2bffc54c4ea2ea9b7ebc17942c271055794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CSC6JSD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtUoLiw8WsgZoVatLuSawOpu3haK%2FixVdzTmB2HO9s%2FgIgGVDbrpT1flZ5Fn4egTAtnVlwCpqCio%2FvejX2BxiP1hgqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4w4u8jITe379iHeircAzaKOdYw0ayMfEX4%2FUbeJnPtAYtL2zFqSXXGSsjT5dgJpoMEeMIqf1tjBv9rq8m2f6g6z3Na0Nr2YvpqZ%2FTA7MsDYE7WORjtiE2NOW0jlCJwwUwkSpyx3nC6l8KcvYGkXZX970ET0Ny4jwMSsrhWbo9S9ClCwG6nRDs2oowDHw1HbYB%2Bjx%2FfIUR5xNF4TvQssRiE2ngUmIJjIPUTk8A6c7%2Bp1VJNoCjNzPrPDXb5VefJYlf6ewWfaBSBiziu9XXDOX7LCYfwu9Ir640KKDck401jPi8yZAHE2bay2HBq2MdRXslhWl6tcQ0Q9tHTnkgJ%2BMsGhoRMNGK%2BMV2o%2FlvaoWZmAlW0zUrRCIe2zP%2Fi1obcJAOV8I6220O%2FZ%2BY2hgyEY9JFwVbyQ3StZW%2B%2BFLqj8btyE9ZFnHrRuwJj6BMFOQ3iD%2FFvRVc6uBNzEjhupBpOLaiNmOXBovvwHErlWqcRlruMwxRJH0V0XEQoEakv9usRZcn4m1YInJB3z7l%2BtyitqsKfWAcOLFTV0UvbNxaHYZfE%2FjrELK4p7%2FBlOJsJ7332N3CwPiLkkCRL6%2FM7HgIgqEpIozf2pIhngrMsy%2FCbfvF9XgIE0shupEqoXlb9Ebj20sv3lNMyqvr1jtDkML%2FYzMMGOqUBkON%2BNtXJTCMTY0Hr8d7snk1PmPjw80sPTVmyCn2B81VaWkhjrVVALQRsnanHfs4BMiNfxBWmgvySpG8UJ2FODIWylLtBz8Fre2BrOgipNIPKnGZvL2BX7Jfjcz1S7U91BxnIuD8jBgZXqBHM5rvXuplriF3nvYFXWzpoZTQzpY94Gonnu0NI%2FQAHbejQ7USBJwVFh9I0sG8x6CRSGmnPX8gKjaeK&X-Amz-Signature=b37a5ba7b5b4575de9d6fc3b2ab66c3bcaee021a1d5503ca86125dd84278d125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
