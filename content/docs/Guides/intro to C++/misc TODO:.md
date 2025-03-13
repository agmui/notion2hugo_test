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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMJHO34%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMjlxcp5b4Boaja%2BD6AZcB6Iz62XFB7anSam6tPgVP%2BAiAWRlhko0KapxjWvuNyfYmwBvNfYBcSgvb3dj3%2FOW1JsiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSAZlfjyyMHsMYqL8KtwD3sP6oKvkKK3IR7yqNl3xKOy4p2zL0xnqeeXZcwIZplDEbT3DXiKkRL3aetuYTzf20l8ss8JelaboBtLEK1%2BdJt3ylw5PYFJj%2FJuzKYdr6JltBi6sLCklFj%2FwbdKmmGp06Gcb8lIVyGdNSpLTGdMITwBkuLjnEyZMiAIvWqH6%2BoxgMB46AeF5aybyoU1K9OHdrfyUm3P6931%2F4sQnjZmieNum0T8%2BAGrnioNZPD5zbu%2FPR84E7CJIm8l5XnE8H4noGC0QS%2BuKr34XWsU2CCPuFG3vq6o0CdXfsWfveLXuJTWMrBHeD9Chv2%2F41TH1NUZZBz0v9ntYvy83Ee9oeIbfQQnbw%2BZ0wa69paUOEWg2XRrRZ%2B5zhPX%2FX33VHeoGXrbiwYnA5s7%2FetCYgvydGVwTeQCGMTmO5g6ZoL4n3ay8hcf6WXZYDgDQogxPYdoNw1BcCiXvgNoZOwI2Rm1hzSWg0%2BXzAvgaACdmp3%2Bfcr28P7o%2FollXsVLaoByMMRnfPE1UmyALY6caSxB4jD%2BhGVRRmBo5DER3j7lu0MM8fVclk21dPslDKq25QsyQf6uml6tPND7LE6sBBILxrTn9%2B6HzGtJZyj1%2FgReQNMS6tS5TT1tV1J2QjhM7gH0OLjgwydXMvgY6pgG1UrdppzS8J7qL%2FEgRMOjEhtvqGLbofL4FUdXrlaUGIrqVsTlDRU%2FrV1zPuiK4KW0Awtj6%2F5qtgmQ8UjK32EbffnNgt7w%2B1b0t32w5rBeei66m3J%2BtFQF8IVFQ3JcFAGiDtkZ5Hm1U1PU8McsYD1vY6f5wXuOh8NEAcXvz41A98HJVBpDObscJ8p%2Ba8LljsYsNmBlc6hVvyVWPXGAny3oWGl%2BFoHLR&X-Amz-Signature=14669a0ddea0dc721ac139981bd8ac97955e0557fef92aca6cf991cf6a40358d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMJHO34%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMjlxcp5b4Boaja%2BD6AZcB6Iz62XFB7anSam6tPgVP%2BAiAWRlhko0KapxjWvuNyfYmwBvNfYBcSgvb3dj3%2FOW1JsiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSAZlfjyyMHsMYqL8KtwD3sP6oKvkKK3IR7yqNl3xKOy4p2zL0xnqeeXZcwIZplDEbT3DXiKkRL3aetuYTzf20l8ss8JelaboBtLEK1%2BdJt3ylw5PYFJj%2FJuzKYdr6JltBi6sLCklFj%2FwbdKmmGp06Gcb8lIVyGdNSpLTGdMITwBkuLjnEyZMiAIvWqH6%2BoxgMB46AeF5aybyoU1K9OHdrfyUm3P6931%2F4sQnjZmieNum0T8%2BAGrnioNZPD5zbu%2FPR84E7CJIm8l5XnE8H4noGC0QS%2BuKr34XWsU2CCPuFG3vq6o0CdXfsWfveLXuJTWMrBHeD9Chv2%2F41TH1NUZZBz0v9ntYvy83Ee9oeIbfQQnbw%2BZ0wa69paUOEWg2XRrRZ%2B5zhPX%2FX33VHeoGXrbiwYnA5s7%2FetCYgvydGVwTeQCGMTmO5g6ZoL4n3ay8hcf6WXZYDgDQogxPYdoNw1BcCiXvgNoZOwI2Rm1hzSWg0%2BXzAvgaACdmp3%2Bfcr28P7o%2FollXsVLaoByMMRnfPE1UmyALY6caSxB4jD%2BhGVRRmBo5DER3j7lu0MM8fVclk21dPslDKq25QsyQf6uml6tPND7LE6sBBILxrTn9%2B6HzGtJZyj1%2FgReQNMS6tS5TT1tV1J2QjhM7gH0OLjgwydXMvgY6pgG1UrdppzS8J7qL%2FEgRMOjEhtvqGLbofL4FUdXrlaUGIrqVsTlDRU%2FrV1zPuiK4KW0Awtj6%2F5qtgmQ8UjK32EbffnNgt7w%2B1b0t32w5rBeei66m3J%2BtFQF8IVFQ3JcFAGiDtkZ5Hm1U1PU8McsYD1vY6f5wXuOh8NEAcXvz41A98HJVBpDObscJ8p%2Ba8LljsYsNmBlc6hVvyVWPXGAny3oWGl%2BFoHLR&X-Amz-Signature=bf1c1462a671835265b65656dec960dd0532e46674bf692e1872678974eecdf1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
