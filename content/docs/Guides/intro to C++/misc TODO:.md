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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MRIUIAD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4W9WHNnMPDV%2F4ApaEFmCh%2FAQVDW3uxWonW6fcCj%2FdsQIhALKPDjHevatkXYVLJtjzQfQvNmXwwb1BKQsbstob%2Bt0JKv8DCGMQABoMNjM3NDIzMTgzODA1Igy1lZ76UAIBzML9gvcq3APEEVnSmXo729CAFil%2BnFPZWR4Oj%2FjybWfKu6J4apU%2F3ARXBzri2m%2FrORlF9CuuZ8ECYssydnfUPMCB6y%2BGeTjTbUbLEmmFqNU6hM0eYH39WOyJjE%2FU4dAx5VWOr3gHIdbJhWfUBSxPKgdpCw8MchDx9nRhzLe2SoMY6%2B%2FFWACMtoVWGz4BBEy4hpnERfanufRHnGOtF01K7%2Bf3DCDcMvzx%2BbWuNOwb7ufKC1KGkUNU%2BkeAiIIgHuKUGw4nQnQPCJ9Zy5nqBYwl1uB3KUCOa%2BwsDoDWwecZtPtmpfseD74ayhaNSBNLQ7QUrn3gvSImxY6Nn0Tt0v2%2BKdyjoyOwiG2qwt9EmKO8YVXsaayulBNH%2F51pzq8R5C14dzfo%2BGsPjydAH45aT5FlKgqTTW4fMAoO284s2UIz11vRl9BJ62V3LX16WJGptiCwPiTXB6L8RZR069DlJ23R%2BAiUYlhCJoA1xINXwtifWKlHKrLi%2F5phcQqOq8j03LZpOTeLA2DUg7%2FmGW34jRh8tvRKpbasEXi3olvHBjjEjPHgJxc1tiUz11weqRTUoh0NjRgSZUgZOEXdxqZHV0X3DSFX6cNfxWeqOH%2BaBIvFipAAq0ETuKx3ulUdHgYvwpVC16CURTCOgoXABjqkAXw15xZGGaW5im1T%2FEftx40t235y0CtNpnTOvPBENzw917%2BB1RH5bbEx1SsnsWmBmHiulOe27vRvOw52AuL5TDLolwTMWPqT5slN7fciKkMxTa15F5XMYuColX0rVs7VoOgtgR2iNj90fX5zibgjvFcjx8y7MGvXwIJShx73k3gBO87Vy3l8ruHDPAxztIUPzUQhBm7LqY0D5AcIXec2Y0t1SOv5&X-Amz-Signature=6b5097bc21988a0a2d00934e15c3939af9b1515134ceefe1d6ae80d60582d4a2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MRIUIAD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4W9WHNnMPDV%2F4ApaEFmCh%2FAQVDW3uxWonW6fcCj%2FdsQIhALKPDjHevatkXYVLJtjzQfQvNmXwwb1BKQsbstob%2Bt0JKv8DCGMQABoMNjM3NDIzMTgzODA1Igy1lZ76UAIBzML9gvcq3APEEVnSmXo729CAFil%2BnFPZWR4Oj%2FjybWfKu6J4apU%2F3ARXBzri2m%2FrORlF9CuuZ8ECYssydnfUPMCB6y%2BGeTjTbUbLEmmFqNU6hM0eYH39WOyJjE%2FU4dAx5VWOr3gHIdbJhWfUBSxPKgdpCw8MchDx9nRhzLe2SoMY6%2B%2FFWACMtoVWGz4BBEy4hpnERfanufRHnGOtF01K7%2Bf3DCDcMvzx%2BbWuNOwb7ufKC1KGkUNU%2BkeAiIIgHuKUGw4nQnQPCJ9Zy5nqBYwl1uB3KUCOa%2BwsDoDWwecZtPtmpfseD74ayhaNSBNLQ7QUrn3gvSImxY6Nn0Tt0v2%2BKdyjoyOwiG2qwt9EmKO8YVXsaayulBNH%2F51pzq8R5C14dzfo%2BGsPjydAH45aT5FlKgqTTW4fMAoO284s2UIz11vRl9BJ62V3LX16WJGptiCwPiTXB6L8RZR069DlJ23R%2BAiUYlhCJoA1xINXwtifWKlHKrLi%2F5phcQqOq8j03LZpOTeLA2DUg7%2FmGW34jRh8tvRKpbasEXi3olvHBjjEjPHgJxc1tiUz11weqRTUoh0NjRgSZUgZOEXdxqZHV0X3DSFX6cNfxWeqOH%2BaBIvFipAAq0ETuKx3ulUdHgYvwpVC16CURTCOgoXABjqkAXw15xZGGaW5im1T%2FEftx40t235y0CtNpnTOvPBENzw917%2BB1RH5bbEx1SsnsWmBmHiulOe27vRvOw52AuL5TDLolwTMWPqT5slN7fciKkMxTa15F5XMYuColX0rVs7VoOgtgR2iNj90fX5zibgjvFcjx8y7MGvXwIJShx73k3gBO87Vy3l8ruHDPAxztIUPzUQhBm7LqY0D5AcIXec2Y0t1SOv5&X-Amz-Signature=da0d833a95c30899d1e21f03f59b81c6adb8ab5be8f64296ac80eb1cde4e3937&X-Amz-SignedHeaders=host&x-id=GetObject)

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
