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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCW5OOC%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFE4n31nlpcYX%2F6TMcR9EoVnwtGSqYTxKkYZecMcHFRXAiBl8TFOjtN4QHY%2BXJ2X3EHp8ORRWVasTOBslw%2F66tB%2B1CqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8NN1W4Hs3JjUvryPKtwD4ww1bUPDvxXBFUwGlzk2MNzhyodhDn2nxLnusMST3glt89rtjOecSYyhd8SeNezJjE5AicltCgs8%2B7RTFYSmw1hLK16INIFhx0gvNklYrRvRM0iBh51vuKafZj5Lnet5L3guHfGYaNLb7NDXVk3II8UEPo%2FYQFdk0tSwvQxdN5kiIo0tosh07umLDUiF%2FNE9kTrnQHlY7zw%2Fb%2B9%2Fvmnjk6oF1ujh51pGRVzDMfv3Qnepaa10sopj4Z0HaQBYehAZUROLhzOkwwC%2BDmtXzb16zqAHmCvq9sVVYSRBujbOFAVlv3IoacDu8yrfR8MjKZjEEQhe92qsKNjOrK4HHX3PLaCXz0M%2Fb%2F%2F2g44EVQY%2B4UQ%2BtrzQWLk%2FM6mSosmYfxxEVrdcOHDsQgbu82cDtEqfEukMi%2B00wAAvPPgW9nLM6mCC5z%2FZ%2BZ62B2%2Bl4hordRKixgSivGDJJM0ltwQUBcbxgbdCGm7XguQu%2BXPs%2BfNuE2MRffI22daEfLHdsQiRtL1BcIlA1UiMdFcf0DuJr84edCXTKoc6ci%2FgEPncDMwR8kgDqIYhFasQFCZYeLVVCy5fBXVkGc%2BTMjbWpXG3jPvxWP%2BvQnIa9Rrj%2FvHZY83yLSggc7xhPQ6pHF2PCvUwgpWzwwY6pgFUDlBoBrGB1k1szMrNTcbVgR0suF4yx5C%2FD6%2BlPbWikgYm7EuJg3uxa8Fh%2Ff5z4r1tiALZLNb8NNiCQpRZ%2FjyMlkR9nzoWRqtBQIQy3ahD9SjZiV%2BVvG%2FaoGoPTFCeaLsr%2FjTE1emI3dVKmmXWmjBwFG%2BUW1SnOK8NE7F6SK3CiV%2BSixhbZ27OR4FMJQF1g8u%2FOfPovlZLtWKfcLOIl3LqFXLFckCT&X-Amz-Signature=24115aed4ee3cfc3f0ccc0669d6d5e5d4bf04380efbe0ad05ce62da679d18a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCW5OOC%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFE4n31nlpcYX%2F6TMcR9EoVnwtGSqYTxKkYZecMcHFRXAiBl8TFOjtN4QHY%2BXJ2X3EHp8ORRWVasTOBslw%2F66tB%2B1CqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8NN1W4Hs3JjUvryPKtwD4ww1bUPDvxXBFUwGlzk2MNzhyodhDn2nxLnusMST3glt89rtjOecSYyhd8SeNezJjE5AicltCgs8%2B7RTFYSmw1hLK16INIFhx0gvNklYrRvRM0iBh51vuKafZj5Lnet5L3guHfGYaNLb7NDXVk3II8UEPo%2FYQFdk0tSwvQxdN5kiIo0tosh07umLDUiF%2FNE9kTrnQHlY7zw%2Fb%2B9%2Fvmnjk6oF1ujh51pGRVzDMfv3Qnepaa10sopj4Z0HaQBYehAZUROLhzOkwwC%2BDmtXzb16zqAHmCvq9sVVYSRBujbOFAVlv3IoacDu8yrfR8MjKZjEEQhe92qsKNjOrK4HHX3PLaCXz0M%2Fb%2F%2F2g44EVQY%2B4UQ%2BtrzQWLk%2FM6mSosmYfxxEVrdcOHDsQgbu82cDtEqfEukMi%2B00wAAvPPgW9nLM6mCC5z%2FZ%2BZ62B2%2Bl4hordRKixgSivGDJJM0ltwQUBcbxgbdCGm7XguQu%2BXPs%2BfNuE2MRffI22daEfLHdsQiRtL1BcIlA1UiMdFcf0DuJr84edCXTKoc6ci%2FgEPncDMwR8kgDqIYhFasQFCZYeLVVCy5fBXVkGc%2BTMjbWpXG3jPvxWP%2BvQnIa9Rrj%2FvHZY83yLSggc7xhPQ6pHF2PCvUwgpWzwwY6pgFUDlBoBrGB1k1szMrNTcbVgR0suF4yx5C%2FD6%2BlPbWikgYm7EuJg3uxa8Fh%2Ff5z4r1tiALZLNb8NNiCQpRZ%2FjyMlkR9nzoWRqtBQIQy3ahD9SjZiV%2BVvG%2FaoGoPTFCeaLsr%2FjTE1emI3dVKmmXWmjBwFG%2BUW1SnOK8NE7F6SK3CiV%2BSixhbZ27OR4FMJQF1g8u%2FOfPovlZLtWKfcLOIl3LqFXLFckCT&X-Amz-Signature=d99bc04d837a6f9ce86f310784886f6791638840f3306c8d6b90a141ce0fb16f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
