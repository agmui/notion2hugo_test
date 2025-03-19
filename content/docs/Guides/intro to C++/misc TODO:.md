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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUOIMG6V%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDdR0inc%2BuEQ0WEgBFZzHwGKO4KPoqAi%2B%2BEZN1Ysssq5AIhAJ%2FhVImOU2AFXno%2BuNDWSUWfU6JQ204tzxiQIvDTbEGxKv8DCHQQABoMNjM3NDIzMTgzODA1IgzfYxWcfjtlCgnTXmsq3ANoFeC9WshGxESNTf%2FXd3ysvNJRUKfG6dCtpfdxc8CqV1FCm65eZfiPnpb9HXzBtmqxIv6crtSlk7Tp69jg93RZt%2FZmI2h3rVUKuDInxlJppO2mtm4gpr6%2Bq794XUIRYO9nQMxIh9iRdiqAzqXCVf2%2FsZyHJJcs%2FeNUaK9nJuet%2Bh8xpR5%2Bs1SK13sHA8lI4p%2BdrmgnDEk%2FrKjUFusOmxy1u9bNdmWUFBWYEJNZk9Ej%2B4giMoI4lMhvrZNn1locm3toAoPUT0xMa3yTTM%2Ft1%2BtAWu34RZ0RFzZGXYKF9hrsMnsPAMnt4YdhDuxrLKwmLgTLkA6ItqqwIiJpHsUg047fKdPwTAHzZoxUHgZm%2Fccs85XRCWPQDuk9YpB6w6zgpo37XZpqa2HIhOVNsvRl8C11xOp7Pj6mUo%2FPkXajR3XHzUDAHSBMUdbKZT%2BJfawEmtDtd%2BvsyEoaBZXwT379MHIu5jPzuKtBJKVCmOqO795%2Bvqzm2oiVkQS4OnJkeS2aMssflQwdr8%2FFQ5exEApmo7%2BUuhhDjhQVM%2F0bR9ZYQjbeftr3B3AYgtXac1oTcAmKC6mGVU%2FuVuMF350KGZt%2BBLQ5TDCJ8LwsIylgb91qQFX0Bely6QTYnjtS76J60DCbwOq%2BBjqkAa%2F7zL2hViCn1h0%2B6CH3iDbDWczmA6ckKfRAEvD7xSiiCKta1mnBhYsFCfIfDsGbAK1oHGekz79JODLbXBmDAuvgaP8N%2BaGegBzPuXQHyy%2BH2OBELPo8uxEyZ10ENdcySRV0mmcy%2FnTWStAl%2BJOV2cCMPKDXpAtgcWYBZ%2FagUFJL%2BBCZUgjuxNmzCUzMhJ1i1lirCFQm14XVoImC1lUnpgz4frGP&X-Amz-Signature=259277c0c40b2c88edf5642f86439bcd1b419d52cdd37f3b3ed2af073aad88d4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUOIMG6V%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDdR0inc%2BuEQ0WEgBFZzHwGKO4KPoqAi%2B%2BEZN1Ysssq5AIhAJ%2FhVImOU2AFXno%2BuNDWSUWfU6JQ204tzxiQIvDTbEGxKv8DCHQQABoMNjM3NDIzMTgzODA1IgzfYxWcfjtlCgnTXmsq3ANoFeC9WshGxESNTf%2FXd3ysvNJRUKfG6dCtpfdxc8CqV1FCm65eZfiPnpb9HXzBtmqxIv6crtSlk7Tp69jg93RZt%2FZmI2h3rVUKuDInxlJppO2mtm4gpr6%2Bq794XUIRYO9nQMxIh9iRdiqAzqXCVf2%2FsZyHJJcs%2FeNUaK9nJuet%2Bh8xpR5%2Bs1SK13sHA8lI4p%2BdrmgnDEk%2FrKjUFusOmxy1u9bNdmWUFBWYEJNZk9Ej%2B4giMoI4lMhvrZNn1locm3toAoPUT0xMa3yTTM%2Ft1%2BtAWu34RZ0RFzZGXYKF9hrsMnsPAMnt4YdhDuxrLKwmLgTLkA6ItqqwIiJpHsUg047fKdPwTAHzZoxUHgZm%2Fccs85XRCWPQDuk9YpB6w6zgpo37XZpqa2HIhOVNsvRl8C11xOp7Pj6mUo%2FPkXajR3XHzUDAHSBMUdbKZT%2BJfawEmtDtd%2BvsyEoaBZXwT379MHIu5jPzuKtBJKVCmOqO795%2Bvqzm2oiVkQS4OnJkeS2aMssflQwdr8%2FFQ5exEApmo7%2BUuhhDjhQVM%2F0bR9ZYQjbeftr3B3AYgtXac1oTcAmKC6mGVU%2FuVuMF350KGZt%2BBLQ5TDCJ8LwsIylgb91qQFX0Bely6QTYnjtS76J60DCbwOq%2BBjqkAa%2F7zL2hViCn1h0%2B6CH3iDbDWczmA6ckKfRAEvD7xSiiCKta1mnBhYsFCfIfDsGbAK1oHGekz79JODLbXBmDAuvgaP8N%2BaGegBzPuXQHyy%2BH2OBELPo8uxEyZ10ENdcySRV0mmcy%2FnTWStAl%2BJOV2cCMPKDXpAtgcWYBZ%2FagUFJL%2BBCZUgjuxNmzCUzMhJ1i1lirCFQm14XVoImC1lUnpgz4frGP&X-Amz-Signature=f2353d22c51165ebd3e39c8ba3e24df2cdd7e585f8e7c3717298c42c9c7601bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
