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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5F4ZKSI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAM7O66tNgPW2w4e%2FxXPXIhX3grnKc2BqbVaCJCkGGOAIgFIXWXQ0dX2I23TS8Q1311N36DAZm25rptuNiBxqXQggq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMpjs30134YgCATBvCrcAxSBjJpxcinY4pcWdJSKMn%2FABtzsidCRtVkTPrd6U7bmQ0UxRp5aG15pcXWU2MPnFeqWsK8GWaAEMwSibi%2BfJrCDYOV0bHAfodo1TUodwTPV6r1MZIVP4h1gomNf2Nvt7oPaCKSxROZYrLaBcP02PDFWLe6dCobZr9OHHrenCuYKSDLZBqAKGstRYn4um%2B0OILIJAjjIjGjiXghiS3PaEPmz%2FKcgdll77FzttyidfhmYVBT%2BkO%2B3Orlzgm7DCbQI5wZ4Q5l4a1p6lVRjiVdXmNFVJA3LUfM9k1BGtGeSwlLEmNywN%2Bjq2EvRLND0f22snX%2F%2Fr7l%2Bqfe%2BZCJMW%2FiEodTmdq2CDkPMHLApC6lLXsoPjC3Beq7NNDRlD0uKPKLqYxif6EdNYcJ051%2FRQHo0VxQEssQ1kzSo5Vh47dC65ojQ5FxMFh2wIOcKXEc1Wq4Aa81EBRa7zUxaawazfolybhxWPKee%2Bwu0AGae3go9dhSPKeav%2FIXTt%2BMQiq2quHf2PTbhwkRKIesTdm9AofKUtGUAiY62aNScy6VsbFmzuUbPYcpplRZvRUiZL8dx4jyVYOWRrZZjuEvomsgKTHsCb9fP4x46kBUGx77aeif0%2FlG8MIVh9yvm%2FQr0JVufMKTZvsQGOqUBMhE9Ez%2BlfaFjGjEVhtTIdO3RWM3%2F%2FZZubkclW5hTbQTGBZkZAPDxWaAK8WOos%2BjpszG3k1RrzU5zD9inPb1lKD0bbv9px41ZpFDfKw312fa2AzjnzgYmz4NHQk1bmPWsEpv69IM4SklVrBDzwHFgT2vZLqPfptWkWQw9SNN8rTWiVk7EAFwC95DPHzy9ZGC9r9osvVzJuxFE1i1li9WqfZFoaao1&X-Amz-Signature=8ee1ca346f58797f3d3ff46b8c5dd5c0f336fe677e8eee2cb186a6edbae259fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5F4ZKSI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAM7O66tNgPW2w4e%2FxXPXIhX3grnKc2BqbVaCJCkGGOAIgFIXWXQ0dX2I23TS8Q1311N36DAZm25rptuNiBxqXQggq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMpjs30134YgCATBvCrcAxSBjJpxcinY4pcWdJSKMn%2FABtzsidCRtVkTPrd6U7bmQ0UxRp5aG15pcXWU2MPnFeqWsK8GWaAEMwSibi%2BfJrCDYOV0bHAfodo1TUodwTPV6r1MZIVP4h1gomNf2Nvt7oPaCKSxROZYrLaBcP02PDFWLe6dCobZr9OHHrenCuYKSDLZBqAKGstRYn4um%2B0OILIJAjjIjGjiXghiS3PaEPmz%2FKcgdll77FzttyidfhmYVBT%2BkO%2B3Orlzgm7DCbQI5wZ4Q5l4a1p6lVRjiVdXmNFVJA3LUfM9k1BGtGeSwlLEmNywN%2Bjq2EvRLND0f22snX%2F%2Fr7l%2Bqfe%2BZCJMW%2FiEodTmdq2CDkPMHLApC6lLXsoPjC3Beq7NNDRlD0uKPKLqYxif6EdNYcJ051%2FRQHo0VxQEssQ1kzSo5Vh47dC65ojQ5FxMFh2wIOcKXEc1Wq4Aa81EBRa7zUxaawazfolybhxWPKee%2Bwu0AGae3go9dhSPKeav%2FIXTt%2BMQiq2quHf2PTbhwkRKIesTdm9AofKUtGUAiY62aNScy6VsbFmzuUbPYcpplRZvRUiZL8dx4jyVYOWRrZZjuEvomsgKTHsCb9fP4x46kBUGx77aeif0%2FlG8MIVh9yvm%2FQr0JVufMKTZvsQGOqUBMhE9Ez%2BlfaFjGjEVhtTIdO3RWM3%2F%2FZZubkclW5hTbQTGBZkZAPDxWaAK8WOos%2BjpszG3k1RrzU5zD9inPb1lKD0bbv9px41ZpFDfKw312fa2AzjnzgYmz4NHQk1bmPWsEpv69IM4SklVrBDzwHFgT2vZLqPfptWkWQw9SNN8rTWiVk7EAFwC95DPHzy9ZGC9r9osvVzJuxFE1i1li9WqfZFoaao1&X-Amz-Signature=646bae5b71302027f35ccdc96e7b4a7e704df3f4c328121ed812cfd790258002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
