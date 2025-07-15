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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG5CDBNN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFgEsUbklj%2F1zRXI1yIMFreKLOZ3KmnKb3GhXnamwFTSAiEAqYdcP5UOOXEEgh7OT6qHagX4bFu%2BlaCaLf1L0EwzOn8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIkKetSy9blryw7xkircA2B5qDKx%2BCUBiPQce7S8%2FgsYWxrpflPWgRCTLIR8jElmRNT7iyTsy6B42dGHUpgyOuAVbxXHei923Ghf5ZFOnMgf7tz1y3vhbDc5mG5WniWrf2sljcZb9mqfDBxy1zeUhZWuUctvPSrdiy8gZQYz593raFPzmOOjmuGnqOn9QNTKi2Cur5NnHUXsumA5rScyELo5TsuiRXBQZIfFJWjFTI%2Brx4oG4TMfAWYuVn1u1ozj%2F0YWiAL3xvjFWPFgp1W%2F5FVmAX%2Fo5cHDIMKNBT3z8xRdb6nBOeRgxYe7xOJqU%2B8trHvemViH0hjMZIwj340SaOpyl1i6JWOaYmRFQpxR7IZHS1Eru3CJ4Nts%2B0hD0YftZ3nHBtlcFYRYPiyU2FkeGay26TUKZ778WAkU1iXILVusBO%2Frm1sk9zusKmL9XG26eDjnoVsj%2BKWi4a0u4EZb8hpJkpXLMh4mJDfxeOv2dQvF2yfPyIIswCijt5DeGevIcMe7fUPyk98EyrwhHy%2FOHgK9y3PeaJ81JCYCU%2FqBW46gDdnRR7bldHpSfM%2BOpuxGXQaa8t%2BvdeE9gQkwrakcYnuR6P6VgRIjOWzgDO66sq6JRFMa03HeFKVMayDtlt2PDBvIOmJTPF3D3oZBMOz22sMGOqUB9pjBEyN5KhPuNy2H9Doz50VHdhO%2BSXu2mZ5CU0m%2FXxudysPnncsbsy%2B53f9IsmoMZBVliF13eRmnLmZEQ8%2FXSLj7HnWnPYrEUrwXFeYbZyyyvh5Wijg%2BloL9S9knYExEgZ2WwNPtaYQ4Y5%2BIfsCGMcD2WmS9hJTno5CWHx8hNGmh7UiWd9fohcSsXcWtMnrSQgh1KfenWq5qzrcVt3XtLb8Ki3Ck&X-Amz-Signature=74f98370a427350529fb88bb11323c9f759ba0aa390cf1f53a519bebf6281490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG5CDBNN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFgEsUbklj%2F1zRXI1yIMFreKLOZ3KmnKb3GhXnamwFTSAiEAqYdcP5UOOXEEgh7OT6qHagX4bFu%2BlaCaLf1L0EwzOn8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIkKetSy9blryw7xkircA2B5qDKx%2BCUBiPQce7S8%2FgsYWxrpflPWgRCTLIR8jElmRNT7iyTsy6B42dGHUpgyOuAVbxXHei923Ghf5ZFOnMgf7tz1y3vhbDc5mG5WniWrf2sljcZb9mqfDBxy1zeUhZWuUctvPSrdiy8gZQYz593raFPzmOOjmuGnqOn9QNTKi2Cur5NnHUXsumA5rScyELo5TsuiRXBQZIfFJWjFTI%2Brx4oG4TMfAWYuVn1u1ozj%2F0YWiAL3xvjFWPFgp1W%2F5FVmAX%2Fo5cHDIMKNBT3z8xRdb6nBOeRgxYe7xOJqU%2B8trHvemViH0hjMZIwj340SaOpyl1i6JWOaYmRFQpxR7IZHS1Eru3CJ4Nts%2B0hD0YftZ3nHBtlcFYRYPiyU2FkeGay26TUKZ778WAkU1iXILVusBO%2Frm1sk9zusKmL9XG26eDjnoVsj%2BKWi4a0u4EZb8hpJkpXLMh4mJDfxeOv2dQvF2yfPyIIswCijt5DeGevIcMe7fUPyk98EyrwhHy%2FOHgK9y3PeaJ81JCYCU%2FqBW46gDdnRR7bldHpSfM%2BOpuxGXQaa8t%2BvdeE9gQkwrakcYnuR6P6VgRIjOWzgDO66sq6JRFMa03HeFKVMayDtlt2PDBvIOmJTPF3D3oZBMOz22sMGOqUB9pjBEyN5KhPuNy2H9Doz50VHdhO%2BSXu2mZ5CU0m%2FXxudysPnncsbsy%2B53f9IsmoMZBVliF13eRmnLmZEQ8%2FXSLj7HnWnPYrEUrwXFeYbZyyyvh5Wijg%2BloL9S9knYExEgZ2WwNPtaYQ4Y5%2BIfsCGMcD2WmS9hJTno5CWHx8hNGmh7UiWd9fohcSsXcWtMnrSQgh1KfenWq5qzrcVt3XtLb8Ki3Ck&X-Amz-Signature=37d7748cdbabc47ef8cc1e8ced3d489a06c5702da8e9274a71e1d20585a5f496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
