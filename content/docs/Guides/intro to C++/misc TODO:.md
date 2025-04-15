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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMTS53GZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWTn7K6EMs3kmSH5jICPfv42ak2rRXbcSNvjQbt4NPXAiA187KL1dPYNz3HeeNrji6NU058ZaPxtWh22tLzeEvNUyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMDZBi%2F%2BddU8Dny2MBKtwDQGWS0Yc9boK00eFIg2DYWLpwpHFJIdRj%2F16OL0G%2BOAar12oX6WWsUg7ZuiOOSwmMfxV4tC5KUdMxZ1bYd5t3Ud66%2BrFmaBFtc48PKxkEq9m6Fu12i8MLPCj3gWSWtbtc2i6lrfn6%2B9sjMjocS68znPAwJ9A3wGqViO2jXdYLS2%2BRcTHZ3GUiKddjnywZIVPyQtZ0uYS7sYZv06eGjUYZm6C0lRugWHR9i6GCmyaRlW3%2FmePXn36BwFX67P2zFbDEPAu0pr9UcOy56X1bGPNEoe4qcjscvb8Qu2ayJHSZltUMLbsVEDJ5cSZup1I%2BxCFWFEkL6m4bhPhYEOUSyZ7iiVQo6wGSb21B9O7cLvoStScg5woN2ygcf5TGel%2BnnR%2FAfoHcM30gSVtbPPniBZtnYQz5NxAESEzshsKuyPUHSbu%2BdEr1IGoHDZK3KUGcwbbk5Ym3zhBFoGktIbNojCWLqpfQcwRRnwacjrehoU0oe65s1X6uMESMSsEeIFwKM8CZH9S01rINSx9woYS8alI4bxKeAfcCDFpkcJW40gavWyrUp3bWjEjMCiDnsaqDKUhRcWStWJYQEoa%2BGrLLldZ5yGjAV8d6hFAB8cT9SIehfKDSGqUYUEYSAK%2F%2F1Dcw0rX4vwY6pgHsnXfMUrzsG%2BTCe98EPDC1S8nJqFHQyEj9m0MjgbvUJ7XZ5PbO7WXYe7%2BnXIRC9nPeQOzdJooHSTNndZibBkIs3ImoKWSfNEoYaiM%2BapPqO%2FuudoUipKkklCfeWCxFxGB8Lom7Ce8eddtJvzjqd5SwrjQMFqDZ4COrDS1nl%2BRKCfq6sIkT8Gy%2BStzMpvLaptcLS9EqPznNSXtVCaGnUSXMkWwhAv%2Bx&X-Amz-Signature=8bb7882165782742560ca7f53ee99cc0056db12d52c8e375ffdbccbd5fe77a28&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMTS53GZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWTn7K6EMs3kmSH5jICPfv42ak2rRXbcSNvjQbt4NPXAiA187KL1dPYNz3HeeNrji6NU058ZaPxtWh22tLzeEvNUyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMDZBi%2F%2BddU8Dny2MBKtwDQGWS0Yc9boK00eFIg2DYWLpwpHFJIdRj%2F16OL0G%2BOAar12oX6WWsUg7ZuiOOSwmMfxV4tC5KUdMxZ1bYd5t3Ud66%2BrFmaBFtc48PKxkEq9m6Fu12i8MLPCj3gWSWtbtc2i6lrfn6%2B9sjMjocS68znPAwJ9A3wGqViO2jXdYLS2%2BRcTHZ3GUiKddjnywZIVPyQtZ0uYS7sYZv06eGjUYZm6C0lRugWHR9i6GCmyaRlW3%2FmePXn36BwFX67P2zFbDEPAu0pr9UcOy56X1bGPNEoe4qcjscvb8Qu2ayJHSZltUMLbsVEDJ5cSZup1I%2BxCFWFEkL6m4bhPhYEOUSyZ7iiVQo6wGSb21B9O7cLvoStScg5woN2ygcf5TGel%2BnnR%2FAfoHcM30gSVtbPPniBZtnYQz5NxAESEzshsKuyPUHSbu%2BdEr1IGoHDZK3KUGcwbbk5Ym3zhBFoGktIbNojCWLqpfQcwRRnwacjrehoU0oe65s1X6uMESMSsEeIFwKM8CZH9S01rINSx9woYS8alI4bxKeAfcCDFpkcJW40gavWyrUp3bWjEjMCiDnsaqDKUhRcWStWJYQEoa%2BGrLLldZ5yGjAV8d6hFAB8cT9SIehfKDSGqUYUEYSAK%2F%2F1Dcw0rX4vwY6pgHsnXfMUrzsG%2BTCe98EPDC1S8nJqFHQyEj9m0MjgbvUJ7XZ5PbO7WXYe7%2BnXIRC9nPeQOzdJooHSTNndZibBkIs3ImoKWSfNEoYaiM%2BapPqO%2FuudoUipKkklCfeWCxFxGB8Lom7Ce8eddtJvzjqd5SwrjQMFqDZ4COrDS1nl%2BRKCfq6sIkT8Gy%2BStzMpvLaptcLS9EqPznNSXtVCaGnUSXMkWwhAv%2Bx&X-Amz-Signature=d24256e9c9a212f086cd96d560be2a19e9cab5202c17e5fb616c1acdc60e3229&X-Amz-SignedHeaders=host&x-id=GetObject)

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
