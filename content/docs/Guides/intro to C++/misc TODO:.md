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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BA4LGJ3%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIEDzmcmTshEMYvf%2Fph16a8GTn4NSBkhkeZ8kEDHVeg5cAiA7cGu27XLoIOkgH92yLNkDxH6T9C%2B0lBBstvyqNVCXdSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtEByTJVwtbW4AvLaKtwDCAQnLXZBZsVYyw1o8xPPmQq6WMBp9bSm3GsioKR0IAQIQBFu3iA8Bz9Xu63re8rb3UZbx5EAbPVJgVx8y73N4TEwKX%2Fkc9%2FkxckNKlRKS9%2BuvqDr%2BaXV7KL69VJvuHUiBBJh9ct%2BTetai0j27Q2Zqh9LerTxJyYa92YQbLUBuVmzx%2FH6aQMEKH%2FPcrDYZ%2BVZpuXCNxPtT3jUrRlZi8WhT%2B4GBSEamGZngSsasPePireg5v7pwfdizmdeZ2DKlPQpft3xXVOPPtev%2Fh9uvnxSPHaWE95JS2%2BVi1CpcqRm%2B8Bq5PJKHl22pz3Jhmjd%2FN91CDXbHOaMwXgnrIig7oiDRY8bUrISvVFuNTEuNIEMEk%2FyUOgpgY9x%2FoYckQQo4VGBkRjtW9wWfnImzzgLyqXax%2Fx%2B6LGsmjcTTfFyPG%2B7jmPofD48XddufSEbapvaFWH%2BeoNVPzhDdtvAzYXMGzXnkCt70oLb9O2hEOfp9pjEoSwlVetpOxdmYeMPJAHRdSMLIoBzaBwD%2F2%2FmVV7XGlT%2BisTfylX3ex1C4WGfsAfi4VN71Eff9%2Bw2aVRBijEnHzIXONedIIVREm7W8oZ01KYjajGieqSDyyP65RLDpzxi41HXWzh09KPseBk%2F7AUw%2FsqRxwY6pgFzFh%2BwVRv56VPbIsa6ynRDeZXcMDkW25KMpKHQL8lAtgRzf5cXw%2FoGwhbIrED6z1rUmlcp765A64ouaSTkzAlyLARXXQHNCNrDVbtoTikkqhCHC6E4S1j9m6DxEtI7ULzyaiBE3sWaXvxq6E7M826Dwlb2kiScm0qbhVKdChhzJzweXc96zX6MD8LWGgsuL06uVBFukGRXulyPivSyUpGm8xciyBaL&X-Amz-Signature=4e0d230d3a400ce793c223dfc2a0dfe4368c087701fb51d80069cd90383048a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BA4LGJ3%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIEDzmcmTshEMYvf%2Fph16a8GTn4NSBkhkeZ8kEDHVeg5cAiA7cGu27XLoIOkgH92yLNkDxH6T9C%2B0lBBstvyqNVCXdSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtEByTJVwtbW4AvLaKtwDCAQnLXZBZsVYyw1o8xPPmQq6WMBp9bSm3GsioKR0IAQIQBFu3iA8Bz9Xu63re8rb3UZbx5EAbPVJgVx8y73N4TEwKX%2Fkc9%2FkxckNKlRKS9%2BuvqDr%2BaXV7KL69VJvuHUiBBJh9ct%2BTetai0j27Q2Zqh9LerTxJyYa92YQbLUBuVmzx%2FH6aQMEKH%2FPcrDYZ%2BVZpuXCNxPtT3jUrRlZi8WhT%2B4GBSEamGZngSsasPePireg5v7pwfdizmdeZ2DKlPQpft3xXVOPPtev%2Fh9uvnxSPHaWE95JS2%2BVi1CpcqRm%2B8Bq5PJKHl22pz3Jhmjd%2FN91CDXbHOaMwXgnrIig7oiDRY8bUrISvVFuNTEuNIEMEk%2FyUOgpgY9x%2FoYckQQo4VGBkRjtW9wWfnImzzgLyqXax%2Fx%2B6LGsmjcTTfFyPG%2B7jmPofD48XddufSEbapvaFWH%2BeoNVPzhDdtvAzYXMGzXnkCt70oLb9O2hEOfp9pjEoSwlVetpOxdmYeMPJAHRdSMLIoBzaBwD%2F2%2FmVV7XGlT%2BisTfylX3ex1C4WGfsAfi4VN71Eff9%2Bw2aVRBijEnHzIXONedIIVREm7W8oZ01KYjajGieqSDyyP65RLDpzxi41HXWzh09KPseBk%2F7AUw%2FsqRxwY6pgFzFh%2BwVRv56VPbIsa6ynRDeZXcMDkW25KMpKHQL8lAtgRzf5cXw%2FoGwhbIrED6z1rUmlcp765A64ouaSTkzAlyLARXXQHNCNrDVbtoTikkqhCHC6E4S1j9m6DxEtI7ULzyaiBE3sWaXvxq6E7M826Dwlb2kiScm0qbhVKdChhzJzweXc96zX6MD8LWGgsuL06uVBFukGRXulyPivSyUpGm8xciyBaL&X-Amz-Signature=8d7ee500809fdb13e6a2ec669c3514cc54261c56b1895cb80b0f41d36760f4b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
