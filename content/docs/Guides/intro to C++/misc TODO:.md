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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLKFXVL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKA34kj124siEYhsTVEb3xPK6BJBbi10AFLkmyBtBSjQIgOcHa07Z%2F4syZrNj3UOLDb1jRduDJK0ZcsJxYGQX5HnYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFB2azXaMvvwvgY6jircA%2F9fAoXYbkPC1pPVZhJZ3615QUXMTBfMchJNUB604oN0lHW5APIpqXxwcEN%2FAhyVoK3cEj2xEeb3sbD18JLIlZVwTlbAr8lYgba7cAYC7W3yIqNTjXRWEq0EAd0Jf402JatLs8MYvawvt7xX0QxEfPXhQC7WpcC1gqBq93bsrGWC0ft9U9ZhjDXFk9cdRK3EukJWJVgnLNwfSF7ouSvUeWd4iJXTnmqyqr0lFPifFwdPUaGunJPmmBpRHSxWfjSyuzDj1buHhftxSQaYlF8bSRKQMbn%2BBEVd6pVnf4q7H8H%2FiksQ9%2Fgrp8rRfdTwyCgkyikWhWisnDnB4Zlv11rjnCzW6iVVYpIno7yT2JUmhlBGhaP2lWCPVx%2FkCAoiV%2BXdKk4XzWQRFzWYmP6IyAaxurs1vD9LM%2Ff3ne3nzBOynyBql1R%2FELXUDxQ3YGgn729RqTuRoX0z9Aaw0ZSUuEQhuvLCyQUN05t83kmwSCZ53xy6FIGhyhb7ALjHMtuxnHt2EXyVn74hn0QEJ82dfkaWbFATArKSjj1q4%2F0JwELOg72%2F33uojlXwVTk%2FiZ9ubTJwoBCs1p4GltrGGuQO4hv2pW7OfDQ5KncEuLueXI2RpGvwKGqWJ8A9Xvv0I%2B9CMNXttcEGOqUBMPITvgvAk3KUjJ2iZGqlJRnYupxMVpQUIESreekh1Gh90lYs8WSssm2OB2VPFV4Ve7Pgfyxu%2BlCicZDmR78Fos7%2Fc2iAJkWPmAGb209JQTKa6lasrRNsab7oHU8N3Ig0jEglqReqa1dbEePhjtm%2BgsiIYxE%2FlW%2Fsc8wH%2BCGKHfZscGgu%2BfrSSDkdFEK3TWCNYkBMOxBgLddQwRoe%2B%2BDj2KV8YDnT&X-Amz-Signature=d3d38f5d5dc00171b1fee0f7f9362af22d4c3b536f24484af456651950e9a7bd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLKFXVL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKA34kj124siEYhsTVEb3xPK6BJBbi10AFLkmyBtBSjQIgOcHa07Z%2F4syZrNj3UOLDb1jRduDJK0ZcsJxYGQX5HnYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFB2azXaMvvwvgY6jircA%2F9fAoXYbkPC1pPVZhJZ3615QUXMTBfMchJNUB604oN0lHW5APIpqXxwcEN%2FAhyVoK3cEj2xEeb3sbD18JLIlZVwTlbAr8lYgba7cAYC7W3yIqNTjXRWEq0EAd0Jf402JatLs8MYvawvt7xX0QxEfPXhQC7WpcC1gqBq93bsrGWC0ft9U9ZhjDXFk9cdRK3EukJWJVgnLNwfSF7ouSvUeWd4iJXTnmqyqr0lFPifFwdPUaGunJPmmBpRHSxWfjSyuzDj1buHhftxSQaYlF8bSRKQMbn%2BBEVd6pVnf4q7H8H%2FiksQ9%2Fgrp8rRfdTwyCgkyikWhWisnDnB4Zlv11rjnCzW6iVVYpIno7yT2JUmhlBGhaP2lWCPVx%2FkCAoiV%2BXdKk4XzWQRFzWYmP6IyAaxurs1vD9LM%2Ff3ne3nzBOynyBql1R%2FELXUDxQ3YGgn729RqTuRoX0z9Aaw0ZSUuEQhuvLCyQUN05t83kmwSCZ53xy6FIGhyhb7ALjHMtuxnHt2EXyVn74hn0QEJ82dfkaWbFATArKSjj1q4%2F0JwELOg72%2F33uojlXwVTk%2FiZ9ubTJwoBCs1p4GltrGGuQO4hv2pW7OfDQ5KncEuLueXI2RpGvwKGqWJ8A9Xvv0I%2B9CMNXttcEGOqUBMPITvgvAk3KUjJ2iZGqlJRnYupxMVpQUIESreekh1Gh90lYs8WSssm2OB2VPFV4Ve7Pgfyxu%2BlCicZDmR78Fos7%2Fc2iAJkWPmAGb209JQTKa6lasrRNsab7oHU8N3Ig0jEglqReqa1dbEePhjtm%2BgsiIYxE%2FlW%2Fsc8wH%2BCGKHfZscGgu%2BfrSSDkdFEK3TWCNYkBMOxBgLddQwRoe%2B%2BDj2KV8YDnT&X-Amz-Signature=49d040a865b0c218afefcf695f7fcba799fe8a5c008a7a2ca200e15766aacb87&X-Amz-SignedHeaders=host&x-id=GetObject)

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
