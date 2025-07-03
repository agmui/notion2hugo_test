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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT3ZPKNR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDjtzlKKXvFEgKxilhaNdTiEwKjCW05qeKDHWyQ6GF1DAIhAIi%2BG1vwpIKr0TOx9Yv4FmcEuyUjo67zMA5LIMG%2BQpDlKv8DCBoQABoMNjM3NDIzMTgzODA1IgzHacl7GX4P%2FnsFwo0q3ANg7BTtNwCryMztsLVB10Q083g0%2FpGbO37XEekTOBwYqx2H69BAKjTKw4Wxh%2BTZW2wzZUoqGm%2FRREaVIr5Fz9rg28CCqpvXF9%2BSnOjTHqjad1qPBFV%2BTu0naVlGr%2B1TSxDOX9uTX4Wv5MuGrE80Xo3pIaXp95xWBx7C4x9fAMYahZ2QvF7ELPfVmluWCNdhufaISFS%2BfBIUSgQtGlJkiy56p46h1nGKL40se5pqDRfZjuF1hQ5MwPADS%2BmXHB7s7czp9L8l3Ffncqa9FTKBoIL15rDucTvulSlewD8jNHoUhrUxHZEH1RxuGTHmXPVVtMpACgdy8jtkaT7pkxO8ScqlQKAj1aYmfOt6OvwN5y4JHMz2svCeqt1nDgj4T7xgYFnmhPZo2PnDI9dJWg4WV3w7pBdt1t%2BP1zuMPWGbpVT%2FvS2x4%2BSnVcvdvRfUnXhVMRugqGzofdEtYr4drbeztWZeOM89y8N%2BldWhOgbFhWoPNeXcflf6ehiQ9kT5f03HPzx1vNPMADalFiPxC6XPY5YQxePleT%2BIr%2BD7gpMnOtm1rn36LwkIEP%2Bk%2BaUIo6YRUJ2MdiR%2BPR%2FOj8nfBxwFT%2FyHo6NgzIdErNNdACfqWRnRKg%2FY0TL5HbIf6IbGfTDY5prDBjqkAVrkC3OJ8yc6TSnMmfhBhoUpUo3CCahB%2FqieRMtjOdCLKmBfPGzDuNFfpolyAPFfGVsr3jUCezinTzPOQsZgEk0PWvm4t%2FXKJkhPHpfMKNIelgSRhb2NdhlGE63dxViosNbT9PdPv3dB8NVCd2W0fJDkqLVYciUW2NUkuglgc7z3v2SkwBOxG7lDqMAwUvhWQWpATCTo4pIPM7RbSon5nPaBaD6J&X-Amz-Signature=900f3e9735cf8f9f9c26222b808290d3aad24727e6cab589a443818242064c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT3ZPKNR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDjtzlKKXvFEgKxilhaNdTiEwKjCW05qeKDHWyQ6GF1DAIhAIi%2BG1vwpIKr0TOx9Yv4FmcEuyUjo67zMA5LIMG%2BQpDlKv8DCBoQABoMNjM3NDIzMTgzODA1IgzHacl7GX4P%2FnsFwo0q3ANg7BTtNwCryMztsLVB10Q083g0%2FpGbO37XEekTOBwYqx2H69BAKjTKw4Wxh%2BTZW2wzZUoqGm%2FRREaVIr5Fz9rg28CCqpvXF9%2BSnOjTHqjad1qPBFV%2BTu0naVlGr%2B1TSxDOX9uTX4Wv5MuGrE80Xo3pIaXp95xWBx7C4x9fAMYahZ2QvF7ELPfVmluWCNdhufaISFS%2BfBIUSgQtGlJkiy56p46h1nGKL40se5pqDRfZjuF1hQ5MwPADS%2BmXHB7s7czp9L8l3Ffncqa9FTKBoIL15rDucTvulSlewD8jNHoUhrUxHZEH1RxuGTHmXPVVtMpACgdy8jtkaT7pkxO8ScqlQKAj1aYmfOt6OvwN5y4JHMz2svCeqt1nDgj4T7xgYFnmhPZo2PnDI9dJWg4WV3w7pBdt1t%2BP1zuMPWGbpVT%2FvS2x4%2BSnVcvdvRfUnXhVMRugqGzofdEtYr4drbeztWZeOM89y8N%2BldWhOgbFhWoPNeXcflf6ehiQ9kT5f03HPzx1vNPMADalFiPxC6XPY5YQxePleT%2BIr%2BD7gpMnOtm1rn36LwkIEP%2Bk%2BaUIo6YRUJ2MdiR%2BPR%2FOj8nfBxwFT%2FyHo6NgzIdErNNdACfqWRnRKg%2FY0TL5HbIf6IbGfTDY5prDBjqkAVrkC3OJ8yc6TSnMmfhBhoUpUo3CCahB%2FqieRMtjOdCLKmBfPGzDuNFfpolyAPFfGVsr3jUCezinTzPOQsZgEk0PWvm4t%2FXKJkhPHpfMKNIelgSRhb2NdhlGE63dxViosNbT9PdPv3dB8NVCd2W0fJDkqLVYciUW2NUkuglgc7z3v2SkwBOxG7lDqMAwUvhWQWpATCTo4pIPM7RbSon5nPaBaD6J&X-Amz-Signature=c500dde71f3adf12620b08681a0db09b8872763b4fb13e167fd4f2596f39235f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
