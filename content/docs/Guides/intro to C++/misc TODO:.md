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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST3JSOEX%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGigYclxSxcj%2FAmw1jy2s%2BInTi7gQTXmGNfsXp9mbVrQAiEA0t2kHOeDPuLhA3nUV7W6qMVoEQ3rGU05rrNbdfRpvzIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqWiR%2Be23W1yH4puSrcA9ZiEP%2F%2BkUbma9BI6yc%2BDZ7YcEEMACfMc3ZurZ%2FWxjq1yVN02R3DCbqUmJ%2BMIq6Lmnn3jgP6AAjR9F%2B8RTtmmxcW0bz5Dkn4WcmvL4fU0IlJIqZURYZeuQqM0ysb6n%2FCZXVuY84AcaDTMLVXBMLoyerJCrqkK3xzRUYoaMloS9K7wTOlEAljLXdfG8mLSoo10cTz%2Buo0iw0NVkmujmihd0MyYQF1Kd6ICEW8p8Nj1qIVoPoIjiQPpGiakQvmXSPK%2FmEnTEIyo6JhptrapdV9yphllwl3SblaRJXPKc0DhRWxx9P1uIQpkB%2BXNuDPwVkWQogkv8ztybH70mO5xa9fqRYlQm6WqWnsd25734x0olg3kjE0UddDLBCGAJeQi7dCe4apdk01uLeuF1cRKKF5ASvX7%2BrXdRRFvixLvcF4ReRYJgkBlxP1IqxVcoHtf%2BHWQ%2Fvxh1RqF1VwvAzcZubQPCu5vOiBYc1fX26EKAbM0FYJh7lPd3bMWGHuxW56nwiJ4wK8vjSkeg%2FbYcKl%2BRfIyHV9NDVYaOUUaOuM3DerEw5QeJ5qjATB2IXcnx8%2BAAsU08HftUHLt24SrODJco5CF3s8JWqqrH2OHZOZ9dzl6VUKeuqj0vxfxpg9ddpgMPLUhMEGOqUBNbY2ToUNXti0tsTjIL%2FyTf20lqKKH7CtvkIDIWUXN1glQmscWLxu4vDg3GJNKpfZpVVxOIXGNNAlB9neo1UdRv1uyn%2B1fALlUr2Dqw9xryyI55g0z%2BV02e5Es9wYDscq6RdMOR8Wkpd1dGcEeHMGJPQe2DNXHC36eROCjBC848Ss7t2Oh%2FagAg6B43WvuMPhOuJ1KkIREansjlVbtRlbdGSlJzFU&X-Amz-Signature=f76df71721180834bbd755ab70a944e51e3320ee2015db16fcd7df527dcec034&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST3JSOEX%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGigYclxSxcj%2FAmw1jy2s%2BInTi7gQTXmGNfsXp9mbVrQAiEA0t2kHOeDPuLhA3nUV7W6qMVoEQ3rGU05rrNbdfRpvzIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqWiR%2Be23W1yH4puSrcA9ZiEP%2F%2BkUbma9BI6yc%2BDZ7YcEEMACfMc3ZurZ%2FWxjq1yVN02R3DCbqUmJ%2BMIq6Lmnn3jgP6AAjR9F%2B8RTtmmxcW0bz5Dkn4WcmvL4fU0IlJIqZURYZeuQqM0ysb6n%2FCZXVuY84AcaDTMLVXBMLoyerJCrqkK3xzRUYoaMloS9K7wTOlEAljLXdfG8mLSoo10cTz%2Buo0iw0NVkmujmihd0MyYQF1Kd6ICEW8p8Nj1qIVoPoIjiQPpGiakQvmXSPK%2FmEnTEIyo6JhptrapdV9yphllwl3SblaRJXPKc0DhRWxx9P1uIQpkB%2BXNuDPwVkWQogkv8ztybH70mO5xa9fqRYlQm6WqWnsd25734x0olg3kjE0UddDLBCGAJeQi7dCe4apdk01uLeuF1cRKKF5ASvX7%2BrXdRRFvixLvcF4ReRYJgkBlxP1IqxVcoHtf%2BHWQ%2Fvxh1RqF1VwvAzcZubQPCu5vOiBYc1fX26EKAbM0FYJh7lPd3bMWGHuxW56nwiJ4wK8vjSkeg%2FbYcKl%2BRfIyHV9NDVYaOUUaOuM3DerEw5QeJ5qjATB2IXcnx8%2BAAsU08HftUHLt24SrODJco5CF3s8JWqqrH2OHZOZ9dzl6VUKeuqj0vxfxpg9ddpgMPLUhMEGOqUBNbY2ToUNXti0tsTjIL%2FyTf20lqKKH7CtvkIDIWUXN1glQmscWLxu4vDg3GJNKpfZpVVxOIXGNNAlB9neo1UdRv1uyn%2B1fALlUr2Dqw9xryyI55g0z%2BV02e5Es9wYDscq6RdMOR8Wkpd1dGcEeHMGJPQe2DNXHC36eROCjBC848Ss7t2Oh%2FagAg6B43WvuMPhOuJ1KkIREansjlVbtRlbdGSlJzFU&X-Amz-Signature=6dd4e0060bca249c3645ce96bb2998b0d6a9307840317e9be84dc149332ea565&X-Amz-SignedHeaders=host&x-id=GetObject)

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
