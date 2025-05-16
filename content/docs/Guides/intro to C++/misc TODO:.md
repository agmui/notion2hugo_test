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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MATKC5J%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFUDbf4CQxy%2BpVv3QrQTtbbrR2%2BweJ3kRfZAnK%2BzQEOgIgTCyxi3T2DIDGxSvxrhYUyecqFYoY4HIUCEzzqLEzKU8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDK4qozbemgr%2B4XYE1SrcA9LMRnJZlJI4WiNtxrHvNvCmKU8QYZ2jU14aTWogcHPHORlY%2FQMvTZyqNpvaXro7PEMyPa6A9LpEFx1qWYa3l%2FZ0aNcgF13XU1VwFcLdJI%2BcEz8jmZlaitsw5ucie5C54YLKQYkaO8wQGxMoTFa3i4ErkK98c%2BPGCbviiVoGhXBnReNpoOmLzMmiCOiBdWVUPNu1fpVm8csJd9MvHgCSPya2xRZcvw1CycAg2lL1M8r6bA2HRxuz%2B6tKvqrkffwj7MuM3MVPESOR2CInC28gfIsA7S8eQsxlOoh1XXDgCePCXETyOmNmBuJYwzeXeU51AHkhd%2B62oO1Mm1Bjaoi501whvzkxPw6Yn4u%2BAldnkazyjJr7RkeA9SBQcTv1YbTI0KnMKu%2FcKSzWX96oFlzox3mp3EKPvwQEAj5Goj1yzMf8hmmOZyu0KNa%2FSfQ0KZ530GLXR8w0WmlbzMMv7CB3QBaEUwluXMHpgPByuu3UbL3biioNme3cgeBS9KwYa6yROFaw55jAerbwc5VxYd2fDX%2FXFWxiG0FMmlsow%2FsTukOfPunu952HJilBZFobDv%2BH0ZrQT3VWxRPhqB5qzCwT1kxuTNXz%2F9lwKbxBlKNGGdpLT%2Fz93HoGTj3OSoApMJ2bncEGOqUBE5qJ7VjhkWEhbCsrto63NKp5arN%2BlM4ythg1k4A2T205K4d0JaR5wmA8Hkcvc6Y8QvPUG2GgU8k2opSzbxVL0AuT5zx1xOdcaa%2FfJW9Uy7Xj8xtjjUynkEcqtJK9Pf8quo%2F5SWW9aDuWPy8tcvVeXB2IHXG%2BACFej35YHFw5Hss1DAwamVvEFHusS3hBSpMlpm1kQeP3duaJI6%2Fq9Ql02MUZWTAQ&X-Amz-Signature=52f8518c5854983bf80a44a52ffa88f64a144a7dc5a4019c3c1f0c9d9f7e5fde&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MATKC5J%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFUDbf4CQxy%2BpVv3QrQTtbbrR2%2BweJ3kRfZAnK%2BzQEOgIgTCyxi3T2DIDGxSvxrhYUyecqFYoY4HIUCEzzqLEzKU8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDK4qozbemgr%2B4XYE1SrcA9LMRnJZlJI4WiNtxrHvNvCmKU8QYZ2jU14aTWogcHPHORlY%2FQMvTZyqNpvaXro7PEMyPa6A9LpEFx1qWYa3l%2FZ0aNcgF13XU1VwFcLdJI%2BcEz8jmZlaitsw5ucie5C54YLKQYkaO8wQGxMoTFa3i4ErkK98c%2BPGCbviiVoGhXBnReNpoOmLzMmiCOiBdWVUPNu1fpVm8csJd9MvHgCSPya2xRZcvw1CycAg2lL1M8r6bA2HRxuz%2B6tKvqrkffwj7MuM3MVPESOR2CInC28gfIsA7S8eQsxlOoh1XXDgCePCXETyOmNmBuJYwzeXeU51AHkhd%2B62oO1Mm1Bjaoi501whvzkxPw6Yn4u%2BAldnkazyjJr7RkeA9SBQcTv1YbTI0KnMKu%2FcKSzWX96oFlzox3mp3EKPvwQEAj5Goj1yzMf8hmmOZyu0KNa%2FSfQ0KZ530GLXR8w0WmlbzMMv7CB3QBaEUwluXMHpgPByuu3UbL3biioNme3cgeBS9KwYa6yROFaw55jAerbwc5VxYd2fDX%2FXFWxiG0FMmlsow%2FsTukOfPunu952HJilBZFobDv%2BH0ZrQT3VWxRPhqB5qzCwT1kxuTNXz%2F9lwKbxBlKNGGdpLT%2Fz93HoGTj3OSoApMJ2bncEGOqUBE5qJ7VjhkWEhbCsrto63NKp5arN%2BlM4ythg1k4A2T205K4d0JaR5wmA8Hkcvc6Y8QvPUG2GgU8k2opSzbxVL0AuT5zx1xOdcaa%2FfJW9Uy7Xj8xtjjUynkEcqtJK9Pf8quo%2F5SWW9aDuWPy8tcvVeXB2IHXG%2BACFej35YHFw5Hss1DAwamVvEFHusS3hBSpMlpm1kQeP3duaJI6%2Fq9Ql02MUZWTAQ&X-Amz-Signature=133087f9b99ddba1616cc64dc930427f16076d58da8ac5f730146b00f44b0638&X-Amz-SignedHeaders=host&x-id=GetObject)

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
