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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHYLEYWP%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCqRl02IrbQCBHeOttPCk%2FT4fLS0EeEKvMcMtqsBfHAOQIhANsqKOazbsGxsJwEl7ZJVJTF5eIENvasm9JnkTAb92p3KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FV%2BctMrgJnDnI1Ewq3ANghOqntM731uTobdvE3zU5sz%2BsVoTgOPu7xUiuLqW0POsEq81Na3WPKJ%2FxEfc3Nb0%2Fda17bnHEcs7XRCWR9abfeMqc3SHQediUeWLpsDnLUMG34ThN0Nf4bY60yp0hYTsmQ8gvtj7cbPz0UFyZVOZNB7bx%2BWlCltbmTbzcZJJhbtv3sVIJv%2B%2BGLr44%2BxnjSCHEewEAyDXFdHjwVleOgFR3NeyjlItpeuHhzgIF%2FsKFmHpPDy%2BMOBlBhe6ndL2AhkhGZc8qfZR7Xh788xo1dZ2Xw5zuvlmXzlZiC3M1erKT9kIW5RxfQDU18xRd8fzvlU7KeDKjXyTedEgizE89StI2qNMvKJXpLgHaMDDh2b%2F%2F6i2qk7nT%2BpW%2Fhrl1MwG7b6zOHUt%2F1g9djQTpBfYGNNtr0x8eBRWjdWCu%2FrrSmYzupGhVsdqQSfLZBcYsRrJhHFFE96MivNZDljl1in8XIGWEUfDAbES%2FzPY3DFrmShlUeIGfjzoDueBjq9qdnYFKxCgdm6aAQw5EKifaJpf8D7kiCV%2FwxKzsnRCKhnxCvmLsljVk9W%2B%2B3vvuUpRYHRud4nmOmCAgbQAHSZ8bF69tHqgN0ECnoBGu2cWwnZht6QmSxJCjSCLZEeVBwsuuyTC4wr%2FBBjqkAWvfD%2BrRWu1n4g3AIJs66TYSBw%2FsCVMvjZfnk8Jb3BdZauitHDP785xfWs2v438c1GrA%2FfqcADuAxtR3so4n7DXE%2BV9X72CPtpPRNzrK32%2BwH4oLAfwWvpoXDQFE7Kb9SDI%2FSd6ZDh8fr1GQcdP%2BN8u45A8LH55o5uo1uj0rqyvMoUZPOKxPnDlGhub5QdpiW7Zqkj1T9lleJ0BtcDijInW6JnkH&X-Amz-Signature=0fd563073ee273c9741ddc32c8c168440835ba23d81d7b30473dd4107037b17c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHYLEYWP%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCqRl02IrbQCBHeOttPCk%2FT4fLS0EeEKvMcMtqsBfHAOQIhANsqKOazbsGxsJwEl7ZJVJTF5eIENvasm9JnkTAb92p3KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FV%2BctMrgJnDnI1Ewq3ANghOqntM731uTobdvE3zU5sz%2BsVoTgOPu7xUiuLqW0POsEq81Na3WPKJ%2FxEfc3Nb0%2Fda17bnHEcs7XRCWR9abfeMqc3SHQediUeWLpsDnLUMG34ThN0Nf4bY60yp0hYTsmQ8gvtj7cbPz0UFyZVOZNB7bx%2BWlCltbmTbzcZJJhbtv3sVIJv%2B%2BGLr44%2BxnjSCHEewEAyDXFdHjwVleOgFR3NeyjlItpeuHhzgIF%2FsKFmHpPDy%2BMOBlBhe6ndL2AhkhGZc8qfZR7Xh788xo1dZ2Xw5zuvlmXzlZiC3M1erKT9kIW5RxfQDU18xRd8fzvlU7KeDKjXyTedEgizE89StI2qNMvKJXpLgHaMDDh2b%2F%2F6i2qk7nT%2BpW%2Fhrl1MwG7b6zOHUt%2F1g9djQTpBfYGNNtr0x8eBRWjdWCu%2FrrSmYzupGhVsdqQSfLZBcYsRrJhHFFE96MivNZDljl1in8XIGWEUfDAbES%2FzPY3DFrmShlUeIGfjzoDueBjq9qdnYFKxCgdm6aAQw5EKifaJpf8D7kiCV%2FwxKzsnRCKhnxCvmLsljVk9W%2B%2B3vvuUpRYHRud4nmOmCAgbQAHSZ8bF69tHqgN0ECnoBGu2cWwnZht6QmSxJCjSCLZEeVBwsuuyTC4wr%2FBBjqkAWvfD%2BrRWu1n4g3AIJs66TYSBw%2FsCVMvjZfnk8Jb3BdZauitHDP785xfWs2v438c1GrA%2FfqcADuAxtR3so4n7DXE%2BV9X72CPtpPRNzrK32%2BwH4oLAfwWvpoXDQFE7Kb9SDI%2FSd6ZDh8fr1GQcdP%2BN8u45A8LH55o5uo1uj0rqyvMoUZPOKxPnDlGhub5QdpiW7Zqkj1T9lleJ0BtcDijInW6JnkH&X-Amz-Signature=a6bb44a6480f62ff5262182da4e647631ac5582976c60477c2669f85df48cd2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
