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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PL4RKDC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJFMEMCHwUhyFFrbmMII4hStudS1JRopGH5T33LPeqdSFjqzbYCIApb%2BbSzVPj86KIcXcJPuedAEp6maofViNNjE5VF1pRwKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJHs00My9ccTi%2B5Pwq3AOSm9KRM8yXhY9vNOV9F4mH9COrO7maK1u8mxgxzagPvGYJdJoLhNg2iTnarLTfeOnnOE1JL%2Bw3%2BKtQVVjlvSsqM0w0ea83AawGMMP9SFu4lyD7hQjHW444HA%2BTchFFIGqdZQMOTvjZtwkixfYie9JP05lEWYrJWWl6tm%2BzoQ92eTlocUBtEMcUVakKmJ2mtf1WszXVC2b1iZ7ZCORQI%2BYGgu1rhT3V6e%2BldZFZOFJA1vgPqtMPHhOMvXRLRhCgiBNsIsy3NgF4VM9%2BAQhsFjGG8laFFwepLVf2hUMU5ocV62QObVdyniM9kKf%2BX3AkGnMCVNt7vN3b%2BoGGPmBiuGBA1WWM4wetsaxXhhW%2B2m9TFfOOkj0eSdVxnUoM%2Fsg%2B%2B8IZVtwqjgvyTm%2BNh9AwPXw20qb0VhZCHK%2F0abqiQDVCMR7HQrAjvlcXKs%2BzR8iBi8Vwuych6xZaIy%2BPbCPZiWflLcAg58rB4LsP%2F909qO2OfNS5CTnrn%2FAaD6WkVAmbpnELZGB8RqY0KRxiFWKwhqBVWRVpysysKEBQ08cppRzb8Xw4pHaUJGCE0Vup%2FI8%2FRDUT5O9QENRmLPJ%2F3D6Y%2BEy3RZWxqeoRQeqR%2FPVCdUTKYuVDlxkHevIdFVqpLDCm0oS%2BBjqnAZjgBChtew4TiboCCaq7iKYkhG6QcdceQPSk37JgIfU3hqoM68%2Bmh4MR3h8clCYhRXBE%2B6WuGSV%2FwZftJBkPPwpV%2Fqm3E%2BEgqTOeZTi57pN3zy5P0E2GrheE4v%2Fh2JEa%2FMEUHzjH5GUE675EME2LfodEgRasBs2d3WKsna14mU4TZpwBoYLcT0ZBydsmM5hCK2wjVfj01GJzritjUa1LKTOm%2BK6AGiiM&X-Amz-Signature=9cb1033418e3ab7c431c9b3ec44b2a1ce0b74e532e4c4d594e62c0d97478b032&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PL4RKDC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJFMEMCHwUhyFFrbmMII4hStudS1JRopGH5T33LPeqdSFjqzbYCIApb%2BbSzVPj86KIcXcJPuedAEp6maofViNNjE5VF1pRwKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJHs00My9ccTi%2B5Pwq3AOSm9KRM8yXhY9vNOV9F4mH9COrO7maK1u8mxgxzagPvGYJdJoLhNg2iTnarLTfeOnnOE1JL%2Bw3%2BKtQVVjlvSsqM0w0ea83AawGMMP9SFu4lyD7hQjHW444HA%2BTchFFIGqdZQMOTvjZtwkixfYie9JP05lEWYrJWWl6tm%2BzoQ92eTlocUBtEMcUVakKmJ2mtf1WszXVC2b1iZ7ZCORQI%2BYGgu1rhT3V6e%2BldZFZOFJA1vgPqtMPHhOMvXRLRhCgiBNsIsy3NgF4VM9%2BAQhsFjGG8laFFwepLVf2hUMU5ocV62QObVdyniM9kKf%2BX3AkGnMCVNt7vN3b%2BoGGPmBiuGBA1WWM4wetsaxXhhW%2B2m9TFfOOkj0eSdVxnUoM%2Fsg%2B%2B8IZVtwqjgvyTm%2BNh9AwPXw20qb0VhZCHK%2F0abqiQDVCMR7HQrAjvlcXKs%2BzR8iBi8Vwuych6xZaIy%2BPbCPZiWflLcAg58rB4LsP%2F909qO2OfNS5CTnrn%2FAaD6WkVAmbpnELZGB8RqY0KRxiFWKwhqBVWRVpysysKEBQ08cppRzb8Xw4pHaUJGCE0Vup%2FI8%2FRDUT5O9QENRmLPJ%2F3D6Y%2BEy3RZWxqeoRQeqR%2FPVCdUTKYuVDlxkHevIdFVqpLDCm0oS%2BBjqnAZjgBChtew4TiboCCaq7iKYkhG6QcdceQPSk37JgIfU3hqoM68%2Bmh4MR3h8clCYhRXBE%2B6WuGSV%2FwZftJBkPPwpV%2Fqm3E%2BEgqTOeZTi57pN3zy5P0E2GrheE4v%2Fh2JEa%2FMEUHzjH5GUE675EME2LfodEgRasBs2d3WKsna14mU4TZpwBoYLcT0ZBydsmM5hCK2wjVfj01GJzritjUa1LKTOm%2BK6AGiiM&X-Amz-Signature=b93ebf0298f580c099df972436f544d0c93dbf3c78829f4626c1f8c6c557c884&X-Amz-SignedHeaders=host&x-id=GetObject)

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
