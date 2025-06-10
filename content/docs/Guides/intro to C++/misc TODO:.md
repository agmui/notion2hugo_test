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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHQ6GUTX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFNb3PTIiFsYGMi1qN7L33NS8X4w%2FEBIogxNWtyfsaeAIhANKcQNVYTiqEFLTr8Qm5efiexskkGZ69Bacf8shSza0PKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBzIeZaEaFwr2Yc7Iq3APckmhyu17mc3wNcbQ3ytz21ukCio%2BO3WPZ1Pd7%2B0JTVY6L%2Fy1h0E29g96ddoViUZRAizLR7M7eJUmHonU2SzgOw6KwYGPOgqQ9vgl3KeNDAua%2F7FqYrtOHoelxPfb3FvIlW4rCPEce91%2FoH%2FqHWkt9qIK0DRo%2BFpGM3acoNIdnbIgdXXdxpsdlDIr8w96kvCbFzOfSkJy3tkn2vvg5jhFIZkMBeQCSgv78xstgvlWrlorlmRx8wYYqiN1sP%2FxiZn7S5kXD4ptCP%2Bt55k83x62V1Yveeu52rMQ978syv9%2BZxa9o3txNk%2FsQ1A7RAVX0JSfJyGvlPFPFRXsBmnjeRVNICWAjnk70zcHy%2FOd2BJcTUDwA6DcxW0bvFBErzb6S3AB4C%2Bu2qk%2BVtRMOV53J3pim4LuAMcVTRGHSk1pMS2Cd1BGoJk%2F2O%2FOZkF2%2FFPEurAW%2FfbJPQW3ZQTu4zHTelNHjP4s3q5kNwfBhVECDqfvVERUYRMtWwSWdn3q%2F%2BJbil6CAI2uQ%2FOKx4yAIsGyXCMaVEXf7NHLvVZBuUkoN5lQRZ9%2BrMEtjvbs%2B7hcjTYQUm%2FoOeUHE1qXwSTfX7u15Wef%2Bg5z%2Bm%2FKs2cvnhVfcChFJPSKth9a5m6o0MzveozCSrp%2FCBjqkAUPpUv3Yfnx66wujRavSTC8xGTWEzS1fDZURbtVrtQ19SwQTxd2qwvlTaFIp6x8D3FlsP6UF3iDg0AqCFT%2FiObgfnOE9%2FU4nQMzYUWYWOY%2BBfAFfUvybHZOZDJ1%2F%2FrRQlHIdeyqZ8RiagyxgE1ADzz7tnLYDcQ%2FDLuniGSaf5Ufrl7QWk4Yt8dAGaPLl81KkBc%2BZK9ebMS9%2BjAdvQuiq9fZS1WRS&X-Amz-Signature=8ff3ce5ed4b24ec83af93eef49010877676dba71a8b4556e77065ea472ae0fdb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHQ6GUTX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFNb3PTIiFsYGMi1qN7L33NS8X4w%2FEBIogxNWtyfsaeAIhANKcQNVYTiqEFLTr8Qm5efiexskkGZ69Bacf8shSza0PKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBzIeZaEaFwr2Yc7Iq3APckmhyu17mc3wNcbQ3ytz21ukCio%2BO3WPZ1Pd7%2B0JTVY6L%2Fy1h0E29g96ddoViUZRAizLR7M7eJUmHonU2SzgOw6KwYGPOgqQ9vgl3KeNDAua%2F7FqYrtOHoelxPfb3FvIlW4rCPEce91%2FoH%2FqHWkt9qIK0DRo%2BFpGM3acoNIdnbIgdXXdxpsdlDIr8w96kvCbFzOfSkJy3tkn2vvg5jhFIZkMBeQCSgv78xstgvlWrlorlmRx8wYYqiN1sP%2FxiZn7S5kXD4ptCP%2Bt55k83x62V1Yveeu52rMQ978syv9%2BZxa9o3txNk%2FsQ1A7RAVX0JSfJyGvlPFPFRXsBmnjeRVNICWAjnk70zcHy%2FOd2BJcTUDwA6DcxW0bvFBErzb6S3AB4C%2Bu2qk%2BVtRMOV53J3pim4LuAMcVTRGHSk1pMS2Cd1BGoJk%2F2O%2FOZkF2%2FFPEurAW%2FfbJPQW3ZQTu4zHTelNHjP4s3q5kNwfBhVECDqfvVERUYRMtWwSWdn3q%2F%2BJbil6CAI2uQ%2FOKx4yAIsGyXCMaVEXf7NHLvVZBuUkoN5lQRZ9%2BrMEtjvbs%2B7hcjTYQUm%2FoOeUHE1qXwSTfX7u15Wef%2Bg5z%2Bm%2FKs2cvnhVfcChFJPSKth9a5m6o0MzveozCSrp%2FCBjqkAUPpUv3Yfnx66wujRavSTC8xGTWEzS1fDZURbtVrtQ19SwQTxd2qwvlTaFIp6x8D3FlsP6UF3iDg0AqCFT%2FiObgfnOE9%2FU4nQMzYUWYWOY%2BBfAFfUvybHZOZDJ1%2F%2FrRQlHIdeyqZ8RiagyxgE1ADzz7tnLYDcQ%2FDLuniGSaf5Ufrl7QWk4Yt8dAGaPLl81KkBc%2BZK9ebMS9%2BjAdvQuiq9fZS1WRS&X-Amz-Signature=0e7393b7178e15b1eed8b459b519b0a55b35ea0d66a5e0ae764c1f9442bf3f66&X-Amz-SignedHeaders=host&x-id=GetObject)

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
