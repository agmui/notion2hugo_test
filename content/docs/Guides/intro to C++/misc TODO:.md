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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6CV3R6P%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdFPAH1V3hICTgSH4VWQK3t4yiuCGj%2BdS9ZrkqcN9DfAiEA65A8pkDmRkZFFHHCNAPAqrLgrCxeGat88clXE6jMefoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAlNRYaaPPTPyCzKJCrcA2Gk2L2NxwD53EZ3rPMpdC3HrRGbEGvtPmAtF0sT6VfHpsMO33HQ8k54cehgYmCjcWmuA8YDbUVpEEXBmwgaVPNegqdNchm9bxxXdAGXr6S3I0HG3GC0QtHuVrqPGAaIXj38Fx24UE2vtpVzLF3sCHOFKw9VSbpSCfNo9igX9cC%2B8jshizUlWW4Zt%2BfnJ07gxcINPhpgxvWBlENY1oRqylFaf84Gj2dwqonMomDhouZEt3%2FsEGXSrQMAcHzh8p9NpEQaETlc3VCbsJyVX3hnayttNOrP67ZvaxR6cgMfhogBfDPP%2FfNkkEDYmGTTXxKbD%2BRtRoLM7zur6Pto7nvkx%2BxEyUGnF7l5oe10%2FDm2em63ty52%2F%2F97X8k5t1RCmFu5fRHrbw6C933H1Ni3AQR69wZ2XJYr%2BgzarnUFI%2B1Sq4wvpocDsNcPphxvFOwYJYV3dL02vXeWdKZK9Bq38PkXKfGJFVT06%2F%2F0NJFLVrFgcWQM%2FDTnixWBS%2FLQhMmJERoev6rzdGluxTROl5JyH11%2FHL0g5vTXABuSXiNyha5ovyoozWWhie%2FlzcqZnZ55iFn25RF%2BLEHnudAGn%2BWiEKADPSUpC8WY6Py8%2BXWtWyrXRMz2nWJ6XYdFp4p%2BlfxMMMj6j8IGOqUBV%2Fnwto36fzZ2uiBiBbhHwLPAtYqa7J%2F9%2B8hGjC38Te2RftN5ohM1KIMVoJKYBZn3xrp5OJyq8%2FgbOLSPdEuWZike7VITXEgLSAuT8ZclH3bu9UeA%2BSldYZasSi5Hoaud%2FhJ0Ejpbofesykuv0wdjOn2umOvShhqbJ%2B5fUePjCT55uIGQQ74MvDMWT4XdzVmblzE6hiUrQ36%2FnxUa9W2NmOLxeEZn&X-Amz-Signature=c1fccb73fdd20ad812e68afa76c7073f9edd8bbb8b186d9914cba604f7940dc6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6CV3R6P%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdFPAH1V3hICTgSH4VWQK3t4yiuCGj%2BdS9ZrkqcN9DfAiEA65A8pkDmRkZFFHHCNAPAqrLgrCxeGat88clXE6jMefoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAlNRYaaPPTPyCzKJCrcA2Gk2L2NxwD53EZ3rPMpdC3HrRGbEGvtPmAtF0sT6VfHpsMO33HQ8k54cehgYmCjcWmuA8YDbUVpEEXBmwgaVPNegqdNchm9bxxXdAGXr6S3I0HG3GC0QtHuVrqPGAaIXj38Fx24UE2vtpVzLF3sCHOFKw9VSbpSCfNo9igX9cC%2B8jshizUlWW4Zt%2BfnJ07gxcINPhpgxvWBlENY1oRqylFaf84Gj2dwqonMomDhouZEt3%2FsEGXSrQMAcHzh8p9NpEQaETlc3VCbsJyVX3hnayttNOrP67ZvaxR6cgMfhogBfDPP%2FfNkkEDYmGTTXxKbD%2BRtRoLM7zur6Pto7nvkx%2BxEyUGnF7l5oe10%2FDm2em63ty52%2F%2F97X8k5t1RCmFu5fRHrbw6C933H1Ni3AQR69wZ2XJYr%2BgzarnUFI%2B1Sq4wvpocDsNcPphxvFOwYJYV3dL02vXeWdKZK9Bq38PkXKfGJFVT06%2F%2F0NJFLVrFgcWQM%2FDTnixWBS%2FLQhMmJERoev6rzdGluxTROl5JyH11%2FHL0g5vTXABuSXiNyha5ovyoozWWhie%2FlzcqZnZ55iFn25RF%2BLEHnudAGn%2BWiEKADPSUpC8WY6Py8%2BXWtWyrXRMz2nWJ6XYdFp4p%2BlfxMMMj6j8IGOqUBV%2Fnwto36fzZ2uiBiBbhHwLPAtYqa7J%2F9%2B8hGjC38Te2RftN5ohM1KIMVoJKYBZn3xrp5OJyq8%2FgbOLSPdEuWZike7VITXEgLSAuT8ZclH3bu9UeA%2BSldYZasSi5Hoaud%2FhJ0Ejpbofesykuv0wdjOn2umOvShhqbJ%2B5fUePjCT55uIGQQ74MvDMWT4XdzVmblzE6hiUrQ36%2FnxUa9W2NmOLxeEZn&X-Amz-Signature=9793f5e7bd86d7b8e694f13e4a046bfa01ffeeaf9c61337a5bcfe0da14f5f702&X-Amz-SignedHeaders=host&x-id=GetObject)

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
