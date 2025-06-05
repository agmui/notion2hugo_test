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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOLRLS2D%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC45pGRHDjtSrF%2Fp0CeVBXntECo%2F9hi1%2FJ2ppQtzGVc6wIgC9CghfwshcLH46PswyWBl33mwKGmbQOmYhXIWx9g6bkq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDLvKpZgguhaEptnLICrcA39nh2WNMzBZL%2BmjMAVGnKK%2FrQ2MG3l41SLOmCZIpBTPsuDegS2Wa%2FMdolI1HMLpRROfCgV1lYx9aX1AMDWf0ylaFhL5CTCuJqXeRLo5AXOhUE4N2rrUeX6nD9bMx0V9iKutYNr95BcrT3dE3tQ%2Fx8O19oefDFbvhulmTd02zgJ6BXW2RCVD9%2FAfkfUw9Voz6D3Fu%2FRiRyp74mCXBFZeBJocXvHGeXN3t2IkzAjGS%2FWHFqXTtTh2HvpPc07i77DaEZx%2F8UKZ8b81RMdD4BbfpMf3L%2FuJzConvIBOE5Icp63WcfZUnb4raOgfDCla1PDm4MRsgrpK1wbnVgwMSOdbNrkxRgPbY31Sn1j1tK93LzLoxjet5k56wS1D2py%2F0uAr6r3A9UUHTgGoFU8hp3B0HfS1wwQvXYCODbFv2BhQLLZUGMRRXTQDCoybIvT4mqFF5%2Fv7nXnlbN7uV31Pi%2B3ZHr1S%2B437VI%2FQzoRVp7NXiFoF3ZNiFd6NdiIh2bcM5Sy3fGX2Hk7Pc9u5uG5wVYEZ9EZb0t%2BS8y6FQOXJ8fQtsCAC3HH%2FQ2Emz9D%2FgBssvkJZMfkadg3xl%2B3QWQpLLDHOoIh25Pn%2BAsfDrArQ%2FjAIR8FUMShw06n5Tx%2BepknlMO2JhMIGOqUBjTeS70U6sevAeBiSJxUgZSvatKCrrrmCcU6feE5BdUoJtwKd8JdADCaoFPXTRTeQYMz3hQ1ZNWasoRaZ4BrwlQwA8kpQ4TDo3nyITSz33UQZ%2BBdF5P710C0qrrHlAG4gkqFs2fT%2F4L8ob%2BjUcuKBBz%2Bw8xj7zJb16HqHIDavrp2%2FdoMXWBXHq3UxTdIgCWDLtmexbapmPWZ6UEt%2FUuUJVWaL2kYH&X-Amz-Signature=c312b7ccb12317f1528ce955aadd01b1f7ecdcd957d265107ab9cbdc2b3c044d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOLRLS2D%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC45pGRHDjtSrF%2Fp0CeVBXntECo%2F9hi1%2FJ2ppQtzGVc6wIgC9CghfwshcLH46PswyWBl33mwKGmbQOmYhXIWx9g6bkq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDLvKpZgguhaEptnLICrcA39nh2WNMzBZL%2BmjMAVGnKK%2FrQ2MG3l41SLOmCZIpBTPsuDegS2Wa%2FMdolI1HMLpRROfCgV1lYx9aX1AMDWf0ylaFhL5CTCuJqXeRLo5AXOhUE4N2rrUeX6nD9bMx0V9iKutYNr95BcrT3dE3tQ%2Fx8O19oefDFbvhulmTd02zgJ6BXW2RCVD9%2FAfkfUw9Voz6D3Fu%2FRiRyp74mCXBFZeBJocXvHGeXN3t2IkzAjGS%2FWHFqXTtTh2HvpPc07i77DaEZx%2F8UKZ8b81RMdD4BbfpMf3L%2FuJzConvIBOE5Icp63WcfZUnb4raOgfDCla1PDm4MRsgrpK1wbnVgwMSOdbNrkxRgPbY31Sn1j1tK93LzLoxjet5k56wS1D2py%2F0uAr6r3A9UUHTgGoFU8hp3B0HfS1wwQvXYCODbFv2BhQLLZUGMRRXTQDCoybIvT4mqFF5%2Fv7nXnlbN7uV31Pi%2B3ZHr1S%2B437VI%2FQzoRVp7NXiFoF3ZNiFd6NdiIh2bcM5Sy3fGX2Hk7Pc9u5uG5wVYEZ9EZb0t%2BS8y6FQOXJ8fQtsCAC3HH%2FQ2Emz9D%2FgBssvkJZMfkadg3xl%2B3QWQpLLDHOoIh25Pn%2BAsfDrArQ%2FjAIR8FUMShw06n5Tx%2BepknlMO2JhMIGOqUBjTeS70U6sevAeBiSJxUgZSvatKCrrrmCcU6feE5BdUoJtwKd8JdADCaoFPXTRTeQYMz3hQ1ZNWasoRaZ4BrwlQwA8kpQ4TDo3nyITSz33UQZ%2BBdF5P710C0qrrHlAG4gkqFs2fT%2F4L8ob%2BjUcuKBBz%2Bw8xj7zJb16HqHIDavrp2%2FdoMXWBXHq3UxTdIgCWDLtmexbapmPWZ6UEt%2FUuUJVWaL2kYH&X-Amz-Signature=4fb8ed4d753d192572c0231f22c6f65b56735d0383c73b5fe829e1693e4d0cf3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
