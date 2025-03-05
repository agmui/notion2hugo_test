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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLANVZVJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICFXutYLtwlhVJec7ib1G1XK6rcUWNh7gfp%2BohMvU7qQAiBT2BH%2BQZIc6n%2F2846vPdZ5%2BLcu8BfXQfjYtNvOE5hgLSr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMFr9B7q8nm%2BKEx6HhKtwDNuCwmc29vVRZDGoAX4e%2FMZ6V4NMoR8F6LZZNZW0wtHmDNc%2B7WA6aqKfGN8ZCv5hGH4JmcaIx2e2NRdAmP5T77qep41%2FIQaQN2zaT1euJj1c0WBS%2F756FB86zuORobbGFV%2BWIzPWNdNBvsmGWjZyd37HWonJTK4kQmNNYaCEMAlzv%2BMEqCyyuyfGv0rtNq5%2BFRv6ENP3YSqFJmE9QXjHVbDLXdeTb%2Bs8xAui%2BN7k%2FE26%2BHzLum78eoJu3qvFYtR5c1BE5U0Tlr7erKcUubWhIw%2Bw0TS%2FO1ia2%2B%2F1M7WbfMshDo0xzBykiWct19TDJQPNPPxjdwmFJYG0lZmWbumcI0PHYYtTLF3L0NxLUoBgJxOFd%2FT%2Fg7%2FW4DMi9k4mSwCmeJl2vzAOYkdLPAJxIzt9dgyr3JnUkTkgwFy2F7U0xSBryuY%2FeM3wpw1g12xW6PGVjFxHPsUvkm1DAK3Aj38HeDN3yATGvHSbpL91E2XenYW5mavU932y%2FdRZ4aljT3tLSRb7XuNy7xsGuT24p4OcwYt4MVLlnUTWyZvBUoc2%2FeI6koqiM2kQS83O5Y%2B4kzOa9fgckb8auuIM9Yhnj9PfH0vXByQs%2BsAcGCf0WJjsXh7U47062oULVPaNsKmUw8oGjvgY6pgFlrljRsQT98wGsUguOYGlD0DE2wFvLB3TuOtdjdgbD9gFy8yGOqPS4evPD1L%2B0LDnSWhGML9DOgHvl9xk2UanGs%2BEDworSrA8tEbrBIw%2BHcjPl4d6z%2FVg7OQiIT5Ey6eyHOreiDGocanERlpLPVZdfgMQW%2Fvoe%2BmXvtAGEVS1wFkTW2WRrPOwEHM4mdH476lhl72tPHheGj6Vd4jTacF8e%2FU0aSxNb&X-Amz-Signature=d78c6ed869b73b71ca57d18bb1aa8ab3c6e2f256e4d4a193fea0237a0b453ae0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLANVZVJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICFXutYLtwlhVJec7ib1G1XK6rcUWNh7gfp%2BohMvU7qQAiBT2BH%2BQZIc6n%2F2846vPdZ5%2BLcu8BfXQfjYtNvOE5hgLSr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMFr9B7q8nm%2BKEx6HhKtwDNuCwmc29vVRZDGoAX4e%2FMZ6V4NMoR8F6LZZNZW0wtHmDNc%2B7WA6aqKfGN8ZCv5hGH4JmcaIx2e2NRdAmP5T77qep41%2FIQaQN2zaT1euJj1c0WBS%2F756FB86zuORobbGFV%2BWIzPWNdNBvsmGWjZyd37HWonJTK4kQmNNYaCEMAlzv%2BMEqCyyuyfGv0rtNq5%2BFRv6ENP3YSqFJmE9QXjHVbDLXdeTb%2Bs8xAui%2BN7k%2FE26%2BHzLum78eoJu3qvFYtR5c1BE5U0Tlr7erKcUubWhIw%2Bw0TS%2FO1ia2%2B%2F1M7WbfMshDo0xzBykiWct19TDJQPNPPxjdwmFJYG0lZmWbumcI0PHYYtTLF3L0NxLUoBgJxOFd%2FT%2Fg7%2FW4DMi9k4mSwCmeJl2vzAOYkdLPAJxIzt9dgyr3JnUkTkgwFy2F7U0xSBryuY%2FeM3wpw1g12xW6PGVjFxHPsUvkm1DAK3Aj38HeDN3yATGvHSbpL91E2XenYW5mavU932y%2FdRZ4aljT3tLSRb7XuNy7xsGuT24p4OcwYt4MVLlnUTWyZvBUoc2%2FeI6koqiM2kQS83O5Y%2B4kzOa9fgckb8auuIM9Yhnj9PfH0vXByQs%2BsAcGCf0WJjsXh7U47062oULVPaNsKmUw8oGjvgY6pgFlrljRsQT98wGsUguOYGlD0DE2wFvLB3TuOtdjdgbD9gFy8yGOqPS4evPD1L%2B0LDnSWhGML9DOgHvl9xk2UanGs%2BEDworSrA8tEbrBIw%2BHcjPl4d6z%2FVg7OQiIT5Ey6eyHOreiDGocanERlpLPVZdfgMQW%2Fvoe%2BmXvtAGEVS1wFkTW2WRrPOwEHM4mdH476lhl72tPHheGj6Vd4jTacF8e%2FU0aSxNb&X-Amz-Signature=59dbec2dc5ca5a9d1a96bd9ada04f25b1fd6ebbdef0e012b2c13b9ef4e3357ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
