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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBCOTQ6R%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIATU4GSNS5vG2qVZp31nSN8L723%2FE4Y9vczTkMCVXEPPAiBvfoanc9nBkDLNHCAWkfOtQdCvggkoIsXPNuDCGgW1ACqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZSuSf%2FAJK%2FWzarVLKtwDkpEc3pH4B7aJOy0pLlPS15CPVWBeCZIoWjGhquuP6hWUoQFWxvppwPVFEVkvnrXUBhPrAk7eD3w6GIBhNX1b7AylR9WED14Ubk0HYQLxt2smJsfnZtMF8bT%2Fy3ajOG%2FRYy3NU8bApjVjxTLUiU7Ry7nscNAHcKSwLv9%2BUxWWYIs1%2BHxhmVYe9uDV%2FRxoclivdaUmrvwJiPq2%2BGW8Qbgcy9Y%2FclocJxb26JH1vxIMuRzZUc0PUxosS8kIIeB2phEd2jO6s464LNfSk4GlQ4ZMdZ6xzzgfN%2Ful6qvynhM6oz86EW4sUrYp38RrN2XRzOiOBpz2KChpgDDGpivjMMO5CUC%2B4OgYQz9P4Zl7Dtc8DNSzYh90dmP2pYljnlBXxYknPAdHkf07YDdbG2JZerXErUFTnhdAFH2hP%2BED64aR%2BTXQpnZaAJb6DGNBIUuWluULYii9raj48ki2xFY84RbhVBVRE8EtEbWBVUf1ORVj0xXP%2FVXGbPd0A%2BAJWXbheQnoQLIZ2VYKvq5NUs%2BtdVALhpabCfpmk%2FwBIXLps9K2nt%2Fzmvpp3%2F9XVZ5vOqrKeaRVLMgF0Icl%2BZmJJIGlJW4jTDtEAM3GeTAMu8itSz%2FOlFYRnXxMb8qgNzx2Ljowt5SiwAY6pgGe1uSJ6tLP%2F%2FF7CqYBjPdLssk1Fsl9yu5DghlNaDwxV%2BN9kwLUSd%2F1oUFg0yLiSYwaX%2Fzbo7QDYo%2BhGxVL7E5LODh%2FkvV2hT9Ox%2F4A1z%2F38DLlKrHCNM2NCNdnt2Qs%2BaYdv9H7TaVVCVMIttlpDhdXLOa%2BPHxykzIu3ATRG2ELpQIaa%2BEdaLRA%2FUB3v4NtbIuuuSNX9SjXhtnZEeVSbraLjSNrqNSm&X-Amz-Signature=e1951c79fc1532afa804761d7162fbdbd82b811fa3470779a2fa1ae5da46579c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBCOTQ6R%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIATU4GSNS5vG2qVZp31nSN8L723%2FE4Y9vczTkMCVXEPPAiBvfoanc9nBkDLNHCAWkfOtQdCvggkoIsXPNuDCGgW1ACqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZSuSf%2FAJK%2FWzarVLKtwDkpEc3pH4B7aJOy0pLlPS15CPVWBeCZIoWjGhquuP6hWUoQFWxvppwPVFEVkvnrXUBhPrAk7eD3w6GIBhNX1b7AylR9WED14Ubk0HYQLxt2smJsfnZtMF8bT%2Fy3ajOG%2FRYy3NU8bApjVjxTLUiU7Ry7nscNAHcKSwLv9%2BUxWWYIs1%2BHxhmVYe9uDV%2FRxoclivdaUmrvwJiPq2%2BGW8Qbgcy9Y%2FclocJxb26JH1vxIMuRzZUc0PUxosS8kIIeB2phEd2jO6s464LNfSk4GlQ4ZMdZ6xzzgfN%2Ful6qvynhM6oz86EW4sUrYp38RrN2XRzOiOBpz2KChpgDDGpivjMMO5CUC%2B4OgYQz9P4Zl7Dtc8DNSzYh90dmP2pYljnlBXxYknPAdHkf07YDdbG2JZerXErUFTnhdAFH2hP%2BED64aR%2BTXQpnZaAJb6DGNBIUuWluULYii9raj48ki2xFY84RbhVBVRE8EtEbWBVUf1ORVj0xXP%2FVXGbPd0A%2BAJWXbheQnoQLIZ2VYKvq5NUs%2BtdVALhpabCfpmk%2FwBIXLps9K2nt%2Fzmvpp3%2F9XVZ5vOqrKeaRVLMgF0Icl%2BZmJJIGlJW4jTDtEAM3GeTAMu8itSz%2FOlFYRnXxMb8qgNzx2Ljowt5SiwAY6pgGe1uSJ6tLP%2F%2FF7CqYBjPdLssk1Fsl9yu5DghlNaDwxV%2BN9kwLUSd%2F1oUFg0yLiSYwaX%2Fzbo7QDYo%2BhGxVL7E5LODh%2FkvV2hT9Ox%2F4A1z%2F38DLlKrHCNM2NCNdnt2Qs%2BaYdv9H7TaVVCVMIttlpDhdXLOa%2BPHxykzIu3ATRG2ELpQIaa%2BEdaLRA%2FUB3v4NtbIuuuSNX9SjXhtnZEeVSbraLjSNrqNSm&X-Amz-Signature=3cc62a47df4ddf83e08f7552f298a459e52ac31f4ea501605b29f97d1082239c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
