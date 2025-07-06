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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEJS3QW%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCEsUTwZgqxqq%2F0Yh5tYc4eO82E%2FC1eC7L%2FfQ9HctEmRQIhALtIWj0UqqI0rth3WpvUPpVyQbZbiWKRDgr%2F47IRMlKAKv8DCF0QABoMNjM3NDIzMTgzODA1Igws2tXY0EcSOFEoGTEq3APz8%2B0Marwkn1q%2BKXKHfwnzXhALrnkScRBwfvB81gvgtgMiOqiKhwj2RphH4Pjv6egz6DkxJX1yENFId6kJnE5n9fNq651Hp3uU65xqu7Z1%2B5%2FhX%2BPYHlH5teuSMwBhbUCPk2XXVyCRMHqMqr3zMrieumULQ0q3n0s5Vxw0VAubXyG8WAUABQWZjAt6pj%2FByROkf4H0pRbVP1ePN%2Flg8Yr%2F2f5nIK%2BdH0f%2FGWLDrAHdKNPtRlBplKeG08DQkI54IX%2BaejTn4mzeakm2w1KlmTwcASnmAJr1V381rT1QaeaOxtaQZRL7aBO13QfCM%2F2bRI%2FPLr5n4omR51c51a9FCAbuyhZ9AFlRoUfTlPxMvOSK%2Bj1zySDEN4lp%2FDWCFhJvolWwAlFjWHC6rljiupvoUVf%2BSvYxgYNzWWnH5AYkobnzWJR7acMEP%2BE4XjXsytGPcMnFDKnFcydwP0goGPJYYQAgukjdDHox3Ijqku2uQoeyD9goDtVBiIwSx6OKTeLZb6%2ByecZBzwJoq4S0SGlN0p5Wg50CL33BezuQLq8HAVz7dE%2FGmkCVWhACY7fHcH2kP1MyTobMOKevEncSFzlIB9kEVF1YpHYNiPtPGqij%2B0We3r5IKGHz2qYQZGfVOTCRyqnDBjqkAU4qPTQmDxWumyUs67umZ0RQsGR6xBahY22Vz4sZsKD2hMVunteZ8z4LgZIWDct%2FPUZwlmvgyT3j0JUQM26NE0cY1eWR9ZhIi26k%2BV6s5HC3lA92%2B%2BgS2fYgNkZKY%2FgD6w1hdukowsWBlcuoEMbJp6lJGrHNGeiaEoOkq1NwHIN%2F7v2wWr1GIhRmNoUy2xIBcX8xdxb6%2Fbj2r%2BFrnIE2NgqKMoB5&X-Amz-Signature=db2934c8e30233bac5f92a9740a2a3c5bcef51e1a10a6f2d61ec95e5bbd8ee4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEJS3QW%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCEsUTwZgqxqq%2F0Yh5tYc4eO82E%2FC1eC7L%2FfQ9HctEmRQIhALtIWj0UqqI0rth3WpvUPpVyQbZbiWKRDgr%2F47IRMlKAKv8DCF0QABoMNjM3NDIzMTgzODA1Igws2tXY0EcSOFEoGTEq3APz8%2B0Marwkn1q%2BKXKHfwnzXhALrnkScRBwfvB81gvgtgMiOqiKhwj2RphH4Pjv6egz6DkxJX1yENFId6kJnE5n9fNq651Hp3uU65xqu7Z1%2B5%2FhX%2BPYHlH5teuSMwBhbUCPk2XXVyCRMHqMqr3zMrieumULQ0q3n0s5Vxw0VAubXyG8WAUABQWZjAt6pj%2FByROkf4H0pRbVP1ePN%2Flg8Yr%2F2f5nIK%2BdH0f%2FGWLDrAHdKNPtRlBplKeG08DQkI54IX%2BaejTn4mzeakm2w1KlmTwcASnmAJr1V381rT1QaeaOxtaQZRL7aBO13QfCM%2F2bRI%2FPLr5n4omR51c51a9FCAbuyhZ9AFlRoUfTlPxMvOSK%2Bj1zySDEN4lp%2FDWCFhJvolWwAlFjWHC6rljiupvoUVf%2BSvYxgYNzWWnH5AYkobnzWJR7acMEP%2BE4XjXsytGPcMnFDKnFcydwP0goGPJYYQAgukjdDHox3Ijqku2uQoeyD9goDtVBiIwSx6OKTeLZb6%2ByecZBzwJoq4S0SGlN0p5Wg50CL33BezuQLq8HAVz7dE%2FGmkCVWhACY7fHcH2kP1MyTobMOKevEncSFzlIB9kEVF1YpHYNiPtPGqij%2B0We3r5IKGHz2qYQZGfVOTCRyqnDBjqkAU4qPTQmDxWumyUs67umZ0RQsGR6xBahY22Vz4sZsKD2hMVunteZ8z4LgZIWDct%2FPUZwlmvgyT3j0JUQM26NE0cY1eWR9ZhIi26k%2BV6s5HC3lA92%2B%2BgS2fYgNkZKY%2FgD6w1hdukowsWBlcuoEMbJp6lJGrHNGeiaEoOkq1NwHIN%2F7v2wWr1GIhRmNoUy2xIBcX8xdxb6%2Fbj2r%2BFrnIE2NgqKMoB5&X-Amz-Signature=e359027e28cabd79df109db798a2321fce575774ff6360723aaac81306104d83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
