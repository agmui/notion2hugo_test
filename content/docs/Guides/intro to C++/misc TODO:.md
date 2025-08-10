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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHTQRVF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSTmZsCx%2BUgYqg4UMy8Oo3XwVx3ns49hFAFi%2FMUhUQkAIgdQw1bskcFtKhELvLSFcTpuIiLydovB%2BrYP154Lt554AqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArTUh%2BjG%2Bkgrao%2FNSrcA6xI82tmHz0yJ8yr9taB9pyZ3qU63brK5WijzQPOthLDeKCdLTAfTFdMfnYJx9bEOg1Ds5XYeq5jTlN3jJL2PdBVEDmHy8W7K9y8iNbwSr89x0NPE8ZB1%2FQZduhOtPwMvPUbNaOfjh1zBoDQ3aV%2FBauPPu7rpjHNfuaK6yvOZmJv5E4AjA1dcoKiqKIR7m0dRp6oCtcVuIqe3mAfVDiRvN3u19jLh0YS4UzqNIQjMDEtIR8RZc0QBMHzYp3u%2BYC5%2BcAuceXoVMuHq6EBlCTOAfeuvz2QvbZHebObHszTCeI7ASPlqdeW69zIN5JjQwYRo0bNR1s2IWfH4IJSEVkYO0BrClmkn41%2FVdHth7%2BkCMua62bIxD0UDpyPIYjlhd4Zow%2BQT67mzZ%2B%2Bv8inu%2Fg7x7tsIN%2FV%2FlJDxqZqdxfmdK4PVUKMj3Pc2KtEnkA9%2BhgR5uBqlKDUT1OYnSAvvUhOZndAKy25u8wHFbWBxLbzg%2BfcLAFaSCWjU2ZHaL3diqSRz1y8my2gnCw6JDEub9KimhJHslXcjeK8wqQo5wdWa%2FHXY%2B9ZXWECTr8uvQzuDsXLbidoyNPxeq116G3%2FnSI5Zdih4aDWUM7Fg9PKd2YWmYJKUaLNAnpcK2viNMZmMJj14MQGOqUBUUwPMPqyaLMzsKDrBqmtlWM29JtCl15oJkPQM0dSoziDpLaUQsi9vrRDSj8FFAzPzn9mLN5%2BfPriiguRgbFbWd7k%2F1qOTYseAJI2HJr%2FY0SRPyeWdaFzp8Aw2cm2tCnyIdxO3QHLh%2B5UiW7MUthVo3vliU5BOcc11MTGRJ%2FC72RvvpR2JBJ8oOBta3BfNP0Z157i9ohqHO0Xl7rzg3iBARHs0v%2Fq&X-Amz-Signature=b29c57d3a1407af7009c7ab32a816913e9f803f9d3f767fce9ba87bca2da602b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHTQRVF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSTmZsCx%2BUgYqg4UMy8Oo3XwVx3ns49hFAFi%2FMUhUQkAIgdQw1bskcFtKhELvLSFcTpuIiLydovB%2BrYP154Lt554AqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArTUh%2BjG%2Bkgrao%2FNSrcA6xI82tmHz0yJ8yr9taB9pyZ3qU63brK5WijzQPOthLDeKCdLTAfTFdMfnYJx9bEOg1Ds5XYeq5jTlN3jJL2PdBVEDmHy8W7K9y8iNbwSr89x0NPE8ZB1%2FQZduhOtPwMvPUbNaOfjh1zBoDQ3aV%2FBauPPu7rpjHNfuaK6yvOZmJv5E4AjA1dcoKiqKIR7m0dRp6oCtcVuIqe3mAfVDiRvN3u19jLh0YS4UzqNIQjMDEtIR8RZc0QBMHzYp3u%2BYC5%2BcAuceXoVMuHq6EBlCTOAfeuvz2QvbZHebObHszTCeI7ASPlqdeW69zIN5JjQwYRo0bNR1s2IWfH4IJSEVkYO0BrClmkn41%2FVdHth7%2BkCMua62bIxD0UDpyPIYjlhd4Zow%2BQT67mzZ%2B%2Bv8inu%2Fg7x7tsIN%2FV%2FlJDxqZqdxfmdK4PVUKMj3Pc2KtEnkA9%2BhgR5uBqlKDUT1OYnSAvvUhOZndAKy25u8wHFbWBxLbzg%2BfcLAFaSCWjU2ZHaL3diqSRz1y8my2gnCw6JDEub9KimhJHslXcjeK8wqQo5wdWa%2FHXY%2B9ZXWECTr8uvQzuDsXLbidoyNPxeq116G3%2FnSI5Zdih4aDWUM7Fg9PKd2YWmYJKUaLNAnpcK2viNMZmMJj14MQGOqUBUUwPMPqyaLMzsKDrBqmtlWM29JtCl15oJkPQM0dSoziDpLaUQsi9vrRDSj8FFAzPzn9mLN5%2BfPriiguRgbFbWd7k%2F1qOTYseAJI2HJr%2FY0SRPyeWdaFzp8Aw2cm2tCnyIdxO3QHLh%2B5UiW7MUthVo3vliU5BOcc11MTGRJ%2FC72RvvpR2JBJ8oOBta3BfNP0Z157i9ohqHO0Xl7rzg3iBARHs0v%2Fq&X-Amz-Signature=c9a47f40268e3c3d04274aa4cd3c174a56a41be23ee49733b8ead885fd5254bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
