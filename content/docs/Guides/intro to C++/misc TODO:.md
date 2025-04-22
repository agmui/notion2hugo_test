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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EV7FADJ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHUPYih%2BEfYZHgFvFwfMlmZhGrWw7jDnwMzDGU%2F35tyJAiA1sPz3y7JH1gPRHlnUQ9HNrbBRVhsHsB1OXxNmZDnF5iqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNOAyhmH%2BMBy9f%2BSMKtwDFQx%2BpVGNmy9vRG%2FO%2F2TQhoh85hN13QzNuKwWlpazroVm86jjUIF5YHlq2AVWFhYSIUozorRHGUnpm7SC3JUL4DIMfLWX%2F3MVDL7xjWwhzCbX5rQVEAFSMgg0xKF3VIPgJ5lAePtRoExjybcGk5HEnlwa8xqG%2Bi0%2FBIDP8ubf4a5Hi0j1nH9LTkeWqPJEW%2FwVGaYEAmcT9VHW5ThZEh8qkmvr2SWXpXPmMQ1d%2BtPf7sWY6vkZQbCbuHx8P0veeyGtTWDRxe%2FsKHM1aB6g%2FNs9DBKUtxukZMY0zWJZPwivHkdKlSFAdGlo2Xemv6bKZ5laztFDj4ocxLcMZ4HV9rpM3egUdOtEswpeJfDCHSSSisT0vJsLv1Jhni%2FAmQTL80N7dPVc86%2BPd5gzoleswN1pas6YEeV2LE5qZ0yiGXZyP9yoPZ4HcL0mLESta1XvsRFcaOSp9dhntmFGGsYx3nHxedVr1p2%2BoFZKu1uGrVaLDZYmF4cJ338ExXIaF5mFOVOUk9by2bTlkZ%2FlUq5a%2BHzYsI8Y67zvzquVK63G6FvBo4LXHX6KAxuHRq6lfQe3sFGyrkSiRpkO8Oqm8zJ3q98dg4NilYYRzXm7Y1qvdgvw7TptIOpXwUCxt6gw4jowiuCewAY6pgFFpFQpAH7Mf0W%2Ffn4huxSuJXZA4fB6KbMFr%2BchCtq7MKYxYFby9q995B1Ehl3Bv5Z%2BQSB6LYLP9bBqW1NQrRY0Hd0zM3OFoB9%2FGG1t6sOld%2BWrnDBnAaGsnqczNs%2BpxVGZfHsCyzV%2BoL4sm5E8h8Z2U71Ebp1mj%2B3rlvBC1TWgMdHSpxUqMYssBrkJve13lNWEtwlKEhSaoEe%2FcmNzxk%2By8bCKuRbv&X-Amz-Signature=b9873dc63c05799d3523209ac9d8b8895226440236b48e973f41a6593b241814&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EV7FADJ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHUPYih%2BEfYZHgFvFwfMlmZhGrWw7jDnwMzDGU%2F35tyJAiA1sPz3y7JH1gPRHlnUQ9HNrbBRVhsHsB1OXxNmZDnF5iqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNOAyhmH%2BMBy9f%2BSMKtwDFQx%2BpVGNmy9vRG%2FO%2F2TQhoh85hN13QzNuKwWlpazroVm86jjUIF5YHlq2AVWFhYSIUozorRHGUnpm7SC3JUL4DIMfLWX%2F3MVDL7xjWwhzCbX5rQVEAFSMgg0xKF3VIPgJ5lAePtRoExjybcGk5HEnlwa8xqG%2Bi0%2FBIDP8ubf4a5Hi0j1nH9LTkeWqPJEW%2FwVGaYEAmcT9VHW5ThZEh8qkmvr2SWXpXPmMQ1d%2BtPf7sWY6vkZQbCbuHx8P0veeyGtTWDRxe%2FsKHM1aB6g%2FNs9DBKUtxukZMY0zWJZPwivHkdKlSFAdGlo2Xemv6bKZ5laztFDj4ocxLcMZ4HV9rpM3egUdOtEswpeJfDCHSSSisT0vJsLv1Jhni%2FAmQTL80N7dPVc86%2BPd5gzoleswN1pas6YEeV2LE5qZ0yiGXZyP9yoPZ4HcL0mLESta1XvsRFcaOSp9dhntmFGGsYx3nHxedVr1p2%2BoFZKu1uGrVaLDZYmF4cJ338ExXIaF5mFOVOUk9by2bTlkZ%2FlUq5a%2BHzYsI8Y67zvzquVK63G6FvBo4LXHX6KAxuHRq6lfQe3sFGyrkSiRpkO8Oqm8zJ3q98dg4NilYYRzXm7Y1qvdgvw7TptIOpXwUCxt6gw4jowiuCewAY6pgFFpFQpAH7Mf0W%2Ffn4huxSuJXZA4fB6KbMFr%2BchCtq7MKYxYFby9q995B1Ehl3Bv5Z%2BQSB6LYLP9bBqW1NQrRY0Hd0zM3OFoB9%2FGG1t6sOld%2BWrnDBnAaGsnqczNs%2BpxVGZfHsCyzV%2BoL4sm5E8h8Z2U71Ebp1mj%2B3rlvBC1TWgMdHSpxUqMYssBrkJve13lNWEtwlKEhSaoEe%2FcmNzxk%2By8bCKuRbv&X-Amz-Signature=053a5dea309df5bd0b948254caad928d0e139f21da18a654bb0d649574c7a8b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
