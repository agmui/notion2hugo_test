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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK2X4AN3%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIDVOtv5Ge%2Fsbz%2B%2BTsHUUJ%2Ba8BYlCH%2Bn2KLCu7iMxCoQVAiEA4N6Fn2w2e6AN6gsFP7cGX1MDbtQ29O%2BFfWlCLzCCBJ0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDGXso8L3z2pqdXpw2SrcA2TKJ7jizLSpNVH0ccy%2FDXTusqDX8nIPPdLGH%2FMMLsEA0%2FTxXm%2BM9DEuEn2a%2BytJZBy81%2FNV%2Bfzk6PBwBX1VIxxiMhSR48zJz6Ks3flhndwpjjMFYro1L49TaCorPG%2BYhaSYDyY%2Bn6yymF5fCAT2azWjTKEofRmEmd22GYqcbjvpGbjx5wy1e4PNlmEIx%2B3lsqQkJA%2FI6cyfj%2F%2BO4PIfRaIdgxApP0WLv%2Bljhc1hNLk8zl5hiG5ZVkMcEUeI5lAC7Oa8h8ayBdR2GYLDUWxxSy8Hv4Yq7yhx9JyCuLvsh7%2Bu3gMIrr6zF90DuvTOkBAfeetIl469w8vzHgv7jqR7sVIs5Ab2y8Z7%2F6KkyBcMZk7Pd6gGmzwccNz2am%2B07EOQvdQtZb8uGvmsmaQ2YlNgixrYcTAuMpkpw3Gip%2FF0qMbCNrw0WcsJmRdu7NOrMv%2F1iwaaqHeCWWZ%2BtGmkjiYP3SA0dDiH5flXa0FWlG1T2ib5YnUfP49%2FZiwTBOZRCDmDxOwN2HzgX4csy%2Bjqp%2BjaNijFKbQZvIIshidE7CJgIiqL2N8CTCydKSAsA1F1CI2Pnx7Pr%2BaR9qN4J2aS4W8GvSIlDxWH8kIDcI8H4dJd6jQ0z532wMRQdjpd1YZ3MJbyusIGOqUBeMS3XnZ42xO1ZHBdOfV8TlNV15Nua7Dwq%2BxzMZZnSGk0qt8ecpp6vKadySC6BeAtWj2iickJKKQsMCrUJN9inSoJX3%2BWwDuQ2u7WuONdZ4l5K9Qa8pAQIPOCux0tYwfzeLFNUwYwbwM8IDp2lRquO4luMpHAM7Eaz%2FVQSXhLdeSvElaX00iCdzMLl6nIexHAgHTloMFqxqDYbbj3lLFd1QXHcVx2&X-Amz-Signature=41107c32c473a987d411c39be77b35467869c18430abbf2355e6c409c40b288a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK2X4AN3%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIDVOtv5Ge%2Fsbz%2B%2BTsHUUJ%2Ba8BYlCH%2Bn2KLCu7iMxCoQVAiEA4N6Fn2w2e6AN6gsFP7cGX1MDbtQ29O%2BFfWlCLzCCBJ0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDGXso8L3z2pqdXpw2SrcA2TKJ7jizLSpNVH0ccy%2FDXTusqDX8nIPPdLGH%2FMMLsEA0%2FTxXm%2BM9DEuEn2a%2BytJZBy81%2FNV%2Bfzk6PBwBX1VIxxiMhSR48zJz6Ks3flhndwpjjMFYro1L49TaCorPG%2BYhaSYDyY%2Bn6yymF5fCAT2azWjTKEofRmEmd22GYqcbjvpGbjx5wy1e4PNlmEIx%2B3lsqQkJA%2FI6cyfj%2F%2BO4PIfRaIdgxApP0WLv%2Bljhc1hNLk8zl5hiG5ZVkMcEUeI5lAC7Oa8h8ayBdR2GYLDUWxxSy8Hv4Yq7yhx9JyCuLvsh7%2Bu3gMIrr6zF90DuvTOkBAfeetIl469w8vzHgv7jqR7sVIs5Ab2y8Z7%2F6KkyBcMZk7Pd6gGmzwccNz2am%2B07EOQvdQtZb8uGvmsmaQ2YlNgixrYcTAuMpkpw3Gip%2FF0qMbCNrw0WcsJmRdu7NOrMv%2F1iwaaqHeCWWZ%2BtGmkjiYP3SA0dDiH5flXa0FWlG1T2ib5YnUfP49%2FZiwTBOZRCDmDxOwN2HzgX4csy%2Bjqp%2BjaNijFKbQZvIIshidE7CJgIiqL2N8CTCydKSAsA1F1CI2Pnx7Pr%2BaR9qN4J2aS4W8GvSIlDxWH8kIDcI8H4dJd6jQ0z532wMRQdjpd1YZ3MJbyusIGOqUBeMS3XnZ42xO1ZHBdOfV8TlNV15Nua7Dwq%2BxzMZZnSGk0qt8ecpp6vKadySC6BeAtWj2iickJKKQsMCrUJN9inSoJX3%2BWwDuQ2u7WuONdZ4l5K9Qa8pAQIPOCux0tYwfzeLFNUwYwbwM8IDp2lRquO4luMpHAM7Eaz%2FVQSXhLdeSvElaX00iCdzMLl6nIexHAgHTloMFqxqDYbbj3lLFd1QXHcVx2&X-Amz-Signature=53fba16d8c08a296d531ee3aa7020dcc61c14728bd44cbc5da93c18f974a1fb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
