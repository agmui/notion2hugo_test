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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKDPFVWF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICk351sfLgMxyTBFxslUwDd0JeG%2BYjuFk5tE%2BXC%2F4oolAiEA86k%2BTjFpNgwQo1KIyoXZMNMkrf9Tk6JjqxEaxjFCjacqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxS8L%2BCgiolmpcicyrcA9akOiCrWwSy1MEBqLhj2HeEXITA23jHpdwfntKHz27StbLdcDm0Lso4dhjjCult0xl5ZJkdMU8s7%2Ft2Kj2WFtc6rOQ97K46kccvnna7VTm4sBoYUdx4H1KZAJDH1u4wcSOX%2B0zxw0gz0P5ruqH167ylAW0LDcJyR6mEqoU3gFMMbkzja8YdfBcb8CBRiUkdtIuNi4nzkaj%2Fzz0rr9yu07pCra0wtwa13Q8RRjpaE39XGdXkQTjy5ksrak67%2BzST%2F4Lzs%2FK18XMDrlQu7s9Z%2BpyhmqAN1VD2VnV%2FCbDedmmNlAoKc2OCopIpcr5c307iPZwkSOLl4x%2F1laSmCNDcwWz9pO%2Fs7TpJQ0NPeaMhG1bWKMn%2BY7tgFBtzuJZfvbUEi%2F7JHMgUDtwgCZoHWChy1Q9F8usvS1F%2Bzcygh07WK7McsLATpfhI1N8Ce5jDGMYoXN9HGWiVZ%2F1MyO3DeiuOoiD9sjpb4WE%2B3S%2F4VFdIVoMrwbMAeBxf6t0XGre8%2B2xXw90TYfozoO3nI1NsPXwyY4Dfu3HnqF%2BrCByWf6QCWfLhv%2BNe4V6468DA2xjYV8CRXYk8o63qNrZkXU%2BxmmwnWJZQHiQMk5N7LHMgJIUP%2FmOep0gn1T435QzHsXaCMLj6u8EGOqUBJeSlIycfvN%2F5pmmwYlzRA5V1fNFFHe84CeYN8KbTa65Z1nc6kEqW5DhodE0HODCo0n32fP3exxTvR3GB6pbtUQtirRW13OsfdnpPZI%2FVV0%2F20xVz1%2FELWZAHwgEozStMDDZRxp5tHGuqxlZoY%2BiEs576rs%2BouhVk2mSdBse0pnB6%2FNCeg%2BLsor7R11ROthJ0JpFKFVYGMpYxcpSxPgUjTuHhX06s&X-Amz-Signature=1dfb783db05a8507272138fa2dd8d79df6b60f4aaf64a5a8162daa9bde628d68&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKDPFVWF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICk351sfLgMxyTBFxslUwDd0JeG%2BYjuFk5tE%2BXC%2F4oolAiEA86k%2BTjFpNgwQo1KIyoXZMNMkrf9Tk6JjqxEaxjFCjacqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxS8L%2BCgiolmpcicyrcA9akOiCrWwSy1MEBqLhj2HeEXITA23jHpdwfntKHz27StbLdcDm0Lso4dhjjCult0xl5ZJkdMU8s7%2Ft2Kj2WFtc6rOQ97K46kccvnna7VTm4sBoYUdx4H1KZAJDH1u4wcSOX%2B0zxw0gz0P5ruqH167ylAW0LDcJyR6mEqoU3gFMMbkzja8YdfBcb8CBRiUkdtIuNi4nzkaj%2Fzz0rr9yu07pCra0wtwa13Q8RRjpaE39XGdXkQTjy5ksrak67%2BzST%2F4Lzs%2FK18XMDrlQu7s9Z%2BpyhmqAN1VD2VnV%2FCbDedmmNlAoKc2OCopIpcr5c307iPZwkSOLl4x%2F1laSmCNDcwWz9pO%2Fs7TpJQ0NPeaMhG1bWKMn%2BY7tgFBtzuJZfvbUEi%2F7JHMgUDtwgCZoHWChy1Q9F8usvS1F%2Bzcygh07WK7McsLATpfhI1N8Ce5jDGMYoXN9HGWiVZ%2F1MyO3DeiuOoiD9sjpb4WE%2B3S%2F4VFdIVoMrwbMAeBxf6t0XGre8%2B2xXw90TYfozoO3nI1NsPXwyY4Dfu3HnqF%2BrCByWf6QCWfLhv%2BNe4V6468DA2xjYV8CRXYk8o63qNrZkXU%2BxmmwnWJZQHiQMk5N7LHMgJIUP%2FmOep0gn1T435QzHsXaCMLj6u8EGOqUBJeSlIycfvN%2F5pmmwYlzRA5V1fNFFHe84CeYN8KbTa65Z1nc6kEqW5DhodE0HODCo0n32fP3exxTvR3GB6pbtUQtirRW13OsfdnpPZI%2FVV0%2F20xVz1%2FELWZAHwgEozStMDDZRxp5tHGuqxlZoY%2BiEs576rs%2BouhVk2mSdBse0pnB6%2FNCeg%2BLsor7R11ROthJ0JpFKFVYGMpYxcpSxPgUjTuHhX06s&X-Amz-Signature=9bd1a4c1550e825b2450936ef74bcba2dd94833971b1900aa8bf029ea9b99c1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
