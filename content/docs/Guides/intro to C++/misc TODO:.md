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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GTA75Z3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIG1SamWpbBnuvVVCQaFPIuj77divEv1blhqN83%2FFhNdVAiBDJKMngVFGGFbn2nGbn4o%2BuTXAMMJKUKG%2Fw6ILgIQKFSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMK7YTJQFPATXjAQERKtwDG%2F97GI95LDGCylYxo8ToMTh%2BOscX05xrS%2BTsS10x4U2z5wck0h%2B1ckH0u58STXEXeoAGP5a2tmqdbe%2BAPfgwLwrjPrkVXHA%2FxJnk%2BQHPDcxWkfP6GzpbgHjcT6MYADkLpszmyJlbTGJnYrzJZA5YcvNRm13Vu8m6zjNEwjqVI3NS2i8s7v8a%2BZhX7mHU2YJMDnQ4JkESpt9UKN7tRmFapReVLlCXJJx2FDkJ2dVGzbmnXHoDohkwJB8vYz0XNBH2wNTmj1pQbmNwVwIxLNvmn%2B0F3mUdu44N7xG%2BjuktpFDbmc7Eanj1KNaoOHe8mZ%2BsP%2BUwYk%2FNeyA%2FmZKDD7sldVXT%2FUFsugCI0P8qvme9DR%2FX2H6iX4LCFAFhQYYLSdroaUG71UTg81QqdNZkhf3dHH922UxcdzOQM%2FiGJHHTvPT8Caqo1aqYOwyvcH1ci4%2FnGnLHKvxlxTVhWZvMIU656Fv2ye7PCXt1S0Wj3mDaiP%2B47u4NCvfBJwcbNrhD2sU4n8y9zTIdtNWxDtmukKksWYXb6lnCQCrV8ALEfFMMkpE%2BhnWO83jVQrg5dAIE8%2FYXY39ioA9jWQxIU2UKvH%2BDbz4cG%2BOFyfJChQSTEtOuwrtZZaoOMlXzy4rGNl4w86bCxAY6pgFirhqxmo72uJBKOmDGPp2v7yZKCaL8Ft5YgUWNtWF%2FRkwzeavWGkgnK1JCpr9csZYZygWjRYSHG5ZwPBWxHGGtNpnCuVKbJkA1OEnkIJFaeKKLPknwZL6PUi7AMt%2FgP1Gs4e4mimQ4QV%2FTImqHHrZr9egf1gL1KtbhBP9ojwB4tR%2FRZOUTecipr5TkAJIsRTxjwBfrLf2wJuD3%2BrDJ%2By%2BCmKsz8vn4&X-Amz-Signature=21544d9fca6af2791dcc0fbed5cdafe06f36c006e35de75479ce9546e6a442a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GTA75Z3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIG1SamWpbBnuvVVCQaFPIuj77divEv1blhqN83%2FFhNdVAiBDJKMngVFGGFbn2nGbn4o%2BuTXAMMJKUKG%2Fw6ILgIQKFSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMK7YTJQFPATXjAQERKtwDG%2F97GI95LDGCylYxo8ToMTh%2BOscX05xrS%2BTsS10x4U2z5wck0h%2B1ckH0u58STXEXeoAGP5a2tmqdbe%2BAPfgwLwrjPrkVXHA%2FxJnk%2BQHPDcxWkfP6GzpbgHjcT6MYADkLpszmyJlbTGJnYrzJZA5YcvNRm13Vu8m6zjNEwjqVI3NS2i8s7v8a%2BZhX7mHU2YJMDnQ4JkESpt9UKN7tRmFapReVLlCXJJx2FDkJ2dVGzbmnXHoDohkwJB8vYz0XNBH2wNTmj1pQbmNwVwIxLNvmn%2B0F3mUdu44N7xG%2BjuktpFDbmc7Eanj1KNaoOHe8mZ%2BsP%2BUwYk%2FNeyA%2FmZKDD7sldVXT%2FUFsugCI0P8qvme9DR%2FX2H6iX4LCFAFhQYYLSdroaUG71UTg81QqdNZkhf3dHH922UxcdzOQM%2FiGJHHTvPT8Caqo1aqYOwyvcH1ci4%2FnGnLHKvxlxTVhWZvMIU656Fv2ye7PCXt1S0Wj3mDaiP%2B47u4NCvfBJwcbNrhD2sU4n8y9zTIdtNWxDtmukKksWYXb6lnCQCrV8ALEfFMMkpE%2BhnWO83jVQrg5dAIE8%2FYXY39ioA9jWQxIU2UKvH%2BDbz4cG%2BOFyfJChQSTEtOuwrtZZaoOMlXzy4rGNl4w86bCxAY6pgFirhqxmo72uJBKOmDGPp2v7yZKCaL8Ft5YgUWNtWF%2FRkwzeavWGkgnK1JCpr9csZYZygWjRYSHG5ZwPBWxHGGtNpnCuVKbJkA1OEnkIJFaeKKLPknwZL6PUi7AMt%2FgP1Gs4e4mimQ4QV%2FTImqHHrZr9egf1gL1KtbhBP9ojwB4tR%2FRZOUTecipr5TkAJIsRTxjwBfrLf2wJuD3%2BrDJ%2By%2BCmKsz8vn4&X-Amz-Signature=d603caa14d3045b6c0878c4319870615e33e66058b370b4d9cb25c06f06f5922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
