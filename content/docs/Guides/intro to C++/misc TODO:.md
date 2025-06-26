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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC4MG2NJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDGEyD%2BlPOuICcjCqcrrCUoEQ%2FLMIZKFU%2FpotnJkPGoCQIhAPxhZlolc60dWyDDRXNbxcBIVJYLBl1wy%2BF8sXkrQAGhKv8DCF0QABoMNjM3NDIzMTgzODA1Igx0Hvu6wN9ebhuiD9Iq3AOJD0zsxdgbyBHNbzk6hde3ScF%2FbzcPxGJ5CkdAlfeO7kZcDP3cZNiKEC1Q1uFQiGSVnwBlwhu38B6Q%2FM%2Bse3ebCqQIrhK0sg98KvOEsETpvIg9mWOTPMeRxKkfr0W%2BnxRqDHeEwD0dLDDyiUFhP7OvSMkZ08RDPN9IsbZCpSJhIUp16nbywffUAR8iPJ3n%2FQQJm5m39cVIsW%2F%2Fj46FXH7rG5VGjRUTih73J6ZDaOYugEczoVVScVluYuu74PWXcnx4lWZ59wwo7syEfyL4%2FCwnRNZ82IVMjQYAyvzJcaxDGXDa7LQPPIMjGZU1fTH%2F9bk6oJl%2Bbvd%2F14PsnJQwqX%2ByNOItyWRkmGsq11ML6f3KcWhpbbJbGx8mcRuOj3Rh4ocZorvFEJI3QY2sH7LXd3ssSX52Ja73jes3Slvv1iProb1by0GE5dyDN3h1Ih7%2BOWvnTaxYxXaLlyfQ5tg0p7e7QiKRj8y6ZX5iAVyBdjTg9OEADtgSyCB3oI2eCeHMLoQEsUlZsi%2F2Zjrz03Ix5ZrBa7W8KamXfE7t2fVRgU9c25cMoLnM2LdyTJ%2FlfAFsg8tNCLPoH%2F6GMHL7CSJl8wgBhVmhKWpQ3Qy3Jn36GYDHo4WJH2MegLDgI357HzDK8vTCBjqkAcevH61nkJhSXs424aztnNb702oA1SvSoYq0kC2bamvwNo6nhYRatyMVclsG09P5DT7htrjnJJp0OmelAr%2F%2BaOI5Al5bdNTf3YCnh8q2OpsKuN%2FT01Yx2y3IsN%2FaFgRQWyGK8ifbV4wpqvLJDch99xkIMkn27%2F22X1x34m9rb0bzXEOgoNLGHHQ3Lh%2BykHon%2BL0m4C4bB%2Bk9IpjnOJ7MkbWOkhDf&X-Amz-Signature=3f935945a89b49adff74e43db6466d262fcb43d43a7f4529e01c581c8486d64e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC4MG2NJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDGEyD%2BlPOuICcjCqcrrCUoEQ%2FLMIZKFU%2FpotnJkPGoCQIhAPxhZlolc60dWyDDRXNbxcBIVJYLBl1wy%2BF8sXkrQAGhKv8DCF0QABoMNjM3NDIzMTgzODA1Igx0Hvu6wN9ebhuiD9Iq3AOJD0zsxdgbyBHNbzk6hde3ScF%2FbzcPxGJ5CkdAlfeO7kZcDP3cZNiKEC1Q1uFQiGSVnwBlwhu38B6Q%2FM%2Bse3ebCqQIrhK0sg98KvOEsETpvIg9mWOTPMeRxKkfr0W%2BnxRqDHeEwD0dLDDyiUFhP7OvSMkZ08RDPN9IsbZCpSJhIUp16nbywffUAR8iPJ3n%2FQQJm5m39cVIsW%2F%2Fj46FXH7rG5VGjRUTih73J6ZDaOYugEczoVVScVluYuu74PWXcnx4lWZ59wwo7syEfyL4%2FCwnRNZ82IVMjQYAyvzJcaxDGXDa7LQPPIMjGZU1fTH%2F9bk6oJl%2Bbvd%2F14PsnJQwqX%2ByNOItyWRkmGsq11ML6f3KcWhpbbJbGx8mcRuOj3Rh4ocZorvFEJI3QY2sH7LXd3ssSX52Ja73jes3Slvv1iProb1by0GE5dyDN3h1Ih7%2BOWvnTaxYxXaLlyfQ5tg0p7e7QiKRj8y6ZX5iAVyBdjTg9OEADtgSyCB3oI2eCeHMLoQEsUlZsi%2F2Zjrz03Ix5ZrBa7W8KamXfE7t2fVRgU9c25cMoLnM2LdyTJ%2FlfAFsg8tNCLPoH%2F6GMHL7CSJl8wgBhVmhKWpQ3Qy3Jn36GYDHo4WJH2MegLDgI357HzDK8vTCBjqkAcevH61nkJhSXs424aztnNb702oA1SvSoYq0kC2bamvwNo6nhYRatyMVclsG09P5DT7htrjnJJp0OmelAr%2F%2BaOI5Al5bdNTf3YCnh8q2OpsKuN%2FT01Yx2y3IsN%2FaFgRQWyGK8ifbV4wpqvLJDch99xkIMkn27%2F22X1x34m9rb0bzXEOgoNLGHHQ3Lh%2BykHon%2BL0m4C4bB%2Bk9IpjnOJ7MkbWOkhDf&X-Amz-Signature=ca0a595677037f4fdd9e89fc459b811573885515c5a2df8c183b58830e9ae8f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
