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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIEEYFVY%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGomSc2NdY4A%2FqF%2BUAzWcXoIezhNA9t3kI5%2BGThQWcuqAiEAv4RUFujBPS3tiulzlE3W%2BthJd1GRVQRjluXZAe3pwrQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCfzd1MkcNe3DDuy4ircA8ot4R%2FppOQOYal90HIGpDyMSZdMm6mzDaL3KAVu0e%2FE8pXMuRWmCM%2BMeLg48Tj%2FRvCHhmUw9RrPAUwnJXKGPTtbB%2BnBeFxcQRqObjCyaO%2B3HCvNVIyynZT8OojcvsG1%2B1Y3sUjEMlGP4VTtWjC%2BxCt0CaCSEKaAOIs9Qh51UsIOrmg%2BvLXMRhyNINW%2BEysEDajJtC9g0BcDG2SgW3tJlbBpF%2BPycE1r4fiBqr8yVJgal1fN1hAymcfAfNJLJS5wtbRU5q4x5swt%2BELLfZDsxQhTjgftisFf7bzWAr0nOybQT%2BmFFNGKXD2OmoZXga9Cuh9DVtM%2BnIXbEBprxE5ps%2BGltT0YTYMOuY0R%2FclBr0gno9WvqSSd82Q4wBHpvD77dVbbigN3Evmgn2OrBayQP6u8GYJBXV0aItkhilsNuctpz3ZpSwkFsOeD7PReXuCk0U0QJyVmv%2Fdex9WKMJUSoM%2BxMV9z5Q4QksRaMh8xhsv5dl8eZd9cl%2F5axUxXqrgH2%2BA93iqJ7xofSsVzZ5go5w7ML7JlJ%2FgF0pAL38QYKexX2SREs9JVTaOxKtMYFuKVKYP%2BD7PbyDn3nJmpObEiO2tpQV7B7SyyVKmojp64JW3wUDowce4izrDRK0xPMOKF1MMGOqUBIpxYUtX4bFyosskQTUc6vbn0nJtgNb%2BrAh4q9xsjVm3J1usVWQL298NWAKqah%2F5EsNPYTuG9nPSrhts3rlLuTVpX4A8gkUwrtbh8%2BbIxafVujQlYYNuAAqPto915DKpkDapAfhwZqR4Bu59rBLfRwZFbxeZYodClAS8Mhaana2PNDomEtwquEDETF1KP6G2NnOutUqyUAhFmbs9UYn7NMkYdX13U&X-Amz-Signature=e34848ac716de77f017445a7f58fa3d7f17d4b6c428f1beae3389f319afc7467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIEEYFVY%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGomSc2NdY4A%2FqF%2BUAzWcXoIezhNA9t3kI5%2BGThQWcuqAiEAv4RUFujBPS3tiulzlE3W%2BthJd1GRVQRjluXZAe3pwrQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCfzd1MkcNe3DDuy4ircA8ot4R%2FppOQOYal90HIGpDyMSZdMm6mzDaL3KAVu0e%2FE8pXMuRWmCM%2BMeLg48Tj%2FRvCHhmUw9RrPAUwnJXKGPTtbB%2BnBeFxcQRqObjCyaO%2B3HCvNVIyynZT8OojcvsG1%2B1Y3sUjEMlGP4VTtWjC%2BxCt0CaCSEKaAOIs9Qh51UsIOrmg%2BvLXMRhyNINW%2BEysEDajJtC9g0BcDG2SgW3tJlbBpF%2BPycE1r4fiBqr8yVJgal1fN1hAymcfAfNJLJS5wtbRU5q4x5swt%2BELLfZDsxQhTjgftisFf7bzWAr0nOybQT%2BmFFNGKXD2OmoZXga9Cuh9DVtM%2BnIXbEBprxE5ps%2BGltT0YTYMOuY0R%2FclBr0gno9WvqSSd82Q4wBHpvD77dVbbigN3Evmgn2OrBayQP6u8GYJBXV0aItkhilsNuctpz3ZpSwkFsOeD7PReXuCk0U0QJyVmv%2Fdex9WKMJUSoM%2BxMV9z5Q4QksRaMh8xhsv5dl8eZd9cl%2F5axUxXqrgH2%2BA93iqJ7xofSsVzZ5go5w7ML7JlJ%2FgF0pAL38QYKexX2SREs9JVTaOxKtMYFuKVKYP%2BD7PbyDn3nJmpObEiO2tpQV7B7SyyVKmojp64JW3wUDowce4izrDRK0xPMOKF1MMGOqUBIpxYUtX4bFyosskQTUc6vbn0nJtgNb%2BrAh4q9xsjVm3J1usVWQL298NWAKqah%2F5EsNPYTuG9nPSrhts3rlLuTVpX4A8gkUwrtbh8%2BbIxafVujQlYYNuAAqPto915DKpkDapAfhwZqR4Bu59rBLfRwZFbxeZYodClAS8Mhaana2PNDomEtwquEDETF1KP6G2NnOutUqyUAhFmbs9UYn7NMkYdX13U&X-Amz-Signature=dfc2dcca140b9a60f99a9795993730a6bc9e47a12d1b24e4fcc6753f447e6285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
