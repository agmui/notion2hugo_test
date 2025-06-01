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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVDE3ME%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx4%2BOK%2F1uLZ1TES0Mq3WmkPJA5lahYQ1Mj7b%2BRmOWunwIhAOtHYSze3M3uf%2FRJXgUaX425tUdElQlsdS1BpoAmDCquKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKFnByVb6fdNMX774q3AM0xOfzmkqEKEEAYigw7qdS4rT7VDfN2pme0umVrU50Ul6HFPjYm01NgQw3TytkgZhBL9LqBw4QhwacW56k6Ml2WNUPthzCFO2z%2FTlY6w2RdCTvelzRF8colF7OZVgAJUVyQbtSLbMCgLWM3UiLlNXLwtXAzlbFo3fsuqee99V1Z4Bm1DRRWaWGibiIWyO0bR7RrzG5KnSIruRusKiAiTRQ%2BhtvBhsUZNVxxDjAHVet91Krmn0YVRc0teY9GOrEmYeEpNKia0heV0q6zI%2B55mf1qiaMnIE8%2FFeP76edsdtr4M6Ed7mUK0NzVZJKNsQq%2BZGgEVjTSvq0EibJH9FOk35PgkiXRMVeSb%2B8Kr5hjlgjdkObjrY1CEGFSuTT9mXgcUJhKE8u5waQ4LM45OWtd%2Bp2tOhknBVHBkGHTch9eEMCzbhb7nBLER8QM5oZ0KVULANpbxSKSm7Nom140iP00Ih56xtJkf%2BP3DeBD9658xgSVYg4IoyScVCmjwt%2F7Q0qeLoAXs33wm%2BTsG8Clnom6%2BZRMsWJYGSKzMJNtKuNuQcaIzVmeredWAr8LoB%2B0NGP1cOsKPxeRX0h6Ml%2Bu39vG3f2NTN%2Fx26mAI%2B22mMHDCyO%2FjL9SK0r6Gv0DXbA%2FDDoxO3BBjqkAbIVN7bXmgLf%2F2gTcfuRKozTlkYyb6MP%2FwCwS6YdaGcPMkKEpCeExoqKQJk7JbBTnhvDccQM4hntCbvxRJ1%2BSAN%2F9dwvSLzI9CN1QM7Ntcb7i6rmaygBr6IB%2BIjbMD2fN0pWEyc2qS7g%2Fhr8kHe0sXH9iadpFKAi4j9bN2A%2BKaAHSv0OjiOD2UbfQPCQXAIjdBXwlbZXO6MzgNXGcBrR%2By1s%2F8hX&X-Amz-Signature=556351230a965ebabd0528a9f128a8ca4af2ea9fb6f9f2ff9fb05b2a8907342c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVDE3ME%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx4%2BOK%2F1uLZ1TES0Mq3WmkPJA5lahYQ1Mj7b%2BRmOWunwIhAOtHYSze3M3uf%2FRJXgUaX425tUdElQlsdS1BpoAmDCquKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKFnByVb6fdNMX774q3AM0xOfzmkqEKEEAYigw7qdS4rT7VDfN2pme0umVrU50Ul6HFPjYm01NgQw3TytkgZhBL9LqBw4QhwacW56k6Ml2WNUPthzCFO2z%2FTlY6w2RdCTvelzRF8colF7OZVgAJUVyQbtSLbMCgLWM3UiLlNXLwtXAzlbFo3fsuqee99V1Z4Bm1DRRWaWGibiIWyO0bR7RrzG5KnSIruRusKiAiTRQ%2BhtvBhsUZNVxxDjAHVet91Krmn0YVRc0teY9GOrEmYeEpNKia0heV0q6zI%2B55mf1qiaMnIE8%2FFeP76edsdtr4M6Ed7mUK0NzVZJKNsQq%2BZGgEVjTSvq0EibJH9FOk35PgkiXRMVeSb%2B8Kr5hjlgjdkObjrY1CEGFSuTT9mXgcUJhKE8u5waQ4LM45OWtd%2Bp2tOhknBVHBkGHTch9eEMCzbhb7nBLER8QM5oZ0KVULANpbxSKSm7Nom140iP00Ih56xtJkf%2BP3DeBD9658xgSVYg4IoyScVCmjwt%2F7Q0qeLoAXs33wm%2BTsG8Clnom6%2BZRMsWJYGSKzMJNtKuNuQcaIzVmeredWAr8LoB%2B0NGP1cOsKPxeRX0h6Ml%2Bu39vG3f2NTN%2Fx26mAI%2B22mMHDCyO%2FjL9SK0r6Gv0DXbA%2FDDoxO3BBjqkAbIVN7bXmgLf%2F2gTcfuRKozTlkYyb6MP%2FwCwS6YdaGcPMkKEpCeExoqKQJk7JbBTnhvDccQM4hntCbvxRJ1%2BSAN%2F9dwvSLzI9CN1QM7Ntcb7i6rmaygBr6IB%2BIjbMD2fN0pWEyc2qS7g%2Fhr8kHe0sXH9iadpFKAi4j9bN2A%2BKaAHSv0OjiOD2UbfQPCQXAIjdBXwlbZXO6MzgNXGcBrR%2By1s%2F8hX&X-Amz-Signature=c4adacb58e6005a24d097c1fd10e5df95e27f9bcaec0718604d973a39ee92fd7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
