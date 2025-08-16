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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEKORCCO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDZYfb0PYN9PBgqU018Sw2TkYf3FdNenXY6QCRHVCMZfwIgXBTcIhoIgfeHjR2CRnB8csGeh88zr2U0%2BCgCDFFdNKwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLA2YBsA8GExkYc0ryrcA1EY8xWeSyZXJNxsHg7CV0lUvlaH6TMfrIGDoguIWcjrjdCSWaGq4Ctq%2BkqYtUB%2B5ORL3mVZwBlxe1zRQIKPRo30ufz64B5c77dgAlWDPmrwQdJMCqJPTWiKCsddoivrhL4mTw7Go5RzCvZH89jhaS0DE1NFx6MoUbOD%2BIqx4K%2BdgOIuc1XaYnnAYTp0jcSY%2Bn2sZA802epadRcAN3MkPJI9Ma39R2NxOMtUO%2FPpbDbPyYuiU8xfcuXpeev04ACIPpT%2BfLYSS0BjBMxtnAVeVy7fvssiFibPwIqpYORAvua2k6OpfgoZgC8lXN6qlomKSDtZ4DeNLHpD23zy0vQr6zvVVyro7QhjGtCTXOphVoeSBANzHxImWTdnphu8eNZ5Ls3NDIIUSEGZvLeIXcDsF4wqH%2FqJikPI9wfO0Jf9EQxAcdnEpIV0wCOLIn4VZEWJvAL7ivg94cMtbPC6kL4Th1uK1VLGJwcnytZwDzPH16MYrO8Y3ftj2Lu5zqa%2F6df934h1cpbmsPbOaa%2Br75EhbPjaE5sjLV84aT3HahWMBPafNRDu8SoAdnMlPCPW3h5UZbYYxO2lQwq7LAB2h7GGf6098hCM2PtkeuThmJ5oTrQBHFEZdEBoKbqyKNawMKCLgMUGOqUB%2FJWnElU4B9nugGoIXV%2B1h7OHb6Z%2BkgTR6Rst%2Bqv0yQ6pMRW%2FdJxWtgASEMXkAo5ZuVNvLPtPuEM57bpJg8gMuZWT7CdsCSVOaJQxGIHH2ACN8Q8kFXPsUHytmM4ER08EKXTxekZwftvFmnr5nsr9YLHFJnWzG%2BAlMq%2FkLLlEDDEfD4qVJRktEQ1RBhKDver3xaxG1DAAJK5stHOm5SEK0blt6Naq&X-Amz-Signature=ea83dcc7a285331b1875432264f526422c7fc54e785aa8dd0e8583bda096f5c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEKORCCO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDZYfb0PYN9PBgqU018Sw2TkYf3FdNenXY6QCRHVCMZfwIgXBTcIhoIgfeHjR2CRnB8csGeh88zr2U0%2BCgCDFFdNKwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLA2YBsA8GExkYc0ryrcA1EY8xWeSyZXJNxsHg7CV0lUvlaH6TMfrIGDoguIWcjrjdCSWaGq4Ctq%2BkqYtUB%2B5ORL3mVZwBlxe1zRQIKPRo30ufz64B5c77dgAlWDPmrwQdJMCqJPTWiKCsddoivrhL4mTw7Go5RzCvZH89jhaS0DE1NFx6MoUbOD%2BIqx4K%2BdgOIuc1XaYnnAYTp0jcSY%2Bn2sZA802epadRcAN3MkPJI9Ma39R2NxOMtUO%2FPpbDbPyYuiU8xfcuXpeev04ACIPpT%2BfLYSS0BjBMxtnAVeVy7fvssiFibPwIqpYORAvua2k6OpfgoZgC8lXN6qlomKSDtZ4DeNLHpD23zy0vQr6zvVVyro7QhjGtCTXOphVoeSBANzHxImWTdnphu8eNZ5Ls3NDIIUSEGZvLeIXcDsF4wqH%2FqJikPI9wfO0Jf9EQxAcdnEpIV0wCOLIn4VZEWJvAL7ivg94cMtbPC6kL4Th1uK1VLGJwcnytZwDzPH16MYrO8Y3ftj2Lu5zqa%2F6df934h1cpbmsPbOaa%2Br75EhbPjaE5sjLV84aT3HahWMBPafNRDu8SoAdnMlPCPW3h5UZbYYxO2lQwq7LAB2h7GGf6098hCM2PtkeuThmJ5oTrQBHFEZdEBoKbqyKNawMKCLgMUGOqUB%2FJWnElU4B9nugGoIXV%2B1h7OHb6Z%2BkgTR6Rst%2Bqv0yQ6pMRW%2FdJxWtgASEMXkAo5ZuVNvLPtPuEM57bpJg8gMuZWT7CdsCSVOaJQxGIHH2ACN8Q8kFXPsUHytmM4ER08EKXTxekZwftvFmnr5nsr9YLHFJnWzG%2BAlMq%2FkLLlEDDEfD4qVJRktEQ1RBhKDver3xaxG1DAAJK5stHOm5SEK0blt6Naq&X-Amz-Signature=eae0e51ba748e0d3fd86ed8e3bd3351626fa2fd079b23e26ab921b78cba0c861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
