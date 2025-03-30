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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJ35SEA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIA%2BR6KQ2OJzXTwBjBCP116GqB%2BFpHIe5WRoD94LKHdD8AiBGiZ5N72yodworVJKxqBHHR1IlAFYAIhKqNHiGZMjGUCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG8f%2BH2MOaN6u0pRDKtwDLYmljjWdd%2FA5bOgijQSPehdwkr2p4k2CrmOJ79q%2BrRpDtmVwyBGDIWsy4W7xPxc2hcFpvXdu4p%2B7nRaeJOjPHF6%2BvsO6mdHkPJ%2BtxQSaFyFDoIHqWmcplrSJK96h%2BUEpiQ1Ctbk%2BqKfrKCqA0wow5FUAq9XcKIGascy0hySIG9ET27lsS1zLOocufCEmKyJsVRSu7P8JrwwFq7XZzxhqnwFg74b2qU4ltcpMisX3QRDhhowPGBggg5FhUPlaTcFbsQN4L3YSZNMmDVbxX9pA89bV%2FQj6oDvnui87A1bmvf3Y2yAyel0H3rRDkrRxNX9agPmvRh%2BVkz6NcI2AsQUheopdbVa%2Bqv6DpSvqMAE41vdwGYG48dJ8kyqNVfFMakKjKlq1u4qjx4SWivePWQa5Ph4pY7x3DhwjRGFa3M6dkDNY%2FE8xY43oBDtYgdY95Qsn76MwpYQecqwJw25yDKP1CxGC9R6DAfLBnS7Hi5plGIHyCT3ZZdtiHVeJjuWsvVL1H2832pFHP73W6XFBSVm9iAF7ubXmi%2FDHbQIoIS0IQrCpnDEf%2BCpm7bSldTMkU%2BJGwrlQUz4VK%2BB6Mujth7InFAFk0aecKC4MQaKWe1QP%2FrbCz0WOnqNGIjP84dYwkOqivwY6pgHuoEaQFg77Nk%2FTAPsU%2BGVMatb6r297zU0v1iWWVe26ie0srIuxXtJZbglbwOp9c5vUVOXI4qRdjS0tI2EQmbPesi0Yy53pao4JI4DD9oAqQqYEukM2ml%2BFf7khCQNRnoATMaowuv0aF9EhhnSNOiIlwK%2BcYMfky7%2Bg%2F3VIz%2F0JyHUSLVT0cb2DhhB2js65SgcaTtod8eB4HQ9DvTrbyjBFYum9d4FS&X-Amz-Signature=ef7431105ba01eb29d5a8f4b63c70e002713ac37110044457ca1e68218c0f590&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJ35SEA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIA%2BR6KQ2OJzXTwBjBCP116GqB%2BFpHIe5WRoD94LKHdD8AiBGiZ5N72yodworVJKxqBHHR1IlAFYAIhKqNHiGZMjGUCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG8f%2BH2MOaN6u0pRDKtwDLYmljjWdd%2FA5bOgijQSPehdwkr2p4k2CrmOJ79q%2BrRpDtmVwyBGDIWsy4W7xPxc2hcFpvXdu4p%2B7nRaeJOjPHF6%2BvsO6mdHkPJ%2BtxQSaFyFDoIHqWmcplrSJK96h%2BUEpiQ1Ctbk%2BqKfrKCqA0wow5FUAq9XcKIGascy0hySIG9ET27lsS1zLOocufCEmKyJsVRSu7P8JrwwFq7XZzxhqnwFg74b2qU4ltcpMisX3QRDhhowPGBggg5FhUPlaTcFbsQN4L3YSZNMmDVbxX9pA89bV%2FQj6oDvnui87A1bmvf3Y2yAyel0H3rRDkrRxNX9agPmvRh%2BVkz6NcI2AsQUheopdbVa%2Bqv6DpSvqMAE41vdwGYG48dJ8kyqNVfFMakKjKlq1u4qjx4SWivePWQa5Ph4pY7x3DhwjRGFa3M6dkDNY%2FE8xY43oBDtYgdY95Qsn76MwpYQecqwJw25yDKP1CxGC9R6DAfLBnS7Hi5plGIHyCT3ZZdtiHVeJjuWsvVL1H2832pFHP73W6XFBSVm9iAF7ubXmi%2FDHbQIoIS0IQrCpnDEf%2BCpm7bSldTMkU%2BJGwrlQUz4VK%2BB6Mujth7InFAFk0aecKC4MQaKWe1QP%2FrbCz0WOnqNGIjP84dYwkOqivwY6pgHuoEaQFg77Nk%2FTAPsU%2BGVMatb6r297zU0v1iWWVe26ie0srIuxXtJZbglbwOp9c5vUVOXI4qRdjS0tI2EQmbPesi0Yy53pao4JI4DD9oAqQqYEukM2ml%2BFf7khCQNRnoATMaowuv0aF9EhhnSNOiIlwK%2BcYMfky7%2Bg%2F3VIz%2F0JyHUSLVT0cb2DhhB2js65SgcaTtod8eB4HQ9DvTrbyjBFYum9d4FS&X-Amz-Signature=12ae6712c907e7ef479b196d9543abbbe413c87b683c69724955576cf9c6a215&X-Amz-SignedHeaders=host&x-id=GetObject)

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
