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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFCQYO5P%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIDiasaM3EDv6mv2JkHmbk%2F2Q048ZABWYE8ApRTQes7PDAiEA1kl2YuruBA%2BZQUWMrwUeCIETbvdvrM670zJEdF8jfWUq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDGqpdTfMrp7ovv5sRyrcA8EclpBf82pY%2BrwnVTFD2u%2FwXLP2DPenuXpe9eieIdmDr6a8iAZgFct8bItlRHnROgIgWD31JK5FT3RrBmTAxMii4tHhuMYhb5Xn8M0HU11qTVygDjjmPbuD%2B%2BicxpUqUdXoJ1gFnQh%2FhPNB6oXJU4hY%2FJ9BHei%2FIIXcx4WsMLpWvnNNAdnoIZb0ldVVKHN4K6Z7%2FuS%2BQ3DSYHgPmGmpuQLLSHQDEjb6QrqiUvQQj0y5kTwXkhJZdy4%2F8T2p9kt%2Ff1ZzmPZcTCqIsmfQidcPWUeuQ0yklJaRMC2R83TIbq1RM9CWFrOZDh%2FeodHtihq2vkVMgUlDU9fl1nMkkBYurS45yWtPNWIbN47grflRUDIytH2gQUaxcpi%2BEHiPXld07T9wQakkuHBaOG2jTA3liCcKKT5Ozr%2FtIvLrUIZUw%2B5t%2FPnbWOcl95n1jbBC3cgyvrfTXnjXWVDm%2BZwJjFm7BYmdpUo4yeI5BYpmLj0dMLBPFvglL2j4mfx91S8qtbZqEpMY5%2FOrU9M0dtlc0Vi%2FB%2FcQh5P3%2FpFOmJ24TnAP8LEOsjcWBCXhurxDNi5JtPKlo%2FLZ23Utd%2BnwQQNF1cooX63%2BPXI0mHGO792qNPOR06m0KW0tJKyjoDF9ZumPMMnrusIGOqUBT8UYzYaDPKOqjBcV5gxxfP8%2Fa6zs7BIFpw6eoyPqnFjqe7RUQrxO81VOyxBRzQI4hCuksUyXLb9acnPFq5RDs7i%2FPjvZmepHc3e8VQ8OGHIJ7Lcy2IUqALiO%2BM6IR9Gw%2BMNFb8LYA1ztRrotcq39%2FigYvDyfz0C4S9lmAMDF8pxyycsKs8i7kw1nYkr5zlNQ7f2zDC%2FDzZGpJhdcM52W2CYJTuNc&X-Amz-Signature=c0b44646cb51d6c6c889c38754688d7836169d2aba027fdb070530f992ac105f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFCQYO5P%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIDiasaM3EDv6mv2JkHmbk%2F2Q048ZABWYE8ApRTQes7PDAiEA1kl2YuruBA%2BZQUWMrwUeCIETbvdvrM670zJEdF8jfWUq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDGqpdTfMrp7ovv5sRyrcA8EclpBf82pY%2BrwnVTFD2u%2FwXLP2DPenuXpe9eieIdmDr6a8iAZgFct8bItlRHnROgIgWD31JK5FT3RrBmTAxMii4tHhuMYhb5Xn8M0HU11qTVygDjjmPbuD%2B%2BicxpUqUdXoJ1gFnQh%2FhPNB6oXJU4hY%2FJ9BHei%2FIIXcx4WsMLpWvnNNAdnoIZb0ldVVKHN4K6Z7%2FuS%2BQ3DSYHgPmGmpuQLLSHQDEjb6QrqiUvQQj0y5kTwXkhJZdy4%2F8T2p9kt%2Ff1ZzmPZcTCqIsmfQidcPWUeuQ0yklJaRMC2R83TIbq1RM9CWFrOZDh%2FeodHtihq2vkVMgUlDU9fl1nMkkBYurS45yWtPNWIbN47grflRUDIytH2gQUaxcpi%2BEHiPXld07T9wQakkuHBaOG2jTA3liCcKKT5Ozr%2FtIvLrUIZUw%2B5t%2FPnbWOcl95n1jbBC3cgyvrfTXnjXWVDm%2BZwJjFm7BYmdpUo4yeI5BYpmLj0dMLBPFvglL2j4mfx91S8qtbZqEpMY5%2FOrU9M0dtlc0Vi%2FB%2FcQh5P3%2FpFOmJ24TnAP8LEOsjcWBCXhurxDNi5JtPKlo%2FLZ23Utd%2BnwQQNF1cooX63%2BPXI0mHGO792qNPOR06m0KW0tJKyjoDF9ZumPMMnrusIGOqUBT8UYzYaDPKOqjBcV5gxxfP8%2Fa6zs7BIFpw6eoyPqnFjqe7RUQrxO81VOyxBRzQI4hCuksUyXLb9acnPFq5RDs7i%2FPjvZmepHc3e8VQ8OGHIJ7Lcy2IUqALiO%2BM6IR9Gw%2BMNFb8LYA1ztRrotcq39%2FigYvDyfz0C4S9lmAMDF8pxyycsKs8i7kw1nYkr5zlNQ7f2zDC%2FDzZGpJhdcM52W2CYJTuNc&X-Amz-Signature=17443b6052eb33615a0dfd987288dbfa9938d653c5879270aaa05beedc042bfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
