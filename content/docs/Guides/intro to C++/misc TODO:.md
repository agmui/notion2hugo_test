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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V7TNGD7%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFQRl9Wh6mzFz4lyYgQaGEWtvLizb2pJn%2FHgcj6MHyC5AiAJPUgL8xpDKsjiLgYlxr7%2Ftxf0vJ%2FsY%2Fn4NEm%2B1SAbBCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMRHE48x%2BYtgyYLrXuKtwDRICiRA1Q018nE3WjVEvi7yo%2BjSF4Im4A07BpGsJyt3NCuXcY%2BmKiGS73EPV9eWtqAwoiNYm%2Bqvk4rj0LtvgdEC5DWTe3Ck0oSDU5WywoHv0R0ERu30yKzLq%2BFr8Yg3lk3fhj6mpsewGIKpG15VluCjzhY%2FVH52pNSrFMZ2FBv%2F%2FfXDROGIyo6TjLvCO8NfRejqDmW93S5QpQeYiGMkxm33byHw092L74PzSnevg9BIaAgeQebxwuh0zb7BMMP%2BqTLcaMqzt1FJb9e%2Ft0TIVJThSSH0vUcxfHAr2rcleOx4P8Nbx7lorKB9qIwC7oIwGz5ysj3qbRCh0hw9vHW24TplfK7kYMrzadesndD6WCpTpEEUGFuH%2BtBdls%2FP8W2ABLtcg3ojY44tbokuVE2VS3m2mKz5O2P%2BANvNtCVVkqsGOey%2FWSCmgWzZGqENYqgK%2FhpXu0h%2FzoNxfvlAuMHZJ7Rp4J8WhctrrdhHzqBc53IWiRkmIsDGdrnmBdkwYOT94D8Un7uQrPW6IgKMuB7Vxo8ezHBWKCyvwJ%2FtiXPsZgGuj%2BRrwpu5G73RPlQVaFU7zNXoWHOcOjFLyJtxSG4LyV3hMU0lmQJlI1LUP%2FOLLHeX26CxU3JWSoLUhamEww6ruOvQY6pgGpt9FSP4Vya%2Fw0zQPuyC34gYDlvm0EvEXV1L%2BRn%2B6ildcF%2FlwfSxxFKspSjMjCMd2X3iyO%2Bw1HRr%2BH5opvvraAC%2FMEWz7MFvxWwoMhXbEW%2F%2FKgIIKNEcm7QFHHQ71QujUppFPKWpVRPZIViMHIK4UNuUcjaaeqSgMpTKL4wT5bcL1LTmXu%2FZJVc1lHTC%2BP7a%2FOO4wsTXVqdS085LHEfpS8w12eSo4B&X-Amz-Signature=fd0a98af40d155910cdaa7df766205a5c2709c86f906ac943504cb2af12b3a12&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V7TNGD7%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFQRl9Wh6mzFz4lyYgQaGEWtvLizb2pJn%2FHgcj6MHyC5AiAJPUgL8xpDKsjiLgYlxr7%2Ftxf0vJ%2FsY%2Fn4NEm%2B1SAbBCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMRHE48x%2BYtgyYLrXuKtwDRICiRA1Q018nE3WjVEvi7yo%2BjSF4Im4A07BpGsJyt3NCuXcY%2BmKiGS73EPV9eWtqAwoiNYm%2Bqvk4rj0LtvgdEC5DWTe3Ck0oSDU5WywoHv0R0ERu30yKzLq%2BFr8Yg3lk3fhj6mpsewGIKpG15VluCjzhY%2FVH52pNSrFMZ2FBv%2F%2FfXDROGIyo6TjLvCO8NfRejqDmW93S5QpQeYiGMkxm33byHw092L74PzSnevg9BIaAgeQebxwuh0zb7BMMP%2BqTLcaMqzt1FJb9e%2Ft0TIVJThSSH0vUcxfHAr2rcleOx4P8Nbx7lorKB9qIwC7oIwGz5ysj3qbRCh0hw9vHW24TplfK7kYMrzadesndD6WCpTpEEUGFuH%2BtBdls%2FP8W2ABLtcg3ojY44tbokuVE2VS3m2mKz5O2P%2BANvNtCVVkqsGOey%2FWSCmgWzZGqENYqgK%2FhpXu0h%2FzoNxfvlAuMHZJ7Rp4J8WhctrrdhHzqBc53IWiRkmIsDGdrnmBdkwYOT94D8Un7uQrPW6IgKMuB7Vxo8ezHBWKCyvwJ%2FtiXPsZgGuj%2BRrwpu5G73RPlQVaFU7zNXoWHOcOjFLyJtxSG4LyV3hMU0lmQJlI1LUP%2FOLLHeX26CxU3JWSoLUhamEww6ruOvQY6pgGpt9FSP4Vya%2Fw0zQPuyC34gYDlvm0EvEXV1L%2BRn%2B6ildcF%2FlwfSxxFKspSjMjCMd2X3iyO%2Bw1HRr%2BH5opvvraAC%2FMEWz7MFvxWwoMhXbEW%2F%2FKgIIKNEcm7QFHHQ71QujUppFPKWpVRPZIViMHIK4UNuUcjaaeqSgMpTKL4wT5bcL1LTmXu%2FZJVc1lHTC%2BP7a%2FOO4wsTXVqdS085LHEfpS8w12eSo4B&X-Amz-Signature=ef745d74b7ac02cdb11641fafdbd40ef54adf5a6261dddc9d16188ef7c3378b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
