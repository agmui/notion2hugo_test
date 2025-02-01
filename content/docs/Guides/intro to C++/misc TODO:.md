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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIPKKVJA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMG0uGTzVuUvuojt9Ae31cSQxLfIiCCK8u6rM4x35jFgIgALMOh9JSsggITAq%2BVuLBkRNs6O0vLaqiDrvRWtHQztwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxNXurjD1CLMwmKaCrcA1x9CHQaNUlsI5nCgairWzmU4O7g%2BqrvJKLtxKsycKZ72Y%2F%2B89HQrrJdIv4MmQe1lLkqCy2ofe5kR0bhPsuangB9PfaVTFbq04hRl6yBhh5HLTgNbPDC9iP1wpuvKmvYlULx36r%2BMwC2ANyrdUvJKUhWexuePIaQyJNXIpY2jCBleVzeZD%2Bu7A2hL1T67Mj6EcmKr4YVIiPKmFqp52WmLHgjxCsMT%2F90q%2BaRX%2FCrJGKpgNz%2BMf5J%2F1zJqBbO%2BPKvr%2BBkQ%2F42qe%2BfdztyNfaeMAgJ%2Fuf4jdJsHyUP4ebpACzGK0kxV77%2BRNfX4s7cTOrZlf%2FR9hQjm8fn8CPjaO489Y1NmVKzF8aL5vKqpIubAV1eJR4rX2UdaTyxOV04ZlCeEi%2ByOH4HCku87avucuigyIw6Q2%2BI0VxmZTmX1%2BuQnnQFZDGXvBpTyQe5W%2BIIsmLqkf8O5%2BTB8OMBhzN3hnJQZkVlwvdM7ltQd4dDRJTPLt3JPElJS9DD546G%2Bq8YX%2BzWfYYrNYhB18oIq%2Fnr%2BQTLXfHoii%2FUdW%2BpiWGHR2MLbMmEhWF7qYwhQ%2B0lB2R6mqtpCfTMHkGqUvAm7btray%2B%2BMsP9AucfjWvLNeylW%2B3HMFgBcAMWhzGESr%2F4NGpdMPWy%2BrwGOqUBwcdBHkodKzLOnROc%2BTNV%2FBQhV4dBSzK6IgnfGQXzV7f9FPwivGspTjqiER5nzsGPb1%2Bj3VRGe%2FasYxT4Lr1uRNvDncZ7RXo1gpSOr7lt0C6gExhgqZ075XGC8VW5hB%2FKDZAu%2B%2F9w5WmwCmQyyHR9gGyEZfvxjItblqpqK9%2FqqGzE4AzU3fUH7%2FgSIaeW7JLgSt%2F8sLB3shYJkXUiykZJRl0JmRpQ&X-Amz-Signature=91e1343aa252fa67c478b936bb621d75634c4a6f88fea03959956845b052bef8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIPKKVJA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMG0uGTzVuUvuojt9Ae31cSQxLfIiCCK8u6rM4x35jFgIgALMOh9JSsggITAq%2BVuLBkRNs6O0vLaqiDrvRWtHQztwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxNXurjD1CLMwmKaCrcA1x9CHQaNUlsI5nCgairWzmU4O7g%2BqrvJKLtxKsycKZ72Y%2F%2B89HQrrJdIv4MmQe1lLkqCy2ofe5kR0bhPsuangB9PfaVTFbq04hRl6yBhh5HLTgNbPDC9iP1wpuvKmvYlULx36r%2BMwC2ANyrdUvJKUhWexuePIaQyJNXIpY2jCBleVzeZD%2Bu7A2hL1T67Mj6EcmKr4YVIiPKmFqp52WmLHgjxCsMT%2F90q%2BaRX%2FCrJGKpgNz%2BMf5J%2F1zJqBbO%2BPKvr%2BBkQ%2F42qe%2BfdztyNfaeMAgJ%2Fuf4jdJsHyUP4ebpACzGK0kxV77%2BRNfX4s7cTOrZlf%2FR9hQjm8fn8CPjaO489Y1NmVKzF8aL5vKqpIubAV1eJR4rX2UdaTyxOV04ZlCeEi%2ByOH4HCku87avucuigyIw6Q2%2BI0VxmZTmX1%2BuQnnQFZDGXvBpTyQe5W%2BIIsmLqkf8O5%2BTB8OMBhzN3hnJQZkVlwvdM7ltQd4dDRJTPLt3JPElJS9DD546G%2Bq8YX%2BzWfYYrNYhB18oIq%2Fnr%2BQTLXfHoii%2FUdW%2BpiWGHR2MLbMmEhWF7qYwhQ%2B0lB2R6mqtpCfTMHkGqUvAm7btray%2B%2BMsP9AucfjWvLNeylW%2B3HMFgBcAMWhzGESr%2F4NGpdMPWy%2BrwGOqUBwcdBHkodKzLOnROc%2BTNV%2FBQhV4dBSzK6IgnfGQXzV7f9FPwivGspTjqiER5nzsGPb1%2Bj3VRGe%2FasYxT4Lr1uRNvDncZ7RXo1gpSOr7lt0C6gExhgqZ075XGC8VW5hB%2FKDZAu%2B%2F9w5WmwCmQyyHR9gGyEZfvxjItblqpqK9%2FqqGzE4AzU3fUH7%2FgSIaeW7JLgSt%2F8sLB3shYJkXUiykZJRl0JmRpQ&X-Amz-Signature=ad744fc8ab1143436410d0c0d72297fc3c5d2c9a481c3f6c2a0e862c6e0dcc74&X-Amz-SignedHeaders=host&x-id=GetObject)

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
