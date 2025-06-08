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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGFWOK5%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCQOEGLYCaVEkv4UXDcxaWs7xpgPtSwZL10megPcA4uAIgBTiZRihgXi1dpK8laSwdRq5pGskcsiakxmBpVQ2ARU4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmz9PCFTnZEWoht0CrcA3fQWK08idAj0s2RIsa8Z02kzFspsrOBKHqzXazgjh8RNgevBOfsy6sRug0uJTadQpp1HAVBiCpjM4NNyIEV0dn9GjZUhz5eNyWD4O%2Fxupwcr4o%2BGphyuyYAaLSPeV3WORVOh9Zhjpx5YYW9ydPpTOCftXVmew%2BFJduLSP1ulJdZmMmVjfaguxuIjuO0Gkp0csdjZyalN3mH6y6uu2yzH%2F%2Bkzrp5z%2FwuVh5H2pWeKDCiIv88KP8vxhxCqE8n%2F0S%2F1uAGq33nPX9Z9zHmnSobggWaEdwT0xXmRQxfr%2F%2B8qZ2ESfUEcnVhwNTtj8Y49RcyzjFJ0IXUWqeaiPa4d3EbfmP2HfUnZzG%2F8H3TCFZfhYE9mfQX7byPNi1qYwpJKfqALo4G3l1vLceZ5mAygCDqgWC%2BQk7izOoMoJueHW68Q3G3gIHqp4t%2Fs17%2FjM%2FDIYZJOz3lLHMs22NiqPq3sEN6%2BzwrCUtKjJMaDJ1tuHauDPNHISUcdme0G5lGgSuXgXjeq1GZrqkbsOhOr%2FBNGiU371opWhJqBN28KbViCldmbj3CptwuQHMLf06doGbEPyUc2PSCYDrbjZrOgbDp3ITfJS8Wm8i4kaSA53Lg9N7sTUuBqbKXMxOm%2BqjMtKYWML%2Bck8IGOqUBH9zn8XieePFTEY6BPoBxrJsjKF8Oqlb5yoGH5g7jmmnYxJZ38VO11CCYefjrGhilFNhsJ2RiMYOj6e%2F7VSUJC4V%2FJ4H1rUN8prH4RXEE6ElaR1kjHv9H5VhXlt1L%2B9e5gjlHGvl34giBeyYdzUmNHQ4RP0dfI5O752YfUnnapCQ5N9b623y8YMf9oCz%2FbnceXkWKrmq0d49qj8bHDKmy95nOvAJj&X-Amz-Signature=f0f22e1c34caf5654ed4ca777ffc36502b25e376ea5bb9e48d21d9223eacf4c4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGFWOK5%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCQOEGLYCaVEkv4UXDcxaWs7xpgPtSwZL10megPcA4uAIgBTiZRihgXi1dpK8laSwdRq5pGskcsiakxmBpVQ2ARU4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmz9PCFTnZEWoht0CrcA3fQWK08idAj0s2RIsa8Z02kzFspsrOBKHqzXazgjh8RNgevBOfsy6sRug0uJTadQpp1HAVBiCpjM4NNyIEV0dn9GjZUhz5eNyWD4O%2Fxupwcr4o%2BGphyuyYAaLSPeV3WORVOh9Zhjpx5YYW9ydPpTOCftXVmew%2BFJduLSP1ulJdZmMmVjfaguxuIjuO0Gkp0csdjZyalN3mH6y6uu2yzH%2F%2Bkzrp5z%2FwuVh5H2pWeKDCiIv88KP8vxhxCqE8n%2F0S%2F1uAGq33nPX9Z9zHmnSobggWaEdwT0xXmRQxfr%2F%2B8qZ2ESfUEcnVhwNTtj8Y49RcyzjFJ0IXUWqeaiPa4d3EbfmP2HfUnZzG%2F8H3TCFZfhYE9mfQX7byPNi1qYwpJKfqALo4G3l1vLceZ5mAygCDqgWC%2BQk7izOoMoJueHW68Q3G3gIHqp4t%2Fs17%2FjM%2FDIYZJOz3lLHMs22NiqPq3sEN6%2BzwrCUtKjJMaDJ1tuHauDPNHISUcdme0G5lGgSuXgXjeq1GZrqkbsOhOr%2FBNGiU371opWhJqBN28KbViCldmbj3CptwuQHMLf06doGbEPyUc2PSCYDrbjZrOgbDp3ITfJS8Wm8i4kaSA53Lg9N7sTUuBqbKXMxOm%2BqjMtKYWML%2Bck8IGOqUBH9zn8XieePFTEY6BPoBxrJsjKF8Oqlb5yoGH5g7jmmnYxJZ38VO11CCYefjrGhilFNhsJ2RiMYOj6e%2F7VSUJC4V%2FJ4H1rUN8prH4RXEE6ElaR1kjHv9H5VhXlt1L%2B9e5gjlHGvl34giBeyYdzUmNHQ4RP0dfI5O752YfUnnapCQ5N9b623y8YMf9oCz%2FbnceXkWKrmq0d49qj8bHDKmy95nOvAJj&X-Amz-Signature=4bc05cdead6ecdd83414ca01871f8a0b75a44639fa79295b809215a04bede96d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
