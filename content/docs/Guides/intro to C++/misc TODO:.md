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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCOBLKCX%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiPBsRG5qgh7Sxn62hupAbZ5o%2F5fMshHY763kD2pWB6wIhAMeuMxoGoX2LJLMS3%2FzyLcmGp%2F8eK9Jgf16UQK%2FCXQUFKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzm9kgJ6NneJmCre8Eq3AOxuTD3Jw9kQ1r%2B%2Bm2e3AYZ%2BbkBD2UGbCdG0TTCYk5QNuR8zduLkYe92RIEkTCoPuQWnZCJYnQ6JoBeIi1LhoHCwgiRnD%2BcTBZ5P1964ykNVfPifq1VT6jgcsrdZ5Be9t83n9xmcQNnDgAqF6SqkcZwD4sPUyqqUEGkFDDOb0wnnlxNqtzNcGiJqHspvApNHXPzd4ctQ9Ap5qFqR%2BkETVPRnoPvnEdYtyFAxjQXaNHRRH2oFTRrfDucGYYzziro4CjRYw6YCNantrMzdZsQ%2BeyWy26sBFh3IYvrS9GilL3BoeY1gVyxM%2FLvw1QJlEedVZBEBzZhp10ytbZpoeBMnPehEYtbJPeSEt%2B%2BgsiFOjw5XhsabVRYi2Z5HtvYJtNvsschD4Uw0Xgb6wcwe7zH95wmXgNp8s6ew7RyEvTr4il1rvr8AdrM36ugOKk47rGKsfvhzSq4D6k6hVkzD3n2AgS7fScWhiE%2BQRGwsmD6B3CXEzB%2FOs0nIzbXdja7ifeL0uS6DHMaa5s0Cv6sIR6Vp5OaiGD3lPgkX68fmDNP1eF1e7M3hyQmilM%2Fp86DY%2FrJnfX%2BbodxgCr63sXRcSwVioFp9yZsplh6KVPXCa%2FVvP%2BU8DamAeZYZ4uqz41V%2FDDbk%2FfABjqkAVRBT1z3djKYu12yGeuENKvmdYWv3roMZjRPFG5wieiVS%2FgCUj%2Frr79mULT5DT9r7TVi3HxCZy%2FXK1boPn%2BAGCKLHfHG1O1%2F2Azce3Zhau9oq%2BIcnOh%2BI6xN2F9rAaRwOlKNUImaiEpD%2B5%2BAvJ2SKq9MnCTZOfCCoeQ9qqm410lESnLuhEbAB8NasYTTzWyyJ6f6YK%2B70qXPEkMukIXRBTIw5onz&X-Amz-Signature=a57e00fb0d335b867bd85cb047bfafb2480ff782cf3e885ea9db3418402b3f3f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCOBLKCX%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiPBsRG5qgh7Sxn62hupAbZ5o%2F5fMshHY763kD2pWB6wIhAMeuMxoGoX2LJLMS3%2FzyLcmGp%2F8eK9Jgf16UQK%2FCXQUFKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzm9kgJ6NneJmCre8Eq3AOxuTD3Jw9kQ1r%2B%2Bm2e3AYZ%2BbkBD2UGbCdG0TTCYk5QNuR8zduLkYe92RIEkTCoPuQWnZCJYnQ6JoBeIi1LhoHCwgiRnD%2BcTBZ5P1964ykNVfPifq1VT6jgcsrdZ5Be9t83n9xmcQNnDgAqF6SqkcZwD4sPUyqqUEGkFDDOb0wnnlxNqtzNcGiJqHspvApNHXPzd4ctQ9Ap5qFqR%2BkETVPRnoPvnEdYtyFAxjQXaNHRRH2oFTRrfDucGYYzziro4CjRYw6YCNantrMzdZsQ%2BeyWy26sBFh3IYvrS9GilL3BoeY1gVyxM%2FLvw1QJlEedVZBEBzZhp10ytbZpoeBMnPehEYtbJPeSEt%2B%2BgsiFOjw5XhsabVRYi2Z5HtvYJtNvsschD4Uw0Xgb6wcwe7zH95wmXgNp8s6ew7RyEvTr4il1rvr8AdrM36ugOKk47rGKsfvhzSq4D6k6hVkzD3n2AgS7fScWhiE%2BQRGwsmD6B3CXEzB%2FOs0nIzbXdja7ifeL0uS6DHMaa5s0Cv6sIR6Vp5OaiGD3lPgkX68fmDNP1eF1e7M3hyQmilM%2Fp86DY%2FrJnfX%2BbodxgCr63sXRcSwVioFp9yZsplh6KVPXCa%2FVvP%2BU8DamAeZYZ4uqz41V%2FDDbk%2FfABjqkAVRBT1z3djKYu12yGeuENKvmdYWv3roMZjRPFG5wieiVS%2FgCUj%2Frr79mULT5DT9r7TVi3HxCZy%2FXK1boPn%2BAGCKLHfHG1O1%2F2Azce3Zhau9oq%2BIcnOh%2BI6xN2F9rAaRwOlKNUImaiEpD%2B5%2BAvJ2SKq9MnCTZOfCCoeQ9qqm410lESnLuhEbAB8NasYTTzWyyJ6f6YK%2B70qXPEkMukIXRBTIw5onz&X-Amz-Signature=ab81a9c856a3c2eabdcf0ff803960b673ca3539773a04bb4700cd8ab18be5a3d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
