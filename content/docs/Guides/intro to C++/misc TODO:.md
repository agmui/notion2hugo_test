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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAMLRGTE%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F8qzXJlCAIfmwlkt%2BnPF62IytYjZEbTt4CeT%2FpL3m0AiEA8B7MI05eN0dK3x5zop1g4jWjnaWK8t%2BFxB%2Bg6GHj8CEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBbJQ6sb3h%2FlUAN%2FYCrcAxcpR6ka8%2FNSEK4HLXxvarFWr6rvRAPpxTP35hEaMulVPU2FzZkR3hXL55LHG7UHW6xbcyb4aRHOIfRTLnSP%2BJPXbaCx3%2BUCH89P8ZAT3B2Xgz7rvf%2FyilyqVyycg9LF2VKpSPhn6E9JxSWRx50OI4gJ6VKB37SsDCub%2B3%2BFD8%2BBm1LZcgyF4GPkytl8bO6hmc8ZLaQzbugZHUNc11fXA3XnJ3R3dENVb6glZA44XwqlOy86qAYjRjkgxK%2FBdCrWdmhWL16Dx5M3Bwf%2Bs%2FZ8hO0Y1TTXefrq9X9VDmcMYo7QL2cZledjPnO2wCf5CkySuzl8IP%2FbzsbVcRJg56LP0p19AMzNKEr2yF2eGQlp9k8%2F2%2F%2FTlX%2F7ztbf%2F4uc1YmlHuerRE8gtJZq4lECR6c7SYlZ6mf6ChvNDO5j1jJaS0JTsbfnzlhvTKcpPO7TVlMqdJ9cHpKD3gxV9AR2CbG0%2FRXYhHaMw8BelFkG68M3Wq8zy%2BQJ4AS3rhiXHoFKiax6deQ4G00zx%2BF363yCFLWyJ8HWAPCgTtiXtVzvhWk2qjGBiTduMGBCMb%2BSd8WoqH%2FtY1cYggXq5WyGbyCmy5s8pEH0V7PbSdmr%2FNt4V1VWGOpiJHeneHgMPfym4mCBMIOkxb8GOqUBm0tRFC1k3v9Jbt9CoorKn3%2FSz8%2ByQezf0EkQ%2F0XNUxRel733cr9A%2F3kIId8Anvo8z%2B7hwyb6S8aD8yn%2BGk4O8xsRWeUlTOWNyVmn%2BOLxnWMr6C4eTnnlqONYmC%2Bv2x7wNGszY%2BYsA9bJzM6hVtuCiTw72YFi%2BKsDZrSoO8wdLSQtAmSd2ZSf1LSXdTlEXAbEF904idDpLUCODnxBhli7Rcij15mz&X-Amz-Signature=7f5b3b418b264792e5433aad6c62acb899b04419823dbc9123f5175d879b9292&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAMLRGTE%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F8qzXJlCAIfmwlkt%2BnPF62IytYjZEbTt4CeT%2FpL3m0AiEA8B7MI05eN0dK3x5zop1g4jWjnaWK8t%2BFxB%2Bg6GHj8CEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBbJQ6sb3h%2FlUAN%2FYCrcAxcpR6ka8%2FNSEK4HLXxvarFWr6rvRAPpxTP35hEaMulVPU2FzZkR3hXL55LHG7UHW6xbcyb4aRHOIfRTLnSP%2BJPXbaCx3%2BUCH89P8ZAT3B2Xgz7rvf%2FyilyqVyycg9LF2VKpSPhn6E9JxSWRx50OI4gJ6VKB37SsDCub%2B3%2BFD8%2BBm1LZcgyF4GPkytl8bO6hmc8ZLaQzbugZHUNc11fXA3XnJ3R3dENVb6glZA44XwqlOy86qAYjRjkgxK%2FBdCrWdmhWL16Dx5M3Bwf%2Bs%2FZ8hO0Y1TTXefrq9X9VDmcMYo7QL2cZledjPnO2wCf5CkySuzl8IP%2FbzsbVcRJg56LP0p19AMzNKEr2yF2eGQlp9k8%2F2%2F%2FTlX%2F7ztbf%2F4uc1YmlHuerRE8gtJZq4lECR6c7SYlZ6mf6ChvNDO5j1jJaS0JTsbfnzlhvTKcpPO7TVlMqdJ9cHpKD3gxV9AR2CbG0%2FRXYhHaMw8BelFkG68M3Wq8zy%2BQJ4AS3rhiXHoFKiax6deQ4G00zx%2BF363yCFLWyJ8HWAPCgTtiXtVzvhWk2qjGBiTduMGBCMb%2BSd8WoqH%2FtY1cYggXq5WyGbyCmy5s8pEH0V7PbSdmr%2FNt4V1VWGOpiJHeneHgMPfym4mCBMIOkxb8GOqUBm0tRFC1k3v9Jbt9CoorKn3%2FSz8%2ByQezf0EkQ%2F0XNUxRel733cr9A%2F3kIId8Anvo8z%2B7hwyb6S8aD8yn%2BGk4O8xsRWeUlTOWNyVmn%2BOLxnWMr6C4eTnnlqONYmC%2Bv2x7wNGszY%2BYsA9bJzM6hVtuCiTw72YFi%2BKsDZrSoO8wdLSQtAmSd2ZSf1LSXdTlEXAbEF904idDpLUCODnxBhli7Rcij15mz&X-Amz-Signature=a8fa3f702fa139a097516400e4b524b9c08ee86f70e658f9f5c2e911e0ceb5f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
