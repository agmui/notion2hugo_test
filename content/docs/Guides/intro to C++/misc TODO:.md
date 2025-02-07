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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBMSRZP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIDkMPUwmsPJOnD4S5kiNOSu5jtip8rCCOkbrL1py2rhsAiEAqBaax1Z3ZZjwU5XnQv739BnKBrW3lVOj%2BXz6mQoxUfYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDB3L9Q8agaG%2FHGb4UyrcA13xFc0MJKuqyPtHNuXsAxl98YO5GIqaZjLxeI%2FZYSgto6uCbTdASLfQ254eNTXav6UVDMzCHptZAxNKv4hWZQr6yvo%2ByzL9IPnL0dUBWTSXDV7F05maFYmpd9bPqG05rlvn2Ms%2F81NFvQ7Z0qtGZhsSsE9C1%2BMO9X5d7W38YD3jCmuqz7bfCoi%2BSvLCzG7ovH0QF2V5JIzADLKmCQ0HT6bp3jKvVoYbhDrIbKzUeNtPWy1rgbUFzzCx%2FJENYUpfDKrsgXAl0x4eyFL39fmVlU2T314dxkX%2BEAYTabhrK5Rc91SbMuWXduLeTBs6EjYVezSYuVa4fhFtEC840Ed8G1gayVG59nD%2F%2B%2BDSiVdvE3i3%2FfmeD0OYW%2F7kl%2BZNZNARTgRdMXP6UFJXBOM3EyuvLz%2FtevwPa3nKDZlElXPVKMkBELadV148%2BDiP%2Bt1ai%2B2%2FPdHTVPsJKVT1539HwgT%2BSppGZNjg3BEixes6S8v3pgewb6GBsr7so0Gdph8Oovrwsf0O3UA%2B%2BRToqwhcTxIVs%2FxjzBmg7CR79SVDXtOj1rbYMV67zlhOFHPQcOUWQjLys4UBThKH5FiJBdIFybLfbVOw%2BR7RFTXHiVPrmxq9TnXbN01CGnmD5nyGqNQwMILflr0GOqUBFtIrsMxAFg64eysfHx73FEhboQR9c84aJdlH4AcHeJpHkYUTjQjg%2FNhvOJG7JqwSSfsq7jbNk4DDH0JSaDr5I01NRALlTw44mcvkaqnYqFBnEia8MCZZVUr8tdBK4ri9PpYzT4WPtEJpZ%2FqPTNoeUEp6KVlhUqWVmAc4SQF0Ae2fPxIWrp7UrCrKoVSWOxUpJZv9zD1R3XkFvM3xCd1tyuuLeY3t&X-Amz-Signature=ded77ff7a0f79358b78b9cf210dfaeee335e150b05965ad83323b2dc9002e4cb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBMSRZP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIDkMPUwmsPJOnD4S5kiNOSu5jtip8rCCOkbrL1py2rhsAiEAqBaax1Z3ZZjwU5XnQv739BnKBrW3lVOj%2BXz6mQoxUfYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDB3L9Q8agaG%2FHGb4UyrcA13xFc0MJKuqyPtHNuXsAxl98YO5GIqaZjLxeI%2FZYSgto6uCbTdASLfQ254eNTXav6UVDMzCHptZAxNKv4hWZQr6yvo%2ByzL9IPnL0dUBWTSXDV7F05maFYmpd9bPqG05rlvn2Ms%2F81NFvQ7Z0qtGZhsSsE9C1%2BMO9X5d7W38YD3jCmuqz7bfCoi%2BSvLCzG7ovH0QF2V5JIzADLKmCQ0HT6bp3jKvVoYbhDrIbKzUeNtPWy1rgbUFzzCx%2FJENYUpfDKrsgXAl0x4eyFL39fmVlU2T314dxkX%2BEAYTabhrK5Rc91SbMuWXduLeTBs6EjYVezSYuVa4fhFtEC840Ed8G1gayVG59nD%2F%2B%2BDSiVdvE3i3%2FfmeD0OYW%2F7kl%2BZNZNARTgRdMXP6UFJXBOM3EyuvLz%2FtevwPa3nKDZlElXPVKMkBELadV148%2BDiP%2Bt1ai%2B2%2FPdHTVPsJKVT1539HwgT%2BSppGZNjg3BEixes6S8v3pgewb6GBsr7so0Gdph8Oovrwsf0O3UA%2B%2BRToqwhcTxIVs%2FxjzBmg7CR79SVDXtOj1rbYMV67zlhOFHPQcOUWQjLys4UBThKH5FiJBdIFybLfbVOw%2BR7RFTXHiVPrmxq9TnXbN01CGnmD5nyGqNQwMILflr0GOqUBFtIrsMxAFg64eysfHx73FEhboQR9c84aJdlH4AcHeJpHkYUTjQjg%2FNhvOJG7JqwSSfsq7jbNk4DDH0JSaDr5I01NRALlTw44mcvkaqnYqFBnEia8MCZZVUr8tdBK4ri9PpYzT4WPtEJpZ%2FqPTNoeUEp6KVlhUqWVmAc4SQF0Ae2fPxIWrp7UrCrKoVSWOxUpJZv9zD1R3XkFvM3xCd1tyuuLeY3t&X-Amz-Signature=aa641c97cae58eedea564636a0c05b58b224d0901a3c59594b767e0745d61d77&X-Amz-SignedHeaders=host&x-id=GetObject)

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
