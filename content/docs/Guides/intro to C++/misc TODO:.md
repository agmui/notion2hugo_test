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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4KUICWX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJvmtmn0e4ErBD5gsFYrxBXADikpTo7ay%2FAuF9OkkyYAIgDIxR9Ud2xoP3QiQ%2FsiPGhaF13KSenEtOUqJwSkIe8iAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDFm1lfPvF4k1CkgsmircA7J2OU0tqCUcS4VG2UwSr5FBTKexRJSJivq%2Fy6Mo4X3PkH4tAKRe7lyWtWcZTvlwfdlvqwYuOYnGDBuP1JcsNjUW5XQCtLbdB5OQWs1MWBqvzqUkODXjEPXsGeIvAF2C9sZNMP2YbCiPCtflZ0dUx7ZHpHX4NS7q41MZk1ghksGj2FK0ucFsaxdK1PKuuA7s%2F2mFR%2BcPoaiPID94qqNYXq8USpw2%2FNzkl3%2FCwTvpDiULQzLSJfDDO%2BMhbPJ4oNwagSNyTKrcxLgQAS099g7tyfhD39K%2BVpytrh9MORkM%2F0ML7%2BxXkJXkqUoYPBghJBAA8%2FONSPJHwHdE574WyVgjRSRtx9PzLFiy%2Fo2KIwqQCZ0be64n6IamVOmJ7wF2%2ByrrFMH4Nnj34%2BUaGZp%2FbGfaFSs4ogsQPTxPPALkIpZhjQ6Z9vz%2ByxcJHolLfLr8xq5y178yzZGMvV2ysFZW5hq4Cd8D7%2BxThqK%2FOgzjVkNYseSIV9w2R7nl3ORuJpRRCoIAxectT6zcYEo5Ms3gDw0Qi0T6shSSw4IGV6NTH%2B%2B7PUmfnYI3ZvX%2Bw5CzanEufkh2%2BoHZpDLAjfI5hZ9oA1tq0ssoC%2Fm2v5JoV6kLgIiiXy1KYgsJr%2B2n66N64yRZMOvRz78GOqUBFv6e05dDA20iE2VT9lOohrL6FfN1CzOBr1tCw0%2FJJS%2Birl%2BdhOlAeKi3oeYElsSlWLYEpMDJU4cM49fGj1ISMJv3y2rHNIx2SbUtCmarZJXsBL%2FqbjI08%2B0Cc1nWg4JkJj2OziJDAopEYNF6fl6IrPcPDNsr2AKt2%2FcYjG4G6mKSD1kiUDzwy4QGcUlexN0q47QOC4AteNUgmDwFcbAUU%2B73XsVK&X-Amz-Signature=114dd144f67b5442dcd1125c18836529c46ed332fb230aaaa75dcd39b0110bfe&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4KUICWX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJvmtmn0e4ErBD5gsFYrxBXADikpTo7ay%2FAuF9OkkyYAIgDIxR9Ud2xoP3QiQ%2FsiPGhaF13KSenEtOUqJwSkIe8iAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDFm1lfPvF4k1CkgsmircA7J2OU0tqCUcS4VG2UwSr5FBTKexRJSJivq%2Fy6Mo4X3PkH4tAKRe7lyWtWcZTvlwfdlvqwYuOYnGDBuP1JcsNjUW5XQCtLbdB5OQWs1MWBqvzqUkODXjEPXsGeIvAF2C9sZNMP2YbCiPCtflZ0dUx7ZHpHX4NS7q41MZk1ghksGj2FK0ucFsaxdK1PKuuA7s%2F2mFR%2BcPoaiPID94qqNYXq8USpw2%2FNzkl3%2FCwTvpDiULQzLSJfDDO%2BMhbPJ4oNwagSNyTKrcxLgQAS099g7tyfhD39K%2BVpytrh9MORkM%2F0ML7%2BxXkJXkqUoYPBghJBAA8%2FONSPJHwHdE574WyVgjRSRtx9PzLFiy%2Fo2KIwqQCZ0be64n6IamVOmJ7wF2%2ByrrFMH4Nnj34%2BUaGZp%2FbGfaFSs4ogsQPTxPPALkIpZhjQ6Z9vz%2ByxcJHolLfLr8xq5y178yzZGMvV2ysFZW5hq4Cd8D7%2BxThqK%2FOgzjVkNYseSIV9w2R7nl3ORuJpRRCoIAxectT6zcYEo5Ms3gDw0Qi0T6shSSw4IGV6NTH%2B%2B7PUmfnYI3ZvX%2Bw5CzanEufkh2%2BoHZpDLAjfI5hZ9oA1tq0ssoC%2Fm2v5JoV6kLgIiiXy1KYgsJr%2B2n66N64yRZMOvRz78GOqUBFv6e05dDA20iE2VT9lOohrL6FfN1CzOBr1tCw0%2FJJS%2Birl%2BdhOlAeKi3oeYElsSlWLYEpMDJU4cM49fGj1ISMJv3y2rHNIx2SbUtCmarZJXsBL%2FqbjI08%2B0Cc1nWg4JkJj2OziJDAopEYNF6fl6IrPcPDNsr2AKt2%2FcYjG4G6mKSD1kiUDzwy4QGcUlexN0q47QOC4AteNUgmDwFcbAUU%2B73XsVK&X-Amz-Signature=ab92d04d5399a7b84962638b14c929984c4e4c8b87c15830b5f9f87814838426&X-Amz-SignedHeaders=host&x-id=GetObject)

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
