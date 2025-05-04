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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XKN54VA%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDkoQkP2yQ8NROTQFne15eVvvAOBheM0M2FuuAT0FxdmwIhALlT7EYqPfA1kNx8qH0AeEiHzkDERt7skpensd3J8TtoKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzTc0DHosXugXGfxoq3ANxdzGVm1zeHvrNAEG6lrpcQd1u6ePmzje3U5zV7PjYbHQXK8hhiFFYIPnPskwn5JgOJAP4V%2FhspUU8W5msZmecWTyxALRQ0IU9rCa8WFH92%2B%2Fnm2zkMihwqOx9jPlAc75fy4ZrVZH4C8H4AsdPhWGXqp6jhyulaOchupVvDmPD6ld9KqfI1XeJvhzpfWpNKGTPpFxGsQkYWFlZNbCOBNDXZw8t8Mt2da1wpXXTlAv7ERURfdrNJI5KPmsmLzrWm2XcRhpn%2F1V%2FgtmxZbXb%2FOykqN6MBsPANaKD6VtIR6vwndsWR8cTAIFQxRHK7lCBTxqCrGRazMWfej5c3j%2BhDMmR4SS1%2FJvhwb26R8HsT6xVhztGSjYdhCepAUTXCsFO%2Bqe5%2BVr53sO5zEcKSMLSncgX9w%2B326h7ksTr062znJvdqq6C8OrzVvcotS8y6vxVFQgAVHqJwwKmLV4QRqAD6gWBRC1m2uU4%2F%2B03%2BcrjQBY7NJmK%2BdTa7GcJUszNVZKczfYCFL6U39FlDbEOIzJvWE0uUraDm9Z%2FjD%2Bf1gIIho6XxcJ%2B8Sy5cjzc74Z%2BptAAfWHwmNuZN2pC3q0PMLBgNac4d5bX47vd6WKg8fbC4TGOW9FuCHb4IluBTGS0ADCc8drABjqkAX9ZUPmqJhfKcm9XVbDZ%2BJj1Ru3ZehVfwJYH748vak82%2BW%2BdISKcfYXQyx7U%2F6NwE3VEaXUQkMhdEZtPiOsT4QNWI4oH4Nf9cbbETgrCftN67vS6fMG%2FM8xhStfE4KwVlVvO3enrcaM6RNLzdpIexDJrqkhmKdFImOsHuiMxCwpfml7TOJbrzytgG3x3N3ICO98oh22dbdPH7xbz%2BXwNgHB8ZeoM&X-Amz-Signature=a4f17ee37a633593fa93c392c8a3b9a94db196c3ecedda4dfc3c75543b88a440&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XKN54VA%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDkoQkP2yQ8NROTQFne15eVvvAOBheM0M2FuuAT0FxdmwIhALlT7EYqPfA1kNx8qH0AeEiHzkDERt7skpensd3J8TtoKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzTc0DHosXugXGfxoq3ANxdzGVm1zeHvrNAEG6lrpcQd1u6ePmzje3U5zV7PjYbHQXK8hhiFFYIPnPskwn5JgOJAP4V%2FhspUU8W5msZmecWTyxALRQ0IU9rCa8WFH92%2B%2Fnm2zkMihwqOx9jPlAc75fy4ZrVZH4C8H4AsdPhWGXqp6jhyulaOchupVvDmPD6ld9KqfI1XeJvhzpfWpNKGTPpFxGsQkYWFlZNbCOBNDXZw8t8Mt2da1wpXXTlAv7ERURfdrNJI5KPmsmLzrWm2XcRhpn%2F1V%2FgtmxZbXb%2FOykqN6MBsPANaKD6VtIR6vwndsWR8cTAIFQxRHK7lCBTxqCrGRazMWfej5c3j%2BhDMmR4SS1%2FJvhwb26R8HsT6xVhztGSjYdhCepAUTXCsFO%2Bqe5%2BVr53sO5zEcKSMLSncgX9w%2B326h7ksTr062znJvdqq6C8OrzVvcotS8y6vxVFQgAVHqJwwKmLV4QRqAD6gWBRC1m2uU4%2F%2B03%2BcrjQBY7NJmK%2BdTa7GcJUszNVZKczfYCFL6U39FlDbEOIzJvWE0uUraDm9Z%2FjD%2Bf1gIIho6XxcJ%2B8Sy5cjzc74Z%2BptAAfWHwmNuZN2pC3q0PMLBgNac4d5bX47vd6WKg8fbC4TGOW9FuCHb4IluBTGS0ADCc8drABjqkAX9ZUPmqJhfKcm9XVbDZ%2BJj1Ru3ZehVfwJYH748vak82%2BW%2BdISKcfYXQyx7U%2F6NwE3VEaXUQkMhdEZtPiOsT4QNWI4oH4Nf9cbbETgrCftN67vS6fMG%2FM8xhStfE4KwVlVvO3enrcaM6RNLzdpIexDJrqkhmKdFImOsHuiMxCwpfml7TOJbrzytgG3x3N3ICO98oh22dbdPH7xbz%2BXwNgHB8ZeoM&X-Amz-Signature=2a6f9d7660c9683e4db94eb0564c6650b3c1987d02629fc55ee442c4804b7740&X-Amz-SignedHeaders=host&x-id=GetObject)

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
