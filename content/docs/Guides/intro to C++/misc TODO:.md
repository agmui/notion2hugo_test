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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DRRE7XN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjoMz5WiKd2Zg3eq9GqudP3FzqzCPylc9VYCB0c4%2FABgIgSokT6xloQ4vW7U2NX3sNhhQTqe72KwRUIrUmrSP0TRAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDAM14LqWNDubHv7lOSrcA%2F%2FQE5AmwGNcwYHFgHPbqVBL95olrSWCP%2BAnQSNtSqIK6rNQHlVRF%2BmjLq54cPrAH9lk1d0UkLFnBjLGUZqeA8JLpYlv7nhFLNnUIy3j5O%2FCYEiqj3CKdvqP6PO5t5PKgtFjWvvMUWgLElreo7N6anXvJs6zQIAjLaGO6hv0i%2BCUTQY8rK%2BstW40UPAh5o9OA3oZOiq%2FJDMAJB7FReV1Pa%2BUdhkWhmHNXAlDzhBduLNtuC4WWicmzsKFpvfPpcr%2BSdxW7Ev7YwpV8J0xtAHSm5IPu14S1bY%2Fm33cPme0ard1MVEs2qTN1xjarBS%2FTGi%2F%2FK%2B1hbmOJEqmayblb6DKIzT9RRjRwSZyUPdKsbWSA0Pv0gTWlT%2BDywz8PQrZUhRS3DMdw5tFOkZJoE9czVqD%2BSc5uPCmA%2FV16cj%2FhZN0C9%2FpQTify12aOoGlG%2FghzEXBL4rOBPWyWpIija5QQCpozNNAyIzIzE8EqcGlhpmPwkcKyJG%2BsOD7ohf78hDqBT4Cor49NNtCIoBbWS1kG7r8K2svXCDtRTxaWMAtuRhaaTRYmna6ItBgHXRmqLopnLQT%2FzSIovJUqV%2FR8SZuEXL64SpCTCskoiqsmQwXCPO644h1Nv0CU6v02KnQn62pMNPn7cAGOqUB3CifrIjbuGsaYrGcczcJwYP3dxoGBWy9xqmJwONCvvIXM0y9HobeGDMKy79yNLUvGgNg80fZVnrw2njSFeCSx6s8Fh0T78ADW5d9%2FFkB%2FJ60mWuYxi9hHoPhoryLqGvUgeVooMTutemFXN4eknyQIFvZVHBgLVT5XVhhivuMYn1mlcpdwkB2kcrSjodYymxPOkF8ASAZDb5pob%2Bwbx3grb9EvUUG&X-Amz-Signature=141687819e13b25eea78676b035084abd2b5ada496d9ffd48df959574ea36e67&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DRRE7XN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjoMz5WiKd2Zg3eq9GqudP3FzqzCPylc9VYCB0c4%2FABgIgSokT6xloQ4vW7U2NX3sNhhQTqe72KwRUIrUmrSP0TRAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDAM14LqWNDubHv7lOSrcA%2F%2FQE5AmwGNcwYHFgHPbqVBL95olrSWCP%2BAnQSNtSqIK6rNQHlVRF%2BmjLq54cPrAH9lk1d0UkLFnBjLGUZqeA8JLpYlv7nhFLNnUIy3j5O%2FCYEiqj3CKdvqP6PO5t5PKgtFjWvvMUWgLElreo7N6anXvJs6zQIAjLaGO6hv0i%2BCUTQY8rK%2BstW40UPAh5o9OA3oZOiq%2FJDMAJB7FReV1Pa%2BUdhkWhmHNXAlDzhBduLNtuC4WWicmzsKFpvfPpcr%2BSdxW7Ev7YwpV8J0xtAHSm5IPu14S1bY%2Fm33cPme0ard1MVEs2qTN1xjarBS%2FTGi%2F%2FK%2B1hbmOJEqmayblb6DKIzT9RRjRwSZyUPdKsbWSA0Pv0gTWlT%2BDywz8PQrZUhRS3DMdw5tFOkZJoE9czVqD%2BSc5uPCmA%2FV16cj%2FhZN0C9%2FpQTify12aOoGlG%2FghzEXBL4rOBPWyWpIija5QQCpozNNAyIzIzE8EqcGlhpmPwkcKyJG%2BsOD7ohf78hDqBT4Cor49NNtCIoBbWS1kG7r8K2svXCDtRTxaWMAtuRhaaTRYmna6ItBgHXRmqLopnLQT%2FzSIovJUqV%2FR8SZuEXL64SpCTCskoiqsmQwXCPO644h1Nv0CU6v02KnQn62pMNPn7cAGOqUB3CifrIjbuGsaYrGcczcJwYP3dxoGBWy9xqmJwONCvvIXM0y9HobeGDMKy79yNLUvGgNg80fZVnrw2njSFeCSx6s8Fh0T78ADW5d9%2FFkB%2FJ60mWuYxi9hHoPhoryLqGvUgeVooMTutemFXN4eknyQIFvZVHBgLVT5XVhhivuMYn1mlcpdwkB2kcrSjodYymxPOkF8ASAZDb5pob%2Bwbx3grb9EvUUG&X-Amz-Signature=0af6b75ce7cad51d1144fb8e8f0728ffd4b5d622bf5668f9410e00be98099d39&X-Amz-SignedHeaders=host&x-id=GetObject)

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
