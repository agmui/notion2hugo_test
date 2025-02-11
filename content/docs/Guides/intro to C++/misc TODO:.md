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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656RVD5OK%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBL%2BNM0SWC6waU6R49hCpUvTq5Oey6fV0SGRiCNC2u2oAiBo3NG2XGr7KEyMNgJlfylAea%2Fu505CyHngQXbZnl7BDiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM10Sdpc5kr7wPjr4AKtwD95GNfu31X9S4xdJs9FlBSp%2F%2FL533qzLOB8VKdFI8xE67MzKWBNuiZOkiV2%2B8fdXSbuZPMwES6MVv1OOcPheDAgrqR9Oi9IzNNNbdT3ZDoNa18TEk%2Bl0%2FPX%2BO5J0Zy9kpLtcNcmJaCMd2kA4E4pXYiJiGedUvjuncYJKIzskE60T1IWP3EibzxW%2BRC725N7yFMIpocdmF%2BLcVEmN1jZRjE1oL6GDm%2FLQ9hrGLprmlrX2K1SGTwIW2%2BwaF0TGbCSmwi%2B2F1Jll9LgccfwiIBgVZC62fNGJ95bOBY%2FvWwLAwjQTg4cELbS0mM2CB0LwROkTarw5N3CN9sF70wfXd76tVL%2Bgr%2Bqe%2B4o0mB3VXvjej9ugG7VJpPJ4FoAvb2kPBMibVpIRvFQ3BeUZ1RUkHKI9MJ8185zwnsCXMdTN3CS2%2BVuzAr8ToPDGADyIXLpyRrW5LDrvysG331UlOlhhZi858K406tiQrrE2qvc00mmu71DtY7UznU1ZGAGJKljpxmyNIB3jNQMph%2BWH0ahXIXCOeVPQ0ucWLKFSihwVBD74c7LSuiw6TK%2F8YC0TdGmiR1F%2BSYKD6P%2BN1Ljchg8%2F5O5D0ro7t%2BF2BdLjzxRpUBGf5YW%2BCglytbivbK1JOIIwtciuvQY6pgEAVZ4MuoJ84nVYQ%2BTlU%2FJNWAL0l0PkDDACTK6eIg4O5IH3Q9Q5Wuln3mN%2FSujPpwmJkFQP0tNPDvgD8GRGV4civCL1FQnKTq4qb7HuAmfzCD2kCZLF4Heq8bIfNqsFQDV5sGMzzUhGbCPAVJCkShhIWTNj5bIw2dpSo8uMoQOSZVGt4meLnxsqMJ0s6oJkpf4H8gKYI8kmXPuXZBgaTCzSo1nQyciP&X-Amz-Signature=fee3504bc0effca2d431567b483357e0a601f2ea03c11fdd9dc9167a9001625e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656RVD5OK%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBL%2BNM0SWC6waU6R49hCpUvTq5Oey6fV0SGRiCNC2u2oAiBo3NG2XGr7KEyMNgJlfylAea%2Fu505CyHngQXbZnl7BDiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM10Sdpc5kr7wPjr4AKtwD95GNfu31X9S4xdJs9FlBSp%2F%2FL533qzLOB8VKdFI8xE67MzKWBNuiZOkiV2%2B8fdXSbuZPMwES6MVv1OOcPheDAgrqR9Oi9IzNNNbdT3ZDoNa18TEk%2Bl0%2FPX%2BO5J0Zy9kpLtcNcmJaCMd2kA4E4pXYiJiGedUvjuncYJKIzskE60T1IWP3EibzxW%2BRC725N7yFMIpocdmF%2BLcVEmN1jZRjE1oL6GDm%2FLQ9hrGLprmlrX2K1SGTwIW2%2BwaF0TGbCSmwi%2B2F1Jll9LgccfwiIBgVZC62fNGJ95bOBY%2FvWwLAwjQTg4cELbS0mM2CB0LwROkTarw5N3CN9sF70wfXd76tVL%2Bgr%2Bqe%2B4o0mB3VXvjej9ugG7VJpPJ4FoAvb2kPBMibVpIRvFQ3BeUZ1RUkHKI9MJ8185zwnsCXMdTN3CS2%2BVuzAr8ToPDGADyIXLpyRrW5LDrvysG331UlOlhhZi858K406tiQrrE2qvc00mmu71DtY7UznU1ZGAGJKljpxmyNIB3jNQMph%2BWH0ahXIXCOeVPQ0ucWLKFSihwVBD74c7LSuiw6TK%2F8YC0TdGmiR1F%2BSYKD6P%2BN1Ljchg8%2F5O5D0ro7t%2BF2BdLjzxRpUBGf5YW%2BCglytbivbK1JOIIwtciuvQY6pgEAVZ4MuoJ84nVYQ%2BTlU%2FJNWAL0l0PkDDACTK6eIg4O5IH3Q9Q5Wuln3mN%2FSujPpwmJkFQP0tNPDvgD8GRGV4civCL1FQnKTq4qb7HuAmfzCD2kCZLF4Heq8bIfNqsFQDV5sGMzzUhGbCPAVJCkShhIWTNj5bIw2dpSo8uMoQOSZVGt4meLnxsqMJ0s6oJkpf4H8gKYI8kmXPuXZBgaTCzSo1nQyciP&X-Amz-Signature=8f1933d49c0fed7214f3d1b8d30808d4037b76285a322358ade77ff3e36d89f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
