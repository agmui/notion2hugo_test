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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQHNGPDR%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmKeLL9EEJVhrYFy0tAHalBe8nEYCd6siucwtkIiM1TAiAc8beH72oKf1UBpV%2BsZ56i4Rz1oa3z7S5dtRD9DSHWwir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMTIaGjae7Xw9hPIiqKtwDl6r9MIY2ji98X32OROmiLzVnU1McU%2BdbUn1mL87emQYsru8nkjyHdG8LCL4v0MQfVFs%2FX0SUAHLiX7MSl5r67YUTHNVk8e6hWxPkStMNXo00AGbxp7lehMwkHVX8RDT5MZW9JqVqjQqYd7e%2BAm7yjiF9BzrqbH%2B6134Q5shPw2CYThZN7XNYGpBALMwsg%2BbLtwxUMIi4hwQpSTKZIGJZqt5fmh%2FWnIlExd7tPG79fmpY8tfHyPfpHydo7iAvXR%2BVhf2%2BE%2BJTe7fciTpBBjFRS%2FCyyM7VHOw8MivZtUfW%2FQj4whx600RUkVwXNK%2BtgDAJH3Cm0EeYNAV7dApqhxqaaGcliTRWmG9ADmlhaTNtSOs1GPeVgWCfW1VPcipHfu%2Fa17mjSKutDAIdUR797XvxNaIDkRfda1EWTPYknW3LNQ3Dw%2B8PKXEUBpFNS0IvOBYnHlynuigIC6r8g%2FU%2BPH0A4Er66z4zpsfpAPyqEi18g7gwsBZv%2BMTC9PWK5QAowlPhPxzqcOsyJfEOS9q6hRwmazbGUqHaWaVgzDvlWzEQUltFOroQ%2Fa4Ur%2Fi8Ns2ps1LM8wJjSjHC%2FJqGbVm%2Bo7MCN6BLz36NimZvMv8LiSmdEw%2BWs8Say8PoiZEIRAUwitf8vwY6pgH6RSm68q8OPqU6hFXJi6fUvQh3CcWshUJ%2F%2BrmI00i%2Bub0KglrOICrupW1Wka0LoZ8bsQonedeR5P2wtXKqwlEbPOuxZbQO%2B2J9IMcC7H4b5QgsdwRtDnaiEkXWfuMoZatGxFmfwXaSmZcOtuV%2FjCjfOS1B6wUR%2FnGnSEMlEuLHFxrWyFJHUdUpxZ%2BvFaQ%2B1veIyerdjtDPr%2BK%2BtW7UlPfEewYbZOus&X-Amz-Signature=f4d2188d78e1daf04573c254f4d0824817c76daaab735b0c52df8eb18be635da&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQHNGPDR%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmKeLL9EEJVhrYFy0tAHalBe8nEYCd6siucwtkIiM1TAiAc8beH72oKf1UBpV%2BsZ56i4Rz1oa3z7S5dtRD9DSHWwir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMTIaGjae7Xw9hPIiqKtwDl6r9MIY2ji98X32OROmiLzVnU1McU%2BdbUn1mL87emQYsru8nkjyHdG8LCL4v0MQfVFs%2FX0SUAHLiX7MSl5r67YUTHNVk8e6hWxPkStMNXo00AGbxp7lehMwkHVX8RDT5MZW9JqVqjQqYd7e%2BAm7yjiF9BzrqbH%2B6134Q5shPw2CYThZN7XNYGpBALMwsg%2BbLtwxUMIi4hwQpSTKZIGJZqt5fmh%2FWnIlExd7tPG79fmpY8tfHyPfpHydo7iAvXR%2BVhf2%2BE%2BJTe7fciTpBBjFRS%2FCyyM7VHOw8MivZtUfW%2FQj4whx600RUkVwXNK%2BtgDAJH3Cm0EeYNAV7dApqhxqaaGcliTRWmG9ADmlhaTNtSOs1GPeVgWCfW1VPcipHfu%2Fa17mjSKutDAIdUR797XvxNaIDkRfda1EWTPYknW3LNQ3Dw%2B8PKXEUBpFNS0IvOBYnHlynuigIC6r8g%2FU%2BPH0A4Er66z4zpsfpAPyqEi18g7gwsBZv%2BMTC9PWK5QAowlPhPxzqcOsyJfEOS9q6hRwmazbGUqHaWaVgzDvlWzEQUltFOroQ%2Fa4Ur%2Fi8Ns2ps1LM8wJjSjHC%2FJqGbVm%2Bo7MCN6BLz36NimZvMv8LiSmdEw%2BWs8Say8PoiZEIRAUwitf8vwY6pgH6RSm68q8OPqU6hFXJi6fUvQh3CcWshUJ%2F%2BrmI00i%2Bub0KglrOICrupW1Wka0LoZ8bsQonedeR5P2wtXKqwlEbPOuxZbQO%2B2J9IMcC7H4b5QgsdwRtDnaiEkXWfuMoZatGxFmfwXaSmZcOtuV%2FjCjfOS1B6wUR%2FnGnSEMlEuLHFxrWyFJHUdUpxZ%2BvFaQ%2B1veIyerdjtDPr%2BK%2BtW7UlPfEewYbZOus&X-Amz-Signature=fe44efd5fae7abe471be7d429321174e4b456d62319f2a75def37a3b2ffccade&X-Amz-SignedHeaders=host&x-id=GetObject)

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
