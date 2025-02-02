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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DNGKOQE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv%2Fgz9li2G1DhnfIZyAh34FP%2BUNElYmwbUR8tNq4ctkwIgWz9Y3Bz2z5GGMFNAFqCnHEf4VTs1DS2CPZQ%2FhoGX1PIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0ODL3OrNwlnKQ%2B3CrcA0RXgNPFmXMde4ihAo9Rb3spwPMkcsdkaM5jHnrppwyNKIU11hvw%2FNTo2cRwsqdsO079C3poh%2BqOyN46chPzTNRUs8IdtxQ6ii9caVxRUXGoB5f%2BLS13mgehicpUYj7aiq19I41YfETeD0L8YGczXIrNhbD%2FPhNssCDM0MMvKnO2vJmMk5AVwm5GlXNJ6uWKLK6jNI3gjAfL4YO7HTLDu%2FllSsIdOLNqiSpj6dullBYXUMHRyV9J%2BQ65ba%2BvSylnbrilntUZWpKT0OPqrVUj2KrtHaBZVm164yLf%2BEP0NdzPwxgP07Reokix8FImfiPHaJOcgLLY7Nt89VTa2CLbpC8CqUqWIVG3FedC6nJFjcZAPb78JWAsJ21X%2F8DGLKk5SmaIzx3J2U38ByaSYAtIc7YzA1G1hZIRZKNR9bxeba16LPxBNHrxLRRo7Swcd9aPzfoJTqnJHLcvzv6lIs4kDKg1rMVLvSO11aWxYMH3yCPSnz10%2FUrdoC9AMZR7sJZIFPXta3MFCMkkA%2BiUtSIB0RoxMbSemMG%2FH1HMRHJsdM2b6wEgZQa4CBzRictVht5dE6NweFDXg55oEKG%2B7S2IxnOMfjOgz3AZ310TxdDw5b0VytunBQMThlwnfAvHMJjz%2BrwGOqUB7RK9vFczMl4dWpOH6zDHOPU1K2Ni52ZWQuUgCqTf%2FDSL%2Bn3ApyJq4FpXfJQ2ePZskyEzHfF8xk4O25yBiCXqXk%2FvdvA4JJ074y1jPlK52M4D2drrNs%2BoFcxt35axQ8g1SF8ve6KznTjPv6M%2BBbbo6xkdUsod7SSw%2BjQAkgfNhRCtWT9Y4ySIhIw1riVpH25oL2wAp6iv5pOwM2Lfaa7c%2FZwFzkWs&X-Amz-Signature=23286175709ce2de2f20c75c4df6147b80d7d3f7f418e457e0eddbbd3ed59543&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DNGKOQE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv%2Fgz9li2G1DhnfIZyAh34FP%2BUNElYmwbUR8tNq4ctkwIgWz9Y3Bz2z5GGMFNAFqCnHEf4VTs1DS2CPZQ%2FhoGX1PIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0ODL3OrNwlnKQ%2B3CrcA0RXgNPFmXMde4ihAo9Rb3spwPMkcsdkaM5jHnrppwyNKIU11hvw%2FNTo2cRwsqdsO079C3poh%2BqOyN46chPzTNRUs8IdtxQ6ii9caVxRUXGoB5f%2BLS13mgehicpUYj7aiq19I41YfETeD0L8YGczXIrNhbD%2FPhNssCDM0MMvKnO2vJmMk5AVwm5GlXNJ6uWKLK6jNI3gjAfL4YO7HTLDu%2FllSsIdOLNqiSpj6dullBYXUMHRyV9J%2BQ65ba%2BvSylnbrilntUZWpKT0OPqrVUj2KrtHaBZVm164yLf%2BEP0NdzPwxgP07Reokix8FImfiPHaJOcgLLY7Nt89VTa2CLbpC8CqUqWIVG3FedC6nJFjcZAPb78JWAsJ21X%2F8DGLKk5SmaIzx3J2U38ByaSYAtIc7YzA1G1hZIRZKNR9bxeba16LPxBNHrxLRRo7Swcd9aPzfoJTqnJHLcvzv6lIs4kDKg1rMVLvSO11aWxYMH3yCPSnz10%2FUrdoC9AMZR7sJZIFPXta3MFCMkkA%2BiUtSIB0RoxMbSemMG%2FH1HMRHJsdM2b6wEgZQa4CBzRictVht5dE6NweFDXg55oEKG%2B7S2IxnOMfjOgz3AZ310TxdDw5b0VytunBQMThlwnfAvHMJjz%2BrwGOqUB7RK9vFczMl4dWpOH6zDHOPU1K2Ni52ZWQuUgCqTf%2FDSL%2Bn3ApyJq4FpXfJQ2ePZskyEzHfF8xk4O25yBiCXqXk%2FvdvA4JJ074y1jPlK52M4D2drrNs%2BoFcxt35axQ8g1SF8ve6KznTjPv6M%2BBbbo6xkdUsod7SSw%2BjQAkgfNhRCtWT9Y4ySIhIw1riVpH25oL2wAp6iv5pOwM2Lfaa7c%2FZwFzkWs&X-Amz-Signature=d4877dba508aa62f055682d927ae0452094fefdc821afad943643d410ed87eb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
