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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVY2BSUN%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFeTy4cgT6P%2Fs2%2B8W9ozkilWJ%2Fw44DCLvh7vD3COiq38AiBuljD82lUBrPx5fNtfU3tKSJ91dpS9NozS3IcNW0oXpiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMslCzplnqLia7kFfnKtwD8a8uJYGlMy2w8ccwKjHkdvwoaxhp5mw19Us2mHqS%2BLLZ6juPAr4CuDqGFpMR7XzBiUwaIwDa4SsEHbQK3pUJaJM9PMZ1KNH7QpLkOyTeKTEWKJ78fPrYZDBM1zEmt06SeEYpjay1B9PXXPhz6DZCU94THo%2B46%2F8ue%2BqvYZhzgSMms39bfSeKzJzfkmxcGsOTP%2FUKdLVnrCEbee6Mv7MZEUEytdw3WQh1QEbs43K%2F78vMaail7uw5wSXDFqDTNges4lDDaMZUxZBy0PHcfhhb4DLeNZV%2BV4P%2F3fX5uVDC4nymEIS2eHhMqacy5bSRO1Jmf5S%2F6o4uSrSir2JpEb4%2Br205SBOPd%2BVfQgSDpxmmns5CiYX1BMFPBvhohnIrKQPqM5g%2Fvr7Spw7CLh1erlLEil6h%2FohWwTR2SuwAwwGIC0jrVnr9jlvU4HTfWtGwjzhHoyLumpxnoDIOZa8qxpSBJSenoG2wQ%2BI2CRLNuT9ivOVJ%2Bz4SLEjVvx1%2BFARx4g6NQ5TnM9zwfAZEYGrF2FQLkwdcpw%2FiKO3ea15GlTjOkEStpAvkG1vw475OwgE39Vh2PSLZvzNXQGkuHZUS1wQyFc6bhTV0tynf3k8UfnpTv8R2mgVSmruARzYGhyAwsOi6vgY6pgGFpCVRFYdadr1KHARSt8FStVqnGaVpzcFllURNW8WVpj6A%2BYChlcmeImHgEDMDGnFTGIUDQr%2F51ChZhvcnOBbSavJ%2FHeyic9FH8XSe1xJA%2FhmC3W54%2B7L4hD4UoyvBoD2UZFjYC9vkGZmr17pl77r98%2FdH00B4JRgGdTIGNh1%2BguH%2BNSRqBk6BOr9I%2BnpdvH4cTr3dTDoif63PbWl5PbBSTsg1XB65&X-Amz-Signature=d02561aed37707681f17aefdf23d2b7fae92bba6a5749df36246f84e9fcaeb85&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVY2BSUN%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFeTy4cgT6P%2Fs2%2B8W9ozkilWJ%2Fw44DCLvh7vD3COiq38AiBuljD82lUBrPx5fNtfU3tKSJ91dpS9NozS3IcNW0oXpiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMslCzplnqLia7kFfnKtwD8a8uJYGlMy2w8ccwKjHkdvwoaxhp5mw19Us2mHqS%2BLLZ6juPAr4CuDqGFpMR7XzBiUwaIwDa4SsEHbQK3pUJaJM9PMZ1KNH7QpLkOyTeKTEWKJ78fPrYZDBM1zEmt06SeEYpjay1B9PXXPhz6DZCU94THo%2B46%2F8ue%2BqvYZhzgSMms39bfSeKzJzfkmxcGsOTP%2FUKdLVnrCEbee6Mv7MZEUEytdw3WQh1QEbs43K%2F78vMaail7uw5wSXDFqDTNges4lDDaMZUxZBy0PHcfhhb4DLeNZV%2BV4P%2F3fX5uVDC4nymEIS2eHhMqacy5bSRO1Jmf5S%2F6o4uSrSir2JpEb4%2Br205SBOPd%2BVfQgSDpxmmns5CiYX1BMFPBvhohnIrKQPqM5g%2Fvr7Spw7CLh1erlLEil6h%2FohWwTR2SuwAwwGIC0jrVnr9jlvU4HTfWtGwjzhHoyLumpxnoDIOZa8qxpSBJSenoG2wQ%2BI2CRLNuT9ivOVJ%2Bz4SLEjVvx1%2BFARx4g6NQ5TnM9zwfAZEYGrF2FQLkwdcpw%2FiKO3ea15GlTjOkEStpAvkG1vw475OwgE39Vh2PSLZvzNXQGkuHZUS1wQyFc6bhTV0tynf3k8UfnpTv8R2mgVSmruARzYGhyAwsOi6vgY6pgGFpCVRFYdadr1KHARSt8FStVqnGaVpzcFllURNW8WVpj6A%2BYChlcmeImHgEDMDGnFTGIUDQr%2F51ChZhvcnOBbSavJ%2FHeyic9FH8XSe1xJA%2FhmC3W54%2B7L4hD4UoyvBoD2UZFjYC9vkGZmr17pl77r98%2FdH00B4JRgGdTIGNh1%2BguH%2BNSRqBk6BOr9I%2BnpdvH4cTr3dTDoif63PbWl5PbBSTsg1XB65&X-Amz-Signature=5661a9c1ec70cc3740f652771e519cf7feaaf28f1e73f323e74cfb2587273bc6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
